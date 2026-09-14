"""Execution backend boundary.

`ExecutionBackend` is the contract a remote execution service implements. The
generic core (runner, the sync pass, kill) programs against these five verbs and
never against a provider's API. Translating a provider's own vocabulary into
csauto statuses is the backend's job, the same discipline `SolverAdapter`
applies to solvers.
"""

from __future__ import annotations

from collections.abc import Sequence
from dataclasses import dataclass
from pathlib import Path
from typing import Protocol, runtime_checkable


@dataclass(frozen=True)
class BackendState:
    """One observation of a remote task, already in csauto's vocabulary."""

    status: str  # PENDING / RUNNING / DONE / FAILED
    progress: float | None = None
    stdout_delta: str = ""
    stderr_delta: str = ""
    execution_time_s: float | None = None
    running_core_count: int | None = None


@runtime_checkable
class ExecutionBackend(Protocol):
    """What the core is allowed to know about a remote execution service."""

    name: str

    def submit(
        self,
        case_dir: Path,
        argv: Sequence[str],
        image: str,
        nprocs: int,
        nt: int,
        observability_globs: Sequence[str] = (),
    ) -> str: ...

    def poll(self, task_id: str) -> BackendState: ...

    def sync(self, task_id: str, case_dir: Path) -> None: ...

    def fetch_final(self, task_id: str, case_dir: Path) -> None: ...

    def cancel(self, task_id: str) -> None: ...
