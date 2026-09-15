"""Execution backend boundary.

`ExecutionBackend` is the contract a remote execution service implements. The
generic core (runner, the sync pass, kill) programs against these five verbs and
never against a provider's API. Translating a provider's own vocabulary into
csauto statuses is the backend's job, the same discipline `SolverAdapter`
applies to solvers.
"""

from __future__ import annotations

from collections.abc import Mapping, Sequence
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


@dataclass(frozen=True)
class LaunchOption:
    """One choice a backend offers at launch time, declared by the backend.

    The core never interprets these: it renders them and hands the chosen
    values back untouched. That is what keeps a provider's vocabulary inside
    its own module, the discipline the solver adapters already follow.
    """

    key: str
    label: str
    choices: tuple[tuple[str, str], ...]
    default: str = ""


@dataclass(frozen=True)
class LaunchOptions:
    """A backend's catalogue, plus whether the provider could be reached.

    `degraded` is reported rather than hidden: a short list because the API is
    down looks exactly like a short list because the account is small, and a
    user should not have to guess which.
    """

    options: tuple[LaunchOption, ...] = ()
    degraded: bool = False


@runtime_checkable
class ExecutionBackend(Protocol):
    """What the core is allowed to know about a remote execution service."""

    name: str

    def launch_options(self) -> LaunchOptions: ...

    def submit(
        self,
        case_dir: Path,
        argv: Sequence[str],
        image: str,
        nprocs: int,
        nt: int,
        observability_globs: Sequence[str] = (),
        options: Mapping[str, str] = {},
    ) -> str: ...

    def poll(self, task_id: str) -> BackendState: ...

    def sync(self, task_id: str, case_dir: Path) -> None: ...

    def fetch_final(self, task_id: str, case_dir: Path) -> None: ...

    def cancel(self, task_id: str) -> None: ...
