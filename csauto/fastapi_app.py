import asyncio
import contextlib
import re
import threading
import time as _time
from collections.abc import AsyncIterator
from pathlib import Path
from typing import Any

from .cli import resolve_runs_dir
from .fastapi_routes import (
    register_action_routes,
    register_case_data_routes,
    register_compare_routes,
    register_observability_routes,
    register_settings_routes,
)
from .fastapi_routes.common import FastAPIContext, build_shared_models
from .solvers import get_solver_adapter

_DIST_DIR = Path(__file__).resolve().parent.parent / "frontend" / "dist"

JOB_ID_PATTERNS = (
    re.compile(r"submitted\s+batch\s+job\s+(?P<id>[A-Za-z0-9_.:\-\[\]]+)", re.IGNORECASE),
    re.compile(r"your\s+job(?:-array)?\s+(?P<id>[A-Za-z0-9_.:\-\[\]]+)\s+", re.IGNORECASE),
    re.compile(r"job\s*<(?P<id>[A-Za-z0-9_.:\-\[\]]+)>\s+is\s+submitted", re.IGNORECASE),
    re.compile(r"\bjob[_\s-]*id\b\s*[:=]\s*(?P<id>[A-Za-z0-9_.:\-\[\]]+)", re.IGNORECASE),
)


def _import_fastapi_components() -> dict[str, Any]:
    try:
        from fastapi import Depends, FastAPI, Header, HTTPException, Query, Request
        from fastapi.responses import FileResponse, HTMLResponse, JSONResponse, PlainTextResponse, Response
        from pydantic import BaseModel, Field
    except ImportError as exc:  # pragma: no cover - exercised by unit test
        raise ImportError("FastAPI support requires optional dependencies: fastapi and starlette.") from exc

    return {
        "BaseModel": BaseModel,
        "Depends": Depends,
        "FastAPI": FastAPI,
        "Field": Field,
        "FileResponse": FileResponse,
        "Header": Header,
        "HTTPException": HTTPException,
        "HTMLResponse": HTMLResponse,
        "JSONResponse": JSONResponse,
        "PlainTextResponse": PlainTextResponse,
        "Query": Query,
        "Request": Request,
        "Response": Response,
    }


def create_fastapi_app(
    runs_dir: Path,
    *,
    api_token: str | None = None,
    solver: str | None = None,
    runtime: str = "auto",
    docker_image: str = "simvia/code_saturne",
    saturne_bin: str | None = None,
    singularity_image: str | None = None,
    singularity_bin: str | None = None,
    use_slurm: bool | None = None,
    mpi_exec_options: str | None = None,
) -> Any:
    components = _import_fastapi_components()
    FastAPI = components["FastAPI"]
    FileResponse = components["FileResponse"]
    HTTPException = components["HTTPException"]
    Response = components["Response"]

    runs_dir = resolve_runs_dir(runs_dir)
    runs_root = runs_dir.resolve()
    status_cache_lock = threading.Lock()
    status_refresh_lock = threading.Lock()
    status_cache: dict[str, Any] = {"payload": None, "expires_at": 0.0}

    ctx = FastAPIContext(
        runs_dir=runs_dir,
        runs_root=runs_root,
        api_token=api_token,
        runtime=runtime,
        docker_image=docker_image,
        saturne_bin=saturne_bin,
        singularity_image=singularity_image,
        singularity_bin=singularity_bin,
        use_slurm=use_slurm,
        mpi_exec_options=mpi_exec_options,
        status_cache_lock=status_cache_lock,
        status_refresh_lock=status_refresh_lock,
        status_cache=status_cache,
        job_id_patterns=JOB_ID_PATTERNS,
        http_exception_cls=HTTPException,
        adapter=get_solver_adapter(solver),
    )

    build_shared_models(components)

    async def _heartbeat_loop() -> None:
        from .telemetry import EVENT_SERVE, is_enabled, send_event_async

        start = _time.monotonic()
        while True:
            await asyncio.sleep(86400)
            if not is_enabled():
                continue
            try:
                uptime = int(_time.monotonic() - start)
                await send_event_async(EVENT_SERVE, time_execution=uptime, id_docker=runtime)
            except Exception:
                pass

    @contextlib.asynccontextmanager
    async def _lifespan(_app: Any) -> AsyncIterator[None]:
        task = asyncio.create_task(_heartbeat_loop())
        yield
        task.cancel()
        with contextlib.suppress(asyncio.CancelledError):
            await task

    app = FastAPI(title="csauto", lifespan=_lifespan)

    register_observability_routes(app, ctx, components)
    register_case_data_routes(app, ctx, components)
    register_compare_routes(app, ctx, components)
    register_action_routes(app, ctx, components)
    register_settings_routes(app, ctx, components)

    from starlette.staticfiles import StaticFiles

    app.mount("/_app", StaticFiles(directory=str(_DIST_DIR / "_app")), name="spa-assets")

    _index_html = str(_DIST_DIR / "index.html")

    @app.get("/", response_model=None)
    async def index() -> Response:
        return FileResponse(_index_html)

    @app.get("/{full_path:path}", response_model=None)
    async def spa_fallback(full_path: str) -> Response:
        file_path = (_DIST_DIR / full_path).resolve()
        if file_path.is_file() and str(file_path).startswith(str(_DIST_DIR)):
            return FileResponse(str(file_path))
        return FileResponse(_index_html)

    return app


def serve_fastapi(
    runs_dir: Path,
    *,
    host: str = "127.0.0.1",
    port: int = 8000,
    api_token: str | None = None,
    solver: str | None = None,
    runtime: str = "auto",
    docker_image: str = "simvia/code_saturne",
    saturne_bin: str | None = None,
    singularity_image: str | None = None,
    singularity_bin: str | None = None,
    use_slurm: bool | None = None,
    mpi_exec_options: str | None = None,
    show_api_logs: bool = False,
) -> None:
    try:
        import uvicorn
    except ImportError as exc:  # pragma: no cover - exercised by unit test
        raise ImportError("FastAPI serving requires optional dependency: uvicorn.") from exc

    app = create_fastapi_app(
        runs_dir,
        api_token=api_token,
        solver=solver,
        runtime=runtime,
        docker_image=docker_image,
        saturne_bin=saturne_bin,
        singularity_image=singularity_image,
        singularity_bin=singularity_bin,
        use_slurm=use_slurm,
        mpi_exec_options=mpi_exec_options,
    )
    log_level = "info" if show_api_logs else "warning"
    uvicorn.run(app, host=host, port=port, log_level=log_level, access_log=show_api_logs)
