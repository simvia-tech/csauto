import math
from typing import Annotated, Any

from ..logs import (
    ANOMALY_CONTEXT_DEFAULT,
    ANOMALY_SEVERITY,
    collect_recent_errors,
    read_performance_rows,
)
from ..residuals import render_residuals_svg, residual_columns
from ..web_services import get_status_payload
from ..web_support import log_case_action
from .common import expand_csv_query, shared_models


def register_observability_routes(app: Any, ctx: Any, components: dict[str, Any]) -> None:
    BaseModel = components["BaseModel"]
    Field = components["Field"]
    Header = components["Header"]
    Query = components["Query"]
    Request = components["Request"]
    Response = components["Response"]

    models = shared_models()
    CaseListQuery = models["CaseListQuery"]
    SvgQuery = models["SvgQuery"]
    RestartOriginResponse = models["RestartOriginResponse"]
    StringListResponse = models["StringListResponse"]

    class RecentErrorsQuery(BaseModel):
        case: list[str] | None = None
        files: list[str] | None = None
        max_hits: int = Field(default=200, ge=1, le=500)
        context: int = Field(default=ANOMALY_CONTEXT_DEFAULT, ge=0, le=50)
        sev: list[str] | None = None
        q: str = ""

    class ResidualsSvgQuery(SvgQuery):
        x_min: float = 0.0

    class StatusRowModel(BaseModel):
        case_id: str
        status: str | None = None
        convergence: str | None = None
        note: str | None = None
        nprocs: int | None = None
        nt: int | None = None
        last_iter: int | float | None = None
        duration_s: int | float | None = None
        duration: str | None = None
        last_mod: str | None = None
        resu_size_mb: float | None = None
        doe: dict[str, str] | None = None
        model_config = {"extra": "allow"}

    class StatusPayloadModel(BaseModel):
        rows: list[StatusRowModel]
        doe_columns: list[str]

    class PerformanceRecordModel(BaseModel):
        case_id: str
        elapsed_time: str | None = None
        mpi_ranks: str | None = None
        threads: str | None = None
        io_time: str | None = None
        linear_solver_time: str | None = None
        gradients_time: str | None = None
        balances_time: str | None = None

    class PerfColumnModel(BaseModel):
        key: str
        label: str
        kind: str

    class PerformancePayloadModel(BaseModel):
        columns: list[PerfColumnModel]
        records: list[PerformanceRecordModel]

    class CompareKindModel(BaseModel):
        value: str
        label: str

    class AppConfigModel(BaseModel):
        solver: str
        panels: list[str]
        compare_kinds: list[CompareKindModel]
        error_files: list[str]

    class RecentErrorItemModel(BaseModel):
        case_id: str
        file: str
        severity: str
        line_html: str
        tail_index: int
        tail_total: int

    class RecentErrorsPayloadModel(BaseModel):
        items: list[RecentErrorItemModel]

    @app.get("/api/status", response_model=StatusPayloadModel)
    def api_status(
        request: Request,
        log: bool = False,
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, Any]:
        ctx.require_auth(x_csauto_token, authorization)
        payload = get_status_payload(
            ctx.runs_dir,
            status_cache_lock=ctx.status_cache_lock,
            status_refresh_lock=ctx.status_refresh_lock,
            status_cache=ctx.status_cache,
            adapter=ctx.adapter,
        )
        if log:
            actor = request.client.host if request.client else None
            for row in payload.get("rows", []):
                case_id = row.get("case_id")
                if case_id:
                    log_case_action(ctx.runs_dir, str(case_id), "refresh", actor=actor)
        return payload

    @app.get("/api/perf", response_model=PerformancePayloadModel)
    def api_perf(
        query: Annotated[CaseListQuery, Query()],
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, Any]:
        ctx.require_auth(x_csauto_token, authorization)
        return {
            "columns": [
                {"key": column.key, "label": column.label, "kind": column.kind}
                for column in ctx.adapter.performance_columns
            ],
            "records": read_performance_rows(ctx.runs_dir, ctx.validate_cases(query.case), adapter=ctx.adapter),
        }

    @app.get("/api/app_config", response_model=AppConfigModel)
    def api_app_config(
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, Any]:
        ctx.require_auth(x_csauto_token, authorization)
        return {
            "solver": ctx.adapter.name,
            "panels": list(ctx.adapter.dashboard_panels),
            "compare_kinds": [{"value": kind.value, "label": kind.label} for kind in ctx.adapter.compare_kinds],
            "error_files": list(ctx.adapter.anomaly_file_names),
        }

    @app.get("/api/restart_origin", response_model=RestartOriginResponse)
    def api_restart_origin(
        query: Annotated[CaseListQuery, Query()],
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, Any]:
        ctx.require_auth(x_csauto_token, authorization)
        origins: dict[str, dict[str, int | float]] = {}
        for case_id in ctx.validate_cases(query.case):
            case_dir = ctx.runs_dir / case_id
            origins[case_id] = ctx.adapter.read_restart_origin(case_dir) if case_dir.is_dir() else {}
        return {"origins": origins}

    @app.get("/api/recent_errors", response_model=RecentErrorsPayloadModel)
    def api_recent_errors(
        query: Annotated[RecentErrorsQuery, Query()],
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, Any]:
        ctx.require_auth(x_csauto_token, authorization)
        file_list = expand_csv_query(query.files)
        severity_filter: set[str] | None = None
        sev_parts = [s.lower() for s in expand_csv_query(query.sev)]
        if sev_parts and not {"all", "*"} & set(sev_parts):
            filtered = {s for s in sev_parts if s in ANOMALY_SEVERITY}
            if filtered:
                severity_filter = filtered
        items = collect_recent_errors(
            ctx.runs_dir,
            ctx.validate_cases(query.case),
            file_list or None,
            max_hits=query.max_hits,
            context_after=query.context,
            severity_filter=severity_filter,
            query=query.q,
            adapter=ctx.adapter,
        )
        return {"items": items}

    @app.get("/api/residual_columns", response_model=StringListResponse)
    def api_residual_columns(
        query: Annotated[CaseListQuery, Query()],
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, Any]:
        ctx.require_auth(x_csauto_token, authorization)
        return {"columns": residual_columns(ctx.runs_dir, ctx.validate_cases(query.case), adapter=ctx.adapter)}

    @app.get("/api/residuals_svg", response_model=None)
    def api_residuals_svg(
        query: Annotated[ResidualsSvgQuery, Query()],
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> Response:
        ctx.require_auth(x_csauto_token, authorization)
        x_value = query.x_min if math.isfinite(query.x_min) else 0.0
        validated_cases = ctx.validate_cases(query.case)
        # Collect restart iterations for all requested cases
        restart_iters: list[float] = []
        for case_id in validated_cases:
            case_dir = ctx.runs_dir / case_id
            if case_dir.is_dir():
                origin = ctx.adapter.read_restart_origin(case_dir)
                it = origin.get("iteration")
                if it is not None:
                    restart_iters.append(float(it))
        svg = render_residuals_svg(
            ctx.runs_dir,
            validated_cases,
            [c.strip() for c in query.columns.replace(",", " ").split() if c.strip()] or None,
            width=query.width,
            height=query.height,
            x_from=x_value,
            include_history=query.include_history,
            restart_iterations=restart_iters if restart_iters else None,
            adapter=ctx.adapter,
        )
        return Response(content=svg, media_type="image/svg+xml")
