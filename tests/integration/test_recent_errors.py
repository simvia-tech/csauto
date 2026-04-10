from __future__ import annotations

from pathlib import Path

import csauto.logs as logs_module
from csauto.logs import collect_recent_errors


def test_collect_recent_errors_filters_severity_and_query(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    case_dir.mkdir(parents=True, exist_ok=True)
    log_text = "Warning: clipping\nFATAL ERROR: boom\nError detected\n"
    (case_dir / "run_solver.log").write_text(log_text, encoding="utf-8")

    items = collect_recent_errors(
        runs_dir,
        ["case0001"],
        files=["run_solver.log"],
        severity_filter={"error"},
        query="FATAL",
    )
    assert len(items) == 1
    assert items[0]["severity"] == "error"
    assert "FATAL" in items[0]["line_html"]


def test_collect_recent_errors_scans_full_file(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    case_dir.mkdir(parents=True, exist_ok=True)
    filler = "\n".join(f"line {idx}" for idx in range(250))
    log_text = f"FATAL ERROR: very early failure\n{filler}\n"
    (case_dir / "run_solver.log").write_text(log_text, encoding="utf-8")

    items = collect_recent_errors(
        runs_dir,
        ["case0001"],
        files=["run_solver.log"],
        severity_filter={"error"},
        query="early failure",
    )
    assert len(items) == 1
    assert items[0]["tail_index"] == 1


def test_collect_recent_errors_includes_context_before_and_after(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    case_dir.mkdir(parents=True, exist_ok=True)
    log_text = "before one\nbefore two\nFATAL ERROR: boom\nafter one\nafter two\n"
    (case_dir / "run_solver.log").write_text(log_text, encoding="utf-8")

    items = collect_recent_errors(
        runs_dir,
        ["case0001"],
        files=["run_solver.log"],
        context_after=1,
        severity_filter={"error"},
    )
    assert len(items) == 1
    snippet = str(items[0]["line_html"]).split("\n")
    assert snippet[0] == "before two"
    assert "FATAL" in snippet[1]
    assert "err-hit" in snippet[1]
    assert snippet[2] == "after one"


def test_collect_recent_errors_updates_cache_incrementally_on_append(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    case_dir.mkdir(parents=True, exist_ok=True)
    log_path = case_dir / "run_solver.log"
    with logs_module.ANOMALY_CACHE_LOCK:
        logs_module.ANOMALY_FILE_CACHE.clear()

    log_path.write_text("FATAL ERROR: first\n", encoding="utf-8")
    first = collect_recent_errors(runs_dir, ["case0001"], files=["run_solver.log"], severity_filter={"error"})
    assert len(first) == 1
    assert "first" in first[0]["line_html"]

    with log_path.open("a", encoding="utf-8") as handle:
        handle.write("line ok\n")
        handle.write("FATAL ERROR: second\n")

    second = collect_recent_errors(
        runs_dir,
        ["case0001"],
        files=["run_solver.log"],
        severity_filter={"error"},
        query="second",
    )
    assert len(second) == 1
    assert "second" in second[0]["line_html"]
    assert second[0]["tail_index"] == 3


def test_collect_recent_errors_reuses_previous_offset_on_append(tmp_path: Path, monkeypatch) -> None:
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    case_dir.mkdir(parents=True, exist_ok=True)
    log_path = case_dir / "run_solver.log"
    with logs_module.ANOMALY_CACHE_LOCK:
        logs_module.ANOMALY_FILE_CACHE.clear()

    log_path.write_text("line 1\nFATAL ERROR: first\n", encoding="utf-8")
    initial_size = log_path.stat().st_size
    original_open = Path.open
    seek_offsets: list[int] = []

    class TrackingHandle:
        def __init__(self, handle) -> None:
            self._handle = handle

        def __enter__(self):
            self._handle.__enter__()
            return self

        def __exit__(self, exc_type, exc, tb):
            return self._handle.__exit__(exc_type, exc, tb)

        def seek(self, offset: int, whence: int = 0):
            if whence == 0:
                seek_offsets.append(offset)
            return self._handle.seek(offset, whence)

        def __getattr__(self, name: str):
            return getattr(self._handle, name)

    def open_wrapper(self: Path, *args, **kwargs):
        handle = original_open(self, *args, **kwargs)
        if self == log_path and args and args[0] == "rb":
            return TrackingHandle(handle)
        return handle

    monkeypatch.setattr(Path, "open", open_wrapper)

    collect_recent_errors(runs_dir, ["case0001"], files=["run_solver.log"], severity_filter={"error"})
    with log_path.open("a", encoding="utf-8") as handle:
        handle.write("FATAL ERROR: second\n")
    collect_recent_errors(runs_dir, ["case0001"], files=["run_solver.log"], severity_filter={"error"})

    assert seek_offsets[0] == 0
    assert seek_offsets[-1] == initial_size
