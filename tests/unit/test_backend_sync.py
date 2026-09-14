from __future__ import annotations

from pathlib import Path

from csauto.backend_sync import sync_backend_cases
from csauto.backends.fake import FakeBackend
from csauto.registry import STATUS_DONE, STATUS_FAILED, STATUS_RUNNING, load_registry, save_registry


def _register(runs_dir: Path, case_dir: Path, task_id: str = "fake-0001") -> None:
    save_registry(
        runs_dir,
        {
            "case0001": {
                "case_id": "case0001",
                "path": str(case_dir),
                "status": STATUS_RUNNING,
                "backend": "fake",
                "task_id": task_id,
            }
        },
    )


def test_sync_appends_stdout_to_the_launcher_log(runs_dir: Path, case_factory) -> None:
    """csauto.stdout is what the Log Tail and Recent Errors already read."""
    case_dir = case_factory(runs_dir, "case0001")
    backend = FakeBackend(script=["RUNNING", "RUNNING"], stdout_lines=["step 1", "step 2"])
    task_id = backend.submit(case_dir, ["run"], "img", 1, 1)
    _register(runs_dir, case_dir, task_id)

    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)
    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)

    assert (case_dir / "csauto.stdout").read_text() == "step 1\nstep 2\n"


def test_sync_records_progress(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    backend = FakeBackend(script=["RUNNING", "RUNNING"])
    task_id = backend.submit(case_dir, ["run"], "img", 1, 1)
    _register(runs_dir, case_dir, task_id)

    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)

    assert load_registry(runs_dir)["case0001"]["backend_progress"] == 0.5


def test_a_failed_poll_leaves_the_status_untouched(runs_dir: Path, case_factory) -> None:
    """A flaky network must not mark cases as failed."""
    case_dir = case_factory(runs_dir, "case0001")
    backend = FakeBackend(script=["RUNNING"], fail_polls=1)
    task_id = backend.submit(case_dir, ["run"], "img", 1, 1)
    _register(runs_dir, case_dir, task_id)

    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)

    record = load_registry(runs_dir)["case0001"]
    assert record["status"] == STATUS_RUNNING
    assert record["backend_poll_failures"] == 1


def test_a_successful_poll_clears_the_failure_counter(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    backend = FakeBackend(script=["RUNNING"], fail_polls=1)
    task_id = backend.submit(case_dir, ["run"], "img", 1, 1)
    _register(runs_dir, case_dir, task_id)

    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)
    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)

    assert load_registry(runs_dir)["case0001"]["backend_poll_failures"] == 0


def test_done_only_after_the_results_are_local(runs_dir: Path, case_factory) -> None:
    """DONE means the results are on local disk; Compare and Clean assume it."""
    case_dir = case_factory(runs_dir, "case0001")
    backend = FakeBackend(
        script=["DONE"],
        final_files={"OUT/run_0001/result.dat": "done\n"},
        fail_fetch_final=1,
    )
    task_id = backend.submit(case_dir, ["run"], "img", 1, 1)
    _register(runs_dir, case_dir, task_id)

    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)
    assert load_registry(runs_dir)["case0001"]["status"] == STATUS_RUNNING
    assert not (case_dir / "OUT" / "run_0001" / "result.dat").exists()

    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)
    record = load_registry(runs_dir)["case0001"]
    assert record["status"] == STATUS_DONE
    assert record["results_fetched"] is True
    assert (case_dir / "OUT" / "run_0001" / "result.dat").read_text() == "done\n"


def test_a_failed_remote_task_is_reported_failed(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    backend = FakeBackend(script=["FAILED"])
    task_id = backend.submit(case_dir, ["run"], "img", 1, 1)
    _register(runs_dir, case_dir, task_id)

    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)

    assert load_registry(runs_dir)["case0001"]["status"] == STATUS_FAILED


def test_finished_cases_are_skipped(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    backend = FakeBackend(script=["DONE"])
    task_id = backend.submit(case_dir, ["run"], "img", 1, 1)
    save_registry(
        runs_dir,
        {
            "case0001": {
                "case_id": "case0001",
                "path": str(case_dir),
                "status": STATUS_DONE,
                "backend": "fake",
                "task_id": task_id,
                "results_fetched": True,
            }
        },
    )

    assert sync_backend_cases(runs_dir, backend_factory=lambda _name: backend) == 0


def test_cases_without_a_backend_are_ignored(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    save_registry(
        runs_dir,
        {"case0001": {"case_id": "case0001", "path": str(case_dir), "status": STATUS_RUNNING, "pid": 1}},
    )

    assert sync_backend_cases(runs_dir) == 0


def test_a_relaunched_case_is_not_overwritten(runs_dir: Path, case_factory) -> None:
    """Phase 3 must skip a case whose task id changed while the network call ran."""
    case_dir = case_factory(runs_dir, "case0001")
    backend = FakeBackend(script=["DONE"], final_files={"OUT/x": "y\n"})
    task_id = backend.submit(case_dir, ["run"], "img", 1, 1)
    _register(runs_dir, case_dir, task_id)

    def relaunch_then_poll(_name: str):
        save_registry(
            runs_dir,
            {
                "case0001": {
                    "case_id": "case0001",
                    "path": str(case_dir),
                    "status": STATUS_RUNNING,
                    "backend": "fake",
                    "task_id": "fake-9999",
                }
            },
        )
        return backend

    sync_backend_cases(runs_dir, backend_factory=relaunch_then_poll)

    record = load_registry(runs_dir)["case0001"]
    assert record["task_id"] == "fake-9999"
    assert record["status"] == STATUS_RUNNING


def test_sync_records_the_timing_figures(runs_dir: Path, case_factory) -> None:
    """execution_time and running_core_count come free from the backend."""
    from csauto.backends.base import BackendState

    case_dir = case_factory(runs_dir, "case0001")
    backend = FakeBackend(script=["RUNNING"])
    task_id = backend.submit(case_dir, ["run"], "img", 1, 1)
    _register(runs_dir, case_dir, task_id)
    backend.poll = lambda _task_id: BackendState(  # type: ignore[method-assign]
        status=STATUS_RUNNING, execution_time_s=42.0, running_core_count=8
    )

    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)

    record = load_registry(runs_dir)["case0001"]
    assert record["backend_execution_time_s"] == 42.0
    assert record["backend_core_count"] == 8
