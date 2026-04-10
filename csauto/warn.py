"""Deduplicated stderr warnings with live counter, similar to browser dev tools."""

from __future__ import annotations

import os
import sys
import threading

_lock = threading.Lock()
_last_message: str | None = None
_last_count: int = 0

_YELLOW = "\033[33m"
_RED = "\033[31m"
_RESET = "\033[0m"


def _is_tty() -> bool:
    try:
        return sys.stderr.isatty()
    except (AttributeError, ValueError):
        return False


def _terminal_width() -> int:
    try:
        return os.get_terminal_size(sys.stderr.fileno()).columns
    except (AttributeError, ValueError, OSError):
        return 80


def _emit(label: str, color: str, message: str) -> None:
    global _last_message, _last_count

    key = f"{label}: {message}"
    tty = _is_tty()
    c, r = (color, _RESET) if tty else ("", "")

    with _lock:
        if key == _last_message:
            _last_count += 1
            prefix = f"{label}: {message}"
            suffix = f"(\u00d7{_last_count})"
            width = _terminal_width()
            padding = max(width - len(prefix) - len(suffix), 1)
            line = f"\r{c}{prefix}{' ' * padding}{suffix}{r}"
            sys.stderr.write(line)
            sys.stderr.flush()
        else:
            if _last_message is not None:
                sys.stderr.write("\n")
            _last_message = key
            _last_count = 1
            sys.stderr.write(f"{c}{label}: {message}{r}")
            sys.stderr.flush()


def warn(message: str) -> None:
    _emit("Warning", _YELLOW, message)


def error(message: str) -> None:
    _emit("Error", _RED, message)


def flush_warnings() -> None:
    global _last_message, _last_count

    with _lock:
        if _last_message is not None:
            sys.stderr.write("\n")
            sys.stderr.flush()
            _last_message = None
            _last_count = 0
