"""Real runs of the shipped examples in the solvers' docker images.

Opt-in: set CSAUTO_DOCKER_TESTS=1 with docker running and the images pulled
(simvia/code_saturne, simvia/code_aster:17.4.0). Cases are written under
CSAUTO_DOCKER_TEST_DIR (default ~/.cache/csauto-docker-tests), because Docker
Desktop cannot mount /tmp from WSL2. The filesystem-only test always runs.
"""

from __future__ import annotations

import os
import shutil
import time
import uuid
from pathlib import Path

import pytest

from csauto.cli import main
from csauto.logs import list_tail_files
from csauto.registry import STATUS_DONE, STATUS_FAILED, STATUS_RUNNING
from csauto.runner import refresh_status
from csauto.solvers import get_solver_adapter

EXAMPLES = Path(__file__).resolve().parents[2] / "examples"
needs_docker = pytest.mark.skipif(
    os.environ.get("CSAUTO_DOCKER_TESTS") != "1",
    reason="set CSAUTO_DOCKER_TESTS=1 with docker and the solver images pulled",
)


@pytest.fixture()
def study_dir():
    base = Path(os.environ.get("CSAUTO_DOCKER_TEST_DIR", Path.home() / ".cache" / "csauto-docker-tests"))
    path = base / uuid.uuid4().hex[:8]
    path.mkdir(parents=True)
    yield path
    shutil.rmtree(path, ignore_errors=True)


def _copy_example(name: str, dest: Path, rows: int) -> None:
    for entry in (EXAMPLES / name).iterdir():
        if entry.name in {"RUNS", "README.md"}:
            continue
        target = dest / entry.name
        shutil.copytree(entry, target) if entry.is_dir() else shutil.copy(entry, target)
    lines = (dest / "doe.csv").read_text(encoding="utf-8").splitlines()
    (dest / "doe.csv").write_text("\n".join(lines[: rows + 1]) + "\n", encoding="utf-8")


def _run_campaign(study: Path, solver: str, monkeypatch, timeout: float = 600.0) -> dict[str, dict]:
    monkeypatch.chdir(study)
    assert main(["prepare", "doe.csv", "TEMPLATE", "RUNS"]) == 0
    assert main(["run", "RUNS", "--n", "1", "--nt", "1", "--max-parallel", "2"]) == 0
    adapter = get_solver_adapter(solver)
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        rows = {row["case_id"]: row for row in refresh_status(study / "RUNS", adapter=adapter)}
        if not any(row["status"] == STATUS_RUNNING for row in rows.values()):
            return rows
        time.sleep(3)
    pytest.fail(f"{solver} runs did not finish in {timeout} s")


@needs_docker
def test_code_saturne_example_runs_in_docker(study_dir: Path, monkeypatch) -> None:
    _copy_example("single-case", study_dir, rows=2)
    setup = study_dir / "TEMPLATE" / "DATA" / "setup.xml"
    setup.write_text(
        setup.read_text(encoding="utf-8").replace("<iterations>500</iterations>", "<iterations>20</iterations>")
    )

    rows = _run_campaign(study_dir, "code_saturne", monkeypatch)

    assert {row["status"] for row in rows.values()} == {STATUS_DONE}
    assert {row["last_iter"] for row in rows.values()} == {20}
    adapter = get_solver_adapter("code_saturne")
    case_dir = study_dir / "RUNS" / "case0001"
    assert list_tail_files(case_dir, adapter)[0] == "run_solver.log"
    assert adapter.find_residuals_files(case_dir) and adapter.list_probe_files(case_dir)
    assert not any(p.name.startswith(".") for p in (study_dir / "RUNS").iterdir() if p.is_dir())


@needs_docker
def test_code_aster_example_runs_in_docker(study_dir: Path, monkeypatch) -> None:
    # Row 1 imposes a displacement the command file rejects on purpose; row 2 is valid.
    _copy_example("codeaster-cube", study_dir, rows=2)

    rows = _run_campaign(study_dir, "code_aster", monkeypatch)

    assert rows["case0001"]["status"] == STATUS_FAILED
    assert rows["case0002"]["status"] == STATUS_DONE
    case_dir = study_dir / "RUNS" / "case0002"
    assert (case_dir / "RESU" / "myresults.rmed").is_file()
    assert (case_dir / ".csauto.export").is_file()  # the export actually run, with n and nt
    assert list_tail_files(case_dir, get_solver_adapter("code_aster"))[0] == "csauto.stdout"
    # Preparing again after a launch must still recognise every case.
    assert main(["prepare", "doe.csv", "TEMPLATE", "RUNS"]) == 0


def test_generate_doctor_and_cleanup_with_code_aster_solver(tmp_path: Path) -> None:
    from csauto.doe import generate_cases
    from csauto.maintenance import cleanup_runs, run_doctor

    adapter = get_solver_adapter("code_aster")
    template_dir = tmp_path / "TEMPLATE"
    template_dir.mkdir()
    (tmp_path / "MESH").mkdir()
    (tmp_path / "MESH" / "mesh.med").write_text("x\n", encoding="utf-8")
    (template_dir / "study.export").write_text(
        "P time_limit 300\nF comm study.comm D 1\nF mmed ../MESH/mesh.med D 20\n", encoding="utf-8"
    )
    (template_dir / "study.comm").write_text("DEBUT()\nE = {young}\nFIN()\n", encoding="utf-8")
    output_dir = tmp_path / "RUNS"

    generate_cases(
        ["case_id", "young"],
        [{"case_id": "case0001", "young": "1.5"}, {"case_id": "case0002", "young": "2.5"}],
        template_dir,
        output_dir,
        adapter=adapter,
    )

    assert "E = 1.5" in (output_dir / "case0001" / "study.comm").read_text(encoding="utf-8")
    assert (output_dir / "MESH").is_symlink()
    items = run_doctor(output_dir, check_display=False, adapter=adapter)
    assert "solver setup file present in every case" in [item.message for item in items]
    assert not any(item.level == "fail" for item in items)

    (output_dir / "case0001" / "RESU").mkdir()
    (output_dir / "case0001" / "RESU" / "result.rmed").write_text("x", encoding="utf-8")
    assert cleanup_runs(output_dir, prune_resu=True, keep_last=1, adapter=adapter).resu_removed == 0
    assert cleanup_runs(output_dir, prune_resu=True, keep_last=0, adapter=adapter).resu_removed == 1
    assert not (output_dir / "case0001" / "RESU").exists()
