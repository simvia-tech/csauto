from __future__ import annotations

from pathlib import Path

import pytest

from csauto import fastapi_app
from csauto.fastapi_app import create_fastapi_app


def _route_endpoint(app, path: str, method: str):
    for route in app.routes:
        if getattr(route, "path", None) != path:
            continue
        methods = getattr(route, "methods", None) or set()
        if method.upper() in methods:
            return route.endpoint
    raise AssertionError(f"Route not found: {method} {path}")


def test_create_fastapi_app_requires_optional_dependency(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()

    try:
        import fastapi  # noqa: F401
        import starlette  # noqa: F401
    except ImportError:
        pass
    else:
        pytest.skip("Optional FastAPI dependencies are installed in this environment")

    with pytest.raises(ImportError) as excinfo:
        create_fastapi_app(runs_dir)

    assert "FastAPI support requires optional dependencies" in str(excinfo.value)


def test_serve_fastapi_requires_uvicorn(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()

    monkeypatch.setattr(fastapi_app, "create_fastapi_app", lambda *_args, **_kwargs: object())
    import builtins

    original_import = builtins.__import__

    def fake_import(name: str, *args, **kwargs):
        if name == "uvicorn":
            raise ImportError("missing uvicorn")
        return original_import(name, *args, **kwargs)

    monkeypatch.setattr(builtins, "__import__", fake_import)

    with pytest.raises(ImportError) as excinfo:
        fastapi_app.serve_fastapi(runs_dir)

    assert "uvicorn" in str(excinfo.value)


def test_fastapi_run_case_uses_default_web_max_parallel_when_missing(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    pytest.importorskip("fastapi")
    pytest.importorskip("starlette")
    from csauto.execution import RuntimeSelection
    from csauto.fastapi_routes import actions as actions_mod

    runs_dir = tmp_path / "RUNS"
    (runs_dir / "case0001").mkdir(parents=True)

    captured: dict[str, object] = {}

    def resolve_runtime_stub(**_kwargs) -> RuntimeSelection:
        return RuntimeSelection(
            runtime="native",
            docker_image="simvia/code_saturne",
            saturne_bin="/usr/bin/code_saturne",
            singularity_image=None,
            singularity_bin=None,
        )

    def run_cases_stub(
        runs_dir_arg: Path,
        n: int,
        nt: int,
        **kwargs,
    ) -> None:
        captured["runs_dir"] = runs_dir_arg
        captured["n"] = n
        captured["nt"] = nt
        captured.update(kwargs)

    monkeypatch.setattr(actions_mod, "resolve_runtime", resolve_runtime_stub)
    monkeypatch.setattr(actions_mod, "run_cases", run_cases_stub)
    monkeypatch.setattr(actions_mod, "default_web_max_parallel", lambda requested, *_args: requested + 3)

    app = fastapi_app.create_fastapi_app(runs_dir)
    _route_endpoint(app, "/api/run_case", "POST")

    # Import the Pydantic model from the actions module closure — get it from
    # the route's dependant parameters.  Easier: just build via the app.
    from starlette.testclient import TestClient

    client = TestClient(app)
    response = client.post("/api/run_case", json={"cases": ["case0001"], "n": 2, "nt": 4})

    assert response.status_code == 200
    assert response.json()["status"] == "ok"
    assert captured["runs_dir"] == runs_dir
    assert captured["n"] == 2
    assert captured["nt"] == 4
    assert captured["case_filter"] == ["case0001"]
    assert captured["max_parallel"] == 4
    assert captured["runtime"] == "native"
    assert captured["source"] == "web"


def test_fastapi_case_file_update_writes_content(tmp_path: Path) -> None:
    pytest.importorskip("fastapi")
    pytest.importorskip("starlette")
    from starlette.testclient import TestClient

    runs_dir = tmp_path / "RUNS"
    setup_path = runs_dir / "case0001" / "DATA" / "setup.xml"
    setup_path.parent.mkdir(parents=True)
    setup_path.write_text("<old/>", encoding="utf-8")

    app = fastapi_app.create_fastapi_app(runs_dir)
    client = TestClient(app)
    response = client.post(
        "/api/case_file",
        json={"case": "case0001", "kind": "setup.xml", "content": "<new/>"},
    )

    assert response.status_code == 200
    assert response.json()["status"] == "ok"
    assert setup_path.read_text(encoding="utf-8") == "<new/>"
