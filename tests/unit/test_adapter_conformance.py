"""Contract checks every registered solver adapter must pass.

Adding a solver? Register it in csauto/solvers/__init__.py, then add a
`sample_<name>` function below that writes a small *finished* case the way
your solver leaves it (input file, logs, results). Every test here then runs
against your adapter, and tells you what the dashboard would miss.
"""

from __future__ import annotations

from pathlib import Path

import pytest

from csauto.execution import RuntimeSelection
from csauto.logs import list_tail_files
from csauto.registry import STATUS_DONE
from csauto.runner import final_outcome
from csauto.solvers import available_solvers, get_solver_adapter
from csauto.solvers.base import ALL_DASHBOARD_PANELS, GENERIC_PANELS


def sample_code_saturne(case_dir: Path) -> None:
    (case_dir / "DATA").mkdir(parents=True)
    (case_dir / "DATA" / "setup.xml").write_text("<code_saturne_GUI/>", encoding="utf-8")
    run_dir = case_dir / "RESU" / "20260101-1200"
    (run_dir / "monitoring").mkdir(parents=True)
    (run_dir / "profiles").mkdir()
    (run_dir / "run_solver.log").write_text(
        "Variable     Rhs norm\n------\n 1 Velocity 1.0e-3\n\n END OF CALCULATION\n", encoding="utf-8"
    )
    (run_dir / "residuals.csv").write_text("iteration,velocity,pressure\n1,1e-2,1e-3\n2,1e-3,1e-4\n", encoding="utf-8")
    (run_dir / "monitoring" / "probes_Velocity.csv").write_text("t,1,2\n0.1,1.0,2.0\n0.2,1.1,2.1\n", encoding="utf-8")
    (run_dir / "profiles" / "line_U.csv").write_text("s,U\n0.0,1.0\n1.0,1.2\n", encoding="utf-8")
    (run_dir / "performance.log").write_text("total elapsed time: 12.5\nmpi ranks: 2\n", encoding="utf-8")
    (run_dir / "summary").write_text("run summary\n", encoding="utf-8")


def sample_code_aster(case_dir: Path) -> None:
    case_dir.mkdir(parents=True)
    (case_dir / "study.export").write_text("F comm study.comm D 1\nF mess output.mess R 6\n", encoding="utf-8")
    (case_dir / "study.comm").write_text("DEBUT()\nFIN()\n", encoding="utf-8")
    (case_dir / "csauto.stdout").write_text("...\n--- DIAGNOSTIC JOB : OK\n", encoding="utf-8")
    (case_dir / "output.mess").write_text("--- DIAGNOSTIC JOB : OK\n", encoding="utf-8")
    (case_dir / "RESU").mkdir()
    (case_dir / "RESU" / "results.rmed").write_bytes(b"\x89HDF\x00")


def sample_stub(case_dir: Path) -> None:
    run_dir = case_dir / "OUT" / "run_0001"
    run_dir.mkdir(parents=True)
    (case_dir / "stub.toml").write_text("steps = 2\n", encoding="utf-8")
    (run_dir / "stub.log").write_text("step 1\nstep 2\nSTUB CALCULATION COMPLETE\n", encoding="utf-8")


@pytest.fixture(params=available_solvers())
def adapter(request):
    return get_solver_adapter(request.param)


@pytest.fixture()
def finished_case(adapter, tmp_path: Path) -> Path:
    sample = globals().get(f"sample_{adapter.name}")
    assert sample, f"add a sample_{adapter.name}(case_dir) function to {__file__}"
    case_dir = tmp_path / "RUNS" / "case0001"
    sample(case_dir)
    (case_dir / "doe_row.csv").write_text("case_id\ncase0001\n", encoding="utf-8")
    for name in ("csauto.stdout", "csauto.stderr"):
        if not (case_dir / name).exists():
            (case_dir / name).write_text("", encoding="utf-8")
    return case_dir


def test_required_declarations(adapter) -> None:
    for attribute in ("name", "native_bin_name", "results_dirname"):
        assert getattr(adapter, attribute), f"{adapter.name}: {attribute} is required"
    if "docker" in adapter.supported_runtimes:
        assert adapter.default_docker_image, "docker is supported: declare default_docker_image"
    if adapter.supported_runtimes & {"docker", "singularity"}:
        assert adapter.container_bin_name, "container runtimes are supported: declare container_bin_name"


def test_declared_panels_are_known_ordered_and_feedable(adapter) -> None:
    panels = adapter.dashboard_panels
    assert set(panels) <= set(ALL_DASHBOARD_PANELS), "unknown panel name"
    assert list(panels) == [p for p in ALL_DASHBOARD_PANELS if p in panels], "panels out of display order"
    for panel in panels:
        assert panel in GENERIC_PANELS or panel in adapter.capabilities, f"cannot feed the {panel!r} panel"


def test_capabilities_come_with_what_they_need(adapter) -> None:
    caps = adapter.capabilities
    if "performance" in caps:
        assert adapter._provides("find_performance_log") and adapter._provides("parse_performance")
    if "probes" in caps:
        assert adapter._provides("locate_probe_files"), "list_probe_files needs locate_probe_files"
    if "restart" in caps:
        assert adapter.restart_modes, "build_restart_args needs restart_modes for the Restart dialog"
    if "control" in caps:
        assert adapter._provides("apply_control"), "control_actions need apply_control"
    for options in (adapter.control_actions, adapter.restart_modes, adapter.compare_kinds):
        for field in (0, 1):  # names identify options, labels tell them apart in the dashboard
            values = [option[field] for option in options]
            assert len(values) == len(set(values)), f"duplicate names or labels in {options}"


def test_launch_command_for_every_supported_runtime(adapter, finished_case: Path) -> None:
    argv = adapter.run_argv(finished_case, 2, 1)
    assert all(isinstance(arg, str) for arg in argv)
    selections = {
        "native": RuntimeSelection("native", "image", saturne_bin="/usr/bin/solver"),
        "docker": RuntimeSelection("docker", adapter.default_docker_image or "image"),
        "singularity": RuntimeSelection("singularity", "image", singularity_bin="apptainer", singularity_image="a.sif"),
    }
    for runtime in adapter.supported_runtimes:
        command = adapter.build_run_command(finished_case, 2, 1, selections[runtime])
        assert command and all(isinstance(part, str) for part in command), runtime


def test_finished_case_reads_as_done(adapter, finished_case: Path) -> None:
    assert final_outcome(adapter, finished_case, None) == STATUS_DONE


def test_log_files_resolve(adapter, finished_case: Path) -> None:
    tail_files = list_tail_files(finished_case, adapter)
    assert tail_files, "the Log Tail panel would be empty"
    for name in tail_files:
        assert adapter.locate_case_file(finished_case, name), f"Log Tail offers {name!r} but cannot open it"
    assert adapter.locate_case_file(finished_case, tail_files[0])


def test_compare_kinds_resolve(adapter, finished_case: Path) -> None:
    for kind in adapter.compare_kinds:
        assert adapter.locate_case_file(finished_case, kind.value), f"compare kind {kind.value!r} not found"


def test_run_dirs_live_in_the_results_folder(adapter, finished_case: Path) -> None:
    results_root = adapter.results_root(finished_case)
    run_dirs = adapter.list_run_dirs(finished_case)
    assert run_dirs, "a finished case should have at least one run folder (see list_run_dirs)"
    for run_dir in run_dirs:
        assert run_dir == results_root or run_dir.parent == results_root, "Clean deletes these folders"
    for path in adapter.list_result_files(finished_case):
        assert (finished_case / path).is_file()


def test_analytics_return_data_when_offered(adapter, finished_case: Path) -> None:
    caps = adapter.capabilities
    if "residuals" in caps:
        files = adapter.find_residuals_files(finished_case)
        rows = adapter.parse_live_residuals(finished_case)[1]
        assert files or rows, "residuals offered but none found"
    if "probes" in caps:
        names = adapter.list_probe_files(finished_case)
        assert names, "probes offered but none listed"
        paths = adapter.locate_probe_files(finished_case, names[0])
        assert paths and adapter.read_probe_file(paths[0])[0], "probe listed but unreadable"
    if "performance" in caps:
        log = adapter.find_performance_log(finished_case)
        assert log, "performance offered but no log found"
        values = adapter.parse_performance(log)
        assert any(values.get(key) for key in adapter.performance_fields), "no declared timing key parsed"
