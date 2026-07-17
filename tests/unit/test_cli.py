from __future__ import annotations

from pathlib import Path

import pytest

from csauto.cli import main, parse_arguments
from csauto.config import Config
from csauto.execution import RuntimeSelection


def test_prepare_command_defaults_mesh_mode_from_config() -> None:
    config = Config(mesh_mode="symlink")
    _parser, args = parse_arguments(["prepare", "doe.csv", "TEMPLATE", "RUNS"], config)
    assert args.mesh_mode == "symlink"


def test_prepare_command_allows_mesh_mode_override() -> None:
    config = Config(mesh_mode="symlink")
    _parser, args = parse_arguments(["prepare", "doe.csv", "TEMPLATE", "RUNS", "--mesh-mode", "copy"], config)
    assert args.mesh_mode == "copy"


def test_prepare_command_calls_generate_cases_with_mesh_mode(tmp_path: Path, monkeypatch) -> None:
    template_dir = tmp_path / "TEMPLATE"
    (template_dir / "DATA").mkdir(parents=True)
    (template_dir / "DATA" / "setup.xml").write_text("<root>{foo}</root>", encoding="utf-8")
    doe_csv = tmp_path / "doe.csv"
    doe_csv.write_text("foo\n1\n", encoding="utf-8")
    output_root = tmp_path / "RUNS"

    calls: list[dict] = []

    def fake_generate_cases(headers, rows, template_case, output_dir, mesh_mode="copy", adapter=None, strict=False):
        calls.append({"mesh_mode": mesh_mode})

    monkeypatch.setattr("csauto.cli.generate_cases", fake_generate_cases)

    exit_code = main(["prepare", str(doe_csv), str(template_dir), str(output_root), "--mesh-mode", "symlink"])

    assert exit_code == 0
    assert calls == [{"mesh_mode": "symlink"}]


def test_run_precheck_receives_runtime_configuration_from_resolved_runtime(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001" / "DATA"
    case_dir.mkdir(parents=True, exist_ok=True)
    (case_dir / "setup.xml").write_text("<root/>", encoding="utf-8")

    config_path = tmp_path / "csauto.toml"
    config_path.write_text(
        'runtime = "singularity"\n'
        'singularity_image = "/scratch/code_saturne_8.3.0.sif"\n'
        'singularity_bin = "/usr/bin/apptainer"\n',
        encoding="utf-8",
    )

    doctor_call: dict[str, object] = {}
    run_call: dict[str, object] = {}

    def resolve_runtime_stub(**_kwargs) -> RuntimeSelection:
        return RuntimeSelection(
            runtime="singularity",
            docker_image="dummy/image:latest",
            singularity_image="/scratch/code_saturne_8.3.0.sif",
            singularity_bin="/usr/bin/apptainer",
        )

    def run_doctor_stub(runs_dir_arg: Path, **kwargs):
        doctor_call["runs_dir"] = runs_dir_arg
        doctor_call.update(kwargs)
        return []

    def run_cases_stub(*, runs_dir: Path, **kwargs) -> None:
        run_call["runs_dir"] = runs_dir
        run_call.update(kwargs)

    from csauto import cli as cli_module

    original_resolve_runtime = cli_module.resolve_runtime
    original_run_doctor = cli_module.run_doctor
    original_run_cases = cli_module.run_cases
    cli_module.resolve_runtime = resolve_runtime_stub
    cli_module.run_doctor = run_doctor_stub
    cli_module.run_cases = run_cases_stub
    try:
        exit_code = main(
            [
                "--config",
                str(config_path),
                "run",
                str(runs_dir),
                "--case",
                "case0001",
                "--n",
                "2",
                "--nt",
                "1",
            ]
        )
    finally:
        cli_module.resolve_runtime = original_resolve_runtime
        cli_module.run_doctor = original_run_doctor
        cli_module.run_cases = original_run_cases

    assert exit_code == 0
    assert doctor_call["runs_dir"] == runs_dir
    assert doctor_call["runtime"] == "singularity"
    assert doctor_call["require_singularity"] is True
    assert doctor_call["singularity_image"] == "/scratch/code_saturne_8.3.0.sif"
    assert doctor_call["singularity_bin"] == "/usr/bin/apptainer"
    assert run_call["runs_dir"] == runs_dir
    assert run_call["runtime"] == "singularity"
    assert run_call["singularity_image"] == "/scratch/code_saturne_8.3.0.sif"
    assert run_call["singularity_bin"] == "/usr/bin/apptainer"


def test_serve_command_invokes_fastapi_entrypoint(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()

    from csauto import cli as cli_module

    call: dict[str, object] = {}

    def run_doctor_stub(_runs_dir: Path, **_kwargs):
        return []

    def serve_fastapi_stub(
        runs_dir_arg: Path,
        *,
        host: str,
        port: int,
        api_token: str | None = None,
        solver: str | None = None,
        runtime: str = "auto",
        docker_image: str = "simvia/code_saturne",
        saturne_bin: str | None = None,
        singularity_image: str | None = None,
        singularity_bin: str | None = None,
        use_slurm: bool | None = None,
        mpi_exec_options: str | None = None,
        show_api_logs: bool = False,
    ) -> None:
        call["runs_dir"] = runs_dir_arg
        call["host"] = host
        call["port"] = port
        call["api_token"] = api_token
        call["solver"] = solver
        call["runtime"] = runtime
        call["docker_image"] = docker_image
        call["saturne_bin"] = saturne_bin
        call["singularity_image"] = singularity_image
        call["singularity_bin"] = singularity_bin
        call["use_slurm"] = use_slurm
        call["mpi_exec_options"] = mpi_exec_options

    original_run_doctor = cli_module.run_doctor
    original_serve_fastapi = cli_module.serve_fastapi
    cli_module.run_doctor = run_doctor_stub
    cli_module.serve_fastapi = serve_fastapi_stub
    try:
        exit_code = main(
            [
                "serve",
                str(runs_dir),
                "--host",
                "127.0.0.1",
                "--port",
                "9000",
                "--token",
                "secret-token",
            ]
        )
    finally:
        cli_module.run_doctor = original_run_doctor
        cli_module.serve_fastapi = original_serve_fastapi

    assert exit_code == 0
    assert call["runs_dir"] == runs_dir
    assert call["host"] == "127.0.0.1"
    assert call["port"] == 9000
    assert call["api_token"] == "secret-token"
    assert call["solver"] == "code_saturne"
    assert call["runtime"] == "auto"


@pytest.mark.parametrize(
    ("flags", "expected_action", "expected_value"),
    [
        (["--stop"], "stop", None),
        (["--extend", "500"], "extend", 500),
        (["--checkpoint"], "checkpoint", None),
        (["--flush"], "flush", None),
    ],
)
def test_control_command_parses_action_flags(flags: list[str], expected_action: str, expected_value) -> None:
    _parser, args = parse_arguments(["control", "RUNS", "case0007", *flags], Config())
    assert args.command == "control"
    assert args.runs_dir == Path("RUNS")
    assert args.case == "case0007"
    if expected_action == "extend":
        assert args.extend == expected_value
    else:
        assert getattr(args, expected_action) is True


def test_control_command_requires_an_action() -> None:
    with pytest.raises(SystemExit):
        parse_arguments(["control", "RUNS", "case0007"], Config())


def test_control_command_rejects_multiple_actions() -> None:
    with pytest.raises(SystemExit):
        parse_arguments(["control", "RUNS", "case0007", "--stop", "--checkpoint"], Config())


def test_control_command_invokes_control_case(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()

    from csauto import cli as cli_module

    call: dict[str, object] = {}

    def control_case_stub(runs_dir_arg, case_id, action, *, value=None, source="cli", adapter=None):
        call.update(runs_dir=runs_dir_arg, case_id=case_id, action=action, value=value, source=source)
        return {"action": action}

    original_control_case = cli_module.control_case
    cli_module.control_case = control_case_stub
    try:
        exit_code = main(["control", str(runs_dir), "case0007", "--extend", "500"])
    finally:
        cli_module.control_case = original_control_case

    assert exit_code == 0
    assert call == {
        "runs_dir": runs_dir,
        "case_id": "case0007",
        "action": "extend",
        "value": 500,
        "source": "cli",
    }


def _write_doe_study(tmp_path: Path, *, placeholder: str = "u_inlet") -> Path:
    (tmp_path / "TEMPLATE" / "DATA").mkdir(parents=True)
    (tmp_path / "TEMPLATE" / "DATA" / "setup.xml").write_text(f"<root>{{{placeholder}}}</root>", encoding="utf-8")
    spec = tmp_path / "spec.toml"
    spec.write_text('[parameters.u_inlett]\nlevels = ["1", "2"]\n', encoding="utf-8")
    return spec


def test_doe_command_rejects_spec_param_without_placeholder(tmp_path: Path, monkeypatch, capsys) -> None:
    monkeypatch.chdir(tmp_path)
    spec = _write_doe_study(tmp_path)

    exit_code = main(["doe", str(spec), str(tmp_path / "doe.csv"), "--method", "factorial"])

    assert exit_code == 1
    assert "u_inlett" in capsys.readouterr().err
    assert not (tmp_path / "doe.csv").exists()


def test_doe_command_no_check_skips_template_validation(tmp_path: Path, monkeypatch) -> None:
    monkeypatch.chdir(tmp_path)
    spec = _write_doe_study(tmp_path)

    exit_code = main(["doe", str(spec), str(tmp_path / "doe.csv"), "--method", "factorial", "--no-check"])

    assert exit_code == 0
    assert (tmp_path / "doe.csv").exists()


def test_doe_command_checks_explicit_template_dir(tmp_path: Path, monkeypatch) -> None:
    monkeypatch.chdir(tmp_path)
    spec = _write_doe_study(tmp_path)
    other = tmp_path / "CASE_A"
    (other / "DATA").mkdir(parents=True)
    (other / "DATA" / "setup.xml").write_text("<root>{u_inlett}</root>", encoding="utf-8")

    exit_code = main(["doe", str(spec), str(tmp_path / "doe.csv"), "--method", "factorial", "--template", str(other)])

    assert exit_code == 0
    assert (tmp_path / "doe.csv").exists()


def test_doe_command_without_template_prints_note(tmp_path: Path, monkeypatch, capsys) -> None:
    monkeypatch.chdir(tmp_path)
    spec = tmp_path / "spec.toml"
    spec.write_text('[parameters.u_inlet]\nlevels = ["1"]\n', encoding="utf-8")

    exit_code = main(["doe", str(spec), str(tmp_path / "doe.csv"), "--method", "factorial"])

    assert exit_code == 0
    assert "no template found" in capsys.readouterr().out


def test_prepare_strict_rejects_unused_doe_column(tmp_path: Path, capsys) -> None:
    (tmp_path / "TEMPLATE" / "DATA").mkdir(parents=True)
    (tmp_path / "TEMPLATE" / "DATA" / "setup.xml").write_text("<root>{u_inlet}</root>", encoding="utf-8")
    doe_csv = tmp_path / "doe.csv"
    doe_csv.write_text("u_inlet,extra_col\n1,foo\n", encoding="utf-8")

    exit_code = main(["prepare", str(doe_csv), str(tmp_path / "TEMPLATE"), str(tmp_path / "RUNS"), "--strict"])

    assert exit_code == 1
    assert "extra_col" in capsys.readouterr().err


def test_prepare_without_strict_only_warns_on_unused_column(tmp_path: Path, capsys) -> None:
    (tmp_path / "TEMPLATE" / "DATA").mkdir(parents=True)
    (tmp_path / "TEMPLATE" / "DATA" / "setup.xml").write_text("<root>{u_inlet}</root>", encoding="utf-8")
    doe_csv = tmp_path / "doe.csv"
    doe_csv.write_text("u_inlet,extra_col\n1,foo\n", encoding="utf-8")

    exit_code = main(["prepare", str(doe_csv), str(tmp_path / "TEMPLATE"), str(tmp_path / "RUNS")])

    assert exit_code == 0
    assert "extra_col" in capsys.readouterr().err
    assert (tmp_path / "RUNS" / "case0001").is_dir()
