"""Execution backend registry.

The `backend` field on a case selects which service runs it. Implementation
modules are imported lazily so that loading configuration never pulls in an
optional SDK.
"""

from __future__ import annotations

import functools

from .base import BackendState, ExecutionBackend

_BACKEND_NAMES = ("fake", "qarnot")


def available_backends() -> tuple[str, ...]:
    return _BACKEND_NAMES


def get_backend(name: str) -> ExecutionBackend:
    """Return the memoized backend instance for a name."""
    return _backend_for(str(name or "").strip().lower())


@functools.cache
def _backend_for(normalized: str) -> ExecutionBackend:
    if normalized == "fake":
        from .fake import FakeBackend

        return FakeBackend()
    if normalized == "qarnot":
        from .qarnot import QarnotBackend

        return QarnotBackend()
    choices = ", ".join(available_backends())
    raise ValueError(f"Unknown backend: {normalized!r}. Choices: {choices}")


__all__ = ["BackendState", "ExecutionBackend", "available_backends", "get_backend"]
