"""code_aster solver adapter.

Runs ``run_aster`` on the case's ``.export`` file, from inside the case folder.
In containers the image's environment is activated first (``container_setup``);
natively, ``run_aster`` must be on PATH (or set as ``saturne_bin``). Results go
straight into ``RESU/``, so each case holds one run. The outcome is the
``DIAGNOSTIC JOB`` line run_aster prints on its standard output, which csauto
saves in ``csauto.stdout``.
"""

from __future__ import annotations

import re
from collections.abc import Sequence
from pathlib import Path
from typing import ClassVar

from ..logs import scan_outcome
from .base import CompareKind, SolverAdapter

EXPORT_GLOB = "*.export"
# The export actually run: the case's export with csauto's n and nt, written at
# each launch so the export that came from the template is never modified.
RUN_EXPORT_NAME = ".csauto.export"
OUTCOME_SUCCESS_PATTERNS = (re.compile(r"DIAGNOSTIC JOB : (OK|<A>_ALARM)\b"),)
# Any other verdict (<F>_..., <S>_..., <E>_..., NOOK_TEST_RESU, "?") is a failure.
OUTCOME_FAILURE_PATTERNS = (re.compile(r"DIAGNOSTIC JOB : \S"),)
LOGOS = Path(__file__).with_name("logos")


class CodeAsterAdapter(SolverAdapter):
    name: ClassVar[str] = "code_aster"
    native_bin_name: ClassVar[str] = "run_aster"
    container_bin_name: ClassVar[str] = "run_aster"
    default_docker_image: ClassVar[str] = "simvia/code_aster:17.4.0"
    # Images without /opt/activate.sh are expected to have run_aster on PATH already.
    container_setup: ClassVar[str] = "[ ! -f /opt/activate.sh ] || source /opt/activate.sh"
    results_dirname: ClassVar[str] = "RESU"
    dashboard_panels: ClassVar[tuple[str, ...]] = ("status", "compare", "tail", "errors")
    # Meshes sit next to TEMPLATE and are referenced from a case as ../MESH/<file>.
    shared_dir_names: ClassVar[tuple[str, ...]] = ("MESH",)
    readonly_shared_dir_names: ClassVar[frozenset[str]] = frozenset({"MESH"})
    tail_file_names: ClassVar[tuple[str, ...]] = ("csauto.stdout", "*.mess", "csauto.stderr")
    # code_aster frames its messages in boxes: "! <A> <CALCULEL_8> ...", "! <F> <...>".
    anomaly_patterns: ClassVar[tuple[tuple[str, re.Pattern[str]], ...]] = (
        ("warn", re.compile(r"!\s*<A>\s*<")),
        ("error", re.compile(r"!\s*<[EFS]>\s*<|<EXCEPTION>")),
    )
    # run_aster prints this notice before every MPI run; "Abort" would read as an error.
    anomaly_ignore_patterns: ClassVar[tuple[re.Pattern[str], ...]] = (
        re.compile(r"If MPI_Abort is called during execution"),
    )
    compare_kinds: ClassVar[tuple[CompareKind, ...]] = (
        CompareKind("export", "Export file"),
        CompareKind("doe_row.csv", "doe_row.csv"),
    )
    logo_file: ClassVar[Path | None] = LOGOS / "code_aster.svg"
    icon_file: ClassVar[Path | None] = LOGOS / "code_aster_icon.svg"

    def run_argv(self, case_dir: Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None) -> list[str]:
        return [RUN_EXPORT_NAME, *(str(arg) for arg in run_args or () if str(arg) != "")]

    def prepare_launch(self, case_dir: Path, nprocs: int, nt: int) -> None:
        """Write the export to run, with n MPI processes and nt threads, and create RESU."""
        export = self.find_setup_file(case_dir)
        lines = [
            line
            for line in export.read_text(encoding="utf-8", errors="surrogateescape").splitlines()
            if line.split()[:2] not in (["P", "mpi_nbcpu"], ["P", "ncpus"])
        ]
        lines += [f"P mpi_nbcpu {nprocs}", f"P ncpus {nt}"]
        (case_dir / RUN_EXPORT_NAME).write_text("\n".join(lines) + "\n", encoding="utf-8", errors="surrogateescape")
        self.results_root(case_dir).mkdir(exist_ok=True)

    def find_setup_file(self, template_dir: Path) -> Path:
        exports = sorted(p for p in Path(template_dir).glob(EXPORT_GLOB) if p.is_file() and not p.name.startswith("."))
        if len(exports) == 1:
            return exports[0]
        if not exports:
            raise FileNotFoundError(f".export file not found in {template_dir}")
        names = ", ".join(p.name for p in exports)
        raise ValueError(f"Several .export files in {template_dir} ({names}): keep only one.")

    def detect_outcome(self, case_dir: Path, start_time: str | None = None) -> str | None:
        return scan_outcome(
            [case_dir / "csauto.stdout"], start_time, OUTCOME_SUCCESS_PATTERNS, OUTCOME_FAILURE_PATTERNS, lines=200
        )

    def list_run_dirs(self, case_dir: Path, *, newest_first: bool = True) -> list[Path]:
        results_root = self.results_root(case_dir)
        return [results_root] if results_root.is_dir() else []

    def locate_case_file(self, case_dir: Path, name: str) -> Path | None:
        if name == "export":
            try:
                return self.find_setup_file(case_dir)
            except (FileNotFoundError, ValueError):
                return None
        return super().locate_case_file(case_dir, name)
