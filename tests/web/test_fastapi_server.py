from __future__ import annotations

import json
import os
import socket
import subprocess
import sys
import time
import urllib.request
from pathlib import Path
from urllib.error import HTTPError, URLError

import pytest


def _reserve_local_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.bind(("127.0.0.1", 0))
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        return int(sock.getsockname()[1])


def _http_get(url: str, headers: dict[str, str] | None = None) -> tuple[int, str]:
    req = urllib.request.Request(url, headers=headers or {})
    with urllib.request.urlopen(req, timeout=2) as resp:
        return resp.status, resp.read().decode("utf-8")


def _http_post(
    url: str,
    payload: dict[str, object],
    headers: dict[str, str] | None = None,
) -> tuple[int, str]:
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={"Content-Type": "application/json", **(headers or {})},
    )
    with urllib.request.urlopen(req, timeout=2) as resp:
        return resp.status, resp.read().decode("utf-8")


def _wait_for_server(base_url: str, headers: dict[str, str] | None = None) -> None:
    deadline = time.time() + 10.0
    last_error: Exception | None = None
    while time.time() < deadline:
        try:
            _http_get(f"{base_url}/api/status", headers=headers)
            return
        except (HTTPError, URLError, OSError) as exc:
            last_error = exc
            time.sleep(0.1)
    raise AssertionError(f"FastAPI server did not start: {last_error}")


@pytest.fixture()
def fastapi_server_env(runs_dir: Path, case_factory, registry_factory):
    pytest.importorskip("fastapi")
    pytest.importorskip("uvicorn")

    case_dir = case_factory(runs_dir, "case0001")
    resu_dir = case_dir / "RESU" / "001"
    resu_dir.mkdir(parents=True, exist_ok=True)
    (resu_dir / "residuals.csv").write_text("iteration,velocity\n1,1e-2\n", encoding="utf-8")
    (resu_dir / "listing").write_text(
        "Initialization complete\nWarning: CFL threshold reached\nError: solver diverged\n",
        encoding="utf-8",
    )
    (resu_dir / "performance.log").write_text(
        "\n".join(
            [
                "elapsed time: 55.0",
                "mpi ranks: 8",
                "threads: 2",
                "I/O time: 5.0",
                "linear solver time: 40.0",
                "gradients time: 6.0",
                "balances time: 4.0",
            ]
        ),
        encoding="utf-8",
    )
    monitoring_dir = resu_dir / "monitoring"
    monitoring_dir.mkdir(parents=True, exist_ok=True)
    (monitoring_dir / "probe_velocity.csv").write_text(
        "time,velocity\n0,1.0\n1,2.5\n",
        encoding="utf-8",
    )
    (monitoring_dir / "probe_coords.csv").write_text(
        "probe,x,y,z\n1,0.1,0.2,0.3\n",
        encoding="utf-8",
    )
    registry_factory(runs_dir, "case0001", case_dir, status="DONE")

    port = _reserve_local_port()
    repo_root = Path(__file__).resolve().parents[2]
    cmd = [
        sys.executable,
        str(repo_root / "csauto.py"),
        "serve",
        str(runs_dir),
        "--host",
        "127.0.0.1",
        "--port",
        str(port),
        "--no-doctor",
    ]
    proc = subprocess.Popen(
        cmd,
        cwd=repo_root,
        env={k: v for k, v in os.environ.items() if k != "DISPLAY"},
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    base_url = f"http://127.0.0.1:{port}"
    try:
        _wait_for_server(base_url)
        yield base_url, case_dir, proc
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            proc.kill()
            proc.wait(timeout=5)


def test_fastapi_server_status_and_index(fastapi_server_env) -> None:
    base_url, _case_dir, _proc = fastapi_server_env

    status, body = _http_get(f"{base_url}/")
    assert status == 200
    assert "<title>csauto by Simvia</title>" in body

    status, body = _http_get(f"{base_url}/api/status")
    assert status == 200
    data = json.loads(body)
    assert [row["case_id"] for row in data["rows"]] == ["case0001"]
    assert data["rows"][0]["status"] == "DONE"


def test_fastapi_server_enforces_token_auth(
    runs_dir: Path,
    case_factory,
    registry_factory,
) -> None:
    pytest.importorskip("fastapi")
    pytest.importorskip("uvicorn")

    case_dir = case_factory(runs_dir, "case0001")
    registry_factory(runs_dir, "case0001", case_dir, status="PREPARED")

    port = _reserve_local_port()
    repo_root = Path(__file__).resolve().parents[2]
    cmd = [
        sys.executable,
        str(repo_root / "csauto.py"),
        "serve",
        str(runs_dir),
        "--host",
        "127.0.0.1",
        "--port",
        str(port),
        "--no-doctor",
        "--token",
        "secret-token",
    ]
    proc = subprocess.Popen(
        cmd,
        cwd=repo_root,
        env={k: v for k, v in os.environ.items() if k != "DISPLAY"},
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    base_url = f"http://127.0.0.1:{port}"
    try:
        _wait_for_server(base_url, headers={"X-CSAUTO-TOKEN": "secret-token"})

        with pytest.raises(HTTPError) as excinfo:
            _http_get(f"{base_url}/api/status")
        assert excinfo.value.code == 401

        status, body = _http_get(
            f"{base_url}/api/status",
            headers={"X-CSAUTO-TOKEN": "secret-token"},
        )
        assert status == 200
        assert json.loads(body)["rows"][0]["case_id"] == "case0001"
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            proc.kill()
            proc.wait(timeout=5)


def test_fastapi_server_case_file_and_note_roundtrip(fastapi_server_env) -> None:
    base_url, case_dir, _proc = fastapi_server_env

    status, body = _http_get(f"{base_url}/api/case_file?case=case0001&kind=setup.xml")
    assert status == 200
    assert "<root/>" in body

    status, body = _http_post(
        f"{base_url}/api/case_file",
        {"case": "case0001", "kind": "setup.xml", "content": "<root>fastapi</root>"},
    )
    assert status == 200
    assert json.loads(body)["status"] == "ok"
    assert (case_dir / "DATA" / "setup.xml").read_text(encoding="utf-8") == "<root>fastapi</root>"

    status, body = _http_post(
        f"{base_url}/api/case_note",
        {"case": "case0001", "note": "served by fastapi"},
    )
    assert status == 200
    assert json.loads(body)["status"] == "ok"

    status, body = _http_get(f"{base_url}/api/status")
    assert status == 200
    assert json.loads(body)["rows"][0]["note"] == "served by fastapi"


def test_fastapi_server_run_case_validation_error(fastapi_server_env) -> None:
    base_url, _case_dir, _proc = fastapi_server_env

    with pytest.raises(HTTPError) as excinfo:
        _http_post(
            f"{base_url}/api/run_case",
            {
                "cases": ["case0001"],
                "n": 2,
                "nt": 1,
                "restart": True,
                "restart_mode": "iterations",
                "restart_value": 0,
            },
        )
    assert excinfo.value.code == 400
    payload = json.loads(excinfo.value.read().decode("utf-8"))
    assert payload["detail"] == "restart_value must be a positive integer for iterations"


def test_fastapi_server_case_convergence_and_compare(fastapi_server_env) -> None:
    base_url, case_dir, _proc = fastapi_server_env

    other_case_dir = case_dir.parent / "case0002"
    (other_case_dir / "DATA").mkdir(parents=True, exist_ok=True)
    (other_case_dir / "DATA" / "setup.xml").write_text("<root>other</root>", encoding="utf-8")
    registry_path = case_dir.parent / "registry.json"
    registry = json.loads(registry_path.read_text(encoding="utf-8"))
    registry["case0002"] = {
        "case_id": "case0002",
        "path": str(other_case_dir),
        "status": "DONE",
    }
    registry_path.write_text(json.dumps(registry, indent=2), encoding="utf-8")

    status, body = _http_post(
        f"{base_url}/api/case_convergence",
        {"case": "case0001", "convergence": "converged"},
    )
    assert status == 200
    assert json.loads(body)["status"] == "ok"

    status, body = _http_get(f"{base_url}/api/status")
    assert status == 200
    rows = {row["case_id"]: row for row in json.loads(body)["rows"]}
    assert rows["case0001"]["convergence"] == "converged"

    status, body = _http_get(f"{base_url}/api/compare_runs?case=case0001,case0002&base=case0001&kind=setup.xml")
    assert status == 200
    assert "case0002" in body


def test_fastapi_server_cleanup_and_kill_error_paths(fastapi_server_env) -> None:
    base_url, case_dir, _proc = fastapi_server_env

    old_resu = case_dir / "RESU" / "000"
    old_resu.mkdir(parents=True, exist_ok=True)
    (old_resu / "listing").write_text("old\n", encoding="utf-8")
    time.sleep(0.01)
    new_resu = case_dir / "RESU" / "001"
    assert new_resu.is_dir()
    os.utime(new_resu, None)

    status, body = _http_post(
        f"{base_url}/api/cleanup_cases",
        {"cases": ["case0001"], "keep_last": 1, "prune_resu": True},
    )
    assert status == 200
    payload = json.loads(body)
    assert "resu_removed" in payload
    assert not old_resu.exists()
    assert new_resu.exists()

    with pytest.raises(HTTPError) as excinfo:
        _http_post(f"{base_url}/api/kill_case", {"cases": ["case0001"]})
    assert excinfo.value.code == 500
    payload = json.loads(excinfo.value.read().decode("utf-8"))
    assert payload["detail"] == "case0001: No PID, container_id or job_id for case0001"


def test_fastapi_server_open_gui_without_display_returns_500(fastapi_server_env) -> None:
    base_url, _case_dir, _proc = fastapi_server_env

    with pytest.raises(HTTPError) as excinfo:
        _http_post(f"{base_url}/api/open_gui", {"case": "case0001"})
    assert excinfo.value.code == 500
    payload = json.loads(excinfo.value.read().decode("utf-8"))
    assert payload["detail"] == "DISPLAY not set on server"


def test_fastapi_server_query_models_validate_get_parameters(fastapi_server_env) -> None:
    base_url, _case_dir, _proc = fastapi_server_env

    with pytest.raises(HTTPError) as excinfo:
        _http_get(f"{base_url}/api/tail?case=case0001&file=listing&n=0")
    assert excinfo.value.code == 422
    payload = json.loads(excinfo.value.read().decode("utf-8"))
    assert payload["detail"]


def test_fastapi_server_observability_probe_and_history_endpoints(fastapi_server_env) -> None:
    base_url, _case_dir, _proc = fastapi_server_env

    status, body = _http_get(f"{base_url}/api/residual_columns?case=case0001")
    assert status == 200
    assert json.loads(body)["columns"] == ["iteration", "velocity"]

    status, body = _http_get(f"{base_url}/api/perf?case=case0001")
    assert status == 200
    perf_records = json.loads(body)["records"]
    assert perf_records[0]["case_id"] == "case0001"
    assert perf_records[0]["elapsed_time"] == "55.0"
    assert perf_records[0]["linear_solver_time"] == "40.0"

    status, body = _http_get(f"{base_url}/api/recent_errors?case=case0001&files=listing")
    assert status == 200
    recent = json.loads(body)["items"]
    assert recent
    assert recent[0]["file"] == "listing"
    assert recent[0]["severity"] in {"warn", "error"}

    status, body = _http_get(f"{base_url}/api/tail?case=case0001&file=listing&n=2")
    assert status == 200
    assert "solver diverged" in body

    status, body = _http_get(f"{base_url}/api/resu_files?case=case0001")
    assert status == 200
    files = json.loads(body)["files"]
    assert "RESU/001/listing" in files
    assert "RESU/001/residuals.csv" in files

    status, body = _http_get(f"{base_url}/api/resu_dirs?case=case0001")
    assert status == 200
    assert json.loads(body)["dirs"] == ["001"]

    status, body = _http_get(f"{base_url}/api/probes?case=case0001")
    assert status == 200
    assert json.loads(body)["files"] == ["probe_coords.csv", "probe_velocity.csv"]

    status, body = _http_get(f"{base_url}/api/probe_columns?case=case0001&probe=probe_velocity.csv")
    assert status == 200
    assert json.loads(body)["columns"] == ["time", "velocity"]

    status, body = _http_get(f"{base_url}/api/probe_position?case=case0001&probe=probe_velocity.csv&column=1")
    assert status == 200
    position = json.loads(body)
    assert position["found"] is True
    assert position["x"] == 0.1
    assert position["source"] == "probe_coords.csv"

    status, svg = _http_get(f"{base_url}/api/residuals_svg?case=case0001&columns=velocity")
    assert status == 200
    assert svg.lstrip().startswith("<svg")

    status, svg_zoomed = _http_get(f"{base_url}/api/residuals_svg?case=case0001&columns=velocity&x_min=10")
    assert status == 200
    assert "No" in svg_zoomed

    status, probe_svg = _http_get(
        f"{base_url}/api/probe_svg?case=case0001&probe=probe_velocity.csv&columns=velocity&axis=time"
    )
    assert status == 200
    assert probe_svg.lstrip().startswith("<svg")

    status, probe_svg_zoomed = _http_get(f"{base_url}/api/probe_svg?case=case0001&probe=probe_velocity.csv&time_min=10")
    assert status == 200
    assert "No" in probe_svg_zoomed

    status, body = _http_post(
        f"{base_url}/api/case_note",
        {"case": "case0001", "note": "history entry"},
    )
    assert status == 200
    assert json.loads(body)["status"] == "ok"
