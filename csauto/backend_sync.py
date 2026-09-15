"""One synchronisation pass over the cases a remote backend owns.

Kept out of runner.py, which is already the largest module in the project. The
web server calls this on a timer; `csauto status` calls it once, throttled.

Follows the three-phase pattern `_count_running_cases` uses: snapshot under a
brief lock, do the network work with no lock held, write back under a new lock.
Holding the registry lock across a network round trip would block the CLI and
every other writer for its duration.
"""

from __future__ import annotations

import contextlib
from collections.abc import Callable
from datetime import datetime
from pathlib import Path
from typing import Any

from .backends import ExecutionBackend, get_backend
from .registry import (
    STATUS_DONE,
    STATUS_FAILED,
    STATUS_RUNNING,
    load_registry,
    mutate_registry,
    timestamp_now,
)
from .warn import warn

TERMINAL_STATUSES = (STATUS_DONE, STATUS_FAILED)

# A user may click Refresh as fast as they like, and `csauto status` may be run
# in a loop. Neither should become a provider round trip each time.
SYNC_THROTTLE_S = 10.0


def sync_backend_cases(
    runs_dir: Path,
    *,
    sync_files: bool = True,
    backend_factory: Callable[[str], ExecutionBackend] = get_backend,
) -> int:
    """Poll every unfinished backend case once. Returns how many were touched."""
    # Phase 1: snapshot the cases a backend owns, under a brief lock.
    snapshot: dict[str, dict[str, Any]] = {}
    for case_id, record in load_registry(runs_dir).items():
        if not str(record.get("backend") or "") or not str(record.get("task_id") or ""):
            continue
        if record.get("status") in TERMINAL_STATUSES and record.get("results_fetched"):
            continue
        snapshot[case_id] = dict(record)

    # Phase 2: network work, with no lock held.
    updates: dict[str, dict[str, Any]] = {}
    for case_id, record in snapshot.items():
        backend = backend_factory(str(record["backend"]))
        updates[case_id] = _observe(runs_dir, case_id, record, backend, str(record["task_id"]), sync_files)

    # Phase 3: write back under a new lock, skipping any case relaunched meanwhile.
    if updates:

        def apply(registry: dict[str, dict[str, Any]]) -> bool:
            changed = False
            for case_id, fields in updates.items():
                current = registry.get(case_id)
                if current is None:
                    continue
                if str(current.get("task_id") or "") != str(snapshot[case_id].get("task_id") or ""):
                    continue
                current.update(fields)
                current["last_update"] = timestamp_now()
                changed = True
            return changed

        mutate_registry(runs_dir, apply)
    return len(snapshot)


def _observe(
    runs_dir: Path,
    case_id: str,
    record: dict[str, Any],
    backend: ExecutionBackend,
    task_id: str,
    sync_files: bool,
) -> dict[str, Any]:
    """Talk to the backend and return the registry fields to write. No lock held."""
    case_dir = Path(record.get("path") or (runs_dir / case_id))

    try:
        state = backend.poll(task_id)
    except Exception as exc:
        # A transient failure must never change the status: a flaky network
        # would otherwise mark a whole campaign as failed.
        warn(f"{case_id}: backend poll failed ({exc})")
        return {"backend_poll_failures": int(record.get("backend_poll_failures") or 0) + 1}

    fields: dict[str, Any] = {"backend_poll_failures": 0}
    if state.progress is not None:
        fields["backend_progress"] = state.progress
    if state.execution_time_s is not None:
        fields["backend_execution_time_s"] = state.execution_time_s
    if state.running_core_count is not None:
        fields["backend_core_count"] = state.running_core_count
    _append(case_dir / "csauto.stdout", state.stdout_delta)
    _append(case_dir / "csauto.stderr", state.stderr_delta)

    if sync_files and state.status == STATUS_RUNNING:
        try:
            backend.sync(task_id, case_dir)
        except Exception as exc:
            warn(f"{case_id}: backend sync failed ({exc})")

    if state.status not in TERMINAL_STATUSES:
        fields["status"] = state.status
        return fields

    try:
        backend.fetch_final(task_id, case_dir)
    except Exception as exc:
        # The remote task finished but the results are not local yet. DONE must
        # mean the results are on disk, so leave the status alone and retry.
        warn(f"{case_id}: downloading results failed, will retry ({exc})")
        return fields

    fields["results_fetched"] = True
    fields["status"] = state.status
    fields["end_time"] = record.get("end_time") or timestamp_now()
    return fields


def _append(path: Path, text: str) -> None:
    if not text:
        return
    try:
        path.parent.mkdir(parents=True, exist_ok=True)
        with path.open("a", encoding="utf-8") as handle:
            handle.write(text)
    except OSError:
        return


def sync_backend_cases_throttled(
    runs_dir: Path,
    *,
    sync_files: bool = True,
    backend_factory: Callable[[str], ExecutionBackend] = get_backend,
) -> bool:
    """Run one pass, at most once every 10 s. Returns whether it ran.

    Never raises: the caller is a status command or a Refresh click, and a
    provider outage must not fail either. The marker lives under a reserved
    `_backend` key at the top of registry.json, which no case id can collide
    with: `_resolve_case_id` rejects ids not matching ^[A-Za-z0-9][A-Za-z0-9_.-]*$.
    """
    marker = load_registry(runs_dir).get("_backend", {}).get("last_sync")
    if marker:
        with contextlib.suppress(ValueError):
            if (datetime.now() - datetime.fromisoformat(str(marker))).total_seconds() < SYNC_THROTTLE_S:
                return False

    def stamp(registry: dict[str, dict[str, Any]]) -> bool:
        registry.setdefault("_backend", {})["last_sync"] = timestamp_now()
        return True

    mutate_registry(runs_dir, stamp)
    with contextlib.suppress(Exception):
        sync_backend_cases(runs_dir, sync_files=sync_files, backend_factory=backend_factory)
    return True


__all__ = ["sync_backend_cases", "sync_backend_cases_throttled"]
