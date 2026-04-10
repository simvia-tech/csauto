import threading
import time
from pathlib import Path
from typing import Any

from .runner import refresh_status

STATUS_CACHE_TTL_S = 0.5


def get_status_payload(
    runs_dir: Path,
    status_cache_lock: threading.Lock,
    status_refresh_lock: threading.Lock,
    status_cache: dict[str, Any],
) -> dict[str, Any]:
    now = time.monotonic()
    with status_cache_lock:
        cached = status_cache.get("payload")
        expires_at = float(status_cache.get("expires_at") or 0.0)
        if cached is not None and now < expires_at:
            return cached
    with status_refresh_lock:
        now = time.monotonic()
        with status_cache_lock:
            cached = status_cache.get("payload")
            expires_at = float(status_cache.get("expires_at") or 0.0)
            if cached is not None and now < expires_at:
                return cached
        rows, doe_columns = refresh_status(runs_dir, include_doe=True)
        payload = {"rows": rows, "doe_columns": doe_columns}
        with status_cache_lock:
            status_cache["payload"] = payload
            status_cache["expires_at"] = now + STATUS_CACHE_TTL_S
        return payload
