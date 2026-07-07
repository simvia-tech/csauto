from __future__ import annotations

from pathlib import Path

from csauto.cli import main
from csauto.doe import generate_cases, load_doe


def test_doe_generate_lhs_feeds_into_prepare(tmp_path: Path, monkeypatch) -> None:
    spec_path = tmp_path / "spec.toml"
    spec_path.write_text(
        """
        [parameters.u_inlet]
        min = 0.5
        max = 5.0

        [parameters.turbulence_model]
        levels = ["k-epsilon", "k-omega-sst"]
        """,
        encoding="utf-8",
    )
    doe_path = tmp_path / "doe.csv"

    monkeypatch.chdir(tmp_path)
    exit_code = main(
        [
            "doe",
            str(spec_path),
            str(doe_path),
            "--method",
            "lhs",
            "--samples",
            "3",
            "--seed",
            "1",
        ]
    )
    assert exit_code == 0
    assert doe_path.is_file()

    headers, rows = load_doe(doe_path)
    assert headers == ["u_inlet", "turbulence_model"]
    assert len(rows) == 6

    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text(
        '<root><velocity>{u_inlet}</velocity><turbulence model="{turbulence_model}"/></root>',
        encoding="utf-8",
    )

    output_dir = tmp_path / "RUNS"
    generate_cases(headers, rows, template_dir, output_dir)

    case_dirs = sorted(p.name for p in output_dir.iterdir() if p.is_dir())
    assert len(case_dirs) == 6
    for case_id in case_dirs:
        setup_text = (output_dir / case_id / "DATA" / "setup.xml").read_text(encoding="utf-8")
        assert "{" not in setup_text


def test_doe_generate_refuses_to_overwrite_without_force(tmp_path: Path, monkeypatch) -> None:
    spec_path = tmp_path / "spec.toml"
    spec_path.write_text('[parameters.foo]\nlevels = ["a", "b"]\n', encoding="utf-8")
    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("existing\n", encoding="utf-8")

    monkeypatch.chdir(tmp_path)
    exit_code = main(["doe", str(spec_path), str(doe_path), "--method", "factorial"])
    assert exit_code == 1
    assert doe_path.read_text(encoding="utf-8") == "existing\n"

    exit_code = main(["doe", str(spec_path), str(doe_path), "--method", "factorial", "--force"])
    assert exit_code == 0
    headers, rows = load_doe(doe_path)
    assert headers == ["foo"]
    assert len(rows) == 2
