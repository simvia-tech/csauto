# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

Make csauto ready for solvers other than code_saturne: one adapter class describes a solver, the CLI and the dashboard read everything from it, and code_aster now runs on the same launch path as code_saturne. Panels and action buttons follow what each solver can actually do.

### Added
- An adapter conformance suite (`tests/unit/test_adapter_conformance.py`): every registered solver is checked against a sample finished case, so a new adapter learns what the dashboard would miss before a user does. Real runs of the shipped code_saturne and code_aster examples in their docker images are available with `CSAUTO_DOCKER_TESTS=1` (`tests/integration/test_docker_solvers.py`)
- Campaigns record their solver: `csauto prepare` writes `RUNS/campaign.json`, every later command on that folder uses it from any directory, and `prepare` refuses to mix two solvers in one folder
- Runs record their exit status (`.csauto.exitcode`): when the solver's logs give no verdict, exit status 0 means DONE, anything else FAILED. An adapter no longer has to implement `detect_outcome`
- Adapter declarations for what used to be code_saturne assumptions: `supported_runtimes`, `container_setup` (shell commands run in the container before the solver), `prepare_launch` (files written before each launch), `restart_modes`, typed `ControlAction` entries, `default_residual_columns`, `logo_file` and `icon_file`, and `read_probe_file` for probe formats other than CSV
- `\{name}` in a template keeps a literal `{name}`, for Python f-strings and sets in code_aster `.comm` files
- API: `/api/tail_files` (the Log Tail file list), `/api/tail_lines` (each line with the severity the solver's anomaly patterns give it), `/api/solver_logo` and `/api/solver_icon`; `/api/app_config` gains `restart_modes`, `default_residual_columns`, `logo` and `icon`

### Changed
- `SolverAdapterBase` and the `SolverAdapter` protocol are merged into one base class, `SolverAdapter`. `run_argv` receives the case folder, and the solver starts inside it in every runtime; `gui_argv` receives the setup file's path relative to the case
- Docker runs use `--entrypoint` and `--rm`, so solver images no longer need the solver as their entrypoint and stopped containers no longer pile up. Containers mount the campaign folder at `/mnt` instead of the image user's home, where the solvers wrote `.cache`, `.config` and `.tmp_run_aster` into the campaign folder
- `csauto control RUNS CASE ACTION [VALUE]` replaces `--stop`, `--extend N`, `--checkpoint` and `--flush`; the actions come from the solver and `csauto doctor` lists them. `/api/app_config` returns `control_actions` as `{name, label, value_label, value_kind}` objects and `/api/control_case` checks the value against them
- Restart modes come from the solver: `/api/run_case` refuses other names (the `iteration`, `iter`, `time` and `tmax` aliases are gone) and accepts a `restart_path` naming the run to restart from
- `docker_image` defaults to the solver's own image; it used to default to `simvia/code_saturne` whatever the solver
- A run stays RUNNING until its process or Slurm job ends, even after its log prints a verdict, so its launch slot is not reused and Kill still reaches it
- Clean only deletes the folders the adapter reports as runs (`list_run_dirs`) and never touches RUNNING or PENDING cases; a finished case returns to PREPARED only when Clean deleted all its runs, not after a logs-only clean
- Cases are found from the registry and their `doe_row.csv` instead of folder names starting with `case`, so custom case ids work with `doctor`, `run`, `serve` and `cleanup`
- `/api/perf` returns the solver's own timing columns
- code_aster: runs `run_aster` through the shared launch path, so the native runtime and Slurm work and the docker command is properly quoted; `n` and `nt` are applied through `.csauto.export`, a copy of the case's export written at each launch (the case's export is never modified, so `csauto prepare` can extend a launched campaign); the verdict is read from `csauto.stdout`; `RESU` holds each case's single run; `MESH` is the only shared folder and is referenced as `../MESH` (the example was updated); the Compare panel offers the export file; code_aster message boxes are flagged in Recent Errors
- The stub solver reads its step count from `stub.toml` instead of misusing `nt`
- The dashboard reads everything solver-specific from the server: the Control menu lists the solver's actions, the Restart dialog its modes and the run to restart from, the Log Tail its log files with severities computed from the solver's patterns, and the header its logo and favicon (now shipped with the adapter in `csauto/solvers/logos/` instead of `frontend/static`). Labels no longer assume code_saturne ("Run folders", "Results (MB)"), and the residual plot preselects the solver's default curves
- Dashboard panels and action buttons are derived from what the solver adapter implements, rather than declared: a panel appears when the adapter provides what feeds it (`find_residuals_files`, `list_probe_files`, or a non-empty `compare_kinds` / `performance_columns` / `control_actions`), and the Restart, Stop, control and Open GUI controls follow the same rule. Solvers other than code_saturne lose the panels and buttons they could never feed: code_aster and the stub solver now show Status, Compare, Log Tail and Recent Errors only. code_saturne is unchanged
- `csauto doctor` reports the panels and capabilities derived for the configured solver
- `/api/probes` takes `scope=probes` instead of `scope=monitoring` (a code_saturne directory name); `profiles` is unchanged. `/api/tail` defaults to the solver's own main log instead of `listing`, and the Log Tail file priority comes from the new adapter attribute `tail_file_names`, exposed as `tail_files` in `/api/app_config`
- code_saturne conventions (log names, outcome, progress and restart patterns, the `RESU` results layout, the `performance.log` parser, setup.xml and run.cfg discovery) moved from `logs.py`, `probes.py`, `residuals.py` and `template.py` into the code_saturne adapter, which now drives the generic log engine with its own vocabulary. CFD anomaly warnings (`divergence`, `cfl`, `clipping`, ...) and the "No error detected" exception now apply to code_saturne only, so Recent Errors no longer flags them for other solvers
- The solver boundary test now scans every module outside `csauto/solvers/` for a wider set of code_saturne conventions (`listing`, `monitoring`, `run_solver.log`, `performance.log`, ...), with the deliberate residue listed in one named allowlist. The leaks it found are gone: the read-only `MESH` mount is the new adapter attribute `readonly_shared_dir_names`, and `csauto tail` defaults to the solver's main log instead of `listing`
- Dashboard tabs are now declared by each solver adapter in `dashboard_panels`, and by nothing else: an adapter may leave out a tab it could feed, and Status, Log Tail and Recent Errors are ordinary entries rather than imposed. A test fails when an adapter declares a tab it cannot feed or an unknown tab name. `capabilities` stays derived. No visible change for any shipped solver

### Fixed
- A case whose launch failed outright (no docker or `sbatch` on PATH, an unreadable binary, a rejected `sbatch` submission) stayed `PENDING` forever. `_launch_local` and `_launch_slurm` record `status=FAILED` and then raise to report the failure, but `registry_transaction` skipped its save whenever the body raised, so that write was discarded. The save now runs in a `finally`, which also stops `csauto prepare` from discarding the registry entries of cases it already created on disk when it aborts part way
- A case launched from the web UI stayed `RUNNING` forever when the run crashed before the solver started (a missing mesh, say). Two causes, both fixed: `is_process_alive` reported a zombie as alive, because `os.kill(pid, 0)` succeeds on a process that exited but was never reaped, which is what every run launched by the long-lived server becomes; and `detect_run_outcome` only read `run_solver.log` and `listing`, so a failure that produces neither went undetected even though code_saturne writes an explicit `run_status.failed` marker next to them. Zombies are now reported as dead (and reaped when we are the parent), and the status markers are read when the logs give no verdict
- Opening the solver GUI on a case whose shared dirs are symlinks (the default since `mesh_mode = "symlink"` became the default in 0.4.1) left those symlinks dangling inside the container: `build_gui_command` (docker) and the singularity branch of `build_runtime_gui_command` mounted only the runs dir, unlike their `run` counterparts which also bind the symlink targets. Both now bind them the same way, `MESH` read-only and `POST` writable
- Requesting a restart on a solver without restart support returned HTTP 500 "Launch error", a client error reported as a server fault; it now returns HTTP 400 naming the solver
- Live control on a solver declaring no control action reported "Invalid action (expected one of [])"; both the API and the CLI now name the solver
- code_aster's Compare panel offered an empty file selector; it now offers the export file and `doe_row.csv`
- Every run of the shipped code_aster example ended FAILED: its export declares its own message file, so csauto never found the log it read the verdict from
- Kill could stop another campaign's container: for runs without a recorded container (native, apptainer, Slurm, or never started) it searched docker for any container labelled with the case's name, which every campaign shares. It now only searches for docker runs, and only containers of the same campaign
- `sbatch --wrap` submissions requested no resources, so an MPI run got a single task; they now request `--ntasks` and `--cpus-per-task`
- A launch the solver refused (a restart without a checkpoint, an unsupported runtime) left the case PENDING with no way back and skipped the rest of the batch. The case keeps its previous status, the other cases still launch, and the error lists the refused cases
- `csauto run` with a relative runs folder broke docker launches (the container id file path was relative to the wrong folder)
- A PID reused by another process (after a reboot, for example) kept a finished case RUNNING; the process start time is now checked against the launch time
- Template rendering silently dropped non-UTF-8 bytes (Latin-1 accents in French comments) and read large binaries in full; files now keep their bytes, and binaries are detected from their first bytes
- An adapter anomaly pattern with a label other than `error`, `warn` or `info` made Recent Errors fail with HTTP 500; such labels are now refused when the adapter is defined
- Probe plots ignored a `Time` or `TIME` axis column, and the probe position fell back to the first coordinate row for a probe it could not match
- Residual rows without an `iteration` column were all drawn at x = 0; they are now plotted in row order, with a warning
- The Log Tail never offered `csauto.stdout` and `csauto.stderr`, so it stayed empty for solvers that log to their console and for runs that failed before writing a results folder
- When `/api/app_config` failed once (for example before the API token was entered), the dashboard showed the full code_saturne interface until a reload. It now shows only Status, Log Tail and Recent Errors until the solver's description loads, and fetches it again with a growing delay or as soon as a token is saved
- The Log Tail's case selector disappeared when the selected case had no log yet, leaving the panel stuck on that case

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
