from __future__ import annotations

import csv
import shutil
import tomllib
from pathlib import Path

import pytest

from csauto.doe import collect_template_variables, generate_cases, load_doe
from csauto.new_campaign import case_info, create_campaign, example_path, list_solvers
from csauto.solvers import available_solvers, get_solver_adapter

REPO = Path(__file__).resolve().parents[2]


def test_only_described_solvers_are_offered() -> None:
    offered = {solver["name"] for solver in list_solvers()}
    described = {name for name in available_solvers() if get_solver_adapter(name).description}
    assert offered == described
    assert offered and len(offered) < len(available_solvers())  # the stub solver stays hidden


def test_every_example_is_shipped_in_the_wheel() -> None:
    force_include = tomllib.loads((REPO / "pyproject.toml").read_text())["tool"]["hatch"]["build"]["targets"]["wheel"][
        "force-include"
    ]
    for name in available_solvers():
        adapter = get_solver_adapter(name)
        if not adapter.example_dir:
            continue
        assert example_path(adapter) is not None
        shipped = [source for source in force_include if source.startswith(f"examples/{adapter.example_dir}/")]
        assert any(source.endswith("/TEMPLATE") for source in shipped)
        assert any(source.endswith("/csauto.toml") for source in shipped)


def test_a_campaign_from_the_example_is_ready_to_prepare(tmp_path: Path) -> None:
    solver = list_solvers()[0]["name"]
    adapter = get_solver_adapter(solver)
    example = example_path(adapter)
    assert example is not None
    (example / "RUNS").mkdir(exist_ok=True)  # a local leftover must not be copied
    try:
        target = create_campaign(tmp_path / "study", solver, "docker")
    finally:
        if not any((example / "RUNS").iterdir()):
            (example / "RUNS").rmdir()

    assert not (target / "RUNS").exists()
    assert (target / "doe.csv").is_file()
    adapter.find_setup_file(target / "TEMPLATE")
    assert tomllib.loads((target / "csauto.toml").read_text()) == {"solver": solver, "runtime": "docker"}


def test_a_campaign_from_a_case_links_its_shared_dirs_and_lists_its_variables(tmp_path: Path) -> None:
    adapter = next(
        get_solver_adapter(solver["name"])
        for solver in list_solvers()
        if get_solver_adapter(solver["name"]).shared_dir_names
    )
    example = example_path(adapter)
    assert example is not None
    case = tmp_path / "mine" / "case"
    shutil.copytree(example / "TEMPLATE", case)
    (case / adapter.results_dirname).mkdir()
    for shared in adapter.shared_dir_names:
        (case.parent / shared).mkdir()

    target = create_campaign(tmp_path / "study", adapter.name, "docker", template=case)

    adapter.find_setup_file(target / "TEMPLATE")
    assert not (target / "TEMPLATE" / adapter.results_dirname).exists()
    for shared in adapter.shared_dir_names:
        assert (target / shared).is_symlink()
    with (target / "doe.csv").open(newline="", encoding="utf-8") as handle:
        header = next(csv.reader(handle))
    assert header == sorted(collect_template_variables(case, adapter=adapter))
    assert header


def test_new_campaign_refusals(tmp_path: Path) -> None:
    solver = list_solvers()[0]["name"]
    (tmp_path / "busy").mkdir()
    (tmp_path / "busy" / "file").write_text("x", encoding="utf-8")
    with pytest.raises(ValueError, match="not empty"):
        create_campaign(tmp_path / "busy", solver, "docker")
    with pytest.raises(ValueError, match="does not run with"):
        create_campaign(tmp_path / "a", solver, "kubernetes")
    (tmp_path / "empty_case").mkdir()
    with pytest.raises(ValueError, match="is not a"):
        create_campaign(tmp_path / "b", solver, "docker", template=tmp_path / "empty_case")


def test_a_case_without_variables_runs_as_one_baseline_case(tmp_path: Path) -> None:
    case = tmp_path / "plain"
    case.mkdir()
    (case / "stub.toml").write_text("steps = 3\n", encoding="utf-8")
    assert case_info(case, "stub")["variables"] == []

    target = create_campaign(tmp_path / "study", "stub", "native", template=case)

    headers, rows = load_doe(target / "doe.csv")
    assert headers == ["case_id"]
    assert [row["case_id"] for row in rows] == ["baseline"]
    generate_cases(headers, rows, target / "TEMPLATE", target / "RUNS", adapter=get_solver_adapter("stub"))
    assert (target / "RUNS" / "baseline" / "stub.toml").is_file()


def test_an_empty_campaign_waits_for_its_case_files(tmp_path: Path) -> None:
    solver = list_solvers()[0]["name"]
    target = create_campaign(tmp_path / "study", solver, "docker", empty=True)
    assert (target / "TEMPLATE").is_dir()
    assert not any((target / "TEMPLATE").iterdir())
    assert tomllib.loads((target / "csauto.toml").read_text())["solver"] == solver


def test_case_info_names_the_input_file_or_says_why_not(tmp_path: Path) -> None:
    solver = list_solvers()[0]["name"]
    adapter = get_solver_adapter(solver)
    example = example_path(adapter)
    assert example is not None
    info = case_info(example / "TEMPLATE", solver)
    assert (example / "TEMPLATE" / info["setup_file"]).is_file()
    assert info["variables"]
    with pytest.raises(ValueError, match=f"is not a {solver} case"):
        case_info(tmp_path, solver)


def _write(path: Path, text: str) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")
    return path


def test_assemble_case_checks_the_picked_files(tmp_path: Path) -> None:
    adapter = next(get_solver_adapter(s["name"]) for s in list_solvers() if get_solver_adapter(s["name"]).case_inputs)
    required = next(spec for spec in adapter.case_inputs if spec.required)
    with pytest.raises(ValueError, match="pick a file"):
        adapter.assemble_case(tmp_path / "a", {})
    with pytest.raises(ValueError, match="takes no"):
        adapter.assemble_case(tmp_path / "b", {"nonsense": [tmp_path]})
    single = _write(tmp_path / f"x{required.extensions[0]}", "")
    if not required.multiple:
        with pytest.raises(ValueError, match="single file"):
            adapter.assemble_case(tmp_path / "c", {required.key: [single, single]})


def test_every_listed_solver_can_be_built_from_its_example_files(tmp_path: Path) -> None:
    """Picking the example's own files gives a case csauto recognises, with the same variables."""
    for solver in list_solvers():
        adapter = get_solver_adapter(solver["name"])
        example = example_path(adapter)
        assert example is not None
        files: dict[str, list[Path]] = {}
        for spec in adapter.case_inputs:
            matches = sorted(
                path
                for path in example.rglob("*")
                if path.is_file() and path.suffix.lower() in spec.extensions and "RUNS" not in path.parts
            )
            if spec.rename_to:
                matches = [path for path in matches if path.name == spec.rename_to]
            if matches:
                files[spec.key] = matches if spec.multiple else matches[:1]
        target = create_campaign(tmp_path / solver["name"], solver["name"], "docker", files=files)
        adapter.find_setup_file(target / "TEMPLATE")
        expected = collect_template_variables(example / "TEMPLATE", adapter=adapter)
        with (target / "doe.csv").open(newline="", encoding="utf-8") as handle:
            assert set(next(csv.reader(handle))) == expected


def test_code_aster_export_is_written_or_relinked(tmp_path: Path) -> None:
    adapter = get_solver_adapter("code_aster")
    src = tmp_path / "src"
    comm = _write(src / "study.comm", "m = LIRE_MAILLAGE(UNITE=20)\nIMPR_RESU(UNITE=81, RESU=_F(RESULTAT=r))\n")
    mesh = _write(src / "deep" / "part.med", "")

    adapter.assemble_case(tmp_path / "generated", {"comm": [comm], "mesh": [mesh]})
    export = (tmp_path / "generated" / "TEMPLATE" / "study.export").read_text()
    assert "F comm study.comm D 1" in export
    assert "F mmed ../MESH/part.med D 20" in export
    assert "F rmed RESU/results_81.rmed R 81" in export
    assert (tmp_path / "generated" / "MESH" / "part.med").is_file()

    own = _write(src / "mine.export", "P time_limit 60\nF comm /home/me/study.comm D 1\nF mmed deep/part.med D 20\n")
    adapter.assemble_case(tmp_path / "relinked", {"comm": [comm], "mesh": [mesh], "export": [own]})
    relinked = (tmp_path / "relinked" / "TEMPLATE" / "mine.export").read_text()
    assert "P time_limit 60" in relinked
    assert "F comm study.comm D 1" in relinked
    assert "F mmed ../MESH/part.med D 20" in relinked
