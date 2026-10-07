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

from .registry import STATUS_DONE, STATUS_FAILED
from .warn import warn


def _default_adapter():
    from .solvers import get_solver_adapter

    return get_solver_adapter(None)


# Anomaly vocabulary any computation can produce. Adapters extend it with
# their own `anomaly_patterns` and silence false positives with
# `anomaly_ignore_patterns`.
GENERIC_ANOMALY_PATTERNS: tuple[tuple[str, re.Pattern[str]], ...] = (
    (
        "error",
        re.compile(
            r"(fatal error|error detected|error:|segmentation fault|sigsegv|floating point exception|"
            r"abort(?:ed|ing)?|core dumped|traceback|exception|out of memory|not enough memory|"
            r"\bnan\b|\binf\b|overflow|underflow|failed to|\berror\b(?!\s*=\s*[-+0-9.]))",
            re.IGNORECASE,
        ),
    ),
    ("warn", re.compile(r"(warning|limit reached)", re.IGNORECASE)),
)
ANOMALY_SEVERITY = {"error": 2, "warn": 1, "info": 0}
ANOMALY_CONTEXT_DEFAULT = 6
ANOMALY_CONTEXT_MAX = 50
ANOMALY_FILE_CACHE_MAX = 256
ANOMALY_FILE_HITS_MAX = 512
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


def highlight_anomaly_line(
    line: str,
    patterns: Sequence[tuple[str, re.Pattern[str]]] = GENERIC_ANOMALY_PATTERNS,
    ignore_patterns: Sequence[re.Pattern[str]] = (),
) -> tuple[str, str] | None:
    """Highlight anomaly matches in a line and return (html, severity)."""
    if not line.strip():
        return None
    for pattern in ignore_patterns:
        if pattern.search(line):
            return None
    matches: list[tuple[int, int]] = []
    severity: str | None = None
    for label, pattern in patterns:
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


# ponytail: the cache is keyed by path only, so hits found with one adapter's
# patterns are reused by another; key it by adapter too if a process ever
# serves several solvers.
def _scan_anomaly_file(
    path: Path,
    patterns: Sequence[tuple[str, re.Pattern[str]]],
    ignore_patterns: Sequence[re.Pattern[str]],
) -> AnomalyFileCache | None:
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

                highlighted = highlight_anomaly_line(raw_line, patterns, ignore_patterns)
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
    patterns = (*GENERIC_ANOMALY_PATTERNS, *adapter.anomaly_patterns)
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
            cache = _scan_anomaly_file(path, patterns, adapter.anomaly_ignore_patterns)
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


def read_case_file_text(case_dir: Path, name: str, adapter=None) -> str:
    """Read a case file content as text."""
    adapter = adapter or _default_adapter()
    path = adapter.locate_case_file(case_dir, name)
    if not path:
        raise FileNotFoundError(f"File {name} not found for {case_dir.name}")
    return path.read_text(encoding="utf-8", errors="ignore")


def parse_start_time(start_time: str | None) -> float | None:
    """Parse an ISO start_time into a timestamp (seconds)."""
    if not start_time:
        return None
    try:
        return datetime.fromisoformat(start_time).timestamp()
    except ValueError:
        return None


def is_recent(path: Path, start_ts: float | None) -> bool:
    """True when the file was written at or after the run start (any file counts without a start)."""
    if start_ts is None:
        return True
    try:
        return path.stat().st_mtime >= start_ts
    except OSError:
        return False


def scan_outcome(
    paths: Sequence[Path],
    start_time: str | None,
    success_patterns: Sequence[re.Pattern[str]],
    failure_patterns: Sequence[re.Pattern[str]],
    ignore_patterns: Sequence[re.Pattern[str]] = (),
    lines: int = 400,
) -> str | None:
    """Return STATUS_DONE / STATUS_FAILED from the first log of the current run whose tail gives a verdict."""
    start_ts = parse_start_time(start_time)
    for path in paths:
        if not path.is_file() or not is_recent(path, start_ts):
            continue
        tail = read_tail_lines(path, lines=lines)
        joined = "\n".join(tail)
        if any(p.search(joined) for p in success_patterns):
            return STATUS_DONE
        for line in tail:
            if any(p.search(line) for p in ignore_patterns):
                continue
            if any(p.search(line) for p in failure_patterns):
                return STATUS_FAILED
    return None


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
    file_name: str | None,
    lines: int = 20,
    follow: bool = True,
    adapter=None,
) -> None:
    """Tail a case log file (like tail -f)."""
    case_dir = runs_dir / case
    if not case_dir.is_dir():
        raise FileNotFoundError(f"Case not found: {case}")

    adapter = adapter or _default_adapter()
    file_name = file_name or adapter.tail_file_names[0]
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
                warn(f"performance log not found for {case_id}")
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
    "ANOMALY_SEVERITY",
    "GENERIC_ANOMALY_PATTERNS",
    "collect_performance",
    "collect_recent_errors",
    "highlight_anomaly_line",
    "is_recent",
    "parse_start_time",
    "read_case_file_text",
    "read_performance_rows",
    "read_tail_lines",
    "scan_outcome",
    "tail_log",
]
