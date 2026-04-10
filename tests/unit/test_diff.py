from __future__ import annotations

from pathlib import Path

from csauto.diff import compare_runs_diff


def test_compare_runs_diff_includes_case_names(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    case1 = runs_dir / "case0001" / "DATA"
    case2 = runs_dir / "case0002" / "DATA"
    case1.mkdir(parents=True, exist_ok=True)
    case2.mkdir(parents=True, exist_ok=True)
    (case1 / "setup.xml").write_text("<root>A</root>", encoding="utf-8")
    (case2 / "setup.xml").write_text("<root>B</root>", encoding="utf-8")

    diff = compare_runs_diff(runs_dir, ["case0001", "case0002"], "case0001", "setup.xml")
    assert "case0001" in diff
    assert "case0002" in diff
    assert "setup.xml" in diff
