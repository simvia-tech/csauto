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
    singularity_paths,
    singularity_shell_exec_prefix,
)
from ..logs import (
    ANOMALY_FILES_DEFAULT,
    PERFORMANCE_FIELDS,
    detect_run_outcome,
    extract_last_iteration,
    extract_restart_origin,
    extract_run_status_iteration,
    find_latest_performance_log,
    locate_case_file,
    locate_log_file,
    locate_run_status_file,
    parse_performance_log,
)
from ..probes import list_probe_files, list_profile_files, locate_probe_files
from ..residuals import find_residuals_files, parse_residuals_from_log
from ..template import find_run_cfg, find_setup_file
from .base import SolverAdapterBase

if TYPE_CHECKING:
    from ..execution import RuntimeSelection
    from ..maintenance import DoctorItem

CHECKPOINT_STATE_RE = re.compile(r"Checkpoint at iteration\s+(?P<iter>\d+),\s+physical time\s+(?P<time>[-+0-9.eE]+)")


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
    template_input_names: ClassVar[frozenset[str]] = frozenset({"setup.xml", "run.cfg"})
    anomaly_file_names: ClassVar[tuple[str, ...]] = ANOMALY_FILES_DEFAULT
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
    performance_fields: ClassVar[tuple[str, ...]] = PERFORMANCE_FIELDS
    default_compare_kind: ClassVar[str] = "setup.xml"
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
        env_flags: list[str] = []
        for key, value in sorted((env_vars or {}).items()):
            env_flags.extend(["--env", f"{key}={value}"])
        env_flags_str = " ".join(shlex.quote(part) for part in env_flags)
        stage_args = " ".join(shlex.quote(str(arg)) for arg in (run_args or []) if str(arg) != "")

        stage_command = singularity_shell_exec_prefix("$CONTAINER_CASE", env_flags_str)
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

        finalize_command = singularity_shell_exec_prefix("$CONTAINER_CASE", env_flags_str)
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
        solver_command.extend(singularity_shell_exec_prefix("$EXEC_DIR_CONTAINER", env_flags_str))
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
        return detect_run_outcome(case_dir, start_time)

    def read_progress(self, case_dir: Path, start_time: str | None = None) -> int | None:
        run_status_path = locate_run_status_file(case_dir, start_time)
        if run_status_path:
            return extract_run_status_iteration(run_status_path)
        log_path = locate_log_file(case_dir, start_time)
        return extract_last_iteration(log_path) if log_path else None

    def read_restart_origin(self, case_dir: Path) -> dict[str, int | float]:
        return extract_restart_origin(case_dir)

    def locate_case_file(self, case_dir: Path, name: str) -> Path | None:
        return locate_case_file(case_dir, name)

    def find_setup_file(self, template_dir: Path) -> Path:
        return find_setup_file(template_dir)

    def find_run_config(self, template_dir: Path) -> Path | None:
        return find_run_cfg(template_dir)

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
                find_setup_file(case_dir)
            except (FileNotFoundError, ValueError):
                missing.append(case_dir.name)
        if missing:
            sample = ", ".join(missing[:5])
            suffix = " ..." if len(missing) > 5 else ""
            return [DoctorItem(level="fail", message=f"setup.xml missing for: {sample}{suffix}")]
        return [DoctorItem(level="ok", message="setup.xml present in every case")]

    def find_residuals_files(self, case_dir: Path, include_history: bool = False) -> list[Path]:
        return find_residuals_files(case_dir, include_history=include_history)

    def parse_live_residuals(self, case_dir: Path) -> tuple[list[str], list[dict[str, str]]]:
        log_path = locate_case_file(case_dir, "run_solver.log")
        if not log_path:
            return [], []
        return parse_residuals_from_log(log_path)

    def list_probe_files(self, case_dir: Path, limit: int = 200) -> list[str]:
        return list_probe_files(case_dir, limit=limit)

    def list_profile_files(self, case_dir: Path, limit: int = 200) -> list[str]:
        return list_profile_files(case_dir, limit=limit)

    def locate_probe_files(self, case_dir: Path, probe_ref: str, include_history: bool = False) -> list[Path]:
        return locate_probe_files(case_dir, probe_ref, include_history=include_history)

    def find_performance_log(self, case_dir: Path) -> Path | None:
        return find_latest_performance_log(case_dir)

    def parse_performance(self, path: Path) -> dict[str, str | None]:
        return parse_performance_log(path)
