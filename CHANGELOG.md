# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

Make the dashboard follow what each solver can actually do: panels and action buttons are now derived from the solver adapter instead of being shown for every solver.

### Added
- `ExecutionBackend` boundary (`csauto/backends/`): a case can be launched on a remote execution service instead of a local process or a Slurm job. A backend implements five verbs (`submit`, `poll`, `sync`, `fetch_final`, `cancel`) and translates its own state names into csauto statuses; the core never sees a provider's API. The shipped `fake` backend covers the whole lifecycle in tests with no network, the way the `stub` solver does without a solver. Two new settings, `backend_poll_interval_s` and `backend_sync_interval_s`
- Qarnot cloud execution (`backend = "qarnot"`, optional `[qarnot]` extra): a campaign can run on your own Qarnot account through the generic `docker-batch` profile, with the same docker image used locally. The shared mesh directories travel once per campaign and the case inputs once per case; while a run is in progress only the files the solver adapter declares in `observability_globs` come back, so residuals, probes and logs are live in the dashboard without downloading a multi-gigabyte results directory. The token is read from `QARNOT_TOKEN` and is rejected if found in `csauto.toml`. `csauto doctor --backend qarnot` reports each prerequisite. code_saturne and the stub solver only; code_aster builds no remote command yet
- A **Run on** selector in the dashboard's Run dialog: a launch can be sent to an execution backend instead of the machine hosting the server, chosen per launch rather than per campaign, so one case can be verified locally while the rest go to the cloud. Choosing a backend restates the case count and that the run is billed to your own account before the button is pressed. The list comes from `GET /api/app_config`, so the frontend names no provider; `POST /api/run_case` accepts a matching `backend` field. Two optional status columns, Cloud Time (s) and Cloud Cores, report what each remote case used
- Per-launch execution options: a backend declares what a user may choose and the Run dialog renders it, so choosing Qarnot now offers a scheduling **Priority** (`Flex`, `OnDemand`, `Reserved`) and a **Node type** read from your own account. The core carries the chosen values without interpreting them, which keeps a provider's vocabulary inside its own module, and records them in the case history. The catalogue comes from a dedicated `GET /api/launch_options`, called when the dialog opens rather than on every page load, cached for ten minutes, and degraded rather than failed when the provider is unreachable: a launch never depends on it

### Changed
- Dashboard panels and action buttons are derived from what the solver adapter implements, rather than declared: a panel appears when the adapter provides what feeds it (`find_residuals_files`, `list_probe_files`, or a non-empty `compare_kinds` / `performance_columns` / `control_actions`), and the Restart, Stop, control and Open GUI controls follow the same rule. Solvers other than code_saturne lose the panels and buttons they could never feed: code_aster and the stub solver now show Status, Compare, Log Tail and Recent Errors only. code_saturne is unchanged. Adapters can no longer declare `dashboard_panels`, which now raises `TypeError` at import time
- `csauto doctor` reports the panels and capabilities derived for the configured solver

### Fixed
- A case launched on Qarnot could land on a machine with fewer cores than the run asked for. The rank and thread counts only ever reached the solver, inside `DOCKER_CMD`, while the task itself carried no hardware constraint, so Qarnot allocated any available machine and MPI oversubscribed on paid compute. Submission now asks for at least `n` x `nt` cores
- Asking Qarnot for a minimum core count broke every launch with `Some constraints don't exist. Invalid hardware constraints.` Hardware constraints are validated against a per-account catalogue and cannot be invented, so the core constraint is now sent only when the account actually offers it, and dropped otherwise. The node type chosen in the dialog comes from that same catalogue, so it is always sent
- `registry_lock` deadlocked against itself when taken twice in the same thread, freezing the whole process silently and permanently. `REGISTRY_THREAD_LOCK` is an `RLock`, so a nested call passed straight through it, but `flock` applies per file descriptor and the nested call opened a second one, which waited on the first. Launching a case on the Qarnot backend hit exactly this (`_shared_bucket` reads the registry to decide whether the shared mesh still needs uploading) and hung the server before a single request reached the provider. The lock is now genuinely re-entrant within a thread
- Launching a case on an execution backend froze the whole dashboard. The submit uploads the case and talks to a remote API, and it ran inside `registry_transaction`, so every reader of `registry.json` blocked for its full duration: `/api/status` calls `load_registry`, which takes the same lock, and the UI showed nothing changing while the case sat in `PENDING`. The submit now runs with no lock held and writes its outcome back under its own short transaction, the three-phase discipline the synchronisation pass already followed
- Stopping a case on an execution backend that had just finished raised instead of doing nothing. Qarnot refuses to abort a finished task, so `kill_case` returned HTTP 500 on a case that completed between the last status refresh and the button press; a terminal task is now left alone, and the same refusal is tolerated when the task ends mid-call
- `csauto doctor --backend qarnot` reported only that a token was present, so an exhausted bucket or storage quota was discovered as a `QuotaExceeded` in the middle of an upload, after a campaign had been chosen and launched. It now reports the account's bucket count and storage use, and warns before either runs out
- A case whose launch failed outright (no docker or `sbatch` on PATH, an unreadable binary, a rejected `sbatch` submission) stayed `PENDING` forever. `_launch_local` and `_launch_slurm` record `status=FAILED` and then raise to report the failure, but `registry_transaction` skipped its save whenever the body raised, so that write was discarded. The save now runs in a `finally`, which also stops `csauto prepare` from discarding the registry entries of cases it already created on disk when it aborts part way
- A case launched from the web UI stayed `RUNNING` forever when the run crashed before the solver started (a missing mesh, say). Two causes, both fixed: `is_process_alive` reported a zombie as alive, because `os.kill(pid, 0)` succeeds on a process that exited but was never reaped, which is what every run launched by the long-lived server becomes; and `detect_run_outcome` only read `run_solver.log` and `listing`, so a failure that produces neither went undetected even though code_saturne writes an explicit `run_status.failed` marker next to them. Zombies are now reported as dead (and reaped when we are the parent), and the status markers are read when the logs give no verdict
- Opening the solver GUI on a case whose shared dirs are symlinks (the default since `mesh_mode = "symlink"` became the default in 0.4.1) left those symlinks dangling inside the container: `build_gui_command` (docker) and the singularity branch of `build_runtime_gui_command` mounted only the runs dir, unlike their `run` counterparts which also bind the symlink targets. Both now bind them the same way, `MESH` read-only and `POST` writable
- Requesting a restart on a solver without restart support returned HTTP 500 "Launch error", a client error reported as a server fault; it now returns HTTP 400 naming the solver
- Live control on a solver declaring no control action reported "Invalid action (expected one of [])"; both the API and the CLI now name the solver
- code_aster's Compare panel offered an empty file selector; it now offers `doe_row.csv`

## [0.5.0] - 2026-08-03

Add code_aster as a second supported solver: generate, run, and monitor finite-element campaigns alongside Code_Saturne.

### Added
- code_aster solver adapter (`solver = "code_aster"`): finds the case's `.export` setup file, launches `run_aster` in docker or apptainer/singularity containers (native runtime not implemented yet), routes the solver message file to `RESU/LOGS/run_solver.log`, and derives case status from code_aster's `DIAGNOSTIC JOB` line (OK/alarm → DONE; abort, error, no-convergence, CPU/memory limits → FAILED), ignoring logs left over from previous runs when a case is relaunched
- code_aster dashboard branding: the header shows the code_aster logo for `code_aster` campaigns, and `favicon-code_aster.svg` ships in `frontend/static/` for the solver-aware favicon introduced in 0.4.1
- `examples/codeaster-cube`: a complete 9-case demo campaign (cube under triaxial traction, two mesh variants, one deliberately failing case) with template `.comm`/`.export` files and the Salome script that produced the meshes

## [0.4.1] - 2026-07-17

Deepen the solver adapter boundary (dashboard panels, timing columns, compare kinds, and error files are now adapter-driven), make `mesh_mode = "symlink"` the default with full container-runtime support, and validate DOE specs against the template.

### Changed
- Dashboard branding is solver-aware: the header shows the Code_Saturne logo only for `code_saturne` campaigns (other solvers get their name as text), and the favicon defaults to the Simvia mark, switching to `/favicon-<solver>.svg` when such an asset exists (`favicon-code_saturne.svg` ships today; a future solver just drops a file in `frontend/static/`)
- The compare panel's file list and the Recent Errors file selector are now driven by the solver adapter via `/api/app_config` (`compare_kinds` with honest labels — first entry is the default, from which `default_compare_kind` now derives — and `error_files` from `anomaly_file_names`), with the previous hardcoded lists kept as fallbacks for older backends
- The Timing Snapshot panel is now driven by the solver adapter end to end: adapters declare `performance_columns` (key, label, kind) which `/api/perf` exposes and the frontend renders (table and CSV export), and `performance_fields` (CLI CSV export) derives from the same metadata so the column order matches the UI; dashboard cards are declared per adapter (`dashboard_panels`, exposed via `/api/app_config`), so a future solver without residuals simply doesn't show that card — adding a solver requires no frontend or core changes
- `mesh_mode = "symlink"` now works with the docker and singularity runtimes: symlinked `MESH`/`POST` targets are bind-mounted into the container at their absolute host path (`MESH` read-only, `POST` writable), for direct runs and Slurm scripts alike, so the symlinks in `RUNS/` resolve identically inside the container; the up-front rejection now only fires for broken symlink targets
- `mesh_mode` defaults to `symlink` (was `copy`): physically duplicating multi-gigabyte meshes per study is now opt-in; the Windows fallback to copy-with-warning when symlinks cannot be created is unchanged

### Fixed
- The Log Tail panel now offers every file its priority table declares (`csauto.stdout`, `csauto.stderr`, `listing`, `run_status.running`) instead of only `*.log`/`summary` names, so solvers whose console log is `csauto.stdout` (e.g. su2) get a working tail instead of "No log data available"
- Recent-errors scanning deduplicates resolved file paths, so adapters aliasing several conventional names onto one file can no longer report the same error twice

### Added
- `csauto doe` cross-checks spec parameter names against the template's placeholders and IF-condition variables (`./TEMPLATE` by default, `--template DIR` to override, `--no-check` to skip): a spec parameter matching nothing in the template is an error — previously a typo silently produced cases that ran with the template's hardcoded value — and template variables not covered by the spec produce a warning
- `csauto prepare --strict` turns the "DOE columns not used in template" warning into an error

## [0.4.0] - 2026-07-15

Introduce a solver adapter boundary: all code_saturne-specific logic (command building, output parsing, file conventions, restart, live control, doctor checks) now lives behind a pluggable `SolverAdapter` selected via the new `solver` key in `csauto.toml`, so additional solvers can be added without touching the core.

### Added
- `solver` configuration key in `csauto.toml` selecting the solver adapter (default `code_saturne`)
- `SolverAdapter` boundary (`csauto/solvers/`): the protocol, the `code_saturne` adapter, and an adapter registry; adding a solver means writing one adapter class, with no changes to the orchestration core (enforced by a source-scan test)
- Built-in `stub` solver adapter, used by integration tests to exercise the full prepare → run → status → control pipeline without a real solver installed
- Documentation: "Adding a new solver" step-by-step guide (`docs/adding-a-solver.md`) and a "Solver adapter boundary" section in `docs/architecture.md`

## [0.3.1] - 2026-07-09

Add a `mesh_mode` option so large shared MESH/POST directories can be symlinked into `RUNS/` instead of physically copied, with a guard against unsupported symlink + container-runtime combinations.

### Added
- `mesh_mode` config/CLI option (`copy`|`symlink`, default `copy`) for `csauto prepare`: `symlink` links the shared `MESH`/`POST` dirs into `RUNS/` instead of copying them, avoiding disk duplication for large meshes; `csauto run` rejects `docker`/`singularity` runtimes when a symlinked mesh points outside `RUNS/`, since those runtimes only bind-mount `RUNS/`

## [0.3.0] - 2026-07-08

Add `csauto control` for live case steering (stop/extend/checkpoint/flush) as a non-destructive alternative to killing a running case.

### Added
- `csauto control` command for live case steering: `--stop` (graceful stop with checkpoint), `--extend N` (raise the time step limit by N without restarting), `--checkpoint` (checkpoint now, keep running), `--flush` (flush logs/time plots now), plus a matching `POST /api/control_case` endpoint
- Status panel gains a Stop button and a More menu (Extend, Checkpoint, Flush) for running cases, with toast notifications on success

## [0.2.0] - 2026-07-07

Add a `csauto doe` command to generate `doe.csv` from a parameter spec, plus release automation improvements.

### Added
- `csauto doe` command to generate `doe.csv` from a TOML parameter spec, supporting factorial, Latin Hypercube (LHS), Sobol (requires the `doe` extra), and central composite (CCD) sampling
- Automatic GitHub release creation when `VERSION` changes on `main`

### Fixed
- Tests no longer send real telemetry pings
- Release workflow now gates on CI success

## [0.1.1] - 2026-07-06

Fix DOE CSV parsing to tolerate whitespace around headers and values.

### Added
-

### Fixed
- DOE CSV files with spaces around delimiters (e.g. after a comma) or leading/trailing whitespace on headers and values are now parsed correctly; whitespace is stripped before column matching and value casting, while spaces inside quoted values are preserved.

## [0.1.0] - 2026-04-10

### Added

- Case generation from DOE CSV + template directory (`prepare`)
- Local and Slurm job execution (`run`)
- Terminal status overview (`status`)
- Web monitoring dashboard (`serve`) with FastAPI
- Residual, probe, and profile SVG plotting
- Live log tailing and anomaly detection
- Restart from checkpoint with iteration/time targets
- Side-by-side input file comparison
- Cleanup of old RESU directories (`cleanup`)
- Environment validation (`doctor`)
- Support for native, Docker, and Singularity runtimes
