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

# Event types. The server (code-telemetry-server) rejects types it does not
# know, so a new one must be added there first.
# CLI without VS Code: install.sh, and `csauto serve` with a daily heartbeat.
EVENT_INSTALL = 3
EVENT_SERVE = 4
# VS Code extension: the first two are sent by the extension through
# `csauto _telemetry-ping`, the last by the servers it starts.
EVENT_EXT_ACTIVATED = 5
EVENT_EXT_CAMPAIGN_CREATED = 6
EVENT_EXT_RUN_FINISHED = 7

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


def extension_client() -> str:
    """Where VS Code runs ("local", "wsl", ...) when the extension started this process, else ""."""
    return os.environ.get("CSAUTO_CLIENT", "").strip()


def extension_payload() -> dict[str, str]:
    """The extension's version as a payload override, when the extension started this process."""
    version = os.environ.get("CSAUTO_CLIENT_VERSION", "").strip()
    return {"version": version} if version else {}


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


def send_events(event_type: int, events: list[dict[str, Any]]) -> None:
    """Send several events of one type from a single background thread, one after the other."""
    if not events or not is_enabled():
        return
    payloads = [_build_payload(event_type, **extra) for extra in events]
    threading.Thread(target=lambda: [_send_sync(payload) for payload in payloads], daemon=True).start()


async def send_event_async(event_type: int, **extra: Any) -> None:
    if not is_enabled():
        return
    payload = _build_payload(event_type, **extra)
    await asyncio.to_thread(_send_sync, payload)
