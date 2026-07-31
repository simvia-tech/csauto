"""End-to-end tests driving the pipeline with the code_aster solver adapter.

These tests launch real subprocesses (python running the stub script) and
never create any code_aster convention on disk (no setup.xml, no RESU).
"""

from __future__ import annotations

import sys
import time
from pathlib import Path

from csauto.registry import STATUS_DONE, STATUS_RUNNING, load_registry
from csauto.runner import refresh_status, run_cases
from csauto.solvers import get_solver_adapter


def _make_code_aster_case(runs_dir: Path, case_id: str) -> Path:
    case_dir = runs_dir / case_id
    case_dir.mkdir(parents=True)
    mesh_dir = case_dir / "MESH"
    mesh_dir.mkdir(parents=True)
    (case_dir / "study.export").write_text(
        "P time_limit 300\n"
        "P memory_limit 1024\n"
        "F comm study.comm D 1\n"
        "F mmed MESH/mesh.med D 20\n",
        encoding="utf-8")
    (case_dir / "study.comm").write_text(
        "DEBUT()\n"
        "FIN()\n",
        encoding="utf-8")
    (mesh_dir / "mesh.med").write_text("x\n", encoding="utf-8")
    return case_dir


def _wait_for(predicate, timeout: float = 10.0) -> bool:
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        if predicate():
            return True
        time.sleep(0.05)
    return False


def test_run_cases_launches_code_aster_solver(runs_dir: Path) -> None:
    adapter = get_solver_adapter("code_aster")
    case_dir = _make_code_aster_case(runs_dir, "case0001")

    run_cases(
        runs_dir,
        nprocs=1,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        runtime="docker",
        saturne_bin=sys.executable,
        resume_only_failed=False,
        source="test",
        adapter=adapter,
    )

    registry = load_registry(runs_dir)
    record = registry["case0001"]
    assert record["status"] == STATUS_RUNNING
    assert record["runtime"] == "docker"
    assert record["pid"]

    codeaster_log = case_dir / "RESU" / "LOGS" / "run_solver.log"
    assert _wait_for(codeaster_log.is_file), "code_aster solver never wrote its log"
    assert _wait_for(lambda: "DIAGNOSTIC JOB" in codeaster_log.read_text(encoding="utf-8"))
    assert "code_aster" in codeaster_log.read_text(encoding="utf-8")
    assert adapter.detect_outcome(case_dir) == STATUS_DONE
    assert (case_dir / "RESU").exists()

    def _status_done() -> bool:
        rows = refresh_status(runs_dir, adapter=adapter)
        return bool(rows) and rows[0]["status"] == STATUS_DONE

    assert _wait_for(_status_done), "refresh_status never reported the code_aster run as DONE"
    registry = load_registry(runs_dir)
    assert registry["case0001"]["status"] == STATUS_DONE


def test_generate_doctor_and_cleanup_with_code_aster_solver(tmp_path: Path) -> None:
    from csauto.doe import generate_cases
    from csauto.maintenance import cleanup_runs, run_doctor

    adapter = get_solver_adapter("code_aster")
    template_dir = tmp_path / "template"
    template_dir.mkdir()
    mesh_dir = tmp_path / "MESH"
    mesh_dir.mkdir(parents=True)
    resu_dir = tmp_path / "RESU"
    resu_dir.mkdir(parents=True)
    (template_dir / "study.export").write_text(
        "P time_limit 300\n"
        "P memory_limit 1024\n"
        "F comm study.comm D 1\n"
        "F mmed MESH/mesh.med D 20\n",
        encoding="utf-8")
    (template_dir / "study.comm").write_text(
        "DEBUT()\n"
        "E = {young}\n"
        "FIN()\n",
        encoding="utf-8")
    (mesh_dir / "mesh.med").write_text("x\n", encoding="utf-8")
    output_dir = tmp_path / "RUNS"

    generate_cases(
        ["case_id", "young"],
        [{"case_id": "case0001", "young": "1.5"}, {"case_id": "case0002", "young": "2.5"}],
        template_dir,
        output_dir,
        adapter=adapter,
    )

    assert "E = 1.5" in (output_dir / "case0001" / "study.comm").read_text(encoding="utf-8")
    assert "E = 2.5" in (output_dir / "case0002" / "study.comm").read_text(encoding="utf-8")
    assert (output_dir / "MESH").exists()

    items = run_doctor(output_dir, check_display=False, adapter=adapter)
    messages = [item.message for item in items]
    assert "solver setup file present in every case" in messages
    assert not any(item.level == "fail" for item in items)

    run_dir = output_dir / "case0001" / "RESU" / "LOGS"
    run_dir.mkdir(parents=True)
    (run_dir / "run_solver.log").write_text("code_aster\nDIAGNOSTIC JOB : OK\n", encoding="utf-8")
    report = cleanup_runs(output_dir, prune_resu=True, keep_last=0, adapter=adapter)
    assert report.resu_removed == 1
    assert not run_dir.exists()
