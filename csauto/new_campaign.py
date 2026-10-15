"""Scaffold a campaign folder for the VS Code extension's New Campaign flow.

A campaign folder holds `csauto.toml` (its solver and runtime), `TEMPLATE/`,
the solver's shared folders (meshes, ...) and `doe.csv`; `csauto prepare`
then generates `RUNS/` next to them. A campaign starts from the solver's
shipped example, from a case the user already has, or empty.
"""

from __future__ import annotations

import csv
import shutil
import tempfile
from collections.abc import Mapping, Sequence
from pathlib import Path
from typing import Any

from .doe import collect_template_variables
from .execution import RUNTIME_DOCKER, RUNTIME_NATIVE, RUNTIME_SINGULARITY
from .solvers import available_solvers, get_solver_adapter
from .solvers.base import SolverAdapter

_PACKAGE_DIR = Path(__file__).resolve().parent
# Wheels carry the examples inside the package; a source checkout has them at the root.
_EXAMPLE_ROOTS = (_PACKAGE_DIR / "_examples", _PACKAGE_DIR.parent / "examples")


def example_path(adapter: SolverAdapter) -> Path | None:
    if not adapter.example_dir:
        return None
    for root in _EXAMPLE_ROOTS:
        candidate = root / adapter.example_dir
        if candidate.is_dir():
            return candidate
    return None


def _found_runtimes(adapter: SolverAdapter) -> list[str]:
    found = []
    if shutil.which(adapter.native_bin_name):
        found.append(RUNTIME_NATIVE)
    if shutil.which("docker"):
        found.append(RUNTIME_DOCKER)
    if shutil.which("apptainer") or shutil.which("singularity"):
        found.append(RUNTIME_SINGULARITY)
    return [name for name in found if name in adapter.supported_runtimes]


def list_solvers() -> list[dict[str, Any]]:
    """The solvers a user can create a campaign for, with the runtimes found on this machine."""
    solvers = []
    for name in available_solvers():
        adapter = get_solver_adapter(name)
        if not adapter.description:
            continue
        solvers.append(
            {
                "name": adapter.name,
                "description": adapter.description,
                "runtimes": sorted(adapter.supported_runtimes),
                "default_docker_image": adapter.default_docker_image,
                "native_bin_name": adapter.native_bin_name,
                "found_runtimes": _found_runtimes(adapter),
                "has_example": example_path(adapter) is not None,
                "inputs": [spec._asdict() for spec in adapter.case_inputs],
                "icon_file": str(adapter.icon_file) if adapter.icon_file else "",
            }
        )
    return solvers


def _ignore_runs(_directory: str, names: list[str]) -> list[str]:
    return [name for name in names if name == "RUNS"]


def case_info(template: Path, solver: str) -> dict[str, Any]:
    """What csauto sees in a case folder: its main input file and its DOE variables."""
    adapter = get_solver_adapter(solver)
    template = template.resolve()
    try:
        setup_file = adapter.find_setup_file(template)
    except FileNotFoundError as exc:
        raise ValueError(f"{template.name} is not a {adapter.name} case: {exc}") from exc
    return {
        "setup_file": setup_file.relative_to(template).as_posix(),
        "variables": sorted(collect_template_variables(template, adapter=adapter)),
        "warnings": adapter.setup_warnings(setup_file),
    }


def inspect_inputs(solver: str, files: Mapping[str, Sequence[Path]]) -> dict[str, Any]:
    """Assemble picked files in a scratch folder: the files the case gets and its DOE variables."""
    adapter = get_solver_adapter(solver)
    with tempfile.TemporaryDirectory() as scratch:
        root = Path(scratch)
        adapter.assemble_case(root, files)
        info = case_info(root / "TEMPLATE", solver)
        info["files"] = sorted(path.relative_to(root).as_posix() for path in root.rglob("*") if path.is_file())
    return info


def input_warnings(solver: str, files: Mapping[str, Sequence[Path]]) -> list[str]:
    """Problems in the picked files themselves, known before the case can be assembled from them."""
    adapter = get_solver_adapter(solver)
    picked = [Path(p) for paths in files.values() for p in paths if Path(p).is_file()]
    return [w for p in picked for w in adapter.setup_warnings(p)]


def _write_doe(path: Path, variables: list[str]) -> None:
    # Without variables the case runs as is, as one case named after what it is.
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.writer(handle)
        if variables:
            writer.writerow(variables)
        else:
            writer.writerows([["case_id"], ["baseline"]])


def create_campaign(
    target: Path,
    solver: str,
    runtime: str,
    template: Path | None = None,
    *,
    empty: bool = False,
    files: Mapping[str, Sequence[Path]] | None = None,
) -> Path:
    """Create the campaign folder `target`: from `template`, from picked `files`, empty, or else the example.

    From picked files, the adapter assembles the case (`assemble_case`) and
    doe.csv gets one column per variable, as from a template.

    From a template, the case is copied to TEMPLATE/, the shared folders next
    to it are linked (meshes can be large), and doe.csv gets one column per
    template variable, ready for the user to add rows; a template without
    variables gives a doe.csv with one `baseline` case that runs it as is.
    An empty campaign has an empty TEMPLATE/ for the user's files.
    """
    adapter = get_solver_adapter(solver)
    if runtime not in adapter.supported_runtimes:
        choices = ", ".join(sorted(adapter.supported_runtimes))
        raise ValueError(f"{adapter.name} does not run with {runtime} (supported: {choices}).")
    if target.exists() and any(target.iterdir()):
        raise ValueError(f"{target} already exists and is not empty.")

    if files:
        adapter.assemble_case(target, files)
        _write_doe(target / "doe.csv", sorted(collect_template_variables(target / "TEMPLATE", adapter=adapter)))
    elif empty:
        (target / "TEMPLATE").mkdir(parents=True)
        _write_doe(target / "doe.csv", [])
    elif template is None:
        example = example_path(adapter)
        if example is None:
            raise ValueError(f"{adapter.name} ships no example to start from.")
        shutil.copytree(example, target, ignore=_ignore_runs, dirs_exist_ok=True)
    else:
        template = template.resolve()
        case_info(template, solver)
        ignored = {"RUNS", adapter.results_dirname}
        shutil.copytree(
            template,
            target / "TEMPLATE",
            ignore=lambda _d, names: [n for n in names if n in ignored],
            dirs_exist_ok=True,
        )
        for shared_name in adapter.shared_dir_names:
            source = template.parent / shared_name
            if source.is_dir():
                (target / shared_name).symlink_to(source.resolve(), target_is_directory=True)
        _write_doe(target / "doe.csv", sorted(collect_template_variables(target / "TEMPLATE", adapter=adapter)))

    (target / "csauto.toml").write_text(f'solver = "{adapter.name}"\nruntime = "{runtime}"\n', encoding="utf-8")
    return target
