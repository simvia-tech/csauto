import math
from typing import Annotated, Any

from ..logs import list_resu_files, locate_case_file, read_tail_lines
from ..probes import list_probe_files, list_profile_files, probe_columns, probe_position, render_probe_svg
from ..web_support import log_case_action
from .common import shared_models


def register_case_data_routes(app: Any, ctx: Any, components: dict[str, Any]) -> None:
    BaseModel = components["BaseModel"]
    Field = components["Field"]
    Header = components["Header"]
    PlainTextResponse = components["PlainTextResponse"]
    Query = components["Query"]
    Request = components["Request"]
    Response = components["Response"]

    models = shared_models()
    CaseQuery = models["CaseQuery"]
    SvgQuery = models["SvgQuery"]
    StringListResponse = models["StringListResponse"]
    ProbePositionResponse = models["ProbePositionResponse"]

    class TailQuery(BaseModel):
        case: str | None = None
        file: str = "listing"
        n: int = Field(default=200, ge=1)

    class ResuFilesQuery(BaseModel):
        case: str | None = None
        limit: int = Field(default=2000, ge=1)

    class ProbesQuery(BaseModel):
        case: list[str] | None = None
        scope: str = "monitoring"
        limit: int = Field(default=200, ge=1)

    class ProbePositionQuery(BaseModel):
        case: str | None = None
        probe: str | None = None
        column: str | None = None

    class ProbeColumnsQuery(BaseModel):
        case: list[str] | None = None
        probe: list[str] | None = None

    class ProbeSvgQuery(SvgQuery):
        probe: list[str] | None = None
        axis: str = "time"
        x_min: float | None = None
        time_min: float = 0.0

    @app.get("/api/tail", response_model=None)
    def api_tail(
        request: Request,
        query: Annotated[TailQuery, Query()],
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> PlainTextResponse:
        ctx.require_auth(x_csauto_token, authorization)
        case_id = ctx.validate_case(query.case)
        case_dir = ctx.runs_dir / case_id
        file_path = locate_case_file(case_dir, query.file) if case_dir.is_dir() else None
        if not file_path:
            raise ctx.http_exception_cls(status_code=404, detail=f"File {query.file} not found for {case_id}")
        log_case_action(
            ctx.runs_dir,
            case_id,
            "tail",
            {"file": query.file, "lines": query.n},
            actor=request.client.host if request.client else None,
        )
        return PlainTextResponse("".join(read_tail_lines(file_path, query.n)))

    @app.get("/api/resu_files", response_model=StringListResponse)
    def api_resu_files(
        query: Annotated[ResuFilesQuery, Query()],
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, Any]:
        ctx.require_auth(x_csauto_token, authorization)
        _case_id, case_dir = ctx.validated_case_dir(query.case)
        return {"files": list_resu_files(case_dir, limit=query.limit, latest_subdir_only=True)}

    @app.get("/api/resu_dirs", response_model=StringListResponse)
    def api_resu_dirs(
        query: Annotated[CaseQuery, Query()],
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, Any]:
        ctx.require_auth(x_csauto_token, authorization)
        _case_id, case_dir = ctx.validated_case_dir(query.case)
        dirs: list[str] = []
        resu_root = case_dir / "RESU"
        if resu_root.is_dir():
            resu_dirs = [p for p in resu_root.iterdir() if p.is_dir()]
            resu_dirs.sort(key=lambda p: p.stat().st_mtime, reverse=True)
            dirs = [p.name for p in resu_dirs]
        return {"dirs": dirs}

    @app.get("/api/probes", response_model=StringListResponse)
    def api_probes(
        query: Annotated[ProbesQuery, Query()],
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, Any]:
        ctx.require_auth(x_csauto_token, authorization)
        case_ids = ctx.validate_cases(query.case)
        scope_value = (query.scope or "monitoring").strip().lower()
        if scope_value not in ("monitoring", "profiles"):
            raise ctx.http_exception_cls(status_code=400, detail="Invalid scope parameter")
        seen: set[str] = set()
        files: list[str] = []
        for case_id in case_ids:
            case_dir = ctx.runs_dir / case_id
            if not case_dir.is_dir():
                continue
            case_files = (
                list_profile_files(case_dir, limit=query.limit)
                if scope_value == "profiles"
                else list_probe_files(case_dir, limit=query.limit)
            )
            for f in case_files:
                if f not in seen:
                    seen.add(f)
                    files.append(f)
        return {"files": files}

    @app.get("/api/probe_position", response_model=ProbePositionResponse)
    def api_probe_position(
        query: Annotated[ProbePositionQuery, Query()],
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, Any]:
        ctx.require_auth(x_csauto_token, authorization)
        if not query.probe:
            raise ctx.http_exception_cls(status_code=400, detail="Missing case, probe parameters")
        _case_id, case_dir = ctx.validated_case_dir(query.case)
        position = probe_position(case_dir, query.probe, column_ref=query.column)
        return {"found": False} if not position else {"found": True, **position}

    @app.get("/api/probe_columns", response_model=StringListResponse)
    def api_probe_columns(
        query: Annotated[ProbeColumnsQuery, Query()],
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, Any]:
        ctx.require_auth(x_csauto_token, authorization)
        probe_list = ctx.probe_files(query.probe)
        if not probe_list:
            raise ctx.http_exception_cls(status_code=400, detail="Missing case, probe parameters")
        case_ids = ctx.validate_cases(query.case)
        all_cols: list[str] = []
        seen: set[str] = set()
        for case_id in case_ids:
            try:
                cols = probe_columns(ctx.runs_dir, case_id, probe_list)
            except FileNotFoundError:
                continue
            for c in cols:
                if c not in seen:
                    seen.add(c)
                    all_cols.append(c)
        if not all_cols:
            raise ctx.http_exception_cls(status_code=404, detail="No probe columns found")
        return {"columns": all_cols}

    @app.get("/api/probe_svg", response_model=None)
    def api_probe_svg(
        query: Annotated[ProbeSvgQuery, Query()],
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> Response:
        ctx.require_auth(x_csauto_token, authorization)
        probe_list = ctx.probe_files(query.probe)
        if not probe_list:
            raise ctx.http_exception_cls(status_code=400, detail="Missing probe parameter")
        raw_x = query.time_min if query.x_min is None else query.x_min
        x_value = raw_x if math.isfinite(raw_x) else 0.0
        validated_cases = ctx.validate_cases(query.case)
        ax_lower = query.axis.lower()
        origin_key = "time" if ax_lower in {"time", "t"} else "iteration"
        restart_vals: list[float] = []
        for case_id in validated_cases:
            case_dir = ctx.runs_dir / case_id
            if case_dir.is_dir():
                origin = ctx.adapter.read_restart_origin(case_dir)
                val = origin.get(origin_key)
                if val is not None:
                    restart_vals.append(float(val))
        svg = render_probe_svg(
            ctx.runs_dir,
            validated_cases,
            probe_list,
            [c.strip() for c in query.columns.replace(",", " ").split() if c.strip()] or None,
            axis=query.axis,
            width=query.width,
            height=query.height,
            x_from=x_value,
            include_history=query.include_history,
            restart_values=restart_vals if restart_vals else None,
        )
        return Response(content=svg, media_type="image/svg+xml")
