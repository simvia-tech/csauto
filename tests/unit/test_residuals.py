"""Residual parsing, independent of where a run happened."""

from __future__ import annotations

from pathlib import Path


def test_live_residual_rows_carry_the_real_time_step(tmp_path: Path) -> None:
    """The abscissa is the solver's time step, not a count of printed blocks.

    code_saturne prints convergence at its listing frequency, so the Nth block
    is almost never iteration N; plotting the block index squashes the curve
    onto a wrong, far too short axis.
    """
    from csauto.residuals import parse_residuals_from_log

    log = tmp_path / "run_solver.log"
    log.write_text(
        "\n".join(
            [
                " INSTANT       10.000000000    TIME STEP NUMBER            1000",
                "  ** Information on convergence",
                "------------------------------------------------------------",
                "   Variable      Rhs norm      N_iter  Norm. residual   Drift",
                "   Velocity    3.9e+02          5      1.0e-03          1.0",
                "",
                " INSTANT       15.000000000    TIME STEP NUMBER            1500",
                "  ** Information on convergence",
                "------------------------------------------------------------",
                "   Variable      Rhs norm      N_iter  Norm. residual   Drift",
                "   Velocity    2.1e+02          4      5.0e-04          0.5",
                "",
            ]
        ),
        encoding="utf-8",
    )

    _fields, rows = parse_residuals_from_log(log)

    assert [row["iteration"] for row in rows] == ["1000", "1500"]


def test_live_residual_rows_fall_back_to_a_block_count(tmp_path: Path) -> None:
    """A log without the time step markers still plots, on the old axis."""
    from csauto.residuals import parse_residuals_from_log

    log = tmp_path / "run_solver.log"
    log.write_text(
        "\n".join(
            [
                "   Variable      Rhs norm      N_iter  Norm. residual   Drift",
                "   Velocity    3.9e+02          5      1.0e-03          1.0",
                "",
                "   Variable      Rhs norm      N_iter  Norm. residual   Drift",
                "   Velocity    2.1e+02          4      5.0e-04          0.5",
                "",
            ]
        ),
        encoding="utf-8",
    )

    _fields, rows = parse_residuals_from_log(log)

    assert [row["iteration"] for row in rows] == ["1", "2"]
