# Architecture

## Overview

`csauto` is a lightweight Python toolchain:

1. `prepare` -> DOE/template rendering (CLI only)
2. `doctor` -> environment validation (CLI only)
3. `serve` -> primary FastAPI web UI + HTTP API (daily driver)
4. `run` / `status` / `tail` / `control` / `residuals` / `perf` / `cleanup` -> CLI alternatives for operations also available in the web UI

The web UI is the primary interface for daily operations. After `prepare` and optionally `doctor`, users work through the browser.

## Main modules

- `csauto/cli.py` - CLI argument parsing and command dispatch
- `csauto/config.py` - `csauto.toml` loading and `Config` class
- `csauto/solvers/` - solver adapter boundary: protocol, code_saturne adapter, test stub (see below)
- `csauto/doe.py` - DOE parsing and case generation
- `csauto/template.py` - placeholder and IF rendering
- `csauto/runner.py` - launch, restart, kill, status transitions
- `csauto/control.py` - live steering (stop/extend/checkpoint/flush) orchestration, directives applied by the adapter
- `csauto/execution.py` - runtime resolution and generic runtime command wrapping (docker/native/singularity)
- `csauto/docker.py` - Docker container commands (run, GUI, terminate)
- `csauto/logs.py` - code_saturne log parsing (outcome, anomalies, tails, restart origin), used via the adapter
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

## Solver adapter boundary

All solver-specific knowledge lives behind the `SolverAdapter` protocol
(`csauto/solvers/base.py`). The generic core (runner, doe, cli, control, web
routes) never references solver conventions directly; a source-scan test
(`tests/unit/test_solver_boundary.py`) enforces this. The adapter is selected
by the `solver` key in `csauto.toml` (default `code_saturne`) and threaded
through entry points: the CLI builds it once in `main`, the web app stores it
on the shared `FastAPIContext` as `ctx.adapter`. Generic functions accept an
optional `adapter` argument and fall back to the code_saturne adapter, so
direct calls keep working.

```
csauto/solvers/__init__.py     # available_solvers(), get_solver_adapter(name)
csauto/solvers/base.py         # SolverAdapter protocol + SolverAdapterBase defaults
csauto/solvers/code_saturne.py # CodeSaturneAdapter
csauto/solvers/stub.py         # StubAdapter (fake solver used by integration tests)
```

An adapter supplies:

- **Commands**: `run_argv`/`gui_argv` fragments composed by the generic
  runtime wrapping in `execution.py`/`docker.py`, plus `build_slurm_script`
  for solvers that need a full batch script instead of `sbatch --wrap`, and
  `mpi_env` for scheduler-time environment variables.
- **Restart**: `build_restart_args` (checkpoint discovery and solver restart
  flags).
- **Outcome and progress**: `detect_outcome` (DONE/FAILED from solver output)
  and `read_progress` (current iteration).
- **File conventions**: setup/run-config discovery, `results_dirname`,
  shared template dirs (`MESH`/`POST` for code_saturne), the friendly-name
  file catalog (`locate_case_file`), results listing, cleanup log names.
- **Analytics**: residuals/probes/performance discovery and parsing (SVG
  rendering stays generic in `svg_utils.py`).
- **Dashboard surface**: derived, not declared. `capabilities` is computed from
  what the adapter provides (an overridden `find_residuals_files`,
  `list_probe_files`, `build_restart_args` or `gui_argv`, or a non-empty
  `compare_kinds`, `performance_columns` or `control_actions`), and
  `dashboard_panels` follows from it. Both are served to the frontend by
  `/api/app_config` and enforced server side by
  `FastAPIContext.require_capability`. An adapter that declares either attribute
  raises `TypeError` at import time. `performance_columns` also drives the
  Timing Snapshot columns and the performance CSV export keys, `compare_kinds`
  the compare panel's file list (first entry is the default), and
  `anomaly_file_names` doubles as the Recent Errors file list.
- **Control**: `apply_control` for live stop/extend/checkpoint/flush
  directives, with `control_actions` declaring what the solver supports.
- **Doctor**: `doctor_checks` for solver-specific environment validation.

Ownership across the runtime x solver matrix: docker mounts and labels,
singularity exec prefixes, `sbatch --wrap` submission, local `Popen`, process
and container termination, launch slots, and the registry are runtime/generic
concerns and stay outside the adapter. The one deliberate exception is the
3-stage singularity Slurm script (`stage/initialize -> srun cs_solver ->
finalize`), which encodes code_saturne workflow knowledge and is owned
entirely by `CodeSaturneAdapter.build_slurm_script`.

Accepted residue, by design: the HTTP API keeps its historical names and
shapes (`/api/resu_dirs`, `resu_removed`, the performance record fields), TOML
keys and CLI flags (`saturne_bin`, `--saturne-bin`, ...) are unchanged, and
`config.py` keeps the code_saturne defaults.

`StubAdapter` (`solver = "stub"`) is a shipped fake solver: it runs a short
Python script writing `OUT/run_0001/stub.log` and lets integration tests cover
prepare -> run -> status -> control end to end without a real solver installed.

Adding a solver means writing one adapter class and registering it in
`csauto/solvers/__init__.py`; the core does not change. See
[Adding a new solver](./adding-a-solver.md) for the step-by-step guide.

## Execution backend boundary

Where `SolverAdapter` answers "what does this solver do", `ExecutionBackend`
(`csauto/backends/base.py`) answers "where does this case run". A backend
implements five verbs: `submit`, `poll`, `sync`, `fetch_final`, `cancel`.
`BackendState.status` already speaks csauto's vocabulary, so translating a
provider's own state names is the backend's job, never the runner's.

A case a backend owns carries `backend` and `task_id` in the registry instead of
a `pid` or a `job_id`, and `_compute_refresh_result` does not finalise it: the
synchronisation pass in `csauto/backend_sync.py` owns its status. That pass runs
on a timer in `csauto serve` and once, throttled, in `csauto status`.

Two invariants the implementation depends on:

- **`DONE` means the results are on local disk.** Compare reads files, Clean
  removes directories, `resu_size_mb` measures a size. The pass marks a case
  `DONE` only after `fetch_final` succeeded.
- **A failed poll never changes a status.** A flaky network must not mark a
  whole campaign as failed; consecutive failures are counted instead.

`QarnotBackend` (`backend = "qarnot"`) is the first real implementation. It runs
any docker image through Qarnot's generic `docker-batch` profile, uploads the
shared directories once per campaign and the case inputs once per case, and
turns `adapter.observability_globs` into the regex whitelist Qarnot's periodic
snapshot expects. Everything Qarnot-specific (the SDK, the buckets, the
`DOCKER_*` constants, the state table) lives in `csauto/backends/qarnot.py`;
`csauto/backends/qarnot_support.py` holds the parts that are decisions rather
than API calls, so they are testable with no SDK. See
[Running a campaign on Qarnot](./qarnot.md).

A backend's remote working directory **is** the case directory, and the
campaign's shared directories sit inside it: a remote task has one writable
directory and no parent to put them in. A solver that expects them elsewhere is
adjusted by its own adapter, through `SolverAdapter.prepare_remote_case`, which
the runner calls before any backend launch. That keeps the backend ignorant of
solvers and the adapter ignorant of providers.

`local` and Slurm are not behind this contract. They predate it and work; porting
them is a later, mechanical refactor.

`FakeBackend` (`backend = "fake"`) is a shipped fake, what `StubAdapter` is to
solvers: it covers the whole lifecycle in tests with no network and no account.

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
