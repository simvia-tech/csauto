"""Lightweight, fire-and-forget telemetry for csauto."""

from __future__ import annotations

import asyncio
import contextlib
import json
import os
import tempfile
import threading
import urllib.request
import uuid
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

TELEMETRY_ENDPOINT = "https://7a98391a395292bd9f0f.lambda.simvia-app.fr/"
TELEMETRY_DIR = Path.home() / ".local" / "share" / "csauto"
TELEMETRY_FILE = TELEMETRY_DIR / "telemetry.json"
TELEMETRY_TIMEOUT_S = 5

EVENT_INSTALL = 3
EVENT_SERVE = 4
# 5 is reserved (unused). VS Code extension events; id_docker carries the
# remote kind ("local", "ssh-remote", "wsl", ...) instead of the runtime.
EVENT_EXT_SERVE = 6
EVENT_EXT_DASHBOARD_OPEN = 7
EVENT_EXT_CLI_INSTALL = 8

_lock = threading.Lock()


def _load_state() -> dict[str, Any]:
    with _lock:
        try:
            return json.loads(TELEMETRY_FILE.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError, ValueError):
            return {}


def _save_state(state: dict[str, Any]) -> None:
    with _lock:
        TELEMETRY_DIR.mkdir(parents=True, exist_ok=True)
        tmp_path: Path | None = None
        try:
            with tempfile.NamedTemporaryFile(
                "w", delete=False, dir=str(TELEMETRY_DIR), encoding="utf-8", newline=""
            ) as fh:
                json.dump(state, fh, indent=2)
                fh.flush()
                os.fsync(fh.fileno())
                tmp_path = Path(fh.name)
            os.replace(tmp_path, TELEMETRY_FILE)
        finally:
            if tmp_path and tmp_path.exists():
                with contextlib.suppress(OSError):
                    tmp_path.unlink()


def get_or_create_user_id() -> str:
    state = _load_state()
    uid = state.get("user_id")
    if uid:
        return str(uid)
    uid = str(uuid.uuid4())
    state["user_id"] = uid
    state.setdefault("enabled", True)
    _save_state(state)
    return uid


def is_enabled() -> bool:
    if os.environ.get("CSAUTO_TELEMETRY_DISABLED") == "1":
        return False
    return _load_state().get("enabled", True)


def set_enabled(enabled: bool) -> None:
    state = _load_state()
    state["enabled"] = enabled
    state.setdefault("user_id", str(uuid.uuid4()))
    _save_state(state)


def _get_timezone() -> str:
    now = datetime.now(UTC).astimezone()
    offset = now.utcoffset()
    if offset is None:
        return "+00:00"
    total_seconds = int(offset.total_seconds())
    sign = "+" if total_seconds >= 0 else "-"
    total_seconds = abs(total_seconds)
    hours, remainder = divmod(total_seconds, 3600)
    minutes = remainder // 60
    return f"{sign}{hours:02d}:{minutes:02d}"


def _build_payload(event_type: int, **extra: Any) -> dict[str, Any]:
    from . import __version__

    payload: dict[str, Any] = {
        "user_id": get_or_create_user_id(),
        "time_execution": 0,
        "valid_result": True,
        "timezone": _get_timezone(),
        "version": __version__,
        "id_docker": "",
        "type": event_type,
    }
    payload.update(extra)
    return payload


def _send_sync(payload: dict[str, Any]) -> None:
    try:
        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(
            TELEMETRY_ENDPOINT,
            data=data,
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        with urllib.request.urlopen(req, timeout=TELEMETRY_TIMEOUT_S):
            pass
    except Exception:
        pass


def send_event(event_type: int, *, block: bool = False, **extra: Any) -> None:
    if not is_enabled():
        return
    payload = _build_payload(event_type, **extra)
    if block:
        _send_sync(payload)
    else:
        t = threading.Thread(target=_send_sync, args=(payload,), daemon=True)
        t.start()


async def send_event_async(event_type: int, **extra: Any) -> None:
    if not is_enabled():
        return
    payload = _build_payload(event_type, **extra)
    await asyncio.to_thread(_send_sync, payload)
