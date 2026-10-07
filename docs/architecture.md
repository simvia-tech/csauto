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
- `csauto/solvers/` - solver adapters: the `SolverAdapter` base class, code_saturne, code_aster, the test stub (see below)
- `csauto/doe.py` - DOE parsing and case generation
- `csauto/template.py` - placeholder and IF rendering
- `csauto/runner.py` - launch, restart, kill, status transitions
- `csauto/control.py` - live control orchestration; the actions are declared and applied by the adapter
- `csauto/execution.py` - runtime resolution and generic runtime command wrapping (docker/native/singularity)
- `csauto/docker.py` - Docker container commands (run, GUI, terminate)
- `csauto/logs.py` - generic log engine: tails, the incremental anomaly scanner, outcome scanning, recency checks
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

csauto knows each solver through one class, a subclass of `SolverAdapter`
(`csauto/solvers/base.py`). The rest of csauto holds the machinery that is the
same for every solver, and the adapter supplies what differs: how to start the
solver, where its files are, and how to read its output. Generic mechanism,
solver-declared vocabulary.

```
csauto/solvers/__init__.py     # available_solvers(), get_solver_adapter(name)
csauto/solvers/base.py         # SolverAdapter: declarations, hooks and their defaults
csauto/solvers/code_saturne.py # CodeSaturneAdapter
csauto/solvers/code_aster.py   # CodeAsterAdapter
csauto/solvers/stub.py         # StubAdapter (fake solver used by integration tests)
csauto/solvers/logos/          # solver logos and icons served to the dashboard
```

The adapter is chosen by the `solver` key of `csauto.toml`. `csauto prepare`
records it in `RUNS/campaign.json`, and every later command on that campaign
uses the recorded solver, whatever directory it runs from. The CLI builds the
adapter once in `main`; the web app keeps it on `FastAPIContext` as
`ctx.adapter`.

What stays generic, and what the adapter supplies:

| Concern | Generic code | Adapter |
|---|---|---|
| Case generation | DOE parsing, placeholder and IF rendering, shared dirs (`doe.py`, `template.py`) | the setup file and run config, shared dir names, files never rendered |
| Launch | runtime selection, native/docker/apptainer wrapping with the case folder as working directory, `sbatch --wrap` with `--ntasks`/`--cpus-per-task`, exit status recording (`execution.py`, `docker.py`, `runner.py`) | `run_argv`, `container_bin_name`, `container_setup`, `supported_runtimes`, `prepare_launch`, optional `build_slurm_script` and `mpi_env` |
| Run state | liveness of the process or Slurm job, the registry, launch slots; a run ends when its process ends | `detect_outcome` (else the exit status decides), `read_progress`, `read_restart_origin` |
| Results | Clean, results size, file listings | `results_dirname`, `list_run_dirs` (the only folders Clean deletes), `locate_case_file` |
| Logs | tailing, the incremental anomaly scanner, `scan_outcome` (`logs.py`) | log names (`tail_file_names`, `anomaly_file_names`), anomaly patterns and ignores |
| Analytics | CSV reading, SVG rendering (`residuals.py`, `probes.py`, `svg_utils.py`) | where the residual, probe, profile and timing files are, and how to parse them |
| Dashboard | every panel and button, driven by `/api/app_config` | `dashboard_panels`, compare kinds, timing columns, control actions, restart modes, default residual curves, logo and icon |

The adapter's `capabilities` (residuals, probes, performance, compare,
control, restart, gui) are derived from what it implements. The dashboard
shows only the actions an adapter can perform, and the API refuses the others
with a 400 (`FastAPIContext.require_capability`).

Every registered adapter must pass `tests/unit/test_adapter_conformance.py`,
which checks its declarations against a sample finished case.
`tests/unit/test_solver_boundary.py` scans every Python module outside
`csauto/solvers/` for code_saturne file names and log markers; it catches
names, not behaviour, which is what the conformance suite and the shared
tests are for.

Accepted residue, listed in `ACCEPTED_RESIDUE` in
`tests/unit/test_solver_boundary.py`: the HTTP API keeps its historical names
(`/api/resu_dirs`, `/api/resu_files`, `resu_removed`, `resu_size_mb`, the
`profiles` scope of `/api/probes`), and the TOML key and CLI flag
`saturne_bin` / `--saturne-bin` (the native solver executable, whatever the
solver) keep their names.

`StubAdapter` (`solver = "stub"`) is a shipped fake solver: it runs a short
Python script writing `OUT/run_0001/stub.log` and lets the tests cover
prepare, run, status and control without a real solver installed.

Adding a solver means writing one adapter class and registering it in
`csauto/solvers/__init__.py`. See [Adding a new solver](./adding-a-solver.md).

## Persistent data model

- `RUNS/registry.json` - global case state
- `RUNS/campaign.json` - the solver the campaign was prepared for
- `RUNS/caseXXXX/doe_row.csv` - resolved DOE row per case
- `RUNS/caseXXXX/.csauto.history.jsonl` - per-case action history
- `RUNS/caseXXXX/.csauto.jobid` - scheduler job id when relevant
- `RUNS/caseXXXX/.csauto.exitcode` - exit status of the last run command

## Runtime model

Supported runtimes:

- `docker`
- `native`
- `singularity`
- `auto`

Launch modes:

- local detached process (`nohup`/`Popen`), started inside the case folder
- Slurm submission (`sbatch --wrap` or an adapter-built script, monitored via `squeue`)

Containers mount the campaign folder at the adapter's `container_root`
(`/mnt` by default) and run with `--rm`; symlinked shared dirs are mounted at
their own path so `../MESH` resolves inside the container.

## Testing strategy

Tests target observable behavior:

- public API contract
- lifecycle transitions
- parser fallbacks
- stable UI/SVG invariants

See [`../tests/README.md`](../tests/README.md).
