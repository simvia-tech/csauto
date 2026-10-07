"""A campaign remembers the solver it was prepared for, whatever directory commands run from."""

from __future__ import annotations

from pathlib import Path

from csauto.cli import main
from csauto.registry import read_campaign_solver


def _stub_study(root: Path) -> None:
    (root / "TEMPLATE").mkdir(parents=True)
    (root / "TEMPLATE" / "stub.toml").write_text("steps = {steps}\n", encoding="utf-8")
    (root / "doe.csv").write_text("steps\n2\n3\n", encoding="utf-8")
    (root / "csauto.toml").write_text('solver = "stub"\n', encoding="utf-8")


def test_prepare_records_the_solver_and_later_commands_use_it(tmp_path: Path, monkeypatch, capsys) -> None:
    study = tmp_path / "study"
    _stub_study(study)
    monkeypatch.chdir(study)
    assert main(["prepare", "doe.csv", "TEMPLATE", "RUNS"]) == 0
    assert read_campaign_solver(study / "RUNS") == "stub"

    # From another directory, with no csauto.toml around, doctor still checks stub cases.
    elsewhere = tmp_path / "elsewhere"
    elsewhere.mkdir()
    monkeypatch.chdir(elsewhere)
    monkeypatch.delenv("CSAUTO_CONFIG", raising=False)
    capsys.readouterr()
    assert main(["doctor", str(study / "RUNS")]) == 0
    output = capsys.readouterr().out
    assert "solver stub:" in output
    assert "2 cases detected" in output


def test_prepare_refuses_to_mix_solvers_in_one_campaign(tmp_path: Path, monkeypatch, capsys) -> None:
    study = tmp_path / "study"
    _stub_study(study)
    monkeypatch.chdir(study)
    assert main(["prepare", "doe.csv", "TEMPLATE", "RUNS"]) == 0
    (study / "csauto.toml").write_text('solver = "code_aster"\n', encoding="utf-8")
    assert main(["prepare", "doe.csv", "TEMPLATE", "RUNS"]) == 1
    assert "holds a stub campaign" in capsys.readouterr().err
