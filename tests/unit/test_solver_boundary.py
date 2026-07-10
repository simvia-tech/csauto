"""Enforce the solver adapter boundary.

Generic orchestration modules must not reference code_saturne conventions
directly; all solver-specific knowledge goes through the SolverAdapter. If
this test fails, route the new call through the adapter (or extend it) instead
of adding the literal back.
"""

from __future__ import annotations

from pathlib import Path

import pytest

PACKAGE_DIR = Path(__file__).resolve().parents[2] / "csauto"

SOLVER_TOKENS = ("code_saturne", "setup.xml", "run.cfg", "RESU", "MESH")

GENERIC_MODULES = [
    PACKAGE_DIR / "registry.py",
    PACKAGE_DIR / "doe.py",
    PACKAGE_DIR / "cli.py",
    PACKAGE_DIR / "control.py",
    PACKAGE_DIR / "web_services.py",
    *sorted((PACKAGE_DIR / "fastapi_routes").glob("*.py")),
]


@pytest.mark.parametrize("module_path", GENERIC_MODULES, ids=lambda p: p.name)
def test_generic_module_has_no_solver_literals(module_path: Path) -> None:
    source = module_path.read_text(encoding="utf-8")
    hits = [
        f"{module_path.name}:{lineno}: {line.strip()}"
        for lineno, line in enumerate(source.splitlines(), start=1)
        for token in SOLVER_TOKENS
        if token in line
    ]
    assert not hits, "solver-specific literals leaked into generic modules:\n" + "\n".join(hits)
