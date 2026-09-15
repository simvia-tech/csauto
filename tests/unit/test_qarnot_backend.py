"""The Qarnot backend, driven by a fake connection.

No SDK, no token, no network: the tests assert what csauto asks Qarnot to do,
which is the part csauto owns.
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any

import pytest

from csauto.backends.qarnot import QarnotBackend


class FakeBucket:
    def __init__(self, name: str) -> None:
        self.uuid = name
        self.files: dict[str, str] = {}
        self.directories: list[tuple[str, str]] = []

    def add_file(self, local: str, remote: str) -> None:
        self.files[remote] = local

    def sync_directory(self, directory: str, verbose: bool = False, remote: str | None = None) -> None:
        self.directories.append((directory, remote or ""))


class FakeTask:
    def __init__(self, name: str, profile: str, instancecount: int) -> None:
        self.name = name
        self.profile = profile
        self.instancecount = instancecount
        self.constants: dict[str, str] = {}
        self.resources: list[FakeBucket] = []
        self.results: FakeBucket | None = None
        self.snapshot_whitelist: str | None = None
        self.snapshot_calls: list[tuple[int, str | None]] = []
        self.submitted = False
        self.uuid = "task-0001"
        self._hardware_constraints: list[Any] = []
        self.constraints_set_while_unsubmitted: bool | None = None
        self._scheduling_type: Any = None
        self.scheduling_set_while_unsubmitted: bool | None = None

    @property
    def hardware_constraints(self) -> list[Any]:
        return self._hardware_constraints

    @hardware_constraints.setter
    def hardware_constraints(self, value: list[Any]) -> None:
        # The real SDK raises once the task is launched; record the ordering
        # instead so a test can assert it.
        self.constraints_set_while_unsubmitted = not self.submitted
        self._hardware_constraints = value

    @property
    def scheduling_type(self) -> Any:
        return self._scheduling_type

    @scheduling_type.setter
    def scheduling_type(self, value: Any) -> None:
        self.scheduling_set_while_unsubmitted = not self.submitted
        self._scheduling_type = value

    def submit(self) -> None:
        self.submitted = True

    def snapshot(self, interval: int, whitelist: str | None = None, **_: Any) -> None:
        self.snapshot_calls.append((interval, whitelist))


class FakeConnection:
    def __init__(self) -> None:
        self.buckets: dict[str, FakeBucket] = {}
        self.tasks: list[FakeTask] = []

    def retrieve_or_create_bucket(self, name: str) -> FakeBucket:
        return self.buckets.setdefault(name, FakeBucket(name))

    def create_task(self, name: str, profile: str, instancecount: int = 1) -> FakeTask:
        task = FakeTask(name, profile, instancecount)
        self.tasks.append(task)
        return task

    def retrieve_task(self, uuid: str) -> FakeTask:
        for task in self.tasks:
            if task.uuid == uuid:
                return task
        raise KeyError(uuid)


@pytest.fixture
def campaign(tmp_path: Path) -> Path:
    runs_dir = tmp_path / "RUNS"
    (runs_dir / "MESH").mkdir(parents=True)
    (runs_dir / "MESH" / "m.med").write_text("mesh", encoding="utf-8")
    case_dir = runs_dir / "case0001"
    (case_dir / "DATA").mkdir(parents=True)
    (case_dir / "DATA" / "setup.xml").write_text("<x/>", encoding="utf-8")
    (case_dir / "doe_row.csv").write_text("a\n1\n", encoding="utf-8")
    (runs_dir / "csauto.toml").write_text("solver = 'code_saturne'\n", encoding="utf-8")
    return case_dir


def _submit(backend: QarnotBackend, case_dir: Path, **kwargs: Any) -> str:
    defaults: dict[str, Any] = {
        "argv": ["run", "--case", ".", "-n", "4", "--nt", "1"],
        "image": "simvia/code_saturne:9.0",
        "nprocs": 4,
        "nt": 1,
        "observability_globs": ("RESU/*/listing",),
        "options": {},
    }
    defaults.update(kwargs)
    return backend.submit(case_dir, **defaults)


def test_submit_returns_the_task_uuid(campaign: Path) -> None:
    connection = FakeConnection()

    task_id = _submit(QarnotBackend(connection=connection), campaign)

    assert task_id == "task-0001"
    assert connection.tasks[0].submitted is True


def test_submit_sets_the_docker_batch_constants(campaign: Path) -> None:
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign)

    task = connection.tasks[0]
    assert task.profile == "docker-batch"
    assert task.constants["DOCKER_REPO"] == "simvia/code_saturne"
    assert task.constants["DOCKER_TAG"] == "9.0"
    assert task.constants["DOCKER_CMD"] == "run --case . -n 4 --nt 1"


def test_submit_asks_for_one_instance_not_one_per_process(campaign: Path) -> None:
    """Qarnot instances are separate machines. nprocs would run four copies."""
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign, nprocs=4)

    assert connection.tasks[0].instancecount == 1


def test_submit_uploads_the_case_inputs_but_not_the_mesh(campaign: Path) -> None:
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign)

    case_bucket = next(b for b in connection.buckets.values() if b.uuid.endswith("-case0001"))
    assert set(case_bucket.files) == {"DATA/setup.xml", "doe_row.csv"}


def test_submit_uploads_the_shared_directories_once_per_campaign(campaign: Path) -> None:
    connection = FakeConnection()
    backend = QarnotBackend(connection=connection)

    _submit(backend, campaign)
    shared = next(b for b in connection.buckets.values() if b.uuid.endswith("-shared"))
    assert shared.directories == [(str(campaign.parent / "MESH"), "MESH")]

    _submit(backend, campaign)
    assert len(shared.directories) == 1, "unchanged shared dirs must not be re-uploaded"


def test_the_shared_bucket_is_re_uploaded_when_the_mesh_changes(campaign: Path) -> None:
    connection = FakeConnection()
    backend = QarnotBackend(connection=connection)

    _submit(backend, campaign)
    (campaign.parent / "MESH" / "m.med").write_text("a different mesh", encoding="utf-8")
    _submit(backend, campaign)

    shared = next(b for b in connection.buckets.values() if b.uuid.endswith("-shared"))
    assert len(shared.directories) == 2


def test_submit_whitelists_only_the_observability_files(campaign: Path) -> None:
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign)

    task = connection.tasks[0]
    assert re.match(task.snapshot_whitelist, "RESU/r1/listing")
    assert task.snapshot_calls == [(60, task.snapshot_whitelist)]


def test_submit_does_not_snapshot_when_the_adapter_declares_nothing(campaign: Path) -> None:
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign, observability_globs=())

    assert connection.tasks[0].snapshot_calls == []


def test_submit_refuses_a_solver_that_builds_no_remote_argv(campaign: Path) -> None:
    connection = FakeConnection()

    with pytest.raises(ValueError, match="does not build a remote command"):
        _submit(QarnotBackend(connection=connection), campaign, argv=[])


def test_submit_refuses_an_oversized_case(campaign: Path) -> None:
    (campaign.parent / "csauto.toml").write_text(
        "solver = 'code_saturne'\n[qarnot]\nmax_upload_mb = 1\n", encoding="utf-8"
    )
    (campaign / "DATA" / "big.dat").write_text("x" * (2 * 1024 * 1024), encoding="utf-8")
    connection = FakeConnection()

    with pytest.raises(ValueError, match="over the 1 MB limit"):
        _submit(QarnotBackend(connection=connection), campaign)


def test_a_missing_token_is_reported_without_leaking_anything(monkeypatch: pytest.MonkeyPatch) -> None:
    monkeypatch.delenv("QARNOT_TOKEN", raising=False)

    with pytest.raises(RuntimeError, match="QARNOT_TOKEN"):
        QarnotBackend()._connect()


class PolledTask(FakeTask):
    def __init__(self, state: str, progress: float = 50.0) -> None:
        super().__init__("t", "docker-batch", 1)
        self.state = state
        self.progress = progress
        self.execution_time = 12.5
        self.running_core_count = 4
        self.aborted = False
        self.downloaded: list[str] = []
        self.results = FakeBucket("out")
        self._stdout = "iteration 1\n"
        self._stderr = ""

    def fresh_stdout(self, instanceId: int | None = None) -> str:
        out, self._stdout = self._stdout, ""
        return out

    def fresh_stderr(self, instanceId: int | None = None) -> str:
        out, self._stderr = self._stderr, ""
        return out

    def download_results(self, output_dir: str, progress: Any = None) -> None:
        self.downloaded.append(output_dir)

    def abort(self) -> None:
        self.aborted = True


def _backend_with(task: PolledTask) -> QarnotBackend:
    connection = FakeConnection()
    task.uuid = "task-0001"
    connection.tasks.append(task)
    return QarnotBackend(connection=connection)


@pytest.mark.parametrize(
    ("qarnot_state", "expected"),
    [
        ("Submitted", "PENDING"),
        ("PartiallyDispatched", "PENDING"),
        ("FullyDispatched", "PENDING"),
        ("PartiallyExecuting", "RUNNING"),
        ("FullyExecuting", "RUNNING"),
        ("UploadingResults", "RUNNING"),
        ("DownloadingResults", "RUNNING"),
        ("PendingCancel", "RUNNING"),
        ("Success", "DONE"),
        ("Failure", "FAILED"),
        ("Cancelled", "FAILED"),
        ("PendingDelete", "FAILED"),
    ],
)
def test_poll_translates_every_qarnot_state(qarnot_state: str, expected: str) -> None:
    backend = _backend_with(PolledTask(qarnot_state))

    assert backend.poll("task-0001").status == expected


def test_an_unknown_state_is_reported_pending_not_failed() -> None:
    """A state name csauto has never seen must not fail a running campaign."""
    backend = _backend_with(PolledTask("SomeNewState"))

    assert backend.poll("task-0001").status == "PENDING"


def test_poll_returns_progress_as_a_fraction() -> None:
    """Qarnot reports a percentage; BackendState.progress is 0..1."""
    backend = _backend_with(PolledTask("FullyExecuting", progress=50.0))

    assert backend.poll("task-0001").progress == 0.5


def test_poll_returns_only_the_new_output() -> None:
    task = PolledTask("FullyExecuting")
    backend = _backend_with(task)

    assert backend.poll("task-0001").stdout_delta == "iteration 1\n"
    assert backend.poll("task-0001").stdout_delta == ""


def test_poll_reports_the_timing_figures() -> None:
    backend = _backend_with(PolledTask("FullyExecuting"))

    state = backend.poll("task-0001")

    assert state.execution_time_s == 12.5
    assert state.running_core_count == 4


def test_sync_downloads_into_the_case_directory(tmp_path: Path) -> None:
    task = PolledTask("FullyExecuting")
    backend = _backend_with(task)

    backend.sync("task-0001", tmp_path / "case0001")

    assert task.downloaded == [str(tmp_path / "case0001")]


def test_fetch_final_pulls_the_whole_results_bucket(tmp_path: Path) -> None:
    task = PolledTask("Success")
    pulled: list[str] = []
    task.results.get_all_files = lambda output_dir, progress=None: pulled.append(output_dir)  # type: ignore[attr-defined]
    backend = _backend_with(task)

    backend.fetch_final("task-0001", tmp_path / "case0001")

    assert pulled == [str(tmp_path / "case0001")]


def test_cancel_aborts_the_task() -> None:
    task = PolledTask("FullyExecuting")
    backend = _backend_with(task)

    backend.cancel("task-0001")

    assert task.aborted is True


def test_qarnot_is_a_registered_backend() -> None:
    from csauto.backends import available_backends

    assert "qarnot" in available_backends()


def test_cancel_leaves_a_finished_task_alone() -> None:
    """Qarnot refuses to abort a finished task, and Stop must not blow up."""
    task = PolledTask("Success")
    backend = _backend_with(task)

    backend.cancel("task-0001")

    assert task.aborted is False


def test_cancel_tolerates_a_task_that_finished_mid_call() -> None:
    """The task can end between reading its state and aborting it."""
    task = PolledTask("FullyExecuting")

    def abort() -> None:
        raise RuntimeError("Invalid operation on non-running task")

    task.abort = abort  # type: ignore[method-assign]
    backend = _backend_with(task)

    backend.cancel("task-0001")


def test_cancel_still_reports_a_real_failure() -> None:
    task = PolledTask("FullyExecuting")

    def abort() -> None:
        raise RuntimeError("invalid credentials")

    task.abort = abort  # type: ignore[method-assign]
    backend = _backend_with(task)

    with pytest.raises(RuntimeError, match="invalid credentials"):
        backend.cancel("task-0001")


def test_submit_demands_enough_cores_for_the_requested_ranks(campaign: Path) -> None:
    """Qarnot allocates any machine unless told otherwise.

    -n and --nt only reach code_saturne, inside DOCKER_CMD. Without a hardware
    constraint the task can land on a node with fewer cores than the run asks
    for, oversubscribing MPI on compute the user pays for.
    """
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign, nprocs=4, nt=2)

    constraints = [c.to_json() for c in connection.tasks[0].hardware_constraints]
    assert constraints == [{"discriminator": "MinimumCoreHardwareConstraint", "coreCount": 8}]


def test_submit_never_demands_fewer_than_one_core(campaign: Path) -> None:
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign, nprocs=0, nt=0)

    assert connection.tasks[0].hardware_constraints[0].to_json()["coreCount"] == 1


def test_the_core_constraint_is_set_before_submission(campaign: Path) -> None:
    """The SDK refuses hardware_constraints once the task is launched."""
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign)

    task = connection.tasks[0]
    assert task.constraints_set_while_unsubmitted is True


def test_submit_defaults_to_flex_scheduling(campaign: Path) -> None:
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign)

    assert connection.tasks[0].scheduling_type.schedulingType == "Flex"


def test_submit_honours_the_chosen_scheduling(campaign: Path) -> None:
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign, options={"scheduling": "OnDemand"})

    assert connection.tasks[0].scheduling_type.schedulingType == "OnDemand"


def test_submit_rejects_an_unknown_scheduling(campaign: Path) -> None:
    connection = FakeConnection()

    with pytest.raises(ValueError, match="Unknown scheduling"):
        _submit(QarnotBackend(connection=connection), campaign, options={"scheduling": "Cheap"})


def test_submit_pins_the_chosen_node(campaign: Path) -> None:
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign, nprocs=2, nt=1, options={"node": "r640-a"})

    constraints = [c.to_json() for c in connection.tasks[0].hardware_constraints]
    assert constraints == [
        {"discriminator": "MinimumCoreHardwareConstraint", "coreCount": 2},
        {"discriminator": "SpecificHardwareConstraint", "specificationKey": "r640-a"},
    ]


def test_submit_without_a_node_asks_only_for_cores(campaign: Path) -> None:
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign, nprocs=2, nt=1, options={"node": "  "})

    constraints = [c.to_json() for c in connection.tasks[0].hardware_constraints]
    assert constraints == [{"discriminator": "MinimumCoreHardwareConstraint", "coreCount": 2}]


def test_the_scheduling_is_set_before_submission(campaign: Path) -> None:
    """The SDK refuses scheduling_type once the task is launched."""
    connection = FakeConnection()

    _submit(QarnotBackend(connection=connection), campaign)

    assert connection.tasks[0].scheduling_set_while_unsubmitted is True


class _Spec:
    """What all_hardware_constraints yields for a node specification."""

    def __init__(self, key: str) -> None:
        self._specification_key = key

    def to_json(self) -> dict[str, object]:
        return {"discriminator": "SpecificHardwareConstraint", "specificationKey": self._specification_key}


class _Other:
    def to_json(self) -> dict[str, object]:
        return {"discriminator": "GpuHardwareConstraint"}


@pytest.fixture(autouse=True)
def _no_option_cache() -> None:
    QarnotBackend.clear_options_cache()


def test_launch_options_always_offer_the_scheduling_choices() -> None:
    connection = FakeConnection()
    connection.all_hardware_constraints = lambda: iter(())

    catalogue = QarnotBackend(connection=connection).launch_options()

    by_key = {option.key: option for option in catalogue.options}
    assert [value for value, _label in by_key["scheduling"].choices] == ["Flex", "OnDemand", "Reserved"]
    assert by_key["scheduling"].default == "Flex"


def test_launch_options_list_the_account_node_types() -> None:
    connection = FakeConnection()
    connection.all_hardware_constraints = lambda: iter([_Spec("r640-a"), _Other(), _Spec("r740-b")])

    catalogue = QarnotBackend(connection=connection).launch_options()

    node = next(option for option in catalogue.options if option.key == "node")
    assert [value for value, _label in node.choices] == ["", "r640-a", "r740-b"]
    assert node.default == ""
    assert catalogue.degraded is False


def test_launch_options_degrade_instead_of_raising() -> None:
    """The dialog must still open, and the launch must still be possible."""

    def explode():
        raise RuntimeError("qarnot is down")

    connection = FakeConnection()
    connection.all_hardware_constraints = explode

    catalogue = QarnotBackend(connection=connection).launch_options()

    node = next(option for option in catalogue.options if option.key == "node")
    assert catalogue.degraded is True
    assert [value for value, _label in node.choices] == [""]


def test_launch_options_degrade_when_there_is_no_token(monkeypatch: pytest.MonkeyPatch) -> None:
    monkeypatch.delenv("QARNOT_TOKEN", raising=False)

    catalogue = QarnotBackend().launch_options()

    assert catalogue.degraded is True
    assert [option.key for option in catalogue.options] == ["scheduling", "node"]


def test_the_node_list_is_cached() -> None:
    calls: list[int] = []

    def counted():
        calls.append(1)
        return iter([_Spec("r640-a")])

    connection = FakeConnection()
    connection.all_hardware_constraints = counted
    backend = QarnotBackend(connection=connection)

    backend.launch_options()
    backend.launch_options()

    assert len(calls) == 1


def test_a_degraded_result_is_not_cached() -> None:
    """A transient outage must not hide the node list for ten minutes."""
    states = iter([RuntimeError("down"), [_Spec("r640-a")]])

    def flaky():
        value = next(states)
        if isinstance(value, Exception):
            raise value
        return iter(value)

    connection = FakeConnection()
    connection.all_hardware_constraints = flaky
    backend = QarnotBackend(connection=connection)

    assert backend.launch_options().degraded is True
    assert backend.launch_options().degraded is False
