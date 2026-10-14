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
import sys
from collections.abc import Mapping, Sequence
from pathlib import Path
from typing import ClassVar

from ..logs import scan_outcome
from .base import CaseInput, CompareKind, SolverAdapter

EXPORT_GLOB = "*.export"
# The export actually run: the case's export with csauto's n and nt, written at
# each launch so the export that came from the template is never modified.
RUN_EXPORT_NAME = ".csauto.export"
CPU_PARAMS = (["P", "mpi_nbcpu"], ["P", "ncpus"])
# Export file types of the meshes LIRE_MAILLAGE reads, by extension.
MESH_TYPES = {".med": "mmed", ".mail": "mail", ".msh": "msh", ".msup": "msup"}
FIRST_MESH_UNIT = 20
# IMPR_RESU writes MED results to this unit when the command file names none.
DEFAULT_RESULT_UNIT = 80


def _command_blocks(text: str, command: str) -> list[str]:
    """The argument text of each `command(...)` call, parentheses balanced."""
    blocks = []
    for match in re.finditer(rf"\b{command}\s*\(", text):
        depth, start = 1, match.end()
        for index in range(start, len(text)):
            depth += {"(": 1, ")": -1}.get(text[index], 0)
            if depth == 0:
                blocks.append(text[start:index])
                break
    return blocks


def _result_units(comm_text: str) -> list[int]:
    """Units the command file writes MED results to (IMPR_RESU without another FORMAT)."""
    units = []
    for block in _command_blocks(comm_text, "IMPR_RESU"):
        fmt = re.search(r"FORMAT\s*=\s*['\"](\w+)['\"]", block)
        if fmt and fmt.group(1).upper() != "MED":
            continue
        unit = re.search(r"UNITE\s*=\s*(\d+)", block)
        units.append(int(unit.group(1)) if unit else DEFAULT_RESULT_UNIT)
    return sorted(set(units))


def _generated_export(comm: Path, meshes: Sequence[Path]) -> str:
    lines = [
        "# Written by csauto from the files picked when the campaign was created.",
        f"# Meshes are read with UNITE={FIRST_MESH_UNIT}, {FIRST_MESH_UNIT + 1}... in the order they were picked.",
        "P time_limit 3600",
        "P memory_limit 4096",
        "P mpi_nbnoeud 1",
        "",
        f"F comm {comm.name} D 1",
    ]
    for unit, mesh in enumerate(meshes, start=FIRST_MESH_UNIT):
        lines.append(f"F {MESH_TYPES.get(mesh.suffix.lower(), 'mmed')} ../MESH/{mesh.name} D {unit}")
    lines.append("")
    for unit in _result_units(comm.read_text(encoding="utf-8", errors="replace")):
        lines.append(f"F rmed RESU/results_{unit}.rmed R {unit}")
    lines.append("F mess output.mess R 6")
    return "\n".join(lines) + "\n"


def _relinked_export(text: str, comm: Path, meshes: Sequence[Path]) -> str:
    """The user's export, its command file and meshes pointed to where the campaign keeps them.

    Its CPU counts are dropped: n and nt, picked at each launch, set them.
    """
    mesh_names = {mesh.name for mesh in meshes}
    lines = []
    for line in text.splitlines():
        parts = line.split()
        if parts[:2] in CPU_PARAMS:
            continue
        if len(parts) >= 4 and parts[0] == "F" and parts[-2] == "D":
            name = Path(parts[-3]).name
            if name == comm.name:
                parts[-3] = comm.name
            elif name in mesh_names:
                parts[-3] = f"../MESH/{name}"
            line = " ".join(parts)
        lines.append(line)
    return "\n".join(lines) + "\n"


OUTCOME_SUCCESS_PATTERNS = (re.compile(r"DIAGNOSTIC JOB : (OK|<A>_ALARM)\b"),)
# Any other verdict (<F>_..., <S>_..., <E>_..., NOOK_TEST_RESU, "?") is a failure.
OUTCOME_FAILURE_PATTERNS = (re.compile(r"DIAGNOSTIC JOB : \S"),)
LOGOS = Path(__file__).with_name("logos")


class CodeAsterAdapter(SolverAdapter):
    name: ClassVar[str] = "code_aster"
    description: ClassVar[str] = "Structural mechanics: .export + .comm studies, run with run_aster"
    example_dir: ClassVar[str] = "codeaster-cube"
    case_inputs: ClassVar[tuple[CaseInput, ...]] = (
        CaseInput("comm", "Command file", (".comm",), "TEMPLATE", hint="The study's commands."),
        CaseInput(
            "mesh",
            "Meshes",
            tuple(MESH_TYPES),
            "MESH",
            required=False,
            multiple=True,
            hint=f"Read by LIRE_MAILLAGE with UNITE={FIRST_MESH_UNIT}, {FIRST_MESH_UNIT + 1}... in the order picked.",
        ),
        CaseInput(
            "export",
            "Export file",
            (".export",),
            "TEMPLATE",
            required=False,
            hint="Optional: csauto writes one for the files above, or points yours to them.",
        ),
    )
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
        CompareKind("comm", "Command file"),
        CompareKind("doe_row.csv", "doe_row.csv"),
    )
    logo_file: ClassVar[Path | None] = LOGOS / "code_aster.svg"
    logo_dark_file: ClassVar[Path | None] = LOGOS / "code_aster_dark.svg"
    icon_file: ClassVar[Path | None] = LOGOS / "code_aster_icon.svg"

    def run_argv(self, case_dir: Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None) -> list[str]:
        return [RUN_EXPORT_NAME, *(str(arg) for arg in run_args or () if str(arg) != "")]

    def prepare_launch(self, case_dir: Path, nprocs: int, nt: int) -> None:
        """Write the export to run, with n MPI processes and nt threads, and create RESU."""
        export = self.find_setup_file(case_dir)
        text = export.read_text(encoding="utf-8", errors="surrogateescape")
        lines = [line for line in text.splitlines() if line.split()[:2] not in CPU_PARAMS]
        if len(lines) < len(text.splitlines()):
            print(
                f"Warning: {export.name} sets mpi_nbcpu or ncpus: ignored, the launch sets them from n and nt "
                "(the run's export is .csauto.export).",
                file=sys.stderr,
            )
        lines += [f"P mpi_nbcpu {nprocs}", f"P ncpus {nt}"]
        (case_dir / RUN_EXPORT_NAME).write_text("\n".join(lines) + "\n", encoding="utf-8", errors="surrogateescape")
        self.results_root(case_dir).mkdir(exist_ok=True)

    def assemble_case(self, campaign_dir: Path, files: Mapping[str, Sequence[Path]]) -> None:
        super().assemble_case(campaign_dir, files)
        comm = Path(files["comm"][0])
        meshes = [Path(mesh) for mesh in files.get("mesh", ())]
        template = campaign_dir / "TEMPLATE"
        exports = [Path(export) for export in files.get("export", ())]
        if exports:
            export = template / exports[0].name
            text = export.read_text(encoding="utf-8", errors="surrogateescape")
            export.write_text(_relinked_export(text, comm, meshes), encoding="utf-8", errors="surrogateescape")
        else:
            (template / f"{comm.stem}.export").write_text(_generated_export(comm, meshes), encoding="utf-8")

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
        if name in ("export", "comm"):
            run_export = case_dir / RUN_EXPORT_NAME  # the export last run, with its n and nt
            try:
                export = run_export if run_export.is_file() else self.find_setup_file(case_dir)
            except (FileNotFoundError, ValueError):
                return None
            if name == "export":
                return export
            for line in export.read_text(encoding="utf-8", errors="replace").splitlines():
                parts = line.split()
                if len(parts) >= 4 and parts[:2] == ["F", "comm"]:
                    return super().locate_case_file(case_dir, parts[2])
            return None
        return super().locate_case_file(case_dir, name)
