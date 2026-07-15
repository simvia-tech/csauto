from __future__ import annotations

import os
from collections.abc import Callable, Sequence
from pathlib import Path
from typing import Any

from .config import Config


def add_serve_subcommands(subparsers: Any, config: Config) -> None:
    serve_parser = subparsers.add_parser("serve", help="Primary FastAPI web monitoring server.")
    serve_parser.add_argument("runs_dir", type=Path, help="Directory containing generated cases")
    serve_parser.add_argument("--host", default=config.host, help="Listening interface (default 127.0.0.1)")
    serve_parser.add_argument("--port", type=int, default=config.port, help="Listening port (default 8000)")
    serve_parser.add_argument(
        "--token",
        dest="api_token",
        default=None,
        help="API token (otherwise read from $CSAUTO_API_TOKEN, then csauto.toml -> [api].token).",
    )
    serve_parser.add_argument(
        "--no-doctor",
        dest="no_doctor",
        action="store_true",
        help="Skip the pre-check before serve.",
    )
    serve_parser.add_argument(
        "--show-api-logs",
        dest="show_api_logs",
        action="store_true",
        help="Show uvicorn access and error logs (hidden by default).",
    )


def _serve_common_prechecks(
    args: Any,
    config: Config,
    *,
    run_doctor: Callable[..., Sequence[object]],
    print_doctor: Callable[[Sequence[object]], bool],
) -> tuple[str, str | None]:
    if not args.no_doctor:
        from .solvers import get_solver_adapter

        items = run_doctor(
            args.runs_dir,
            require_docker=False,
            check_display=True,
            require_write=True,
            check_setup=True,
            adapter=get_solver_adapter(config.solver),
        )
        if print_doctor(items):
            raise ValueError("Pre-check failed.")
    api_token = args.api_token or os.environ.get("CSAUTO_API_TOKEN") or config.api_token
    host_value = args.host
    if host_value not in {"127.0.0.1", "localhost"} and not api_token:
        raise ValueError("Public host requires api.token (csauto.toml) or --token.")
    return host_value, api_token


def dispatch_serve_command(
    args: Any,
    config: Config,
    *,
    run_doctor: Callable[..., Sequence[object]],
    print_doctor: Callable[[Sequence[object]], bool],
    serve_fastapi: Callable[..., Any],
) -> bool:
    if args.command != "serve":
        return False

    host_value, api_token = _serve_common_prechecks(
        args,
        config,
        run_doctor=run_doctor,
        print_doctor=print_doctor,
    )

    try:
        from .telemetry import EVENT_SERVE, send_event

        print(f"[telemetry] Sending serve ping (type={EVENT_SERVE}, runtime={config.runtime})")
        send_event(EVENT_SERVE, valid_result=True, id_docker=config.runtime)
    except Exception:
        pass

    kwargs = {
        "host": host_value,
        "port": args.port,
        "api_token": api_token,
        "solver": config.solver,
        "runtime": config.runtime,
        "docker_image": config.docker_image,
        "saturne_bin": config.saturne_bin,
        "singularity_image": config.singularity_image,
        "singularity_bin": config.singularity_bin,
        "use_slurm": config.use_slurm,
        "mpi_exec_options": config.mpi_exec_options,
    }

    serve_fastapi(args.runs_dir, show_api_logs=getattr(args, "show_api_logs", False), **kwargs)
    return True
