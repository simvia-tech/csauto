"""A shipped fake execution backend.

What `StubAdapter` is to solvers: it satisfies the contract with local files and
a scripted state sequence, so the whole remote lifecycle can be tested without a
network, an account or credit.
"""

from __future__ import annotations

import itertools
from collections.abc import Mapping, Sequence
from pathlib import Path

from .base import BackendState, LaunchOption, LaunchOptions


class _FakeTask:
    def __init__(self, case_dir: Path) -> None:
        self.case_dir = case_dir
        self.step = 0
        self.stdout_cursor = 0
        self.cancelled = False
        self.polls = 0


class FakeBackend:
    """Scripted backend. Every behaviour a test needs is an explicit argument."""

    name = "fake"

    def __init__(
        self,
        script: Sequence[str] = ("PENDING", "RUNNING", "DONE"),
        stdout_lines: Sequence[str] = (),
        stderr_lines: Sequence[str] = (),
        sync_files: Mapping[str, str] | None = None,
        final_files: Mapping[str, str] | None = None,
        fail_polls: int = 0,
        fail_fetch_final: int = 0,
    ) -> None:
        self.script = tuple(script)
        self.stdout_lines = tuple(stdout_lines)
        self.stderr_lines = tuple(stderr_lines)
        self.sync_files = dict(sync_files or {})
        self.final_files = dict(final_files or {})
        self.fail_polls = fail_polls
        self.fail_fetch_final = fail_fetch_final
        self._tasks: dict[str, _FakeTask] = {}
        self._ids = itertools.count(1)
        self.submitted_options: dict[str, str] = {}

    def launch_options(self) -> LaunchOptions:
        """One trivial option, so the whole path is exercised with no network."""
        return LaunchOptions(
            options=(
                LaunchOption(
                    key="speed",
                    label="Speed",
                    choices=(("slow", "Slow"), ("fast", "Fast")),
                    default="slow",
                ),
            )
        )

    def submit(
        self,
        case_dir: Path,
        argv: Sequence[str],
        image: str,
        nprocs: int,
        nt: int,
        observability_globs: Sequence[str] = (),
        options: Mapping[str, str] = {},
    ) -> str:
        self.submitted_options = dict(options)
        task_id = f"fake-{next(self._ids):04d}"
        self._tasks[task_id] = _FakeTask(case_dir)
        return task_id

    def poll(self, task_id: str) -> BackendState:
        task = self._task(task_id)
        task.polls += 1
        if task.polls <= self.fail_polls:
            raise RuntimeError("fake poll failure")
        if task.cancelled:
            return BackendState(status="FAILED")

        index = min(task.step, len(self.script) - 1)
        status = self.script[index]
        task.step += 1

        stdout_delta = ""
        if task.stdout_cursor < len(self.stdout_lines):
            stdout_delta = self.stdout_lines[task.stdout_cursor] + "\n"
            task.stdout_cursor += 1

        stderr_delta = "".join(line + "\n" for line in self.stderr_lines) if task.step == 1 else ""
        progress = min(1.0, task.step / max(1, len(self.script)))
        return BackendState(
            status=status,
            progress=progress,
            stdout_delta=stdout_delta,
            stderr_delta=stderr_delta,
        )

    def sync(self, task_id: str, case_dir: Path) -> None:
        self._task(task_id)
        self._write(case_dir, self.sync_files)

    def fetch_final(self, task_id: str, case_dir: Path) -> None:
        self._task(task_id)
        if self.fail_fetch_final > 0:
            self.fail_fetch_final -= 1
            raise RuntimeError("fake fetch_final failure")
        self._write(case_dir, self.final_files)

    def cancel(self, task_id: str) -> None:
        self._task(task_id).cancelled = True

    def _task(self, task_id: str) -> _FakeTask:
        try:
            return self._tasks[task_id]
        except KeyError:
            raise KeyError(f"Unknown fake task: {task_id}") from None

    @staticmethod
    def _write(case_dir: Path, files: Mapping[str, str]) -> None:
        for relative, content in files.items():
            target = case_dir / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(content, encoding="utf-8")
