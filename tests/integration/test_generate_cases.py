from __future__ import annotations

from pathlib import Path

import pytest

from csauto.doe import generate_cases, load_doe
from csauto.registry import STATUS_PREPARED, load_registry


def test_generate_cases_creates_case(tmp_path: Path, monkeypatch) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")

    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("foo\n42\n", encoding="utf-8")

    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)
    monkeypatch.chdir(tmp_path)
    generate_cases(headers, rows, template_dir, output_dir)

    case_dir = output_dir / "case0001"
    assert case_dir.is_dir()
    setup_text = (case_dir / "DATA" / "setup.xml").read_text(encoding="utf-8")
    assert setup_text == "<root>42</root>"

    registry = load_registry(output_dir)
    assert registry["case0001"]["status"] == STATUS_PREPARED


def test_generate_cases_multiple_rows_auto_ids(tmp_path: Path, monkeypatch) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")

    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("foo\n1\n2\n", encoding="utf-8")

    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)
    monkeypatch.chdir(tmp_path)
    generate_cases(headers, rows, template_dir, output_dir)

    assert (output_dir / "case0001").is_dir()
    assert (output_dir / "case0002").is_dir()

    registry = load_registry(output_dir)
    assert "case0001" in registry
    assert "case0002" in registry


def test_generate_cases_copies_shared_dirs_from_template_parent_even_when_cwd_diff(
    tmp_path: Path,
    monkeypatch,
) -> None:
    project_dir = tmp_path / "project"
    template_dir = project_dir / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")
    (project_dir / "MESH").mkdir(parents=True)
    (project_dir / "MESH" / "mesh.med").write_text("mesh-data\n", encoding="utf-8")
    (project_dir / "POST").mkdir(parents=True)
    (project_dir / "POST" / "probe.txt").write_text("post-data\n", encoding="utf-8")

    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("foo\n7\n", encoding="utf-8")

    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)
    other_dir = tmp_path / "other"
    other_dir.mkdir()
    monkeypatch.chdir(other_dir)
    generate_cases(headers, rows, template_dir, output_dir)

    assert (output_dir / "MESH" / "mesh.med").read_text(encoding="utf-8") == "mesh-data\n"
    assert (output_dir / "POST" / "probe.txt").read_text(encoding="utf-8") == "post-data\n"


def test_generate_cases_symlinks_shared_dirs_when_mesh_mode_symlink(tmp_path: Path, monkeypatch) -> None:
    project_dir = tmp_path / "project"
    template_dir = project_dir / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")
    (project_dir / "MESH").mkdir(parents=True)
    (project_dir / "MESH" / "mesh.med").write_text("mesh-data\n", encoding="utf-8")
    (project_dir / "POST").mkdir(parents=True)
    (project_dir / "POST" / "probe.txt").write_text("post-data\n", encoding="utf-8")

    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("foo\n7\n", encoding="utf-8")

    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)
    monkeypatch.chdir(tmp_path)
    generate_cases(headers, rows, template_dir, output_dir, mesh_mode="symlink")

    mesh_dir = output_dir / "MESH"
    post_dir = output_dir / "POST"
    assert mesh_dir.is_symlink()
    assert post_dir.is_symlink()
    assert mesh_dir.resolve() == (project_dir / "MESH").resolve()
    assert (mesh_dir / "mesh.med").read_text(encoding="utf-8") == "mesh-data\n"
    assert (post_dir / "probe.txt").read_text(encoding="utf-8") == "post-data\n"

    # Re-running generate_cases with the same mode is idempotent.
    generate_cases(headers, rows, template_dir, output_dir, mesh_mode="symlink")
    assert mesh_dir.is_symlink()


def test_generate_cases_invalid_mesh_mode_raises(tmp_path: Path) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")
    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("foo\n1\n", encoding="utf-8")
    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)

    with pytest.raises(ValueError, match="mesh_mode"):
        generate_cases(headers, rows, template_dir, output_dir, mesh_mode="bogus")


def test_generate_cases_warns_unused_columns(tmp_path: Path, monkeypatch, capsys) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")

    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("foo,unused\n1,2\n", encoding="utf-8")

    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)
    monkeypatch.chdir(tmp_path)
    generate_cases(headers, rows, template_dir, output_dir)

    captured = capsys.readouterr()
    assert "unused" in captured.err


def test_generate_cases_ignores_shell_expansions_in_extra_files(tmp_path: Path, monkeypatch) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "scripts").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")
    (template_dir / "scripts" / "run.sh").write_text(
        "#!/bin/sh\necho ${HOME}\necho {foo}\n",
        encoding="utf-8",
    )

    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("foo\n42\n", encoding="utf-8")

    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)
    monkeypatch.chdir(tmp_path)
    generate_cases(headers, rows, template_dir, output_dir)

    script_text = (output_dir / "case0001" / "scripts" / "run.sh").read_text(encoding="utf-8")
    assert "echo ${HOME}" in script_text
    assert "echo 42" in script_text


def test_generate_cases_ignores_hidden_temp_files_in_extra_scan(tmp_path: Path, monkeypatch) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")
    # Simulate a leftover editor swap file containing an incomplete IF block.
    (template_dir / "DATA" / ".setup.xml.swp").write_text(
        '<!-- IF foo == "x" -->\n{foo}\n',
        encoding="utf-8",
    )

    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("foo\n42\n", encoding="utf-8")

    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)
    monkeypatch.chdir(tmp_path)
    generate_cases(headers, rows, template_dir, output_dir)

    setup_text = (output_dir / "case0001" / "DATA" / "setup.xml").read_text(encoding="utf-8")
    assert setup_text == "<root>42</root>"


def test_generate_cases_is_incremental_for_new_rows(tmp_path: Path, monkeypatch) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")

    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("foo\n1\n2\n", encoding="utf-8")

    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)
    monkeypatch.chdir(tmp_path)
    generate_cases(headers, rows, template_dir, output_dir)

    doe_path.write_text("foo\n1\n2\n3\n", encoding="utf-8")
    headers, rows = load_doe(doe_path)
    generate_cases(headers, rows, template_dir, output_dir)

    assert (output_dir / "case0001").is_dir()
    assert (output_dir / "case0002").is_dir()
    assert (output_dir / "case0003").is_dir()
    assert (output_dir / "case0003" / "DATA" / "setup.xml").read_text(encoding="utf-8") == "<root>3</root>"

    registry = load_registry(output_dir)
    assert registry["case0001"]["status"] == STATUS_PREPARED
    assert registry["case0002"]["status"] == STATUS_PREPARED
    assert registry["case0003"]["status"] == STATUS_PREPARED


def test_generate_cases_incremental_conflict_on_changed_existing_case(tmp_path: Path, monkeypatch) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")

    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("foo\n1\n", encoding="utf-8")

    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)
    monkeypatch.chdir(tmp_path)
    generate_cases(headers, rows, template_dir, output_dir)

    doe_path.write_text("foo\n9\n", encoding="utf-8")
    headers, rows = load_doe(doe_path)
    with pytest.raises(FileExistsError) as excinfo:
        generate_cases(headers, rows, template_dir, output_dir)

    assert "Existing case differs from current DOE/template content" in str(excinfo.value)


def test_generate_cases_incremental_conflict_on_changed_template_file(tmp_path: Path, monkeypatch) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "SRC").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")
    (template_dir / "SRC" / "user.txt").write_text("version-1\n", encoding="utf-8")

    doe_path = tmp_path / "doe.csv"
    doe_path.write_text("foo\n1\n", encoding="utf-8")

    output_dir = tmp_path / "RUNS"
    headers, rows = load_doe(doe_path)
    monkeypatch.chdir(tmp_path)
    generate_cases(headers, rows, template_dir, output_dir)

    (template_dir / "SRC" / "user.txt").write_text("version-2\n", encoding="utf-8")
    with pytest.raises(FileExistsError) as excinfo:
        generate_cases(headers, rows, template_dir, output_dir)

    assert "Existing case differs from current DOE/template content" in str(excinfo.value)
