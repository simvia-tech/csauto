"""A fake solver, and the smallest complete example of an adapter.

The "solver" is a short Python script started with the native runtime
(``saturne_bin`` pointing at a Python interpreter). It reads ``steps = N`` from
the case's ``stub.toml`` and writes ``OUT/run_0001/stub.log``: one ``step N``
line per step, then a completion marker. Integration tests use it to drive
prepare, run, status and control without any real solver installed.
"""

from __future__ import annotations

from collections.abc import Sequence
from pathlib import Path
from typing import Any, ClassVar

from ..pathutil import safe_subpath
from ..registry import STATUS_DONE, STATUS_FAILED
from .base import CompareKind, ControlAction, SolverAdapter

STUB_SETUP_FILENAME = "stub.toml"
STUB_LOG_FILENAME = "stub.log"
STUB_DONE_MARKER = "STUB CALCULATION COMPLETE"
STUB_FAILED_MARKER = "STUB CALCULATION FAILED"

# Started inside the case folder, like every solver command.
_STUB_RUN_SCRIPT = """\
import pathlib, re
match = re.search(r"steps\\s*=\\s*(\\d+)", pathlib.Path("stub.toml").read_text(encoding="utf-8"))
steps = int(match.group(1)) if match else 3
run_dir = pathlib.Path("OUT") / "run_0001"
run_dir.mkdir(parents=True, exist_ok=True)
with (run_dir / "stub.log").open("w", encoding="utf-8") as handle:
    for step in range(1, steps + 1):
        handle.write(f"step {step}\\n")
    handle.write("STUB CALCULATION COMPLETE\\n")
"""


class StubAdapter(SolverAdapter):
    # Required declarations.
    name: ClassVar[str] = "stub"
    native_bin_name: ClassVar[str] = "python3"
    container_bin_name: ClassVar[str] = ""
    default_docker_image: ClassVar[str] = ""
    results_dirname: ClassVar[str] = "OUT"
    dashboard_panels: ClassVar[tuple[str, ...]] = ("status", "compare", "tail", "errors")

    # Optional declarations used by this solver.
    supported_runtimes: ClassVar[frozenset[str]] = frozenset({"native"})
    template_input_names: ClassVar[frozenset[str]] = frozenset({STUB_SETUP_FILENAME})
    tail_file_names: ClassVar[tuple[str, ...]] = (STUB_LOG_FILENAME, "csauto.stdout", "csauto.stderr")
    anomaly_file_names: ClassVar[tuple[str, ...]] = ("csauto.stderr", "csauto.stdout", STUB_LOG_FILENAME)
    cleanup_log_names: ClassVar[frozenset[str]] = frozenset({STUB_LOG_FILENAME, "csauto.stdout", "csauto.stderr"})
    compare_kinds: ClassVar[tuple[CompareKind, ...]] = (CompareKind(STUB_SETUP_FILENAME, STUB_SETUP_FILENAME),)
    control_actions: ClassVar[tuple[ControlAction, ...]] = (ControlAction("stop", "Stop"),)

    def run_argv(self, case_dir: Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None) -> list[str]:
        return ["-c", _STUB_RUN_SCRIPT, *(str(arg) for arg in run_args or () if str(arg) != "")]

    def find_setup_file(self, template_dir: Path) -> Path:
        candidate = template_dir / STUB_SETUP_FILENAME
        if candidate.is_file():
            return candidate
        raise FileNotFoundError(f"{STUB_SETUP_FILENAME} not found in template: {template_dir}")

    def locate_case_file(self, case_dir: Path, name: str) -> Path | None:
        direct = super().locate_case_file(case_dir, name)
        if direct:
            return direct
        for run_dir in self.list_run_dirs(case_dir):
            candidate = safe_subpath(run_dir, name)  # never leave the run folder
            if candidate and candidate.is_file():
                return candidate
        return None

    def detect_outcome(self, case_dir: Path, start_time: str | None = None) -> str | None:
        for run_dir in self.list_run_dirs(case_dir):
            log_path = run_dir / STUB_LOG_FILENAME
            if not log_path.is_file():
                continue
            try:
                text = log_path.read_text(encoding="utf-8", errors="ignore")
            except OSError:
                continue
            if STUB_FAILED_MARKER in text:
                return STATUS_FAILED
            if STUB_DONE_MARKER in text:
                return STATUS_DONE
        return None

    def apply_control(
        self,
        case_dir: Path,
        action: str,
        *,
        value: int | float | None = None,
        start_time: str | None = None,
    ) -> dict[str, Any]:
        if action != "stop":
            raise ValueError(f"Invalid control action: {action!r} (expected one of: stop)")
        run_dir = self.latest_run_dir(case_dir)
        if run_dir is None:
            raise FileNotFoundError(f"No OUT run directory found for {case_dir.name}")
        (run_dir / "stub_control").write_text("stop\n", encoding="utf-8")
        return {"action": "stop"}

    def read_progress(self, case_dir: Path, start_time: str | None = None) -> int | None:
        log_path = self.locate_case_file(case_dir, STUB_LOG_FILENAME)
        if not log_path:
            return None
        last_step: int | None = None
        try:
            for line in log_path.read_text(encoding="utf-8", errors="ignore").splitlines():
                parts = line.split()
                if len(parts) == 2 and parts[0] == "step" and parts[1].isdigit():
                    last_step = int(parts[1])
        except OSError:
            return None
        return last_step
