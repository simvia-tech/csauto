from __future__ import annotations

import os
import time
from pathlib import Path

from csauto.registry import save_registry
from csauto.residuals import collect_residuals, read_residual_rows


def test_residuals_fallback_from_log(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    case_dir.mkdir(parents=True, exist_ok=True)
    log_text = (
        "Variable     Rhs norm\n"
        "----------------------\n"
        " 1 Velocity 1.0e-3\n"
        " 2 Pressure 2.0e-4\n"
        "\n"
        "Variable     Rhs norm\n"
        "----------------------\n"
        " 1 Velocity 5.0e-4\n"
        "\n"
    )
    (case_dir / "run_solver.log").write_text(log_text, encoding="utf-8")

    header, records = read_residual_rows(runs_dir, ["case0001"], allow_empty=True)
    assert records
    assert "velocity" in header


def test_residuals_running_case_merges_log_newer_iterations(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    resu_dir = case_dir / "RESU" / "001"
    resu_dir.mkdir(parents=True, exist_ok=True)
    (resu_dir / "residuals.csv").write_text(
        "iteration,velocity\n1,1.0e-3\n2,5.0e-4\n",
        encoding="utf-8",
    )
    log_text = (
        "Variable     Rhs norm\n"
        "----------------------\n"
        " 1 Velocity 1.0e-3\n"
        "\n"
        "Variable     Rhs norm\n"
        "----------------------\n"
        " 1 Velocity 8.0e-4\n"
        "\n"
        "Variable     Rhs norm\n"
        "----------------------\n"
        " 1 Velocity 4.0e-4\n"
        "\n"
        "Variable     Rhs norm\n"
        "----------------------\n"
        " 1 Velocity 2.0e-4\n"
        "\n"
    )
    (case_dir / "run_solver.log").write_text(log_text, encoding="utf-8")
    save_registry(
        runs_dir,
        {
            "case0001": {
                "case_id": "case0001",
                "path": str(case_dir),
                "status": "RUNNING",
            }
        },
    )

    _header, records = read_residual_rows(runs_dir, ["case0001"], allow_empty=True)
    case_records = [row for row in records if row.get("case_id") == "case0001"]
    iterations = sorted(int(float(row.get("iteration", "0"))) for row in case_records)
    assert len(case_records) >= 4
    assert iterations[-1] >= 4


def test_residuals_include_history_reads_all_resu_runs(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    resu1 = case_dir / "RESU" / "001"
    resu2 = case_dir / "RESU" / "002"
    resu1.mkdir(parents=True, exist_ok=True)
    resu2.mkdir(parents=True, exist_ok=True)
    (resu1 / "residuals.csv").write_text(
        "iteration,velocity\n1,1.0e-3\n2,8.0e-4\n",
        encoding="utf-8",
    )
    (resu2 / "residuals.csv").write_text(
        "iteration,velocity\n3,5.0e-4\n4,3.0e-4\n",
        encoding="utf-8",
    )
    now = time.time()
    os.utime(resu1, (now - 120, now - 120))
    os.utime(resu2, (now, now))

    _header_latest, latest_records = read_residual_rows(
        runs_dir,
        ["case0001"],
        allow_empty=True,
        include_history=False,
    )
    latest_iters = [int(float(row["iteration"])) for row in latest_records]
    assert latest_iters == [3, 4]

    _header_all, all_records = read_residual_rows(
        runs_dir,
        ["case0001"],
        allow_empty=True,
        include_history=True,
    )
    all_iters = [int(float(row["iteration"])) for row in all_records]
    assert all_iters == [1, 2, 3, 4]


def test_residuals_csv_rereads_updated_file_on_next_request(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    residual_path = runs_dir / "case0001" / "RESU" / "001" / "residuals.csv"
    residual_path.parent.mkdir(parents=True, exist_ok=True)
    residual_path.write_text(
        "iteration,velocity\n1,1.0e-3\n2,5.0e-4\n",
        encoding="utf-8",
    )

    _header, initial_records = read_residual_rows(runs_dir, ["case0001"], allow_empty=True)
    initial_iters = [int(float(row["iteration"])) for row in initial_records]
    assert initial_iters == [1, 2]

    residual_path.write_text(
        "iteration,velocity\n1,1.0e-3\n2,5.0e-4\n3,2.0e-4\n",
        encoding="utf-8",
    )

    _header, appended_records = read_residual_rows(runs_dir, ["case0001"], allow_empty=True)
    appended_iters = [int(float(row["iteration"])) for row in appended_records]

    assert appended_iters == [1, 2, 3]


def test_collect_residuals_writes_merged_csv(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    residual_path = runs_dir / "case0001" / "RESU" / "001" / "residuals.csv"
    residual_path.parent.mkdir(parents=True, exist_ok=True)
    residual_path.write_text(
        "iteration,velocity\n1,1.0e-3\n2,5.0e-4\n",
        encoding="utf-8",
    )
    output_path = tmp_path / "merged.csv"

    collect_residuals(runs_dir, ["case0001"], output_path)

    assert output_path.read_text(encoding="utf-8") == (
        "case_id,iteration,velocity\ncase0001,1,1.0e-3\ncase0001,2,5.0e-4\n"
    )
