from __future__ import annotations

import dataclasses

import pytest

from csauto.backends import available_backends, get_backend
from csauto.backends.base import BackendState, ExecutionBackend


def test_backend_state_is_frozen_and_carries_csauto_vocabulary() -> None:
    state = BackendState(status="RUNNING", progress=0.42, stdout_delta="x", stderr_delta="")
    assert state.status == "RUNNING"
    assert state.progress == 0.42
    with pytest.raises(dataclasses.FrozenInstanceError):
        state.status = "DONE"  # type: ignore[misc]


def test_get_backend_is_memoized_and_normalizes_the_name() -> None:
    assert get_backend("fake") is get_backend("  Fake ")


def test_unknown_backend_raises_with_the_choices() -> None:
    with pytest.raises(ValueError, match="Unknown backend"):
        get_backend("nope")


def test_available_backends_lists_fake() -> None:
    assert "fake" in available_backends()


def test_fake_backend_satisfies_the_protocol() -> None:
    assert isinstance(get_backend("fake"), ExecutionBackend)
