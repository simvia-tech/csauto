from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path
from typing import Any

try:
    import tomllib
except ImportError:  # pragma: no cover - Python < 3.11
    tomllib = None


@dataclass
class Config:
    runtime: str = "auto"
    docker_image: str = "simvia/code_saturne"
    saturne_bin: str | None = None
    singularity_image: str | None = None
    singularity_bin: str | None = None
    use_slurm: bool | None = None
    mpi_exec_options: str | None = None
    max_parallel: int = 1
    host: str = "127.0.0.1"
    port: int = 8000
    api_token: str | None = None
    path: Path | None = None


def _coerce_str(value: Any, default: str) -> str:
    if value is None:
        return default
    return str(value)


def _coerce_bool(value: Any, default: bool | None) -> bool | None:
    if isinstance(value, bool):
        return value
    if value is None:
        return default
    text = str(value).strip().lower()
    if text in {"1", "true", "yes", "on"}:
        return True
    if text in {"0", "false", "no", "off"}:
        return False
    return default


def _parse_required_int(
    value: Any,
    *,
    field: str,
    config_path: Path,
    min_value: int | None = None,
    max_value: int | None = None,
) -> int:
    if isinstance(value, bool):
        raise ValueError(f"Invalid {field} in {config_path}: expected integer, got boolean")
    try:
        parsed = int(str(value).strip())
    except (ValueError, TypeError) as exc:
        raise ValueError(f"Invalid {field} in {config_path}: expected integer") from exc
    if min_value is not None and parsed < min_value:
        raise ValueError(f"Invalid {field} in {config_path}: must be >= {min_value}")
    if max_value is not None and parsed > max_value:
        raise ValueError(f"Invalid {field} in {config_path}: must be <= {max_value}")
    return parsed


def _parse_optional_bool(value: Any, *, field: str, config_path: Path) -> bool | None:
    if value is None:
        return None
    if isinstance(value, bool):
        return value
    text = str(value).strip().lower()
    if text in {"1", "true", "yes", "on"}:
        return True
    if text in {"0", "false", "no", "off"}:
        return False
    raise ValueError(f"Invalid {field} in {config_path}: expected boolean")


def _parse_runtime(value: Any, *, config_path: Path) -> str:
    runtime = _coerce_str(value, "auto").strip().lower()
    if runtime not in {"auto", "docker", "singularity", "native"}:
        raise ValueError(
            f"Invalid runtime in {config_path}: {runtime!r} (expected auto, docker, singularity, or native)"
        )
    return runtime


def find_config(path: Path | None = None) -> Path | None:
    if path:
        return path if path.is_file() else None
    env_value = os.environ.get("CSAUTO_CONFIG")
    if env_value:
        env_path = Path(env_value)
        if env_path.is_file():
            return env_path
    candidates = [
        Path.cwd() / "csauto.toml",
        (Path(__file__).resolve().parent.parent / "csauto.toml"),
    ]
    for candidate in candidates:
        if candidate.is_file():
            return candidate
    return None


def load_config(path: Path | None = None) -> Config:
    config = Config()
    if path is not None and not path.is_file():
        raise FileNotFoundError(f"Config file not found: {path}")
    env_value = os.environ.get("CSAUTO_CONFIG")
    if path is None and env_value:
        env_path = Path(env_value)
        if not env_path.is_file():
            raise FileNotFoundError(f"Config file not found: {env_path}")
    config_path = find_config(path)
    if not config_path:
        return config
    if not tomllib:
        from .warn import warn

        warn(f"Skipping config file {config_path}: tomllib unavailable (Python < 3.11)")
        return config
    try:
        data = tomllib.loads(config_path.read_text(encoding="utf-8"))
    except tomllib.TOMLDecodeError as exc:
        raise ValueError(f"Invalid TOML in config file {config_path}: {exc}") from exc
    except OSError as exc:
        raise OSError(f"Could not read config file {config_path}: {exc}") from exc
    config.path = config_path
    if not isinstance(data, dict):
        raise ValueError(f"Invalid config file {config_path}: root TOML object must be a table")
    if "runtime" in data:
        config.runtime = _parse_runtime(data.get("runtime"), config_path=config_path)
    if "docker_image" in data:
        config.docker_image = _coerce_str(data.get("docker_image"), config.docker_image)
    if "saturne_bin" in data:
        config.saturne_bin = _coerce_str(data.get("saturne_bin"), "").strip() or None
    if "singularity_image" in data:
        config.singularity_image = _coerce_str(data.get("singularity_image"), "").strip() or None
    if "singularity_bin" in data:
        config.singularity_bin = _coerce_str(data.get("singularity_bin"), "").strip() or None
    if "use_slurm" in data:
        config.use_slurm = _parse_optional_bool(
            data.get("use_slurm"),
            field="use_slurm",
            config_path=config_path,
        )
    if "mpi_exec_options" in data:
        config.mpi_exec_options = _coerce_str(data.get("mpi_exec_options"), "").strip() or None
    if "max_parallel" in data:
        config.max_parallel = _parse_required_int(
            data.get("max_parallel"),
            field="max_parallel",
            config_path=config_path,
            min_value=1,
        )
    if "host" in data:
        host = _coerce_str(data.get("host"), "").strip()
        if not host:
            raise ValueError(f"Invalid host in {config_path}: value must not be empty")
        config.host = host
    if "port" in data:
        config.port = _parse_required_int(
            data.get("port"),
            field="port",
            config_path=config_path,
            min_value=0,
            max_value=65535,
        )
    api_section = data.get("api")
    if api_section is not None and not isinstance(api_section, dict):
        raise ValueError(f"Invalid [api] section in {config_path}: expected table")
    token = api_section.get("token") if isinstance(api_section, dict) else None
    if token is not None:
        config.api_token = _coerce_str(token, "").strip() or None
    return config


__all__ = ["Config", "find_config", "load_config"]
