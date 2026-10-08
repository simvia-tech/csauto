"""Enforce the solver adapter boundary.

Modules outside csauto/solvers/ hold generic mechanism only; every
code_saturne convention (file name, directory layout, log marker) is
vocabulary declared by its adapter. If this test fails, route the new call
through the adapter (or extend it) instead of adding the literal back.
"""

from __future__ import annotations

import re
from pathlib import Path

import pytest

PACKAGE_DIR = Path(__file__).resolve().parents[2] / "csauto"

# Matched as whole words, where "_" separates words: "saturne" catches
# code_saturne and resolve_saturne, "RESU" does not catch RESULTS.
SOLVER_TOKENS = (
    "saturne",
    "setup.xml",
    "run.cfg",
    "RESU",
    "MESH",
    "POST",
    "listing",
    "monitoring",
    "profiles",
    "run_solver.log",
    "performance.log",
    "run_status",
    "residuals.csv",
)
TOKEN_RE = re.compile(r"(?<![A-Za-z0-9])(" + "|".join(map(re.escape, SOLVER_TOKENS)) + r")(?![A-Za-z0-9])")

# Deliberate residue, the same list as "Accepted residue" in docs/architecture.md:
# the TOML key and CLI flag saturne_bin / --saturne-bin and the historical HTTP
# names keep their spelling. Each entry is removed from a line before the
# tokens are searched.
ACCEPTED_RESIDUE: dict[str, tuple[str, ...]] = {
    "*": ("saturne_bin", "--saturne-bin"),
    # The /api/probes scope value naming the profiles role.
    "fastapi_routes/case_data.py": ('"profiles"',),
}

GENERIC_MODULES = sorted(p for p in PACKAGE_DIR.rglob("*.py") if "solvers" not in p.relative_to(PACKAGE_DIR).parts)


@pytest.mark.parametrize("module_path", GENERIC_MODULES, ids=lambda p: p.relative_to(PACKAGE_DIR).as_posix())
def test_generic_module_has_no_solver_literals(module_path: Path) -> None:
    rel = module_path.relative_to(PACKAGE_DIR).as_posix()
    residue = (*ACCEPTED_RESIDUE["*"], *ACCEPTED_RESIDUE.get(rel, ()))
    hits: list[str] = []
    for lineno, line in enumerate(module_path.read_text(encoding="utf-8").splitlines(), start=1):
        scrubbed = line
        for allowed in residue:
            scrubbed = scrubbed.replace(allowed, "")
        if TOKEN_RE.search(scrubbed):
            hits.append(f"{rel}:{lineno}: {line.strip()}")
    assert not hits, "solver-specific literals leaked into generic modules:\n" + "\n".join(hits)


def test_accepted_residue_names_existing_modules() -> None:
    for rel in ACCEPTED_RESIDUE:
        assert rel == "*" or (PACKAGE_DIR / rel).is_file(), rel


# The dashboard source gets the same scan. Its residue: the HTTP verb POST, and
# the Probes panel's Profiles view, a generic view fed by list_profile_files.
FRONTEND_DIR = PACKAGE_DIR.parent / "frontend" / "src"
FRONTEND_FILES = sorted(p for p in FRONTEND_DIR.rglob("*") if p.suffix in {".svelte", ".ts", ".js"})
FRONTEND_RESIDUE = ("POST", "profiles")


@pytest.mark.parametrize("path", FRONTEND_FILES, ids=lambda p: p.relative_to(FRONTEND_DIR).as_posix())
def test_dashboard_source_has_no_solver_literals(path: Path) -> None:
    hits: list[str] = []
    for lineno, line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
        scrubbed = line
        for allowed in FRONTEND_RESIDUE:
            scrubbed = scrubbed.replace(allowed, "")
        if TOKEN_RE.search(scrubbed):
            hits.append(f"{path.relative_to(FRONTEND_DIR)}:{lineno}: {line.strip()}")
    assert not hits, "solver-specific literals in the dashboard source:\n" + "\n".join(hits)
