from __future__ import annotations

import json
import time
from pathlib import Path

import pytest

from csauto.control import control_case
from csauto.registry import save_registry
from csauto.solvers.code_saturne import CodeSaturneAdapter

CS_ADAPTER = CodeSaturneAdapter()
configured_max_time_step = CS_ADAPTER.configured_max_time_step
current_iteration = CS_ADAPTER.current_iteration
write_control_directive = CS_ADAPTER.write_control_directive


def _resu_dir(case_dir: Path, run_id: str = "20260101-0000") -> Path:
    resu_dir = case_dir / "RESU" / run_id
    resu_dir.mkdir(parents=True, exist_ok=True)
    return resu_dir


def test_write_control_directive_appends_to_control_file(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    resu_dir = _resu_dir(case_dir)

    path1 = write_control_directive(case_dir, "flush")
    path2 = write_control_directive(case_dir, "max_time_step 0")

    assert path1 == path2 == resu_dir / "control_file"
    assert path1.read_text(encoding="utf-8") == "flush\nmax_time_step 0\n"


def test_write_control_directive_uses_latest_resu_dir(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    _resu_dir(case_dir, "20260101-0000")
    time.sleep(0.01)
    latest = _resu_dir(case_dir, "20260101-0100")

    path = write_control_directive(case_dir, "flush")
    assert path.parent == latest


def test_write_control_directive_no_resu_dir_raises(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    with pytest.raises(FileNotFoundError):
        write_control_directive(case_dir, "flush")


def test_current_iteration_reads_latest_log(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    resu_dir = _resu_dir(case_dir)
    (resu_dir / "run_solver.log").write_text("Time step 42\nsome other line\n", encoding="utf-8")

    assert current_iteration(case_dir) == 42


def test_current_iteration_returns_none_without_log(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    _resu_dir(case_dir)
    assert current_iteration(case_dir) is None


def test_configured_max_time_step_reads_setup_log(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    resu_dir = _resu_dir(case_dir)
    (resu_dir / "setup.log").write_text("    Stop time\n\n      nt_max:  500 (final time step)\n\n", encoding="utf-8")

    assert configured_max_time_step(case_dir) == 500


def test_configured_max_time_step_prefers_latest_control_echo(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    resu_dir = _resu_dir(case_dir)
    (resu_dir / "setup.log").write_text("    Stop time\n\n      nt_max:  500 (final time step)\n\n", encoding="utf-8")
    # A previous extend already raised it to 1000, echoed by code_saturne in run_solver.log
    # when it processed that control_file -- must win over the original setup.log value.
    (resu_dir / "run_solver.log").write_text(
        "  max_time_step                        1000 (current:          9)\n", encoding="utf-8"
    )

    assert configured_max_time_step(case_dir) == 1000


def test_configured_max_time_step_returns_none_without_logs(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    _resu_dir(case_dir)
    assert configured_max_time_step(case_dir) is None


def test_control_case_stop_writes_max_time_step_zero(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    resu_dir = _resu_dir(case_dir)
    save_registry(runs_dir, {"case0001": {"case_id": "case0001", "path": str(case_dir), "status": "RUNNING"}})

    details = control_case(runs_dir, "case0001", "stop")

    assert details == {"action": "stop"}
    assert (resu_dir / "control_file").read_text(encoding="utf-8") == "max_time_step 0\n"


def test_control_case_checkpoint_writes_checkpoint_time_step_zero(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    resu_dir = _resu_dir(case_dir)
    save_registry(runs_dir, {"case0001": {"case_id": "case0001", "path": str(case_dir), "status": "RUNNING"}})

    control_case(runs_dir, "case0001", "checkpoint")

    assert (resu_dir / "control_file").read_text(encoding="utf-8") == "checkpoint_time_step 0\n"


def test_control_case_flush_writes_bare_flush(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    resu_dir = _resu_dir(case_dir)
    save_registry(runs_dir, {"case0001": {"case_id": "case0001", "path": str(case_dir), "status": "RUNNING"}})

    control_case(runs_dir, "case0001", "flush")

    assert (resu_dir / "control_file").read_text(encoding="utf-8") == "flush\n"


def test_control_case_extend_computes_target_from_configured_max(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    resu_dir = _resu_dir(case_dir)
    # Case is only 9/500 steps in -- extend must add to the *configured* limit (500),
    # not to how far the run has actually progressed (9), or a repeat "extend by 500"
    # done early in a run would barely extend it at all.
    (resu_dir / "run_solver.log").write_text("Time step 9\n", encoding="utf-8")
    (resu_dir / "setup.log").write_text("    Stop time\n\n      nt_max:  500 (final time step)\n\n", encoding="utf-8")
    save_registry(runs_dir, {"case0001": {"case_id": "case0001", "path": str(case_dir), "status": "RUNNING"}})

    details = control_case(runs_dir, "case0001", "extend", value=500)

    assert details == {
        "action": "extend",
        "increment": 500,
        "previous_max_time_step": 500,
        "target_time_step": 1000,
    }
    assert (resu_dir / "control_file").read_text(encoding="utf-8") == "max_time_step 1000\n"


def test_control_case_extend_falls_back_to_current_iteration_without_setup_log(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    resu_dir = _resu_dir(case_dir)
    (resu_dir / "run_solver.log").write_text("Time step 100\n", encoding="utf-8")
    save_registry(runs_dir, {"case0001": {"case_id": "case0001", "path": str(case_dir), "status": "RUNNING"}})

    details = control_case(runs_dir, "case0001", "extend", value=500)

    assert details == {
        "action": "extend",
        "increment": 500,
        "previous_max_time_step": 100,
        "target_time_step": 600,
    }
    assert (resu_dir / "control_file").read_text(encoding="utf-8") == "max_time_step 600\n"


def test_control_case_extend_requires_positive_value(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    _resu_dir(case_dir)
    save_registry(runs_dir, {"case0001": {"case_id": "case0001", "path": str(case_dir), "status": "RUNNING"}})

    with pytest.raises(ValueError):
        control_case(runs_dir, "case0001", "extend", value=0)
    with pytest.raises(ValueError):
        control_case(runs_dir, "case0001", "extend")


def test_control_case_extend_without_determinable_iteration_assumes_zero(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    resu_dir = _resu_dir(case_dir)
    save_registry(runs_dir, {"case0001": {"case_id": "case0001", "path": str(case_dir), "status": "RUNNING"}})

    details = control_case(runs_dir, "case0001", "extend", value=10)

    assert details == {
        "action": "extend",
        "increment": 10,
        "previous_max_time_step": 0,
        "target_time_step": 10,
    }
    assert (resu_dir / "control_file").read_text(encoding="utf-8") == "max_time_step 10\n"


def test_control_case_rejects_unknown_case(runs_dir: Path, case_factory) -> None:
    case_factory(runs_dir, "case0001")
    save_registry(runs_dir, {"case0001": {"case_id": "case0001", "path": "case0001", "status": "RUNNING"}})

    with pytest.raises(FileNotFoundError):
        control_case(runs_dir, "case9999", "stop")


def test_control_case_rejects_non_running_case(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    _resu_dir(case_dir)
    save_registry(runs_dir, {"case0001": {"case_id": "case0001", "path": str(case_dir), "status": "DONE"}})

    with pytest.raises(ValueError):
        control_case(runs_dir, "case0001", "stop")


def test_control_case_rejects_invalid_action(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    _resu_dir(case_dir)
    save_registry(runs_dir, {"case0001": {"case_id": "case0001", "path": str(case_dir), "status": "RUNNING"}})

    with pytest.raises(ValueError):
        control_case(runs_dir, "case0001", "explode")


def test_control_case_logs_history(runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    _resu_dir(case_dir)
    save_registry(runs_dir, {"case0001": {"case_id": "case0001", "path": str(case_dir), "status": "RUNNING"}})

    control_case(runs_dir, "case0001", "stop", source="cli")

    history_path = case_dir / ".csauto.history.jsonl"
    assert history_path.is_file()
    entry = json.loads(history_path.read_text(encoding="utf-8").splitlines()[-1])
    assert entry["action"] == "control_stop"
    assert entry["source"] == "cli"
