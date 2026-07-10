from __future__ import annotations

import re
import shutil
import subprocess
from collections.abc import Callable, Mapping, Sequence
from pathlib import Path
from typing import Any

from .docker import find_container_id_for_case, read_container_id, terminate_container
from .logs import read_tail_lines
from .pathutil import is_within_root
from .registry import STATUS_FAILED, append_history, load_registry, registry_transaction, timestamp_now, update_case
from .runner import is_process_alive, terminate_pid


def _default_adapter() -> Any:
    from .solvers import get_solver_adapter

    return get_solver_adapter(None)


def request_token(headers: Mapping[str, str]) -> str | None:
    token = headers.get("X-CSAUTO-TOKEN")
    if token:
        return token.strip()
    auth = headers.get("Authorization", "")
    if auth.lower().startswith("bearer "):
        return auth[7:].strip()
    return None


def validate_case_id(case: object, runs_dir: Path, runs_root: Path) -> str:
    if case is None:
        raise ValueError("Missing case parameter")
    case_str = str(case).strip()
    if not case_str:
        raise ValueError("Missing case parameter")
    if "\\" in case_str:
        raise ValueError(f"Invalid case parameter: {case_str}")
    parts = Path(case_str).parts
    if len(parts) != 1 or parts[0] in {".", ".."}:
        raise ValueError(f"Invalid case parameter: {case_str}")
    candidate = (runs_dir / case_str).resolve()
    if not is_within_root(candidate, runs_root):
        raise ValueError(f"Invalid case parameter: {case_str}")
    return case_str


def read_int(
    qs: dict[str, list[str]],
    key: str,
    default: int,
    min_value: int,
    max_value: int,
) -> int:
    raw = qs.get(key, [str(default)])[0]
    try:
        value = int(raw)
    except (ValueError, TypeError):
        return default
    return max(min_value, min(value, max_value))


def extract_cases(
    qs: dict[str, list[str]],
    *,
    validator: Callable[[object], str],
) -> list[str]:
    if "case" not in qs:
        raise ValueError("Missing case parameter")
    raw = qs.get("case", [])
    cases: list[str] = []
    for entry in raw:
        cases.extend([c.strip() for c in entry.split(",") if c.strip()])
    if not cases:
        raise ValueError("Missing case parameter")
    return [validator(case) for case in cases]


def extract_probe_files(qs: dict[str, list[str]]) -> list[str]:
    raw = qs.get("probe", []) + qs.get("probes", [])
    files: list[str] = []
    for entry in raw:
        files.extend([p.strip() for p in entry.split(",") if p.strip()])
    return files


def resolve_case_dir(record_path: str | None, case_id: str, runs_dir: Path) -> Path:
    if record_path:
        path = Path(record_path)
        if path.is_absolute():
            return path
        try:
            if runs_dir.name and path.parts and path.parts[0] == runs_dir.name:
                path = Path(*path.parts[1:]) if len(path.parts) > 1 else Path(".")
        except (ValueError, IndexError):
            pass
        return (runs_dir / path).resolve()
    return (runs_dir / case_id).resolve()


def normalize_convergence(raw: object) -> str | None:
    text = str(raw or "").strip().lower()
    if not text or text in {"clear", "unknown", "unset", "none", "null"}:
        return ""
    if text in {"converged", "yes", "true", "1"}:
        return "converged"
    if text in {
        "not_converged",
        "not converged",
        "non_converged",
        "non converged",
        "no",
        "false",
        "0",
        "diverged",
    }:
        return "not_converged"
    return None


def normalize_job_id(raw: object) -> str | None:
    if raw is None:
        return None
    value = str(raw).strip()
    if not value:
        return None
    if not re.fullmatch(r"[A-Za-z0-9_.:\-\[\]]+", value):
        return None
    return value


def is_scheduler_job_active(job_id: str) -> bool | None:
    normalized = normalize_job_id(job_id)
    if not normalized:
        return None
    if not shutil.which("squeue"):
        return None
    try:
        proc = subprocess.run(
            ["squeue", "-h", "-j", normalized, "-o", "%T"],
            capture_output=True,
            text=True,
            check=False,
            timeout=3.0,
        )
    except (OSError, subprocess.TimeoutExpired):
        return None
    if proc.returncode != 0:
        return None
    lines = [line.strip() for line in str(proc.stdout or "").splitlines() if line.strip()]
    return bool(lines)


def extract_job_id_from_text(text: str, job_id_patterns: Sequence[re.Pattern[str]]) -> str | None:
    if not text:
        return None
    for pattern in job_id_patterns:
        match = pattern.search(text)
        if not match:
            continue
        return normalize_job_id(match.group("id"))
    return None


def discover_job_id(case_dir: Path, job_id_patterns: Sequence[re.Pattern[str]], adapter: Any = None) -> str | None:
    adapter = adapter or _default_adapter()
    raw_file = case_dir / ".csauto.jobid"
    if raw_file.is_file():
        try:
            content = raw_file.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            content = ""
        for line in content.splitlines():
            line = line.strip()
            if not line:
                continue
            from_text = extract_job_id_from_text(line, job_id_patterns)
            if from_text:
                return from_text
            direct = normalize_job_id(line)
            if direct:
                return direct

    seen: set[str] = set()
    candidates: list[Path] = []
    for name in ("csauto.stdout", "csauto.stderr", "run_solver.log", "listing"):
        file_path = adapter.locate_case_file(case_dir, name)
        if not file_path or not file_path.is_file():
            continue
        key = str(file_path.resolve())
        if key in seen:
            continue
        seen.add(key)
        candidates.append(file_path)
    for path in candidates:
        try:
            lines = read_tail_lines(path, 800)
        except OSError:
            continue
        for raw_line in reversed(lines):
            found = extract_job_id_from_text(raw_line.strip(), job_id_patterns)
            if found:
                return found
    return None


def terminate_job_id(job_id: str) -> str:
    available_commands: list[str] = []
    for cmd in ("scancel", "qdel", "bkill"):
        if shutil.which(cmd):
            available_commands.append(cmd)
    if not available_commands:
        raise FileNotFoundError("No scheduler kill command found (scancel/qdel/bkill)")

    errors: list[str] = []
    for cmd in available_commands:
        proc = subprocess.run(
            [cmd, job_id],
            capture_output=True,
            text=True,
            check=False,
        )
        if proc.returncode == 0:
            return cmd
        reason = (proc.stderr or proc.stdout or "").strip() or f"exit {proc.returncode}"
        errors.append(f"{cmd}: {reason}")
    raise RuntimeError("; ".join(errors))


def count_running_cases(runs_dir: Path, status_running: str) -> int:
    running = 0
    registry = load_registry(runs_dir)
    for record in registry.values():
        if record.get("status") != status_running:
            continue
        pid = record.get("pid")
        pid_alive = False
        if pid is not None:
            try:
                pid_alive = is_process_alive(int(pid))
            except (TypeError, ValueError):
                pid_alive = False
        if pid_alive:
            running += 1
            continue
        job_id = normalize_job_id(record.get("job_id"))
        if not job_id:
            continue
        job_active = is_scheduler_job_active(job_id)
        if job_active is not False:
            running += 1
    return running


def default_web_max_parallel(requested_cases: int, runs_dir: Path, status_running: str) -> int:
    requested = max(1, int(requested_cases))
    return max(1, count_running_cases(runs_dir, status_running) + requested)


def log_case_action(
    runs_dir: Path,
    case_id: str,
    action: str,
    details: Mapping[str, Any] | None = None,
    *,
    actor: str | None = None,
) -> None:
    case_dir = runs_dir / case_id
    if not case_dir.is_dir():
        return
    append_history(
        case_dir,
        action,
        details=details,
        source="web",
        actor=actor,
    )


def kill_case(
    runs_dir: Path,
    case_id: str,
    *,
    actor: str | None,
    job_id_patterns: Sequence[re.Pattern[str]],
    adapter: Any = None,
) -> None:
    adapter = adapter or _default_adapter()
    with registry_transaction(runs_dir) as registry:
        record = registry.get(case_id)
        if not record:
            raise FileNotFoundError(f"Case not found: {case_id}")
        case_dir = resolve_case_dir(record.get("path"), case_id, runs_dir)
        container_id = record.get("container_id")
        cidfile_raw = record.get("cidfile")
        cidfile = Path(cidfile_raw) if cidfile_raw else None
        if not container_id and cidfile:
            container_id = read_container_id(cidfile, wait=1.0)
            if container_id:
                record["container_id"] = container_id
        if not container_id:
            container_id = find_container_id_for_case(case_id)
            if container_id:
                record["container_id"] = container_id

        job_id = normalize_job_id(record.get("job_id"))
        if not job_id:
            job_id = discover_job_id(case_dir, job_id_patterns, adapter=adapter)
            if job_id:
                record["job_id"] = job_id

        start_time = record.get("start_time")
        previous_end_time = record.get("end_time")
        pid_raw = record.get("pid")

    if pid_raw is None and not container_id and not job_id:
        raise ValueError(f"No PID, container_id or job_id for {case_id}")

    details: dict[str, Any] = {
        "pid": pid_raw,
        "container_id": container_id,
        "job_id": job_id,
    }

    container_error: Exception | None = None
    if container_id:
        try:
            terminate_container(str(container_id))
            details["container_killed"] = True
        except Exception as exc:
            container_error = exc

    pid_alive = False
    if pid_raw is not None:
        try:
            pid_int = int(pid_raw)
        except (TypeError, ValueError) as exc:
            raise ValueError(f"Invalid PID for {case_id}") from exc
        if is_process_alive(pid_int):
            terminate_pid(pid_int)
            pid_alive = True
            details["pid_killed"] = True

    job_error: Exception | None = None
    if job_id and not pid_alive:
        try:
            killer = terminate_job_id(job_id)
            details["job_killer"] = killer
            details["job_killed"] = True
        except Exception as exc:
            job_error = exc

    if container_error and pid_raw is None and job_id is None:
        raise container_error
    if job_error and pid_raw is None and not container_id:
        raise job_error

    outcome = adapter.detect_outcome(case_dir, start_time) or STATUS_FAILED
    with registry_transaction(runs_dir) as registry:
        update_case(
            registry,
            case_id,
            status=outcome,
            pid=None,
            container_id=None,
            job_id=None,
            end_time=previous_end_time or timestamp_now(),
        )
    log_case_action(runs_dir, case_id, "kill", details, actor=actor)
