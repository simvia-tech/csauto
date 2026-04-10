import re
import warnings
from typing import Any

from ..diff import compare_runs_diff
from ..logs import locate_case_file
from ..web_support import log_case_action


def register_compare_routes(app: Any, ctx: Any, components: dict[str, Any]) -> None:
    Header = components["Header"]
    PlainTextResponse = components["PlainTextResponse"]
    Query = components["Query"]
    Request = components["Request"]

    @app.get("/api/case_file", response_model=None)
    def api_case_file(
        case: str | None = None,
        kind: str | None = None,
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> PlainTextResponse:
        ctx.require_auth(x_csauto_token, authorization)
        if not kind:
            raise ctx.http_exception_cls(status_code=400, detail="Missing case, kind parameters")
        case_id, case_dir = ctx.validated_case_dir(case)
        target = locate_case_file(case_dir, kind)
        if not target:
            raise ctx.http_exception_cls(status_code=404, detail=f"File {kind} not found for {case_id}")
        return PlainTextResponse(target.read_text(encoding="utf-8", errors="ignore"))

    @app.get("/api/compare_runs", response_model=None)
    def api_compare_runs(
        request: Request,
        case: list[str] | None = Query(default=None),
        base: str | None = None,
        kind: str = "setup.xml",
        filter: str = "",
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> PlainTextResponse:
        ctx.require_auth(x_csauto_token, authorization)
        cases = ctx.validate_cases(case)
        base_case = ctx.validate_case(base or cases[0])
        if len(filter) > 200:
            raise ctx.http_exception_cls(status_code=400, detail="Filter expression too long (max 200 chars)")
        if filter:
            try:
                with warnings.catch_warnings():
                    warnings.simplefilter("error", FutureWarning)
                    re.compile(filter)
            except (re.error, FutureWarning) as exc:
                raise ctx.http_exception_cls(status_code=400, detail=f"Invalid regex: {exc}") from exc
        try:
            diff = compare_runs_diff(ctx.runs_dir, cases, base_case, kind, filter or None)
        except FileNotFoundError as exc:
            raise ctx.http_exception_cls(status_code=404, detail=str(exc)) from exc
        actor = request.client.host if request.client else None
        for case_id in cases:
            log_case_action(
                ctx.runs_dir, case_id, "compare", {"base": base_case, "kind": kind, "filter": filter or ""}, actor=actor
            )
        return PlainTextResponse(diff)
