from __future__ import annotations

import csv
from pathlib import Path

from csauto.logs import collect_performance, parse_performance_log, read_performance_rows


def _write_performance_log(case_dir: Path, content: str) -> None:
    resu_dir = case_dir / "RESU" / "001"
    resu_dir.mkdir(parents=True, exist_ok=True)
    (resu_dir / "performance.log").write_text(content, encoding="utf-8")


def test_parse_performance_log_extracts_time_breakdown(tmp_path: Path) -> None:
    path = tmp_path / "performance.log"
    path.write_text(
        "\n".join(
            [
                "Elapsed time: 123.4 s",
                "mpi ranks: 64",
                "openmp threads: 2",
                "Total elapsed time for all gradient computations: 8.6 s",
                "Total elapsed time for linear equation system solvers: 72.1 s",
                "Total elapsed time for balances: 3.9 s",
                "code_saturne IO files read:",
                "  mesh_input.csm",
                "    global:      0.00159 s, 2.0 KiB",
                "    local:       0.00151 s, 900.0 KiB",
                "    open:        0.00279 s, 2 open(s)",
                "",
                "code_saturne IO files written:",
                "  checkpoint/main.csc",
                "    global:      0.01163 s, 20.0 KiB",
                "    local:       0.03694 s, 16.0 MiB",
                "    open:        0.05234 s, 4 open(s)",
                "--------------------------------------------------------------------------------",
            ]
        ),
        encoding="utf-8",
    )

    metrics = parse_performance_log(path)

    assert metrics["elapsed_time"] == "123.4"
    assert metrics["mpi_ranks"] == "64"
    assert metrics["threads"] == "2"
    assert metrics["io_time"] == "0.1068"
    assert metrics["linear_solver_time"] == "72.1"
    assert metrics["gradients_time"] == "8.6"
    assert metrics["balances_time"] == "3.9"


def test_collect_performance_csv_includes_time_breakdown_columns(
    runs_dir: Path,
    case_factory,
) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    _write_performance_log(
        case_dir,
        "\n".join(
            [
                "elapsed time: 55.0",
                "mpi ranks: 8",
                "threads: 2",
                "I/O time: 5.0",
                "linear solver time: 40.0",
                "gradients time: 6.0",
                "balances time: 4.0",
            ]
        ),
    )

    rows = read_performance_rows(runs_dir, ["case0001"])
    assert len(rows) == 1
    assert rows[0]["io_time"] == "5.0"
    assert rows[0]["linear_solver_time"] == "40.0"
    assert rows[0]["gradients_time"] == "6.0"
    assert rows[0]["balances_time"] == "4.0"

    output = runs_dir / "performance.csv"
    collect_performance(runs_dir, ["case0001"], output)

    with output.open("r", encoding="utf-8", newline="") as handle:
        reader = csv.DictReader(handle)
        assert reader.fieldnames == [
            "case_id",
            "elapsed_time",
            "mpi_ranks",
            "threads",
            "io_time",
            "linear_solver_time",
            "gradients_time",
            "balances_time",
        ]
        row = next(reader)
        assert row["case_id"] == "case0001"
        assert row["io_time"] == "5.0"
        assert row["linear_solver_time"] == "40.0"
        assert row["gradients_time"] == "6.0"
        assert row["balances_time"] == "4.0"
