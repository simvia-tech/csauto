from __future__ import annotations

import os
import time
from pathlib import Path

from csauto.probes import read_probe_rows, render_probe_svg
from csauto.registry import save_registry
from csauto.residuals import read_residual_rows, render_residuals_svg


def _make_case_with_residuals(runs_dir: Path, case_id: str = "case0001") -> Path:
    case_dir = runs_dir / case_id
    resu_dir = case_dir / "RESU" / "001"
    resu_dir.mkdir(parents=True, exist_ok=True)
    residuals = resu_dir / "residuals.csv"
    residuals.write_text("iteration,velocity\n1,1e-2\n2,1e-3\n", encoding="utf-8")
    return case_dir


def _make_case_with_probe(runs_dir: Path, case_id: str = "case0001") -> Path:
    case_dir = runs_dir / case_id
    probe_dir = case_dir / "RESU" / "001" / "monitoring"
    probe_dir.mkdir(parents=True, exist_ok=True)
    probe_file = probe_dir / "probe_density.csv"
    probe_file.write_text("time,value\n0.0,1.0\n1.0,2.0\n", encoding="utf-8")
    return case_dir


def test_render_residuals_svg_invariants(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    _make_case_with_residuals(runs_dir)
    svg = render_residuals_svg(runs_dir, ["case0001"], ["velocity"])
    assert svg.lstrip().startswith("<svg")
    assert 'width="900"' in svg
    assert "case0001" in svg


def test_render_residuals_svg_placeholder(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    (runs_dir / "case0001").mkdir()
    svg = render_residuals_svg(runs_dir, ["case0001"], ["velocity"])
    assert svg.lstrip().startswith("<svg")
    assert "No" in svg


def test_render_residuals_svg_x_from_filters_iterations(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    _make_case_with_residuals(runs_dir)
    svg = render_residuals_svg(runs_dir, ["case0001"], ["velocity"], x_from=3)
    assert svg.lstrip().startswith("<svg")
    assert "No" in svg


def test_render_probe_svg_invariants(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    _make_case_with_probe(runs_dir)
    svg = render_probe_svg(runs_dir, ["case0001"], "probe_density.csv", ["value"], axis="time")
    assert svg.lstrip().startswith("<svg")
    assert 'width="900"' in svg
    assert "case0001" in svg
    assert "density" in svg.lower()


def test_render_probe_svg_placeholder(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    (runs_dir / "case0001").mkdir()
    svg = render_probe_svg(runs_dir, ["case0001"], "probe_density.csv", ["value"], axis="time")
    assert svg.lstrip().startswith("<svg")
    assert "No" in svg


def test_render_probe_svg_x_from_filters_time(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    _make_case_with_probe(runs_dir)
    svg = render_probe_svg(runs_dir, ["case0001"], "probe_density.csv", ["value"], axis="time", x_from=3.0)
    assert svg.lstrip().startswith("<svg")
    assert "No" in svg


def test_read_probe_rows_include_history_reads_all_resu_runs(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    probe1 = case_dir / "RESU" / "001" / "monitoring"
    probe2 = case_dir / "RESU" / "002" / "monitoring"
    probe1.mkdir(parents=True, exist_ok=True)
    probe2.mkdir(parents=True, exist_ok=True)
    (probe1 / "probe_density.csv").write_text("time,value\n0.0,1.0\n1.0,2.0\n", encoding="utf-8")
    (probe2 / "probe_density.csv").write_text("time,value\n2.0,3.0\n3.0,4.0\n", encoding="utf-8")
    now = time.time()
    os.utime(case_dir / "RESU" / "001", (now - 120, now - 120))
    os.utime(case_dir / "RESU" / "002", (now, now))

    _header_latest, latest_rows = read_probe_rows(
        runs_dir,
        ["case0001"],
        "probe_density.csv",
        axis="time",
        allow_empty=True,
        include_history=False,
    )
    latest_time = [float(row["time"]) for row in latest_rows]
    assert latest_time == [2.0, 3.0]

    _header_all, all_rows = read_probe_rows(
        runs_dir,
        ["case0001"],
        "probe_density.csv",
        axis="time",
        allow_empty=True,
        include_history=True,
    )
    all_time = [float(row["time"]) for row in all_rows]
    assert all_time == [0.0, 1.0, 2.0, 3.0]


def test_render_residuals_svg_no_warning_for_prepared_case(tmp_path: Path, capsys) -> None:
    """Residuals missing on a PREPARED case must produce no stderr warning."""
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    (runs_dir / "case0001").mkdir()
    save_registry(
        runs_dir,
        {"case0001": {"case_id": "case0001", "status": "PREPARED"}},
    )

    read_residual_rows(runs_dir, ["case0001"], allow_empty=True)

    assert capsys.readouterr().err == ""


def test_render_residuals_svg_warns_for_launched_case_missing_residuals(tmp_path: Path, capsys) -> None:
    """Residuals missing on a DONE case must produce a warning."""
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    (runs_dir / "case0001").mkdir()
    save_registry(
        runs_dir,
        {"case0001": {"case_id": "case0001", "status": "DONE"}},
    )

    read_residual_rows(runs_dir, ["case0001"], allow_empty=True)

    assert "residuals not found for case0001" in capsys.readouterr().err


def test_read_probe_rows_no_warning_for_prepared_case(tmp_path: Path, capsys) -> None:
    """Probe missing on a PREPARED case must produce no stderr warning."""
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    (runs_dir / "case0001").mkdir()
    save_registry(
        runs_dir,
        {"case0001": {"case_id": "case0001", "status": "PREPARED"}},
    )

    read_probe_rows(runs_dir, ["case0001"], "probe_density.csv", allow_empty=True)

    assert capsys.readouterr().err == ""


def test_read_probe_rows_warns_for_launched_case_missing_probe(tmp_path: Path, capsys) -> None:
    """Probe missing on a DONE case must produce a warning."""
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    (runs_dir / "case0001").mkdir()
    save_registry(
        runs_dir,
        {"case0001": {"case_id": "case0001", "status": "DONE"}},
    )

    read_probe_rows(runs_dir, ["case0001"], "probe_density.csv", allow_empty=True)

    assert "probe not found for case0001" in capsys.readouterr().err


def test_probe_rendering_follows_an_adapter_declared_layout(tmp_path: Path) -> None:
    """A solver with its own probe directory reuses CSV reading and SVG rendering as is."""
    from csauto.probes import list_run_csv_files, locate_run_csv_files
    from csauto.solvers.stub import StubAdapter

    class ProbingStub(StubAdapter):
        def list_probe_files(self, case_dir, limit=200):
            return list_run_csv_files(self.latest_run_dir(case_dir), "points", limit=limit)

        def locate_probe_files(self, case_dir, probe_ref, include_history=False):
            return locate_run_csv_files(case_dir, self.list_run_dirs(case_dir), ("points",), probe_ref, include_history)

    runs_dir = tmp_path / "RUNS"
    probe_dir = runs_dir / "case0001" / "OUT" / "run_0001" / "points"
    probe_dir.mkdir(parents=True)
    (probe_dir / "probe_density.csv").write_text("time,value\n0.0,1.0\n1.0,2.0\n", encoding="utf-8")
    adapter = ProbingStub()

    assert adapter.list_probe_files(runs_dir / "case0001") == ["probe_density.csv"]
    _header, rows = read_probe_rows(runs_dir, ["case0001"], "probe_density.csv", adapter=adapter)
    assert [row["value"] for row in rows] == ["1.0", "2.0"]
    svg = render_probe_svg(runs_dir, ["case0001"], "probe_density.csv", ["value"], adapter=adapter)
    assert "<path" in svg


def test_residual_rows_without_iteration_are_plotted_in_order(tmp_path: Path, capsys) -> None:
    from csauto.solvers.stub import StubAdapter

    class LogResiduals(StubAdapter):
        def parse_live_residuals(self, case_dir):
            return ["r"], [{"r": "1e-1"}, {"r": "1e-2"}, {"r": "1e-3"}]

    runs_dir = tmp_path / "RUNS"
    (runs_dir / "case0001").mkdir(parents=True)
    svg = render_residuals_svg(runs_dir, ["case0001"], ["r"], adapter=LogResiduals())
    assert "<path" in svg
    assert "no iteration column" in capsys.readouterr().err


def test_probe_axis_names_are_case_insensitive(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    probe_dir = runs_dir / "case0001" / "RESU" / "001" / "monitoring"
    probe_dir.mkdir(parents=True)
    (probe_dir / "probe_h.csv").write_text("Time,value\n0.0,1.0\n1.0,2.0\n", encoding="utf-8")
    svg = render_probe_svg(runs_dir, ["case0001"], "probe_h.csv", ["value"], axis="time")
    assert "<path" in svg


def test_probe_position_is_unknown_for_an_unmatched_probe(tmp_path: Path) -> None:
    from csauto.probes import probe_position

    case_dir = tmp_path / "RUNS" / "case0001"
    probe_dir = case_dir / "RESU" / "001" / "monitoring"
    probe_dir.mkdir(parents=True)
    (probe_dir / "gauges_coords.csv").write_text("name,x,y\ngauge_A,1,1\n", encoding="utf-8")
    assert probe_position(case_dir, "gauges_h.csv", column_ref="gauge_A")["x"] == 1.0
    assert probe_position(case_dir, "gauges_h.csv", column_ref="gauge_B") == {}


def test_read_csv_table_can_stop_early(tmp_path: Path) -> None:
    from csauto.probes import read_csv_table

    path = tmp_path / "probes.csv"
    path.write_text("t, p1\n" + "".join(f"{i}, {i * 2}\n" for i in range(500)), encoding="utf-8")
    assert read_csv_table(path, max_rows=0) == (["t", "p1"], [])
    rows = read_csv_table(path, max_rows=200)[1]
    assert len(rows) == 200 and rows[-1] == {"t": "199", "p1": "398"}
    assert len(read_csv_table(path)[1]) == 500
