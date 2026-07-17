from __future__ import annotations

import os
import shutil
from collections.abc import Mapping, Sequence
from dataclasses import dataclass
from pathlib import Path
from typing import TYPE_CHECKING

from .docker import build_gui_command, build_run_command

if TYPE_CHECKING:
    from .solvers.base import SolverAdapter

RUNTIME_AUTO = "auto"
RUNTIME_DOCKER = "docker"
RUNTIME_SINGULARITY = "singularity"
RUNTIME_NATIVE = "native"
RUNTIME_CHOICES = {RUNTIME_AUTO, RUNTIME_DOCKER, RUNTIME_SINGULARITY, RUNTIME_NATIVE}


@dataclass(frozen=True)
class RuntimeSelection:
    runtime: str
    docker_image: str
    saturne_bin: str | None = None
    singularity_image: str | None = None
    singularity_bin: str | None = None


def _default_adapter() -> SolverAdapter:
    from .solvers import get_solver_adapter

    return get_solver_adapter(None)


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


def resolve_saturne_bin(saturne_bin: str | None, bin_name: str = "code_saturne") -> str | None:
    """Resolve the native solver binary, falling back to a PATH lookup of `bin_name`."""
    if saturne_bin:
        resolved = _resolve_executable(saturne_bin)
        if resolved:
            return resolved
        raise FileNotFoundError(f"{bin_name} executable not found: {saturne_bin}")
    return shutil.which(bin_name)


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
    adapter: SolverAdapter | None = None,
) -> RuntimeSelection:
    """Select and validate an execution backend (docker/native/singularity/auto)."""
    adapter = adapter or _default_adapter()
    selected = normalize_runtime(runtime)
    bin_name = adapter.native_bin_name

    def native_selection(bin_hint: str | None) -> RuntimeSelection:
        resolved = resolve_saturne_bin(bin_hint, bin_name=bin_name)
        if not resolved:
            raise FileNotFoundError(f"{bin_name} executable not found in PATH.")
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
    resolved_native = resolve_saturne_bin(None, bin_name=bin_name)
    if resolved_native:
        return RuntimeSelection(
            runtime=RUNTIME_NATIVE,
            docker_image=docker_image,
            saturne_bin=resolved_native,
        )
    raise FileNotFoundError(
        f"No execution backend available (docker/{bin_name}/apptainer). "
        "Configure runtime/saturne_bin/singularity_image in csauto.toml."
    )


def shared_dir_symlink_mounts(
    runs_dir: Path,
    shared_dirs: Sequence[str] = ("MESH", "POST"),
    readonly_dirs: Sequence[str] = ("MESH",),
) -> list[tuple[Path, bool]]:
    """(target, readonly) pairs for shared dirs that are symlinks out of `runs_dir`.

    Container runtimes only bind-mount `runs_dir`; these targets must be
    bind-mounted additionally, at the same absolute path, so the symlinks
    stored inside `runs_dir` resolve identically inside the container.
    """
    mounts: list[tuple[Path, bool]] = []
    resolved_runs_dir = runs_dir.resolve()
    for name in shared_dirs:
        shared_dir = runs_dir / name
        if not shared_dir.is_symlink():
            continue
        target = shared_dir.resolve()
        if target == resolved_runs_dir or resolved_runs_dir in target.parents:
            continue
        mounts.append((target, name in readonly_dirs))
    return mounts


def check_shared_dir_symlinks(runs_dir: Path, runtime: str, shared_dirs: Sequence[str] = ("MESH", "POST")) -> None:
    """Raise if a symlinked shared dir cannot be made visible inside a container.

    Symlink targets outside `runs_dir` are bind-mounted into containers at the
    same absolute path (see `shared_dir_symlink_mounts`), so they are fine as
    long as the target exists; only a broken symlink is unrecoverable.
    """
    if runtime not in (RUNTIME_DOCKER, RUNTIME_SINGULARITY):
        return
    for target, _readonly in shared_dir_symlink_mounts(runs_dir, shared_dirs):
        if not target.is_dir():
            raise RuntimeError(
                f"{runs_dir} contains a shared-dir symlink to {target}, which does not exist, "
                f"so it cannot be mounted into the {runtime} container. Fix the symlink target "
                "or re-run `csauto prepare` with mesh_mode=copy."
            )


def singularity_paths(case_dir: Path, container_root: str) -> tuple[Path, str, str]:
    """Return (runs_root, container_root, container_case) for singularity mounts."""
    runs_root = case_dir.parent.resolve()
    container_case = f"{container_root}/{case_dir.name}"
    return runs_root, container_root, container_case


def singularity_shell_exec_prefix(pwd_var: str, env_flags_str: str, extra_binds: Sequence[str] = ()) -> list[str]:
    """Build the shell-variable apptainer exec prefix used in Slurm scripts."""
    parts = [
        '"$APPTAINER_BIN"',
        "exec",
        "--cleanenv",
        "--bind",
        '"$RUNS_ROOT:$CONTAINER_ROOT"',
        *(part for bind in extra_binds for part in ("--bind", bind)),
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
    adapter: SolverAdapter | None = None,
) -> list[str]:
    """Build the command list to launch a solver run for the given runtime."""
    adapter = adapter or _default_adapter()
    if selection.runtime == RUNTIME_DOCKER:
        return build_run_command(
            case_dir,
            nprocs,
            nt,
            selection.docker_image,
            cidfile=cidfile,
            run_args=run_args,
            env_vars=env_vars,
            adapter=adapter,
        )
    if selection.runtime == RUNTIME_NATIVE:
        if not selection.saturne_bin:
            raise ValueError("saturne_bin required for native runtime.")
        return ["nohup", selection.saturne_bin, *adapter.run_argv(case_dir, nprocs, nt, run_args)]
    if selection.runtime == RUNTIME_SINGULARITY:
        if not selection.singularity_bin or not selection.singularity_image:
            raise ValueError("Incomplete singularity configuration.")
        runs_root, container_root, container_case = singularity_paths(case_dir, adapter.container_root)
        cmd = [
            "nohup",
            selection.singularity_bin,
            "exec",
            "--bind",
            f"{runs_root}:{container_root}",
            "--pwd",
            container_case,
        ]
        for target, readonly in shared_dir_symlink_mounts(runs_root, adapter.shared_dir_names):
            cmd.extend(["--bind", f"{target}:{target}:ro" if readonly else f"{target}:{target}"])
        if cleanenv:
            cmd.append("--cleanenv")
        for key, value in sorted((env_vars or {}).items()):
            cmd.extend(["--env", f"{key}={value}"])
        cmd.append(selection.singularity_image)
        cmd.append(adapter.container_bin_name)
        cmd.extend(adapter.run_argv(container_case, nprocs, nt, run_args))
        return cmd
    raise ValueError(f"Unsupported runtime: {selection.runtime}")


def build_runtime_gui_command(
    case_dir: Path,
    selection: RuntimeSelection,
    adapter: SolverAdapter | None = None,
    gui_env: Mapping[str, str] | None = None,
) -> list[str]:
    """Build the command list to open the solver GUI for the given runtime.

    `gui_env` entries are injected into the GUI process environment; for the
    docker runtime they must travel via `-e` flags, other runtimes inherit
    them from the spawned process environment.
    """
    adapter = adapter or _default_adapter()
    if selection.runtime == RUNTIME_DOCKER:
        return build_gui_command(case_dir, docker_image=selection.docker_image, adapter=adapter, extra_env=gui_env)
    setup_path = adapter.find_setup_file(case_dir)
    try:
        setup_rel = setup_path.relative_to(case_dir)
    except ValueError:
        setup_rel = Path(setup_path.name)
    if selection.runtime == RUNTIME_NATIVE:
        if not selection.saturne_bin:
            raise ValueError("saturne_bin required for native runtime.")
        return [selection.saturne_bin, *adapter.gui_argv(setup_path)]
    if selection.runtime == RUNTIME_SINGULARITY:
        if not selection.singularity_bin or not selection.singularity_image:
            raise ValueError("Incomplete singularity configuration.")
        runs_root, container_root, container_case = singularity_paths(case_dir, adapter.container_root)
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
        cmd.append(selection.singularity_image)
        cmd.append(adapter.container_bin_name)
        cmd.extend(adapter.gui_argv(container_setup))
        return cmd
    raise ValueError(f"open_gui not available for runtime {selection.runtime}")
