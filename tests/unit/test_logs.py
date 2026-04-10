from __future__ import annotations

import os
import time
from datetime import datetime
from pathlib import Path

from csauto.logs import detect_run_outcome, highlight_anomaly_line
from csauto.registry import STATUS_DONE, STATUS_FAILED


def test_highlight_anomaly_ignores_no_error() -> None:
    assert highlight_anomaly_line("No error detected") is None


def test_highlight_anomaly_warn() -> None:
    result = highlight_anomaly_line("Warning: clipping")
    assert result is not None
    html, severity = result
    assert severity == "warn"
    assert "err-hit" in html


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
