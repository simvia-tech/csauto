from __future__ import annotations

import builtins
from pathlib import Path

import pytest

from csauto.doe import load_doe
from csauto.doe_generate import generate_rows, load_doe_spec, write_doe_csv


def write_spec(tmp_path: Path, content: str) -> Path:
    spec_path = tmp_path / "spec.toml"
    spec_path.write_text(content, encoding="utf-8")
    return spec_path


def test_load_doe_spec_parses_continuous_and_discrete(tmp_path: Path) -> None:
    spec_path = write_spec(
        tmp_path,
        """
        [parameters.u_inlet]
        min = 0.5
        max = 5.0

        [parameters.turbulence_model]
        levels = ["k-epsilon", "k-omega-sst"]
        """,
    )
    params = load_doe_spec(spec_path)
    assert [p.name for p in params] == ["u_inlet", "turbulence_model"]
    assert params[0].kind == "continuous"
    assert params[0].low == 0.5
    assert params[0].high == 5.0
    assert params[1].kind == "discrete"
    assert params[1].levels == ["k-epsilon", "k-omega-sst"]


def test_load_doe_spec_missing_parameters_table(tmp_path: Path) -> None:
    spec_path = write_spec(tmp_path, "")
    with pytest.raises(ValueError, match=r"must contain a \[parameters\] table"):
        load_doe_spec(spec_path)


def test_load_doe_spec_both_min_max_and_levels(tmp_path: Path) -> None:
    spec_path = write_spec(
        tmp_path,
        """
        [parameters.foo]
        min = 0.0
        max = 1.0
        levels = ["a", "b"]
        """,
    )
    with pytest.raises(ValueError, match="either min/max or levels, not both"):
        load_doe_spec(spec_path)


def test_load_doe_spec_neither_min_max_nor_levels(tmp_path: Path) -> None:
    spec_path = write_spec(tmp_path, "[parameters.foo]\n")
    with pytest.raises(ValueError, match="must specify either min/max or levels"):
        load_doe_spec(spec_path)


def test_load_doe_spec_invalid_name(tmp_path: Path) -> None:
    spec_path = write_spec(tmp_path, '[parameters."bad name"]\nmin = 0.0\nmax = 1.0\n')
    with pytest.raises(ValueError, match="allowed characters"):
        load_doe_spec(spec_path)


def test_load_doe_spec_reserved_case_id_name(tmp_path: Path) -> None:
    spec_path = write_spec(tmp_path, "[parameters.case_id]\nmin = 0.0\nmax = 1.0\n")
    with pytest.raises(ValueError, match="is reserved"):
        load_doe_spec(spec_path)


def test_load_doe_spec_duplicate_levels(tmp_path: Path) -> None:
    spec_path = write_spec(tmp_path, '[parameters.foo]\nlevels = ["a", "a"]\n')
    with pytest.raises(ValueError, match="must not contain duplicates"):
        load_doe_spec(spec_path)


def test_load_doe_spec_min_not_less_than_max(tmp_path: Path) -> None:
    spec_path = write_spec(tmp_path, "[parameters.foo]\nmin = 1.0\nmax = 1.0\n")
    with pytest.raises(ValueError, match="min must be less than max"):
        load_doe_spec(spec_path)


def test_load_doe_spec_malformed_toml(tmp_path: Path) -> None:
    spec_path = write_spec(tmp_path, "[parameters.foo\n")
    with pytest.raises(ValueError, match="Invalid TOML"):
        load_doe_spec(spec_path)


def test_generate_rows_factorial(tmp_path: Path) -> None:
    spec_path = write_spec(
        tmp_path,
        """
        [parameters.turbulence_model]
        levels = ["k-epsilon", "k-omega-sst"]

        [parameters.scheme]
        levels = ["upwind", "centered", "SOLU"]
        """,
    )
    params = load_doe_spec(spec_path)
    rows = generate_rows(params, "factorial")
    assert len(rows) == 6
    assert {"turbulence_model": "k-epsilon", "scheme": "upwind"} in rows
    assert {"turbulence_model": "k-omega-sst", "scheme": "SOLU"} in rows


def test_generate_rows_factorial_rejects_continuous(tmp_path: Path) -> None:
    spec_path = write_spec(tmp_path, "[parameters.u_inlet]\nmin = 0.0\nmax = 1.0\n")
    params = load_doe_spec(spec_path)
    with pytest.raises(ValueError, match="continuous: u_inlet"):
        generate_rows(params, "factorial")


def test_generate_rows_lhs_deterministic_and_in_range(tmp_path: Path) -> None:
    spec_path = write_spec(
        tmp_path,
        """
        [parameters.u_inlet]
        min = 0.5
        max = 5.0
        """,
    )
    params = load_doe_spec(spec_path)
    rows_a = generate_rows(params, "lhs", samples=8, seed=42)
    rows_b = generate_rows(params, "lhs", samples=8, seed=42)
    assert rows_a == rows_b
    assert len(rows_a) == 8
    for row in rows_a:
        assert 0.5 <= float(row["u_inlet"]) <= 5.0


def test_generate_rows_lhs_crossed_with_discrete(tmp_path: Path) -> None:
    spec_path = write_spec(
        tmp_path,
        """
        [parameters.u_inlet]
        min = 0.5
        max = 5.0

        [parameters.turbulence_model]
        levels = ["k-epsilon", "k-omega-sst"]
        """,
    )
    params = load_doe_spec(spec_path)
    rows = generate_rows(params, "lhs", samples=4, seed=1)
    assert len(rows) == 8
    models = {row["turbulence_model"] for row in rows}
    assert models == {"k-epsilon", "k-omega-sst"}


def test_generate_rows_lhs_requires_samples(tmp_path: Path) -> None:
    spec_path = write_spec(tmp_path, "[parameters.u_inlet]\nmin = 0.0\nmax = 1.0\n")
    params = load_doe_spec(spec_path)
    with pytest.raises(ValueError, match="--samples is required"):
        generate_rows(params, "lhs")


def test_generate_rows_ccd_row_count_and_bounds(tmp_path: Path) -> None:
    spec_path = write_spec(
        tmp_path,
        """
        [parameters.a]
        min = 0.0
        max = 10.0

        [parameters.b]
        min = -1.0
        max = 1.0
        """,
    )
    params = load_doe_spec(spec_path)
    rows = generate_rows(params, "ccd")
    assert len(rows) == 2**2 + 2 * 2 + 1
    a_values = {float(row["a"]) for row in rows}
    assert 0.0 in a_values
    assert 10.0 in a_values
    assert 5.0 in a_values


def test_generate_rows_sobol_missing_scipy(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    spec_path = write_spec(tmp_path, "[parameters.u_inlet]\nmin = 0.0\nmax = 1.0\n")
    params = load_doe_spec(spec_path)

    original_import = builtins.__import__

    def fake_import(name: str, *args, **kwargs):
        if name.startswith("scipy"):
            raise ImportError("missing scipy")
        return original_import(name, *args, **kwargs)

    monkeypatch.setattr(builtins, "__import__", fake_import)

    with pytest.raises(ImportError, match=r"doe.*extra"):
        generate_rows(params, "sobol", samples=4, seed=0)


def test_generate_rows_sobol_happy_path(tmp_path: Path) -> None:
    pytest.importorskip("scipy")
    spec_path = write_spec(tmp_path, "[parameters.u_inlet]\nmin = 0.0\nmax = 1.0\n")
    params = load_doe_spec(spec_path)
    rows = generate_rows(params, "sobol", samples=4, seed=0)
    assert len(rows) == 4
    for row in rows:
        assert 0.0 <= float(row["u_inlet"]) <= 1.0


def test_write_doe_csv_round_trips_through_load_doe(tmp_path: Path) -> None:
    output_path = tmp_path / "doe.csv"
    write_doe_csv(["a", "b"], [{"a": "1", "b": "x"}, {"a": "2", "b": "y"}], output_path)
    headers, rows = load_doe(output_path)
    assert headers == ["a", "b"]
    assert rows == [{"a": "1", "b": "x"}, {"a": "2", "b": "y"}]
