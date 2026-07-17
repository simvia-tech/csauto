"""Fake solver adapter used by integration tests.

Runs as a short python script (native runtime with ``saturne_bin`` pointing at
a Python interpreter) that writes ``OUT/run_0001/stub.log`` with one ``step N``
line per requested step and a final completion marker. It exercises the whole
prepare -> run -> status pipeline without any code_saturne convention on disk.
"""

from __future__ import annotations

from collections.abc import Sequence
from pathlib import Path
from typing import Any, ClassVar

from ..registry import STATUS_DONE, STATUS_FAILED
from .base import CompareKind, SolverAdapterBase

STUB_SETUP_FILENAME = "stub.toml"
STUB_LOG_FILENAME = "stub.log"
STUB_DONE_MARKER = "STUB CALCULATION COMPLETE"
STUB_FAILED_MARKER = "STUB CALCULATION FAILED"

_STUB_RUN_SCRIPT = """\
import pathlib, sys
case_dir = pathlib.Path(sys.argv[1])
steps = int(sys.argv[2])
run_dir = case_dir / "OUT" / "run_0001"
run_dir.mkdir(parents=True, exist_ok=True)
with (run_dir / "stub.log").open("w", encoding="utf-8") as handle:
    for step in range(1, steps + 1):
        handle.write(f"step {step}\\n")
    handle.write("STUB CALCULATION COMPLETE\\n")
"""


class StubAdapter(SolverAdapterBase):
    name: ClassVar[str] = "stub"
    native_bin_name: ClassVar[str] = "python3"
    container_bin_name: ClassVar[str] = "stub"
    container_root: ClassVar[str] = "/stub"
    default_docker_image: ClassVar[str] = ""
    results_dirname: ClassVar[str] = "OUT"
    template_input_names: ClassVar[frozenset[str]] = frozenset({STUB_SETUP_FILENAME})
    anomaly_file_names: ClassVar[tuple[str, ...]] = ("csauto.stderr", "csauto.stdout", STUB_LOG_FILENAME)
    cleanup_log_names: ClassVar[frozenset[str]] = frozenset({STUB_LOG_FILENAME, "csauto.stdout", "csauto.stderr"})
    compare_kinds: ClassVar[tuple[CompareKind, ...]] = (CompareKind(STUB_SETUP_FILENAME, STUB_SETUP_FILENAME),)
    control_actions: ClassVar[frozenset[str]] = frozenset({"stop"})

    def run_argv(self, case_path: str | Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None) -> list[str]:
        argv = ["-c", _STUB_RUN_SCRIPT, str(case_path), str(nt)]
        if run_args:
            argv.extend(str(arg) for arg in run_args if str(arg) != "")
        return argv

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
            candidate = run_dir / name
            if candidate.is_file():
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
        value: int | None = None,
        start_time: str | None = None,
    ) -> dict[str, Any]:
        if action != "stop":
            raise ValueError(f"Invalid control action: {action!r} (expected one of {sorted(self.control_actions)})")
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
