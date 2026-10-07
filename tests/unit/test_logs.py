from __future__ import annotations

import os
import time
from datetime import datetime
from pathlib import Path

from csauto.logs import GENERIC_ANOMALY_PATTERNS, highlight_anomaly_line
from csauto.registry import STATUS_DONE, STATUS_FAILED
from csauto.solvers import get_solver_adapter

CODE_SATURNE = get_solver_adapter("code_saturne")
CS_PATTERNS = (*GENERIC_ANOMALY_PATTERNS, *CODE_SATURNE.anomaly_patterns)


def detect_run_outcome(case_dir: Path, start_time: str | None = None) -> str | None:
    return CODE_SATURNE.detect_outcome(case_dir, start_time)


def test_highlight_anomaly_ignores_no_error() -> None:
    assert highlight_anomaly_line("No error detected", CS_PATTERNS, CODE_SATURNE.anomaly_ignore_patterns) is None
    assert highlight_anomaly_line("No error detected") is not None


def test_highlight_anomaly_warn() -> None:
    result = highlight_anomaly_line("Warning: clipping")
    assert result is not None
    html, severity = result
    assert severity == "warn"
    assert "err-hit" in html


def test_cfd_warnings_come_from_the_adapter() -> None:
    assert highlight_anomaly_line("clipping of k") is None
    result = highlight_anomaly_line("clipping of k", CS_PATTERNS)
    assert result is not None
    assert result[1] == "warn"


def test_detect_run_outcome_done(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    (case_dir / "run_solver.log").write_text("END OF CALCULATION\n", encoding="utf-8")
    assert detect_run_outcome(case_dir) == STATUS_DONE


def test_detect_run_outcome_failed(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0002"
    case_dir.mkdir()
    (case_dir / "run_solver.log").write_text("FATAL ERROR\n", encoding="utf-8")
    assert detect_run_outcome(case_dir) == STATUS_FAILED


def test_detect_run_outcome_respects_start_time(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0003"
    case_dir.mkdir()
    log_path = case_dir / "run_solver.log"
    log_path.write_text("END OF CALCULATION\n", encoding="utf-8")
    start_time = datetime.now().isoformat(timespec="seconds")
    past = time.time() - 3600
    os.utime(log_path, (past, past))
    assert detect_run_outcome(case_dir, start_time) is None


def test_collect_recent_errors_deduplicates_aliased_files(tmp_path) -> None:
    """Adapters may alias several conventional names onto one file; the file
    must still only be scanned once."""
    from csauto.logs import collect_recent_errors
    from csauto.solvers import get_solver_adapter

    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    case_dir.mkdir(parents=True)
    log = case_dir / "csauto.stdout"
    log.write_text("Error: something exploded\n", encoding="utf-8")

    class AliasingAdapter:
        anomaly_file_names = ("run_solver.log", "listing")

        def locate_case_file(self, case_dir, name):
            return log

    base_adapter = get_solver_adapter(None)
    adapter = AliasingAdapter()
    for attr in dir(base_adapter):
        if not attr.startswith("_") and not hasattr(adapter, attr):
            setattr(adapter, attr, getattr(base_adapter, attr))

    items = collect_recent_errors(runs_dir, ["case0001"], adapter=adapter)

    assert len(items) == 1


def test_tail_prints_the_requested_number_of_lines(tmp_path: Path, capsys) -> None:
    from csauto.logs import tail_log
    from csauto.solvers import get_solver_adapter

    case_dir = tmp_path / "RUNS" / "case0001"
    case_dir.mkdir(parents=True)
    (case_dir / "csauto.stdout").write_text("".join(f"line {i:04d} {'x' * 70}\n" for i in range(500)), encoding="utf-8")
    tail_log(
        tmp_path / "RUNS", "case0001", "csauto.stdout", lines=200, follow=False, adapter=get_solver_adapter("stub")
    )
    printed = capsys.readouterr().out.splitlines()[1:]
    assert len(printed) == 200
    assert printed[0].startswith("line 0300") and printed[-1].startswith("line 0499")


def test_tail_files_come_from_the_current_run_only(tmp_path: Path) -> None:
    from csauto.logs import list_tail_files

    adapter = get_solver_adapter("code_saturne")
    case_dir = tmp_path / "case0001"
    old_run = case_dir / "RESU" / "20260101-1000"
    old_run.mkdir(parents=True)
    for name in ("run_solver.log", "summary", "performance.log"):
        (old_run / name).write_text("done\n", encoding="utf-8")
    (case_dir / "csauto.stdout").write_text("", encoding="utf-8")
    assert list_tail_files(case_dir, adapter)[0] == "run_solver.log"

    new_run = case_dir / "RESU" / "20260101-1100"  # staging, no solver log yet
    new_run.mkdir()
    (new_run / "preprocessor.log").write_text("", encoding="utf-8")
    os.utime(old_run, (time.time() - 60, time.time() - 60))

    files = list_tail_files(case_dir, adapter)
    assert "run_solver.log" not in files and "summary" not in files
    assert "RESU/20260101-1100/preprocessor.log" in files
