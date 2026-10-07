from __future__ import annotations

import os
from datetime import datetime
from pathlib import Path

import pytest

from csauto.execution import RuntimeSelection, build_runtime_run_command
from csauto.registry import STATUS_DONE, STATUS_FAILED
from csauto.solvers import DEFAULT_SOLVER, SolverAdapter, available_solvers, get_solver_adapter
from csauto.solvers.code_aster import CodeAsterAdapter
from csauto.solvers.code_saturne import CodeSaturneAdapter
from csauto.solvers.stub import StubAdapter


class TestFactory:
    def test_default_is_code_saturne(self):
        adapter = get_solver_adapter(None)
        assert isinstance(adapter, CodeSaturneAdapter)
        assert adapter.name == DEFAULT_SOLVER

    def test_explicit_names(self):
        assert isinstance(get_solver_adapter("code_saturne"), CodeSaturneAdapter)
        assert isinstance(get_solver_adapter("code_aster"), CodeAsterAdapter)
        assert isinstance(get_solver_adapter("stub"), StubAdapter)

    def test_instances_are_memoized(self):
        assert get_solver_adapter("code_saturne") is get_solver_adapter(None)
        assert get_solver_adapter("code_aster") is get_solver_adapter("code_aster")
        assert get_solver_adapter("stub") is get_solver_adapter("stub")

    def test_name_is_normalized(self):
        assert isinstance(get_solver_adapter("  Code_Saturne "), CodeSaturneAdapter)

    def test_unknown_solver_raises(self):
        with pytest.raises(ValueError, match="Unknown solver"):
            get_solver_adapter("openfoam")

    def test_available_solvers(self):
        assert set(available_solvers()) == {"code_saturne", "code_aster", "stub"}

    def test_adapters_satisfy_protocol(self):
        assert isinstance(get_solver_adapter("code_saturne"), SolverAdapter)
        assert isinstance(get_solver_adapter("code_aster"), SolverAdapter)
        assert isinstance(get_solver_adapter("stub"), SolverAdapter)


class TestConfigSolverKey:
    def test_default(self, tmp_path):
        from csauto.config import load_config

        config_path = tmp_path / "csauto.toml"
        config_path.write_text("runtime = 'native'\n", encoding="utf-8")
        config = load_config(config_path)
        assert config.solver == "code_saturne"

    def test_explicit_solver(self, tmp_path):
        from csauto.config import load_config

        config_path = tmp_path / "csauto.toml"
        config_path.write_text("solver = 'stub'\n", encoding="utf-8")
        config = load_config(config_path)
        assert config.solver == "stub"

    def test_invalid_solver_raises(self, tmp_path):
        from csauto.config import load_config

        config_path = tmp_path / "csauto.toml"
        config_path.write_text("solver = 'openfoam'\n", encoding="utf-8")
        with pytest.raises(ValueError, match="Invalid solver"):
            load_config(config_path)


class TestCodeSaturneAdapter:
    @pytest.fixture()
    def adapter(self):
        return get_solver_adapter("code_saturne")

    def test_conventions(self, adapter):
        assert adapter.results_dirname == "RESU"
        assert adapter.shared_dir_names == ("MESH", "POST")
        assert adapter.template_input_names == {"setup.xml", "run.cfg"}
        assert adapter.default_docker_image == "simvia/code_saturne"
        assert adapter.container_root == "/home/code_saturne"
        assert adapter.default_compare_kind == "setup.xml"
        assert [a.name for a in adapter.control_actions] == ["stop", "extend", "checkpoint", "flush"]
        assert adapter.control_action("extend").value_label

    def test_run_argv(self, adapter):
        assert adapter.run_argv(Path("/runs/case1"), 2, 4) == ["run", "--case", ".", "-n", "2", "--nt", "4"]

    def test_run_argv_with_extra_args(self, adapter):
        argv = adapter.run_argv("/runs/case1", 1, 1, run_args=["--parametric-args=--restart=x", ""])
        assert argv[-1] == "--parametric-args=--restart=x"
        assert "" not in argv

    def test_gui_argv(self, adapter):
        assert adapter.gui_argv("DATA/setup.xml") == ["gui", "DATA/setup.xml"]

    def test_build_run_command_matches_execution_native(self, adapter, tmp_path):
        selection = RuntimeSelection(runtime="native", docker_image="img", saturne_bin="/bin/true")
        case_dir = tmp_path / "case1"
        expected = build_runtime_run_command(case_dir, 2, 4, selection)
        assert adapter.build_run_command(case_dir, 2, 4, selection) == expected
        assert expected == ["nohup", "/bin/true", *adapter.run_argv(case_dir, 2, 4)]

    def test_build_slurm_script_is_none_outside_singularity(self, adapter, tmp_path):
        selection = RuntimeSelection(runtime="native", docker_image="img", saturne_bin="/bin/true")
        assert adapter.build_slurm_script(tmp_path / "case1", 1, 1, selection) is None

    def test_mpi_env(self, adapter):
        assert adapter.mpi_env(None) == {}
        assert adapter.mpi_env("  ") == {}
        assert adapter.mpi_env("--bind-to core") == {"CS_MPIEXEC_OPTIONS": "--bind-to core"}

    def test_detect_outcome_done(self, adapter, tmp_path):
        case_dir = tmp_path / "case1"
        case_dir.mkdir()
        (case_dir / "run_solver.log").write_text("... END OF CALCULATION ...\n", encoding="utf-8")
        assert adapter.detect_outcome(case_dir) == STATUS_DONE

    def test_read_progress_prefers_run_status(self, adapter, tmp_path):
        case_dir = tmp_path / "case1"
        run_dir = case_dir / "RESU" / "run1"
        run_dir.mkdir(parents=True)
        (run_dir / "run_status.running").write_text("time step: 42\n", encoding="utf-8")
        (case_dir / "listing").write_text("Iteration 7\n", encoding="utf-8")
        assert adapter.read_progress(case_dir) == 42

    def test_read_progress_falls_back_to_log(self, adapter, tmp_path):
        case_dir = tmp_path / "case1"
        case_dir.mkdir()
        (case_dir / "listing").write_text("Iteration 7\n", encoding="utf-8")
        assert adapter.read_progress(case_dir) == 7

    def test_locate_case_file(self, adapter, tmp_path):
        case_dir = tmp_path / "case1"
        run_dir = case_dir / "RESU" / "run1"
        run_dir.mkdir(parents=True)
        (run_dir / "run_solver.log").write_text("x\n", encoding="utf-8")
        assert adapter.locate_case_file(case_dir, "run_solver.log") == run_dir / "run_solver.log"


class TestCodeAsterAdapter:
    @pytest.fixture()
    def adapter(self):
        return get_solver_adapter("code_aster")

    def test_launch_runs_a_copy_of_the_export_with_n_and_nt(self, adapter, tmp_path):
        case_dir = tmp_path / "RUNS" / "case1"
        case_dir.mkdir(parents=True)
        export = case_dir / "cube.export"
        export.write_text("P ncpus 1\nP mpi_nbcpu 1\nF comm study.comm D 1\n", encoding="utf-8")

        adapter.prepare_launch(case_dir, 4, 2)

        run_export = (case_dir / ".csauto.export").read_text(encoding="utf-8")
        assert run_export.splitlines() == ["F comm study.comm D 1", "P mpi_nbcpu 4", "P ncpus 2"]
        assert export.read_text(encoding="utf-8").startswith("P ncpus 1")  # the case's export is untouched
        assert (case_dir / "RESU").is_dir()
        assert adapter.run_argv(case_dir, 4, 2) == [".csauto.export"]
        # The copy is hidden, so it never counts as a second export.
        assert adapter.find_setup_file(case_dir) == export

    def test_find_setup_file_names_the_candidates(self, adapter, tmp_path):
        with pytest.raises(FileNotFoundError):
            adapter.find_setup_file(tmp_path)
        (tmp_path / "a.export").write_text("", encoding="utf-8")
        (tmp_path / "b.export").write_text("", encoding="utf-8")
        with pytest.raises(ValueError, match=r"a\.export, b\.export"):
            adapter.find_setup_file(tmp_path)

    def test_generic_launch_in_every_runtime(self, adapter, tmp_path, monkeypatch):
        monkeypatch.delenv("DISPLAY", raising=False)
        case_dir = tmp_path / "RUNS" / "case1"
        case_dir.mkdir(parents=True)
        native = adapter.build_run_command(
            case_dir, 1, 1, RuntimeSelection("native", "img", saturne_bin="/x/run_aster")
        )
        assert native == ["nohup", "/x/run_aster", ".csauto.export"]
        apptainer = adapter.build_run_command(
            case_dir,
            1,
            1,
            RuntimeSelection("singularity", "img", singularity_bin="apptainer", singularity_image="a.sif"),
        )
        assert apptainer[-6:] == [
            "a.sif",
            "bash",
            "-c",
            'source /opt/activate.sh && exec "$0" "$@"',
            "run_aster",
            ".csauto.export",
        ]

    def test_detect_outcome_reads_the_diagnostic_on_stdout(self, adapter, tmp_path):
        case_dir = tmp_path / "case1"
        case_dir.mkdir()
        stdout = case_dir / "csauto.stdout"
        stdout.write_text("--- DIAGNOSTIC JOB : OK\n", encoding="utf-8")
        assert adapter.detect_outcome(case_dir) == STATUS_DONE
        stdout.write_text("--- DIAGNOSTIC JOB : <A>_ALARM\n", encoding="utf-8")
        assert adapter.detect_outcome(case_dir) == STATUS_DONE
        for verdict in ("<F>_ABNORMAL_ABORT", "<F>_ERROR", "<S>_CPU_LIMIT", "NOOK_TEST_RESU", "?"):
            stdout.write_text(f"--- DIAGNOSTIC JOB : {verdict}\n", encoding="utf-8")
            assert adapter.detect_outcome(case_dir) == STATUS_FAILED, verdict
        stdout.write_text("still running\n", encoding="utf-8")
        assert adapter.detect_outcome(case_dir) is None

    def test_detect_outcome_ignores_logs_from_previous_runs(self, adapter, tmp_path):
        case_dir = tmp_path / "case1"
        case_dir.mkdir()
        stdout = case_dir / "csauto.stdout"
        stdout.write_text("--- DIAGNOSTIC JOB : OK\n", encoding="utf-8")
        relaunch = datetime.fromtimestamp(stdout.stat().st_mtime + 60)
        assert adapter.detect_outcome(case_dir, start_time=relaunch.isoformat()) is None

    def test_results_folder_is_the_single_run(self, adapter, tmp_path):
        case_dir = tmp_path / "case1"
        case_dir.mkdir()
        assert adapter.list_run_dirs(case_dir) == []
        (case_dir / "RESU").mkdir()
        assert adapter.list_run_dirs(case_dir) == [case_dir / "RESU"]

    def test_export_compare_kind_resolves_to_the_case_export(self, adapter, tmp_path):
        (tmp_path / "study.export").write_text("", encoding="utf-8")
        assert adapter.locate_case_file(tmp_path, "export") == tmp_path / "study.export"


class TestStubAdapter:
    @pytest.fixture()
    def adapter(self):
        return get_solver_adapter("stub")

    def _write_stub_log(self, case_dir, lines):
        run_dir = case_dir / "OUT" / "run_0001"
        run_dir.mkdir(parents=True)
        (run_dir / "stub.log").write_text("\n".join(lines) + "\n", encoding="utf-8")
        return run_dir

    def test_run_argv_shape(self, adapter):
        argv = adapter.run_argv(Path("/runs/case1"), 1, 5)
        assert argv[0] == "-c"
        assert len(argv) == 2  # the script reads its steps from stub.toml, in the case folder

    def test_find_setup_file(self, adapter, tmp_path):
        with pytest.raises(FileNotFoundError):
            adapter.find_setup_file(tmp_path)
        (tmp_path / "stub.toml").write_text("steps = 5\n", encoding="utf-8")
        assert adapter.find_setup_file(tmp_path) == tmp_path / "stub.toml"

    def test_detect_outcome(self, adapter, tmp_path):
        case_dir = tmp_path / "case1"
        assert adapter.detect_outcome(case_dir) is None
        self._write_stub_log(case_dir, ["step 1", "STUB CALCULATION COMPLETE"])
        assert adapter.detect_outcome(case_dir) == STATUS_DONE

    def test_detect_outcome_failed(self, adapter, tmp_path):
        case_dir = tmp_path / "case1"
        self._write_stub_log(case_dir, ["step 1", "STUB CALCULATION FAILED"])
        assert adapter.detect_outcome(case_dir) == STATUS_FAILED

    def test_read_progress(self, adapter, tmp_path):
        case_dir = tmp_path / "case1"
        self._write_stub_log(case_dir, ["step 1", "step 2", "step 3"])
        assert adapter.read_progress(case_dir) == 3

    def test_base_defaults(self, adapter, tmp_path):
        assert adapter.mpi_env("--anything") == {}
        assert adapter.find_residuals_files(tmp_path) == []
        assert adapter.find_performance_log(tmp_path) is None
        with pytest.raises(ValueError, match="GUI not supported"):
            adapter.gui_argv("x")
        with pytest.raises(ValueError, match="Restart not supported"):
            adapter.build_restart_args(tmp_path, None, None, None)
        with pytest.raises(ValueError, match="Invalid control action"):
            adapter.apply_control(tmp_path, "extend", value=5)
        with pytest.raises(FileNotFoundError):
            adapter.apply_control(tmp_path, "stop")

    def test_list_result_files(self, adapter, tmp_path):
        case_dir = tmp_path / "case1"
        run_dir = self._write_stub_log(case_dir, ["step 1"])
        (run_dir / "extra.txt").write_text("x", encoding="utf-8")
        files = adapter.list_result_files(case_dir)
        assert sorted(files) == ["OUT/run_0001/extra.txt", "OUT/run_0001/stub.log"]


def test_code_saturne_performance_fields_derive_from_columns() -> None:
    from csauto.solvers.code_saturne import CodeSaturneAdapter

    adapter = CodeSaturneAdapter()
    assert adapter.performance_fields == tuple(c.key for c in adapter.performance_columns)
    assert all(c.label for c in adapter.performance_columns)
    assert {c.kind for c in adapter.performance_columns} <= {"time", "int", "float", "text"}


def test_default_compare_kind_derives_from_first_compare_kind() -> None:
    from csauto.solvers.code_saturne import CodeSaturneAdapter
    from csauto.solvers.stub import StubAdapter

    assert CodeSaturneAdapter().default_compare_kind == "setup.xml"
    assert StubAdapter().default_compare_kind == "stub.toml"


def test_code_aster_declares_doe_row_compare_kind() -> None:
    from csauto.solvers.base import CompareKind
    from csauto.solvers.code_aster import CodeAsterAdapter

    adapter = CodeAsterAdapter()
    assert adapter.compare_kinds == (CompareKind("export", "Export file"), CompareKind("doe_row.csv", "doe_row.csv"))
    assert adapter.default_compare_kind == "export"


def test_code_saturne_exposes_every_capability_and_panel() -> None:
    """Regression guard: the production solver must not lose anything."""
    from csauto.solvers.base import ALL_DASHBOARD_PANELS
    from csauto.solvers.code_saturne import CodeSaturneAdapter

    adapter = CodeSaturneAdapter()
    assert adapter.capabilities == frozenset(
        {"residuals", "probes", "performance", "compare", "control", "restart", "gui"}
    )
    assert adapter.dashboard_panels == ALL_DASHBOARD_PANELS


def test_code_aster_capabilities_are_limited_to_compare() -> None:
    from csauto.solvers.code_aster import CodeAsterAdapter

    adapter = CodeAsterAdapter()
    assert adapter.capabilities == frozenset({"compare"})
    assert adapter.dashboard_panels == ("status", "compare", "tail", "errors")


def test_stub_capabilities_cover_compare_and_control() -> None:
    from csauto.solvers.stub import StubAdapter

    adapter = StubAdapter()
    assert adapter.capabilities == frozenset({"compare", "control"})
    assert adapter.dashboard_panels == ("status", "compare", "tail", "errors")
    assert adapter.performance_fields == ()


def test_every_adapter_declares_feedable_panels_in_display_order() -> None:
    """Each adapter chooses its tabs; a tab it cannot feed, or an unknown name, is a bug."""
    from csauto.solvers import available_solvers, get_solver_adapter
    from csauto.solvers.base import ALL_DASHBOARD_PANELS, GENERIC_PANELS

    for name in available_solvers():
        adapter = get_solver_adapter(name)
        assert "dashboard_panels" in type(adapter).__dict__, f"{name} must declare dashboard_panels"
        panels = adapter.dashboard_panels
        assert set(panels) <= set(ALL_DASHBOARD_PANELS), f"{name} declares unknown panels"
        assert list(panels) == [p for p in ALL_DASHBOARD_PANELS if p in panels], f"{name} panels out of order"
        for panel in panels:
            assert panel in GENERIC_PANELS or panel in adapter.capabilities, f"{name} cannot feed {panel!r}"


def test_adapter_may_leave_out_a_panel_it_could_feed() -> None:
    from csauto.solvers.stub import StubAdapter

    class QuietStub(StubAdapter):
        dashboard_panels = ("status", "tail")

    adapter = QuietStub()
    assert "compare" in adapter.capabilities
    assert adapter.dashboard_panels == ("status", "tail")


def test_adapter_cannot_declare_capabilities() -> None:
    from csauto.solvers.base import SolverAdapter

    with pytest.raises(TypeError, match="must not declare 'capabilities'"):

        class BadAdapter(SolverAdapter):
            capabilities = frozenset({"residuals"})


def test_performance_parser_implies_declared_columns() -> None:
    """A parser without columns is dead code: the UI needs columns to draw the table."""
    from csauto.solvers import available_solvers, get_solver_adapter

    for name in available_solvers():
        adapter = get_solver_adapter(name)
        if adapter._provides("parse_performance"):
            assert adapter.performance_columns, f"{name} parses performance but declares no columns"


def test_control_implementation_implies_declared_actions() -> None:
    """apply_control without control_actions can never be reached: every route checks the set first."""
    from csauto.solvers import available_solvers, get_solver_adapter

    for name in available_solvers():
        adapter = get_solver_adapter(name)
        if adapter._provides("apply_control"):
            assert adapter.control_actions, f"{name} implements apply_control but declares no actions"


def test_code_saturne_detect_outcome_reads_the_run_status_failure_marker(tmp_path) -> None:
    """A crash before the solver starts (missing mesh) writes no solver log, only run_status.failed."""
    adapter = get_solver_adapter("code_saturne")
    case_dir = tmp_path / "case0001"
    run_dir = case_dir / "RESU" / "20260911-1326"
    run_dir.mkdir(parents=True)
    (run_dir / "run_status.failed").write_text("", encoding="utf-8")

    assert adapter.detect_outcome(case_dir) == STATUS_FAILED


def test_code_saturne_detect_outcome_reads_the_time_limit_marker(tmp_path) -> None:
    adapter = get_solver_adapter("code_saturne")
    case_dir = tmp_path / "case0001"
    run_dir = case_dir / "RESU" / "20260911-1326"
    run_dir.mkdir(parents=True)
    (run_dir / "run_status.exceeded_time_limit").write_text("", encoding="utf-8")

    assert adapter.detect_outcome(case_dir) == STATUS_FAILED


def test_code_saturne_detect_outcome_ignores_progress_markers(tmp_path) -> None:
    """run_status.running and friends are progress states, not failures."""
    adapter = get_solver_adapter("code_saturne")
    case_dir = tmp_path / "case0001"
    run_dir = case_dir / "RESU" / "20260911-1326"
    run_dir.mkdir(parents=True)
    for name in ("run_status.running", "run_status.preprocessing", "run_status.saving"):
        (run_dir / name).write_text("", encoding="utf-8")

    assert adapter.detect_outcome(case_dir) is None


def test_code_saturne_detect_outcome_ignores_a_stale_failure_marker(tmp_path) -> None:
    """A marker left by a previous run must not override the current run's log."""
    import os
    import time

    adapter = get_solver_adapter("code_saturne")
    case_dir = tmp_path / "case0001"
    old_run = case_dir / "RESU" / "20260101-0000"
    old_run.mkdir(parents=True)
    (old_run / "run_status.failed").write_text("", encoding="utf-8")
    os.utime(old_run / "run_status.failed", (1000, 1000))
    new_run = case_dir / "RESU" / "20260911-1326"
    new_run.mkdir(parents=True)
    (new_run / "run_solver.log").write_text("END OF CALCULATION\n", encoding="utf-8")
    start_time = datetime.fromtimestamp(time.time() - 60).isoformat(timespec="seconds")

    assert adapter.detect_outcome(case_dir, start_time) == STATUS_DONE


def test_code_saturne_finds_its_input_files(tmp_path) -> None:
    adapter = get_solver_adapter("code_saturne")
    with pytest.raises(FileNotFoundError):
        adapter.find_setup_file(tmp_path)
    assert adapter.find_run_config(tmp_path) is None

    (tmp_path / "DATA").mkdir()
    (tmp_path / "DATA" / "setup.xml").write_text("<xml/>", encoding="utf-8")
    (tmp_path / "DATA" / "run.cfg").write_text("", encoding="utf-8")
    assert adapter.find_setup_file(tmp_path) == tmp_path / "DATA" / "setup.xml"
    assert adapter.find_run_config(tmp_path) == tmp_path / "DATA" / "run.cfg"

    nested = tmp_path / "other"
    for sub in ("a", "b"):
        (nested / sub).mkdir(parents=True)
        (nested / sub / "setup.xml").write_text("<xml/>", encoding="utf-8")
    with pytest.raises(ValueError, match=r"Multiple setup\.xml"):
        adapter.find_setup_file(nested)


def test_code_saturne_locates_run_files_newest_first(tmp_path) -> None:
    adapter = get_solver_adapter("code_saturne")
    case_dir = tmp_path / "case0001"
    old_run = case_dir / "RESU" / "old"
    new_run = case_dir / "RESU" / "new"
    for run_dir in (old_run, new_run):
        run_dir.mkdir(parents=True)
    (old_run / "performance.log").write_text("old", encoding="utf-8")
    (new_run / "listing").write_text("new", encoding="utf-8")
    os.utime(old_run, (1, 1))
    (case_dir / "setup.xml").write_text("<xml/>", encoding="utf-8")

    assert adapter.locate_case_file(case_dir, "listing") == new_run / "listing"
    assert adapter.locate_case_file(case_dir, "performance.log") == old_run / "performance.log"
    assert adapter.find_performance_log(case_dir) == old_run / "performance.log"
    assert adapter.locate_case_file(case_dir, "setup.xml") == case_dir / "setup.xml"
    assert adapter.locate_case_file(case_dir, "setup.log") is None
