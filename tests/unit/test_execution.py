from __future__ import annotations

from pathlib import Path

import pytest

from csauto.execution import (
    RUNTIME_DOCKER,
    RUNTIME_NATIVE,
    RUNTIME_SINGULARITY,
    RuntimeSelection,
    build_runtime_gui_command,
    build_runtime_run_command,
    check_shared_dir_symlinks,
    resolve_runtime,
)
from csauto.solvers.code_saturne import CodeSaturneAdapter


def test_resolve_runtime_auto_prefers_saturne_bin(tmp_path: Path, monkeypatch) -> None:
    saturne = tmp_path / "code_saturne"
    saturne.write_text("#!/bin/sh\nexit 0\n", encoding="utf-8")
    saturne.chmod(0o755)
    monkeypatch.setattr("csauto.execution.shutil.which", lambda name: "/bin/docker" if name == "docker" else None)

    selection = resolve_runtime(
        runtime="auto",
        docker_image="img",
        saturne_bin=str(saturne),
    )

    assert selection.runtime == RUNTIME_NATIVE
    assert selection.saturne_bin == str(saturne.resolve())


def test_resolve_runtime_auto_uses_docker_when_no_hint(monkeypatch) -> None:
    monkeypatch.setattr(
        "csauto.execution.shutil.which",
        lambda name: "/bin/docker" if name == "docker" else None,
    )

    selection = resolve_runtime(runtime="auto", docker_image="img")
    assert selection.runtime == RUNTIME_DOCKER


def test_resolve_runtime_singularity_requires_image() -> None:
    with pytest.raises(ValueError):
        resolve_runtime(runtime="singularity", docker_image="img")


def test_build_runtime_run_command_native(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    selection = RuntimeSelection(
        runtime=RUNTIME_NATIVE,
        docker_image="img",
        saturne_bin="/opt/code_saturne/bin/code_saturne",
    )
    cmd = build_runtime_run_command(case_dir, nprocs=4, nt=2, selection=selection)
    assert cmd[:3] == ["nohup", "/opt/code_saturne/bin/code_saturne", "run"]
    assert "--case" in cmd
    assert str(case_dir) in cmd
    assert "-n" in cmd and cmd[cmd.index("-n") + 1] == "4"
    assert "--nt" in cmd and cmd[cmd.index("--nt") + 1] == "2"


def test_build_runtime_run_command_native_with_restart_args(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    selection = RuntimeSelection(
        runtime=RUNTIME_NATIVE,
        docker_image="img",
        saturne_bin="/opt/code_saturne/bin/code_saturne",
    )
    cmd = build_runtime_run_command(
        case_dir,
        nprocs=4,
        nt=2,
        selection=selection,
        run_args=["--restart", "--tmax", "12.5"],
    )
    assert cmd[-3:] == ["--restart", "--tmax", "12.5"]


def test_build_runtime_run_command_singularity_slurm_uses_cleanenv_and_env(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    selection = RuntimeSelection(
        runtime=RUNTIME_SINGULARITY,
        docker_image="img",
        singularity_bin="/usr/bin/apptainer",
        singularity_image="/images/code_saturne.sif",
    )
    cmd = build_runtime_run_command(
        case_dir,
        nprocs=4,
        nt=2,
        selection=selection,
        cleanenv=True,
        env_vars={"CS_MPIEXEC_OPTIONS": "--mca btl self,vader --bind-to none"},
    )
    assert cmd[:2] == ["nohup", "/usr/bin/apptainer"]
    assert "--cleanenv" in cmd
    assert "--env" in cmd
    env_value = cmd[cmd.index("--env") + 1]
    assert env_value == "CS_MPIEXEC_OPTIONS=--mca btl self,vader --bind-to none"
    assert "/images/code_saturne.sif" in cmd
    assert cmd[-8:] == [
        "code_saturne",
        "run",
        "--case",
        "/home/code_saturne/case0001",
        "-n",
        "4",
        "--nt",
        "2",
    ]
    assert "--pwd" in cmd and cmd[cmd.index("--pwd") + 1] == "/home/code_saturne/case0001"


def test_build_runtime_gui_command_native(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    (case_dir / "DATA").mkdir(parents=True)
    (case_dir / "DATA" / "setup.xml").write_text("<root/>", encoding="utf-8")
    selection = RuntimeSelection(
        runtime=RUNTIME_NATIVE,
        docker_image="img",
        saturne_bin="/opt/code_saturne/bin/code_saturne",
    )
    cmd = build_runtime_gui_command(case_dir, selection)
    assert cmd == [
        "/opt/code_saturne/bin/code_saturne",
        "gui",
        str(case_dir / "DATA" / "setup.xml"),
    ]


def test_build_runtime_gui_command_singularity(tmp_path: Path, monkeypatch) -> None:
    monkeypatch.delenv("DISPLAY", raising=False)
    case_dir = tmp_path / "case0001"
    (case_dir / "DATA").mkdir(parents=True)
    (case_dir / "DATA" / "setup.xml").write_text("<root/>", encoding="utf-8")
    selection = RuntimeSelection(
        runtime=RUNTIME_SINGULARITY,
        docker_image="img",
        singularity_bin="/usr/bin/apptainer",
        singularity_image="/images/code_saturne.sif",
    )
    cmd = build_runtime_gui_command(case_dir, selection)
    container_case = "/home/code_saturne/case0001"
    container_setup = f"{container_case}/DATA/setup.xml"
    assert cmd[:2] == ["/usr/bin/apptainer", "exec"]
    assert "--bind" in cmd
    assert f"{case_dir.parent.resolve()}:/home/code_saturne" in cmd
    assert "--pwd" in cmd
    assert container_case in cmd
    assert cmd[-4:] == ["/images/code_saturne.sif", "code_saturne", "gui", container_setup]


def test_build_singularity_slurm_script_uses_stage_solver_finalize(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    (case_dir / "DATA").mkdir(parents=True)
    (case_dir / "DATA" / "setup.xml").write_text("<root/>", encoding="utf-8")
    selection = RuntimeSelection(
        runtime=RUNTIME_SINGULARITY,
        docker_image="img",
        singularity_bin="/usr/bin/apptainer",
        singularity_image="/images/code_saturne.sif",
    )

    script = CodeSaturneAdapter().build_slurm_script(
        case_dir,
        nprocs=4,
        nt=2,
        selection=selection,
        run_args=["--parametric-args=--restart=RESU/001/checkpoint"],
        env_vars={
            "OMP_NUM_THREADS": "2",
            "CS_MPIEXEC_OPTIONS": "--mca btl self,vader --bind-to none",
        },
    )

    assert "code_saturne run -p" in script
    assert "--stage --initialize -n 4 --nt 2" in script
    assert "srun --ntasks=4 --cpus-per-task=2" in script
    assert "exec ./cs_solver --mpi" in script
    assert "--finalize" in script
    assert "--cleanenv" in script
    assert "CS_MPIEXEC_OPTIONS=--mca btl self,vader --bind-to none" in script
    assert "--env OMP_NUM_THREADS=2" in script
    assert "--parametric-args=--restart=RESU/001/checkpoint" in script
    assert "/images/code_saturne.sif" in script
    assert str(case_dir.resolve()) in script


def test_check_shared_dir_symlinks_native_is_always_ok(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    outside = tmp_path / "study" / "MESH"
    outside.mkdir(parents=True)
    (runs_dir / "MESH").symlink_to(outside, target_is_directory=True)

    check_shared_dir_symlinks(runs_dir, RUNTIME_NATIVE)


def test_check_shared_dir_symlinks_no_symlink_is_ok_for_containers(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    (runs_dir / "MESH").mkdir(parents=True)

    check_shared_dir_symlinks(runs_dir, RUNTIME_DOCKER)
    check_shared_dir_symlinks(runs_dir, RUNTIME_SINGULARITY)


def test_check_shared_dir_symlinks_inside_runs_dir_is_ok_for_containers(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    real_mesh = runs_dir / "_MESH_real"
    real_mesh.mkdir(parents=True)
    (runs_dir / "MESH").symlink_to(real_mesh, target_is_directory=True)

    check_shared_dir_symlinks(runs_dir, RUNTIME_DOCKER)


@pytest.mark.parametrize("runtime", [RUNTIME_DOCKER, RUNTIME_SINGULARITY])
def test_check_shared_dir_symlinks_raises_for_containers_when_target_outside_runs_dir(
    tmp_path: Path, runtime: str
) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    outside = tmp_path / "study" / "MESH"
    outside.mkdir(parents=True)
    (runs_dir / "MESH").symlink_to(outside, target_is_directory=True)

    with pytest.raises(RuntimeError, match="symlink"):
        check_shared_dir_symlinks(runs_dir, runtime)
