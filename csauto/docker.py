from __future__ import annotations

import os
import shutil
import subprocess
import time
from collections.abc import Mapping, Sequence
from pathlib import Path

from .template import find_setup_file


def build_run_command(
    case_dir: Path,
    nprocs: int,
    nt: int,
    docker_image: str,
    cidfile: Path | None = None,
    run_args: Sequence[str] | None = None,
    env_vars: Mapping[str, str] | None = None,
) -> list[str]:
    """Build the docker command to launch a case."""
    display = os.environ.get("DISPLAY")
    runs_root = case_dir.parent.resolve()
    container_root = "/home/code_saturne"
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
    cmd.extend(
        [
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
        cmd.extend(str(arg) for arg in run_args if str(arg))
    return cmd


def build_gui_command(case_dir: Path, docker_image: str = "simvia/code_saturne") -> list[str]:
    """Build the docker command to launch the Code_Saturne GUI for a case."""
    display = os.environ.get("DISPLAY")
    runs_root = case_dir.parent.resolve()
    container_root = "/home/code_saturne"
    container_case = f"{container_root}/{case_dir.name}"
    setup_path = find_setup_file(case_dir)
    try:
        setup_rel = setup_path.relative_to(case_dir)
    except ValueError:
        setup_rel = Path(setup_path.name)
    container_setup = f"{container_case}/{setup_rel.as_posix()}"
    cmd: list[str] = ["docker", "run", "-v", f"{runs_root}:{container_root}"]
    if display:
        cmd.extend(
            [
                "-e",
                f"DISPLAY=unix{display}",
                "-v",
                "/tmp/.X11-unix:/tmp/.X11-unix",
            ]
        )
    cmd.extend(["-w", container_case, docker_image, "gui", container_setup])
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


def find_container_id_for_case(case_id: str) -> str | None:
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
    container_case = f"/home/code_saturne/{case_id}"
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
