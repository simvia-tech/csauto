from __future__ import annotations

import os
import shlex
import shutil
from collections.abc import Mapping, Sequence
from dataclasses import dataclass
from pathlib import Path

from .docker import build_gui_command, build_run_command
from .template import find_setup_file

RUNTIME_AUTO = "auto"
RUNTIME_DOCKER = "docker"
RUNTIME_SINGULARITY = "singularity"
RUNTIME_NATIVE = "native"
RUNTIME_CHOICES = {RUNTIME_AUTO, RUNTIME_DOCKER, RUNTIME_SINGULARITY, RUNTIME_NATIVE}
CONTAINER_ROOT = "/home/code_saturne"


@dataclass(frozen=True)
class RuntimeSelection:
    runtime: str
    docker_image: str
    saturne_bin: str | None = None
    singularity_image: str | None = None
    singularity_bin: str | None = None


def normalize_runtime(runtime: str | None) -> str:
    """Normalize and validate a runtime string, defaulting to 'auto'."""
    value = (runtime or RUNTIME_AUTO).strip().lower()
    if value not in RUNTIME_CHOICES:
        choices = ", ".join(sorted(RUNTIME_CHOICES))
        raise ValueError(f"Unknown runtime: {runtime!r}. Choices: {choices}")
    return value


def _resolve_executable(name_or_path: str) -> str | None:
    """Resolve an executable by path or PATH lookup. Returns None if not found."""
    if not name_or_path:
        return None
    path = Path(name_or_path).expanduser()
    if path.is_file():
        if not os.access(path, os.X_OK):
            raise PermissionError(f"File is not executable: {path}")
        return str(path.resolve())
    return shutil.which(name_or_path)


def resolve_saturne_bin(saturne_bin: str | None) -> str | None:
    """Resolve the code_saturne binary, falling back to PATH lookup."""
    if saturne_bin:
        resolved = _resolve_executable(saturne_bin)
        if resolved:
            return resolved
        raise FileNotFoundError(f"code_saturne executable not found: {saturne_bin}")
    return shutil.which("code_saturne")


def resolve_singularity_bin(singularity_bin: str | None) -> str | None:
    """Resolve the apptainer/singularity binary, trying both names in PATH."""
    if singularity_bin:
        resolved = _resolve_executable(singularity_bin)
        if resolved:
            return resolved
        raise FileNotFoundError(f"singularity/apptainer executable not found: {singularity_bin}")
    for name in ("apptainer", "singularity"):
        resolved = shutil.which(name)
        if resolved:
            return resolved
    return None


def resolve_singularity_image(singularity_image: str | None) -> str | None:
    """Resolve a singularity image path or URI, validating existence for local files."""
    if not singularity_image:
        return None
    image = str(singularity_image).strip()
    if not image:
        return None
    if "://" in image:
        return image
    path = Path(image).expanduser()
    if not path.exists():
        raise FileNotFoundError(f"Singularity image not found: {path}")
    return str(path.resolve())


def resolve_runtime(
    runtime: str | None,
    docker_image: str,
    saturne_bin: str | None = None,
    singularity_image: str | None = None,
    singularity_bin: str | None = None,
) -> RuntimeSelection:
    """Select and validate an execution backend (docker/native/singularity/auto)."""
    selected = normalize_runtime(runtime)

    def native_selection(bin_hint: str | None) -> RuntimeSelection:
        resolved = resolve_saturne_bin(bin_hint)
        if not resolved:
            raise FileNotFoundError("code_saturne executable not found in PATH.")
        return RuntimeSelection(
            runtime=RUNTIME_NATIVE,
            docker_image=docker_image,
            saturne_bin=resolved,
        )

    def singularity_selection() -> RuntimeSelection:
        image = resolve_singularity_image(singularity_image)
        if not image:
            raise ValueError("singularity_image required for singularity runtime.")
        sbin = resolve_singularity_bin(singularity_bin)
        if not sbin:
            raise FileNotFoundError("apptainer/singularity executable not found in PATH.")
        return RuntimeSelection(
            runtime=RUNTIME_SINGULARITY,
            docker_image=docker_image,
            singularity_image=image,
            singularity_bin=sbin,
        )

    def docker_selection() -> RuntimeSelection:
        if not shutil.which("docker"):
            raise FileNotFoundError("docker executable not found in PATH.")
        return RuntimeSelection(runtime=RUNTIME_DOCKER, docker_image=docker_image)

    if selected == RUNTIME_DOCKER:
        return docker_selection()
    if selected == RUNTIME_NATIVE:
        return native_selection(saturne_bin)
    if selected == RUNTIME_SINGULARITY:
        return singularity_selection()

    # AUTO mode:
    if saturne_bin:
        return native_selection(saturne_bin)
    if singularity_image:
        return singularity_selection()
    if shutil.which("docker"):
        return RuntimeSelection(runtime=RUNTIME_DOCKER, docker_image=docker_image)
    resolved_native = resolve_saturne_bin(None)
    if resolved_native:
        return RuntimeSelection(
            runtime=RUNTIME_NATIVE,
            docker_image=docker_image,
            saturne_bin=resolved_native,
        )
    raise FileNotFoundError(
        "No execution backend available (docker/code_saturne/apptainer). "
        "Configure runtime/saturne_bin/singularity_image in csauto.toml."
    )


def _singularity_paths(case_dir: Path) -> tuple[Path, str, str]:
    """Return (runs_root, container_root, container_case) for singularity mounts."""
    runs_root = case_dir.parent.resolve()
    container_case = f"{CONTAINER_ROOT}/{case_dir.name}"
    return runs_root, CONTAINER_ROOT, container_case


def _singularity_shell_exec_prefix(pwd_var: str, env_flags_str: str) -> list[str]:
    """Build the shell-variable apptainer exec prefix used in Slurm scripts."""
    parts = [
        '"$APPTAINER_BIN"',
        "exec",
        "--cleanenv",
        "--bind",
        '"$RUNS_ROOT:$CONTAINER_ROOT"',
        "--pwd",
        f'"{pwd_var}"',
    ]
    if env_flags_str:
        parts.append(env_flags_str)
    parts.append('"$IMAGE"')
    return parts


def build_runtime_run_command(
    case_dir: Path,
    nprocs: int,
    nt: int,
    selection: RuntimeSelection,
    cidfile: Path | None = None,
    run_args: Sequence[str] | None = None,
    cleanenv: bool = False,
    env_vars: Mapping[str, str] | None = None,
) -> list[str]:
    """Build the command list to launch a code_saturne run for the given runtime."""
    if selection.runtime == RUNTIME_DOCKER:
        return build_run_command(
            case_dir,
            nprocs,
            nt,
            selection.docker_image,
            cidfile=cidfile,
            run_args=run_args,
            env_vars=env_vars,
        )
    if selection.runtime == RUNTIME_NATIVE:
        if not selection.saturne_bin:
            raise ValueError("saturne_bin required for native runtime.")
        cmd = [
            "nohup",
            selection.saturne_bin,
            "run",
            "--case",
            str(case_dir),
            "-n",
            str(nprocs),
            "--nt",
            str(nt),
        ]
        if run_args:
            cmd.extend(str(arg) for arg in run_args if str(arg) != "")
        return cmd
    if selection.runtime == RUNTIME_SINGULARITY:
        if not selection.singularity_bin or not selection.singularity_image:
            raise ValueError("Incomplete singularity configuration.")
        runs_root, container_root, container_case = _singularity_paths(case_dir)
        cmd = [
            "nohup",
            selection.singularity_bin,
            "exec",
            "--bind",
            f"{runs_root}:{container_root}",
            "--pwd",
            container_case,
        ]
        if cleanenv:
            cmd.append("--cleanenv")
        for key, value in sorted((env_vars or {}).items()):
            cmd.extend(["--env", f"{key}={value}"])
        cmd.extend(
            [
                selection.singularity_image,
                "code_saturne",
                "run",
                "--case",
                container_case,
                "-n",
                str(nprocs),
                "--nt",
                str(nt),
            ]
        )
        if run_args:
            cmd.extend(str(arg) for arg in run_args if str(arg) != "")
        return cmd
    raise ValueError(f"Unsupported runtime: {selection.runtime}")


def build_runtime_gui_command(case_dir: Path, selection: RuntimeSelection) -> list[str]:
    """Build the command list to open the code_saturne GUI for the given runtime."""
    if selection.runtime == RUNTIME_DOCKER:
        return build_gui_command(case_dir, docker_image=selection.docker_image)
    setup_path = find_setup_file(case_dir)
    try:
        setup_rel = setup_path.relative_to(case_dir)
    except ValueError:
        setup_rel = Path(setup_path.name)
    if selection.runtime == RUNTIME_NATIVE:
        if not selection.saturne_bin:
            raise ValueError("saturne_bin required for native runtime.")
        return [selection.saturne_bin, "gui", str(setup_path)]
    if selection.runtime == RUNTIME_SINGULARITY:
        if not selection.singularity_bin or not selection.singularity_image:
            raise ValueError("Incomplete singularity configuration.")
        runs_root, container_root, container_case = _singularity_paths(case_dir)
        container_setup = f"{container_case}/{setup_rel.as_posix()}"
        cmd: list[str] = [
            selection.singularity_bin,
            "exec",
            "--bind",
            f"{runs_root}:{container_root}",
            "--pwd",
            container_case,
        ]
        if os.environ.get("DISPLAY") and Path("/tmp/.X11-unix").exists():
            cmd.extend(["--bind", "/tmp/.X11-unix:/tmp/.X11-unix"])
        cmd.extend([selection.singularity_image, "code_saturne", "gui", container_setup])
        return cmd
    raise ValueError(f"open_gui not available for runtime {selection.runtime}")


def build_singularity_slurm_script(
    case_dir: Path,
    nprocs: int,
    nt: int,
    selection: RuntimeSelection,
    run_args: Sequence[str] | None = None,
    env_vars: Mapping[str, str] | None = None,
) -> str:
    """Generate a Slurm batch script for a singularity-based code_saturne run."""
    if selection.runtime != RUNTIME_SINGULARITY:
        raise ValueError(f"Unsupported runtime for singularity Slurm script: {selection.runtime}")
    if not selection.singularity_bin or not selection.singularity_image:
        raise ValueError("Incomplete singularity configuration.")

    setup_path = find_setup_file(case_dir)
    try:
        setup_rel = setup_path.relative_to(case_dir)
    except ValueError:
        setup_rel = Path(setup_path.name)

    runs_root, container_root, container_case = _singularity_paths(case_dir)
    container_setup = f"{container_case}/{setup_rel.as_posix()}"
    env_flags: list[str] = []
    for key, value in sorted((env_vars or {}).items()):
        env_flags.extend(["--env", f"{key}={value}"])
    env_flags_str = " ".join(shlex.quote(part) for part in env_flags)
    stage_args = " ".join(shlex.quote(str(arg)) for arg in (run_args or []) if str(arg) != "")

    stage_command = _singularity_shell_exec_prefix("$CONTAINER_CASE", env_flags_str)
    stage_command.extend(
        [
            "code_saturne",
            "run",
            "-p",
            '"$CONTAINER_SETUP"',
            '--id="$RUN_ID"',
            "--stage",
            "--initialize",
            "-n",
            str(nprocs),
            "--nt",
            str(nt),
        ]
    )
    if stage_args:
        stage_command.append(stage_args)

    finalize_command = _singularity_shell_exec_prefix("$CONTAINER_CASE", env_flags_str)
    finalize_command.extend(
        [
            "code_saturne",
            "run",
            "-p",
            '"$CONTAINER_SETUP"',
            '--id="$RUN_ID"',
            "--finalize",
        ]
    )

    solver_command = [
        "srun",
        f"--ntasks={nprocs}",
        f"--cpus-per-task={nt}",
        '--output="$EXEC_DIR/solver_%j.out"',
        '--error="$EXEC_DIR/solver_%j.err"',
    ]
    solver_command.extend(_singularity_shell_exec_prefix("$EXEC_DIR_CONTAINER", env_flags_str))
    solver_command.extend(
        [
            "bash",
            "-lc",
            shlex.quote("exec ./cs_solver --mpi"),
        ]
    )

    return "\n".join(
        [
            "#!/bin/bash",
            "set -euo pipefail",
            f"APPTAINER_BIN={shlex.quote(selection.singularity_bin)}",
            f"IMAGE={shlex.quote(selection.singularity_image)}",
            f"RUNS_ROOT={shlex.quote(str(runs_root))}",
            f"CASE_DIR={shlex.quote(str(case_dir.resolve()))}",
            f"CONTAINER_ROOT={shlex.quote(container_root)}",
            f"CASE_ID={shlex.quote(case_dir.name)}",
            'CONTAINER_CASE="$CONTAINER_ROOT/$CASE_ID"',
            f"CONTAINER_SETUP={shlex.quote(container_setup)}",
            'RUN_ID="csauto_${SLURM_JOB_ID:-$(date +%Y%m%d_%H%M%S)}"',
            'EXEC_DIR="$CASE_DIR/RESU/$RUN_ID"',
            'EXEC_DIR_CONTAINER="$CONTAINER_CASE/RESU/$RUN_ID"',
            "unset SLURM_NPROCS SLURM_NNODES SLURM_TASKS_PER_NODE SLURM_JOBID SLURM_CPUS_PER_TASK",
            'cd "$CASE_DIR"',
            'echo "=== Step 1/3: Case preparation ==="',
            " ".join(stage_command),
            'if [ ! -d "$EXEC_DIR" ]; then',
            '  echo "Missing execution directory after preparation: $EXEC_DIR" >&2',
            "  exit 1",
            "fi",
            'echo "=== Step 2/3: Solver execution ==="',
            " ".join(solver_command),
            'echo "=== Step 3/3: Finalization ==="',
            " ".join(finalize_command),
            'echo "=== Simulation completed successfully ==="',
            "",
        ]
    )
