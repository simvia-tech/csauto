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

if TYPE_CHECKING:
    from ..execution import RuntimeSelection

from ..logs import read_tail_lines
from ..registry import STATUS_DONE, STATUS_FAILED
from .base import CompareKind, SolverAdapterBase

CODE_ASTER_EXPORT_EXTENSION = "export"
CODE_ASTER_LOG_EXTENSION = "mess"
CODE_ASTER_DONE_MARKER = "--- DIAGNOSTIC JOB : OK"
CODE_ASTER_ALARM_MARKER = "--- DIAGNOSTIC JOB : <A>_ALARM"

class CodeAsterAdapter(SolverAdapterBase):
    name: ClassVar[str] = "code_aster"
    native_bin_name: ClassVar[str] = "run_aster"
    container_bin_name: ClassVar[str] = "cave run"
    container_root: ClassVar[str] = "/home/user"
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
        cleanenv: bool = False,
        env_vars: Mapping[str, str] | None = None,
    ) -> list[str]:
        """Build the docker command to launch a case."""
        runs_root = case_dir.parent.resolve()
        container_root = self.container_root
        container_case = f"{container_root}/{case_dir.name}"
        from ..execution import shared_dir_symlink_mounts

        cmd: list[str] = ["nohup", "docker", "run", "-v", f"{runs_root}:{container_root}"]
        for i, shared_data in enumerate(shared_dir_symlink_mounts(runs_root, self.shared_dir_names)):
            readonly = shared_data[1]
            linked = f"{shared_data[0]}:{container_case}/{list(self.shared_dir_names)[i]}"
            cmd.extend(["-v", f"{linked}:ro" if readonly else f"{linked}"])
        for key, value in sorted((env_vars or {}).items()):
            cmd.extend(["-e", f"{key}={value}"])
        cmd.extend(["--label", f"csauto.case_id={case_dir.name}"])
        if cidfile:
            cmd.extend(["--cidfile", str(cidfile)])
        cmd.extend(["-w", container_case, selection.docker_image])
        filename = self.run_argv(container_case, nprocs, nt, run_args)[0]
        cmd.extend(["bash", "-i", "-c", f"source /opt/activate.sh && run_aster {filename}"])
        return cmd

    def run_argv(self, case_path: str | Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None) -> list[str]:
        return [str(self.export_file).split('/')[-1]]

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
