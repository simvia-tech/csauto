"""Fake solver adapter used by integration tests.

Runs as a short python script (native runtime with ``saturne_bin`` pointing at
a Python interpreter) that writes ``OUT/run_0001/stub.log`` with one ``step N``
line per requested step and a final completion marker. It exercises the whole
prepare -> run -> status pipeline without any code_saturne convention on disk.
"""

from __future__ import annotations

import re
from collections.abc import Mapping, Sequence
from pathlib import Path
from typing import ClassVar

from ..execution import RUNTIME_DOCKER, RUNTIME_NATIVE, RUNTIME_SINGULARITY, RuntimeSelection, shared_dir_symlink_mounts
from ..logs import read_tail_lines
from ..registry import STATUS_DONE, STATUS_FAILED
from .base import SolverAdapterBase

CODE_ASTER_EXPORT_EXTENSION = "export"


class CodeAsterAdapter(SolverAdapterBase):
    name: ClassVar[str] = "code_aster"
    native_bin_name: ClassVar[str] = "run_aster"
    container_bin_name: ClassVar[str] = ""
    container_root: ClassVar[str] = "/home/user"
    default_docker_image: ClassVar[str] = "simvia/code_aster:17.4.0"
    results_dirname: ClassVar[str] = "RESU"
    logs_dirname: ClassVar[str] = "LOGS"
    shared_dir_names: ClassVar[tuple[str, ...]] = (
        "MESH",
        "RESU",
    )
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
        tmp_name: str = "TMP",
    ) -> list[str]:
        """Build the docker command to launch a case."""
        runs_root = case_dir.parent.resolve()
        container_root = self.container_root
        container_case = f"{container_root}/{case_dir.name}"
        exportfile = str(self.export_file).split("/")[-1]
        host_tmpdir = f"{runs_root}/{case_dir.name}/{tmp_name}"
        solverlogpath = f"{self.results_dirname}/{self.logs_dirname}/run_solver.log"

        with open(f"{runs_root}/{case_dir.name}/{exportfile}", "a") as f:
            f.write(f"F mess {solverlogpath} R 6\n")

        links = [f"{runs_root}:{container_root}"]
        for i, shared_data in enumerate(shared_dir_symlink_mounts(runs_root, self.shared_dir_names)):
            readonly = shared_data[1]
            linked = f"{shared_data[0]}:{container_case}/{list(self.shared_dir_names)[i]}"
            links.append(f"{linked}:ro" if readonly else f"{linked}")

        # TODO: Pour relier le fichier de message temporaire
        # solverlogfile = Path(f"{runs_root}/{case_dir.name}/{solverlogpath}")
        # links.append(f"{runs_root}/{case_dir.name}/{solverlogpath}:{container_case}/{tmp_name}/proc.0/fort.6")

        # TODO : Ajouter la suppression de tous les dossiers partagé sauf celui de resultats
        rmdir = [f"{host_tmpdir}"]

        if selection.runtime == RUNTIME_DOCKER:
            add_cid = f"--cidfile {cidfile!s}" if cidfile else ""

            bind_links = " ".join(f"-v {link}" for link in links)
            removed_dirs = " ".join(f"rm -rf {dire}" for dire in rmdir)

            cmd = [
                "nohup",
                "bash",
                "-c",
                f"docker run "
                f"{bind_links} "
                f"-w {container_case} "
                f"--label csauto.case_id={case_dir.name} "
                f"{add_cid} "
                f"{selection.docker_image} "
                f"bash -c 'source /opt/activate.sh && run_aster {exportfile} --wrkdir {container_case}/{tmp_name}/'; "
                f"{removed_dirs}",
            ]
        elif selection.runtime == RUNTIME_SINGULARITY:
            host_apptainer = f"~/apptainer_tmp_{case_dir.name}"
            rmdir.append(f"{host_apptainer}")

            bind_links = " ".join(f"--bind {link}" for link in links)
            removed_dirs = " ".join(f"rm -rf {dire}" for dire in rmdir)

            cmd = [
                "nohup",
                "bash",
                "-c",
                f"mkdir -p {host_apptainer} && "
                f"export APPTAINER_TMPDIR={host_apptainer} && "
                f"{selection.singularity_bin} exec "
                f"{bind_links} "
                f"--pwd {container_case} "
                f"{selection.singularity_image} "
                f"bash -c 'source /opt/activate.sh && run_aster {exportfile} --wrkdir {container_case}/{tmp_name}/'; "
                f"{removed_dirs}",
            ]
        elif selection.runtime == RUNTIME_NATIVE:
            # TODO
            raise NotImplementedError(f"{RUNTIME_NATIVE} must be implemented for code_aster.")
        else:
            if selection.runtime in ["cave", "salome_meca"]:
                # TODO
                raise NotImplementedError(
                    f"{selection.runtime} could be in the roadmap of code_aster. Please contact support."
                )
            else:
                raise NotImplementedError(f"{selection.runtime} not in the development roadmap of code_aster.")

        return cmd

    def run_argv(self, case_path: str | Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None) -> list[str]:
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
            re.compile(r"DIAGNOSTIC JOB : <A>_ALARM", re.IGNORECASE),
        ]
        failure_patterns = [
            re.compile(r"DIAGNOSTIC JOB : <F>_ABNORMAL_ABORT", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : <F>_SYNTAX_ERROR", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : <S>_MEMORY_ERROR", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : <S>_NO_CONVERGENCE", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : <S>_CPU_LIMIT", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : <S>_ERROR", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : NO_TEST_RESU", re.IGNORECASE),
            re.compile(r"DIAGNOSTIC JOB : NOOK_TEST_RESU", re.IGNORECASE),
        ]
        files = list(Path(f"{case_dir}/{self.results_dirname}/{self.logs_dirname}/").glob("run_solver.log"))
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
