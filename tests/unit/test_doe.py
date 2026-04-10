from __future__ import annotations

from pathlib import Path

import pytest

from csauto.doe import generate_cases, load_doe, read_doe_row


def test_load_doe_reads_headers_and_rows(tmp_path: Path) -> None:
    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("a,b\n1,2\n", encoding="utf-8")
    headers, rows = load_doe(doe_path)
    assert headers == ["a", "b"]
    assert rows == [{"a": "1", "b": "2"}]


def test_load_doe_normalizes_empty_values(tmp_path: Path) -> None:
    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("a,b\n,2\n", encoding="utf-8")
    headers, rows = load_doe(doe_path)
    assert headers == ["a", "b"]
    assert rows == [{"a": "", "b": "2"}]


def test_read_doe_row_returns_values_and_columns(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    (case_dir / "doe_row.csv").write_text("a,b,case_id\n1,2,case0001\n", encoding="utf-8")
    values, columns = read_doe_row(case_dir)
    assert values["a"] == "1"
    assert values["b"] == "2"
    assert "case_id" in columns


def test_generate_cases_invalid_case_id_slash(tmp_path: Path) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")

    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("case_id,foo\nbad/name,42\n", encoding="utf-8")

    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)
    with pytest.raises(ValueError):
        generate_cases(headers, rows, template_dir, output_dir)


def test_generate_cases_missing_column_error_message(tmp_path: Path) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{bar}</root>", encoding="utf-8")

    headers = ["foo"]
    rows = [{"foo": "42"}]
    output_dir = tmp_path / "RUNS"

    with pytest.raises(ValueError) as excinfo:
        generate_cases(headers, rows, template_dir, output_dir)
    assert str(excinfo.value) == "Variables without matching DOE columns: bar"


def test_generate_cases_duplicate_case_id_raises(tmp_path: Path) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")

    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("case_id,foo\ncaseA,1\ncaseA,2\n", encoding="utf-8")

    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)

    with pytest.raises(ValueError) as excinfo:
        generate_cases(headers, rows, template_dir, output_dir)
    assert str(excinfo.value) == "Duplicate case_id in DOE: caseA"
