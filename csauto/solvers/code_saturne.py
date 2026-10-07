"""code_saturne implementation of the solver adapter boundary."""

from __future__ import annotations

import math
import re
import shlex
from collections import deque
from collections.abc import Mapping, Sequence
from pathlib import Path
from typing import TYPE_CHECKING, Any, ClassVar

from ..execution import (
    RUNTIME_SINGULARITY,
    shared_dir_symlink_mounts,
    singularity_paths,
    singularity_shell_exec_prefix,
)
from ..logs import is_recent, parse_start_time, read_tail_lines, scan_outcome
from ..pathutil import is_within_root
from ..probes import list_run_csv_files, locate_run_csv_files
from ..registry import STATUS_FAILED
from ..svg_utils import as_float
from .base import CompareKind, PerfColumn, SolverAdapterBase

if TYPE_CHECKING:
    from ..execution import RuntimeSelection
    from ..maintenance import DoctorItem

CHECKPOINT_STATE_RE = re.compile(r"Checkpoint at iteration\s+(?P<iter>\d+),\s+physical time\s+(?P<time>[-+0-9.eE]+)")

CONTROL_FILENAME = "control_file"
# Status markers code_saturne leaves in RESU/<run>/ when a run stops abnormally.
# Its own cs_case.py maps run_status.<name> to a case state; only these two mean
# failure (FAILED and EXCEEDED_TIME_LIMIT). The others it writes are progress
# states (preparing, prepared, preprocessing, ready, running, saving, finished),
# and a normal completion removes the marker altogether.
RUN_STATUS_FAILURE_NAMES = ("run_status.failed", "run_status.exceeded_time_limit")
# code_saturne prints its configured iteration limit once at startup, into setup.log:
#   "      nt_max:  500 (final time step)\n" (cs_time_step_log_setup, src/base/cs_time_step.cpp)
NT_MAX_SETUP_RE = re.compile(r"nt_max:\s*(-?\d+)")
# ...and re-echoes it into the main log every time a control_file directive changes it:
#   "  max_time_step                        600 (current:            9)\n" (src/base/cs_control.cpp)
NT_MAX_CONTROL_RE = re.compile(r"max_time_step\s+(\d+)\s*\(current:")
# Results layout inside each RESU/<run>/ directory.
PROBES_DIRNAME = "monitoring"
PROFILES_DIRNAME = "profiles"
RESIDUALS_FILENAME = "residuals.csv"
PERFORMANCE_FILENAME = "performance.log"
RUN_STATUS_RUNNING = "run_status.running"
# The solver's main logs, best first: run_solver.log, or listing on older versions.
SOLVER_LOG_NAMES = ("run_solver.log", "listing")
# Friendly names locate_case_file also looks up in the RESU run directories.
RUN_FILE_NAMES = frozenset({*SOLVER_LOG_NAMES, RESIDUALS_FILENAME, RUN_STATUS_RUNNING, PERFORMANCE_FILENAME})
# Root-level console logs some setups write, searched for progress.
ROOT_LISTING_NAMES = ("listing", "listing.txt", "listing.log", "listing.out")

OUTCOME_SUCCESS_PATTERNS = tuple(
    re.compile(text, re.IGNORECASE)
    for text in (
        r"END OF CALCULATION",
        r"FINAL STAGE OF THE CALCULATION",
        r"CALCULATION COMPLETED",
        r"Calculation ended normally",
    )
)
OUTCOME_FAILURE_PATTERNS = (re.compile(r"FATAL ERROR", re.IGNORECASE), re.compile(r"ERROR DETECTED", re.IGNORECASE))
# code_saturne reports a clean run with "No error detected", which the generic
# error pattern would otherwise flag.
ANOMALY_IGNORE_PATTERNS = (re.compile(r"\bno errors? detected\b", re.IGNORECASE),)
# CFD vocabulary on top of the generic anomaly patterns.
CFD_WARNING_PATTERN = re.compile(r"(divergence|unstable|not converged|cfl|clipping)", re.IGNORECASE)
PROGRESS_PATTERNS = (
    re.compile(r"[Ii]teration\s+(\d+)"),
    re.compile(r"[Tt]ime\s+step\s+(\d+)"),
    re.compile(r"Iter\s*=\s*(\d+)"),
)
RUN_STATUS_STEP_RE = re.compile(r"time step:\s*(\d+)", re.IGNORECASE)
RESTART_ITER_PATTERNS = (
    re.compile(r"\bnt_prev\b\s*[:=]\s*(\d+)", re.IGNORECASE),
    re.compile(r"NUMBER OF THE PREVIOUS TIME STEP\s+nt_prev\s*=\s*(\d+)", re.IGNORECASE),
)
RESTART_TIME_PATTERNS = (
    re.compile(r"\bt_prev\b\s*[:=]\s*([-+0-9.eE]+)", re.IGNORECASE),
    re.compile(r"physical time\s+([-+0-9.eE]+)", re.IGNORECASE),
)


def _find_input_file(template_dir: Path, name: str) -> Path | None:
    """Locate `name` at the case root, in DATA/, or as the single match anywhere below."""
    for candidate in (template_dir / name, template_dir / "DATA" / name):
        if candidate.is_file():
            return candidate
    matches = list(template_dir.rglob(name))
    if len(matches) > 1:
        found = ", ".join(str(p.relative_to(template_dir)) for p in matches[:5])
        suffix = " ..." if len(matches) > 5 else ""
        raise ValueError(f"Multiple {name} found in {template_dir}: {found}{suffix}")
    return matches[0] if matches else None


def parse_residuals_from_log(log_path: Path) -> tuple[list[str], list[dict[str, str]]]:
    """Parse the residual blocks code_saturne prints into run_solver.log, for runs without residuals.csv."""
    if not log_path or not log_path.is_file():
        return [], []
    block_idx = 0
    current: dict[str, str] | None = None
    block_has_data = False
    rows: list[dict[str, str]] = []
    fields: list[str] = ["iteration"]
    header_re = re.compile(r"Variable\s+Rhs norm", re.IGNORECASE)
    sep_re = re.compile(r"^-{3,}")
    try:
        with log_path.open("r", encoding="utf-8", errors="ignore") as handle:
            for line in handle:
                if header_re.search(line):
                    if current:
                        rows.append(current)
                        current = None
                    block_has_data = False
                    block_idx += 1
                    current = {"iteration": str(block_idx)}
                    continue
                if current is not None:
                    if sep_re.match(line) and not block_has_data:
                        continue
                    if not line.strip() or sep_re.match(line):
                        if current:
                            rows.append(current)
                        current = None
                        block_has_data = False
                        continue
                    parts = line.split()
                    if len(parts) < 3:
                        continue
                    name_tokens: list[str] = []
                    value_token: str | None = None
                    for tok in parts[1:]:
                        if as_float(tok) is not None:
                            value_token = parts[-1]
                            break
                        name_tokens.append(tok)
                    if not name_tokens or value_token is None:
                        continue
                    name = "_".join(t.lower() for t in name_tokens)
                    try:
                        float(value_token)
                    except (ValueError, TypeError):
                        continue
                    current[name] = value_token
                    if name not in fields:
                        fields.append(name)
                    block_has_data = True
            if current:
                rows.append(current)
    except OSError:
        return [], []
    return fields, rows


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


def _extract_last_iteration(log_path: Path) -> int | None:
    """The last iteration number printed in the tail of a log, if any."""
    for line in reversed(read_tail_lines(log_path, lines=400)):
        for pattern in PROGRESS_PATTERNS:
            match = pattern.search(line)
            if match:
                return int(match.group(1))
    return None


def _extract_run_status_iteration(status_path: Path) -> int | None:
    """The time step code_saturne records in run_status.running."""
    try:
        content = status_path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return None
    match = RUN_STATUS_STEP_RE.search(content)
    return int(match.group(1)) if match else None


def _last_match(lines: Sequence[str], patterns: Sequence[re.Pattern[str]], cast: Any) -> Any:
    """The value captured by the last line matching any pattern, converted with `cast`."""
    for raw in reversed(lines):
        for pattern in patterns:
            match = pattern.search(raw)
            if not match:
                continue
            try:
                return cast(match.group(1))
            except (ValueError, TypeError):
                continue
    return None


def _require_positive_restart_value(
    restart_value: int | float | None,
    mode_label: str,
    *,
    integer: bool = False,
) -> float:
    """Validate and return a positive restart value, raising ValueError on failure."""
    if restart_value is None:
        raise ValueError(f"restart_value required for restart_mode={mode_label}")
    v = float(restart_value)
    if not math.isfinite(v) or v <= 0:
        raise ValueError(f"restart_value must be > 0 for restart_mode={mode_label}")
    if integer and not v.is_integer():
        raise ValueError(f"restart_value must be an integer > 0 for restart_mode={mode_label}")
    return v


class CodeSaturneAdapter(SolverAdapterBase):
    name: ClassVar[str] = "code_saturne"
    native_bin_name: ClassVar[str] = "code_saturne"
    container_bin_name: ClassVar[str] = "code_saturne"
    container_root: ClassVar[str] = "/home/code_saturne"
    default_docker_image: ClassVar[str] = "simvia/code_saturne"
    results_dirname: ClassVar[str] = "RESU"
    shared_dir_names: ClassVar[tuple[str, ...]] = ("MESH", "POST")
    readonly_shared_dir_names: ClassVar[frozenset[str]] = frozenset({"MESH"})
    template_input_names: ClassVar[frozenset[str]] = frozenset({"setup.xml", "run.cfg"})
    anomaly_file_names: ClassVar[tuple[str, ...]] = ("csauto.stderr", "run_solver.log", "listing", "csauto.stdout")
    anomaly_patterns: ClassVar[tuple[tuple[str, re.Pattern[str]], ...]] = (("warn", CFD_WARNING_PATTERN),)
    anomaly_ignore_patterns: ClassVar[tuple[re.Pattern[str], ...]] = ANOMALY_IGNORE_PATTERNS
    tail_file_names: ClassVar[tuple[str, ...]] = (
        "run_solver.log",
        "listing",
        "run_status.running",
        "csauto.stdout",
        "csauto.stderr",
        "performance.log",
    )
    cleanup_log_names: ClassVar[frozenset[str]] = frozenset(
        {
            "run_solver.log",
            "listing",
            "csauto.stdout",
            "csauto.stderr",
            "performance.log",
            "run_status.running",
        }
    )
    performance_columns: ClassVar[tuple[PerfColumn, ...]] = (
        PerfColumn("elapsed_time", "Elapsed (s)", "time"),
        PerfColumn("io_time", "I/O (s)", "time"),
        PerfColumn("linear_solver_time", "Linear Solver (s)", "time"),
        PerfColumn("gradients_time", "Gradients (s)", "time"),
        PerfColumn("balances_time", "Balances (s)", "time"),
        PerfColumn("mpi_ranks", "MPI Ranks", "int"),
        PerfColumn("threads", "Threads", "int"),
    )
    dashboard_panels: ClassVar[tuple[str, ...]] = (
        "status",
        "residuals",
        "probes",
        "performance",
        "compare",
        "tail",
        "errors",
    )
    compare_kinds: ClassVar[tuple[CompareKind, ...]] = (
        CompareKind("setup.xml", "setup.xml"),
        CompareKind("doe_row.csv", "doe_row.csv"),
        CompareKind("run_solver.log", "run_solver.log"),
        CompareKind("performance.log", "performance.log"),
    )
    control_actions: ClassVar[frozenset[str]] = frozenset({"stop", "extend", "checkpoint", "flush"})

    def run_argv(self, case_path: str | Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None) -> list[str]:
        argv = ["run", "--case", str(case_path), "-n", str(nprocs), "--nt", str(nt)]
        if run_args:
            argv.extend(str(arg) for arg in run_args if str(arg) != "")
        return argv

    def gui_argv(self, setup_path: str | Path) -> list[str]:
        return ["gui", str(setup_path)]

    def build_slurm_script(
        self,
        case_dir: Path,
        nprocs: int,
        nt: int,
        selection: RuntimeSelection,
        run_args: Sequence[str] | None = None,
        env_vars: Mapping[str, str] | None = None,
    ) -> str | None:
        """Generate the 3-stage (stage/initialize -> srun cs_solver -> finalize) singularity batch script."""
        if selection.runtime != RUNTIME_SINGULARITY:
            return None
        if not selection.singularity_bin or not selection.singularity_image:
            raise ValueError("Incomplete singularity configuration.")

        setup_path = self.find_setup_file(case_dir)
        try:
            setup_rel = setup_path.relative_to(case_dir)
        except ValueError:
            setup_rel = Path(setup_path.name)

        runs_root, container_root, container_case = singularity_paths(case_dir, self.container_root)
        container_setup = f"{container_case}/{setup_rel.as_posix()}"
        extra_binds = [
            f"{target}:{target}:ro" if readonly else f"{target}:{target}"
            for target, readonly in shared_dir_symlink_mounts(
                runs_root, self.shared_dir_names, self.readonly_shared_dir_names
            )
        ]
        env_flags: list[str] = []
        for key, value in sorted((env_vars or {}).items()):
            env_flags.extend(["--env", f"{key}={value}"])
        env_flags_str = " ".join(shlex.quote(part) for part in env_flags)
        stage_args = " ".join(shlex.quote(str(arg)) for arg in (run_args or []) if str(arg) != "")

        stage_command = singularity_shell_exec_prefix("$CONTAINER_CASE", env_flags_str, extra_binds)
        stage_command.extend(
            [
                self.container_bin_name,
                "run",
                "-p",
                '"$CONTAINER_SETUP"',
                '--id="$RUN_ID"',
                "--stage",
                "--initialize",
                "-n",
                str(nprocs),
                "--nt",
                str(nt),
            ]
        )
        if stage_args:
            stage_command.append(stage_args)

        finalize_command = singularity_shell_exec_prefix("$CONTAINER_CASE", env_flags_str, extra_binds)
        finalize_command.extend(
            [
                self.container_bin_name,
                "run",
                "-p",
                '"$CONTAINER_SETUP"',
                '--id="$RUN_ID"',
                "--finalize",
            ]
        )

        solver_command = [
            "srun",
            f"--ntasks={nprocs}",
            f"--cpus-per-task={nt}",
            '--output="$EXEC_DIR/solver_%j.out"',
            '--error="$EXEC_DIR/solver_%j.err"',
        ]
        solver_command.extend(singularity_shell_exec_prefix("$EXEC_DIR_CONTAINER", env_flags_str, extra_binds))
        solver_command.extend(
            [
                "bash",
                "-lc",
                shlex.quote("exec ./cs_solver --mpi"),
            ]
        )

        return "\n".join(
            [
                "#!/bin/bash",
                "set -euo pipefail",
                f"APPTAINER_BIN={shlex.quote(selection.singularity_bin)}",
                f"IMAGE={shlex.quote(selection.singularity_image)}",
                f"RUNS_ROOT={shlex.quote(str(runs_root))}",
                f"CASE_DIR={shlex.quote(str(case_dir.resolve()))}",
                f"CONTAINER_ROOT={shlex.quote(container_root)}",
                f"CASE_ID={shlex.quote(case_dir.name)}",
                'CONTAINER_CASE="$CONTAINER_ROOT/$CASE_ID"',
                f"CONTAINER_SETUP={shlex.quote(container_setup)}",
                'RUN_ID="csauto_${SLURM_JOB_ID:-$(date +%Y%m%d_%H%M%S)}"',
                f'EXEC_DIR="$CASE_DIR/{self.results_dirname}/$RUN_ID"',
                f'EXEC_DIR_CONTAINER="$CONTAINER_CASE/{self.results_dirname}/$RUN_ID"',
                "unset SLURM_NPROCS SLURM_NNODES SLURM_TASKS_PER_NODE SLURM_JOBID SLURM_CPUS_PER_TASK",
                'cd "$CASE_DIR"',
                'echo "=== Step 1/3: Case preparation ==="',
                " ".join(stage_command),
                'if [ ! -d "$EXEC_DIR" ]; then',
                '  echo "Missing execution directory after preparation: $EXEC_DIR" >&2',
                "  exit 1",
                "fi",
                'echo "=== Step 2/3: Solver execution ==="',
                " ".join(solver_command),
                'echo "=== Step 3/3: Finalization ==="',
                " ".join(finalize_command),
                'echo "=== Simulation completed successfully ==="',
                "",
            ]
        )

    def mpi_env(self, mpi_exec_options: str | None) -> dict[str, str]:
        mpi_opts = str(mpi_exec_options or "").strip()
        if not mpi_opts:
            return {}
        return {"CS_MPIEXEC_OPTIONS": mpi_opts}

    def build_restart_args(
        self,
        case_dir: Path,
        restart_mode: str | None,
        restart_value: int | float | None,
        restart_path: str | None,
    ) -> tuple[list[str], dict[str, Any]]:
        details: dict[str, Any] = {"restart": True}
        path_value = (restart_path or "").strip()
        restart_run_id: str | None = None
        if path_value:
            details["restart_path"] = path_value
            norm = path_value.replace("\\", "/")
            if "/" not in norm:
                restart_run_id = norm
            else:
                parts = [part for part in norm.split("/") if part]
                if parts:
                    if parts[-1].lower() == "checkpoint" and len(parts) >= 2:
                        restart_run_id = parts[-2]
                    elif self.results_dirname in parts:
                        idx = parts.index(self.results_dirname)
                        if idx + 1 < len(parts):
                            restart_run_id = parts[idx + 1]
                if not restart_run_id:
                    raise ValueError(
                        f"restart_path must be a run id (e.g. 20260308-0923) or a "
                        f"{self.results_dirname}/<run_id>/checkpoint path"
                    )
        else:
            resu_root = self.results_root(case_dir)
            if resu_root.is_dir():
                try:
                    resu_dirs = [p for p in resu_root.iterdir() if p.is_dir()]
                    resu_dirs.sort(key=lambda p: p.stat().st_mtime, reverse=True)
                except OSError:
                    resu_dirs = []
                for run_dir in resu_dirs:
                    checkpoint_dir = run_dir / "checkpoint"
                    if not checkpoint_dir.is_dir():
                        continue
                    try:
                        has_checkpoint = any(
                            child.is_file() and (child.name.endswith(".csc") or ".csc." in child.name)
                            for child in checkpoint_dir.iterdir()
                        )
                    except OSError:
                        has_checkpoint = False
                    if has_checkpoint:
                        restart_run_id = run_dir.name
                        break
        if not restart_run_id:
            raise ValueError(f"No checkpoint found for {case_dir.name}")
        details["restart_run_id"] = restart_run_id
        base_iter, base_time = self._extract_restart_checkpoint_state(case_dir, restart_run_id)
        if base_iter is not None:
            details["restart_base_iteration"] = base_iter
        if base_time is not None:
            details["restart_base_time"] = base_time
        parametric_filters: list[str] = [f"--restart={restart_run_id}"]
        mode_raw = (restart_mode or "").strip().lower()
        if mode_raw in {"iteration", "iterations", "iter"}:
            increment = _require_positive_restart_value(restart_value, "iterations", integer=True)
            target = int(increment) + base_iter if base_iter is not None else int(increment)
            parametric_filters.append(f"--iter-num={target}")
            details.update(restart_mode="iterations", restart_increment=int(increment), restart_value=target)
        elif mode_raw in {"physical_time", "time", "tmax"}:
            increment = _require_positive_restart_value(restart_value, "physical_time")
            target = increment + base_time if base_time is not None else increment
            parametric_filters.append(f"--tmax={format(target, '.12g')}")
            details.update(restart_mode="physical_time", restart_increment=increment, restart_value=target)
        elif mode_raw:
            raise ValueError("Invalid restart_mode (must be iterations or physical_time)")
        else:
            if restart_value is not None:
                raise ValueError("restart_mode required when restart_value is set")
            details["restart_mode"] = "auto"
        return [f"--parametric-args={' '.join(parametric_filters)}"], details

    def _extract_restart_checkpoint_state(self, case_dir: Path, run_id: str) -> tuple[int | None, float | None]:
        run_dir = self.results_root(case_dir) / run_id
        if not run_dir.is_dir():
            return None, None
        candidates = [run_dir / "run_solver.log", run_dir / "listing", run_dir / "setup.log"]
        for path in candidates:
            if not path.is_file():
                continue
            try:
                with path.open("r", encoding="utf-8", errors="ignore") as handle:
                    lines = deque(handle, maxlen=12000)
            except OSError:
                continue
            for raw in reversed(lines):
                match = CHECKPOINT_STATE_RE.search(raw)
                if not match:
                    continue
                try:
                    it_val = int(match.group("iter"))
                except (ValueError, OverflowError):
                    it_val = None
                try:
                    t_val = float(match.group("time"))
                except (ValueError, OverflowError):
                    t_val = None
                return it_val, t_val
        return None, None

    def detect_outcome(self, case_dir: Path, start_time: str | None = None) -> str | None:
        log_dirs = [case_dir, *self.list_run_dirs(case_dir)]
        outcome = scan_outcome(
            [log_dir / name for log_dir in log_dirs for name in SOLVER_LOG_NAMES],
            start_time,
            OUTCOME_SUCCESS_PATTERNS,
            OUTCOME_FAILURE_PATTERNS,
            self.anomaly_ignore_patterns,
        )
        if outcome:
            return outcome
        # The logs gave no verdict. A run that fails before the solver starts (a
        # missing mesh, say) writes no run_solver.log at all, only a status
        # marker beside it. Restricted to the current run, so a marker left by a
        # previous run never overrides the log of this one.
        start_ts = parse_start_time(start_time)
        for run_dir in self.list_run_dirs(case_dir):
            for name in RUN_STATUS_FAILURE_NAMES:
                marker = run_dir / name
                if marker.is_file() and is_recent(marker, start_ts):
                    return STATUS_FAILED
        return None

    def read_progress(self, case_dir: Path, start_time: str | None = None) -> int | None:
        start_ts = parse_start_time(start_time)
        markers = [run_dir / RUN_STATUS_RUNNING for run_dir in self.list_run_dirs(case_dir)]
        markers = [m for m in markers if m.is_file() and is_recent(m, start_ts)]
        if markers:
            return _extract_run_status_iteration(max(markers, key=lambda p: p.stat().st_mtime))
        return self.current_iteration(case_dir, start_time)

    def read_restart_origin(self, case_dir: Path) -> dict[str, int | float]:
        """Iteration and physical time the latest run restarted from, read from its logs."""
        latest = self.latest_run_dir(case_dir)
        if latest is None:
            return {}
        iter_value: int | None = None
        time_value: float | None = None
        for name in ("setup.log", *SOLVER_LOG_NAMES):
            lines = read_tail_lines(latest / name, lines=12000)
            if iter_value is None:
                iter_value = _last_match(lines, RESTART_ITER_PATTERNS, int)
            if time_value is None:
                time_value = _last_match(lines, RESTART_TIME_PATTERNS, float)
            if iter_value is not None and time_value is not None:
                break
        result: dict[str, int | float] = {}
        if iter_value is not None and iter_value >= 0:
            result["iteration"] = iter_value
        if time_value is not None and time_value >= 0:
            result["time"] = time_value
        return result

    def locate_case_file(self, case_dir: Path, name: str) -> Path | None:
        """Resolve case-relative paths, run files in the newest RESU run that has them, and setup.xml."""
        direct = super().locate_case_file(case_dir, name)
        if direct:
            return direct
        if name in RUN_FILE_NAMES:
            root = case_dir.resolve()
            for run_dir in self.list_run_dirs(case_dir):
                candidate = run_dir / name
                if candidate.is_file() and is_within_root(candidate, root):
                    return candidate
        if name == "setup.xml":
            try:
                return self.find_setup_file(case_dir)
            except (FileNotFoundError, ValueError):
                return None
        return None

    def _locate_log_file(self, case_dir: Path, start_time: str | None = None) -> Path | None:
        """The current run's most recently written solver log, else its newest console log."""
        start_ts = parse_start_time(start_time)
        candidates = [case_dir / name for name in (*ROOT_LISTING_NAMES, "csauto.stdout")]
        candidates += [path for name in SOLVER_LOG_NAMES if (path := self.locate_case_file(case_dir, name))]
        current = [p for p in dict.fromkeys(candidates) if p.is_file() and is_recent(p, start_ts)]
        if not current:
            return None
        solver_logs = [p for p in current if p.name in {*SOLVER_LOG_NAMES, *ROOT_LISTING_NAMES}]
        return max(solver_logs or current, key=lambda p: p.stat().st_mtime)

    def find_setup_file(self, template_dir: Path) -> Path:
        setup_path = _find_input_file(template_dir, "setup.xml")
        if setup_path is None:
            raise FileNotFoundError(f"setup.xml not found in template: {template_dir}")
        return setup_path

    def find_run_config(self, template_dir: Path) -> Path | None:
        return _find_input_file(template_dir, "run.cfg")

    def doctor_checks(
        self,
        runs_dir: Path,
        case_dirs: Sequence[Path],
        *,
        runtime: str | None = None,
        solver_bin: str | None = None,
        singularity_image: str | None = None,
        singularity_bin: str | None = None,
    ) -> list[DoctorItem]:
        from ..maintenance import DoctorItem

        missing: list[str] = []
        for case_dir in case_dirs:
            try:
                self.find_setup_file(case_dir)
            except (FileNotFoundError, ValueError):
                missing.append(case_dir.name)
        if missing:
            sample = ", ".join(missing[:5])
            suffix = " ..." if len(missing) > 5 else ""
            return [DoctorItem(level="fail", message=f"setup.xml missing for: {sample}{suffix}")]
        return [DoctorItem(level="ok", message="setup.xml present in every case")]

    def find_residuals_files(self, case_dir: Path, include_history: bool = False) -> list[Path]:
        return self.find_run_files(case_dir, RESIDUALS_FILENAME, include_history=include_history)

    def parse_live_residuals(self, case_dir: Path) -> tuple[list[str], list[dict[str, str]]]:
        log_path = self.locate_case_file(case_dir, "run_solver.log")
        if not log_path:
            return [], []
        return parse_residuals_from_log(log_path)

    def list_probe_files(self, case_dir: Path, limit: int = 200) -> list[str]:
        return list_run_csv_files(self.latest_run_dir(case_dir), PROBES_DIRNAME, limit=limit)

    def list_profile_files(self, case_dir: Path, limit: int = 200) -> list[str]:
        return list_run_csv_files(self.latest_run_dir(case_dir), PROFILES_DIRNAME, limit=limit, with_prefix=True)

    def locate_probe_files(self, case_dir: Path, probe_ref: str, include_history: bool = False) -> list[Path]:
        return locate_run_csv_files(
            case_dir,
            self.list_run_dirs(case_dir),
            (PROBES_DIRNAME, PROFILES_DIRNAME),
            probe_ref,
            include_history=include_history,
        )

    def find_performance_log(self, case_dir: Path) -> Path | None:
        found = self.find_run_files(case_dir, PERFORMANCE_FILENAME)
        return found[0] if found else None

    def parse_performance(self, path: Path) -> dict[str, str | None]:
        return parse_performance_log(path)

    def apply_control(
        self,
        case_dir: Path,
        action: str,
        *,
        value: int | None = None,
        start_time: str | None = None,
    ) -> dict[str, Any]:
        """Drop a code_saturne control_file directive for a running case."""
        details: dict[str, Any] = {"action": action}
        if action == "stop":
            self.write_control_directive(case_dir, "max_time_step 0")
        elif action == "checkpoint":
            self.write_control_directive(case_dir, "checkpoint_time_step 0")
        elif action == "flush":
            self.write_control_directive(case_dir, "flush")
        elif action == "extend":
            if value is None or int(value) <= 0:
                raise ValueError("extend requires a positive integer number of time steps")
            increment = int(value)
            # "Raise max_time_step by N" means N beyond the run's *configured* limit, which
            # only the solver itself knows (registry["nt"] is csauto's --nt, i.e. OpenMP
            # thread count -- unrelated). Fall back to the live iteration count only if the
            # configured limit can't be read yet (e.g. setup.log not flushed right after launch).
            base = self.configured_max_time_step(case_dir)
            if base is None:
                base = self.current_iteration(case_dir, start_time) or 0
            target = base + increment
            self.write_control_directive(case_dir, f"max_time_step {target}")
            details.update(increment=increment, previous_max_time_step=base, target_time_step=target)
        else:
            raise ValueError(f"Invalid control action: {action!r} (expected one of {sorted(self.control_actions)})")
        return details

    def write_control_directive(self, case_dir: Path, directive: str) -> Path:
        """Append a directive line to control_file in the active RESU run directory.

        Code_Saturne polls this file once per time step and deletes it after reading,
        so appending (rather than overwriting) composes correctly if multiple
        directives are queued before the next poll.
        """
        resu_dir = self.latest_run_dir(case_dir)
        if resu_dir is None:
            raise FileNotFoundError(f"No RESU run directory found for {case_dir.name}")
        control_path = resu_dir / CONTROL_FILENAME
        with control_path.open("a", encoding="utf-8") as handle:
            handle.write(f"{directive}\n")
        return control_path

    def current_iteration(self, case_dir: Path, start_time: str | None = None) -> int | None:
        """Best-effort read of the case's current time step from its live log."""
        log_path = self._locate_log_file(case_dir, start_time)
        return _extract_last_iteration(log_path) if log_path else None

    def configured_max_time_step(self, case_dir: Path) -> int | None:
        """Best-effort read of the run's actual configured iteration limit (nt_max).

        This is read from the solver's own logs, not from anything csauto passed on
        the command line: code_saturne logs it once at startup (setup.log) and again
        any time a control_file directive changes it (run_solver.log/listing), so
        repeated extends compound on top of each other correctly.
        """
        resu_dir = self.latest_run_dir(case_dir)
        if resu_dir is None:
            return None
        candidates: list[int] = []

        setup_log = resu_dir / "setup.log"
        if setup_log.is_file():
            text = setup_log.read_text(encoding="utf-8", errors="ignore")
            match = NT_MAX_SETUP_RE.search(text)
            if match:
                value = int(match.group(1))
                if value >= 0:
                    candidates.append(value)

        for name in ("run_solver.log", "listing"):
            log_path = resu_dir / name
            if not log_path.is_file():
                continue
            text = log_path.read_text(encoding="utf-8", errors="ignore")
            matches = NT_MAX_CONTROL_RE.findall(text)
            if matches:
                candidates.append(int(matches[-1]))

        return max(candidates) if candidates else None
