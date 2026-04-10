from __future__ import annotations

import contextlib
import os
import shutil
from collections.abc import Iterable, Sequence
from dataclasses import dataclass
from pathlib import Path

from .template import find_setup_file
from .web_support import is_within_root


@dataclass
class DoctorItem:
    level: str  # ok, warn, fail
    message: str


_WEB_DEPS = ("fastapi", "uvicorn", "pydantic")


def _check_web_deps(add: object) -> None:
    """Check availability of optional web dependencies."""
    import importlib

    missing: list[str] = []
    for mod in _WEB_DEPS:
        try:
            importlib.import_module(mod)
        except ImportError:
            missing.append(mod)
    if missing:
        add("warn", f"web dependencies missing: {', '.join(missing)} (csauto serve will not work)")
    else:
        add("ok", "web dependencies available (fastapi, uvicorn, pydantic)")


def run_doctor(
    runs_dir: Path,
    require_docker: bool = False,
    require_singularity: bool = False,
    check_display: bool = True,
    require_write: bool = True,
    check_setup: bool = True,
    runtime: str | None = None,
    saturne_bin: str | None = None,
    singularity_image: str | None = None,
    singularity_bin: str | None = None,
) -> list[DoctorItem]:
    items: list[DoctorItem] = []

    def add(level: str, message: str) -> None:
        items.append(DoctorItem(level=level, message=message))

    if not runs_dir.is_dir():
        add("fail", f"runs_dir not found: {runs_dir}")
        return items

    if require_write and not os.access(runs_dir, os.W_OK):
        add("fail", f"no write permission on {runs_dir}")
    else:
        add("ok", f"write OK: {runs_dir}")

    case_dirs = sorted(p for p in runs_dir.iterdir() if p.is_dir() and p.name.startswith("case"))
    if not case_dirs:
        add("fail", "no case* directory found")
    else:
        add("ok", f"{len(case_dirs)} cases detected")

    if check_setup and case_dirs:
        missing: list[str] = []
        for case_dir in case_dirs:
            try:
                find_setup_file(case_dir)
            except (FileNotFoundError, ValueError):
                missing.append(case_dir.name)
        if missing:
            sample = ", ".join(missing[:5])
            suffix = " ..." if len(missing) > 5 else ""
            add("fail", f"setup.xml missing for: {sample}{suffix}")
        else:
            add("ok", "setup.xml present in every case")

    _rt = (runtime or "auto").strip().lower()
    # Override legacy flags with explicit runtime when provided
    if runtime:
        require_docker = _rt == "docker"
        require_singularity = _rt == "singularity"

    if require_docker or _rt == "docker":
        if not shutil.which("docker"):
            add("fail", "docker not found in PATH")
        else:
            add("ok", "docker available")
    elif require_singularity or _rt == "singularity":
        _sing_bin = singularity_bin or ""
        if _sing_bin:
            _sing_path = Path(_sing_bin).expanduser()
            if _sing_path.is_file() and os.access(_sing_path, os.X_OK):
                add("ok", f"singularity binary: {_sing_path}")
            else:
                add("fail", f"singularity binary not found or not executable: {_sing_bin}")
        elif shutil.which("apptainer") or shutil.which("singularity"):
            add("ok", "apptainer/singularity available")
        else:
            add("fail", "apptainer/singularity not found in PATH")
        if singularity_image:
            _img = singularity_image.strip()
            if "://" in _img:
                add("ok", f"singularity image: {_img} (remote URI, not checked)")
            elif Path(_img).expanduser().exists():
                add("ok", f"singularity image: {_img}")
            else:
                add("fail", f"singularity image not found: {_img}")
        else:
            add("warn", "singularity_image not configured")
    elif _rt in ("native",):
        _bin = saturne_bin or ""
        if _bin:
            _bin_path = Path(_bin).expanduser()
            if _bin_path.is_file() and os.access(_bin_path, os.X_OK):
                add("ok", f"code_saturne binary: {_bin_path}")
            else:
                add("fail", f"code_saturne binary not found or not executable: {_bin}")
        elif shutil.which("code_saturne"):
            add("ok", "code_saturne found in PATH")
        else:
            add("fail", "code_saturne not found in PATH and saturne_bin not configured")
    else:
        # auto or unknown: best-effort
        _found: list[str] = []
        if shutil.which("code_saturne") or (saturne_bin and Path(saturne_bin).expanduser().is_file()):
            _found.append("native")
        if shutil.which("docker"):
            _found.append("docker")
        if shutil.which("apptainer") or shutil.which("singularity"):
            _found.append("singularity")
        if _found:
            add("ok", f"available runtimes: {', '.join(_found)}")
        else:
            add("warn", "no runtime found (code_saturne, docker, apptainer/singularity)")

    if check_display:
        display = os.environ.get("DISPLAY")
        if not display:
            add("warn", "DISPLAY not set (GUI unavailable)")
        else:
            socket_dir = Path("/tmp/.X11-unix")
            if socket_dir.exists():
                add("ok", f"DISPLAY={display}")
            else:
                add("warn", "DISPLAY is set but /tmp/.X11-unix is missing")

    _check_web_deps(add)

    return items


@dataclass
class CleanupReport:
    resu_removed: int = 0
    logs_truncated: int = 0
    bytes_freed: int = 0
    cid_removed: int = 0
    pycache_removed: int = 0


def _truncate_file(path: Path, max_bytes: int) -> int:
    size = path.stat().st_size
    if size <= max_bytes:
        return 0
    with path.open("rb") as handle:
        handle.seek(max(0, size - max_bytes))
        tail = handle.read()
    with path.open("wb") as handle:
        handle.write(tail)
    return size - len(tail)


def _safe_case_dir(runs_dir: Path, case_id: str) -> Path | None:
    if not case_id:
        return None
    case_str = str(case_id).strip()
    if not case_str:
        return None
    if "\\" in case_str:
        return None
    parts = Path(case_str).parts
    if len(parts) != 1 or parts[0] in {".", ".."}:
        return None
    candidate = (runs_dir / case_str).resolve()
    if not is_within_root(candidate, runs_dir.resolve()):
        return None
    return candidate


def _case_dirs(runs_dir: Path) -> Iterable[Path]:
    root = runs_dir.resolve()
    return sorted(p for p in runs_dir.iterdir() if p.is_dir() and p.name.startswith("case") and is_within_root(p, root))


def _iter_case_dirs(runs_dir: Path, cases: Sequence[str] | None) -> Iterable[Path]:
    if not cases:
        return _case_dirs(runs_dir)
    selected: list[Path] = []
    for case_id in cases:
        case_dir = _safe_case_dir(runs_dir, str(case_id))
        if case_dir and case_dir.is_dir():
            selected.append(case_dir)
    return selected


def _normalize_resu_names(values: Sequence[str] | None) -> set[str]:
    if not values:
        return set()
    normalized: set[str] = set()
    for raw in values:
        name = str(raw).strip()
        if not name:
            continue
        if "/" in name or "\\" in name:
            continue
        if name in {".", ".."}:
            continue
        normalized.add(name)
    return normalized


def cleanup_runs(
    runs_dir: Path,
    prune_resu: bool = False,
    keep_last: int = 1,
    keep_resu: Sequence[str] | None = None,
    delete_resu: Sequence[str] | None = None,
    max_log_mb: float = 0.0,
    clear_cid: bool = False,
    clear_pyc: bool = False,
    dry_run: bool = False,
    cases: Sequence[str] | None = None,
) -> CleanupReport:
    report = CleanupReport()
    if not runs_dir.is_dir():
        return report
    keep_last = max(0, keep_last)
    max_bytes = int(max_log_mb * 1024 * 1024) if max_log_mb > 0 else 0
    keep_names = _normalize_resu_names(keep_resu)
    delete_names = _normalize_resu_names(delete_resu)
    if keep_names and delete_names:
        raise ValueError("keep_resu and delete_resu are mutually exclusive")
    log_names = {
        "run_solver.log",
        "listing",
        "csauto.stdout",
        "csauto.stderr",
        "performance.log",
        "run_status.running",
    }

    for case_dir in _iter_case_dirs(runs_dir, cases):
        resu_root = case_dir / "RESU"
        if prune_resu and resu_root.is_dir():
            resu_dirs = [p for p in resu_root.iterdir() if p.is_dir()]
            resu_dirs.sort(key=lambda p: p.stat().st_mtime, reverse=True)
            if keep_names:
                targets = [resu_dir for resu_dir in resu_dirs if resu_dir.name not in keep_names]
            elif delete_names:
                targets = [resu_dir for resu_dir in resu_dirs if resu_dir.name in delete_names]
            else:
                targets = resu_dirs[keep_last:]
            for old_dir in targets:
                if dry_run:
                    report.resu_removed += 1
                    continue
                if old_dir.is_symlink():
                    # Unlink the symlink only; never follow it into the target directory.
                    with contextlib.suppress(OSError):
                        old_dir.unlink()
                else:
                    shutil.rmtree(old_dir, ignore_errors=True)
                report.resu_removed += 1

        if clear_cid:
            cid_path = case_dir / ".csauto.cid"
            if cid_path.exists():
                if dry_run:
                    report.cid_removed += 1
                else:
                    try:
                        cid_path.unlink()
                        report.cid_removed += 1
                    except OSError:
                        pass

        if max_bytes > 0:
            candidates: list[Path] = []
            for name in log_names:
                candidate = case_dir / name
                if candidate.is_file():
                    candidates.append(candidate)
            if resu_root.is_dir():
                for resu_dir in resu_root.iterdir():
                    for name in log_names:
                        candidate = resu_dir / name
                        if candidate.is_file():
                            candidates.append(candidate)
            for path in candidates:
                if path.stat().st_size <= max_bytes:
                    continue
                if dry_run:
                    report.logs_truncated += 1
                    report.bytes_freed += max(0, path.stat().st_size - max_bytes)
                    continue
                freed = _truncate_file(path, max_bytes)
                if freed > 0:
                    report.logs_truncated += 1
                    report.bytes_freed += freed

        if clear_pyc:
            for pycache in case_dir.rglob("__pycache__"):
                if not pycache.is_dir():
                    continue
                if dry_run:
                    report.pycache_removed += 1
                    continue
                shutil.rmtree(pycache, ignore_errors=True)
                report.pycache_removed += 1

    return report


__all__ = ["CleanupReport", "DoctorItem", "cleanup_runs", "run_doctor"]
