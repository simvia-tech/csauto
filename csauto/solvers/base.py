"""The solver adapter: everything csauto knows about one solver.

Generic code (runner, DOE generation, CLI, web routes, dashboard) only talks to
a solver through a `SolverAdapter`. Adding a solver means writing one subclass
and registering it in `csauto/solvers/__init__.py`; nothing else changes. Only
`run_argv`, `find_setup_file` and the attributes marked "required" have to be
written; every other member has a working default. `docs/adding-a-solver.md`
walks through it with `stub.py` as the example.
"""

from __future__ import annotations

import re
from abc import ABC, abstractmethod
from collections.abc import Mapping, Sequence
from pathlib import Path
from typing import TYPE_CHECKING, Any, ClassVar, NamedTuple

from ..execution import RUNTIME_DOCKER, RUNTIME_NATIVE, RUNTIME_SINGULARITY

if TYPE_CHECKING:
    from ..execution import RuntimeSelection
    from ..maintenance import DoctorItem


class CompareKind(NamedTuple):
    """One comparable file in the Compare panel; the first declared entry is the default."""

    value: str  # name handed to locate_case_file
    label: str


class PerfColumn(NamedTuple):
    """One column of the Timing Snapshot table and of the `csauto perf` CSV export."""

    key: str  # key in the dict returned by parse_performance
    label: str
    kind: str = "text"  # "time" | "int" | "float" | "text"


class ControlAction(NamedTuple):
    """A live control directive offered for running cases, applied by apply_control."""

    name: str
    label: str
    value_label: str = ""  # empty when the action takes no value
    value_kind: str = "int"  # "int" | "float"


class RestartMode(NamedTuple):
    """One way to restart a finished case, offered by the Restart dialog."""

    name: str
    label: str
    value_label: str = ""  # empty when the mode takes no value
    value_kind: str = "int"  # "int" | "float"


ALL_DASHBOARD_PANELS = ("status", "residuals", "probes", "performance", "compare", "tail", "errors")
ALL_RUNTIMES = (RUNTIME_NATIVE, RUNTIME_DOCKER, RUNTIME_SINGULARITY)
ANOMALY_LABELS = ("error", "warn", "info")
VALUE_KINDS = ("int", "float")

CAPABILITY_RESIDUALS = "residuals"
CAPABILITY_PROBES = "probes"
CAPABILITY_PERFORMANCE = "performance"
CAPABILITY_COMPARE = "compare"
CAPABILITY_CONTROL = "control"
CAPABILITY_RESTART = "restart"
CAPABILITY_GUI = "gui"

# Panels any run can feed, whatever the solver: status comes from the registry,
# tail and errors from the csauto.stdout / csauto.stderr launcher logs. Every
# other panel is feedable when the capability of the same name is.
GENERIC_PANELS = frozenset({"status", "tail", "errors"})

# Derived from what the adapter implements; declaring them is an error.
_DERIVED_ATTRIBUTES = ("capabilities", "performance_fields", "default_compare_kind")


class SolverAdapter(ABC):
    """Base class of every solver adapter. See the module docstring."""

    # Required: identity, binaries and results folder.
    name: ClassVar[str]  # value of `solver` in csauto.toml
    native_bin_name: ClassVar[str]  # executable looked up in PATH by the native runtime
    container_bin_name: ClassVar[str]  # executable started inside docker/apptainer images
    container_root: ClassVar[str]  # where the campaign folder is mounted inside containers
    default_docker_image: ClassVar[str]  # docker image used when csauto.toml sets none
    results_dirname: ClassVar[str]  # results folder inside each case, e.g. "RESU"
    dashboard_panels: ClassVar[tuple[str, ...]]  # dashboard tabs, in ALL_DASHBOARD_PANELS order

    # Launch.
    supported_runtimes: ClassVar[frozenset[str]] = frozenset(ALL_RUNTIMES)
    # Shell commands run inside containers before the solver, for images whose
    # environment must be activated first (e.g. "source /opt/activate.sh").
    container_setup: ClassVar[str] = ""

    # Case files.
    shared_dir_names: ClassVar[tuple[str, ...]] = ()  # folders next to TEMPLATE shared by every case
    readonly_shared_dir_names: ClassVar[frozenset[str]] = frozenset()  # mounted read-only in containers
    template_input_names: ClassVar[frozenset[str]] = frozenset()  # template files never rendered

    # Logs. Names are resolved by locate_case_file; tail_file_names may use globs.
    tail_file_names: ClassVar[tuple[str, ...]] = ("csauto.stdout", "csauto.stderr")  # Log Tail, best first
    anomaly_file_names: ClassVar[tuple[str, ...]] = ("csauto.stderr", "csauto.stdout")  # Recent Errors
    # (label, pattern) pairs added to logs.GENERIC_ANOMALY_PATTERNS; label is one of ANOMALY_LABELS.
    anomaly_patterns: ClassVar[tuple[tuple[str, re.Pattern[str]], ...]] = ()
    anomaly_ignore_patterns: ClassVar[tuple[re.Pattern[str], ...]] = ()  # lines never reported
    cleanup_log_names: ClassVar[frozenset[str]] = frozenset({"csauto.stdout", "csauto.stderr"})

    # Dashboard declarations.
    performance_columns: ClassVar[tuple[PerfColumn, ...]] = ()
    compare_kinds: ClassVar[tuple[CompareKind, ...]] = ()
    control_actions: ClassVar[tuple[ControlAction, ...]] = ()
    restart_modes: ClassVar[tuple[RestartMode, ...]] = ()
    default_residual_columns: ClassVar[tuple[str, ...]] = ()  # plotted first, when present
    logo_file: ClassVar[Path | None] = None  # SVG shown in the dashboard header
    icon_file: ClassVar[Path | None] = None  # square SVG used as the dashboard's favicon

    def __init_subclass__(cls, **kwargs: Any) -> None:
        super().__init_subclass__(**kwargs)
        for derived in _DERIVED_ATTRIBUTES:
            if derived in cls.__dict__:
                raise TypeError(
                    f"{cls.__name__} must not declare {derived!r}: it is derived "
                    f"from what the adapter implements (see docs/adding-a-solver.md)."
                )
        for label, _pattern in cls.anomaly_patterns:
            if label not in ANOMALY_LABELS:
                raise TypeError(f"{cls.__name__}.anomaly_patterns: unknown label {label!r} (use {ANOMALY_LABELS})")
        for option in (*cls.control_actions, *cls.restart_modes):
            if option.value_kind not in VALUE_KINDS:
                raise TypeError(f"{cls.__name__}: {option.name!r} has value_kind {option.value_kind!r}")
        unknown = set(cls.supported_runtimes) - set(ALL_RUNTIMES)
        if unknown:
            raise TypeError(f"{cls.__name__}.supported_runtimes: unknown runtimes {sorted(unknown)}")

    def _provides(self, method_name: str) -> bool:
        """True when the adapter defines its own version instead of the base default."""
        return getattr(type(self), method_name) is not getattr(SolverAdapter, method_name)

    @property
    def capabilities(self) -> frozenset[str]:
        """What this adapter can do, derived from what it provides.

        A capability is either a redefined method or a non-empty declaration.
        The dashboard uses them to show actions, the API to refuse the rest.
        """
        caps: set[str] = set()
        if self._provides("find_residuals_files") or self._provides("parse_live_residuals"):
            caps.add(CAPABILITY_RESIDUALS)
        if self._provides("list_probe_files"):
            caps.add(CAPABILITY_PROBES)
        if self._provides("build_restart_args"):
            caps.add(CAPABILITY_RESTART)
        if self._provides("gui_argv"):
            caps.add(CAPABILITY_GUI)
        if self.compare_kinds:
            caps.add(CAPABILITY_COMPARE)
        if self.performance_columns:
            caps.add(CAPABILITY_PERFORMANCE)
        if self.control_actions:
            caps.add(CAPABILITY_CONTROL)
        return frozenset(caps)

    @property
    def default_compare_kind(self) -> str:
        """The first declared compare kind, so CLI/API defaults follow the UI order."""
        return self.compare_kinds[0].value if self.compare_kinds else ""

    @property
    def performance_fields(self) -> tuple[str, ...]:
        """CSV export keys, derived from the column metadata so CLI and UI stay consistent."""
        return tuple(column.key for column in self.performance_columns)

    def control_action(self, name: str) -> ControlAction | None:
        return next((action for action in self.control_actions if action.name == name), None)

    def restart_mode(self, name: str) -> RestartMode | None:
        return next((mode for mode in self.restart_modes if mode.name == name), None)

    # Launch.

    @abstractmethod
    def run_argv(self, case_dir: Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None) -> list[str]:
        """Arguments that start a run, after the solver executable.

        The command starts inside the case folder in every runtime, so use
        paths relative to it. `case_dir` is the case folder on this machine,
        for reading its files. `nprocs` is the number of MPI processes and `nt`
        the number of threads per process; ignore what your solver does not
        use. `run_args` are extra arguments, such as those of build_restart_args.
        """

    def prepare_launch(self, case_dir: Path, nprocs: int, nt: int) -> None:
        """Called before each launch, to write derived files or create folders.

        Never modify files that came from the template: `csauto prepare`
        compares them to detect changed cases. Write new files instead.
        """
        return None

    def gui_argv(self, setup_path: str) -> list[str]:
        """Arguments that open the solver GUI on `setup_path` (relative to the case folder)."""
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
        """Wrap `run_argv` for the selected runtime (native, docker or apptainer)."""
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
        """Wrap `gui_argv` for the selected runtime."""
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
        """A full sbatch script, or None to submit the run command with `sbatch --wrap`."""
        return None

    def mpi_env(self, mpi_exec_options: str | None) -> dict[str, str]:
        """Environment variables that carry `mpi_exec_options` to the solver on Slurm."""
        return {}

    def build_restart_args(
        self,
        case_dir: Path,
        restart_mode: str | None,
        restart_value: int | float | None,
        restart_path: str | None,
    ) -> tuple[list[str], dict[str, Any]]:
        """Extra run arguments for a restart, and details recorded in the case history.

        `restart_mode` is one of `restart_modes`, already validated. Raise
        ValueError with a readable message when the case cannot be restarted.
        """
        raise ValueError(f"Restart not supported for solver {self.name!r}")

    def preflight(self, runs_dir: Path, runtime: str) -> None:
        """Checks run once before a batch of launches; raise to refuse the batch."""
        from ..execution import check_shared_dir_symlinks

        check_shared_dir_symlinks(runs_dir, runtime, shared_dirs=self.shared_dir_names)

    # Run state.

    def detect_outcome(self, case_dir: Path, start_time: str | None = None) -> str | None:
        """STATUS_DONE or STATUS_FAILED read from the solver's output, or None.

        Return None while the output gives no verdict. When the run ends with
        no verdict, csauto uses the exit status of the launch command (0 means
        DONE), so solvers with meaningful exit codes need no override. Use
        `start_time` (logs.parse_start_time / logs.is_recent) to ignore files
        left by earlier runs.
        """
        return None

    def read_progress(self, case_dir: Path, start_time: str | None = None) -> int | None:
        """Current iteration or time step, shown as Last Iter in the status table."""
        return None

    def read_restart_origin(self, case_dir: Path) -> dict[str, int | float]:
        """Iteration and/or time the latest run restarted from ({"iteration": ..., "time": ...})."""
        return {}

    def apply_control(
        self,
        case_dir: Path,
        action: str,
        *,
        value: int | float | None = None,
        start_time: str | None = None,
    ) -> dict[str, Any]:
        """Apply one of `control_actions` to a running case; return details for the history."""
        raise ValueError(f"Control actions not supported for solver {self.name!r}")

    # Files and results layout.

    @abstractmethod
    def find_setup_file(self, template_dir: Path) -> Path:
        """The solver's main input file in a template or case folder; raise FileNotFoundError if absent."""

    def find_run_config(self, template_dir: Path) -> Path | None:
        """An optional second input file rendered from the DOE row (code_saturne's run.cfg)."""
        return None

    def locate_case_file(self, case_dir: Path, name: str) -> Path | None:
        """Resolve a friendly file name (a log name, a compare kind) to a file of the case.

        The default resolves paths relative to the case folder. Extend it when
        your files live in run folders or under names that change per case.
        """
        from ..pathutil import safe_subpath

        direct = safe_subpath(case_dir, name)
        if direct and direct.is_file():
            return direct
        return None

    def results_root(self, case_dir: Path) -> Path:
        return case_dir / self.results_dirname

    def list_run_dirs(self, case_dir: Path, *, newest_first: bool = True) -> list[Path]:
        """The folders that each hold one run's results. Clean only ever deletes these.

        The default lists the subfolders of results_root, which suits solvers
        that write one folder per run (code_saturne's RESU/<run_id>). Return
        [results_root] when all results go to results_root itself.
        """
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

    def find_run_files(self, case_dir: Path, name: str, include_history: bool = False) -> list[Path]:
        """`name` in each run folder: the most recent copy, or with include_history every copy oldest first."""
        candidates = [run_dir / name for run_dir in self.list_run_dirs(case_dir) if (run_dir / name).is_file()]
        if not include_history:
            latest = max(candidates, key=lambda p: p.stat().st_mtime, default=None)
            return [latest] if latest else []
        candidates.sort(key=lambda p: (p.parent.stat().st_mtime, p.stat().st_mtime))
        return candidates

    def list_result_files(self, case_dir: Path, limit: int = 2000, latest_subdir_only: bool = False) -> list[str]:
        """Result files relative to the case folder: those of the latest run, or of every run."""
        run_dirs = self.list_run_dirs(case_dir)
        if latest_subdir_only:
            run_dirs = run_dirs[:1]
        files: list[str] = []
        for run_dir in run_dirs:
            try:
                entries = sorted(run_dir.iterdir())
            except OSError:
                continue
            for path in entries:
                if path.is_file():
                    files.append(str(path.relative_to(case_dir)))
                    if len(files) >= limit:
                        return files
        return files

    # Analytics. Each returns empty data by default, which hides nothing but
    # plots nothing; the capability rules above decide what the UI offers.

    def find_residuals_files(self, case_dir: Path, include_history: bool = False) -> list[Path]:
        """CSV files with an `iteration` column and one column per residual."""
        return []

    def parse_live_residuals(self, case_dir: Path) -> tuple[list[str], list[dict[str, str]]]:
        """Residual rows parsed from a log, used when no residual file exists yet.

        Return (columns, rows); every row needs an "iteration" key.
        """
        return [], []

    def list_probe_files(self, case_dir: Path, limit: int = 200) -> list[str]:
        """Probe (time series) names offered by the Probes panel."""
        return []

    def list_profile_files(self, case_dir: Path, limit: int = 200) -> list[str]:
        """Profile (spatial) names offered by the Probes panel."""
        return []

    def locate_probe_files(self, case_dir: Path, probe_ref: str, include_history: bool = False) -> list[Path]:
        """Files holding the probe `probe_ref`: the latest one, or every run's oldest first."""
        return []

    def read_probe_file(self, path: Path) -> tuple[list[str], list[dict[str, str]]]:
        """(columns, rows) of one probe file. The default reads a comma-separated CSV.

        Override it to read another format (SERAFIN, MED...) directly. Time
        series need a "t" or "time" column (any case) or an "iteration" column.
        """
        from ..probes import read_csv_table

        return read_csv_table(path)

    def find_performance_log(self, case_dir: Path) -> Path | None:
        return None

    def parse_performance(self, path: Path) -> dict[str, str | None]:
        """Timing values keyed like `performance_columns`."""
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
        """Checks shown by `csauto doctor`; the default verifies each case has a setup file."""
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
            return [DoctorItem(level="fail", message=f"solver setup file missing for: {sample}{suffix}")]
        return [DoctorItem(level="ok", message="solver setup file present in every case")]
