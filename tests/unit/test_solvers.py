from __future__ import annotations

import pytest

from csauto.execution import RuntimeSelection, build_runtime_run_command
from csauto.registry import STATUS_DONE, STATUS_FAILED
from csauto.solvers import DEFAULT_SOLVER, SolverAdapter, available_solvers, get_solver_adapter
from csauto.solvers.code_saturne import CodeSaturneAdapter
from csauto.solvers.code_aster import CodeAsterAdapter
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
        assert adapter.control_actions == {"stop", "extend", "checkpoint", "flush"}

    def test_run_argv(self, adapter):
        assert adapter.run_argv("/runs/case1", 2, 4) == ["run", "--case", "/runs/case1", "-n", "2", "--nt", "4"]

    def test_run_argv_with_extra_args(self, adapter):
        argv = adapter.run_argv("/runs/case1", 1, 1, run_args=["--parametric-args=--restart=x", ""])
        assert argv[-1] == "--parametric-args=--restart=x"
        assert "" not in argv

    def test_gui_argv(self, adapter):
        assert adapter.gui_argv("/runs/case1/setup.xml") == ["gui", "/runs/case1/setup.xml"]

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

    def test_detect_outcome_done(self, adapter, tmp_path):
        case_dir = tmp_path / "case1"
        logpath = case_dir / "RESU/LOGS"
        logpath.mkdir(parents=True, exist_ok=True)
        (logpath / "run_solver.log").write_text("DIAGNOSTIC JOB : OK\n", encoding="utf-8")
        assert adapter.detect_outcome(case_dir) == STATUS_DONE


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
        argv = adapter.run_argv("/runs/case1", 1, 5)
        assert argv[0] == "-c"
        assert argv[-2:] == ["/runs/case1", "5"]

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


def test_adapter_base_defaults_expose_all_dashboard_panels() -> None:
    from csauto.solvers.base import ALL_DASHBOARD_PANELS
    from csauto.solvers.stub import StubAdapter

    adapter = StubAdapter()
    assert adapter.dashboard_panels == ALL_DASHBOARD_PANELS
    assert adapter.performance_fields == ()


def test_default_compare_kind_derives_from_first_compare_kind() -> None:
    from csauto.solvers.code_saturne import CodeSaturneAdapter
    from csauto.solvers.stub import StubAdapter

    assert CodeSaturneAdapter().default_compare_kind == "setup.xml"
    assert StubAdapter().default_compare_kind == "stub.toml"
