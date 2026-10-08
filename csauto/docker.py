from __future__ import annotations

import functools
import hashlib
import json
import os
import shutil
import subprocess
import time
from collections.abc import Mapping, Sequence
from pathlib import Path
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .solvers.base import SolverAdapter


def _default_adapter() -> SolverAdapter:
    from .solvers import get_solver_adapter

    return get_solver_adapter(None)


def campaign_label(runs_root: Path) -> str:
    """A short id of a campaign folder, so containers of two campaigns never collide."""
    return hashlib.sha1(str(runs_root.resolve()).encode("utf-8")).hexdigest()[:12]


def _docker_prefix(case_dir: Path, adapter: SolverAdapter) -> tuple[list[str], str]:
    """`docker run --rm` with the campaign and its shared dirs mounted, plus the in-container case path."""
    from .execution import shared_dir_symlink_mounts

    runs_root = case_dir.parent.resolve()
    container_case = f"{adapter.container_root}/{case_dir.name}"
    cmd: list[str] = ["docker", "run", "--rm", "-v", f"{runs_root}:{adapter.container_root}"]
    for target, readonly in shared_dir_symlink_mounts(
        runs_root, adapter.shared_dir_names, adapter.readonly_shared_dir_names
    ):
        cmd.extend(["-v", f"{target}:{target}:ro" if readonly else f"{target}:{target}"])
    display = os.environ.get("DISPLAY")
    if display:
        cmd.extend(["-e", f"DISPLAY=unix{display}", "-v", "/tmp/.X11-unix:/tmp/.X11-unix"])
    return cmd, container_case


ENTRYPOINT_STARTS_SOLVER = "solver"  # the image's ENTRYPOINT is the solver, or a script that starts it
ENTRYPOINT_RUNS_COMMAND = "command"  # the image's ENTRYPOINT runs the command it is given (tini, exec "$@")


def _docker(*args: str, timeout: float) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["docker", *args], capture_output=True, text=True, timeout=timeout, check=False, stdin=subprocess.DEVNULL
    )


@functools.cache
def _probe_entrypoint(image_id: str) -> str:
    # An entrypoint that runs the command it is given runs `true`; one that starts the solver
    # passes `true` to it, which no solver accepts as its arguments.
    probe = _docker("run", "--rm", "--network", "none", image_id, "true", timeout=120)
    return ENTRYPOINT_RUNS_COMMAND if probe.returncode == 0 else ENTRYPOINT_STARTS_SOLVER


def image_entrypoint(docker_image: str, solver_bin: str) -> str | None:
    """How the image's own ENTRYPOINT behaves, or None when it has none (or docker cannot tell).

    Site images often set up the solver's environment (modules, spack, conda,
    a privilege drop) in their ENTRYPOINT script, so csauto keeps it whenever
    the image has one. The probe costs one container per image, once per process.
    """
    if not shutil.which("docker"):
        return None
    try:
        inspect = ("image", "inspect", "--format", "{{.Id}} {{json .Config.Entrypoint}}", docker_image)
        result = _docker(*inspect, timeout=30)
        if result.returncode != 0:
            _docker("pull", "-q", docker_image, timeout=1800)  # docker run would pull it anyway
            result = _docker(*inspect, timeout=30)
        if result.returncode != 0:
            return None
        image_id, _, entrypoint_json = result.stdout.strip().partition(" ")
        entrypoint = json.loads(entrypoint_json or "null")
        if not entrypoint:
            return None
        if Path(entrypoint[0]).name == solver_bin:
            return ENTRYPOINT_STARTS_SOLVER
        return _probe_entrypoint(image_id)
    except (OSError, ValueError, subprocess.SubprocessError):
        return None


def _docker_solver(docker_image: str, args: Sequence[str], adapter: SolverAdapter) -> list[str]:
    """Image and solver command, started through the image's own ENTRYPOINT when it has one."""
    from .execution import solver_command

    if not docker_image:
        raise ValueError(f"No docker image configured for solver {adapter.name!r} (set docker_image in csauto.toml).")
    if not adapter.container_bin_name:
        return [docker_image, *args]
    entrypoint = image_entrypoint(docker_image, adapter.container_bin_name)
    if entrypoint == ENTRYPOINT_STARTS_SOLVER:
        return [docker_image, *args]
    command = solver_command(adapter, adapter.container_bin_name, args, in_container=True)
    if entrypoint == ENTRYPOINT_RUNS_COMMAND:
        return [docker_image, *command]
    return ["--entrypoint", command[0], docker_image, *command[1:]]


def build_run_command(
    case_dir: Path,
    docker_image: str,
    args: Sequence[str],
    cidfile: Path | None = None,
    env_vars: Mapping[str, str] | None = None,
    adapter: SolverAdapter | None = None,
) -> list[str]:
    """Build the docker command that runs `args` (from run_argv) for a case."""
    adapter = adapter or _default_adapter()
    cmd, container_case = _docker_prefix(case_dir, adapter)
    for key, value in sorted((env_vars or {}).items()):
        cmd.extend(["-e", f"{key}={value}"])
    cmd.extend(["--label", f"csauto.case_id={case_dir.name}"])
    cmd.extend(["--label", f"csauto.campaign={campaign_label(case_dir.parent)}"])
    if cidfile:
        cmd.extend(["--cidfile", str(cidfile)])
    cmd.extend(["-w", container_case, *_docker_solver(docker_image, args, adapter)])
    return ["nohup", *cmd]


def build_gui_command(
    case_dir: Path,
    docker_image: str | None,
    args: Sequence[str],
    adapter: SolverAdapter | None = None,
) -> list[str]:
    """Build the docker command that opens the solver GUI for a case."""
    adapter = adapter or _default_adapter()
    cmd, container_case = _docker_prefix(case_dir, adapter)
    image = docker_image or adapter.default_docker_image
    cmd.extend(["-w", container_case, *_docker_solver(image, args, adapter)])
    return cmd


def read_container_id(cidfile: Path, wait: float = 0.5) -> str | None:
    """Read container ID from a cidfile, optionally waiting briefly."""
    deadline = time.monotonic() + max(wait, 0.0)
    while True:
        try:
            content = cidfile.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            content = ""
        # Filter blank lines; return the first non-empty one.
        lines = [line.strip() for line in content.splitlines() if line.strip()]
        if lines:
            return lines[0]
        if time.monotonic() >= deadline:
            return None
        time.sleep(0.05)


def terminate_container(container_id: str, timeout: int = 10) -> None:
    """Stop a Docker container, then force-kill if still running."""
    if not shutil.which("docker"):
        raise FileNotFoundError("docker executable not found in PATH.")
    subprocess.run(
        ["docker", "stop", "-t", str(timeout), container_id],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        check=False,
    )
    inspect = subprocess.run(
        ["docker", "inspect", "-f", "{{.State.Running}}", container_id],
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
        text=True,
        check=False,
    )
    if inspect.returncode == 0 and inspect.stdout.strip().lower() == "true":
        subprocess.run(
            ["docker", "kill", container_id],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            check=False,
        )


def find_container_id_for_case(case_id: str, runs_dir: Path) -> str | None:
    """Best-effort lookup of the running container of a case, by its csauto labels."""
    if not shutil.which("docker"):
        return None
    result = subprocess.run(
        [
            "docker",
            "ps",
            "-q",
            "--filter",
            f"label=csauto.case_id={case_id}",
            "--filter",
            f"label=csauto.campaign={campaign_label(runs_dir)}",
        ],
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        return None
    return next((line.strip() for line in result.stdout.splitlines() if line.strip()), None)
