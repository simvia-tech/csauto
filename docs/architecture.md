# Architecture

## Overview

`csauto` is a lightweight Python toolchain:

1. `prepare` -> DOE/template rendering (CLI only)
2. `doctor` -> environment validation (CLI only)
3. `serve` -> primary FastAPI web UI + HTTP API (daily driver)
4. `run` / `status` / `tail` / `residuals` / `perf` / `cleanup` -> CLI alternatives for operations also available in the web UI

The web UI is the primary interface for daily operations. After `prepare` and optionally `doctor`, users work through the browser.

## Main modules

- `csauto/cli.py` - CLI argument parsing and command dispatch
- `csauto/config.py` - `csauto.toml` loading and `Config` class
- `csauto/doe.py` - DOE parsing and case generation
- `csauto/template.py` - placeholder and IF rendering
- `csauto/runner.py` - launch, restart, kill, status transitions
- `csauto/execution.py` - runtime resolution and commands
- `csauto/docker.py` - Docker container commands (run, GUI, terminate)
- `csauto/logs.py` - logs, anomalies, tails, restart origin
- `csauto/residuals.py` - residual collection and SVG rendering
- `csauto/probes.py` - probes/profiles collection and SVG rendering
- `csauto/svg_utils.py` - shared SVG rendering primitives (axes, ticks, legends)
- `csauto/registry.py` - registry transactions and history
- `csauto/maintenance.py` - doctor and cleanup
- `csauto/diff.py` - case comparison helpers
- `csauto/fastapi_app.py` - FastAPI app factory and uvicorn server
- `csauto/serve_commands.py` - CLI `serve` subcommand handler
- `csauto/web_support.py` - web API helpers (token, validation, kill)
- `csauto/web_services.py` - status JSON serialization
- `csauto/fastapi_routes/` - route modules (actions, case_data, compare, observability)
- `csauto/viz.py` - empty SVG placeholder helper
- `csauto/pathutil.py` - path validation utilities
- `csauto/warn.py` - warning/error printing
- `frontend/` - SvelteKit app, pre-built output in `frontend/dist/`

## Persistent data model

- `RUNS/registry.json` - global case state
- `RUNS/caseXXXX/doe_row.csv` - resolved DOE row per case
- `RUNS/caseXXXX/.csauto.history.jsonl` - per-case action history
- `RUNS/caseXXXX/.csauto.jobid` - scheduler job id when relevant

## Runtime model

Supported runtimes:

- `docker`
- `native`
- `singularity`
- `auto`

Launch modes:

- local detached process (`nohup`/`Popen`)
- Slurm submission (`sbatch --wrap`, monitored via `squeue`)

## Testing strategy

Tests target observable behavior:

- public API contract
- lifecycle transitions
- parser fallbacks
- stable UI/SVG invariants

See [`../tests/README.md`](../tests/README.md).
