from __future__ import annotations

import contextlib
import os
import re
import shlex
import shutil
import signal
import subprocess
import sys
import threading
import time
from collections.abc import Callable, Iterator, Mapping, Sequence
from contextlib import ExitStack, contextmanager
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import TYPE_CHECKING, Any

from .docker import read_container_id
from .doe import read_doe_row
from .execution import (
    RUNTIME_DOCKER,
    RUNTIME_SINGULARITY,
    RuntimeSelection,
    resolve_runtime,
)
from .registry import (
    STATUS_DONE,
    STATUS_FAILED,
    STATUS_PENDING,
    STATUS_PREPARED,
    STATUS_RUNNING,
    append_history,
    load_registry,
    mutate_registry,
    registry_transaction,
    timestamp_now,
    update_case,
)

if TYPE_CHECKING:
    from .solvers.base import SolverAdapter

SLURM_JOB_ID_RE = re.compile(r"^[A-Za-z0-9_.:\-\[\]]+$")
SLURM_HPC_ENV_HINTS = (
    "SLURM_CLUSTER_NAME",
    "SLURM_SUBMIT_HOST",
    "SLURM_JOB_ID",
    "SLURM_NNODES",
    "SLURM_CPUS_ON_NODE",
)
SLURM_TRUE_VALUES = {"1", "true", "yes", "on"}
SLURM_FALSE_VALUES = {"0", "false", "no", "off"}
LAUNCH_LOCKFILE = ".csauto.launch.lock"
LAUNCH_THREAD_LOCK = threading.RLock()
RESU_SIZE_CACHE_LOCK = threading.RLock()
RESU_SIZE_CACHE: dict[str, dict[str, float | None]] = {}

try:
    import fcntl
except ImportError:  # pragma: no cover - fallback for non-POSIX platforms
    fcntl = None


def _default_adapter() -> SolverAdapter:
    from .solvers import get_solver_adapter

    return get_solver_adapter(None)


@contextmanager
def launch_lock(runs_dir: Path) -> Iterator[None]:
    """Serialize launch slot decisions across concurrent callers."""
    if not runs_dir.is_dir():
        with LAUNCH_THREAD_LOCK:
            yield
        return
    lock_path = runs_dir / LAUNCH_LOCKFILE
    with LAUNCH_THREAD_LOCK:
        handle = lock_path.open("a+")
        try:
            if fcntl:
                fcntl.flock(handle.fileno(), fcntl.LOCK_EX)
            yield
        finally:
            if fcntl:
                fcntl.flock(handle.fileno(), fcntl.LOCK_UN)
            handle.close()


@dataclass(frozen=True)
class RefreshResult:
    case_id: str
    snapshot: Mapping[str, Any]
    row: dict[str, Any]
    updates: dict[str, Any]
    doe_columns: tuple[str, ...]


def _normalize_job_id(value: object) -> str | None:
    text = str(value or "").strip()
    if not text:
        return None
    if not SLURM_JOB_ID_RE.fullmatch(text):
        return None
    return text


def _parse_sbatch_job_id(stdout_text: str) -> str | None:
    for raw_line in str(stdout_text or "").splitlines():
        line = raw_line.strip()
        if not line:
            continue
        token = line.split(";", 1)[0].strip()
        if token:
            normalized = _normalize_job_id(token)
            if normalized:
                return normalized
        match = re.search(r"(\d+(?:[_.:\-\[\]][A-Za-z0-9_.:\-\[\]]+)*)", line)
        if match:
            normalized = _normalize_job_id(match.group(1))
            if normalized:
                return normalized
    return None


def _is_slurm_hpc_environment() -> bool:
    return any(os.environ.get(key) for key in SLURM_HPC_ENV_HINTS)


def _should_use_slurm_scheduler(selection_runtime: str, use_slurm: bool | None = None) -> bool:
    if use_slurm is not None:
        if use_slurm and not shutil.which("sbatch"):
            raise FileNotFoundError("use_slurm=true but sbatch not found in PATH.")
        return bool(use_slurm)
    flag = str(os.environ.get("CSAUTO_USE_SLURM", "") or "").strip().lower()
    if flag in SLURM_FALSE_VALUES:
        return False
    sbatch_bin = shutil.which("sbatch")
    if flag in SLURM_TRUE_VALUES:
        if not sbatch_bin:
            raise FileNotFoundError("CSAUTO_USE_SLURM=1 but sbatch not found in PATH.")
        return True
    if not sbatch_bin:
        return False
    return _is_slurm_hpc_environment()


def _strip_nohup_prefix(command: Sequence[object]) -> list[str]:
    parts = [str(part) for part in command if str(part) != ""]
    if parts and parts[0] == "nohup":
        return parts[1:]
    return parts


def _submit_slurm_job(
    case_dir: Path,
    command: Sequence[object],
    stdout_path: Path,
    stderr_path: Path,
    env: Mapping[str, str] | None = None,
) -> str:
    launch_parts = _strip_nohup_prefix(command)
    if not launch_parts:
        raise ValueError("Empty launch command for Slurm submission.")
    wrapped = " ".join(shlex.quote(part) for part in launch_parts)
    env_prefix = " ".join(f"{key}={shlex.quote(value)}" for key, value in sorted((env or {}).items()))
    if env_prefix:
        wrapped = f"{env_prefix} {wrapped}"
    submit_cmd = [
        "sbatch",
        "--parsable",
        "--chdir",
        str(case_dir),
        "--output",
        str(stdout_path),
        "--error",
        str(stderr_path),
        "--job-name",
        f"csauto_{case_dir.name}",
        "--wrap",
        wrapped,
    ]
    proc = subprocess.run(
        submit_cmd,
        capture_output=True,
        text=True,
        check=False,
        cwd=case_dir,
    )
    if proc.returncode != 0:
        reason = (proc.stderr or proc.stdout or "").strip() or f"sbatch exit code {proc.returncode}"
        raise RuntimeError(reason)
    job_id = _parse_sbatch_job_id(proc.stdout)
    if not job_id:
        raise RuntimeError(f"Could not parse sbatch job id from: {proc.stdout!r}")
    return job_id


def _submit_slurm_script_job(
    case_dir: Path,
    script_content: str,
    nprocs: int,
    nt: int,
    stdout_path: Path,
    stderr_path: Path,
) -> str:
    script_path = case_dir / ".csauto.slurm.singularity.sh"
    script_path.write_text(script_content, encoding="utf-8")
    script_path.chmod(0o755)
    submit_cmd = [
        "sbatch",
        "--parsable",
        "--chdir",
        str(case_dir),
        "--output",
        str(stdout_path),
        "--error",
        str(stderr_path),
        "--job-name",
        f"csauto_{case_dir.name}",
        "--ntasks",
        str(nprocs),
        "--cpus-per-task",
        str(nt),
        str(script_path),
    ]
    proc = subprocess.run(
        submit_cmd,
        capture_output=True,
        text=True,
        check=False,
        cwd=case_dir,
    )
    if proc.returncode != 0:
        reason = (proc.stderr or proc.stdout or "").strip() or f"sbatch exit code {proc.returncode}"
        raise RuntimeError(reason)
    job_id = _parse_sbatch_job_id(proc.stdout)
    if not job_id:
        raise RuntimeError(f"Could not parse sbatch job id from: {proc.stdout!r}")
    return job_id


def _is_slurm_job_active(job_id: str) -> bool | None:
    normalized = _normalize_job_id(job_id)
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


def _resolve_case_dir(runs_dir: Path, record_path: str | None, case_id: str) -> Path:
    if record_path:
        path = Path(record_path)
        if path.is_absolute():
            return path
        try:
            if runs_dir.name and path.parts and path.parts[0] == runs_dir.name:
                path = Path(*path.parts[1:]) if len(path.parts) > 1 else Path(".")
        except (TypeError, ValueError):
            pass
        return (runs_dir / path).resolve()
    return (runs_dir / case_id).resolve()


def _start_case(
    case_dir: Path,
    *,
    runs_dir: Path,
    nprocs: int,
    nt: int,
    selection: RuntimeSelection,
    adapter: SolverAdapter,
    use_slurm_scheduler: bool,
    restart: bool,
    restart_mode: str | None,
    restart_value: int | float | None,
    restart_path: str | None,
    mpi_exec_options: str | None,
    source: str,
) -> bool:
    """Launch a single case. Returns True if launched, False if skipped."""
    case_id = case_dir.name
    restart_args: list[str] = []
    restart_details: dict[str, Any] = {}
    if restart:
        restart_args, restart_details = adapter.build_restart_args(
            case_dir,
            restart_mode,
            restart_value,
            restart_path,
        )
    with registry_transaction(runs_dir) as registry:
        record = registry.get(case_id, {})
        if record.get("status") == STATUS_RUNNING:
            print(f"Skipping {case_id}: already running.", file=sys.stderr)
            return False

        cidfile = case_dir / ".csauto.cid" if selection.runtime == RUNTIME_DOCKER else None
        if cidfile and cidfile.exists():
            with contextlib.suppress(OSError):
                cidfile.unlink()
        scheduler = "slurm" if use_slurm_scheduler else None

        base_update: dict[str, Any] = dict(
            path=str(case_dir),
            nprocs=nprocs,
            nt=nt,
            last_iter=None,
            cidfile=str(cidfile) if cidfile else None,
            container_id=None,
            scheduler=scheduler,
            runtime=selection.runtime,
        )

        container_env: dict[str, str] | None = None
        command_cleanenv = False
        submit_mpi_exec_options = mpi_exec_options
        # For container runtimes on Slurm, MPI options must be passed as
        # an env var inside the container rather than via sbatch --wrap,
        # because the container's MPI stack needs them at solver launch time.
        if use_slurm_scheduler and selection.runtime in {RUNTIME_DOCKER, RUNTIME_SINGULARITY}:
            command_cleanenv = selection.runtime == RUNTIME_SINGULARITY
            if mpi_exec_options:
                container_env = adapter.mpi_env(mpi_exec_options) or None
                submit_mpi_exec_options = None
        cmd = adapter.build_run_command(
            case_dir,
            nprocs,
            nt,
            selection,
            cidfile=cidfile,
            run_args=restart_args,
            cleanenv=command_cleanenv,
            env_vars=container_env,
        )

        if use_slurm_scheduler:
            _launch_slurm(
                case_dir,
                case_id,
                nprocs,
                nt,
                selection,
                adapter,
                cmd,
                restart_args,
                mpi_exec_options,
                submit_mpi_exec_options,
                cidfile,
                registry,
                base_update,
            )
        else:
            _launch_local(case_dir, case_id, cmd, cidfile, registry, base_update)

        history_details: dict[str, Any] = {"n": nprocs, "nt": nt, "runtime": selection.runtime}
        history_details.update(restart_details)
        if scheduler:
            history_details["scheduler"] = scheduler
            history_details["job_id"] = registry.get(case_id, {}).get("job_id")
            if mpi_exec_options:
                history_details["mpi_exec_options"] = str(mpi_exec_options).strip()
        if selection.runtime == RUNTIME_DOCKER:
            history_details["docker_image"] = selection.docker_image
        elif selection.runtime == "native":
            history_details["saturne_bin"] = selection.saturne_bin
        elif selection.runtime == "singularity":
            history_details["singularity_bin"] = selection.singularity_bin
            history_details["singularity_image"] = selection.singularity_image
        append_history(case_dir, "run", details=history_details, source=source)
    return True


def _launch_slurm(
    case_dir: Path,
    case_id: str,
    nprocs: int,
    nt: int,
    selection: RuntimeSelection,
    adapter: SolverAdapter,
    cmd: list[str],
    restart_args: list[str],
    mpi_exec_options: str | None,
    submit_mpi_exec_options: str | None,
    cidfile: Path | None,
    registry: dict[str, Any],
    base_update: dict[str, Any],
) -> None:
    stdout_path = case_dir / "csauto.stdout"
    stderr_path = case_dir / "csauto.stderr"
    script_env = {"OMP_NUM_THREADS": str(nt), **adapter.mpi_env(mpi_exec_options)}
    try:
        print(f"Launching {case_id} via Slurm.")
        script_content = adapter.build_slurm_script(
            case_dir,
            nprocs,
            nt,
            selection,
            run_args=restart_args,
            env_vars=script_env,
        )
        if script_content is not None:
            job_id = _submit_slurm_script_job(
                case_dir,
                script_content,
                nprocs,
                nt,
                stdout_path,
                stderr_path,
            )
        else:
            job_id = _submit_slurm_job(
                case_dir,
                cmd,
                stdout_path,
                stderr_path,
                env=adapter.mpi_env(submit_mpi_exec_options),
            )
    except (OSError, ValueError, RuntimeError) as exc:
        update_case(
            registry,
            case_id,
            **base_update,
            status=STATUS_FAILED,
            start_time=None,
            end_time=timestamp_now(),
            pid=None,
            job_id=None,
        )
        raise RuntimeError(f"Failed to launch {case_id}: {exc}") from exc
    with contextlib.suppress(OSError):
        (case_dir / ".csauto.jobid").write_text(f"{job_id}\n", encoding="utf-8")
    update_case(
        registry,
        case_id,
        **base_update,
        status=STATUS_RUNNING,
        start_time=timestamp_now(),
        end_time=None,
        pid=None,
        job_id=job_id,
    )


def _launch_local(
    case_dir: Path,
    case_id: str,
    cmd: list[str],
    cidfile: Path | None,
    registry: dict[str, Any],
    base_update: dict[str, Any],
) -> None:
    stdout_path = case_dir / "csauto.stdout"
    stderr_path = case_dir / "csauto.stderr"
    with ExitStack() as _fh:
        stdout_handle = _fh.enter_context(stdout_path.open("w", encoding="utf-8"))
        stderr_handle = _fh.enter_context(stderr_path.open("w", encoding="utf-8"))
        failed_kwargs = dict(
            **base_update, status=STATUS_FAILED, start_time=None, end_time=timestamp_now(), pid=None, job_id=None
        )
        try:
            print(f"Launching {case_id}: {' '.join(cmd)} &")
            proc = subprocess.Popen(
                cmd,
                cwd=case_dir,
                stdout=stdout_handle,
                stderr=stderr_handle,
                start_new_session=True,
            )
        except (PermissionError, FileNotFoundError):
            rc_path = Path.home() / ".bashrc"
            cmd_str = " ".join(shlex.quote(part) for part in cmd)
            if rc_path.is_file():
                cmd_str = f"source {shlex.quote(str(rc_path))} >/dev/null 2>&1; {cmd_str}"
            shell_exe = os.environ.get("SHELL", "/bin/bash")
            print(f"Fallback via shell ({shell_exe} -lc '{cmd_str} &')")
            try:
                proc = subprocess.Popen(
                    [shell_exe, "-lc", cmd_str],
                    cwd=case_dir,
                    stdout=stdout_handle,
                    stderr=stderr_handle,
                    start_new_session=True,
                )
            except (OSError, ValueError) as exc:
                update_case(registry, case_id, **failed_kwargs)
                raise RuntimeError(f"Failed to launch {case_id}: {exc}") from exc
        except (OSError, ValueError) as exc:
            update_case(registry, case_id, **failed_kwargs)
            raise RuntimeError(f"Failed to launch {case_id}: {exc}") from exc

        update_case(
            registry,
            case_id,
            **base_update,
            status=STATUS_RUNNING,
            start_time=timestamp_now(),
            end_time=None,
            pid=proc.pid,
            job_id=None,
        )
        if cidfile:
            container_id = read_container_id(cidfile, wait=1.0)
            if container_id:
                update_case(registry, case_id, container_id=container_id)


def run_cases(
    runs_dir: Path,
    nprocs: int,
    nt: int,
    max_parallel: int,
    case_filter: Sequence[str] | None = None,
    docker_image: str | None = None,
    runtime: str = "auto",
    saturne_bin: str | None = None,
    singularity_image: str | None = None,
    singularity_bin: str | None = None,
    resume_only_failed: bool = False,
    restart: bool = False,
    restart_mode: str | None = None,
    restart_value: int | float | None = None,
    restart_path: str | None = None,
    use_slurm: bool | None = None,
    mpi_exec_options: str | None = None,
    source: str = "cli",
    adapter: SolverAdapter | None = None,
) -> None:
    """Launch solver runs for each case directory."""
    if nprocs <= 0 or nt <= 0:
        raise ValueError("nprocs and nt must be > 0")
    if max_parallel <= 0:
        raise ValueError("max_parallel must be > 0")
    mpi_exec_options = str(mpi_exec_options or "").strip() or None

    adapter = adapter or _default_adapter()
    if docker_image is None:
        docker_image = adapter.default_docker_image
    selection = resolve_runtime(
        runtime=runtime,
        docker_image=docker_image,
        saturne_bin=saturne_bin,
        singularity_image=singularity_image,
        singularity_bin=singularity_bin,
        adapter=adapter,
    )
    adapter.preflight(runs_dir, selection.runtime)
    use_slurm_scheduler = _should_use_slurm_scheduler(selection.runtime, use_slurm=use_slurm)

    allowed_list: list[str] | None = None
    if case_filter:
        allowed_list = []
        seen: set[str] = set()
        for name in case_filter:
            if name not in seen:
                seen.add(name)
                allowed_list.append(name)
    if allowed_list:
        missing = sorted(name for name in allowed_list if not (runs_dir / name).is_dir())
        if missing:
            raise ValueError(f"Requested cases not found in {runs_dir}: {', '.join(missing)}")
        case_dirs = [runs_dir / name for name in allowed_list]
    else:
        case_dirs = sorted(p for p in runs_dir.iterdir() if p.is_dir() and p.name.startswith("case"))

    if not case_dirs:
        raise ValueError(f"No case* directory found in {runs_dir}")

    launched = 0

    for case_dir in case_dirs:
        case_id = case_dir.name
        # Mark as PENDING before waiting for a launch slot so the UI
        # shows the case is queued while max_parallel is reached.
        with registry_transaction(runs_dir) as registry:
            record = registry.get(case_id, {})
            status = record.get("status")
            if status == STATUS_RUNNING:
                continue
            if resume_only_failed and status not in {STATUS_FAILED}:
                continue
            update_case(registry, case_id, status=STATUS_PENDING)

        def _do_start(selected_case: Path = case_dir) -> None:
            nonlocal launched
            if _start_case(
                selected_case,
                runs_dir=runs_dir,
                nprocs=nprocs,
                nt=nt,
                selection=selection,
                adapter=adapter,
                use_slurm_scheduler=use_slurm_scheduler,
                restart=restart,
                restart_mode=restart_mode,
                restart_value=restart_value,
                restart_path=restart_path,
                mpi_exec_options=mpi_exec_options,
                source=source,
            ):
                launched += 1

        _start_case_with_launch_slot(runs_dir, max_parallel, _do_start, adapter)
    if launched == 0:
        print("No cases launched.", file=sys.stderr)


def _count_running_cases(runs_dir: Path, adapter: SolverAdapter) -> int:
    # Phase 1: snapshot running cases under a brief lock — no slow I/O while locked.
    with registry_transaction(runs_dir) as registry:
        snapshot: dict[str, dict[str, Any]] = {
            cid: dict(rec) for cid, rec in registry.items() if rec.get("status") == STATUS_RUNNING
        }

    # Phase 2: perform slow external checks (is_process_alive / squeue) without holding the lock.
    still_running: set[str] = set()
    to_finalize: dict[str, dict[str, Any]] = {}

    for case_id, record in snapshot.items():
        pid = record.get("pid")
        pid_alive = False
        if pid is not None:
            try:
                pid_alive = is_process_alive(int(pid))
            except (TypeError, ValueError):
                pid_alive = False
        if pid_alive:
            still_running.add(case_id)
            continue
        job_id = _normalize_job_id(record.get("job_id"))
        if job_id:
            job_active = _is_slurm_job_active(job_id)
            if job_active is not False:
                still_running.add(case_id)
                continue
        case_dir = _resolve_case_dir(runs_dir, record.get("path"), case_id)
        outcome = adapter.detect_outcome(case_dir, record.get("start_time")) or STATUS_FAILED
        to_finalize[case_id] = {
            "status": outcome,
            "pid": None,
            "job_id": None if job_id else record.get("job_id"),
            "end_time": record.get("end_time") or timestamp_now(),
        }

    # Phase 3: write finalization updates under a new lock.
    # Re-check status to avoid overwriting a concurrent STATUS_RUNNING → done transition.
    if to_finalize:
        with registry_transaction(runs_dir) as registry:
            for case_id, upd in to_finalize.items():
                if registry.get(case_id, {}).get("status") == STATUS_RUNNING:
                    record = registry[case_id]
                    record.update(upd)
                    record["last_update"] = timestamp_now()

    return len(still_running)


def _wait_for_launch_slot(runs_dir: Path, max_parallel: int, adapter: SolverAdapter) -> None:
    while _count_running_cases(runs_dir, adapter) >= max_parallel:
        time.sleep(1.0)


def _start_case_with_launch_slot(
    runs_dir: Path,
    max_parallel: int,
    start_case: Callable[[], None],
    adapter: SolverAdapter,
) -> None:
    # Wait for a slot without holding the launch lock to avoid blocking
    # other threads from finishing cases and freeing slots.
    _wait_for_launch_slot(runs_dir, max_parallel, adapter)
    with launch_lock(runs_dir):
        # Re-check after acquiring the lock in case another thread took the slot.
        _wait_for_launch_slot(runs_dir, max_parallel, adapter)
        start_case()


def is_process_alive(pid: int) -> bool:
    """Check if a PID is alive (best effort, POSIX-oriented)."""
    try:
        os.kill(pid, 0)
    except ProcessLookupError:
        return False
    except PermissionError:
        return True
    except OSError:
        return False
    return True


def terminate_pid(pid: int, grace: float = 1.0) -> None:
    """Best-effort terminate a process group (or pid)."""
    try:
        os.killpg(pid, signal.SIGTERM)
    except ProcessLookupError:
        return
    except PermissionError:
        os.kill(pid, signal.SIGTERM)
    except OSError:
        os.kill(pid, signal.SIGTERM)

    deadline = time.monotonic() + grace
    while time.monotonic() < deadline:
        if not is_process_alive(pid):
            return
        time.sleep(0.1)

    try:
        os.killpg(pid, signal.SIGKILL)
    except ProcessLookupError:
        return
    except OSError:
        os.kill(pid, signal.SIGKILL)


def refresh_status(
    runs_dir: Path,
    include_doe: bool = False,
    adapter: SolverAdapter | None = None,
) -> list[dict[str, Any]] | tuple[list[dict[str, Any]], list[str]]:
    """Refresh registry status and return ordered case info."""
    if not runs_dir.is_dir():
        return ([], []) if include_doe else []
    adapter = adapter or _default_adapter()
    registry = load_registry(runs_dir)
    if not registry:
        return ([], []) if include_doe else []

    job_states = _query_slurm_job_activity([_normalize_job_id(record.get("job_id")) for record in registry.values()])
    results: list[RefreshResult] = []
    doe_columns: list[str] = []
    seen_doe_columns: set[str] = set()
    for case_id in sorted(registry):
        result = _compute_refresh_result(
            runs_dir,
            case_id,
            registry[case_id],
            include_doe=include_doe,
            job_states=job_states,
            adapter=adapter,
        )
        results.append(result)
        for col in result.doe_columns:
            if col not in seen_doe_columns:
                seen_doe_columns.add(col)
                doe_columns.append(col)

    _merge_refresh_results(runs_dir, results)
    updated_rows = [result.row for result in results]
    if include_doe:
        return updated_rows, doe_columns
    return updated_rows


def _compute_refresh_result(
    runs_dir: Path,
    case_id: str,
    record: Mapping[str, Any],
    *,
    include_doe: bool,
    job_states: Mapping[str, bool | None],
    adapter: SolverAdapter,
) -> RefreshResult:
    case_dir = _resolve_case_dir(runs_dir, record.get("path"), case_id)
    status = str(record.get("status") or STATUS_PREPARED).upper()
    pid = record.get("pid")
    start_time = record.get("start_time")
    end_time = record.get("end_time")
    has_started = bool(start_time)
    job_id = _normalize_job_id(record.get("job_id"))

    if status == STATUS_RUNNING:
        pid_alive = False
        if pid is not None:
            try:
                pid_alive = is_process_alive(int(pid))
            except (TypeError, ValueError):
                pid_alive = False
        job_active: bool | None = None
        if not pid_alive and job_id:
            job_active = job_states.get(job_id)
        should_finalize = not pid_alive and ((job_id and job_active is False) or (not job_id))
        if should_finalize:
            outcome = adapter.detect_outcome(case_dir, start_time) or STATUS_FAILED
            status = outcome
            end_time = end_time or timestamp_now()
            pid = None
            job_id = None
    if status == STATUS_RUNNING and has_started:
        # Even if the PID is stale, trust the log end markers.
        outcome = adapter.detect_outcome(case_dir, start_time)
        if outcome:
            status = outcome
            if outcome == STATUS_DONE and not end_time:
                end_time = timestamp_now()
            pid = None
            job_id = None
    elif status != STATUS_DONE and has_started:
        # Only check for completion if a run was actually started.
        outcome = adapter.detect_outcome(case_dir, start_time)
        if outcome:
            status = outcome
            if outcome == STATUS_DONE and not end_time:
                end_time = timestamp_now()
            pid = None
            job_id = None

    last_iter = adapter.read_progress(case_dir, start_time)

    duration_record = dict(record)
    duration_record["end_time"] = end_time
    duration_s, duration = _compute_duration(duration_record, status)
    convergence = _normalize_convergence(record.get("convergence"))
    last_mod = _format_ts(_case_last_mod(case_dir, adapter))
    _resu_mtime, resu_size_mb = _cached_resu_size_mb(case_dir, adapter)

    row: dict[str, Any] = {
        "case_id": case_id,
        "status": status,
        "convergence": convergence,
        "note": record.get("note") or "",
        "nprocs": record.get("nprocs"),
        "nt": record.get("nt"),
        "last_iter": last_iter,
        "duration_s": duration_s,
        "duration": duration,
        "last_mod": last_mod,
        "resu_size_mb": resu_size_mb,
    }

    doe_cols: tuple[str, ...] = ()
    if include_doe:
        doe_values, raw_doe_cols = read_doe_row(case_dir)
        if raw_doe_cols:
            doe_cols = tuple(col for col in raw_doe_cols if col != "case_id")
        if doe_values:
            doe_values.pop("case_id", None)
            row["doe"] = doe_values

    updates = _build_refresh_updates(record, case_dir, status, last_iter, pid, job_id, end_time)
    return RefreshResult(case_id=case_id, snapshot=dict(record), row=row, updates=updates, doe_columns=doe_cols)


def _build_refresh_updates(
    snapshot: Mapping[str, Any],
    case_dir: Path,
    status: str,
    last_iter: int | None,
    pid: int | str | None,
    job_id: str | None,
    end_time: str | None,
) -> dict[str, Any]:
    updates: dict[str, Any] = {}
    path_value = str(case_dir)
    if str(snapshot.get("path") or "") != path_value:
        updates["path"] = path_value
    if str(snapshot.get("status") or STATUS_PREPARED).upper() != status:
        updates["status"] = status
    if snapshot.get("last_iter") != last_iter:
        updates["last_iter"] = last_iter
    if snapshot.get("pid") != pid:
        updates["pid"] = pid
    if snapshot.get("job_id") != job_id:
        updates["job_id"] = job_id
    if snapshot.get("end_time") != end_time:
        updates["end_time"] = end_time
    return updates


def _merge_refresh_results(runs_dir: Path, results: Sequence[RefreshResult]) -> None:
    if not results:
        return

    def apply_mutation(registry: dict[str, dict[str, Any]]) -> bool:
        changed = False
        for result in results:
            if not result.updates:
                continue
            current = registry.get(result.case_id)
            if current is None:
                continue
            if not _same_refresh_identity(current, result.snapshot):
                continue
            if _apply_refresh_updates(current, result.updates):
                current["last_update"] = timestamp_now()
                changed = True
        return changed

    mutate_registry(runs_dir, apply_mutation)


def _same_refresh_identity(current: Mapping[str, Any], snapshot: Mapping[str, Any]) -> bool:
    return (
        str(current.get("start_time") or "") == str(snapshot.get("start_time") or "")
        and str(current.get("pid") or "") == str(snapshot.get("pid") or "")
        and str(current.get("job_id") or "") == str(snapshot.get("job_id") or "")
        and str(current.get("status") or STATUS_PREPARED).upper()
        == str(snapshot.get("status") or STATUS_PREPARED).upper()
    )


def _apply_refresh_updates(record: dict[str, Any], updates: Mapping[str, Any]) -> bool:
    changed = False
    for key, value in updates.items():
        if record.get(key) == value:
            continue
        record[key] = value
        changed = True
    return changed


def _query_slurm_job_activity(job_ids: Sequence[str | None]) -> dict[str, bool | None]:
    normalized: list[str] = []
    seen: set[str] = set()
    for job_id in job_ids:
        if not job_id:
            continue
        if job_id in seen:
            continue
        seen.add(job_id)
        normalized.append(job_id)
    if not normalized:
        return {}
    states: dict[str, bool | None] = {job_id: None for job_id in normalized}
    if shutil.which("squeue"):
        chunk_size = 128
        for start in range(0, len(normalized), chunk_size):
            chunk = normalized[start : start + chunk_size]
            try:
                proc = subprocess.run(
                    ["squeue", "-h", "-j", ",".join(chunk), "-o", "%i"],
                    capture_output=True,
                    text=True,
                    check=False,
                    timeout=3.0,
                )
            except (OSError, subprocess.TimeoutExpired):
                continue
            if proc.returncode != 0:
                continue
            active = {line.strip() for line in str(proc.stdout or "").splitlines() if line.strip()}
            for job_id in chunk:
                states[job_id] = job_id in active
    for job_id, state in list(states.items()):
        if state is None:
            states[job_id] = _is_slurm_job_active(job_id)
    return states


def _cached_resu_size_mb(case_dir: Path, adapter: SolverAdapter) -> tuple[float | None, float | None]:
    resu_root = adapter.results_root(case_dir)
    cache_key = str(case_dir.resolve())
    resu_mtime = None
    if resu_root.is_dir():
        try:
            resu_mtime = resu_root.stat().st_mtime
        except OSError:
            resu_mtime = None
    if resu_mtime is None:
        with RESU_SIZE_CACHE_LOCK:
            RESU_SIZE_CACHE.pop(cache_key, None)
        return None, None
    with RESU_SIZE_CACHE_LOCK:
        cached = RESU_SIZE_CACHE.get(cache_key)
        if cached and cached.get("mtime") == resu_mtime:
            return resu_mtime, cached.get("size")
    size = _resu_size_mb(case_dir, adapter)
    with RESU_SIZE_CACHE_LOCK:
        RESU_SIZE_CACHE[cache_key] = {"mtime": resu_mtime, "size": size}
    return resu_mtime, size


def _parse_iso(ts: str | None) -> float | None:
    if not ts:
        return None
    try:
        return datetime.fromisoformat(ts).timestamp()
    except ValueError:
        return None


def _format_duration(seconds: float | None) -> str | None:
    if seconds is None:
        return None
    total = max(0, int(seconds))
    hours, rem = divmod(total, 3600)
    minutes, secs = divmod(rem, 60)
    if hours:
        return f"{hours}h{minutes:02d}m"
    if minutes:
        return f"{minutes}m{secs:02d}s"
    return f"{secs}s"


def _compute_duration(record: Mapping[str, Any], status: str) -> tuple[int | None, str | None]:
    start_ts = _parse_iso(record.get("start_time"))
    if start_ts is None:
        return None, None
    end_ts = _parse_iso(record.get("end_time"))
    if end_ts is None and status == STATUS_RUNNING:
        end_ts = time.time()
    if end_ts is None:
        return None, None
    delta = max(0, end_ts - start_ts)
    return int(delta), _format_duration(delta)


def _format_ts(ts: float | None) -> str | None:
    if ts is None:
        return None
    return datetime.fromtimestamp(ts, tz=UTC).isoformat(timespec="seconds")


def _normalize_convergence(value: object) -> str:
    raw = str(value or "").strip().lower()
    if not raw:
        return ""
    if raw in {"converged", "yes", "true", "1"}:
        return "converged"
    if raw in {
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
    return ""


def _case_last_mod(case_dir: Path, adapter: SolverAdapter) -> float | None:
    try:
        base = case_dir.stat().st_mtime
    except OSError:
        base = None
    resu_root = adapter.results_root(case_dir)
    if resu_root.is_dir():
        try:
            resu_mtime = resu_root.stat().st_mtime
            if base is None:
                base = resu_mtime
            else:
                base = max(base, resu_mtime)
        except OSError:
            pass
    return base


def _resu_size_mb(case_dir: Path, adapter: SolverAdapter, limit_files: int = 200000) -> float | None:
    resu_root = adapter.results_root(case_dir)
    if not resu_root.is_dir():
        return None
    total = 0
    count = 0
    for root, _dirs, files in os.walk(resu_root):
        for name in files:
            count += 1
            if count > limit_files:
                break
            try:
                total += (Path(root) / name).stat().st_size
            except OSError:
                continue
        if count > limit_files:
            break
    return round(total / (1024 * 1024), 2)


__all__ = [
    "is_process_alive",
    "refresh_status",
    "run_cases",
    "terminate_pid",
]
