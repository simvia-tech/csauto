"""SERAFIN result files: values at nodes, read while TELEMAC writes them, and the Probes series built on them."""

from __future__ import annotations

import struct
from pathlib import Path

import pytest

from csauto.solvers import get_solver_adapter
from csauto.solvers.telemac.adapter import time_series_tables
from csauto.solvers.telemac.selafin import read_header, read_node_series


def _record(payload: bytes) -> bytes:
    size = struct.pack(">i", len(payload))
    return size + payload + size


def _floats(values, float_size: int) -> bytes:
    return struct.pack(f">{len(values)}{'f' if float_size == 4 else 'd'}", *values)


def selafin(var_names, npoin, frames, *, ipobo=None, float_size=4, date=False) -> tuple[bytes, list[bytes]]:
    """(header, [frame bytes]) laid out as TELEMAC writes them: big-endian Fortran records."""
    header = _record(("TEST" + (" SERAFIND" if float_size == 8 else "")).ljust(80).encode())
    header += _record(struct.pack(">2i", len(var_names), 0))
    for name in var_names:
        header += _record(name.ljust(16).encode() + b"M".ljust(16))
    header += _record(struct.pack(">10i", 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 if date else 0))
    if date:
        header += _record(struct.pack(">6i", 2026, 10, 22, 12, 0, 0))
    nelem = max(npoin - 2, 0)  # a time series partition may hold a single point
    header += _record(struct.pack(">4i", nelem, npoin, 3, 1))
    header += _record(struct.pack(f">{3 * nelem}i", *[k for e in range(nelem) for k in (e + 1, e + 2, e + 3)]))
    header += _record(struct.pack(f">{npoin}i", *(ipobo or [0] * npoin)))
    header += _record(_floats(range(npoin), float_size)) + _record(_floats([0.0] * npoin, float_size))
    frame_bytes = []
    for time, values in frames:
        data = _record(_floats([time], float_size))
        for row in values:
            data += _record(_floats(row, float_size))
        frame_bytes.append(data)
    return header, frame_bytes


def frame(time: float, nodes: list[int], nvar: int = 2):
    """Variable v at global node n = 1000 v + n + time."""
    return time, [[1000 * v + n + time for n in nodes] for v in range(nvar)]


def write_file(path: Path, **kwargs) -> Path:
    header, frames = selafin(**kwargs)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(header + b"".join(frames))
    return path


@pytest.mark.parametrize("float_size", [4, 8])
@pytest.mark.parametrize("date", [False, True])
def test_header_and_values(tmp_path, float_size, date):
    nodes = list(range(1, 6))
    path = write_file(
        tmp_path / "r2d.slf",
        var_names=["VELOCITY U", "WATER DEPTH"],
        npoin=5,
        frames=[frame(0.0, nodes), frame(2.5, nodes)],
        float_size=float_size,
        date=date,
    )
    with path.open("rb") as handle:
        header = read_header(handle)
    assert header is not None
    assert (header.var_names, header.npoin, header.float_size) == (["VELOCITY U", "WATER DEPTH"], 5, float_size)
    series = read_node_series([path], [1, 5, 9])
    assert series.variables == ["VELOCITY U", "WATER DEPTH"]
    assert series.nodes == [1, 5]  # 9 is not in the file
    assert series.times == [0.0, 2.5]
    assert series.values["WATER DEPTH"] == {1: [1001.0, 1003.5], 5: [1005.0, 1007.5]}


def test_file_written_progressively(tmp_path):
    nodes = [1, 2, 3, 4]
    header, frames = selafin(var_names=["H"], npoin=4, frames=[frame(t, nodes, 1) for t in (0.0, 1.0, 2.0)])
    path = tmp_path / "T2DRES"
    path.write_bytes(header[:50])
    assert read_node_series([path], [2]) is None  # header not complete yet
    with path.open("ab") as handle:
        handle.write(header[50:] + frames[0] + frames[1][:7])
    assert read_node_series([path], [2]).times == [0.0]
    with path.open("ab") as handle:
        handle.write(frames[1][7:] + frames[2])
    series = read_node_series([path], [2])
    assert series.times == [0.0, 1.0, 2.0]
    assert series.values["H"][2] == [2.0, 3.0, 4.0]


def test_parallel_partitions_use_global_numbering(tmp_path):
    # Global nodes 1..6 split in two partitions sharing node 3; IPOBO holds each local node's global number.
    parts = {0: [1, 2, 3, 4], 1: [3, 5, 6, 4]}
    paths = []
    for rank, globals_ in parts.items():
        frames = [frame(0.0, globals_), frame(1.0, globals_)]
        if rank == 1:
            frames = frames[:1]  # the second partition is late: only time 0 is complete everywhere
        paths.append(
            write_file(
                tmp_path / f"T2DRES00001-{rank:05d}", var_names=["U", "H"], npoin=4, frames=frames, ipobo=globals_
            )
        )
    series = read_node_series(paths, [6, 2, 7])
    assert series.nodes == [6, 2]  # 7 is in no partition
    assert series.times == [0.0]
    assert series.values["H"] == {6: [1006.0], 2: [1002.0]}


class TestTimeSeriesProbes:
    """TELEMAC's own probes: a TIME SERIES COORDINATES FILE, and the TIME SERIES FILE TELEMAC writes."""

    TELEMAC2D = "VELOCITY DIFFUSIVITY = 1.\nTIME SERIES COORDINATES FILE 1 = 'probes.txt'\nTIME SERIES FILE 1 = 'RESU/probes.slf'\n"

    @pytest.fixture()
    def case_dir(self, tmp_path):
        case_dir = tmp_path / "case0001"
        case_dir.mkdir()
        (case_dir / "probes.txt").write_text("1 2\n0 50 1\n2.5 1.0 1 inlet\n17.5 1.0 2 outlet\n", encoding="utf-8")
        (case_dir / "csauto.stdout").write_text("", encoding="utf-8")
        return case_dir

    def test_telemac2d_final_file(self, case_dir):
        (case_dir / "study.cas").write_text(self.TELEMAC2D, encoding="utf-8")
        write_file(
            case_dir / "RESU" / "probes.slf",
            var_names=["VELOCITY U", "FREE SURFACE"],
            npoin=2,
            frames=[frame(0.0, [1, 2]), frame(10.0, [1, 2])],
            ipobo=[1, 2],
        )
        adapter = get_solver_adapter("openTELEMAC")
        assert adapter.list_probe_files(case_dir) == ["Velocity U at probes.csv", "Free surface at probes.csv"]
        [path] = adapter.locate_probe_files(case_dir, "Free surface at probes.csv")
        assert adapter.read_probe_file(path) == (
            ["time", "inlet", "outlet"],
            [
                {"time": "0.0", "inlet": "1001.0", "outlet": "1002.0"},
                {"time": "10.0", "inlet": "1011.0", "outlet": "1012.0"},
            ],
        )

    def test_telemac3d_planes(self, case_dir):
        (case_dir / "study.cas").write_text(
            "NUMBER OF HORIZONTAL LEVELS = 3\nTIME SERIES COORDINATES FILE = 'probes.txt'\n"
            "3D TIME SERIES FILE = 'RESU/probes3d.slf'\n",
            encoding="utf-8",
        )
        points = list(range(1, 7))  # 2 points on 3 planes, plane by plane from the bottom
        write_file(
            case_dir / "RESU" / "probes3d.slf", var_names=["ELEVATION Z"], npoin=6, frames=[frame(0.0, points, 1)]
        )
        tables = time_series_tables(case_dir, case_dir / "study.cas", "telemac3d")
        columns, rows = tables["Elevation Z at probes (3D).csv"]
        assert columns == [
            "time",
            "inlet_plane1",
            "outlet_plane1",
            "inlet_plane2",
            "outlet_plane2",
            "inlet_plane3",
            "outlet_plane3",
        ]
        assert rows[0]["outlet_plane3"] == "6.0"

    def test_partitions_during_a_parallel_run(self, case_dir):
        (case_dir / "study.cas").write_text(self.TELEMAC2D, encoding="utf-8")
        work_dir = case_dir / "study.cas_2026-10-27-11h00min00s"
        # Each process writes the points in its part of the mesh, numbered with their station number.
        write_file(work_dir / "T2DHI100001-00000", var_names=["H"], npoin=1, frames=[frame(0.0, [2], 1)], ipobo=[2])
        write_file(work_dir / "T2DHI100001-00001", var_names=["H"], npoin=1, frames=[frame(0.0, [1], 1)], ipobo=[1])
        columns, rows = time_series_tables(case_dir, case_dir / "study.cas", "telemac2d")["H at probes.csv"]
        assert columns == ["time", "inlet", "outlet"]
        assert rows == [{"time": "0.0", "inlet": "1.0", "outlet": "2.0"}]

    def test_a_process_without_points_leaves_its_file_empty(self, case_dir):
        (case_dir / "study.cas").write_text(self.TELEMAC2D, encoding="utf-8")
        work_dir = case_dir / "study.cas_2026-10-27-11h00min00s"
        (work_dir).mkdir()
        (work_dir / "T2DHI100002-00000").write_bytes(b"")  # no probe in this process's part of the mesh
        write_file(work_dir / "T2DHI100002-00001", var_names=["H"], npoin=1, frames=[frame(0.0, [2], 1)], ipobo=[2])
        write_file(work_dir / "T2DHI100002-00002", var_names=["H"], npoin=1, frames=[frame(0.0, [1], 1)], ipobo=[1])
        columns, rows = time_series_tables(case_dir, case_dir / "study.cas", "telemac2d")["H at probes.csv"]
        assert columns == ["time", "inlet", "outlet"]
        assert rows == [{"time": "0.0", "inlet": "1.0", "outlet": "2.0"}]

    def test_tables_follow_the_file_as_telemac_writes_it(self, case_dir):
        (case_dir / "study.cas").write_text(self.TELEMAC2D, encoding="utf-8")
        header, frames = selafin(var_names=["H"], npoin=2, frames=[frame(t, [1, 2], 1) for t in (0.0, 1.0)])
        path = case_dir / "RESU" / "probes.slf"
        path.parent.mkdir()
        path.write_bytes(header + frames[0])
        assert len(time_series_tables(case_dir, case_dir / "study.cas", "telemac2d")["H at probes.csv"][1]) == 1
        assert len(time_series_tables(case_dir, case_dir / "study.cas", "telemac2d")["H at probes.csv"][1]) == 1
        with path.open("ab") as handle:
            handle.write(frames[1])
        _columns, rows = time_series_tables(case_dir, case_dir / "study.cas", "telemac2d")["H at probes.csv"]
        assert rows == [
            {"time": "0.0", "inlet": "1.0", "outlet": "2.0"},
            {"time": "1.0", "inlet": "2.0", "outlet": "3.0"},
        ]

    def test_a_stopped_run_does_not_hide_the_next_one(self, case_dir):
        import os

        (case_dir / "study.cas").write_text(self.TELEMAC2D, encoding="utf-8")
        # A run stopped before its end leaves runcode's working folder, with fewer frames...
        old = case_dir / "study.cas_2026-10-27-10h00min00s"
        write_file(old / "T2DHI1", var_names=["H"], npoin=2, frames=[frame(0.0, [1, 2], 1)], ipobo=[1, 2])
        os.utime(old, (1_000_000, 1_000_000))
        # ...and the next one ends correctly, its final file newer than that folder.
        write_file(
            case_dir / "RESU" / "probes.slf",
            var_names=["H"],
            npoin=2,
            frames=[frame(0.0, [1, 2], 1), frame(1.0, [1, 2], 1)],
            ipobo=[1, 2],
        )
        _columns, rows = time_series_tables(case_dir, case_dir / "study.cas", "telemac2d")["H at probes.csv"]
        assert len(rows) == 2

    def test_nothing_without_coordinates(self, case_dir):
        (case_dir / "study.cas").write_text("VELOCITY DIFFUSIVITY = 1.\nTIME SERIES FILE 1 = 'RESU/p.slf'\n")
        write_file(case_dir / "RESU" / "p.slf", var_names=["H"], npoin=2, frames=[frame(0.0, [1, 2], 1)])
        assert get_solver_adapter("openTELEMAC").list_probe_files(case_dir) == []
