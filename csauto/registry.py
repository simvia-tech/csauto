from __future__ import annotations

import json
import os
import sys
import tempfile
import threading
from collections import deque
from collections.abc import Callable, Iterable, Mapping
from contextlib import contextmanager, suppress
from datetime import datetime
from pathlib import Path
from typing import Any

STATUS_PREPARED = "PREPARED"
STATUS_PENDING = "PENDING"
STATUS_RUNNING = "RUNNING"
STATUS_DONE = "DONE"
STATUS_FAILED = "FAILED"

REGISTRY_FILENAME = "registry.json"
REGISTRY_LOCKFILE = f"{REGISTRY_FILENAME}.lock"
REGISTRY_THREAD_LOCK = threading.RLock()
HISTORY_FILENAME = ".csauto.history.jsonl"

try:
    import fcntl
except ImportError:  # pragma: no cover - fallback for non-POSIX platforms
    fcntl = None


@contextmanager
def registry_lock(runs_dir: Path) -> Iterable[None]:
    """Serialize registry access across threads and processes."""
    if not runs_dir.is_dir():
        with REGISTRY_THREAD_LOCK:
            yield
        return
    lock_path = runs_dir / REGISTRY_LOCKFILE
    with REGISTRY_THREAD_LOCK:
        handle = lock_path.open("a+")
        try:
            if fcntl:
                fcntl.flock(handle.fileno(), fcntl.LOCK_EX)
            yield
        finally:
            if fcntl:
                fcntl.flock(handle.fileno(), fcntl.LOCK_UN)
            handle.close()


def _load_registry_unlocked(runs_dir: Path) -> dict[str, dict[str, Any]]:
    """Load registry.json from the runs directory (no locking)."""
    registry_path = runs_dir / REGISTRY_FILENAME
    if not registry_path.is_file():
        return {}

    try:
        with registry_path.open("r", encoding="utf-8") as handle:
            data = json.load(handle)
    except json.JSONDecodeError as exc:
        raise ValueError(f"Invalid registry JSON: {registry_path}") from exc

    if not isinstance(data, dict):
        raise ValueError(f"Registry JSON must be a dictionary object: {registry_path}")
    return {str(k): dict(v) for k, v in data.items()}


def _save_registry_unlocked(runs_dir: Path, registry: Mapping[str, Any]) -> None:
    """Persist registry.json into the runs directory (no locking)."""
    registry_path = runs_dir / REGISTRY_FILENAME
    tmp_path: Path | None = None
    try:
        with tempfile.NamedTemporaryFile(
            "w",
            delete=False,
            dir=str(runs_dir),
            encoding="utf-8",
            newline="",
        ) as handle:
            json.dump(registry, handle, indent=2, sort_keys=True)
            handle.flush()
            os.fsync(handle.fileno())
            tmp_path = Path(handle.name)
        os.replace(tmp_path, registry_path)
    finally:
        if tmp_path and tmp_path.exists():
            with suppress(OSError):
                tmp_path.unlink()


def load_registry(runs_dir: Path) -> dict[str, dict[str, Any]]:
    """Load registry.json from the runs directory."""
    with registry_lock(runs_dir):
        return _load_registry_unlocked(runs_dir)


def save_registry(runs_dir: Path, registry: Mapping[str, Any]) -> None:
    """Persist registry.json into the runs directory."""
    with registry_lock(runs_dir):
        _save_registry_unlocked(runs_dir, registry)


def mutate_registry(
    runs_dir: Path,
    mutator: Callable[[dict[str, dict[str, Any]]], bool],
) -> bool:
    """Apply a registry mutation and save only if the mutator changed something."""
    with registry_lock(runs_dir):
        registry = _load_registry_unlocked(runs_dir)
        changed = bool(mutator(registry))
        if changed:
            _save_registry_unlocked(runs_dir, registry)
        return changed


@contextmanager
def registry_transaction(runs_dir: Path) -> Iterable[dict[str, dict[str, Any]]]:
    """Load/update/save registry.json under a single lock."""
    with registry_lock(runs_dir):
        registry = _load_registry_unlocked(runs_dir)
        yield registry
        _save_registry_unlocked(runs_dir, registry)


def update_case(registry: dict[str, dict[str, Any]], case_id: str, **updates: Any) -> None:
    """Update a single case entry in the registry and touch last_update."""
    record = registry.get(case_id, {"case_id": case_id})
    record.setdefault("case_id", case_id)
    if "path" in updates or "path" not in record:
        path_value = updates.get("path", record.get("path"))
        if path_value is not None:
            record["path"] = str(path_value)
    record.update({k: v for k, v in updates.items() if k != "path"})
    record["last_update"] = timestamp_now()
    registry[case_id] = record


def timestamp_now() -> str:
    """Return current timestamp as ISO string."""
    return datetime.now().isoformat(timespec="seconds")


def history_path(case_dir: Path) -> Path:
    """Return the history log path for a case directory."""
    return case_dir / HISTORY_FILENAME


def append_history(
    case_dir: Path,
    action: str,
    details: Mapping[str, Any] | None = None,
    source: str | None = None,
    actor: str | None = None,
) -> None:
    """Append a history record for a case."""
    record: dict[str, Any] = {"ts": timestamp_now(), "action": action}
    if source:
        record["source"] = source
    if actor:
        record["actor"] = actor
    if details:
        record["details"] = details
    path = history_path(case_dir)
    try:
        with path.open("a", encoding="utf-8") as handle:
            handle.write(json.dumps(record, ensure_ascii=True, default=str) + "\n")
    except OSError:
        return


def read_history(
    case_dir: Path,
    limit: int = 200,
    exclude_actions: set[str] | None = None,
    include_actions: set[str] | None = None,
    query: str | None = None,
) -> list[dict[str, Any]]:
    """Read the latest history records for a case."""
    path = history_path(case_dir)
    if not path.is_file():
        return []
    items: deque[dict[str, Any]] = deque(maxlen=limit)
    excluded = exclude_actions or set()
    included = {action for action in include_actions} if include_actions else None
    query_text = query.strip().lower() if query else ""
    skipped = 0
    try:
        with path.open("r", encoding="utf-8", errors="ignore") as handle:
            for line in handle:
                line = line.strip()
                if not line:
                    continue
                try:
                    record = json.loads(line)
                except json.JSONDecodeError:
                    skipped += 1
                    continue
                action = record.get("action")
                if excluded and action in excluded:
                    continue
                if included and action not in included:
                    continue
                if query_text:
                    details = record.get("details")
                    detail_text = ""
                    if details is not None:
                        try:
                            detail_text = json.dumps(details, ensure_ascii=True, default=str)
                        except TypeError:
                            detail_text = str(details)
                    haystack = " ".join(
                        [
                            str(record.get("ts", "")),
                            str(action or ""),
                            str(record.get("source", "")),
                            str(record.get("actor", "")),
                            detail_text,
                        ]
                    ).lower()
                    if query_text not in haystack:
                        continue
                items.append(record)
    except OSError:
        return []
    if skipped:
        sys.stderr.write(f"Warning: {skipped} malformed line(s) skipped in {path}\n")
    return list(reversed(items))
