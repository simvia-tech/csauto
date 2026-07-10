"""Solver adapter registry.

The `solver` key in csauto.toml selects which adapter the whole application
uses; `get_solver_adapter(None)` returns the default (code_saturne) and is the
back-compat fallback for callers that predate the adapter boundary.

Implementation modules are imported lazily so that loading configuration does
not pull in the full parsing/execution stack.
"""

from __future__ import annotations

import functools

from .base import SolverAdapter, SolverAdapterBase

DEFAULT_SOLVER = "code_saturne"
_SOLVER_NAMES = ("code_saturne", "stub")


def available_solvers() -> tuple[str, ...]:
    return _SOLVER_NAMES


def get_solver_adapter(name: str | None = None) -> SolverAdapter:
    """Return the memoized adapter instance for a solver name (default: code_saturne)."""
    return _adapter_for((name or DEFAULT_SOLVER).strip().lower())


@functools.cache
def _adapter_for(normalized: str) -> SolverAdapter:
    if normalized == "code_saturne":
        from .code_saturne import CodeSaturneAdapter

        return CodeSaturneAdapter()
    if normalized == "stub":
        from .stub import StubAdapter

        return StubAdapter()
    choices = ", ".join(available_solvers())
    raise ValueError(f"Unknown solver: {normalized!r}. Choices: {choices}")


__all__ = [
    "DEFAULT_SOLVER",
    "SolverAdapter",
    "SolverAdapterBase",
    "available_solvers",
    "get_solver_adapter",
]
