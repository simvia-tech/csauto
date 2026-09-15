from __future__ import annotations

import subprocess
import threading
from datetime import datetime, timedelta
from pathlib import Path

import pytest

from csauto.registry import (
    STATUS_DONE,
    STATUS_FAILED,
    STATUS_PENDING,
    STATUS_RUNNING,
    load_registry,
    registry_transaction,
    save_registry,
    update_case,
)
from csauto.runner import (
    refresh_status,
    run_cases,
    terminate_pid,
)
from csauto.solvers.code_saturne import CodeSaturneAdapter

CS_ADAPTER = CodeSaturneAdapter()


def test_run_cases_updates_registry(monkeypatch, runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")

    monkeypatch.setattr("csauto.runner.read_container_id", lambda *_args, **_kwargs: None)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    class DummyProc:
        def __init__(self, pid: int = 12345) -> None:
            self.pid = pid

    monkeypatch.setattr("subprocess.Popen", lambda *_args, **_kwargs: DummyProc())

    run_cases(
        runs_dir,
        nprocs=2,
        nt=1,
        max_parallel=2,
        case_filter=["case0001"],
        docker_image="image",
        resume_only_failed=False,
        source="test",
    )

    registry = load_registry(runs_dir)
    record = registry["case0001"]
    assert record["status"] == STATUS_RUNNING
    assert record["pid"] == 12345
    assert record["start_time"]
    assert (case_dir / ".csauto.history.jsonl").is_file()


def test_run_cases_docker_rejects_broken_mesh_symlink(monkeypatch, runs_dir: Path, case_factory) -> None:
    case_factory(runs_dir, "case0001")
    (runs_dir / "MESH").symlink_to(runs_dir.parent / "gone", target_is_directory=True)

    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    with pytest.raises(RuntimeError, match="does not exist"):
        run_cases(
            runs_dir,
            nprocs=2,
            nt=1,
            max_parallel=1,
            case_filter=["case0001"],
            docker_image="image",
            resume_only_failed=False,
            source="test",
        )


def test_run_cases_native_runtime_updates_registry(monkeypatch, runs_dir: Path, case_factory) -> None:
    case_factory(runs_dir, "case0001")
    saturne_bin = runs_dir / "code_saturne"
    saturne_bin.write_text("#!/bin/sh\nexit 0\n", encoding="utf-8")
    saturne_bin.chmod(0o755)

    class DummyProc:
        def __init__(self, pid: int = 23456) -> None:
            self.pid = pid

    popen_calls: list[list[str]] = []

    def popen_stub(args, *_fargs, **_kwargs):
        popen_calls.append(list(args))
        return DummyProc()

    monkeypatch.setattr("subprocess.Popen", popen_stub)

    run_cases(
        runs_dir,
        nprocs=2,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        runtime="native",
        saturne_bin=str(saturne_bin),
        resume_only_failed=False,
        source="test",
    )

    registry = load_registry(runs_dir)
    record = registry["case0001"]
    assert record["status"] == STATUS_RUNNING
    assert record["pid"] == 23456
    assert record["runtime"] == "native"
    assert popen_calls
    assert popen_calls[0][:3] == ["nohup", str(saturne_bin.resolve()), "run"]


def test_run_cases_restart_adds_restart_args(monkeypatch, runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    checkpoint_dir = case_dir / "RESU" / "001" / "checkpoint"
    checkpoint_dir.mkdir(parents=True, exist_ok=True)
    (checkpoint_dir / "main.csc").write_text("dummy", encoding="utf-8")
    (case_dir / "RESU" / "001" / "run_solver.log").write_text(
        "Checkpoint at iteration 500, physical time         5.00000\n",
        encoding="utf-8",
    )
    saturne_bin = runs_dir / "code_saturne"
    saturne_bin.write_text("#!/bin/sh\nexit 0\n", encoding="utf-8")
    saturne_bin.chmod(0o755)

    class DummyProc:
        def __init__(self, pid: int = 34567) -> None:
            self.pid = pid

    popen_calls: list[list[str]] = []

    def popen_stub(args, *_fargs, **_kwargs):
        popen_calls.append([str(part) for part in args])
        return DummyProc()

    monkeypatch.setattr("subprocess.Popen", popen_stub)

    run_cases(
        runs_dir,
        nprocs=2,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        runtime="native",
        saturne_bin=str(saturne_bin),
        restart=True,
        restart_mode="iterations",
        restart_value=250,
        resume_only_failed=False,
        source="test",
    )

    assert popen_calls
    param_arg = next((arg for arg in popen_calls[0] if arg.startswith("--parametric-args=")), "")
    assert param_arg
    assert "--restart=001" in param_arg
    assert "--iter-num=750" in param_arg
    assert ";" not in param_arg


def test_run_cases_slurm_scheduler_submits_job(monkeypatch, runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    saturne_bin = runs_dir / "code_saturne"
    saturne_bin.write_text("#!/bin/sh\nexit 0\n", encoding="utf-8")
    saturne_bin.chmod(0o755)
    mpi_opts = "--mca btl vader,self,tcp --bind-to core"

    monkeypatch.setenv("CSAUTO_USE_SLURM", "1")
    monkeypatch.setattr(
        "shutil.which",
        lambda name: "/usr/bin/sbatch" if name == "sbatch" else ("/usr/bin/squeue" if name == "squeue" else None),
    )

    submit_calls: list[list[str]] = []

    def run_stub(args, *_fargs, **_kwargs):
        submit_calls.append([str(part) for part in args])
        return subprocess.CompletedProcess(args, 0, stdout="12345;cluster\n", stderr="")

    def popen_fail(*_args, **_kwargs):
        raise AssertionError("Popen should not be used for Slurm submission")

    monkeypatch.setattr("subprocess.run", run_stub)
    monkeypatch.setattr("subprocess.Popen", popen_fail)

    run_cases(
        runs_dir,
        nprocs=2,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        runtime="native",
        saturne_bin=str(saturne_bin),
        mpi_exec_options=mpi_opts,
        resume_only_failed=False,
        source="test",
    )

    registry = load_registry(runs_dir)
    record = registry["case0001"]
    assert record["status"] == STATUS_RUNNING
    assert record["pid"] is None
    assert record["job_id"] == "12345"
    assert record["scheduler"] == "slurm"
    assert (case_dir / ".csauto.jobid").read_text(encoding="utf-8").strip() == "12345"
    assert submit_calls
    assert submit_calls[0][0] == "sbatch"
    assert "--parsable" in submit_calls[0]
    assert "--wrap" in submit_calls[0]
    wrap_value = submit_calls[0][submit_calls[0].index("--wrap") + 1]
    assert "CS_MPIEXEC_OPTIONS=" in wrap_value
    assert "--bind-to core" in wrap_value


def test_run_cases_docker_runtime_can_submit_via_slurm(monkeypatch, runs_dir: Path, case_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")

    monkeypatch.setattr(
        "shutil.which",
        lambda name: (
            "/usr/bin/docker"
            if name == "docker"
            else ("/usr/bin/sbatch" if name == "sbatch" else ("/usr/bin/squeue" if name == "squeue" else None))
        ),
    )

    submit_calls: list[list[str]] = []

    def run_stub(args, *_fargs, **_kwargs):
        submit_calls.append([str(part) for part in args])
        return subprocess.CompletedProcess(args, 0, stdout="45678;cluster\n", stderr="")

    def popen_fail(*_args, **_kwargs):
        raise AssertionError("Popen should not be used for Slurm submission")

    monkeypatch.setattr("subprocess.run", run_stub)
    monkeypatch.setattr("subprocess.Popen", popen_fail)

    run_cases(
        runs_dir,
        nprocs=2,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        runtime="docker",
        docker_image="dummy/image:latest",
        use_slurm=True,
        resume_only_failed=False,
        source="test",
    )

    registry = load_registry(runs_dir)
    record = registry["case0001"]
    assert record["status"] == STATUS_RUNNING
    assert record["pid"] is None
    assert record["job_id"] == "45678"
    assert record["scheduler"] == "slurm"
    assert record["runtime"] == "docker"
    assert record["cidfile"] == str(case_dir / ".csauto.cid")
    assert (case_dir / ".csauto.jobid").read_text(encoding="utf-8").strip() == "45678"
    assert submit_calls
    assert submit_calls[0][0] == "sbatch"
    wrap_value = submit_calls[0][submit_calls[0].index("--wrap") + 1]
    assert "docker run" in wrap_value
    assert "--cidfile" in wrap_value
    assert "dummy/image:latest" in wrap_value


def test_run_cases_singularity_runtime_can_submit_via_slurm_with_cleanenv(
    monkeypatch, runs_dir: Path, case_factory
) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    sif_path = runs_dir / "code_saturne.sif"
    sif_path.write_text("dummy", encoding="utf-8")
    mpi_opts = "--mca btl self,vader --bind-to none"

    monkeypatch.setattr(
        "shutil.which",
        lambda name: (
            "/usr/bin/apptainer"
            if name == "apptainer"
            else ("/usr/bin/sbatch" if name == "sbatch" else ("/usr/bin/squeue" if name == "squeue" else None))
        ),
    )

    submit_calls: list[list[str]] = []

    def run_stub(args, *_fargs, **_kwargs):
        submit_calls.append([str(part) for part in args])
        return subprocess.CompletedProcess(args, 0, stdout="56789;cluster\n", stderr="")

    def popen_fail(*_args, **_kwargs):
        raise AssertionError("Popen should not be used for Slurm submission")

    monkeypatch.setattr("subprocess.run", run_stub)
    monkeypatch.setattr("subprocess.Popen", popen_fail)

    run_cases(
        runs_dir,
        nprocs=2,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        runtime="singularity",
        singularity_image=str(sif_path),
        singularity_bin="apptainer",
        use_slurm=True,
        mpi_exec_options=mpi_opts,
        resume_only_failed=False,
        source="test",
    )

    registry = load_registry(runs_dir)
    record = registry["case0001"]
    assert record["status"] == STATUS_RUNNING
    assert record["pid"] is None
    assert record["job_id"] == "56789"
    assert record["scheduler"] == "slurm"
    assert record["runtime"] == "singularity"
    assert submit_calls
    assert submit_calls[0][0] == "sbatch"
    assert "--wrap" not in submit_calls[0]
    assert "--ntasks" in submit_calls[0]
    assert submit_calls[0][submit_calls[0].index("--ntasks") + 1] == "2"
    assert "--cpus-per-task" in submit_calls[0]
    assert submit_calls[0][submit_calls[0].index("--cpus-per-task") + 1] == "1"
    script_path = Path(submit_calls[0][-1])
    assert script_path == case_dir / ".csauto.slurm.singularity.sh"
    script_text = script_path.read_text(encoding="utf-8")
    assert "=== Step 1/3: Case preparation ===" in script_text
    assert "=== Step 2/3: Solver execution ===" in script_text
    assert "=== Step 3/3: Finalization ===" in script_text
    assert "apptainer" in script_text
    assert "--cleanenv" in script_text
    assert "CS_MPIEXEC_OPTIONS=--mca btl self,vader --bind-to none" in script_text
    assert "--env OMP_NUM_THREADS=1" in script_text
    assert "srun --ntasks=2 --cpus-per-task=1" in script_text
    assert "exec ./cs_solver --mpi" in script_text
    assert str(sif_path.resolve()) in script_text


def test_run_cases_respects_max_parallel_with_slurm_jobs(monkeypatch, runs_dir: Path, case_factory) -> None:
    case1 = case_factory(runs_dir, "case0001")
    case_factory(runs_dir, "case0002")
    saturne_bin = runs_dir / "code_saturne"
    saturne_bin.write_text("#!/bin/sh\nexit 0\n", encoding="utf-8")
    saturne_bin.chmod(0o755)

    with registry_transaction(runs_dir) as registry:
        update_case(
            registry,
            "case0001",
            path=str(case1),
            status=STATUS_RUNNING,
            pid=None,
            job_id="12345",
            start_time=(datetime.now() - timedelta(seconds=5)).isoformat(timespec="seconds"),
        )

    class StopSleep(Exception):
        pass

    def sleep_stub(_seconds: float) -> None:
        raise StopSleep()

    monkeypatch.setenv("CSAUTO_USE_SLURM", "0")
    monkeypatch.setattr("csauto.runner._is_slurm_job_active", lambda _job_id: True)
    monkeypatch.setattr("csauto.runner.time.sleep", sleep_stub)

    with pytest.raises(StopSleep):
        run_cases(
            runs_dir,
            nprocs=2,
            nt=1,
            max_parallel=1,
            case_filter=["case0002"],
            runtime="native",
            saturne_bin=str(saturne_bin),
            resume_only_failed=False,
            source="test",
        )


def test_run_cases_serializes_concurrent_launchers(
    monkeypatch,
    runs_dir: Path,
    case_factory,
) -> None:
    case_factory(runs_dir, "case0001")
    case_factory(runs_dir, "case0002")
    saturne_bin = runs_dir / "code_saturne"
    saturne_bin.write_text("#!/bin/sh\nexit 0\n", encoding="utf-8")
    saturne_bin.chmod(0o755)

    class DummyProc:
        def __init__(self, pid: int) -> None:
            self.pid = pid

    class StopSleep(Exception):
        pass

    first_restart_ready = threading.Event()
    release_first_restart = threading.Event()
    popen_calls: list[list[str]] = []
    errors: list[BaseException] = []
    restart_calls = {"count": 0}

    def restart_stub(*_args, **_kwargs):
        restart_calls["count"] += 1
        if restart_calls["count"] == 1:
            first_restart_ready.set()
            assert release_first_restart.wait(timeout=2)
        return [], {}

    def popen_stub(args, *_fargs, **_kwargs):
        popen_calls.append([str(part) for part in args])
        return DummyProc(10000 + len(popen_calls))

    def sleep_stub(_seconds: float) -> None:
        raise StopSleep()

    def run_target(case_id: str) -> None:
        try:
            run_cases(
                runs_dir,
                nprocs=2,
                nt=1,
                max_parallel=1,
                case_filter=[case_id],
                runtime="native",
                saturne_bin=str(saturne_bin),
                restart=True,
                resume_only_failed=False,
                source="test",
            )
        except BaseException as exc:
            errors.append(exc)

    monkeypatch.setattr("csauto.solvers.code_saturne.CodeSaturneAdapter.build_restart_args", restart_stub)
    monkeypatch.setattr("subprocess.Popen", popen_stub)
    monkeypatch.setattr("csauto.runner.is_process_alive", lambda _pid: True)
    monkeypatch.setattr("csauto.runner.time.sleep", sleep_stub)

    first = threading.Thread(target=run_target, args=("case0001",))
    second = threading.Thread(target=run_target, args=("case0002",))

    first.start()
    assert first_restart_ready.wait(timeout=2)
    second.start()
    second.join(timeout=0.2)
    assert len(popen_calls) == 0
    assert restart_calls["count"] == 1

    release_first_restart.set()
    first.join(timeout=2)
    second.join(timeout=2)

    assert not first.is_alive()
    assert not second.is_alive()
    assert len(popen_calls) == 1
    assert restart_calls["count"] == 1
    assert len(errors) == 1
    assert isinstance(errors[0], StopSleep)


def test_refresh_status_marks_failed_when_slurm_job_inactive(
    monkeypatch, runs_dir: Path, case_factory, registry_factory
) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    registry_factory(runs_dir, "case0001", case_dir, status=STATUS_RUNNING)
    registry = load_registry(runs_dir)
    registry["case0001"]["pid"] = None
    registry["case0001"]["job_id"] = "12345"
    registry["case0001"]["start_time"] = (datetime.now() - timedelta(seconds=30)).isoformat(timespec="seconds")
    save_registry(runs_dir, registry)

    monkeypatch.setattr("csauto.runner._is_slurm_job_active", lambda _job_id: False)

    rows = refresh_status(runs_dir)
    assert rows[0]["status"] == STATUS_FAILED
    registry_after = load_registry(runs_dir)
    assert registry_after["case0001"]["status"] == STATUS_FAILED
    assert registry_after["case0001"]["job_id"] is None


def test_refresh_status_reads_last_iter(monkeypatch, runs_dir: Path, case_factory, registry_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    status_dir = case_dir / "RESU" / "001"
    status_dir.mkdir(parents=True, exist_ok=True)
    (status_dir / "run_status.running").write_text("time step: 12\n", encoding="utf-8")

    registry_factory(runs_dir, "case0001", case_dir, status=STATUS_RUNNING)
    registry = load_registry(runs_dir)
    registry["case0001"]["pid"] = 999
    registry["case0001"]["start_time"] = "2020-01-01T00:00:00"
    save_registry(runs_dir, registry)

    monkeypatch.setattr("csauto.runner.is_process_alive", lambda _pid: True)

    rows = refresh_status(runs_dir)
    assert rows[0]["last_iter"] == 12


def test_run_cases_respects_max_parallel(monkeypatch, runs_dir: Path, case_factory) -> None:
    case_factory(runs_dir, "case0001")
    case_factory(runs_dir, "case0002")
    case_factory(runs_dir, "case0003")

    class StopSleep(Exception):
        pass

    class DummyProc:
        def __init__(self, pid: int = 12345) -> None:
            self.pid = pid

    popen_calls: list[Path] = []

    def popen_stub(*_args, **kwargs):
        popen_calls.append(kwargs.get("cwd"))
        return DummyProc()

    def sleep_stub(_seconds: float) -> None:
        raise StopSleep()

    monkeypatch.setattr("csauto.runner.read_container_id", lambda *_args, **_kwargs: None)
    monkeypatch.setattr("csauto.runner.is_process_alive", lambda _pid: True)
    monkeypatch.setattr("csauto.runner.time.sleep", sleep_stub)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")
    monkeypatch.setattr("subprocess.Popen", popen_stub)

    with pytest.raises(StopSleep):
        run_cases(
            runs_dir,
            nprocs=2,
            nt=1,
            max_parallel=1,
            case_filter=["case0001", "case0002", "case0003"],
            docker_image="image",
            resume_only_failed=False,
            source="test",
        )

    assert len(popen_calls) == 1

    # Cases waiting for a slot should be marked PENDING in the registry.
    registry = load_registry(runs_dir)
    assert registry["case0001"]["status"] == STATUS_RUNNING
    pending = [cid for cid, rec in registry.items() if rec.get("status") == STATUS_PENDING]
    assert len(pending) >= 1


def test_refresh_status_marks_done_when_pid_dead(monkeypatch, runs_dir: Path, case_factory, registry_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    log_path = case_dir / "run_solver.log"
    log_path.write_text("END OF CALCULATION\n", encoding="utf-8")

    registry_factory(runs_dir, "case0001", case_dir, status=STATUS_RUNNING)
    registry = load_registry(runs_dir)
    registry["case0001"]["pid"] = 999
    registry["case0001"]["start_time"] = (datetime.now() - timedelta(seconds=5)).isoformat(timespec="seconds")
    save_registry(runs_dir, registry)

    monkeypatch.setattr("csauto.runner.is_process_alive", lambda _pid: False)

    rows = refresh_status(runs_dir)
    assert rows[0]["status"] == STATUS_DONE
    registry = load_registry(runs_dir)
    assert registry["case0001"]["status"] == STATUS_DONE
    assert registry["case0001"]["end_time"]


def test_refresh_status_skips_stale_merge_when_case_relaunched(
    monkeypatch, runs_dir: Path, case_factory, registry_factory
) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    registry_factory(runs_dir, "case0001", case_dir, status=STATUS_RUNNING)
    registry = load_registry(runs_dir)
    registry["case0001"]["pid"] = 111
    registry["case0001"]["start_time"] = "2020-01-01T00:00:00"
    save_registry(runs_dir, registry)

    def mutate_with_relaunch(runs_dir_arg: Path, mutator) -> bool:
        current = load_registry(runs_dir_arg)
        current["case0001"]["pid"] = 222
        current["case0001"]["start_time"] = "2020-01-01T00:10:00"
        save_registry(runs_dir_arg, current)
        current = load_registry(runs_dir_arg)
        changed = mutator(current)
        if changed:
            save_registry(runs_dir_arg, current)
        return changed

    monkeypatch.setattr("csauto.runner.is_process_alive", lambda _pid: False)
    monkeypatch.setattr("csauto.solvers.code_saturne.detect_run_outcome", lambda *_args, **_kwargs: STATUS_DONE)
    monkeypatch.setattr("csauto.runner.mutate_registry", mutate_with_relaunch)

    rows = refresh_status(runs_dir)

    assert rows[0]["status"] == STATUS_DONE
    registry_after = load_registry(runs_dir)
    assert registry_after["case0001"]["status"] == STATUS_RUNNING
    assert registry_after["case0001"]["pid"] == 222
    assert registry_after["case0001"]["start_time"] == "2020-01-01T00:10:00"


def test_run_cases_raises_when_all_popen_raise(monkeypatch, runs_dir: Path, case_factory) -> None:
    """Fix 1: ExitStack — when both primary and fallback Popen fail,
    RuntimeError is raised cleanly with no 'I/O on closed file' errors.
    Both Popen calls must be attempted (primary → fallback via shell)."""
    case_factory(runs_dir, "case0001")

    call_count = 0

    def popen_stub(*_args, **_kwargs):
        nonlocal call_count
        call_count += 1
        if call_count == 1:
            raise PermissionError("not executable")
        raise OSError("fallback also failed")

    monkeypatch.setattr("subprocess.Popen", popen_stub)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    with pytest.raises(RuntimeError, match="Failed to launch case0001"):
        run_cases(
            runs_dir,
            nprocs=1,
            nt=1,
            max_parallel=2,
            case_filter=["case0001"],
            docker_image="image",
            resume_only_failed=False,
            source="test",
        )

    # Both the primary Popen and the shell fallback must have been tried.
    assert call_count == 2
    # No 'I/O operation on closed file' exception was raised — ExitStack closed
    # the handles on all exception paths.


def test_run_cases_releases_slot_when_running_case_has_dead_pid(
    monkeypatch, runs_dir: Path, case_factory, registry_factory
) -> None:
    """Fix 2: _count_running_cases — verify that a RUNNING case whose PID is
    dead gets finalized during the slot check, allowing a new case to launch
    without waiting (max_parallel=1)."""
    case1 = case_factory(runs_dir, "case0001")
    case_factory(runs_dir, "case0002")
    registry_factory(runs_dir, "case0001", case1, status=STATUS_RUNNING)
    registry = load_registry(runs_dir)
    registry["case0001"]["pid"] = 99999
    registry["case0001"]["start_time"] = "2020-01-01T00:00:00"
    save_registry(runs_dir, registry)

    class DummyProc:
        pid = 42

    monkeypatch.setattr("subprocess.Popen", lambda *_a, **_k: DummyProc())
    monkeypatch.setattr("csauto.runner.read_container_id", lambda *_a, **_k: None)
    monkeypatch.setattr("csauto.runner.is_process_alive", lambda _pid: False)
    monkeypatch.setattr("csauto.runner._is_slurm_job_active", lambda _jid: False)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    # Should complete without blocking; if slot is not released it would loop forever
    run_cases(
        runs_dir,
        nprocs=1,
        nt=1,
        max_parallel=1,
        case_filter=["case0002"],
        docker_image="image",
        resume_only_failed=False,
        source="test",
    )

    registry = load_registry(runs_dir)
    # case0001 must have been finalized (FAILED, no log of success) during slot check
    assert registry["case0001"]["status"] in {STATUS_DONE, STATUS_FAILED}
    # case0002 must have launched
    assert registry["case0002"]["status"] == STATUS_RUNNING


# ---------------------------------------------------------------------------
# terminate_pid
# ---------------------------------------------------------------------------


def test_terminate_pid_sends_sigterm_then_returns_if_dead(monkeypatch) -> None:
    signals_sent: list[tuple[int, int]] = []

    def fake_killpg(pid, sig):
        signals_sent.append((pid, sig))

    monkeypatch.setattr("os.killpg", fake_killpg)
    monkeypatch.setattr("csauto.runner.is_process_alive", lambda _pid: False)

    import signal

    terminate_pid(42, grace=0.5)

    assert len(signals_sent) == 1
    assert signals_sent[0] == (42, signal.SIGTERM)


def test_terminate_pid_escalates_to_sigkill_after_grace(monkeypatch) -> None:
    import signal

    signals_sent: list[tuple[int, int]] = []

    def fake_killpg(pid, sig):
        signals_sent.append((pid, sig))

    monkeypatch.setattr("os.killpg", fake_killpg)
    monkeypatch.setattr("csauto.runner.is_process_alive", lambda _pid: True)
    monkeypatch.setattr("csauto.runner.time.sleep", lambda _s: None)

    terminate_pid(42, grace=0.0)

    sigterm_calls = [s for s in signals_sent if s[1] == signal.SIGTERM]
    sigkill_calls = [s for s in signals_sent if s[1] == signal.SIGKILL]
    assert len(sigterm_calls) >= 1
    assert len(sigkill_calls) >= 1


def test_terminate_pid_returns_immediately_on_process_not_found(monkeypatch) -> None:
    def fake_killpg(_pid, _sig):
        raise ProcessLookupError()

    monkeypatch.setattr("os.killpg", fake_killpg)

    # Should not raise
    terminate_pid(99999, grace=0.5)


def test_terminate_pid_falls_back_to_kill_on_permission_error(monkeypatch) -> None:
    import signal

    calls: list[tuple[str, int, int]] = []

    def fake_killpg(pid, sig):
        calls.append(("killpg", pid, sig))
        raise PermissionError()

    def fake_kill(pid, sig):
        calls.append(("kill", pid, sig))

    monkeypatch.setattr("os.killpg", fake_killpg)
    monkeypatch.setattr("os.kill", fake_kill)
    monkeypatch.setattr("csauto.runner.is_process_alive", lambda _pid: False)

    terminate_pid(42, grace=0.5)

    assert ("killpg", 42, signal.SIGTERM) in calls
    assert ("kill", 42, signal.SIGTERM) in calls


# ---------------------------------------------------------------------------
# _build_restart_run_args — physical_time mode
# ---------------------------------------------------------------------------


def test_build_restart_args_physical_time(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    resu_dir = case_dir / "RESU" / "001"
    checkpoint_dir = resu_dir / "checkpoint"
    checkpoint_dir.mkdir(parents=True)
    (checkpoint_dir / "main.csc").touch()
    (resu_dir / "run_solver.log").write_text(
        "Checkpoint at iteration 500, physical time 12.5\n",
        encoding="utf-8",
    )

    args, details = CS_ADAPTER.build_restart_args(
        case_dir,
        restart_mode="physical_time",
        restart_value=10.0,
        restart_path=None,
    )

    assert details["restart_mode"] == "physical_time"
    assert details["restart_increment"] == 10.0
    assert details["restart_value"] == 22.5  # 12.5 + 10.0
    assert any("--tmax=" in arg for arg in args)


def test_build_restart_args_physical_time_invalid_value(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    resu_dir = case_dir / "RESU" / "001"
    checkpoint_dir = resu_dir / "checkpoint"
    checkpoint_dir.mkdir(parents=True)
    (checkpoint_dir / "main.csc").touch()

    with pytest.raises(ValueError, match="restart_value must be > 0"):
        CS_ADAPTER.build_restart_args(
            case_dir,
            restart_mode="physical_time",
            restart_value=-5.0,
            restart_path=None,
        )


def test_build_restart_args_physical_time_missing_value(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    resu_dir = case_dir / "RESU" / "001"
    checkpoint_dir = resu_dir / "checkpoint"
    checkpoint_dir.mkdir(parents=True)
    (checkpoint_dir / "main.csc").touch()

    with pytest.raises(ValueError, match="restart_value required"):
        CS_ADAPTER.build_restart_args(
            case_dir,
            restart_mode="physical_time",
            restart_value=None,
            restart_path=None,
        )


# ---------------------------------------------------------------------------
# _build_restart_run_args — explicit restart_path
# ---------------------------------------------------------------------------


def test_build_restart_args_explicit_path(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    resu_dir = case_dir / "RESU" / "my_run"
    resu_dir.mkdir(parents=True)

    args, details = CS_ADAPTER.build_restart_args(
        case_dir,
        restart_mode=None,
        restart_value=None,
        restart_path="my_run",
    )

    assert details["restart_run_id"] == "my_run"
    assert details["restart_mode"] == "auto"
    assert any("--restart=my_run" in arg for arg in args)


def test_build_restart_args_explicit_resu_checkpoint_path(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    resu_dir = case_dir / "RESU" / "002"
    resu_dir.mkdir(parents=True)

    args, details = CS_ADAPTER.build_restart_args(
        case_dir,
        restart_mode=None,
        restart_value=None,
        restart_path="RESU/002/checkpoint",
    )

    assert details["restart_run_id"] == "002"
    assert any("--restart=002" in arg for arg in args)


def test_build_restart_args_invalid_path_raises(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    case_dir.mkdir(parents=True)

    with pytest.raises(ValueError, match="restart_path must be"):
        CS_ADAPTER.build_restart_args(
            case_dir,
            restart_mode=None,
            restart_value=None,
            restart_path="/some/random/path/without/resu",
        )


def test_build_restart_args_invalid_mode_raises(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    resu_dir = case_dir / "RESU" / "001"
    checkpoint_dir = resu_dir / "checkpoint"
    checkpoint_dir.mkdir(parents=True)
    (checkpoint_dir / "main.csc").touch()

    with pytest.raises(ValueError, match="Invalid restart_mode"):
        CS_ADAPTER.build_restart_args(
            case_dir,
            restart_mode="bogus",
            restart_value=None,
            restart_path=None,
        )


def test_build_restart_args_no_checkpoint_raises(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    case_dir.mkdir(parents=True)

    with pytest.raises(ValueError, match="No checkpoint found"):
        CS_ADAPTER.build_restart_args(
            case_dir,
            restart_mode=None,
            restart_value=None,
            restart_path=None,
        )


# ---------------------------------------------------------------------------
# _extract_restart_checkpoint_state
# ---------------------------------------------------------------------------


def test_extract_checkpoint_state_from_log(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    resu_dir = case_dir / "RESU" / "001"
    resu_dir.mkdir(parents=True)
    (resu_dir / "run_solver.log").write_text(
        "Checkpoint at iteration 200, physical time 5.0\nCheckpoint at iteration 500, physical time 12.5\n",
        encoding="utf-8",
    )

    it_val, t_val = CS_ADAPTER._extract_restart_checkpoint_state(case_dir, "001")
    assert it_val == 500
    assert t_val == 12.5


def test_extract_checkpoint_state_missing_dir(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    case_dir.mkdir(parents=True)

    it_val, t_val = CS_ADAPTER._extract_restart_checkpoint_state(case_dir, "nonexistent")
    assert it_val is None
    assert t_val is None


# ---------------------------------------------------------------------------
# run_cases — resume_only_failed
# ---------------------------------------------------------------------------


def test_run_cases_resume_only_failed_skips_done(monkeypatch, runs_dir: Path, case_factory, registry_factory) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    registry_factory(runs_dir, "case0001", case_dir, status=STATUS_DONE)

    popen_calls = []
    monkeypatch.setattr("subprocess.Popen", lambda *a, **k: popen_calls.append(1))
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    run_cases(
        runs_dir,
        nprocs=1,
        nt=1,
        max_parallel=2,
        case_filter=["case0001"],
        docker_image="image",
        resume_only_failed=True,
        source="test",
    )

    assert len(popen_calls) == 0
    registry = load_registry(runs_dir)
    assert registry["case0001"]["status"] == STATUS_DONE


def test_run_cases_resume_only_failed_launches_failed(
    monkeypatch, runs_dir: Path, case_factory, registry_factory
) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    registry_factory(runs_dir, "case0001", case_dir, status=STATUS_FAILED)

    class DummyProc:
        pid = 42

    monkeypatch.setattr("subprocess.Popen", lambda *_a, **_k: DummyProc())
    monkeypatch.setattr("csauto.runner.read_container_id", lambda *_a, **_k: None)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    run_cases(
        runs_dir,
        nprocs=1,
        nt=1,
        max_parallel=2,
        case_filter=["case0001"],
        docker_image="image",
        resume_only_failed=True,
        source="test",
    )

    registry = load_registry(runs_dir)
    assert registry["case0001"]["status"] == STATUS_RUNNING


# ---------------------------------------------------------------------------
# refresh_status — include_doe
# ---------------------------------------------------------------------------


def test_refresh_status_include_doe_returns_columns(
    monkeypatch, runs_dir: Path, case_factory, registry_factory
) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    (case_dir / "doe_row.csv").write_text(
        "case_id,density,velocity\ncase0001,1.2,3.5\n",
        encoding="utf-8",
    )
    registry_factory(runs_dir, "case0001", case_dir, status="PREPARED")

    monkeypatch.setattr("csauto.runner.is_process_alive", lambda _pid: False)

    rows, doe_columns = refresh_status(runs_dir, include_doe=True)
    assert len(rows) == 1
    assert "density" in doe_columns
    assert "velocity" in doe_columns
    assert "case_id" not in doe_columns
    assert rows[0]["doe"]["density"] == "1.2"
    assert rows[0]["doe"]["velocity"] == "3.5"


def _wait_for_zombie(pid: int, timeout: float = 5.0) -> bool:
    """Poll /proc until the child has exited but is not yet reaped."""
    import time

    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        try:
            stat = Path(f"/proc/{pid}/stat").read_text(encoding="utf-8", errors="ignore")
        except OSError:
            return False
        if stat.rpartition(")")[2].split()[0] == "Z":
            return True
        time.sleep(0.01)
    return False


@pytest.mark.skipif(not Path("/proc/self/stat").is_file(), reason="requires procfs")
def test_is_process_alive_reports_a_zombie_as_dead() -> None:
    """The web server never reaps the runs it launches, so a finished run lingers as a zombie.

    os.kill(pid, 0) succeeds on a zombie, which used to keep the case RUNNING forever.
    """
    import contextlib
    import os

    from csauto.runner import is_process_alive

    pid = os.fork()
    if pid == 0:  # pragma: no cover - child process
        os._exit(0)
    try:
        assert _wait_for_zombie(pid), "child never became a zombie"
        assert is_process_alive(pid) is False
    finally:
        with contextlib.suppress(ChildProcessError, OSError):
            os.waitpid(pid, 0)


def test_is_process_alive_reports_a_live_process_as_alive() -> None:
    import os

    from csauto.runner import is_process_alive

    assert is_process_alive(os.getpid()) is True


def test_failed_launch_leaves_the_case_failed_not_pending(monkeypatch, runs_dir: Path, case_factory) -> None:
    """A case whose launch never started must not stay PENDING forever.

    _launch_local writes status=FAILED and then raises; that write used to be
    discarded, leaving the case PENDING with no way to tell it never ran.
    """
    case_factory(runs_dir, "case0001")

    def popen_stub(*_args, **_kwargs):
        raise OSError("docker not found")

    monkeypatch.setattr("subprocess.Popen", popen_stub)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    with pytest.raises(RuntimeError, match="Failed to launch case0001"):
        run_cases(
            runs_dir,
            nprocs=1,
            nt=1,
            max_parallel=1,
            case_filter=["case0001"],
            docker_image="image",
            resume_only_failed=False,
            source="test",
        )

    assert load_registry(runs_dir)["case0001"]["status"] == STATUS_FAILED


def test_run_cases_with_a_backend_records_backend_and_task_id(monkeypatch, runs_dir: Path, case_factory) -> None:
    case_factory(runs_dir, "case0001")

    def no_popen(*_args, **_kwargs):
        raise AssertionError("Popen must not be used for a backend launch")

    monkeypatch.setattr("subprocess.Popen", no_popen)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    run_cases(
        runs_dir,
        nprocs=2,
        nt=3,
        max_parallel=1,
        case_filter=["case0001"],
        docker_image="my_image",
        resume_only_failed=False,
        source="test",
        backend="fake",
    )

    record = load_registry(runs_dir)["case0001"]
    assert record["status"] == STATUS_RUNNING
    assert record["backend"] == "fake"
    assert record["task_id"].startswith("fake-")
    assert record["pid"] is None
    assert record["job_id"] is None
    assert record["nprocs"] == 2
    assert record["nt"] == 3


def test_local_launch_records_no_backend(monkeypatch, runs_dir: Path, case_factory) -> None:
    """Non-regression: a local run must not gain a backend field."""
    case_factory(runs_dir, "case0001")

    class DummyProc:
        pid = 4242

    monkeypatch.setattr("subprocess.Popen", lambda *_a, **_k: DummyProc())
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    run_cases(
        runs_dir,
        nprocs=1,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        docker_image="image",
        resume_only_failed=False,
        source="test",
    )

    record = load_registry(runs_dir)["case0001"]
    assert record.get("backend") is None
    assert record["pid"]


def test_refresh_status_does_not_finalize_a_backend_case(runs_dir: Path, case_factory) -> None:
    """A backend case has no PID and no job id; the sync pass owns its status.

    Without the guard, should_finalize is True on the first refresh and the
    STATUS_FAILED fallback marks the case failed before it has started.
    """
    case_dir = case_factory(runs_dir, "case0001")
    save_registry(
        runs_dir,
        {
            "case0001": {
                "case_id": "case0001",
                "path": str(case_dir),
                "status": STATUS_RUNNING,
                "backend": "fake",
                "task_id": "fake-0001",
                "pid": None,
                "job_id": None,
                "start_time": datetime.now().isoformat(timespec="seconds"),
            }
        },
    )

    rows = refresh_status(runs_dir)

    assert rows[0]["status"] == STATUS_RUNNING
    assert load_registry(runs_dir)["case0001"]["status"] == STATUS_RUNNING


def test_refresh_status_still_finalizes_a_local_case_whose_process_is_gone(runs_dir: Path, case_factory) -> None:
    """Non-regression: the guard must not disable finalisation for local cases."""
    case_dir = case_factory(runs_dir, "case0001")
    save_registry(
        runs_dir,
        {
            "case0001": {
                "case_id": "case0001",
                "path": str(case_dir),
                "status": STATUS_RUNNING,
                "pid": None,
                "job_id": None,
                "start_time": datetime.now().isoformat(timespec="seconds"),
            }
        },
    )

    rows = refresh_status(runs_dir)

    assert rows[0]["status"] == STATUS_FAILED


def test_refresh_status_ignores_the_reserved_backend_key(runs_dir, case_factory) -> None:
    """The _backend marker is campaign state, not a case; it must not be listed."""
    case_factory(runs_dir, "case0001")
    save_registry(
        runs_dir,
        {
            "_backend": {"last_sync": "2026-09-14T10:00:00"},
            "case0001": {"case_id": "case0001", "path": str(runs_dir / "case0001"), "status": "PREPARED"},
        },
    )

    rows = refresh_status(runs_dir)

    assert [row["case_id"] for row in rows] == ["case0001"]


def test_backend_argv_uses_a_relative_case_path(monkeypatch, runs_dir, case_factory) -> None:
    """The remote container has no idea where the case lives on this machine."""
    from csauto.backends.fake import FakeBackend

    case_factory(runs_dir, "case0001")
    backend = FakeBackend(script=["RUNNING"])
    submitted: dict[str, object] = {}
    original_submit = backend.submit

    def record(case_dir, argv, image, nprocs, nt, observability_globs=(), options=None):
        submitted["argv"] = list(argv)
        submitted["globs"] = tuple(observability_globs)
        return original_submit(case_dir, argv, image, nprocs, nt, observability_globs, options or {})

    backend.submit = record  # type: ignore[method-assign]
    monkeypatch.setattr("csauto.backends.get_backend", lambda _name: backend)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    run_cases(
        runs_dir,
        nprocs=1,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        docker_image="image",
        resume_only_failed=False,
        source="test",
        backend="fake",
    )

    assert str(runs_dir) not in " ".join(str(part) for part in submitted["argv"])
    assert "." in submitted["argv"]
    assert submitted["globs"], "the adapter's observability patterns must reach the backend"


def test_status_row_carries_the_backend_figures(runs_dir, case_factory) -> None:
    """The dashboard shows what a cloud case costs; the figures live in the registry."""
    case_factory(runs_dir, "case0001")
    save_registry(
        runs_dir,
        {
            "case0001": {
                "case_id": "case0001",
                "path": str(runs_dir / "case0001"),
                "status": STATUS_RUNNING,
                "backend": "fake",
                "task_id": "fake-0001",
                "backend_progress": 0.25,
                "backend_execution_time_s": 42.0,
                "backend_core_count": 8,
            }
        },
    )

    row = refresh_status(runs_dir)[0]

    assert row["backend"] == "fake"
    assert row["backend_progress"] == 0.25
    assert row["backend_execution_time_s"] == 42.0
    assert row["backend_core_count"] == 8


def test_status_row_of_a_local_case_has_no_backend_figures(runs_dir, case_factory) -> None:
    case_factory(runs_dir, "case0001")
    save_registry(
        runs_dir,
        {"case0001": {"case_id": "case0001", "path": str(runs_dir / "case0001"), "status": "PREPARED"}},
    )

    row = refresh_status(runs_dir)[0]

    assert row["backend"] == ""
    assert row["backend_execution_time_s"] is None


def test_submitting_to_a_backend_does_not_hold_the_registry_lock(monkeypatch, runs_dir, case_factory) -> None:
    """A submit uploads the case and talks to a remote API.

    Holding the registry lock for that long blocks every reader, which freezes
    the dashboard: /api/status calls load_registry, which takes the same lock.
    """
    from csauto.backends.fake import FakeBackend

    case_factory(runs_dir, "case0001")
    backend = FakeBackend(script=["RUNNING"])
    original_submit = backend.submit
    readable: list[bool] = []

    def probing_submit(case_dir, argv, image, nprocs, nt, observability_globs=(), options=None):
        done = threading.Event()

        def read_registry() -> None:
            load_registry(runs_dir)
            done.set()

        threading.Thread(target=read_registry, daemon=True).start()
        readable.append(done.wait(timeout=5))
        return original_submit(case_dir, argv, image, nprocs, nt, observability_globs, options or {})

    backend.submit = probing_submit  # type: ignore[method-assign]
    monkeypatch.setattr("csauto.backends.get_backend", lambda _name: backend)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    run_cases(
        runs_dir,
        nprocs=1,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        docker_image="image",
        resume_only_failed=False,
        source="test",
        backend="fake",
    )

    assert readable == [True], "the registry lock was held across the backend submit"
    assert load_registry(runs_dir)["case0001"]["status"] == STATUS_RUNNING


def test_launch_options_reach_the_backend(monkeypatch, runs_dir, case_factory) -> None:
    """The core carries the values without reading them."""
    from csauto.backends.fake import FakeBackend

    case_factory(runs_dir, "case0001")
    backend = FakeBackend(script=["RUNNING"])
    monkeypatch.setattr("csauto.backends.get_backend", lambda _name: backend)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    run_cases(
        runs_dir,
        nprocs=1,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        docker_image="image",
        resume_only_failed=False,
        source="test",
        backend="fake",
        options={"speed": "fast"},
    )

    assert backend.submitted_options == {"speed": "fast"}


def test_launch_options_are_recorded_in_the_case_history(monkeypatch, runs_dir, case_factory) -> None:
    """An audit should show what a run asked for, and what it cost."""
    import json

    from csauto.backends.fake import FakeBackend

    case_dir = case_factory(runs_dir, "case0001")
    backend = FakeBackend(script=["RUNNING"])
    monkeypatch.setattr("csauto.backends.get_backend", lambda _name: backend)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    run_cases(
        runs_dir,
        nprocs=1,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        docker_image="image",
        resume_only_failed=False,
        source="test",
        backend="fake",
        options={"speed": "fast"},
    )

    entries = [json.loads(line) for line in (case_dir / ".csauto.history.jsonl").read_text().splitlines()]
    runs = [entry for entry in entries if entry["action"] == "run"]
    assert runs[-1]["details"]["options"] == {"speed": "fast"}


def test_a_local_run_records_no_options(monkeypatch, runs_dir, case_factory) -> None:
    """Options belong to a backend launch; a local run must not grow a field."""
    import json

    case_dir = case_factory(runs_dir, "case0001")
    monkeypatch.setattr("csauto.runner.read_container_id", lambda *_args, **_kwargs: None)
    monkeypatch.setattr("shutil.which", lambda _name: "/bin/true")

    class DummyProc:
        def __init__(self, pid: int = 12345) -> None:
            self.pid = pid

    monkeypatch.setattr("subprocess.Popen", lambda *_args, **_kwargs: DummyProc())

    run_cases(
        runs_dir,
        nprocs=1,
        nt=1,
        max_parallel=1,
        case_filter=["case0001"],
        docker_image="image",
        resume_only_failed=False,
        source="test",
    )

    entries = [json.loads(line) for line in (case_dir / ".csauto.history.jsonl").read_text().splitlines()]
    runs = [entry for entry in entries if entry["action"] == "run"]
    assert "options" not in runs[-1]["details"]
