from __future__ import annotations

import io
import json
import os
import time
import urllib.request
from pathlib import Path
from urllib.error import HTTPError

import pytest

from csauto.execution import RuntimeSelection
from csauto.fastapi_app import create_fastapi_app
from csauto.registry import load_registry, save_registry

_ACTIVE_TEST_CLIENT = None


class _DummyThread:
    def join(self, timeout: float | None = None) -> None:
        return None


class _InProcessServer:
    def __init__(self, client) -> None:
        self._client = client
        self.server_address = ("127.0.0.1", 0)

    def shutdown(self) -> None:
        global _ACTIVE_TEST_CLIENT

        self._client.close()
        _ACTIVE_TEST_CLIENT = None

    def server_close(self) -> None:
        return None


def _start_server(
    runs_dir: Path,
    **server_kwargs: object,
) -> tuple[str, _DummyThread, _InProcessServer]:
    global _ACTIVE_TEST_CLIENT

    pytest.importorskip("fastapi")
    pytest.importorskip("starlette")
    from fastapi.testclient import TestClient

    app = create_fastapi_app(runs_dir, **server_kwargs)
    client = TestClient(app)
    _ACTIVE_TEST_CLIENT = client
    base_url = "http://testserver"
    httpd = _InProcessServer(client)
    thread = _DummyThread()
    return base_url, thread, httpd


def _http_get(url: str) -> tuple[int, str]:
    global _ACTIVE_TEST_CLIENT

    if url.startswith("http://testserver"):
        assert _ACTIVE_TEST_CLIENT is not None
        path = url[len("http://testserver") :]
        resp = _ACTIVE_TEST_CLIENT.get(path)
        if resp.status_code >= 400:
            raise HTTPError(url, resp.status_code, resp.text, hdrs=None, fp=io.BytesIO(resp.content))
        return resp.status_code, resp.text

    with urllib.request.urlopen(url, timeout=2) as resp:
        return resp.status, resp.read().decode("utf-8")


def _http_post(url: str, payload: dict[str, object]) -> tuple[int, str]:
    global _ACTIVE_TEST_CLIENT

    if url.startswith("http://testserver"):
        assert _ACTIVE_TEST_CLIENT is not None
        path = url[len("http://testserver") :]
        resp = _ACTIVE_TEST_CLIENT.post(path, json=payload)
        if resp.status_code >= 400:
            raise HTTPError(url, resp.status_code, resp.text, hdrs=None, fp=io.BytesIO(resp.content))
        return resp.status_code, resp.text

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=2) as resp:
        return resp.status, resp.read().decode("utf-8")


@pytest.fixture()
def web_env(runs_dir: Path, case_factory, registry_factory):
    global _ACTIVE_TEST_CLIENT

    case_dir = case_factory(runs_dir, "case0001")
    resu_dir = case_dir / "RESU" / "001"
    resu_dir.mkdir(parents=True, exist_ok=True)
    (resu_dir / "residuals.csv").write_text("iteration,velocity\n1,1e-2\n", encoding="utf-8")
    (resu_dir / "performance.log").write_text(
        "\n".join(
            [
                "total elapsed time: 120.0",
                "mpi ranks: 16",
                "openmp threads: 2",
                "I/O time: 9.0",
                "linear solver time: 80.0",
                "gradients time: 20.0",
                "balances time: 11.0",
            ]
        ),
        encoding="utf-8",
    )
    (resu_dir / "setup.log").write_text(
        "\n".join(
            [
                "NUMBER OF THE PREVIOUS TIME STEP nt_prev = 500",
                "physical time 12.5",
            ]
        ),
        encoding="utf-8",
    )
    probe_dir = resu_dir / "monitoring"
    probe_dir.mkdir(parents=True, exist_ok=True)
    (probe_dir / "probe_density.csv").write_text("time,1,2\n0.0,1.0,2.0\n1.0,1.1,2.1\n", encoding="utf-8")
    profile_dir = resu_dir / "profiles"
    profile_dir.mkdir(parents=True, exist_ok=True)
    (profile_dir / "profile_temperature.csv").write_text("s,temperature\n0.0,300.0\n1.0,320.0\n", encoding="utf-8")
    (probe_dir / "probe_coords.csv").write_text("x,y,z\n1.0,2.0,3.0\n4.0,5.0,6.0\n", encoding="utf-8")
    registry_factory(runs_dir, "case0001", case_dir, status="PREPARED")

    base_url, thread, httpd = _start_server(runs_dir)
    try:
        yield base_url, case_dir
    finally:
        httpd.shutdown()
        httpd.server_close()
        thread.join(timeout=2)
        _ACTIVE_TEST_CLIENT = None


def test_api_status_returns_rows(web_env) -> None:
    base_url, _case_dir = web_env
    status, body = _http_get(f"{base_url}/api/status")
    assert status == 200
    data = json.loads(body)
    assert data["rows"]
    assert data["rows"][0]["case_id"] == "case0001"


def test_api_status_uses_short_cache_and_invalidates_on_note_update(
    runs_dir: Path,
    case_factory,
    registry_factory,
    monkeypatch,
) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    registry_factory(runs_dir, "case0001", case_dir, status="PREPARED")
    calls = {"count": 0}

    def fake_refresh_status(_runs_dir: Path, include_doe: bool = False):
        calls["count"] += 1
        payload = [{"case_id": "case0001", "status": "PREPARED", "note": "", "resu_size_mb": None}]
        if include_doe:
            return payload, []
        return payload

    monkeypatch.setattr("csauto.web_services.refresh_status", fake_refresh_status)
    base_url, thread, httpd = _start_server(runs_dir)
    try:
        status, _body = _http_get(f"{base_url}/api/status")
        assert status == 200
        status, _body = _http_get(f"{base_url}/api/status")
        assert status == 200
        assert calls["count"] == 1

        status, body = _http_post(
            f"{base_url}/api/case_note",
            {"case": "case0001", "note": "invalidate cache"},
        )
        assert status == 200
        assert json.loads(body)["status"] == "ok"

        status, _body = _http_get(f"{base_url}/api/status")
        assert status == 200
        assert calls["count"] == 2
    finally:
        httpd.shutdown()
        httpd.server_close()
        thread.join(timeout=2)


def test_web_index_serves_svelte_spa(web_env) -> None:
    base_url, _case_dir = web_env
    status, body = _http_get(f"{base_url}/")
    assert status == 200
    assert "_app/" in body


def test_api_case_file_get_and_post(web_env) -> None:
    base_url, case_dir = web_env
    status, body = _http_get(f"{base_url}/api/case_file?case=case0001&kind=setup.xml")
    assert status == 200
    assert "<root/>" in body

    status, body = _http_post(
        f"{base_url}/api/case_file",
        {"case": "case0001", "kind": "setup.xml", "content": "<root>updated</root>"},
    )
    assert status == 200
    assert json.loads(body)["status"] == "ok"
    assert (case_dir / "DATA" / "setup.xml").read_text(encoding="utf-8") == "<root>updated</root>"


def test_api_case_file_get_unknown_case_returns_404(web_env) -> None:
    base_url, _case_dir = web_env
    with pytest.raises(HTTPError) as excinfo:
        _http_get(f"{base_url}/api/case_file?case=case9999&kind=setup.xml")
    assert excinfo.value.code == 404


def test_api_case_file_post_missing_content_returns_400(web_env) -> None:
    base_url, _case_dir = web_env
    with pytest.raises(HTTPError) as excinfo:
        _http_post(f"{base_url}/api/case_file", {"case": "case0001", "kind": "setup.xml"})
    assert excinfo.value.code == 400


def test_api_case_file_post_path_traversal_returns_404(web_env) -> None:
    """Fix 4: writing to a kind that resolves outside case_dir must be rejected.
    locate_case_file returns None for traversal paths (first layer of defence),
    so the API returns 404 before reaching the explicit resolve() check."""
    base_url, _case_dir = web_env
    with pytest.raises(HTTPError) as excinfo:
        _http_post(
            f"{base_url}/api/case_file",
            {"case": "case0001", "kind": "../../evil.txt", "content": "evil"},
        )
    assert excinfo.value.code == 404


def test_api_compare_runs_filter_too_long_returns_400(web_env) -> None:
    """Fix 3: ReDoS — filter expressions longer than 200 chars must be rejected
    before any expensive regex compilation or file reading occurs."""
    base_url, _case_dir = web_env
    long_filter = "a" * 201
    with pytest.raises(HTTPError) as excinfo:
        _http_get(f"{base_url}/api/compare_runs?case=case0001&base=case0001&kind=setup.xml&filter={long_filter}")
    assert excinfo.value.code == 400


def test_api_compare_runs_invalid_filter_returns_400(web_env) -> None:
    """Fix 3: ReDoS — an invalid regex in filter must return 400 immediately."""
    base_url, _case_dir = web_env
    with pytest.raises(HTTPError) as excinfo:
        _http_get(f"{base_url}/api/compare_runs?case=case0001&base=case0001&kind=setup.xml&filter=%5B%5Binvalid")
    assert excinfo.value.code == 400


def test_api_case_convergence_updates_finished_case(web_env) -> None:
    base_url, case_dir = web_env
    registry = load_registry(case_dir.parent)
    registry["case0001"]["status"] = "DONE"
    save_registry(case_dir.parent, registry)

    status, body = _http_post(
        f"{base_url}/api/case_convergence",
        {"case": "case0001", "convergence": "converged"},
    )
    assert status == 200
    assert json.loads(body)["status"] == "ok"

    registry_after = load_registry(case_dir.parent)
    assert registry_after["case0001"]["convergence"] == "converged"

    status, payload = _http_get(f"{base_url}/api/status")
    assert status == 200
    rows = json.loads(payload)["rows"]
    row = next(item for item in rows if item["case_id"] == "case0001")
    assert row["convergence"] == "converged"


def test_api_case_convergence_rejects_running_case(web_env) -> None:
    base_url, case_dir = web_env
    registry = load_registry(case_dir.parent)
    registry["case0001"]["status"] = "RUNNING"
    save_registry(case_dir.parent, registry)

    with pytest.raises(HTTPError) as excinfo:
        _http_post(
            f"{base_url}/api/case_convergence",
            {"case": "case0001", "convergence": "not_converged"},
        )
    assert excinfo.value.code == 400


def test_api_probes_and_residuals_svg(web_env) -> None:
    base_url, _case_dir = web_env
    status, body = _http_get(f"{base_url}/api/probes?case=case0001")
    assert status == 200
    data = json.loads(body)
    assert "probe_density.csv" in data["files"]

    status, body = _http_get(f"{base_url}/api/probes?case=case0001&scope=profiles")
    assert status == 200
    profiles = json.loads(body)["files"]
    assert "profiles/profile_temperature.csv" in profiles

    status, body = _http_get(f"{base_url}/api/probe_columns?case=case0001&probe=probe_density.csv")
    assert status == 200
    cols = json.loads(body)["columns"]
    assert "1" in cols
    assert "2" in cols

    status, svg = _http_get(f"{base_url}/api/residuals_svg?case=case0001")
    assert status == 200
    assert svg.lstrip().startswith("<svg")

    status, svg_zoomed = _http_get(f"{base_url}/api/residuals_svg?case=case0001&x_min=10")
    assert status == 200
    assert "No" in svg_zoomed

    status, probe_svg_zoomed = _http_get(f"{base_url}/api/probe_svg?case=case0001&probe=probe_density.csv&time_min=10")
    assert status == 200
    assert "No" in probe_svg_zoomed

    status, probe_svg_multi = _http_get(
        f"{base_url}/api/probe_svg?case=case0001&probe=probe_density.csv&columns=1,2&axis=time"
    )
    assert status == 200
    assert probe_svg_multi.lstrip().startswith("<svg")

    status, profile_svg = _http_get(
        f"{base_url}/api/probe_svg?case=case0001&probe=profiles/profile_temperature.csv&columns=temperature&axis=s&x_min=0.5"
    )
    assert status == 200
    assert profile_svg.lstrip().startswith("<svg")

    status, position_body = _http_get(f"{base_url}/api/probe_position?case=case0001&probe=probe_density.csv")
    assert status == 200
    position = json.loads(position_body)
    assert position["found"] is True
    assert position["x"] == 1.0
    assert position["y"] == 2.0
    assert position["z"] == 3.0

    status, position_body_col2 = _http_get(
        f"{base_url}/api/probe_position?case=case0001&probe=probe_density.csv&column=2"
    )
    assert status == 200
    position_col2 = json.loads(position_body_col2)
    assert position_col2["found"] is True
    assert position_col2["x"] == 4.0
    assert position_col2["y"] == 5.0
    assert position_col2["z"] == 6.0


def test_api_restart_origin(web_env) -> None:
    base_url, _case_dir = web_env
    status, body = _http_get(f"{base_url}/api/restart_origin?case=case0001")
    assert status == 200
    data = json.loads(body)
    assert "case0001" in data["origins"]
    origin = data["origins"]["case0001"]
    assert origin["iteration"] == 500
    assert origin["time"] == 12.5


def test_api_resu_files_returns_latest_resu_only(web_env) -> None:
    base_url, case_dir = web_env
    resu1 = case_dir / "RESU" / "001"
    resu2 = case_dir / "RESU" / "002"
    resu2.mkdir(parents=True, exist_ok=True)
    (resu1 / "run_solver.log").write_text("old\n", encoding="utf-8")
    (resu2 / "run_solver.log").write_text("new\n", encoding="utf-8")
    now = time.time()
    os.utime(resu1, (now - 120, now - 120))
    os.utime(resu2, (now, now))

    status, body = _http_get(f"{base_url}/api/resu_files?case=case0001")
    assert status == 200
    data = json.loads(body)
    files = data["files"]
    assert files
    assert all(path.startswith("RESU/002/") for path in files)
    assert all(not path.startswith("RESU/001/") for path in files)


def test_api_resu_dirs_returns_latest_first(web_env) -> None:
    base_url, case_dir = web_env
    resu1 = case_dir / "RESU" / "001"
    resu2 = case_dir / "RESU" / "002"
    resu2.mkdir(parents=True, exist_ok=True)
    now = time.time()
    os.utime(resu1, (now - 120, now - 120))
    os.utime(resu2, (now, now))

    status, body = _http_get(f"{base_url}/api/resu_dirs?case=case0001")
    assert status == 200
    data = json.loads(body)
    assert data["dirs"][:2] == ["002", "001"]


def test_api_cleanup_cases_can_keep_specific_resu_folder(web_env) -> None:
    base_url, case_dir = web_env
    (case_dir / "RESU" / "002").mkdir(parents=True, exist_ok=True)
    (case_dir / "RESU" / "003").mkdir(parents=True, exist_ok=True)

    status, body = _http_post(
        f"{base_url}/api/cleanup_cases",
        {
            "cases": ["case0001"],
            "prune_resu": True,
            "keep_resu": ["002"],
            "max_log_mb": 0,
            "clear_cid": False,
            "clear_pyc": False,
        },
    )
    assert status == 200
    data = json.loads(body)
    assert data["resu_removed"] == 2
    remaining = sorted(path.name for path in (case_dir / "RESU").iterdir() if path.is_dir())
    assert remaining == ["002"]


def test_api_cleanup_cases_can_delete_specific_resu_folder(web_env) -> None:
    base_url, case_dir = web_env
    (case_dir / "RESU" / "002").mkdir(parents=True, exist_ok=True)

    status, body = _http_post(
        f"{base_url}/api/cleanup_cases",
        {
            "cases": ["case0001"],
            "prune_resu": True,
            "delete_resu": ["001"],
            "max_log_mb": 0,
            "clear_cid": False,
            "clear_pyc": False,
        },
    )
    assert status == 200
    data = json.loads(body)
    assert data["resu_removed"] == 1
    remaining = sorted(path.name for path in (case_dir / "RESU").iterdir() if path.is_dir())
    assert remaining == ["002"]


def test_api_cleanup_cases_rejects_keep_and_delete_conflict(web_env) -> None:
    base_url, _case_dir = web_env
    with pytest.raises(HTTPError) as excinfo:
        _http_post(
            f"{base_url}/api/cleanup_cases",
            {
                "cases": ["case0001"],
                "prune_resu": True,
                "keep_resu": ["001"],
                "delete_resu": ["001"],
                "max_log_mb": 0,
                "clear_cid": False,
                "clear_pyc": False,
            },
        )
    assert excinfo.value.code == 400


def test_api_perf_returns_timing_breakdown(web_env) -> None:
    base_url, _case_dir = web_env
    status, body = _http_get(f"{base_url}/api/perf?case=case0001")
    assert status == 200
    data = json.loads(body)
    assert len(data["records"]) == 1
    record = data["records"][0]
    assert record["elapsed_time"] == "120.0"
    assert record["io_time"] == "9.0"
    assert record["linear_solver_time"] == "80.0"
    assert record["gradients_time"] == "20.0"
    assert record["balances_time"] == "11.0"


def test_api_recent_errors_filters_severity(web_env) -> None:
    base_url, case_dir = web_env
    log_path = case_dir / "run_solver.log"
    log_path.write_text("Warning: clipping\nFATAL ERROR: boom\n", encoding="utf-8")
    status, body = _http_get(f"{base_url}/api/recent_errors?case=case0001&sev=error&context=0")
    assert status == 200
    data = json.loads(body)
    assert data["items"]
    assert all(item["severity"] == "error" for item in data["items"])
    assert all("Warning" not in item["line_html"] for item in data["items"])


def test_api_kill_case_without_pid_returns_500(web_env) -> None:
    base_url, case_dir = web_env
    registry = load_registry(case_dir.parent)
    registry["case0001"]["status"] = "RUNNING"
    registry["case0001"].pop("pid", None)
    registry["case0001"].pop("container_id", None)
    registry["case0001"].pop("cidfile", None)
    save_registry(case_dir.parent, registry)
    with pytest.raises(HTTPError) as excinfo:
        _http_post(f"{base_url}/api/kill_case", {"cases": ["case0001"]})
    assert excinfo.value.code == 500


def test_api_kill_case_detects_job_id_from_stdout(
    runs_dir: Path,
    case_factory,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    case_dir = case_factory(runs_dir, "case0001")
    (case_dir / "csauto.stdout").write_text("Submitted batch job 12345\n", encoding="utf-8")
    save_registry(
        runs_dir,
        {
            "case0001": {
                "case_id": "case0001",
                "path": str(case_dir),
                "status": "RUNNING",
                "pid": None,
                "container_id": None,
                "cidfile": None,
                "start_time": "2026-03-08T10:00:00",
            }
        },
    )

    monkeypatch.setattr("csauto.web_support.find_container_id_for_case", lambda _case_id: None)
    monkeypatch.setattr(
        "csauto.web_support.shutil.which", lambda name: "/usr/bin/scancel" if name == "scancel" else None
    )
    calls: list[list[str]] = []

    class _Completed:
        returncode = 0
        stderr = ""
        stdout = ""

    def fake_run(cmd, **_kwargs):
        calls.append([str(part) for part in cmd])
        return _Completed()

    monkeypatch.setattr("csauto.web_support.subprocess.run", fake_run)

    base_url, thread, httpd = _start_server(runs_dir)
    try:
        status, body = _http_post(f"{base_url}/api/kill_case", {"cases": ["case0001"]})
        assert status == 200
        assert json.loads(body)["status"] == "ok"
    finally:
        httpd.shutdown()
        httpd.server_close()
        thread.join(timeout=2)

    assert calls == [["scancel", "12345"]]
    registry = load_registry(runs_dir)
    assert registry["case0001"]["status"] in {"DONE", "FAILED"}
    assert registry["case0001"]["pid"] is None
    assert registry["case0001"].get("job_id") is None


def test_api_kill_case_handles_multiple_job_ids(
    runs_dir: Path,
    case_factory,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    case1 = case_factory(runs_dir, "case0001")
    case2 = case_factory(runs_dir, "case0002")
    (case1 / "csauto.stdout").write_text("Submitted batch job 12345\n", encoding="utf-8")
    (case2 / "csauto.stdout").write_text("Submitted batch job 67890\n", encoding="utf-8")
    save_registry(
        runs_dir,
        {
            "case0001": {
                "case_id": "case0001",
                "path": str(case1),
                "status": "RUNNING",
                "pid": None,
                "container_id": None,
                "cidfile": None,
                "start_time": "2026-03-08T10:00:00",
            },
            "case0002": {
                "case_id": "case0002",
                "path": str(case2),
                "status": "RUNNING",
                "pid": None,
                "container_id": None,
                "cidfile": None,
                "start_time": "2026-03-08T10:00:00",
            },
        },
    )

    monkeypatch.setattr("csauto.web_support.find_container_id_for_case", lambda _case_id: None)
    monkeypatch.setattr(
        "csauto.web_support.shutil.which", lambda name: "/usr/bin/scancel" if name == "scancel" else None
    )
    calls: list[list[str]] = []

    class _Completed:
        returncode = 0
        stderr = ""
        stdout = ""

    def fake_run(cmd, **_kwargs):
        calls.append([str(part) for part in cmd])
        return _Completed()

    monkeypatch.setattr("csauto.web_support.subprocess.run", fake_run)

    base_url, thread, httpd = _start_server(runs_dir)
    try:
        status, body = _http_post(
            f"{base_url}/api/kill_case",
            {"cases": ["case0001", "case0002"]},
        )
        assert status == 200
        assert json.loads(body)["status"] == "ok"
    finally:
        httpd.shutdown()
        httpd.server_close()
        thread.join(timeout=2)

    killed_ids = sorted(call[1] for call in calls if len(call) >= 2 and call[0] == "scancel")
    assert killed_ids == ["12345", "67890"]


def test_api_run_case_without_max_parallel_uses_running_plus_requested(
    runs_dir: Path,
    case_factory,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    case1 = case_factory(runs_dir, "case0001")
    case2 = case_factory(runs_dir, "case0002")
    registry = {
        "case0001": {
            "case_id": "case0001",
            "path": str(case1),
            "status": "RUNNING",
            "pid": 4242,
        },
        "case0002": {
            "case_id": "case0002",
            "path": str(case2),
            "status": "PREPARED",
        },
    }
    save_registry(runs_dir, registry)

    monkeypatch.setattr("csauto.web_support.is_process_alive", lambda pid: int(pid) == 4242)
    monkeypatch.setattr(
        "csauto.fastapi_routes.actions.resolve_runtime",
        lambda **_kwargs: RuntimeSelection(runtime="docker", docker_image="dummy/image:latest"),
    )
    captured: dict[str, object] = {}

    def fake_run_cases(
        _runs_dir: Path,
        nprocs: int,
        nt: int,
        max_parallel: int,
        **kwargs: object,
    ) -> None:
        captured["nprocs"] = nprocs
        captured["nt"] = nt
        captured["max_parallel"] = max_parallel
        captured["case_filter"] = kwargs.get("case_filter")

    monkeypatch.setattr("csauto.fastapi_routes.actions.run_cases", fake_run_cases)

    base_url, thread, httpd = _start_server(runs_dir)
    try:
        status, body = _http_post(
            f"{base_url}/api/run_case",
            {"cases": ["case0002"], "n": 2, "nt": 3},
        )
        assert status == 200
        assert json.loads(body)["status"] == "ok"
    finally:
        httpd.shutdown()
        httpd.server_close()
        thread.join(timeout=2)

    assert captured["nprocs"] == 2
    assert captured["nt"] == 3
    assert captured["max_parallel"] == 2
    assert captured["case_filter"] == ["case0002"]


def test_api_run_case_restart_passes_restart_options(
    runs_dir: Path,
    case_factory,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    case1 = case_factory(runs_dir, "case0001")
    save_registry(
        runs_dir,
        {
            "case0001": {
                "case_id": "case0001",
                "path": str(case1),
                "status": "DONE",
            }
        },
    )

    monkeypatch.setattr(
        "csauto.fastapi_routes.actions.resolve_runtime",
        lambda **_kwargs: RuntimeSelection(runtime="docker", docker_image="dummy/image:latest"),
    )
    captured: dict[str, object] = {}

    def fake_run_cases(
        _runs_dir: Path,
        nprocs: int,
        nt: int,
        max_parallel: int,
        **kwargs: object,
    ) -> None:
        captured["nprocs"] = nprocs
        captured["nt"] = nt
        captured["max_parallel"] = max_parallel
        captured["case_filter"] = kwargs.get("case_filter")
        captured["restart"] = kwargs.get("restart")
        captured["restart_mode"] = kwargs.get("restart_mode")
        captured["restart_value"] = kwargs.get("restart_value")

    monkeypatch.setattr("csauto.fastapi_routes.actions.run_cases", fake_run_cases)

    base_url, thread, httpd = _start_server(runs_dir)
    try:
        status, body = _http_post(
            f"{base_url}/api/run_case",
            {
                "cases": ["case0001"],
                "n": 2,
                "nt": 3,
                "restart": True,
                "restart_mode": "iterations",
                "restart_value": 150,
            },
        )
        assert status == 200
        assert json.loads(body)["status"] == "ok"
    finally:
        httpd.shutdown()
        httpd.server_close()
        thread.join(timeout=2)

    assert captured["nprocs"] == 2
    assert captured["nt"] == 3
    assert captured["case_filter"] == ["case0001"]
    assert captured["restart"] is True
    assert captured["restart_mode"] == "iterations"
    assert captured["restart_value"] == 150


def test_api_run_case_passes_mpi_exec_options_from_server_config(
    runs_dir: Path,
    case_factory,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    case1 = case_factory(runs_dir, "case0001")
    save_registry(
        runs_dir,
        {
            "case0001": {
                "case_id": "case0001",
                "path": str(case1),
                "status": "PREPARED",
            }
        },
    )

    monkeypatch.setattr(
        "csauto.fastapi_routes.actions.resolve_runtime",
        lambda **_kwargs: RuntimeSelection(runtime="docker", docker_image="dummy/image:latest"),
    )
    captured: dict[str, object] = {}

    def fake_run_cases(
        _runs_dir: Path,
        nprocs: int,
        nt: int,
        max_parallel: int,
        **kwargs: object,
    ) -> None:
        captured["nprocs"] = nprocs
        captured["nt"] = nt
        captured["max_parallel"] = max_parallel
        captured["mpi_exec_options"] = kwargs.get("mpi_exec_options")

    monkeypatch.setattr("csauto.fastapi_routes.actions.run_cases", fake_run_cases)

    mpi_opts = "--mca btl vader,self,tcp --bind-to core"
    base_url, thread, httpd = _start_server(runs_dir, mpi_exec_options=mpi_opts)
    try:
        status, body = _http_post(
            f"{base_url}/api/run_case",
            {
                "cases": ["case0001"],
                "n": 2,
                "nt": 3,
            },
        )
        assert status == 200
        assert json.loads(body)["status"] == "ok"
    finally:
        httpd.shutdown()
        httpd.server_close()
        thread.join(timeout=2)

    assert captured["nprocs"] == 2
    assert captured["nt"] == 3
    assert captured["mpi_exec_options"] == mpi_opts


def test_api_run_case_restart_rejects_invalid_value(
    runs_dir: Path,
    case_factory,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    case1 = case_factory(runs_dir, "case0001")
    save_registry(
        runs_dir,
        {
            "case0001": {
                "case_id": "case0001",
                "path": str(case1),
                "status": "DONE",
            }
        },
    )
    monkeypatch.setattr(
        "csauto.fastapi_routes.actions.resolve_runtime",
        lambda **_kwargs: RuntimeSelection(runtime="docker", docker_image="dummy/image:latest"),
    )
    monkeypatch.setattr("csauto.fastapi_routes.actions.run_cases", lambda *_args, **_kwargs: None)

    base_url, thread, httpd = _start_server(runs_dir)
    try:
        with pytest.raises(HTTPError) as excinfo:
            _http_post(
                f"{base_url}/api/run_case",
                {
                    "cases": ["case0001"],
                    "n": 2,
                    "nt": 3,
                    "restart": True,
                    "restart_mode": "iterations",
                    "restart_value": 1.5,
                },
            )
        assert excinfo.value.code == 400
    finally:
        httpd.shutdown()
        httpd.server_close()
        thread.join(timeout=2)


# ---------------------------------------------------------------------------
# case_note error paths
# ---------------------------------------------------------------------------


def test_api_case_note_missing_note_returns_400(web_env) -> None:
    base_url, _case_dir = web_env
    with pytest.raises(HTTPError) as excinfo:
        _http_post(f"{base_url}/api/case_note", {"case": "case0001", "note": None})
    assert excinfo.value.code == 400


def test_api_case_note_missing_case_returns_400(web_env) -> None:
    base_url, _case_dir = web_env
    with pytest.raises(HTTPError) as excinfo:
        _http_post(f"{base_url}/api/case_note", {"note": "hello"})
    assert excinfo.value.code == 400


def test_api_case_note_nonexistent_case_returns_404(web_env) -> None:
    base_url, _case_dir = web_env
    with pytest.raises(HTTPError) as excinfo:
        _http_post(
            f"{base_url}/api/case_note",
            {"case": "case9999", "note": "hello"},
        )
    assert excinfo.value.code == 404


# ---------------------------------------------------------------------------
# run_case error paths
# ---------------------------------------------------------------------------


def test_api_run_case_missing_params_returns_400(
    runs_dir: Path,
    case_factory,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    case_factory(runs_dir, "case0001")
    save_registry(
        runs_dir,
        {"case0001": {"case_id": "case0001", "path": str(runs_dir / "case0001"), "status": "PREPARED"}},
    )
    monkeypatch.setattr(
        "csauto.fastapi_routes.actions.resolve_runtime",
        lambda **_kwargs: RuntimeSelection(runtime="native"),
    )
    monkeypatch.setattr("csauto.fastapi_routes.actions.run_cases", lambda *_a, **_kw: None)

    base_url, thread, httpd = _start_server(runs_dir)
    try:
        # missing n
        with pytest.raises(HTTPError) as excinfo:
            _http_post(f"{base_url}/api/run_case", {"cases": ["case0001"], "nt": 2})
        assert excinfo.value.code in {400, 422}

        # missing nt
        with pytest.raises(HTTPError) as excinfo:
            _http_post(f"{base_url}/api/run_case", {"cases": ["case0001"], "n": 2})
        assert excinfo.value.code in {400, 422}

        # missing cases
        with pytest.raises(HTTPError) as excinfo:
            _http_post(f"{base_url}/api/run_case", {"n": 2, "nt": 2})
        assert excinfo.value.code == 400

        # n <= 0
        with pytest.raises(HTTPError) as excinfo:
            _http_post(
                f"{base_url}/api/run_case",
                {"cases": ["case0001"], "n": 0, "nt": 2},
            )
        assert excinfo.value.code == 400
    finally:
        httpd.shutdown()
        httpd.server_close()
        thread.join(timeout=2)


# ---------------------------------------------------------------------------
# open_gui error paths
# ---------------------------------------------------------------------------


def test_api_open_gui_nonexistent_case_returns_404(web_env, monkeypatch) -> None:
    base_url, _case_dir = web_env
    monkeypatch.setenv("DISPLAY", ":0")
    with pytest.raises(HTTPError) as excinfo:
        _http_post(f"{base_url}/api/open_gui", {"case": "case9999"})
    assert excinfo.value.code == 404


# ---------------------------------------------------------------------------
# kill multi-case partial failure
# ---------------------------------------------------------------------------


def test_api_kill_case_partial_failure_returns_500(
    runs_dir: Path,
    case_factory,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    case1 = case_factory(runs_dir, "case0001")
    case2 = case_factory(runs_dir, "case0002")
    save_registry(
        runs_dir,
        {
            "case0001": {
                "case_id": "case0001",
                "path": str(case1),
                "status": "RUNNING",
                "pid": None,
                "container_id": None,
                "cidfile": None,
                "start_time": "2026-03-08T10:00:00",
            },
            "case0002": {
                "case_id": "case0002",
                "path": str(case2),
                "status": "RUNNING",
                "pid": None,
                "container_id": None,
                "cidfile": None,
                "start_time": "2026-03-08T10:00:00",
            },
        },
    )
    (case1 / "csauto.stdout").write_text("Submitted batch job 11111\n", encoding="utf-8")
    (case2 / "csauto.stdout").write_text("Submitted batch job 22222\n", encoding="utf-8")

    monkeypatch.setattr("csauto.web_support.find_container_id_for_case", lambda _cid: None)
    monkeypatch.setattr(
        "csauto.web_support.shutil.which", lambda name: "/usr/bin/scancel" if name == "scancel" else None
    )

    class _Completed:
        returncode = 0
        stderr = ""
        stdout = ""

    class _Failed:
        returncode = 1
        stderr = "scancel: error: Invalid job id"
        stdout = ""

    def fake_run(cmd, **_kwargs):
        job_id = cmd[-1] if cmd else ""
        if str(job_id) == "22222":
            return _Failed()
        return _Completed()

    monkeypatch.setattr("csauto.web_support.subprocess.run", fake_run)

    base_url, thread, httpd = _start_server(runs_dir)
    try:
        with pytest.raises(HTTPError) as excinfo:
            _http_post(
                f"{base_url}/api/kill_case",
                {"cases": ["case0001", "case0002"]},
            )
        assert excinfo.value.code == 500
        assert "case0002" in excinfo.value.read().decode("utf-8")
    finally:
        httpd.shutdown()
        httpd.server_close()
        thread.join(timeout=2)
