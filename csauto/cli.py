from __future__ import annotations

import argparse
import sys
from collections.abc import Mapping, Sequence
from pathlib import Path
from typing import Any

from . import __version__
from .config import Config, load_config
from .control import control_case
from .doe import generate_cases, load_doe
from .execution import (
    RUNTIME_DOCKER,
    RUNTIME_SINGULARITY,
    resolve_runtime,
)
from .logs import (
    collect_performance,
    tail_log,
)
from .maintenance import cleanup_runs, run_doctor
from .residuals import (
    collect_residuals,
    plot_residuals,
)
from .runner import refresh_status, run_cases
from .serve_commands import add_serve_subcommands, dispatch_serve_command
from .warn import error, flush_warnings


def serve_fastapi(*args: Any, **kwargs: Any) -> Any:
    from .fastapi_app import serve_fastapi as _serve_fastapi

    return _serve_fastapi(*args, **kwargs)


def resolve_runs_dir(base: Path) -> Path:
    """Resolve runs dir, trying CWD first then repository root."""
    candidates: list[Path] = []
    if base.is_absolute():
        candidates.append(base)
    else:
        candidates.append((Path.cwd() / base).resolve())
        repo_root = Path(__file__).resolve().parent.parent
        candidates.append((repo_root / base).resolve())
    seen: set[str] = set()
    uniq_candidates: list[Path] = []
    for cand in candidates:
        key = str(cand)
        if key not in seen:
            seen.add(key)
            uniq_candidates.append(cand)
    for cand in uniq_candidates:
        if cand.is_dir():
            return cand
    raise FileNotFoundError(f"Runs directory not found. Tried: {', '.join(str(c) for c in uniq_candidates)}")


def print_status_table(rows: Sequence[Mapping[str, Any]]) -> None:
    """Display a simple text table with status information."""
    headers = (
        "case_id",
        "status",
        "nprocs",
        "nt",
        "last_iter",
        "duration",
        "last_mod",
        "resu_size_mb",
    )
    col_widths = {h: len(h) for h in headers}
    for row in rows:
        for h in headers:
            col_widths[h] = max(col_widths[h], len(str(row.get(h, ""))))

    def fmt(row: Mapping[str, Any]) -> str:
        return " | ".join(str(row.get(h, "")).ljust(col_widths[h]) for h in headers)

    print(fmt({h: h for h in headers}))
    print("-+-".join("-" * col_widths[h] for h in headers))
    for row in rows:
        print(fmt(row))


def parse_arguments(
    argv: Sequence[str], config: Config | None = None
) -> tuple[argparse.ArgumentParser, argparse.Namespace]:
    """Parse CLI arguments, supporting prepare/run/status commands."""
    config = config or Config()
    parser = argparse.ArgumentParser(
        description="Prepare and run Code_Saturne cases from a DOE CSV and a template case directory.",
    )
    parser.add_argument(
        "--version",
        action="version",
        version=f"csauto {__version__}",
    )
    parser.add_argument(
        "--config",
        type=Path,
        default=None,
        help="Path to csauto.toml (otherwise searched automatically).",
    )
    subparsers = parser.add_subparsers(dest="command")

    prepare_parser = subparsers.add_parser("prepare", help="Prepare cases from the DOE CSV and template directory.")
    prepare_parser.add_argument("doe_csv", type=Path, help="Path to the doe.csv file")
    prepare_parser.add_argument("template_case", type=Path, help="Template case directory")
    prepare_parser.add_argument("output_root", type=Path, help="Root directory where cases will be generated")

    doe_parser = subparsers.add_parser(
        "doe", help="Generate a doe.csv from a parameter spec (factorial/lhs/sobol/ccd)."
    )
    doe_parser.add_argument("spec", type=Path, help="Path to the parameter spec TOML file")
    doe_parser.add_argument("output_csv", type=Path, help="Path to write the generated doe.csv")
    doe_parser.add_argument(
        "--method",
        choices=["factorial", "lhs", "sobol", "ccd"],
        required=True,
        help="Sampling method.",
    )
    doe_parser.add_argument(
        "--samples",
        type=int,
        default=None,
        help="Number of sample points (required for lhs/sobol).",
    )
    doe_parser.add_argument(
        "--seed",
        type=int,
        default=0,
        help="Random seed for lhs/sobol (default 0).",
    )
    doe_parser.add_argument(
        "--round",
        dest="round_ndigits",
        type=int,
        default=6,
        help="Decimal precision for continuous values (default 6).",
    )
    doe_parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite output_csv if it already exists.",
    )
    run_parser = subparsers.add_parser("run", help="Launch code_saturne on all cases.")
    run_parser.add_argument("runs_dir", type=Path, help="Directory containing generated cases")
    run_parser.add_argument("--n", dest="nprocs", type=int, required=True, help="Number of MPI processes")
    run_parser.add_argument("--nt", dest="nt", type=int, required=True, help="Number of OpenMP threads")
    run_parser.add_argument(
        "--max-parallel",
        dest="max_parallel",
        type=int,
        default=config.max_parallel,
        help="Maximum number of simultaneous launches (default 1).",
    )
    run_parser.add_argument(
        "--case",
        dest="cases",
        action="append",
        default=None,
        help="Specific case name to launch (repeatable for multiple cases).",
    )
    run_parser.add_argument(
        "--runtime",
        dest="runtime",
        choices=["auto", "docker", "singularity", "native"],
        default=config.runtime,
        help="Execution backend (auto, docker, singularity, native).",
    )
    run_parser.add_argument(
        "--docker-image",
        dest="docker_image",
        default=config.docker_image,
        help="Docker image to use (default: simvia/code_saturne).",
    )
    run_parser.add_argument(
        "--saturne-bin",
        dest="saturne_bin",
        default=config.saturne_bin,
        help="Path to the code_saturne executable (native runtime).",
    )
    run_parser.add_argument(
        "--singularity-image",
        dest="singularity_image",
        default=config.singularity_image,
        help="Apptainer/Singularity image (.sif or URI).",
    )
    run_parser.add_argument(
        "--singularity-bin",
        dest="singularity_bin",
        default=config.singularity_bin,
        help="apptainer/singularity executable to use (optional).",
    )
    run_parser.add_argument(
        "--resume",
        dest="resume",
        action="store_true",
        help="Re-launch only cases with FAILED status.",
    )
    run_parser.add_argument(
        "--no-doctor",
        dest="no_doctor",
        action="store_true",
        help="Skip the pre-check before run.",
    )

    status_parser = subparsers.add_parser("status", help="Display the status of all cases.")
    status_parser.add_argument("runs_dir", type=Path, help="Directory containing generated cases")

    def _add_export_args(parser: argparse.ArgumentParser) -> None:
        parser.add_argument("runs_dir", type=Path, help="Directory containing generated cases")
        parser.add_argument(
            "--case",
            dest="cases",
            action="append",
            required=True,
            help="Specific case name to export (repeatable).",
        )
        parser.add_argument(
            "--out",
            dest="output",
            type=Path,
            default=None,
            help="Path to the output CSV file (stdout by default).",
        )

    residuals_parser = subparsers.add_parser("residuals", help="Export residuals vs iteration for selected cases.")
    _add_export_args(residuals_parser)
    residuals_parser.add_argument(
        "--plot",
        dest="plot",
        type=Path,
        default=None,
        help="SVG output path for residuals plot (optional).",
    )
    residuals_parser.add_argument(
        "--columns",
        dest="columns",
        nargs="+",
        default=None,
        help="Residual columns to plot (e.g. density velocity).",
    )

    perf_parser = subparsers.add_parser("perf", help="Export performance info from performance.log for selected cases.")
    _add_export_args(perf_parser)

    tail_parser = subparsers.add_parser("tail", help="Follow a case log file (like tail -f).")
    tail_parser.add_argument("runs_dir", type=Path, help="Directory containing generated cases")
    tail_parser.add_argument("--case", required=True, help="Case name (caseXXXX)")
    tail_parser.add_argument(
        "--file",
        dest="file_name",
        default="listing",
        help="File to follow (listing, run_solver.log, run_status.running, csauto.stdout, ...).",
    )
    tail_parser.add_argument(
        "-n",
        dest="lines",
        type=int,
        default=20,
        help="Number of lines to display initially (default 20).",
    )
    tail_parser.add_argument(
        "--no-follow",
        dest="no_follow",
        action="store_true",
        help="Print the end of the file then exit (no real-time follow).",
    )

    control_parser = subparsers.add_parser(
        "control", help="Send a live control directive to a running case (stop/extend/checkpoint/flush)."
    )
    control_parser.add_argument("runs_dir", type=Path, help="Directory containing generated cases")
    control_parser.add_argument("case", help="Case name (caseXXXX)")
    control_action_group = control_parser.add_mutually_exclusive_group(required=True)
    control_action_group.add_argument(
        "--stop",
        action="store_true",
        help="Graceful stop: finish the current time step, checkpoint, and exit (no restart needed).",
    )
    control_action_group.add_argument(
        "--extend",
        type=int,
        metavar="N",
        help="Extend the run by N additional time steps beyond its current progress.",
    )
    control_action_group.add_argument(
        "--checkpoint",
        action="store_true",
        help="Request a checkpoint at the next time step.",
    )
    control_action_group.add_argument(
        "--flush",
        action="store_true",
        help="Flush logs and time plots at the next time step.",
    )

    add_serve_subcommands(subparsers, config)

    doctor_parser = subparsers.add_parser("doctor", help="Check configuration and cases.")
    doctor_parser.add_argument("runs_dir", type=Path, help="Directory containing generated cases")

    cleanup_parser = subparsers.add_parser("cleanup", help="Clean up runs (RESU/logs/cache).")
    cleanup_parser.add_argument("runs_dir", type=Path, help="Directory containing generated cases")
    cleanup_parser.add_argument(
        "--prune-resu",
        action="store_true",
        help="Delete old RESU directories (keep the most recent ones).",
    )
    cleanup_parser.add_argument(
        "--keep-last",
        type=int,
        default=1,
        help="Number of RESU directories to keep per case (default 1, 0 to delete all).",
    )
    cleanup_parser.add_argument(
        "--max-log-mb",
        type=float,
        default=0.0,
        help="Truncate log files exceeding this size (MB).",
    )
    cleanup_parser.add_argument(
        "--clear-cid",
        action="store_true",
        help="Delete .csauto.cid files.",
    )
    cleanup_parser.add_argument(
        "--clear-pyc",
        action="store_true",
        help="Delete __pycache__ directories under cases.",
    )
    cleanup_parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Simulate without deleting (show only).",
    )

    completion_parser = subparsers.add_parser("completion", help="Output shell completion script.")
    completion_parser.add_argument(
        "shell",
        choices=["bash", "zsh"],
        help="Shell type (bash or zsh).",
    )

    subparsers.add_parser("enable-telemetry", help="Enable anonymous usage telemetry.")
    subparsers.add_parser("disable-telemetry", help="Disable anonymous usage telemetry.")
    ping_parser = subparsers.add_parser("_telemetry-ping")
    ping_parser.add_argument("event_type", type=int)
    ping_parser.add_argument("id_docker")

    # Backward compatibility: allow legacy call without subcommand.
    commands = {
        "prepare",
        "doe",
        "run",
        "status",
        "residuals",
        "perf",
        "tail",
        "control",
        "serve",
        "doctor",
        "cleanup",
        "completion",
        "enable-telemetry",
        "disable-telemetry",
        "_telemetry-ping",
    }
    argv_list = list(argv)
    if argv_list and argv_list[0] not in commands and len(argv_list) == 3:
        argv_list = ["prepare", *argv_list]

    return parser, parser.parse_args(argv_list)


def _preparse_config(argv: Sequence[str]) -> Path | None:
    parser = argparse.ArgumentParser(add_help=False)
    parser.add_argument("--config", type=Path, default=None)
    known, _ = parser.parse_known_args(list(argv))
    return known.config


def _print_doctor(items: Sequence[object]) -> bool:
    failed = False
    for item in items:
        level = getattr(item, "level", "ok")
        msg = getattr(item, "message", "")
        if str(level).lower() == "fail":
            failed = True
        print(f"[{str(level).upper()}] {msg}")
    return failed


def main(argv: Sequence[str] | None = None) -> int:
    argv_list = list(argv or sys.argv[1:])
    config_path = _preparse_config(argv_list)
    config = load_config(config_path)
    parser, args = parse_arguments(argv_list, config)

    try:
        if args.command is None:
            parser.print_help()
            return 0
        elif args.command == "prepare":
            headers, rows = load_doe(args.doe_csv)
            generate_cases(headers, rows, args.template_case, args.output_root)
        elif args.command == "doe":
            from .doe_generate import generate_rows, load_doe_spec, write_doe_csv

            spec_params = load_doe_spec(args.spec)
            spec_rows = generate_rows(
                spec_params,
                args.method,
                samples=args.samples,
                seed=args.seed,
                round_ndigits=args.round_ndigits,
            )
            if args.output_csv.exists() and not args.force:
                raise FileExistsError(f"{args.output_csv} already exists (use --force to overwrite)")
            write_doe_csv([p.name for p in spec_params], spec_rows, args.output_csv)
            print(f"Wrote {len(spec_rows)} rows to {args.output_csv}")
        elif args.command == "run":
            runtime_selection = resolve_runtime(
                runtime=args.runtime,
                docker_image=args.docker_image,
                saturne_bin=args.saturne_bin,
                singularity_image=args.singularity_image,
                singularity_bin=args.singularity_bin,
            )
            if not args.no_doctor:
                items = run_doctor(
                    args.runs_dir,
                    require_docker=runtime_selection.runtime == RUNTIME_DOCKER,
                    require_singularity=runtime_selection.runtime == RUNTIME_SINGULARITY,
                    check_display=True,
                    require_write=True,
                    check_setup=True,
                    runtime=runtime_selection.runtime,
                    saturne_bin=runtime_selection.saturne_bin,
                    singularity_image=runtime_selection.singularity_image,
                    singularity_bin=runtime_selection.singularity_bin,
                )
                if _print_doctor(items):
                    raise ValueError("Pre-check failed.")
            run_cases(
                runs_dir=args.runs_dir,
                nprocs=args.nprocs,
                nt=args.nt,
                max_parallel=args.max_parallel,
                case_filter=args.cases,
                docker_image=runtime_selection.docker_image,
                runtime=runtime_selection.runtime,
                saturne_bin=runtime_selection.saturne_bin,
                singularity_image=runtime_selection.singularity_image,
                singularity_bin=runtime_selection.singularity_bin,
                resume_only_failed=args.resume,
                use_slurm=config.use_slurm,
                mpi_exec_options=config.mpi_exec_options,
                source="cli",
            )
        elif args.command == "status":
            rows = refresh_status(args.runs_dir)
            print_status_table(rows)
        elif args.command == "residuals":
            collect_residuals(args.runs_dir, args.cases, args.output)
            if args.plot:
                plot_residuals(args.runs_dir, args.cases, args.columns, args.plot)
        elif args.command == "perf":
            collect_performance(args.runs_dir, args.cases, args.output)
        elif args.command == "tail":
            tail_log(
                args.runs_dir,
                args.case,
                args.file_name,
                lines=args.lines,
                follow=not args.no_follow,
            )
        elif args.command == "control":
            if args.stop:
                control_action, control_value = "stop", None
            elif args.extend is not None:
                control_action, control_value = "extend", args.extend
            elif args.checkpoint:
                control_action, control_value = "checkpoint", None
            else:
                control_action, control_value = "flush", None
            details = control_case(args.runs_dir, args.case, control_action, value=control_value, source="cli")
            print(f"control: {control_action} -> {details}")
        elif dispatch_serve_command(
            args,
            config,
            run_doctor=run_doctor,
            print_doctor=_print_doctor,
            serve_fastapi=serve_fastapi,
        ):
            pass
        elif args.command == "doctor":
            items = run_doctor(
                args.runs_dir,
                check_display=True,
                require_write=True,
                check_setup=True,
                runtime=config.runtime,
                saturne_bin=config.saturne_bin,
                singularity_image=config.singularity_image,
                singularity_bin=config.singularity_bin,
            )
            if _print_doctor(items):
                return 1
        elif args.command == "cleanup":
            if not (args.prune_resu or args.max_log_mb > 0 or args.clear_cid or args.clear_pyc):
                print("No action specified. Use --prune-resu/--max-log-mb/--clear-cid/--clear-pyc.")
                return 0
            report = cleanup_runs(
                args.runs_dir,
                prune_resu=args.prune_resu,
                keep_last=args.keep_last,
                max_log_mb=args.max_log_mb,
                clear_cid=args.clear_cid,
                clear_pyc=args.clear_pyc,
                dry_run=args.dry_run,
            )
            prefix = "DRY-RUN " if args.dry_run else ""
            print(f"{prefix}RESU removed: {report.resu_removed}")
            print(f"{prefix}Logs truncated: {report.logs_truncated}")
            if report.bytes_freed:
                print(f"{prefix}Bytes freed: {report.bytes_freed}")
            if args.clear_cid:
                print(f"{prefix}.csauto.cid removed: {report.cid_removed}")
            if args.clear_pyc:
                print(f"{prefix}__pycache__ removed: {report.pycache_removed}")
        elif args.command == "completion":
            from .completion import generate_bash, generate_zsh

            if args.shell == "bash":
                print(generate_bash(parser))
            else:
                print(generate_zsh(parser))
        elif args.command == "enable-telemetry":
            from .telemetry import set_enabled

            set_enabled(True)
            print("Telemetry enabled.")
        elif args.command == "disable-telemetry":
            from .telemetry import set_enabled

            set_enabled(False)
            print("Telemetry disabled.")
        elif args.command == "_telemetry-ping":
            from .telemetry import send_event

            send_event(args.event_type, block=True, id_docker=args.id_docker)
        else:
            raise ValueError("Unknown command.")
    except Exception as exc:
        error(str(exc))
        return 1
    finally:
        flush_warnings()

    return 0


if __name__ == "__main__":
    sys.exit(main())
