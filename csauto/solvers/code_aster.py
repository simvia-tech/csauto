"""Fake solver adapter used by integration tests.

Runs as a short python script (native runtime with ``saturne_bin`` pointing at
a Python interpreter) that writes ``OUT/run_0001/stub.log`` with one ``step N``
line per requested step and a final completion marker. It exercises the whole
prepare -> run -> status pipeline without any code_saturne convention on disk.
"""

from __future__ import annotations

import re
import shlex
from collections.abc import Mapping, Sequence
from pathlib import Path
from typing import ClassVar

from ..execution import RUNTIME_DOCKER, RUNTIME_NATIVE, RUNTIME_SINGULARITY, RuntimeSelection, shared_dir_symlink_mounts
from ..logs import _is_recent, _parse_start_time, read_tail_lines
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
        export_path = self.find_setup_file(case_dir)
        exportfile = export_path.name
        host_tmpdir = f"{runs_root}/{case_dir.name}/{tmp_name}"
        solverlogpath = f"{self.results_dirname}/{self.logs_dirname}/run_solver.log"

        self._ensure_mess_entry(export_path, solverlogpath)

        links = [f"{runs_root}:{container_root}"]
        for name in self.shared_dir_names:
            for target, readonly in shared_dir_symlink_mounts(runs_root, (name,)):
                linked = f"{target}:{container_case}/{name}"
                links.append(f"{linked}:ro" if readonly else linked)

        rmdir = [host_tmpdir]
        solver_shell = (
            f"source /opt/activate.sh && run_aster {shlex.quote(exportfile)} --wrkdir {container_case}/{tmp_name}/"
        )
        solver_cmd = f"bash -c {shlex.quote(solver_shell)}"

        if selection.runtime == RUNTIME_DOCKER:
            add_cid = f"--cidfile {shlex.quote(str(cidfile))} " if cidfile else ""

            bind_links = " ".join(f"-v {shlex.quote(link)}" for link in links)
            cleanup = "rm -rf " + " ".join(shlex.quote(dire) for dire in rmdir)

            cmd = [
                "nohup",
                "bash",
                "-c",
                f"docker run "
                f"{bind_links} "
                f"-w {container_case} "
                f"--label csauto.case_id={case_dir.name} "
                f"{add_cid}"
                f"{selection.docker_image} "
                f"{solver_cmd}; "
                f"{cleanup}",
            ]
        elif selection.runtime == RUNTIME_SINGULARITY:
            if not selection.singularity_bin or not selection.singularity_image:
                raise ValueError("Incomplete singularity configuration.")
            host_apptainer = f"{runs_root}/{case_dir.name}/.apptainer_tmp"
            rmdir.append(host_apptainer)

            bind_links = " ".join(f"--bind {shlex.quote(link)}" for link in links)
            cleanup = "rm -rf " + " ".join(shlex.quote(dire) for dire in rmdir)

            cmd = [
                "nohup",
                "bash",
                "-c",
                f"mkdir -p {shlex.quote(host_apptainer)} && "
                f"export APPTAINER_TMPDIR={shlex.quote(host_apptainer)} && "
                f"{shlex.quote(selection.singularity_bin)} exec "
                f"{bind_links} "
                f"--pwd {container_case} "
                f"{shlex.quote(selection.singularity_image)} "
                f"{solver_cmd}; "
                f"{cleanup}",
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

    @staticmethod
    def _ensure_mess_entry(export_path: Path, solverlogpath: str) -> None:
        """Append the F mess entry that detect_outcome reads, unless the export already declares one."""
        export_text = export_path.read_text(encoding="utf-8", errors="ignore")
        if any(line.split()[:2] == ["F", "mess"] for line in export_text.splitlines()):
            return
        with export_path.open("a", encoding="utf-8") as f:
            if export_text and not export_text.endswith("\n"):
                f.write("\n")
            f.write(f"F mess {solverlogpath} R 6\n")

    def find_setup_file(self, template_dir: Path) -> Path:
        files = list(Path(template_dir).glob(f"*.{CODE_ASTER_EXPORT_EXTENSION}"))
        if len(files) == 1 and files[0].is_file():
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
        log_path = case_dir / self.results_dirname / self.logs_dirname / "run_solver.log"
        if not log_path.is_file():
            return None
        if not _is_recent(log_path, _parse_start_time(start_time)):
            return None
        joined = "\n".join(read_tail_lines(log_path, lines=40))
        if any(p.search(joined) for p in success_patterns):
            return STATUS_DONE
        if any(p.search(joined) for p in failure_patterns):
            return STATUS_FAILED
        return None
