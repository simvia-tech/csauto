"""Solver adapter boundary.

`SolverAdapter` is the protocol that generic orchestration code (runner, doe,
cli, web routes) programs against; all solver-specific knowledge (command
argv, log parsing, file conventions, control directives) lives behind it.
`SolverAdapterBase` provides shared composition and safe defaults so a
concrete adapter mostly supplies argv fragments, parsers, and convention
names.
"""

from __future__ import annotations

from abc import ABC, abstractmethod
from collections.abc import Mapping, Sequence
from pathlib import Path
from typing import TYPE_CHECKING, Any, ClassVar, Protocol, runtime_checkable

if TYPE_CHECKING:
    from ..execution import RuntimeSelection
    from ..maintenance import DoctorItem


@runtime_checkable
class SolverAdapter(Protocol):
    """What the generic core is allowed to know about a solver."""

    name: str
    native_bin_name: str
    container_bin_name: str
    container_root: str
    default_docker_image: str
    results_dirname: str
    shared_dir_names: tuple[str, ...]
    template_input_names: frozenset[str]
    anomaly_file_names: tuple[str, ...]
    cleanup_log_names: frozenset[str]
    performance_fields: tuple[str, ...]
    default_compare_kind: str
    control_actions: frozenset[str]

    def run_argv(
        self, case_path: str | Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None
    ) -> list[str]: ...

    def gui_argv(self, setup_path: str | Path) -> list[str]: ...

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
    ) -> list[str]: ...

    def build_gui_command(self, case_dir: Path, selection: RuntimeSelection) -> list[str]: ...

    def build_slurm_script(
        self,
        case_dir: Path,
        nprocs: int,
        nt: int,
        selection: RuntimeSelection,
        run_args: Sequence[str] | None = None,
        env_vars: Mapping[str, str] | None = None,
    ) -> str | None: ...

    def mpi_env(self, mpi_exec_options: str | None) -> dict[str, str]: ...

    def build_restart_args(
        self,
        case_dir: Path,
        restart_mode: str | None,
        restart_value: int | float | None,
        restart_path: str | None,
    ) -> tuple[list[str], dict[str, Any]]: ...

    def preflight(self, runs_dir: Path, runtime: str) -> None: ...

    def detect_outcome(self, case_dir: Path, start_time: str | None = None) -> str | None: ...

    def read_progress(self, case_dir: Path, start_time: str | None = None) -> int | None: ...

    def read_restart_origin(self, case_dir: Path) -> dict[str, int | float]: ...

    def locate_case_file(self, case_dir: Path, name: str) -> Path | None: ...

    def results_root(self, case_dir: Path) -> Path: ...

    def list_run_dirs(self, case_dir: Path, *, newest_first: bool = True) -> list[Path]: ...

    def latest_run_dir(self, case_dir: Path) -> Path | None: ...

    def list_result_files(self, case_dir: Path, limit: int = 2000, latest_subdir_only: bool = False) -> list[str]: ...

    def find_setup_file(self, template_dir: Path) -> Path: ...

    def find_run_config(self, template_dir: Path) -> Path | None: ...

    def find_residuals_files(self, case_dir: Path, include_history: bool = False) -> list[Path]: ...

    def parse_live_residuals(self, case_dir: Path) -> tuple[list[str], list[dict[str, str]]]: ...

    def list_probe_files(self, case_dir: Path, limit: int = 200) -> list[str]: ...

    def list_profile_files(self, case_dir: Path, limit: int = 200) -> list[str]: ...

    def locate_probe_files(self, case_dir: Path, probe_ref: str, include_history: bool = False) -> list[Path]: ...

    def find_performance_log(self, case_dir: Path) -> Path | None: ...

    def parse_performance(self, path: Path) -> dict[str, str | None]: ...

    def doctor_checks(
        self,
        runs_dir: Path,
        case_dirs: Sequence[Path],
        *,
        runtime: str | None = None,
        solver_bin: str | None = None,
        singularity_image: str | None = None,
        singularity_bin: str | None = None,
    ) -> list[DoctorItem]: ...

    def apply_control(
        self,
        case_dir: Path,
        action: str,
        *,
        value: int | None = None,
        start_time: str | None = None,
    ) -> dict[str, Any]: ...


class SolverAdapterBase(ABC):
    """Shared composition and safe defaults for solver adapters."""

    name: ClassVar[str]
    native_bin_name: ClassVar[str]
    container_bin_name: ClassVar[str]
    container_root: ClassVar[str]
    default_docker_image: ClassVar[str]
    results_dirname: ClassVar[str]
    shared_dir_names: ClassVar[tuple[str, ...]] = ()
    template_input_names: ClassVar[frozenset[str]] = frozenset()
    anomaly_file_names: ClassVar[tuple[str, ...]] = ("csauto.stderr", "csauto.stdout")
    cleanup_log_names: ClassVar[frozenset[str]] = frozenset({"csauto.stdout", "csauto.stderr"})
    performance_fields: ClassVar[tuple[str, ...]] = ()
    default_compare_kind: ClassVar[str] = ""
    control_actions: ClassVar[frozenset[str]] = frozenset()

    @abstractmethod
    def run_argv(self, case_path: str | Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None) -> list[str]:
        """Solver argv fragment that starts a run, excluding the binary itself."""

    def gui_argv(self, setup_path: str | Path) -> list[str]:
        raise ValueError(f"GUI not supported for solver {self.name!r}")

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
        """Compose generic runtime wrapping (docker/native/singularity) around `run_argv`."""
        from ..execution import build_runtime_run_command

        return build_runtime_run_command(
            case_dir,
            nprocs,
            nt,
            selection,
            cidfile=cidfile,
            run_args=run_args,
            cleanenv=cleanenv,
            env_vars=env_vars,
            adapter=self,
        )

    def build_gui_command(self, case_dir: Path, selection: RuntimeSelection) -> list[str]:
        """Compose generic runtime wrapping around `gui_argv` and the solver setup file."""
        from ..execution import build_runtime_gui_command

        return build_runtime_gui_command(case_dir, selection, adapter=self)

    def build_slurm_script(
        self,
        case_dir: Path,
        nprocs: int,
        nt: int,
        selection: RuntimeSelection,
        run_args: Sequence[str] | None = None,
        env_vars: Mapping[str, str] | None = None,
    ) -> str | None:
        """Return a full sbatch script, or None to submit the run command via sbatch --wrap."""
        return None

    def mpi_env(self, mpi_exec_options: str | None) -> dict[str, str]:
        """Environment variables carrying MPI launcher options to the solver."""
        return {}

    def build_restart_args(
        self,
        case_dir: Path,
        restart_mode: str | None,
        restart_value: int | float | None,
        restart_path: str | None,
    ) -> tuple[list[str], dict[str, Any]]:
        raise ValueError(f"Restart not supported for solver {self.name!r}")

    def preflight(self, runs_dir: Path, runtime: str) -> None:
        from ..execution import check_shared_dir_symlinks

        check_shared_dir_symlinks(runs_dir, runtime, shared_dirs=self.shared_dir_names)

    @abstractmethod
    def detect_outcome(self, case_dir: Path, start_time: str | None = None) -> str | None:
        """Read solver output to decide STATUS_DONE / STATUS_FAILED / None (still unknown)."""

    def read_progress(self, case_dir: Path, start_time: str | None = None) -> int | None:
        """Best-effort current iteration / time step of a run."""
        return None

    def read_restart_origin(self, case_dir: Path) -> dict[str, int | float]:
        return {}

    def locate_case_file(self, case_dir: Path, name: str) -> Path | None:
        """Resolve a friendly file name to a path inside the case directory."""
        from ..pathutil import safe_subpath

        direct = safe_subpath(case_dir, name)
        if direct and direct.is_file():
            return direct
        return None

    def results_root(self, case_dir: Path) -> Path:
        return case_dir / self.results_dirname

    def list_run_dirs(self, case_dir: Path, *, newest_first: bool = True) -> list[Path]:
        results_root = self.results_root(case_dir)
        if not results_root.is_dir():
            return []
        try:
            run_dirs = [p for p in results_root.iterdir() if p.is_dir()]
            run_dirs.sort(key=lambda p: p.stat().st_mtime, reverse=newest_first)
        except OSError:
            return []
        return run_dirs

    def latest_run_dir(self, case_dir: Path) -> Path | None:
        run_dirs = self.list_run_dirs(case_dir)
        return run_dirs[0] if run_dirs else None

    def list_result_files(self, case_dir: Path, limit: int = 2000, latest_subdir_only: bool = False) -> list[str]:
        """Return result files (no deep subfolders), relative to the case directory."""
        results_root = self.results_root(case_dir)
        if not results_root.is_dir():
            return []
        files: list[str] = []
        if latest_subdir_only:
            subdirs = [p for p in results_root.iterdir() if p.is_dir()]
            if not subdirs:
                return []
            latest = max(subdirs, key=lambda p: p.stat().st_mtime)
            for path in sorted(latest.iterdir()):
                if path.is_file():
                    files.append(str(path.relative_to(case_dir)))
                    if len(files) >= limit:
                        return files
            return files

        for path in sorted(results_root.iterdir()):
            if path.is_file():
                files.append(str(path.relative_to(case_dir)))
                if len(files) >= limit:
                    return files
        for sub in sorted(p for p in results_root.iterdir() if p.is_dir()):
            for path in sorted(sub.iterdir()):
                if path.is_file():
                    files.append(str(path.relative_to(case_dir)))
                    if len(files) >= limit:
                        return files
        return files

    @abstractmethod
    def find_setup_file(self, template_dir: Path) -> Path:
        """Locate the solver's primary input file, raising if absent."""

    def find_run_config(self, template_dir: Path) -> Path | None:
        return None

    def find_residuals_files(self, case_dir: Path, include_history: bool = False) -> list[Path]:
        return []

    def parse_live_residuals(self, case_dir: Path) -> tuple[list[str], list[dict[str, str]]]:
        return [], []

    def list_probe_files(self, case_dir: Path, limit: int = 200) -> list[str]:
        return []

    def list_profile_files(self, case_dir: Path, limit: int = 200) -> list[str]:
        return []

    def locate_probe_files(self, case_dir: Path, probe_ref: str, include_history: bool = False) -> list[Path]:
        return []

    def find_performance_log(self, case_dir: Path) -> Path | None:
        return None

    def parse_performance(self, path: Path) -> dict[str, str | None]:
        return {}

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
        return []

    def apply_control(
        self,
        case_dir: Path,
        action: str,
        *,
        value: int | None = None,
        start_time: str | None = None,
    ) -> dict[str, Any]:
        raise ValueError(f"Control actions not supported for solver {self.name!r}")
