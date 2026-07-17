from __future__ import annotations

import contextlib
import csv
import html as html_lib
import os
import re
import sys
import threading
import time
from collections import OrderedDict, deque
from collections.abc import Sequence
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path

from .pathutil import is_within_root, safe_subpath
from .registry import STATUS_DONE, STATUS_FAILED
from .template import find_setup_file
from .warn import warn


def _default_adapter():
    from .solvers import get_solver_adapter

    return get_solver_adapter(None)


ANOMALY_FILES_DEFAULT = ("csauto.stderr", "run_solver.log", "listing", "csauto.stdout")
ANOMALY_PATTERNS: list[tuple[str, re.Pattern[str]]] = [
    (
        "error",
        re.compile(
            r"(fatal error|error detected|error:|segmentation fault|sigsegv|floating point exception|"
            r"abort(?:ed|ing)?|core dumped|traceback|exception|out of memory|not enough memory|"
            r"\bnan\b|\binf\b|overflow|underflow|failed to|\berror\b(?!\s*=\s*[-+0-9.]))",
            re.IGNORECASE,
        ),
    ),
    (
        "warn",
        re.compile(
            r"(warning|divergence|unstable|not converged|cfl|clipping|limit reached)",
            re.IGNORECASE,
        ),
    ),
]
ANOMALY_SEVERITY = {"error": 2, "warn": 1, "info": 0}
ANOMALY_CONTEXT_DEFAULT = 6
ANOMALY_CONTEXT_MAX = 50
ANOMALY_FILE_CACHE_MAX = 256
ANOMALY_FILE_HITS_MAX = 512
ANOMALY_IGNORE_PATTERNS = [
    re.compile(r"\bno error detected\b", re.IGNORECASE),
    re.compile(r"\bno errors detected\b", re.IGNORECASE),
]
RESTART_ITER_PATTERNS = [
    re.compile(r"\bnt_prev\b\s*[:=]\s*(\d+)", re.IGNORECASE),
    re.compile(r"NUMBER OF THE PREVIOUS TIME STEP\s+nt_prev\s*=\s*(\d+)", re.IGNORECASE),
]
RESTART_TIME_PATTERNS = [
    re.compile(r"\bt_prev\b\s*[:=]\s*([-+0-9.eE]+)", re.IGNORECASE),
    re.compile(r"physical time\s+([-+0-9.eE]+)", re.IGNORECASE),
]
ANOMALY_CACHE_LOCK = threading.RLock()
ANOMALY_FILE_CACHE: OrderedDict[str, AnomalyFileCache] = OrderedDict()


@dataclass
class CachedAnomaly:
    severity: str
    line: str
    line_html: str
    before_lines: tuple[str, ...]
    after_lines: list[str] = field(default_factory=list)
    tail_index: int = 0
    pos: int = 0


@dataclass
class AnomalyFileCache:
    path: Path
    device: int | None
    inode: int | None
    offset: int
    size: int
    mtime: float
    total_lines: int
    recent_lines: deque[str]
    hits: deque[CachedAnomaly]
    pending_hits: deque[CachedAnomaly]


def highlight_anomaly_line(line: str) -> tuple[str, str] | None:
    """Highlight anomaly matches in a line and return (html, severity)."""
    if not line.strip():
        return None
    for pattern in ANOMALY_IGNORE_PATTERNS:
        if pattern.search(line):
            return None
    matches: list[tuple[int, int]] = []
    severity: str | None = None
    for label, pattern in ANOMALY_PATTERNS:
        for match in pattern.finditer(line):
            matches.append((match.start(), match.end()))
            if severity is None or ANOMALY_SEVERITY[label] > ANOMALY_SEVERITY.get(severity, -1):
                severity = label
    if not matches:
        return None
    matches.sort(key=lambda span: span[0])
    merged: list[list[int]] = []
    for start, end in matches:
        if merged and start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    parts: list[str] = []
    last = 0
    for start, end in merged:
        if start > last:
            parts.append(html_lib.escape(line[last:start]))
        parts.append(f'<span class="err-hit">{html_lib.escape(line[start:end])}</span>')
        last = end
    parts.append(html_lib.escape(line[last:]))
    return "".join(parts), severity or "info"


def _new_anomaly_file_cache(path: Path, *, device: int | None, inode: int | None) -> AnomalyFileCache:
    return AnomalyFileCache(
        path=path,
        device=device,
        inode=inode,
        offset=0,
        size=0,
        mtime=0.0,
        total_lines=0,
        recent_lines=deque(maxlen=ANOMALY_CONTEXT_MAX),
        hits=deque(),
        pending_hits=deque(),
    )


def _cache_file_key(path: Path) -> str:
    try:
        return str(path.resolve())
    except OSError:
        return str(path)


def _get_anomaly_file_cache(path: Path) -> tuple[str, AnomalyFileCache | None]:
    key = _cache_file_key(path)
    with ANOMALY_CACHE_LOCK:
        cache = ANOMALY_FILE_CACHE.get(key)
        if cache is not None:
            ANOMALY_FILE_CACHE.move_to_end(key)
        return key, cache


def _store_anomaly_file_cache(key: str, cache: AnomalyFileCache) -> None:
    with ANOMALY_CACHE_LOCK:
        ANOMALY_FILE_CACHE[key] = cache
        ANOMALY_FILE_CACHE.move_to_end(key)
        while len(ANOMALY_FILE_CACHE) > ANOMALY_FILE_CACHE_MAX:
            ANOMALY_FILE_CACHE.popitem(last=False)


def _drop_anomaly_file_cache(path: Path) -> None:
    key = _cache_file_key(path)
    with ANOMALY_CACHE_LOCK:
        ANOMALY_FILE_CACHE.pop(key, None)


def _append_anomaly_hit(cache: AnomalyFileCache, hit: CachedAnomaly) -> None:
    cache.hits.append(hit)
    cache.pending_hits.append(hit)
    while len(cache.hits) > ANOMALY_FILE_HITS_MAX:
        dropped = cache.hits.popleft()
        with contextlib.suppress(ValueError):
            cache.pending_hits.remove(dropped)


def _scan_anomaly_file(path: Path) -> AnomalyFileCache | None:
    try:
        stat = path.stat()
    except OSError:
        _drop_anomaly_file_cache(path)
        return None

    cache_key, cache = _get_anomaly_file_cache(path)
    same_file = (
        cache is not None
        and cache.device == getattr(stat, "st_dev", None)
        and cache.inode == getattr(stat, "st_ino", None)
        and stat.st_size >= cache.offset
    )
    if not same_file:
        cache = _new_anomaly_file_cache(
            path,
            device=getattr(stat, "st_dev", None),
            inode=getattr(stat, "st_ino", None),
        )

    if stat.st_size > cache.offset:
        try:
            with path.open("rb") as handle:
                handle.seek(cache.offset)
                chunk = handle.read()
        except OSError:
            return None
        if chunk:
            for raw_line in chunk.decode("utf-8", errors="ignore").splitlines():
                escaped = html_lib.escape(raw_line)
                # Collect after-context lines for pending anomaly hits.
                # Each pending hit accumulates escaped lines until it reaches the max.
                still_pending: deque[CachedAnomaly] = deque()
                while cache.pending_hits:
                    pending = cache.pending_hits.popleft()
                    pending.after_lines.append(escaped)
                    if len(pending.after_lines) < ANOMALY_CONTEXT_MAX:
                        still_pending.append(pending)
                cache.pending_hits = still_pending

                highlighted = highlight_anomaly_line(raw_line)
                if highlighted:
                    html_line, severity = highlighted
                    _append_anomaly_hit(
                        cache,
                        CachedAnomaly(
                            severity=severity,
                            line=raw_line,
                            line_html=html_line,
                            before_lines=tuple(cache.recent_lines),
                            tail_index=cache.total_lines + 1,
                            pos=cache.total_lines,
                        ),
                    )
                cache.recent_lines.append(raw_line)
                cache.total_lines += 1

    cache.offset = stat.st_size
    cache.size = stat.st_size
    cache.mtime = stat.st_mtime
    _store_anomaly_file_cache(cache_key, cache)
    return cache


def collect_recent_errors(
    runs_dir: Path,
    cases: Sequence[str],
    files: Sequence[str] | None = None,
    max_hits: int = 200,
    context_after: int = ANOMALY_CONTEXT_DEFAULT,
    severity_filter: set[str] | None = None,
    query: str | None = None,
    adapter=None,
) -> list[dict[str, str | int]]:
    """Scan log files for anomalies with context lines around each match."""
    if not cases:
        return []
    adapter = adapter or _default_adapter()
    files_to_scan = [f for f in (files or adapter.anomaly_file_names) if f]
    max_hits = max(1, min(max_hits, 500))
    context_after = max(0, min(context_after, ANOMALY_CONTEXT_MAX))
    allowed = {s.lower() for s in severity_filter} if severity_filter else None
    query_text = query.strip().lower() if query else ""
    items: list[dict[str, str | int | float]] = []
    for case_id in cases:
        case_dir = runs_dir / case_id
        if not case_dir.is_dir():
            continue
        seen_paths: set[str] = set()
        for name in files_to_scan:
            path = adapter.locate_case_file(case_dir, name)
            if not path or not path.is_file():
                continue
            # Aliased names (adapters mapping several conventional names onto
            # one file) must not cause the same file to be scanned twice.
            resolved_key = str(path.resolve())
            if resolved_key in seen_paths:
                continue
            seen_paths.add(resolved_key)
            cache = _scan_anomaly_file(path)
            if cache is None:
                continue
            if not cache.hits:
                continue
            for hit in cache.hits:
                severity = hit.severity
                if allowed and severity not in allowed:
                    continue
                if query_text and query_text not in hit.line.lower():
                    continue
                snippet_lines: list[str] = []
                if context_after:
                    # before_lines are raw text; escape for HTML output
                    snippet_lines.extend(html_lib.escape(line) for line in hit.before_lines[-context_after:])
                snippet_lines.append(hit.line_html)
                if context_after:
                    # after_lines are already HTML-escaped during scanning
                    snippet_lines.extend(hit.after_lines[:context_after])
                items.append(
                    {
                        "case_id": case_id,
                        "file": name,
                        "severity": severity,
                        "line_html": "\n".join(snippet_lines),
                        "tail_index": hit.tail_index,
                        "tail_total": cache.total_lines,
                        "_mtime": cache.mtime,
                        "_pos": hit.pos,
                    }
                )
    items.sort(key=lambda item: (item.get("_mtime", 0.0), item.get("_pos", 0)), reverse=True)
    results: list[dict[str, str | int]] = []
    for item in items[:max_hits]:
        results.append(
            {
                "case_id": str(item["case_id"]),
                "file": str(item["file"]),
                "severity": str(item["severity"]),
                "line_html": str(item["line_html"]),
                "tail_index": int(item["tail_index"]),
                "tail_total": int(item["tail_total"]),
            }
        )
    return results


def locate_case_file(case_dir: Path, name: str) -> Path | None:
    """Find a file in a case directory by a friendly name."""
    # Direct path support (relative to case_dir only)
    direct = safe_subpath(case_dir, name)
    if direct and direct.is_file():
        return direct

    # Common known files with RESU search
    if name in {"listing", "run_solver.log", "residuals.csv", "run_status.running", "performance.log"}:
        resu_root = case_dir / "RESU"
        if resu_root.is_dir():
            resu_dirs = [d for d in resu_root.iterdir() if d.is_dir()]
            resu_dirs.sort(key=lambda p: p.stat().st_mtime, reverse=True)
            for resu_dir in resu_dirs:
                candidate = resu_dir / name
                if candidate.is_file() and is_within_root(candidate, case_dir.resolve()):
                    return candidate
    # Known root-level files
    for candidate in [case_dir / "csauto.stdout", case_dir / "csauto.stderr"]:
        if candidate.name == name and candidate.is_file():
            return candidate
    if name == "setup.xml":
        try:
            return find_setup_file(case_dir)
        except (FileNotFoundError, ValueError):
            return None
    if name == "doe_row.csv":
        candidate = case_dir / "doe_row.csv"
        if candidate.is_file():
            return candidate
    return None


def read_case_file_text(case_dir: Path, name: str, adapter=None) -> str:
    """Read a case file content as text."""
    adapter = adapter or _default_adapter()
    path = adapter.locate_case_file(case_dir, name)
    if not path:
        raise FileNotFoundError(f"File {name} not found for {case_dir.name}")
    return path.read_text(encoding="utf-8", errors="ignore")


def extract_restart_origin(case_dir: Path) -> dict[str, int | float]:
    """Extract restart origin (iteration/time) from the latest RESU run, if any."""
    resu_root = case_dir / "RESU"
    if not resu_root.is_dir():
        return {}
    try:
        resu_dirs = [p for p in resu_root.iterdir() if p.is_dir()]
        resu_dirs.sort(key=lambda p: p.stat().st_mtime, reverse=True)
    except OSError:
        return {}
    latest = resu_dirs[0] if resu_dirs else None
    if latest is None:
        return {}

    iter_value: int | None = None
    time_value: float | None = None
    for candidate in (latest / "setup.log", latest / "run_solver.log", latest / "listing"):
        if not candidate.is_file():
            continue
        lines = read_tail_lines(candidate, lines=12000)
        if not lines:
            continue
        for raw in reversed(lines):
            if iter_value is None:
                for pattern in RESTART_ITER_PATTERNS:
                    match = pattern.search(raw)
                    if not match:
                        continue
                    try:
                        iter_value = int(match.group(1))
                    except (ValueError, TypeError):
                        iter_value = None
                    if iter_value is not None:
                        break
            if time_value is None:
                for pattern in RESTART_TIME_PATTERNS:
                    match = pattern.search(raw)
                    if not match:
                        continue
                    try:
                        time_value = float(match.group(1))
                    except (ValueError, TypeError):
                        time_value = None
                    if time_value is not None:
                        break
            if iter_value is not None and time_value is not None:
                break
        if iter_value is not None and time_value is not None:
            break

    result: dict[str, int | float] = {}
    if iter_value is not None and iter_value >= 0:
        result["iteration"] = iter_value
    if time_value is not None and time_value >= 0:
        result["time"] = time_value
    return result


def extract_last_iteration(log_path: Path) -> int | None:
    """Extract the last iteration number from a log file, if possible."""
    patterns = [
        re.compile(r"[Ii]teration\s+(\d+)"),
        re.compile(r"[Tt]ime\s+step\s+(\d+)"),
        re.compile(r"Iter\s*=\s*(\d+)"),
    ]
    try:
        with log_path.open("r", encoding="utf-8", errors="ignore") as handle:
            recent_lines = deque(handle, maxlen=400)
    except OSError:
        return None

    for line in reversed(recent_lines):
        for pattern in patterns:
            match = pattern.search(line)
            if match:
                try:
                    return int(match.group(1))
                except ValueError:
                    continue
    return None


def _parse_start_time(start_time: str | None) -> float | None:
    """Parse an ISO start_time into a timestamp (seconds)."""
    if not start_time:
        return None
    try:
        return datetime.fromisoformat(start_time).timestamp()
    except ValueError:
        return None


def _is_recent(path: Path, start_ts: float | None) -> bool:
    if start_ts is None:
        return True
    try:
        return path.stat().st_mtime >= start_ts
    except OSError:
        return False


def locate_log_file(case_dir: Path, start_time: str | None = None) -> Path | None:
    """Find a log file to extract iteration information."""
    start_ts = _parse_start_time(start_time)
    candidates: list[Path] = [
        case_dir / "listing",
        case_dir / "listing.txt",
        case_dir / "listing.log",
        case_dir / "listing.out",
        case_dir / "csauto.stdout",
    ]
    for name in ("run_solver.log", "listing"):
        path = locate_case_file(case_dir, name)
        if path:
            candidates.append(path)
    seen: set[Path] = set()
    filtered: list[Path] = []
    for path in candidates:
        if path in seen:
            continue
        seen.add(path)
        if path.is_file() and _is_recent(path, start_ts):
            filtered.append(path)
    if not filtered:
        return None
    preferred = [
        p for p in filtered if p.name in {"run_solver.log", "listing", "listing.txt", "listing.log", "listing.out"}
    ]
    if preferred:
        return max(preferred, key=lambda p: p.stat().st_mtime)
    return max(filtered, key=lambda p: p.stat().st_mtime)


def locate_run_status_file(case_dir: Path, start_time: str | None = None) -> Path | None:
    """Find the most recent run_status.running file in RESU/*."""
    start_ts = _parse_start_time(start_time)
    resu_root = case_dir / "RESU"
    if not resu_root.is_dir():
        return None
    candidates: list[Path] = []
    for sub in resu_root.iterdir():
        candidate = sub / "run_status.running"
        if candidate.is_file() and _is_recent(candidate, start_ts):
            candidates.append(candidate)
    if not candidates:
        return None
    candidates.sort(key=lambda p: p.stat().st_mtime, reverse=True)
    return candidates[0]


def extract_run_status_iteration(status_path: Path) -> int | None:
    """Extract iteration/time step from run_status.running."""
    try:
        content = status_path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return None
    match = re.search(r"time step:\s*(\d+)", content, re.IGNORECASE)
    if match:
        try:
            return int(match.group(1))
        except ValueError:
            return None
    return None


def detect_run_outcome(case_dir: Path, start_time: str | None = None) -> str | None:
    """Determine if the run finished successfully based on solver/listing logs."""
    success_patterns = [
        re.compile(r"END OF CALCULATION", re.IGNORECASE),
        re.compile(r"FINAL STAGE OF THE CALCULATION", re.IGNORECASE),
        re.compile(r"CALCULATION COMPLETED", re.IGNORECASE),
        re.compile(r"Calculation ended normally", re.IGNORECASE),
    ]
    failure_patterns = [
        re.compile(r"FATAL ERROR", re.IGNORECASE),
        re.compile(r"ERROR DETECTED", re.IGNORECASE),
    ]

    def has_failure(lines: list[str]) -> bool:
        for line in lines:
            if any(pattern.search(line) for pattern in ANOMALY_IGNORE_PATTERNS):
                continue
            if any(pattern.search(line) for pattern in failure_patterns):
                return True
        return False

    candidates: list[Path] = []
    start_ts = _parse_start_time(start_time)
    candidates.extend(
        [
            case_dir / "run_solver.log",
            case_dir / "listing",
        ]
    )
    resu_root = case_dir / "RESU"
    if resu_root.is_dir():
        resu_dirs = [d for d in resu_root.iterdir() if d.is_dir()]
        resu_dirs.sort(key=lambda p: p.stat().st_mtime, reverse=True)
        for resu_dir in resu_dirs:
            candidates.extend([resu_dir / "run_solver.log", resu_dir / "listing"])

    for path in candidates:
        if not path.is_file():
            continue
        if not _is_recent(path, start_ts):
            continue
        lines = read_tail_lines(path, lines=400)
        joined = "\n".join(lines)
        if any(p.search(joined) for p in success_patterns):
            return STATUS_DONE
        if has_failure(lines):
            return STATUS_FAILED
    return None


def list_resu_files(
    case_dir: Path,
    limit: int = 2000,
    latest_subdir_only: bool = False,
) -> list[str]:
    """Return result files under RESU/ (no deep subfolders), relative to the case directory."""
    resu_root = case_dir / "RESU"
    if not resu_root.is_dir():
        return []
    files: list[str] = []
    if latest_subdir_only:
        subdirs = [p for p in resu_root.iterdir() if p.is_dir()]
        if not subdirs:
            return []
        latest = max(subdirs, key=lambda p: p.stat().st_mtime)
        for path in sorted(latest.iterdir()):
            if path.is_file():
                files.append(str(path.relative_to(case_dir)))
                if len(files) >= limit:
                    return files
        return files

    for path in sorted(resu_root.iterdir()):
        if path.is_file():
            files.append(str(path.relative_to(case_dir)))
            if len(files) >= limit:
                return files
    for sub in sorted(p for p in resu_root.iterdir() if p.is_dir()):
        for path in sorted(sub.iterdir()):
            if path.is_file():
                files.append(str(path.relative_to(case_dir)))
                if len(files) >= limit:
                    return files
    return files


def read_tail_lines(path: Path, lines: int = 20) -> list[str]:
    """Read the last N lines of a text file."""
    try:
        with path.open("r", encoding="utf-8", errors="ignore") as handle:
            return list(deque(handle, maxlen=lines))
    except OSError:
        return []


def tail_log(
    runs_dir: Path,
    case: str,
    file_name: str,
    lines: int = 20,
    follow: bool = True,
    adapter=None,
) -> None:
    """Tail a case log file (like tail -f)."""
    case_dir = runs_dir / case
    if not case_dir.is_dir():
        raise FileNotFoundError(f"Case not found: {case}")

    adapter = adapter or _default_adapter()
    path = adapter.locate_case_file(case_dir, file_name)
    if not path:
        raise FileNotFoundError(f"File {file_name} not found for {case}")

    print(f"Tailing {path}")
    with path.open("r", encoding="utf-8", errors="ignore") as handle:
        try:
            handle.seek(0, os.SEEK_END)
            file_size = handle.tell()
            handle.seek(max(0, file_size - 4096))
            buffer = handle.readlines()
            if lines > 0:
                buffer = buffer[-lines:]
            for line in buffer:
                sys.stdout.write(line)
            sys.stdout.flush()

            if not follow:
                return

            while True:
                where = handle.tell()
                line = handle.readline()
                if not line:
                    time.sleep(0.5)
                    handle.seek(where)
                else:
                    sys.stdout.write(line)
                    sys.stdout.flush()
        except KeyboardInterrupt:
            return


PERFORMANCE_FIELDS = (
    "elapsed_time",
    "mpi_ranks",
    "threads",
    "io_time",
    "linear_solver_time",
    "gradients_time",
    "balances_time",
)


def parse_performance_log(path: Path) -> dict[str, str | None]:
    """Extract timing and parallel metrics from a performance.log file."""
    try:
        content = path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return dict.fromkeys(PERFORMANCE_FIELDS, None)

    value_pattern = r"([0-9.+\-eE]+)"
    patterns = {
        "elapsed_time": [
            re.compile(rf"(?<!total\s)elapsed time\s*[:=]\s*{value_pattern}", re.IGNORECASE),
            re.compile(rf"total\s+elapsed time\s*[:=]\s*{value_pattern}", re.IGNORECASE),
        ],
        "mpi_ranks": [re.compile(r"(?:mpi\s+(?:tasks|ranks)|number of tasks)\s*[:=]\s*(\d+)", re.IGNORECASE)],
        "threads": [re.compile(r"(?:(?:omp|openmp)\s+)?(?:threads?|thread\(s\)?)\s*[:=]\s*(\d+)", re.IGNORECASE)],
        "io_time": [
            re.compile(rf"(?:i/?o|input\s*/\s*output)\s+time(?:\s*\(s\))?\s*[:=]\s*{value_pattern}", re.IGNORECASE),
            re.compile(
                rf"total\s+elapsed\s+time\s+for\s+(?:all\s+)?(?:i/?o|input\s*/\s*output)(?:\s+operations?)?\s*[:=]\s*{value_pattern}",
                re.IGNORECASE,
            ),
            re.compile(
                rf"time\s+(?:for|spent in)\s+(?:i/?o|input\s*/\s*output)(?:\s*\(s\))?\s*[:=]?\s*{value_pattern}",
                re.IGNORECASE,
            ),
        ],
        "linear_solver_time": [
            re.compile(
                rf"(?:linear(?:\s+equation)?\s+solver|linear\s+system\s+solver)\s+time(?:\s*\(s\))?\s*[:=]\s*{value_pattern}",
                re.IGNORECASE,
            ),
            re.compile(
                rf"total\s+elapsed\s+time\s+for\s+(?:all\s+)?linear(?:\s+equation)?\s+system\s+solvers?\s*[:=]\s*{value_pattern}",
                re.IGNORECASE,
            ),
            re.compile(
                rf"time\s+(?:for|spent in)\s+(?:the\s+)?(?:linear(?:\s+equation)?\s+solver|linear\s+system\s+solver)"
                rf"(?:\s*\(s\))?\s*[:=]?\s*{value_pattern}",
                re.IGNORECASE,
            ),
        ],
        "gradients_time": [
            re.compile(
                rf"(?:gradients?|gradient computations?)\s+time(?:\s*\(s\))?\s*[:=]\s*{value_pattern}",
                re.IGNORECASE,
            ),
            re.compile(
                rf"total\s+elapsed\s+time\s+for\s+(?:all\s+)?gradient(?:\s+computations?)?\s*[:=]\s*{value_pattern}",
                re.IGNORECASE,
            ),
            re.compile(
                rf"time\s+(?:for|spent in)\s+(?:gradients?|gradient computations?)(?:\s*\(s\))?\s*[:=]?\s*{value_pattern}",
                re.IGNORECASE,
            ),
        ],
        "balances_time": [
            re.compile(
                rf"(?:balances?|balance computations?)\s+time(?:\s*\(s\))?\s*[:=]\s*{value_pattern}",
                re.IGNORECASE,
            ),
            re.compile(
                rf"total\s+elapsed\s+time\s+for\s+(?:all\s+)?balances?(?:\s+computations?)?\s*[:=]\s*{value_pattern}",
                re.IGNORECASE,
            ),
            re.compile(
                rf"time\s+(?:for|spent in)\s+(?:balances?|balance computations?)(?:\s*\(s\))?\s*[:=]?\s*{value_pattern}",
                re.IGNORECASE,
            ),
        ],
    }
    result: dict[str, str | None] = dict.fromkeys(PERFORMANCE_FIELDS, None)
    for key in PERFORMANCE_FIELDS:
        for pattern in patterns.get(key, []):
            match = pattern.search(content)
            if match:
                result[key] = match.group(1)
                break
    if result["io_time"] is None:
        io_total = 0.0
        io_found = False
        io_blocks = re.findall(
            r"code_saturne\s+IO\s+files\s+(?:read|written)\s*:(.*?)(?=^\s*-{10,}\s*$|\Z)",
            content,
            flags=re.IGNORECASE | re.DOTALL | re.MULTILINE,
        )
        for block in io_blocks:
            for match in re.finditer(
                r"^\s*(?:global|local|open)\s*:\s*([0-9.+\-eE]+)\s*s\b",
                block,
                flags=re.IGNORECASE | re.MULTILINE,
            ):
                try:
                    io_total += float(match.group(1))
                    io_found = True
                except ValueError:
                    continue
        if io_found:
            result["io_time"] = format(io_total, ".6g")
    return result


def find_latest_performance_log(case_dir: Path) -> Path | None:
    """Locate the most recent performance.log in RESU subdirectories."""
    resu_root = case_dir / "RESU"
    if not resu_root.is_dir():
        return None
    candidates: list[Path] = []
    for resu_dir in resu_root.iterdir():
        if not resu_dir.is_dir():
            continue
        candidate = resu_dir / "performance.log"
        if candidate.is_file():
            candidates.append(candidate)
    if not candidates:
        return None
    candidates.sort(key=lambda p: p.stat().st_mtime, reverse=True)
    return candidates[0]


def read_performance_rows(runs_dir: Path, cases: Sequence[str], adapter=None) -> list[dict[str, str | None]]:
    """Read performance metrics for given cases."""
    if not cases:
        raise ValueError("At least one case must be specified via --case.")

    adapter = adapter or _default_adapter()
    records: list[dict[str, str | None]] = []

    for case_id in cases:
        case_dir = runs_dir / case_id
        if not case_dir.is_dir():
            warn(f"case not found: {case_id}")
            continue
        perf_path = adapter.find_performance_log(case_dir)
        if not perf_path:
            if adapter.results_root(case_dir).is_dir():
                warn(f"performance.log not found for {case_id}")
            continue
        metrics = adapter.parse_performance(perf_path)
        rec: dict[str, str | None] = {"case_id": case_id}
        rec.update(metrics)
        records.append(rec)

    return records


def collect_performance(runs_dir: Path, cases: Sequence[str], output_path: Path | None = None, adapter=None) -> None:
    """Collect performance metrics for specified cases into a CSV."""
    adapter = adapter or _default_adapter()
    records = read_performance_rows(runs_dir, cases, adapter=adapter)
    header = ["case_id", *adapter.performance_fields]

    if not records:
        raise ValueError("No performance data collected.")

    output = sys.stdout if output_path is None else output_path.open("w", newline="", encoding="utf-8")
    try:
        writer = csv.DictWriter(output, fieldnames=header)
        writer.writeheader()
        writer.writerows(records)
    finally:
        if output_path is not None:
            output.close()


__all__ = [
    "ANOMALY_CONTEXT_DEFAULT",
    "ANOMALY_FILES_DEFAULT",
    "ANOMALY_IGNORE_PATTERNS",
    "ANOMALY_PATTERNS",
    "ANOMALY_SEVERITY",
    "collect_performance",
    "collect_recent_errors",
    "detect_run_outcome",
    "extract_last_iteration",
    "extract_run_status_iteration",
    "find_latest_performance_log",
    "highlight_anomaly_line",
    "list_resu_files",
    "locate_case_file",
    "locate_log_file",
    "locate_run_status_file",
    "parse_performance_log",
    "read_case_file_text",
    "read_performance_rows",
    "read_tail_lines",
    "tail_log",
]
