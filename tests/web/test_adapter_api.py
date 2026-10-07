"""HTTP API behaviour that comes from the solver adapter rather than from code_saturne."""

from __future__ import annotations

import re
from pathlib import Path

import pytest

from csauto.registry import STATUS_DONE, STATUS_PREPARED, load_registry, save_registry
from csauto.solvers.base import ControlAction, PerfColumn, RestartMode
from csauto.solvers.stub import StubAdapter

pytest.importorskip("fastapi")
pytest.importorskip("starlette")


class ProbeAdapter(StubAdapter):
    """A stub with custom timing columns, a float control action and two restart modes."""

    performance_columns = (PerfColumn("cpu_time", "CPU (s)", "time"), PerfColumn("peak_mb", "Peak (MB)", "int"))
    control_actions = (ControlAction("stop", "Stop"), ControlAction("relax", "Relax", "Factor", "float"))
    restart_modes = (RestartMode("again", "Run again"), RestartMode("more", "More steps", "Steps"))
    anomaly_patterns = (("warn", re.compile(r"\bslow\b")),)

    def find_performance_log(self, case_dir):
        return case_dir / "perf.txt"

    def parse_performance(self, path):
        return {"cpu_time": "11.0", "peak_mb": "512"}

    def build_restart_args(self, case_dir, restart_mode, restart_value, restart_path):
        return [], {}


@pytest.fixture()
def client_for(monkeypatch, runs_dir: Path):
    from fastapi.testclient import TestClient

    from csauto.fastapi_app import create_fastapi_app

    def make(adapter):
        monkeypatch.setattr("csauto.fastapi_app.get_solver_adapter", lambda _name=None: adapter)
        return TestClient(create_fastapi_app(runs_dir))

    return make


@pytest.fixture()
def stub_case(runs_dir: Path) -> Path:
    case_dir = runs_dir / "case0001"
    (case_dir / "OUT" / "run_0001").mkdir(parents=True)
    (case_dir / "stub.toml").write_text("steps = 1\n", encoding="utf-8")
    (case_dir / "perf.txt").write_text("", encoding="utf-8")
    save_registry(runs_dir, {"case0001": {"case_id": "case0001", "path": str(case_dir), "status": STATUS_DONE}})
    return case_dir


def test_perf_returns_the_adapters_own_columns(client_for, stub_case) -> None:
    data = client_for(ProbeAdapter()).get("/api/perf?case=case0001").json()
    assert [c["key"] for c in data["columns"]] == ["cpu_time", "peak_mb"]
    assert data["records"] == [{"case_id": "case0001", "cpu_time": "11.0", "peak_mb": "512"}]


def test_tail_files_always_offer_the_launcher_logs(client_for, stub_case) -> None:
    (stub_case / "csauto.stdout").write_text("hello\nrun is slow\nerror: boom\n", encoding="utf-8")
    client = client_for(ProbeAdapter())
    files = client.get("/api/tail_files?case=case0001").json()["files"]
    assert "csauto.stdout" in files
    lines = client.get("/api/tail_lines?case=case0001&file=csauto.stdout&n=10").json()["lines"]
    assert [line["severity"] for line in lines] == [None, "warn", "error"]


def test_solver_images(client_for, stub_case) -> None:
    from csauto.solvers import get_solver_adapter

    assert client_for(ProbeAdapter()).get("/api/solver_logo").status_code == 404
    response = client_for(get_solver_adapter("code_saturne")).get("/api/solver_logo")
    assert response.status_code == 200
    assert response.headers["content-type"].startswith("image/svg+xml")
    assert response.headers["cache-control"] == "no-cache"


def test_control_values_follow_the_declared_kind(client_for, stub_case, monkeypatch) -> None:
    calls: list[tuple[str, object]] = []
    monkeypatch.setattr(
        "csauto.fastapi_routes.actions.control_case",
        lambda _runs, _case, action, **kwargs: calls.append((action, kwargs["value"])) or {},
    )
    client = client_for(ProbeAdapter())

    def post(action: str, value: object = None) -> int:
        return client.post(
            "/api/control_case", json={"cases": ["case0001"], "action": action, "value": value}
        ).status_code

    assert post("relax", 0.5) == 200
    assert post("stop") == 200
    assert post("stop", 2) == 400  # takes no value
    assert post("relax") == 400  # needs one
    assert post("pause") == 400  # not declared
    assert calls == [("relax", 0.5), ("stop", None)]


def test_restart_modes_come_from_the_adapter(client_for, stub_case, monkeypatch) -> None:
    calls: list[dict[str, object]] = []
    monkeypatch.setattr("csauto.fastapi_routes.actions.run_cases", lambda *_a, **kwargs: calls.append(kwargs))
    monkeypatch.setattr("csauto.fastapi_routes.actions.resolve_runtime", lambda **_kw: _Selection())
    client = client_for(ProbeAdapter())

    def run(**restart: object) -> int:
        payload = {"cases": ["case0001"], "n": 1, "nt": 1, "restart": True, **restart}
        return client.post("/api/run_case", json=payload).status_code

    assert run(restart_mode="more", restart_value=10, restart_path="run_0001") == 200
    assert run(restart_mode="more", restart_value=2.5) == 400  # whole number expected
    assert run(restart_mode="again") == 200
    assert run(restart_mode="iterations", restart_value=10) == 400  # code_saturne's mode, not this solver's
    assert [(c["restart_mode"], c["restart_value"], c["restart_path"]) for c in calls] == [
        ("more", 10, "run_0001"),
        ("again", None, None),
    ]


class _Selection:
    runtime = "native"
    docker_image = ""
    saturne_bin = "/usr/bin/python3"
    singularity_image = None
    singularity_bin = None


def test_clean_resets_a_case_only_when_its_runs_are_deleted(client_for, stub_case, runs_dir: Path) -> None:
    client = client_for(StubAdapter())
    logs_only = {"cases": ["case0001"], "prune_resu": False, "max_log_mb": 50}
    assert client.post("/api/cleanup_cases", json=logs_only).status_code == 200
    assert load_registry(runs_dir)["case0001"]["status"] == STATUS_DONE

    prune = {"cases": ["case0001"], "prune_resu": True, "keep_last": 0}
    assert client.post("/api/cleanup_cases", json=prune).json()["resu_removed"] == 1
    assert load_registry(runs_dir)["case0001"]["status"] == STATUS_PREPARED


def test_kill_only_searches_docker_for_docker_runs(runs_dir: Path, monkeypatch) -> None:
    from csauto.web_support import kill_case

    lookups: list[tuple[str, Path]] = []
    monkeypatch.setattr(
        "csauto.web_support.find_container_id_for_case",
        lambda case_id, runs: lookups.append((case_id, runs)) or None,
    )
    for runtime in ("native", "docker"):
        save_registry(runs_dir, {"case0001": {"case_id": "case0001", "status": "RUNNING", "runtime": runtime}})
        with pytest.raises(ValueError, match="No PID, container_id or job_id"):
            kill_case(runs_dir, "case0001", actor=None, job_id_patterns=[], adapter=StubAdapter())
    assert lookups == [("case0001", runs_dir)]
