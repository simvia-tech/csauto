from __future__ import annotations

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


def build_run_command(
    case_dir: Path,
    nprocs: int,
    nt: int,
    docker_image: str,
    cidfile: Path | None = None,
    run_args: Sequence[str] | None = None,
    env_vars: Mapping[str, str] | None = None,
    adapter: SolverAdapter | None = None,
) -> list[str]:
    """Build the docker command to launch a case."""
    adapter = adapter or _default_adapter()
    display = os.environ.get("DISPLAY")
    runs_root = case_dir.parent.resolve()
    container_root = adapter.container_root
    container_case = f"{container_root}/{case_dir.name}"
    cmd: list[str] = ["nohup", "docker", "run", "-v", f"{runs_root}:{container_root}"]
    if display:
        cmd.extend(
            [
                "-e",
                f"DISPLAY=unix{display}",
                "-v",
                "/tmp/.X11-unix:/tmp/.X11-unix",
            ]
        )
    for key, value in sorted((env_vars or {}).items()):
        cmd.extend(["-e", f"{key}={value}"])
    cmd.extend(["--label", f"csauto.case_id={case_dir.name}"])
    if cidfile:
        cmd.extend(["--cidfile", str(cidfile)])
    cmd.extend(["-w", container_case, docker_image])
    cmd.extend(adapter.run_argv(container_case, nprocs, nt, run_args))
    return cmd


_X11_SOCKET_CANDIDATES = ("/mnt/wslg/.X11-unix", "/tmp/.X11-unix")


def find_x11_socket_dir() -> str | None:
    """The host directory holding X sockets, as visible to the docker daemon.

    /mnt/wslg is preferred on WSL: /tmp/.X11-unix is bind-mounted per
    namespace there, and Docker Desktop's daemon resolves volume mounts in its
    own namespace where /tmp/.X11-unix is empty — only the /mnt/wslg path is
    shared with it.
    """
    for candidate in _X11_SOCKET_CANDIDATES:
        path = Path(candidate)
        try:
            if path.is_dir() and any(path.iterdir()):
                return str(path.resolve())
        except OSError:
            continue
    return None


def build_gui_command(
    case_dir: Path,
    docker_image: str | None = None,
    adapter: SolverAdapter | None = None,
    extra_env: Mapping[str, str] | None = None,
) -> list[str]:
    """Build the docker command to launch the solver GUI for a case."""
    adapter = adapter or _default_adapter()
    docker_image = docker_image or adapter.default_docker_image
    display = os.environ.get("DISPLAY")
    runs_root = case_dir.parent.resolve()
    container_root = adapter.container_root
    container_case = f"{container_root}/{case_dir.name}"
    setup_path = adapter.find_setup_file(case_dir)
    try:
        setup_rel = setup_path.relative_to(case_dir)
    except ValueError:
        setup_rel = Path(setup_path.name)
    container_setup = f"{container_case}/{setup_rel.as_posix()}"
    cmd: list[str] = ["docker", "run", "-v", f"{runs_root}:{container_root}"]
    if display:
        socket_dir = find_x11_socket_dir()
        cmd.extend(["-e", f"DISPLAY={display}"])
        if socket_dir:
            cmd.extend(["-v", f"{socket_dir}:/tmp/.X11-unix"])
    for key, value in (extra_env or {}).items():
        cmd.extend(["-e", f"{key}={value}"])
    cmd.extend(["-w", container_case, docker_image])
    cmd.extend(adapter.gui_argv(container_setup))
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


def find_container_id_for_case(case_id: str, container_root: str | None = None) -> str | None:
    """Best-effort lookup of a running container for a case via docker ps."""
    if not shutil.which("docker"):
        return None
    label_result = subprocess.run(
        ["docker", "ps", "-q", "--filter", f"label=csauto.case_id={case_id}"],
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
        text=True,
        check=False,
    )
    if label_result.returncode == 0:
        for line in label_result.stdout.splitlines():
            cid = line.strip()
            if cid:
                return cid
    if container_root is None:
        container_root = _default_adapter().container_root
    container_case = f"{container_root}/{case_id}"
    ps_result = subprocess.run(
        ["docker", "ps", "-q"],
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
        text=True,
        check=False,
    )
    if ps_result.returncode != 0:
        return None
    for cid in ps_result.stdout.splitlines():
        cid = cid.strip()
        if not cid:
            continue
        inspect = subprocess.run(
            ["docker", "inspect", "-f", "{{.Config.WorkingDir}}", cid],
            stdout=subprocess.PIPE,
            stderr=subprocess.DEVNULL,
            text=True,
            check=False,
        )
        if inspect.returncode == 0 and inspect.stdout.strip() == container_case:
            return cid
    return None
