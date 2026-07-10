"""End-to-end tests driving the pipeline with the stub solver adapter.

These tests launch real subprocesses (python running the stub script) and
never create any code_saturne convention on disk (no setup.xml, no RESU).
"""

from __future__ import annotations

import sys
import time
from pathlib import Path

from csauto.registry import STATUS_DONE, STATUS_RUNNING, load_registry
from csauto.runner import refresh_status, run_cases
from csauto.solvers import get_solver_adapter


def _make_stub_case(runs_dir: Path, case_id: str) -> Path:
    case_dir = runs_dir / case_id
    case_dir.mkdir(parents=True)
    (case_dir / "stub.toml").write_text("steps = 3\n", encoding="utf-8")
    return case_dir


def _wait_for(predicate, timeout: float = 10.0) -> bool:
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        if predicate():
            return True
        time.sleep(0.05)
    return False


def test_run_cases_launches_stub_solver(runs_dir: Path) -> None:
    adapter = get_solver_adapter("stub")
    case_dir = _make_stub_case(runs_dir, "case0001")

    run_cases(
        runs_dir,
        nprocs=1,
        nt=3,
        max_parallel=1,
        case_filter=["case0001"],
        runtime="native",
        saturne_bin=sys.executable,
        resume_only_failed=False,
        source="test",
        adapter=adapter,
    )

    registry = load_registry(runs_dir)
    record = registry["case0001"]
    assert record["status"] == STATUS_RUNNING
    assert record["runtime"] == "native"
    assert record["pid"]

    stub_log = case_dir / "OUT" / "run_0001" / "stub.log"
    assert _wait_for(stub_log.is_file), "stub solver never wrote its log"
    assert _wait_for(lambda: "STUB CALCULATION COMPLETE" in stub_log.read_text(encoding="utf-8"))
    assert "step 3" in stub_log.read_text(encoding="utf-8")
    assert adapter.detect_outcome(case_dir) == STATUS_DONE
    assert adapter.read_progress(case_dir) == 3
    assert not (case_dir / "RESU").exists()

    def _status_done() -> bool:
        rows = refresh_status(runs_dir, adapter=adapter)
        return bool(rows) and rows[0]["status"] == STATUS_DONE

    assert _wait_for(_status_done), "refresh_status never reported the stub run as DONE"
    rows = refresh_status(runs_dir, adapter=adapter)
    assert rows[0]["last_iter"] == 3
    registry = load_registry(runs_dir)
    assert registry["case0001"]["status"] == STATUS_DONE


def test_generate_doctor_and_cleanup_with_stub_solver(tmp_path: Path) -> None:
    from csauto.doe import generate_cases
    from csauto.maintenance import cleanup_runs, run_doctor

    adapter = get_solver_adapter("stub")
    template_dir = tmp_path / "template"
    template_dir.mkdir()
    (template_dir / "stub.toml").write_text("velocity = {velocity}\n", encoding="utf-8")
    output_dir = tmp_path / "RUNS"

    generate_cases(
        ["case_id", "velocity"],
        [{"case_id": "case0001", "velocity": "1.5"}, {"case_id": "case0002", "velocity": "2.5"}],
        template_dir,
        output_dir,
        adapter=adapter,
    )

    assert (output_dir / "case0001" / "stub.toml").read_text(encoding="utf-8") == "velocity = 1.5\n"
    assert (output_dir / "case0002" / "stub.toml").read_text(encoding="utf-8") == "velocity = 2.5\n"
    assert not (output_dir / "MESH").exists()

    items = run_doctor(output_dir, check_display=False, adapter=adapter)
    messages = [item.message for item in items]
    assert "solver setup file present in every case" in messages
    assert not any(item.level == "fail" for item in items)

    run_dir = output_dir / "case0001" / "OUT" / "run_0001"
    run_dir.mkdir(parents=True)
    (run_dir / "stub.log").write_text("step 1\nSTUB CALCULATION COMPLETE\n", encoding="utf-8")
    report = cleanup_runs(output_dir, prune_resu=True, keep_last=0, adapter=adapter)
    assert report.resu_removed == 1
    assert not run_dir.exists()
