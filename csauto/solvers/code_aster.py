"""Fake solver adapter used by integration tests.

Runs as a short python script (native runtime with ``saturne_bin`` pointing at
a Python interpreter) that writes ``OUT/run_0001/stub.log`` with one ``step N``
line per requested step and a final completion marker. It exercises the whole
prepare -> run -> status pipeline without any code_saturne convention on disk.
"""

from __future__ import annotations

import re

from abc import ABC, abstractmethod
from collections.abc import Mapping, Sequence
from pathlib import Path
from typing import TYPE_CHECKING, Any, ClassVar, NamedTuple, Protocol, runtime_checkable

from ..execution import shared_dir_symlink_mounts, RuntimeSelection, RUNTIME_DOCKER, RUNTIME_NATIVE, RUNTIME_SINGULARITY

from ..logs import read_tail_lines
from ..registry import STATUS_DONE, STATUS_FAILED
from .base import CompareKind, SolverAdapterBase

CODE_ASTER_EXPORT_EXTENSION = "export"
CODE_ASTER_LOG_EXTENSION = "mess"

class CodeAsterAdapter(SolverAdapterBase):
    name: ClassVar[str] = "code_aster"
    native_bin_name: ClassVar[str] = "run_aster"
    container_bin_name: ClassVar[str] = ""
    container_root: ClassVar[str] = "/home/user"
    default_docker_image: ClassVar[str] = "simvia/code_aster:17.4.0"
    results_dirname: ClassVar[str] = "RESULTS"
    shared_dir_names: ClassVar[tuple[str, ...]] = ("MESH", )
    export_file: ClassVar[str] = "study.export"

    def build_run_command(
        self,
        case_dir: Path,
        nprocs: int,
        nt: int,
        selection: RuntimeSelection,
        *,
        cidfile: Path | None = None,
        run_args: Sequence[str] | None = None,
        cleanenv: bool = True,
        env_vars: Mapping[str, str] | None = None,
    ) -> list[str]:
        """Build the docker command to launch a case."""
        runs_root = case_dir.parent.resolve()
        container_root = self.container_root
        container_case = f"{container_root}/{case_dir.name}"
        filename = str(self.export_file).split('/')[-1]

        links = []
        for i, shared_data in enumerate(shared_dir_symlink_mounts(runs_root, self.shared_dir_names)):
            readonly = shared_data[1]
            linked = f"{shared_data[0]}:{container_case}/{list(self.shared_dir_names)[i]}"
            links.append(f"{linked}:ro" if readonly else f"{linked}")

        if selection.runtime == RUNTIME_DOCKER:
            cmd: list[str] = ["nohup", "docker", "run", "-v", f"{runs_root}:{container_root}"]
            for link in links:
                cmd.extend(["-v", link])
            for key, value in sorted((env_vars or {}).items()):
                cmd.extend(["-e", f"{key}={value}"])
            cmd.extend(["--label", f"csauto.case_id={case_dir.name}"])
            if cidfile:
                cmd.extend(["--cidfile", str(cidfile)])
            cmd.extend(["-w", container_case, selection.docker_image])
            launch_cmd = "source /opt/activate.sh &&"
            launch_cmd += f" run_aster {filename}"
            # launch_cmd += f" --wrkdir {container_case}/tmp/ && rm -r {container_case}/tmp/"
            cmd.extend(["bash", "-i", "-c", launch_cmd])
        elif selection.runtime == RUNTIME_SINGULARITY:
            cmd = [
                "nohup",
                "bash",
                "-c",
                f"mkdir -p ~/apptainer_tmp && "
                f"export APPTAINER_TMPDIR=~/apptainer_tmp && "
                f"export TMPDIR=~/apptainer_tmp && "
                f"{selection.singularity_bin} exec "
                f"--bind {runs_root}:{container_root} "
                f"--bind {links[0]} "
                f"--pwd {container_case} "
                f"{selection.singularity_image} "
                f"bash -c 'source /opt/activate.sh && run_aster {filename}' && "
                f"rm -rf ~/apptainer_tmp && "
                f"unset APPTAINER_TMPDIR TMPDIR"       
            ]
        elif selection.runtime == RUNTIME_NATIVE:
            #TODO
            raise NotImplementedError(f"{RUNTIME_NATIVE} must be implemented for code_aster.")
        else:
            raise NotImplementedError(f"{selection.runtime} not in the development roadmap of code_aster.")

        return cmd

    def run_argv(
            self, case_path: str | Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None
        ) -> list[str]:
        #return [str(self.export_file).split('/')[-1]]
        return [""]

    def find_setup_file(self, template_dir: Path) -> Path:
        files = list(Path(template_dir).glob(f"*.{CODE_ASTER_EXPORT_EXTENSION}"))
        if len(files) == 1 and files[0].is_file():
            self.export_file = files[0]
            return files[0]
        raise FileNotFoundError(f".export file not found in template: {template_dir}")

    def detect_outcome(self, case_dir: Path, start_time: str | None = None) -> str | None:
        success_patterns = [
            re.compile(r"DIAGNOSTIC JOB : OK", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : <A>_ALARM", re.IGNORECASE)
        ]
        failure_patterns = [
            re.compile(r"DIAGNOSTIC JOB : <F>_ABNORMAL_ABORT", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : <F>_SYNTAX_ERROR", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : <S>_MEMORY_ERROR", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : <S>_NO_CONVERGENCE", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : <S>_CPU_LIMIT", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : <S>_ERROR", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : NO_TEST_RESU", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : NOOK_TEST_RESU", re.IGNORECASE)
        ]
        files = list(Path(case_dir).glob(f"*.{CODE_ASTER_LOG_EXTENSION}"))
        if len(files) == 0:
            return None
        elif len(files) == 1:
            lines = read_tail_lines(files[0], lines=40)
            joined = "\n".join(lines)
            if any(p.search(joined) for p in success_patterns):
                return STATUS_DONE
            if any(p.search(joined) for p in failure_patterns):
                return STATUS_FAILED
        else:
            raise
        return None
