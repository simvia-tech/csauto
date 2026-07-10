"""code_saturne implementation of the solver adapter boundary."""

from __future__ import annotations

from collections.abc import Mapping, Sequence
from pathlib import Path
from typing import TYPE_CHECKING, Any, ClassVar

from ..execution import (
    RUNTIME_SINGULARITY,
    build_runtime_gui_command,
    build_runtime_run_command,
    build_singularity_slurm_script,
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

    def build_run_command(
        self,
        case_dir: Path,
        nprocs: int,
        nt: int,
        selection: RuntimeSelection,
        *,
        cidfile: Path | None = None,
        run_args: Sequence[str] | None = None,
        cleanenv: bool = False,
        env_vars: Mapping[str, str] | None = None,
    ) -> list[str]:
        return build_runtime_run_command(
            case_dir,
            nprocs,
            nt,
            selection,
            cidfile=cidfile,
            run_args=run_args,
            cleanenv=cleanenv,
            env_vars=env_vars,
        )

    def build_gui_command(self, case_dir: Path, selection: RuntimeSelection) -> list[str]:
        return build_runtime_gui_command(case_dir, selection)

    def build_slurm_script(
        self,
        case_dir: Path,
        nprocs: int,
        nt: int,
        selection: RuntimeSelection,
        run_args: Sequence[str] | None = None,
        env_vars: Mapping[str, str] | None = None,
    ) -> str | None:
        if selection.runtime != RUNTIME_SINGULARITY:
            return None
        return build_singularity_slurm_script(
            case_dir,
            nprocs,
            nt,
            selection,
            run_args=run_args,
            env_vars=env_vars,
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
        from ..runner import _build_restart_run_args

        return _build_restart_run_args(
            case_dir=case_dir,
            restart=True,
            restart_mode=restart_mode,
            restart_value=restart_value,
            restart_path=restart_path,
        )

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
