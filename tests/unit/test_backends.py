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


def test_fake_backend_walks_its_scripted_states(tmp_path) -> None:
    from csauto.backends.fake import FakeBackend

    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    backend = FakeBackend(script=["PENDING", "RUNNING", "DONE"])

    task_id = backend.submit(case_dir, ["run"], "image", 1, 1)
    assert backend.poll(task_id).status == "PENDING"
    assert backend.poll(task_id).status == "RUNNING"
    assert backend.poll(task_id).status == "DONE"
    assert backend.poll(task_id).status == "DONE"  # stays on the last state


def test_fake_backend_emits_output_deltas_once(tmp_path) -> None:
    from csauto.backends.fake import FakeBackend

    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    backend = FakeBackend(script=["RUNNING", "DONE"], stdout_lines=["step 1", "step 2"])

    task_id = backend.submit(case_dir, ["run"], "image", 1, 1)
    first = backend.poll(task_id)
    second = backend.poll(task_id)

    assert first.stdout_delta == "step 1\n"
    assert second.stdout_delta == "step 2\n"
    assert backend.poll(task_id).stdout_delta == ""


def test_fake_backend_sync_writes_observability_files(tmp_path) -> None:
    from csauto.backends.fake import FakeBackend

    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    backend = FakeBackend(script=["RUNNING"], sync_files={"OUT/run_0001/progress.csv": "it,res\n1,1e-2\n"})

    task_id = backend.submit(case_dir, ["run"], "image", 1, 1)
    backend.sync(task_id, case_dir)

    assert (case_dir / "OUT" / "run_0001" / "progress.csv").read_text() == "it,res\n1,1e-2\n"


def test_fake_backend_fetch_final_writes_the_result_marker(tmp_path) -> None:
    from csauto.backends.fake import FakeBackend

    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    backend = FakeBackend(script=["DONE"], final_files={"OUT/run_0001/result.dat": "done\n"})

    task_id = backend.submit(case_dir, ["run"], "image", 1, 1)
    backend.fetch_final(task_id, case_dir)

    assert (case_dir / "OUT" / "run_0001" / "result.dat").read_text() == "done\n"


def test_fake_backend_cancel_forces_the_failed_state(tmp_path) -> None:
    from csauto.backends.fake import FakeBackend

    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    backend = FakeBackend(script=["RUNNING", "RUNNING", "RUNNING"])

    task_id = backend.submit(case_dir, ["run"], "image", 1, 1)
    backend.cancel(task_id)

    assert backend.poll(task_id).status == "FAILED"


def test_fake_backend_can_be_told_to_fail_a_poll(tmp_path) -> None:
    """The sync pass must survive a transient failure; the fake can produce one."""
    from csauto.backends.fake import FakeBackend

    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    backend = FakeBackend(script=["RUNNING"], fail_polls=1)

    task_id = backend.submit(case_dir, ["run"], "image", 1, 1)
    with pytest.raises(RuntimeError, match="fake poll failure"):
        backend.poll(task_id)
    assert backend.poll(task_id).status == "RUNNING"


def test_a_backend_declares_what_a_user_may_choose() -> None:
    from pathlib import Path  # noqa: F401 - used by the sibling tests below

    from csauto.backends.base import LaunchOptions
    from csauto.backends.fake import FakeBackend

    catalogue = FakeBackend().launch_options()

    assert isinstance(catalogue, LaunchOptions)
    assert catalogue.degraded is False
    assert [option.key for option in catalogue.options] == ["speed"]


def test_a_declared_option_carries_its_choices_and_default() -> None:
    from csauto.backends.base import LaunchOption
    from csauto.backends.fake import FakeBackend

    option = FakeBackend().launch_options().options[0]

    assert isinstance(option, LaunchOption)
    assert option.default == "slow"
    assert dict(option.choices) == {"slow": "Slow", "fast": "Fast"}


def test_submit_receives_the_chosen_options(tmp_path) -> None:
    from csauto.backends.fake import FakeBackend

    backend = FakeBackend()

    backend.submit(tmp_path, ["run"], "img", 1, 1, (), {"speed": "fast"})

    assert backend.submitted_options == {"speed": "fast"}


def test_submit_without_options_receives_an_empty_mapping(tmp_path) -> None:
    """Every existing caller omits the argument; none of them may break."""
    from csauto.backends.fake import FakeBackend

    backend = FakeBackend()

    backend.submit(tmp_path, ["run"], "img", 1, 1)

    assert backend.submitted_options == {}
