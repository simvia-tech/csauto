import math
import os
import shlex
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed
from typing import Any

from ..control import control_case
from ..execution import resolve_runtime
from ..maintenance import cleanup_runs
from ..registry import STATUS_DONE, STATUS_FAILED, STATUS_RUNNING, registry_transaction, update_case
from ..runner import run_cases
from ..web_support import default_web_max_parallel, kill_case, log_case_action, normalize_convergence
from .common import shared_models


def register_action_routes(app: Any, ctx: Any, components: dict[str, Any]) -> None:
    BaseModel = components["BaseModel"]
    Header = components["Header"]

    models = shared_models()
    CleanupResponse = models["CleanupResponse"]
    SuccessResponse = models["SuccessResponse"]
    Request = components["Request"]

    class CaseFileUpdatePayload(BaseModel):
        case: str | None = None
        kind: str | None = None
        content: str | None = None

    class CaseNotePayload(BaseModel):
        case: str | None = None
        note: str | None = None

    class CaseConvergencePayload(BaseModel):
        case: str | None = None
        convergence: str | None = None

    class CleanupCasesPayload(BaseModel):
        cases: list[str] | str | None = None
        keep_last: int = 1
        max_log_mb: float = 50.0
        keep_resu: list[str] | str | None = None
        delete_resu: list[str] | str | None = None
        prune_resu: bool = True
        clear_cid: bool = True
        clear_pyc: bool = False
        dry_run: bool = False

    class KillCasesPayload(BaseModel):
        cases: list[str] | str | None = None

    class ControlCasePayload(BaseModel):
        cases: list[str] | str | None = None
        action: str | None = None
        value: int | None = None

    class OpenGuiPayload(BaseModel):
        case: str | None = None

    class RunCasePayload(BaseModel):
        cases: list[str] | str | None = None
        n: int | None = None
        nt: int | None = None
        max_parallel: int | None = None
        restart: bool = False
        restart_mode: str = ""
        restart_value: int | float | None = None
        restart_path: str | None = None

    def normalize_cases(raw: list[str] | str | None) -> list[str] | None:
        if isinstance(raw, str):
            return [raw]
        return raw

    def _parse_restart_params(
        payload: RunCasePayload,
        http_exc: type,
    ) -> tuple[bool, str | None, int | float | None, str | None]:
        restart_mode_raw = (payload.restart_mode or "").strip().lower()
        restart_value_raw = payload.restart_value
        restart = bool(payload.restart) or bool(restart_mode_raw) or restart_value_raw is not None
        restart_path: str | None = None
        if payload.restart_path and payload.restart_path.strip():
            restart = True
            restart_path = payload.restart_path.strip()
        if not restart:
            return False, None, None, None
        restart_mode: str | None = None
        restart_value: int | float | None = None
        if restart_mode_raw in {"iteration", "iterations", "iter"}:
            restart_mode = "iterations"
            if restart_value_raw is None or restart_value_raw <= 0 or not float(restart_value_raw).is_integer():
                raise http_exc(status_code=400, detail="restart_value must be a positive integer for iterations")
            restart_value = int(restart_value_raw)
        elif restart_mode_raw in {"physical_time", "time", "tmax"}:
            restart_mode = "physical_time"
            if restart_value_raw is None or restart_value_raw <= 0 or not math.isfinite(float(restart_value_raw)):
                raise http_exc(status_code=400, detail="restart_value must be a positive number for physical_time")
            restart_value = float(restart_value_raw)
        elif restart_mode_raw:
            raise http_exc(status_code=400, detail="restart_mode must be iterations or physical_time")
        return restart, restart_mode, restart_value, restart_path

    @app.post("/api/case_file", response_model=SuccessResponse)
    def api_case_file_update(
        request: Request,
        payload: CaseFileUpdatePayload,
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, str]:
        ctx.require_auth(x_csauto_token, authorization)
        if not payload.kind or payload.content is None:
            raise ctx.http_exception_cls(status_code=400, detail="Missing case, kind, content parameters")
        case_id, case_dir = ctx.validated_case_dir(payload.case)
        target = ctx.adapter.locate_case_file(case_dir, payload.kind)
        if not target:
            raise ctx.http_exception_cls(status_code=404, detail=f"File {payload.kind} not found for {case_id}")
        try:
            target.resolve().relative_to(case_dir.resolve())
        except ValueError as exc:
            raise ctx.http_exception_cls(status_code=403, detail="Access denied") from exc
        try:
            target.write_text(payload.content, encoding="utf-8")
        except OSError as exc:
            raise ctx.http_exception_cls(status_code=500, detail=f"Write failed: {exc}") from exc
        log_case_action(
            ctx.runs_dir,
            case_id,
            "save_file",
            {"kind": payload.kind, "bytes": len(payload.content)},
            actor=request.client.host if request.client else None,
        )
        return {"status": "ok"}

    @app.post("/api/case_note", response_model=SuccessResponse)
    def api_case_note(
        request: Request,
        payload: CaseNotePayload,
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, str]:
        ctx.require_auth(x_csauto_token, authorization)
        if payload.note is None:
            raise ctx.http_exception_cls(status_code=400, detail="Missing case, note parameters")
        case_id, _case_dir = ctx.validated_case_dir(payload.case)
        note = payload.note.strip()
        if "\n" in note or "\r" in note:
            note = " ".join(note.splitlines()).strip()
        with registry_transaction(ctx.runs_dir) as registry:
            update_case(registry, case_id, note=note)
        ctx.invalidate_status_cache()
        log_case_action(
            ctx.runs_dir, case_id, "note", {"note": note}, actor=request.client.host if request.client else None
        )
        return {"status": "ok"}

    @app.post("/api/case_convergence", response_model=SuccessResponse)
    def api_case_convergence(
        request: Request,
        payload: CaseConvergencePayload,
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, str]:
        ctx.require_auth(x_csauto_token, authorization)
        if payload.convergence is None:
            raise ctx.http_exception_cls(status_code=400, detail="Missing case, convergence parameters")
        case_id, _case_dir = ctx.validated_case_dir(payload.case)
        convergence = normalize_convergence(payload.convergence)
        if convergence is None:
            raise ctx.http_exception_cls(
                status_code=400, detail="convergence must be converged, not_converged, or empty"
            )
        with registry_transaction(ctx.runs_dir) as registry:
            record = registry.get(case_id)
            if record is None:
                raise ctx.http_exception_cls(status_code=404, detail=f"Case not found: {case_id}")
            status = str(record.get("status") or "").upper()
            if status not in {STATUS_DONE, STATUS_FAILED}:
                raise ctx.http_exception_cls(status_code=400, detail="Convergence can only be set for finished cases")
            update_case(registry, case_id, convergence=convergence)
        ctx.invalidate_status_cache()
        log_case_action(
            ctx.runs_dir,
            case_id,
            "convergence",
            {"value": convergence},
            actor=request.client.host if request.client else None,
        )
        return {"status": "ok"}

    @app.post("/api/cleanup_cases", response_model=CleanupResponse)
    def api_cleanup_cases(
        request: Request,
        payload: CleanupCasesPayload,
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, Any]:
        ctx.require_auth(x_csauto_token, authorization)
        cases = normalize_cases(payload.cases)
        if not cases:
            raise ctx.http_exception_cls(status_code=400, detail="Missing cases parameter")
        try:
            case_ids = [ctx.validate_case(case) for case in cases]
        except ValueError as exc:
            raise ctx.http_exception_cls(status_code=400, detail=str(exc)) from exc
        keep_resu = ctx.parse_resu_dir_list(payload.keep_resu, "keep_resu")
        delete_resu = ctx.parse_resu_dir_list(payload.delete_resu, "delete_resu")
        if keep_resu and delete_resu:
            raise ctx.http_exception_cls(status_code=400, detail="keep_resu and delete_resu are mutually exclusive")

        report = cleanup_runs(
            ctx.runs_dir,
            prune_resu=bool(payload.prune_resu),
            keep_last=max(0, payload.keep_last),
            keep_resu=keep_resu,
            delete_resu=delete_resu,
            max_log_mb=max(0.0, payload.max_log_mb),
            clear_cid=bool(payload.clear_cid),
            clear_pyc=bool(payload.clear_pyc),
            dry_run=bool(payload.dry_run),
            cases=case_ids,
            adapter=ctx.adapter,
        )
        actor = request.client.host if request.client else None
        # Reset status to PREPARED for cases whose results dir is now empty
        if not payload.dry_run:
            with registry_transaction(ctx.runs_dir) as registry:
                for case_id in case_ids:
                    resu_dir = ctx.adapter.results_root(ctx.runs_dir / case_id)
                    has_resu = resu_dir.is_dir() and any(resu_dir.iterdir())
                    if not has_resu:
                        current = registry.get(case_id, {}).get("status", "")
                        if current in (STATUS_DONE, STATUS_FAILED):
                            update_case(registry, case_id, status="PREPARED", convergence=None)
        for case_id in case_ids:
            log_case_action(
                ctx.runs_dir,
                case_id,
                "cleanup",
                {
                    "prune_resu": bool(payload.prune_resu),
                    "keep_last": payload.keep_last,
                    "keep_resu": keep_resu,
                    "delete_resu": delete_resu,
                    "max_log_mb": payload.max_log_mb,
                    "clear_cid": bool(payload.clear_cid),
                    "clear_pyc": bool(payload.clear_pyc),
                    "dry_run": bool(payload.dry_run),
                    "resu_removed": report.resu_removed,
                    "logs_truncated": report.logs_truncated,
                    "bytes_freed": report.bytes_freed,
                },
                actor=actor,
            )
        ctx.invalidate_status_cache()
        return {
            "resu_removed": report.resu_removed,
            "logs_truncated": report.logs_truncated,
            "bytes_freed": report.bytes_freed,
            "cid_removed": report.cid_removed,
            "pycache_removed": report.pycache_removed,
        }

    @app.post("/api/kill_case", response_model=SuccessResponse)
    def api_kill_case(
        request: Request,
        payload: KillCasesPayload,
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, str]:
        ctx.require_auth(x_csauto_token, authorization)
        cases = normalize_cases(payload.cases)
        if not cases:
            raise ctx.http_exception_cls(status_code=400, detail="Missing cases parameter")
        try:
            case_ids = [ctx.validate_case(case) for case in cases]
        except ValueError as exc:
            raise ctx.http_exception_cls(status_code=400, detail=str(exc)) from exc
        actor = request.client.host if request.client else None
        errors: list[str] = []
        if len(case_ids) == 1:
            try:
                kill_case(
                    ctx.runs_dir, case_ids[0], actor=actor, job_id_patterns=ctx.job_id_patterns, adapter=ctx.adapter
                )
            except Exception as exc:
                errors.append(f"{case_ids[0]}: {exc}")
        else:
            workers = max(1, min(len(case_ids), (os.cpu_count() or 2), 8))
            with ThreadPoolExecutor(max_workers=workers) as pool:
                futures = {
                    pool.submit(
                        kill_case,
                        ctx.runs_dir,
                        case_id,
                        actor=actor,
                        job_id_patterns=ctx.job_id_patterns,
                        adapter=ctx.adapter,
                    ): case_id
                    for case_id in case_ids
                }
                for future in as_completed(futures):
                    case_id = futures[future]
                    try:
                        future.result()
                    except Exception as exc:
                        errors.append(f"{case_id}: {exc}")
        if errors:
            raise ctx.http_exception_cls(status_code=500, detail="; ".join(errors))
        ctx.invalidate_status_cache()
        return {"status": "ok"}

    @app.post("/api/control_case", response_model=SuccessResponse)
    def api_control_case(
        request: Request,
        payload: ControlCasePayload,
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, str]:
        ctx.require_auth(x_csauto_token, authorization)
        if payload.action not in ctx.adapter.control_actions:
            raise ctx.http_exception_cls(
                status_code=400, detail=f"Invalid action (expected one of {sorted(ctx.adapter.control_actions)})"
            )
        cases = normalize_cases(payload.cases)
        if not cases:
            raise ctx.http_exception_cls(status_code=400, detail="Missing cases parameter")
        try:
            case_ids = [ctx.validate_case(case) for case in cases]
        except ValueError as exc:
            raise ctx.http_exception_cls(status_code=400, detail=str(exc)) from exc
        actor = request.client.host if request.client else None
        errors: list[str] = []
        if len(case_ids) == 1:
            try:
                control_case(
                    ctx.runs_dir,
                    case_ids[0],
                    payload.action,
                    value=payload.value,
                    source="web",
                    actor=actor,
                    adapter=ctx.adapter,
                )
            except Exception as exc:
                errors.append(f"{case_ids[0]}: {exc}")
        else:
            workers = max(1, min(len(case_ids), (os.cpu_count() or 2), 8))
            with ThreadPoolExecutor(max_workers=workers) as pool:
                futures = {
                    pool.submit(
                        control_case,
                        ctx.runs_dir,
                        case_id,
                        payload.action,
                        value=payload.value,
                        source="web",
                        actor=actor,
                        adapter=ctx.adapter,
                    ): case_id
                    for case_id in case_ids
                }
                for future in as_completed(futures):
                    case_id = futures[future]
                    try:
                        future.result()
                    except Exception as exc:
                        errors.append(f"{case_id}: {exc}")
        if errors:
            raise ctx.http_exception_cls(status_code=500, detail="; ".join(errors))
        ctx.invalidate_status_cache()
        return {"status": "ok"}

    @app.post("/api/open_gui", response_model=SuccessResponse)
    def api_open_gui(
        request: Request,
        payload: OpenGuiPayload,
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, str]:
        ctx.require_auth(x_csauto_token, authorization)
        case_id, case_dir = ctx.validated_case_dir(payload.case)
        if not os.environ.get("DISPLAY"):
            raise ctx.http_exception_cls(status_code=500, detail="DISPLAY not set on server")
        try:
            runtime_selection = resolve_runtime(
                runtime=ctx.runtime,
                docker_image=ctx.docker_image,
                saturne_bin=ctx.saturne_bin,
                singularity_image=ctx.singularity_image,
                singularity_bin=ctx.singularity_bin,
                adapter=ctx.adapter,
            )
        except Exception as exc:
            raise ctx.http_exception_cls(status_code=500, detail=f"Runtime error: {exc}") from exc
        try:
            cmd = ctx.adapter.build_gui_command(case_dir, runtime_selection)
        except FileNotFoundError as exc:
            raise ctx.http_exception_cls(status_code=404, detail="Solver setup file not found for case") from exc
        except ValueError as exc:
            raise ctx.http_exception_cls(status_code=400, detail=str(exc)) from exc
        cmd_str = " ".join(shlex.quote(part) for part in cmd)
        try:
            subprocess.Popen(
                cmd,
                cwd=case_dir.parent,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                start_new_session=True,
            )
        except Exception as exc:
            raise ctx.http_exception_cls(status_code=500, detail=f"Launch error: {exc}") from exc
        log_case_action(
            ctx.runs_dir,
            case_id,
            "open_gui",
            {"command": cmd_str},
            actor=request.client.host if request.client else None,
        )
        return {"status": "ok"}

    @app.post("/api/run_case", response_model=SuccessResponse)
    def api_run_case(
        payload: RunCasePayload,
        x_csauto_token: str | None = Header(default=None),
        authorization: str | None = Header(default=None),
    ) -> dict[str, str]:
        ctx.require_auth(x_csauto_token, authorization)
        cases = normalize_cases(payload.cases)
        if not cases or payload.n is None or payload.nt is None:
            raise ctx.http_exception_cls(status_code=400, detail="Missing cases, n, nt parameters")
        try:
            case_ids = [ctx.validate_case(case) for case in cases]
        except ValueError as exc:
            raise ctx.http_exception_cls(status_code=400, detail=str(exc)) from exc

        if payload.n <= 0 or payload.nt <= 0:
            raise ctx.http_exception_cls(status_code=400, detail="n, nt, and max_parallel must be integers > 0")
        if payload.max_parallel is None:
            max_parallel = default_web_max_parallel(len(case_ids), ctx.runs_dir, STATUS_RUNNING)
        elif payload.max_parallel <= 0:
            raise ctx.http_exception_cls(status_code=400, detail="n, nt, and max_parallel must be integers > 0")
        else:
            max_parallel = payload.max_parallel

        restart, restart_mode, restart_value, restart_path = _parse_restart_params(
            payload,
            ctx.http_exception_cls,
        )

        try:
            runtime_selection = resolve_runtime(
                runtime=ctx.runtime,
                docker_image=ctx.docker_image,
                saturne_bin=ctx.saturne_bin,
                singularity_image=ctx.singularity_image,
                singularity_bin=ctx.singularity_bin,
                adapter=ctx.adapter,
            )
        except Exception as exc:
            raise ctx.http_exception_cls(status_code=500, detail=f"Launch error: {exc}") from exc

        try:
            run_cases(
                ctx.runs_dir,
                payload.n,
                payload.nt,
                max_parallel=max_parallel,
                case_filter=case_ids,
                docker_image=runtime_selection.docker_image,
                runtime=runtime_selection.runtime,
                saturne_bin=runtime_selection.saturne_bin,
                singularity_image=runtime_selection.singularity_image,
                singularity_bin=runtime_selection.singularity_bin,
                resume_only_failed=False,
                restart=restart,
                restart_mode=restart_mode,
                restart_value=restart_value,
                restart_path=restart_path,
                use_slurm=ctx.use_slurm,
                mpi_exec_options=ctx.mpi_exec_options,
                source="web",
                adapter=ctx.adapter,
            )
        except ctx.http_exception_cls:
            raise
        except Exception as exc:
            raise ctx.http_exception_cls(status_code=500, detail=f"Launch error: {exc}") from exc
        ctx.invalidate_status_cache()
        return {"status": "ok"}
