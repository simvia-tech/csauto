from dataclasses import dataclass, field
from pathlib import Path
from threading import Lock
from typing import Any

from ..web_support import request_token, validate_case_id


def _default_adapter() -> Any:
    from ..solvers import get_solver_adapter

    return get_solver_adapter(None)


def expand_csv_query(values: list[str] | None) -> list[str]:
    parts: list[str] = []
    for entry in values or []:
        parts.extend(part.strip() for part in str(entry).split(",") if part.strip())
    return parts


# Shared Pydantic query / payload models
#
# Built lazily via build_shared_models() so that pydantic is only imported at
# runtime (it is an optional dependency). The factory is called once from
# create_fastapi_app(); route modules retrieve models via shared_models().

_shared_models: dict[str, type] = {}


def build_shared_models(components: dict[str, Any]) -> dict[str, type]:
    """Build shared Pydantic models and cache them module-wide."""
    if _shared_models:
        return _shared_models

    BaseModel = components["BaseModel"]
    Field = components["Field"]

    class CaseListQuery(BaseModel):
        """GET query with one or more case ids (comma-separated or repeated)."""

        case: list[str] | None = None

    class CaseQuery(BaseModel):
        """GET query targeting a single case."""

        case: str | None = None

    class SvgQuery(BaseModel):
        """Base fields shared by all SVG-rendering endpoints."""

        case: list[str] | None = None
        columns: str = ""
        width: int = Field(default=900, ge=1)
        height: int = Field(default=500, ge=1)
        include_history: bool = False

    # --- Shared response models ---

    class SuccessResponse(BaseModel):
        """Standard response for successful POST actions."""

        status: str = "ok"

    class StringListResponse(BaseModel):
        """Response wrapping a list of strings (columns, dirs, files)."""

        columns: list[str] = []
        dirs: list[str] = []
        files: list[str] = []

    class CleanupResponse(BaseModel):
        """Response from a cleanup operation."""

        resu_removed: int = 0
        logs_truncated: int = 0
        bytes_freed: int = 0
        cid_removed: int = 0
        pycache_removed: int = 0

    class ProbePositionResponse(BaseModel):
        """Response from probe position lookup."""

        found: bool = False
        model_config = {"extra": "allow"}

    class RestartOriginResponse(BaseModel):
        """Response mapping case ids to their restart origin info."""

        origins: dict[str, dict[str, int | float]] = {}

    _shared_models.update(
        {
            "CaseListQuery": CaseListQuery,
            "CaseQuery": CaseQuery,
            "SvgQuery": SvgQuery,
            "SuccessResponse": SuccessResponse,
            "StringListResponse": StringListResponse,
            "CleanupResponse": CleanupResponse,
            "ProbePositionResponse": ProbePositionResponse,
            "RestartOriginResponse": RestartOriginResponse,
        }
    )
    return _shared_models


def shared_models() -> dict[str, type]:
    """Return previously-built shared models (call build_shared_models first)."""
    if not _shared_models:
        raise RuntimeError("shared_models() called before build_shared_models()")
    return _shared_models


@dataclass
class FastAPIContext:
    runs_dir: Path
    runs_root: Path
    api_token: str | None
    runtime: str
    docker_image: str
    saturne_bin: str | None
    singularity_image: str | None
    singularity_bin: str | None
    use_slurm: bool | None
    mpi_exec_options: str | None
    status_cache_lock: Lock
    status_refresh_lock: Lock
    status_cache: dict[str, Any]
    job_id_patterns: tuple[Any, ...]
    http_exception_cls: type
    adapter: Any = field(default_factory=_default_adapter)

    def invalidate_status_cache(self) -> None:
        with self.status_cache_lock:
            self.status_cache["payload"] = None
            self.status_cache["expires_at"] = 0.0

    def require_auth(self, x_csauto_token: str | None = None, authorization: str | None = None) -> None:
        if not self.api_token:
            return
        headers: dict[str, str] = {}
        if x_csauto_token is not None:
            headers["X-CSAUTO-TOKEN"] = x_csauto_token
        if authorization is not None:
            headers["Authorization"] = authorization
        if request_token(headers) != self.api_token:
            raise self.http_exception_cls(status_code=401, detail="Unauthorized")

    def validate_case(self, case: object) -> str:
        try:
            return validate_case_id(case, self.runs_dir, self.runs_root)
        except ValueError as exc:
            raise self.http_exception_cls(status_code=400, detail=str(exc)) from exc

    def validated_case_dir(self, case: object) -> tuple[str, Path]:
        """Validate a case and return (case_id, case_dir), raising 404 if missing."""
        case_id = self.validate_case(case)
        case_dir = self.runs_dir / case_id
        if not case_dir.is_dir():
            raise self.http_exception_cls(status_code=404, detail=f"Case not found: {case_id}")
        return case_id, case_dir

    def validate_cases(self, values: list[str] | None) -> list[str]:
        cases = expand_csv_query(values)
        if not cases:
            raise self.http_exception_cls(status_code=400, detail="Missing case parameter")
        return [self.validate_case(item) for item in cases]

    def probe_files(self, values: list[str] | None) -> list[str]:
        return expand_csv_query(values)

    def parse_resu_dir_list(self, raw: object, field: str) -> list[str]:
        if raw is None:
            return []
        if isinstance(raw, str):
            items = [raw]
        elif isinstance(raw, (list, tuple)):
            items = [str(item) for item in raw]
        else:
            raise self.http_exception_cls(status_code=400, detail=f"Invalid {field} parameter")
        names: list[str] = []
        for item in items:
            name = str(item).strip()
            if not name:
                continue
            if "/" in name or "\\" in name or name in {".", ".."}:
                raise self.http_exception_cls(status_code=400, detail=f"Invalid {field} entry: {name}")
            names.append(name)
        return names
