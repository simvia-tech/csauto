"""The remote execution lifecycle, end to end, with no network.

What tests/integration/test_stub_adapter.py is for solvers.
"""

from __future__ import annotations

from pathlib import Path

from csauto.backend_sync import sync_backend_cases
from csauto.registry import STATUS_DONE, STATUS_RUNNING, load_registry
from csauto.runner import refresh_status, run_cases


def test_submit_observe_and_finish_on_the_fake_backend(monkeypatch, runs_dir: Path, case_factory) -> None:
    from csauto.backends.fake import FakeBackend

    case_factory(runs_dir, "case0001")
    backend = FakeBackend(
        script=["RUNNING", "RUNNING", "DONE"],
        stdout_lines=["iteration 1", "iteration 2"],
        sync_files={"OUT/run_0001/progress.csv": "it,res\n1,1e-2\n"},
        final_files={"OUT/run_0001/result.dat": "done\n"},
    )
    monkeypatch.setattr("csauto.backends.get_backend", lambda _name: backend)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    run_cases(
        runs_dir,
        nprocs=1,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        docker_image="image",
        resume_only_failed=False,
        source="test",
        backend="fake",
    )

    case_dir = runs_dir / "case0001"
    record = load_registry(runs_dir)["case0001"]
    assert record["status"] == STATUS_RUNNING
    assert record["task_id"].startswith("fake-")

    # refresh_status must not finalise a case the backend owns
    assert refresh_status(runs_dir)[0]["status"] == STATUS_RUNNING

    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)
    assert (case_dir / "OUT" / "run_0001" / "progress.csv").is_file()
    assert "iteration 1" in (case_dir / "csauto.stdout").read_text()
    assert load_registry(runs_dir)["case0001"]["status"] == STATUS_RUNNING

    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)
    sync_backend_cases(runs_dir, backend_factory=lambda _name: backend)

    record = load_registry(runs_dir)["case0001"]
    assert record["status"] == STATUS_DONE
    assert record["results_fetched"] is True
    assert (case_dir / "OUT" / "run_0001" / "result.dat").read_text() == "done\n"
    assert refresh_status(runs_dir)[0]["status"] == STATUS_DONE
