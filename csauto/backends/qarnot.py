"""The Qarnot execution backend.

Everything Qarnot-specific lives here: the SDK, the buckets, the docker-batch
constants, the state translation and the snapshot policy. The core programs
against the five verbs in `base.py` and never sees a name from this file.

The SDK is imported inside the methods that need it, so `[qarnot]` stays an
optional extra exactly as `[web]` does for FastAPI.

Two facts about the SDK that the code below depends on, both checked against
qarnot 2.23.0 rather than assumed:

- `Task.snapshot(interval, whitelist=...)` called before submission stores only
  the interval and silently drops the whitelist, so the whitelist is set as an
  attribute before submit (it is serialised into the creation payload) and the
  periodic configuration is posted again afterwards, where the explicit path
  runs.
- A Qarnot instance is a separate machine, not an MPI rank. `instancecount` is
  always 1; the process count is inside `DOCKER_CMD`.
"""

from __future__ import annotations

import os
import shlex
from collections.abc import Sequence
from pathlib import Path
from typing import Any

from .base import BackendState
from .qarnot_support import (
    bucket_name,
    directory_signature,
    ensure_upload_within,
    snapshot_whitelist,
    split_image,
    upload_plan,
)

TOKEN_ENV = "QARNOT_TOKEN"

# Qarnot's own vocabulary, translated here and nowhere else. Taken from
# qarnot.task.Task.state, not guessed. An unlisted name maps to PENDING: a
# state csauto has never seen must not fail a running campaign.
_STATES = {
    "submitted": "PENDING",
    "partiallydispatched": "PENDING",
    "fullydispatched": "PENDING",
    "unsubmitted": "PENDING",
    "partiallyexecuting": "RUNNING",
    "fullyexecuting": "RUNNING",
    "uploadingresults": "RUNNING",
    "downloadingresults": "RUNNING",
    "pendingcancel": "RUNNING",
    "success": "DONE",
    "failure": "FAILED",
    "cancelled": "FAILED",
    "pendingdelete": "FAILED",
    "deleted": "FAILED",
}


class QarnotBackend:
    """Run a case on the Qarnot cloud through its generic docker-batch profile."""

    name = "qarnot"

    def __init__(self, connection: Any = None) -> None:
        self._connection = connection

    def _connect(self) -> Any:
        """The SDK connection, built once, from the environment only."""
        if self._connection is not None:
            return self._connection
        token = os.environ.get(TOKEN_ENV, "").strip()
        if not token:
            raise RuntimeError(
                f"{TOKEN_ENV} is not set. Qarnot runs on your own account: create a token in the "
                f"Qarnot console and export it. It must never be written to csauto.toml."
            )
        try:
            from qarnot.connection import Connection
        except ImportError as exc:  # pragma: no cover - depends on the extra
            raise RuntimeError("The qarnot SDK is not installed. Install csauto with the [qarnot] extra.") from exc
        # Never let the token reach a traceback: the SDK raises on a bad token
        # with its own message, which does not contain the value.
        self._connection = Connection(client_token=token)
        return self._connection

    def submit(
        self,
        case_dir: Path,
        argv: Sequence[str],
        image: str,
        nprocs: int,
        nt: int,
        observability_globs: Sequence[str] = (),
    ) -> str:
        from ..solvers import get_solver_adapter

        case_dir = Path(case_dir).resolve()
        runs_dir = case_dir.parent
        config = _campaign_config(runs_dir)
        adapter = get_solver_adapter(config.solver)

        command = [str(part) for part in argv if str(part) != ""]
        if not command:
            raise ValueError(
                f"Solver {adapter.name} does not build a remote command: its run_argv is empty "
                f"because it composes the whole launch line locally. It cannot run on {self.name} yet."
            )

        plan = upload_plan(
            case_dir,
            shared_dir_names=adapter.shared_dir_names,
            results_dirname=adapter.results_dirname,
        )
        ensure_upload_within(plan, config.qarnot_max_upload_mb)

        connection = self._connect()
        campaign = bucket_name(runs_dir)

        case_bucket = connection.retrieve_or_create_bucket(f"{campaign}-{case_dir.name}")
        for relative in plan.paths:
            case_bucket.add_file(str(case_dir / relative), relative)

        resources = [case_bucket]
        shared_bucket = self._shared_bucket(connection, runs_dir, adapter, campaign)
        if shared_bucket is not None:
            resources.append(shared_bucket)

        repo, tag = split_image(image or adapter.default_docker_image)
        task = connection.create_task(f"csauto-{runs_dir.name}-{case_dir.name}", config.qarnot_profile, 1)
        task.constants["DOCKER_REPO"] = repo
        task.constants["DOCKER_TAG"] = tag
        task.constants["DOCKER_CMD"] = shlex.join(command)
        task.resources = resources
        task.results = connection.retrieve_or_create_bucket(f"{campaign}-{case_dir.name}-out")

        whitelist = snapshot_whitelist(observability_globs)
        if whitelist:
            task.snapshot_whitelist = whitelist
        task.submit()
        if whitelist:
            task.snapshot(config.qarnot_snapshot_interval_s, whitelist=whitelist)
        return str(task.uuid)

    def _shared_bucket(self, connection: Any, runs_dir: Path, adapter: Any, campaign: str) -> Any:
        """Upload MESH/POST once per campaign, not once per case.

        With mesh_mode = "symlink" these are shared directories of several
        gigabytes. Re-uploading them per case would mean hundreds of gigabytes
        for a hundred-case campaign, so a fingerprint in the registry records
        what was last sent.
        """
        from ..registry import load_registry, mutate_registry

        targets = [runs_dir / name for name in adapter.shared_dir_names]
        targets = [path for path in targets if path.is_dir()]
        if not targets:
            return None

        bucket = connection.retrieve_or_create_bucket(f"{campaign}-shared")
        signature = directory_signature(targets)
        marker = load_registry(runs_dir).get("_backend", {}).get("shared_upload") or {}
        if marker.get("bucket") == bucket.uuid and marker.get("signature") == signature:
            return bucket

        for path in targets:
            bucket.sync_directory(str(path), remote=path.name)

        def stamp(registry: dict[str, Any]) -> bool:
            registry.setdefault("_backend", {})["shared_upload"] = {
                "bucket": str(bucket.uuid),
                "signature": signature,
            }
            return True

        mutate_registry(runs_dir, stamp)
        return bucket

    def poll(self, task_id: str) -> BackendState:
        task = self._task(task_id)
        progress = getattr(task, "progress", None)
        return BackendState(
            status=_STATES.get(str(getattr(task, "state", "")).strip().lower(), "PENDING"),
            progress=None if progress is None else float(progress) / 100.0,
            stdout_delta=task.fresh_stdout() or "",
            stderr_delta=task.fresh_stderr() or "",
            execution_time_s=_as_float(getattr(task, "execution_time", None)),
            running_core_count=_as_int(getattr(task, "running_core_count", None)),
        )

    def sync(self, task_id: str, case_dir: Path) -> None:
        """Pull whatever the snapshot whitelist has captured so far.

        download_results only transfers when the task is dirty, so calling it
        on a quiet task costs one request. The results bucket only ever holds
        whitelisted paths under the results directory, so the case inputs are
        never overwritten.
        """
        Path(case_dir).mkdir(parents=True, exist_ok=True)
        self._task(task_id).download_results(str(case_dir))

    def fetch_final(self, task_id: str, case_dir: Path) -> None:
        """Pull the complete results, once, unconditionally.

        Not download_results: that one skips the transfer when the SDK thinks
        nothing changed, and DONE must mean the results really are on disk.
        """
        Path(case_dir).mkdir(parents=True, exist_ok=True)
        self._task(task_id).results.get_all_files(str(case_dir))

    def cancel(self, task_id: str) -> None:
        """Abort the task, unless it has already finished.

        Qarnot refuses to abort a finished task ("Invalid operation on
        non-running task"). Stopping something that already stopped is not an
        error for a user pressing Stop, so a terminal task is left alone, and
        the same refusal is tolerated when the task ends between the state read
        and the abort. Any other failure is still reported.
        """
        task = self._task(task_id)
        if _STATES.get(str(getattr(task, "state", "")).strip().lower(), "PENDING") in ("DONE", "FAILED"):
            return
        try:
            task.abort()
        except Exception as exc:
            if "non-running" not in str(exc).lower():
                raise

    def _task(self, task_id: str) -> Any:
        return self._connect().retrieve_task(str(task_id))


def _campaign_config(runs_dir: Path) -> Any:
    """The campaign's own csauto.toml when it has one, the ambient config otherwise."""
    from ..config import load_config

    candidate = runs_dir / "csauto.toml"
    return load_config(candidate if candidate.is_file() else None)


def _as_float(value: Any) -> float | None:
    try:
        return None if value is None else float(value)
    except (TypeError, ValueError):
        return None


def _as_int(value: Any) -> int | None:
    try:
        return None if value is None else int(value)
    except (TypeError, ValueError):
        return None
