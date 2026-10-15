# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.0-rc.4] - 2026-10-15

Fourth release candidate for 1.0.0: the residual and probe plots become interactive charts, every restart is marked on them, and csauto gets a new website with online documentation.

### Added
- Interactive residual, time probe and profile plots (Chart.js): hover for values, wheel or drag to zoom, shift-drag to pan, a Reset zoom button, legend toggling, and PNG export of the chart. Auto-refresh updates the chart in place, so the zoom and hidden series are kept. Zoom and pan stay within the data
- `GET /api/residuals_data` and `GET /api/probe_data` return the plotted series as JSON (`residuals_svg` and `probe_svg` stay for scripts and the CLI)
- Every restart of a case is marked on the plots, once each and without the first start from iteration 0. Adapters can report them through `read_restart_origins(case_dir)`; code_saturne reads one per run folder
- Website at https://simvia-tech.github.io/csauto/ rebuilt as a Next.js page in the Simvia design language, with documentation at `/docs` (Zudoku, built from `docs/`). New pages: Installation, VS Code extension and Telemetry

### Changed
- The README is now short: install, a quick start and links. Installation details, telemetry and the extension guide moved to `docs/`
- The dashboard screenshots are taken from the extension running in VS Code

### Fixed
- Residual and probe points from several runs of one case are sorted by x, so older runs no longer draw back-and-forth lines across the plot

## [1.0.0-rc.3] - 2026-10-15

Third release candidate for 1.0.0: warnings about code_aster export keywords that csauto ignores now show in New Campaign and in the dashboard's Run and Restart dialogs, and `saturne_bin` becomes `solver_bin`.

### Added
- A code_aster export that sets `mpi_nbcpu` or `ncpus` now warns where you look: New Campaign shows it as soon as the `.export` is picked (also for a folder start), and the Run and Restart dialogs show it before you launch (`POST /api/setup_warnings`). Adapters report such problems through `setup_warnings(setup_file)`

### Changed
- `saturne_bin` is now `solver_bin` (TOML key, `--solver-bin`, `/api/` config): it is the native executable of any solver. `saturne_bin` and `--saturne-bin` still work as deprecated aliases
- The code_aster example's export header says VS Code Aster can help create an `.export`, and its README no longer sets a solver binary for the native runtime

## [1.0.0-rc.2] - 2026-10-14

Second release candidate for 1.0.0: the embedded dashboard follows the editor theme with dark-theme logos, code_aster's compare shows the export that ran, the dashboard no longer overloads the machine when many cases are run, and the extension's campaign detection is stricter.

### Added
- `DEVELOPMENT.md`: setting up, running and debugging the extension, the dashboard and the backend
- Dark-theme logo variants for code_aster, code_saturne and Simvia: adapters declare `logo_dark_file`, `/api/solver_logo?dark=1` serves it, and the dashboard shows it on dark themes
- code_aster Compare offers the command file next to the export, and shows the export last run (`.csauto.export`), so `mpi_nbcpu` and `ncpus` read the **n** and **nt** picked at launch

### Changed
- The embedded dashboard derives its colors from the editor's text and background (like vs-code-aster), so it reads the same on any theme: table headers, plots, diffs, toasts and buttons included. Theme border and list colors are no longer used
- The exports csauto writes or relinks for a campaign's template no longer set `mpi_nbcpu` and `ncpus`, nor does the code_aster example: each launch sets them
- The `.vsix` build lists what it ships instead of what it leaves out
- Dependencies and CI actions updated to their latest versions

### Fixed
- A code_aster export that sets `mpi_nbcpu` or `ncpus` now logs a warning at launch that they are ignored: the run's export, `.csauto.export`, takes them from **n** and **nt**
- The extension counts a folder as a campaign through its `registry.json` only when that registry looks like csauto's (next to a `campaign.json`, or every entry a case with a known status), so unrelated folders no longer fill the csauto tab
- Running many cases from the dashboard no longer starts them all at once when Max Parallel is empty: local runs are capped to `cpu_count // (n * nt)` at once (a scheduler still receives every selected case), which could exhaust the RAM and crash the editor; a queued case also waits while less than 10% of the RAM is available and another case is running (`CSAUTO_MIN_FREE_MEMORY_PERCENT`, `0` disables, Linux only)
- Older solver adapters keep their GUI working, and the dashboard's svelte-check warnings are cleared

## [1.0.0-rc.1] - 2026-10-08

csauto becomes extension-first: the repository now ships a VS Code extension that is the primary interface, with the CLI as a companion for headless/HPC use.

### Added
- A jump bar under the dashboard's header: one link per panel the solver shows, the panel in view highlighted, Alt+1 to Alt+9 from the keyboard; the header and the bar stay on top while scrolling
- Campaigns view in the extension: one row per campaign with its solver version and a Dashboard button; its steps (DOE table, Template case, Solver, Cases with what is left to generate, Open Dashboard); a context menu with Check Environment, Edit csauto.toml, Reveal in Explorer, Restart Dashboard Server, Show Server Logs, Delete Generated Cases and Delete Campaign (to the trash, refused while cases run). The environment check runs by itself and flags problems on the Solver row. Setup and settings moved to their own collapsed view
- Solver version per campaign, from the Solver row or the New Campaign wizard: the docker image tags installed for the solver or any other tag (downloaded on the spot), the native executable, or a `.sif` image; saved in `csauto.toml`
- Solver versions come from Docker Hub too: the New Campaign page and the Solver row list the installed images first, then every tag of the solver's repository on Docker Hub with its size and date (downloaded when chosen), and fall back to the installed ones offline
- New Campaign is a page in the editor (a Svelte webview, `webviews/new-campaign`): solver, starting point (the example, your files, a case folder, or nothing), one file picker per solver input, a parameter table written to `doe.csv`, then the folder, runtime and version, and whether to generate the cases. Adapters declare their inputs (`case_inputs`) and place them (`assemble_case`): code_aster takes its command file, meshes and optional export, which csauto writes for the picked files or relinks to them; code_saturne takes its setup file, meshes, run.cfg and user sources
- New Campaign checks a case folder as soon as it is picked (`csauto _case-info` names its input file and placeholders, or says why it is not a case), suggests a free folder name, and can start from an empty campaign. A case without placeholders gets one `baseline` case that runs it as is
- New Campaign in the extension: choose the solver among the installed adapters, start from its example or from one of your cases, name the folder and pick a runtime (those found on the machine first). csauto writes `csauto.toml`, `TEMPLATE/`, the shared folders (linked) and a `doe.csv` with one column per template placeholder; an example is generated right away. Backed by two internal commands, `csauto _solvers` and `csauto _new-campaign`, and by two adapter attributes, `description` and `example_dir`. The examples ship in the wheel
- VS Code extension (TypeScript, repo root): an activity-bar sidebar (New Campaign, the Campaigns view, Setup with the version, Python runtime state and CLI install, and Settings with live values and click-through), a status bar item, and the dashboard embedded in a webview (works over Remote-SSH via automatic port forwarding)
- Native VS Code theming for the embedded dashboard: the webview forwards `--vscode-*` theme variables into the dashboard iframe (postMessage handshake, live theme switching), and the dashboard remaps its design tokens onto them: colors, fonts, radii, scrollbars, selection and input colors all follow the editor theme, with dark-theme readability fixes; the browser look is unchanged
- Run-completion notifications: the extension polls the server and notifies when cases finish or fail (`csauto.notifyOnRunCompletion`)
- Multiple campaign dashboards side by side: each campaign (runs directory) gets its own server: started from its own folder so its `csauto.toml`/solver applies: and its own webview panel titled with the solver and campaign name (the sidebar shows one section per campaign with its own dashboard, environment check, per-campaign server logs, and server actions); run notifications, sidebar server list, and per-server stop/restart cover all of them
- Managed extension runtime: on first use the extension creates a private venv in extension storage and installs its bundled, version-matched csauto wheel; `csauto.pythonPath` overrides it; dev checkouts (F5) use an editable install so repo changes are live
- "Install csauto CLI" writes a `csauto` shim to `~/.local/bin` backed by the managed runtime, and warns when a shell alias would shadow it; **csauto: Disable the csauto Shell Alias** (also the Setup view's warning row) comments that alias out after asking
- "Reload Dashboard" command and a dev watch pipeline (`npm run watch`: esbuild + tsc + frontend rebuild)
- New CLI verbs for web-UI action parity: `csauto kill`, `csauto note`, `csauto convergence`
- `CSAUTO_API_TOKEN` environment variable as a token source for `csauto serve` (flag > env > csauto.toml)
- The dashboard accepts a `?token=` query parameter (stored, then stripped from the URL) so the extension can authenticate the embedded dashboard automatically
- Extension telemetry, three events carrying the extension's version: extension activated (5), campaign created with its solver and starting point (6), and simulation run finished with its solver, duration and outcome (7). The first two go through `csauto _telemetry-ping` (`--version`), the last is sent by the servers the extension starts (`CSAUTO_CLIENT`, `CSAUTO_CLIENT_VERSION`), which send no serve ping or heartbeat of their own. They share the CLI's anonymous user id and opt-out, and are gated on VS Code's telemetry setting and `csauto.enableTelemetry`, which also silence the servers and commands the extension starts
- `_telemetry-ping --failed` flag to mark unsuccessful events
- CI packages the `.vsix` on every pull request. Releases build the dashboard, attach the `.vsix` and the wheel, and publish versions with a suffix (`1.0.0-rc.1`) as GitHub pre-releases
- csauto has its own logo (#35): Marketplace icon, activity bar, dashboard tab, favicon, README and landing page. A dashboard tab switches to its solver's icon, served by the adapter, once the server answers
- Setup Guide, a VS Code walkthrough opened on install: it checks Python 3.11+, Python's `venv` module (with the `apt` package to install on Debian and Ubuntu), csauto's environment (set up from a button), and a Solvers step with one section per solver, code_aster and code_saturne, each with its logo (ticked once one of them can run: Docker running, or the solver installed natively or for Apptainer/Singularity; **Check again** says which), then leads to a first campaign. On Windows outside WSL it opens with an "Open a WSL window" step, and setting up csauto there says it runs in WSL. Also in the Setup view and as **csauto: Open Setup Guide**. A failed environment setup now says why and links to it
- `scripts/publish.sh` builds every `.vsix` (`scripts/package-all.sh`, also used by the release workflow) and publishes them all to the Marketplace, which serves each platform its own; `--pre-release` publishes to the pre-release channel
- One `.vsix` per platform (`linux-x64`, `linux-arm64`, `darwin-x64`, `darwin-arm64`, about 10 MB each) carrying the dependency wheels for Python 3.11 to 3.14 (`scripts/bundle-deps.sh`), so the environment sets up offline, on clusters without internet access too. The generic `.vsix`, and a Python newer than those bundled, still download them from PyPI
- Open GUI scales the solver GUI to the client's display (`QT_SCALE_FACTOR` from the dashboard's device pixel ratio)
- One-time suggestion to install VS Code Aster for 3D MED mesh visualization when the workspace contains `.med` files

### Changed
- The built dashboard is no longer committed. It builds into the Python package (`csauto/_frontend/`, ignored by git), CI builds it for every wheel and `.vsix`, and a clone builds it once with `pnpm build`. Without a build, `csauto serve` answers with the command to build it. The pre-commit hook no longer rebuilds it
- `install.sh` installs the wheel of the latest release instead of cloning the repository, so CLI users need neither git nor Node.js. Run from a clone, it still makes an editable install
- The extension starts its server with a random per-session API token, so the local port is no longer open to other local users
- The `.vsix` ships only the bundled wheel, extension bundle, and assets (the Python source tree is no longer duplicated inside it)
- `csauto/__init__.py` version detection works in wheel installs (falls back to package metadata)
- README restructured extension-first; the CLI and the browser dashboard remain the headless/HPC path
- Frontend and extension toolchains upgraded (SvelteKit 3 with its config in `vite.config.ts`, Vite 8, Svelte 5.57, TypeScript 7 for the extension), which clears the Dependabot alerts on the dashboard's build dependencies; CI actions moved to their latest major versions
- Dialog backdrops use a neutral scrim instead of the EDF blue tint

### Fixed
- `csauto prepare` no longer warns about a missing shared folder (`MESH`, `POST`): they are optional, a case may keep its mesh in its own folder
- Open GUI works on WSL with Docker Desktop (the X socket is mounted from `/mnt/wslg`, `DISPLAY` is passed unprefixed), and a GUI that exits at once is reported with its output (kept in `.csauto.gui.log`) instead of failing silently
- Sticky status-table columns no longer let scrolled content bleed through on hover with translucent theme colors

## [0.6.0] - 2026-10-08

Make csauto ready for solvers other than code_saturne: one adapter class describes a solver, the CLI and the dashboard read everything from it, and code_aster now runs on the same launch path as code_saturne. Panels and action buttons follow what each solver can actually do.

### Added
- An adapter conformance suite (`tests/unit/test_adapter_conformance.py`): every registered solver is checked against a sample finished case, so a new adapter learns what the dashboard would miss before a user does. Real runs of the shipped code_saturne and code_aster examples in their docker images are available with `CSAUTO_DOCKER_TESTS=1` (`tests/integration/test_docker_solvers.py`)
- Campaigns record their solver: `csauto prepare` writes `RUNS/campaign.json`, every later command on that folder uses it from any directory, and `prepare` refuses to mix two solvers in one folder. When the `csauto.toml` in use selects another solver, its `docker_image`, `saturne_bin` and `singularity_image` are ignored too (with a warning), since they belong to that other solver
- Runs record their exit status (`.csauto.exitcode`): when the solver's logs give no verdict, exit status 0 means DONE, anything else FAILED. An adapter no longer has to implement `detect_outcome`. Slurm jobs still end with the solver's own status
- Adapter declarations for what used to be code_saturne assumptions: `supported_runtimes`, `container_setup` (shell commands run in the container before the solver), `prepare_launch` (files written before each launch), `restart_modes`, typed `ControlAction` entries, `default_residual_columns`, `logo_file` and `icon_file`, and `read_probe_file` for probe formats other than CSV
- `\{name}` in a template keeps a literal `{name}`, for Python f-strings and sets in code_aster `.comm` files
- API: `/api/tail_files` (the Log Tail file list), `/api/tail_lines` (each line with the severity the solver's anomaly patterns give it), `/api/solver_logo` and `/api/solver_icon`; `/api/app_config` gains `restart_modes`, `default_residual_columns`, `logo` and `icon`

### Changed
- `SolverAdapterBase` and the `SolverAdapter` protocol are merged into one base class, `SolverAdapter`. `run_argv` receives the case folder, and the solver starts inside it in every runtime; `gui_argv` receives the setup file's path relative to the case
- Docker runs use `--rm`, so stopped containers no longer pile up. Images keep their own ENTRYPOINT: one that starts the solver (or a script that sets up its environment, then starts it) gets the solver's arguments as before, one that runs the command it is given (`tini --`, `exec "$@"`) gets the full command, and an image without ENTRYPOINT gets the solver through `--entrypoint` (it used to fail). Containers mount the campaign folder at `/csauto` instead of the image user's home, where the solvers wrote `.cache`, `.config` and `.tmp_run_aster` into the campaign folder; a shared folder whose target would land inside that mount point is refused before launch
- `csauto control RUNS CASE ACTION [VALUE]` replaces `--stop`, `--extend N`, `--checkpoint` and `--flush`; the actions come from the solver and `csauto doctor` lists them. `/api/app_config` returns `control_actions` as `{name, label, value_label, value_kind}` objects and `/api/control_case` checks the value against them
- Restart modes come from the solver: `/api/run_case` refuses other names (the `iteration`, `iter`, `time` and `tmax` aliases are gone) and accepts a `restart_path` naming the run to restart from, refusing a run that holds no checkpoint
- Telemetry serve pings report the solver with the runtime (`code_aster:docker` instead of `docker`), so usage of each solver can be told apart; the README lists it among the collected data
- `docker_image` defaults to the solver's own image; it used to default to `simvia/code_saturne` whatever the solver
- A run stays RUNNING until its process or Slurm job ends, even after its log prints a verdict, so its launch slot is not reused and Kill still reaches it
- Clean only deletes the folders the adapter reports as runs (`list_run_dirs`) and never touches RUNNING or PENDING cases, which it now lists (in a dashboard notice, and at the end of `csauto cleanup`, which refreshes statuses first so a run that has ended is cleaned); a finished case returns to PREPARED only when Clean deleted all its runs, not after a logs-only clean or when it had no run to delete
- Cases are found from the registry and their `doe_row.csv` instead of folder names starting with `case`, so custom case ids work with `doctor`, `run`, `serve` and `cleanup`
- `/api/perf` returns the solver's own timing columns
- code_aster: runs `run_aster` through the shared launch path, so the native runtime and Slurm work and the docker command is properly quoted; `n` and `nt` are applied through `.csauto.export`, a copy of the case's export written at each launch (the case's export is never modified, so `csauto prepare` can extend a launched campaign); the verdict is read from `csauto.stdout`; `RESU` holds each case's single run; `MESH` is the only shared folder and is referenced as `../MESH` (the example was updated); the Compare panel offers the export file; code_aster message boxes are flagged in Recent Errors
- The stub solver reads its step count from `stub.toml` instead of misusing `nt`
- The dashboard reads everything solver-specific from the server: the Control menu lists the solver's actions, the Restart dialog its modes and the run to restart from, the Log Tail its log files with severities computed from the solver's patterns, and the header its logo and favicon (now shipped with the adapter in `csauto/solvers/logos/` instead of `frontend/static`). Labels no longer assume code_saturne ("Run folders", "Results (MB)"), and the residual plot preselects the solver's default curves
- Dashboard panels and action buttons are derived from what the solver adapter implements, rather than declared: a panel appears when the adapter provides what feeds it (`find_residuals_files`, `list_probe_files`, or a non-empty `compare_kinds` / `performance_columns` / `control_actions`), and the Restart, Stop, control and Open GUI controls follow the same rule. Solvers other than code_saturne lose the panels and buttons they could never feed: code_aster and the stub solver now show Status, Compare, Log Tail and Recent Errors only. code_saturne is unchanged
- `csauto doctor` reports the panels and capabilities derived for the configured solver
- The `info` anomaly label is gone, with the Info choice of the Log Tail and Recent Errors severity filters: no solver produced it, so that filter always came up empty. Adapter patterns are labelled `error` or `warn`
- `/api/probes` takes `scope=probes` instead of `scope=monitoring` (a code_saturne directory name); `profiles` is unchanged. `/api/tail` defaults to the solver's own main log instead of `listing`, and the Log Tail file priority comes from the new adapter attribute `tail_file_names`, exposed as `tail_files` in `/api/app_config`
- code_saturne conventions (log names, outcome, progress and restart patterns, the `RESU` results layout, the `performance.log` parser, setup.xml and run.cfg discovery) moved from `logs.py`, `probes.py`, `residuals.py` and `template.py` into the code_saturne adapter, which now drives the generic log engine with its own vocabulary. CFD anomaly warnings (`divergence`, `cfl`, `clipping`, ...) and the "No error detected" exception now apply to code_saturne only, so Recent Errors no longer flags them for other solvers
- The solver boundary test now scans every module outside `csauto/solvers/` for a wider set of code_saturne conventions (`listing`, `monitoring`, `run_solver.log`, `performance.log`, ...), with the deliberate residue listed in one named allowlist. The leaks it found are gone: the read-only `MESH` mount is the new adapter attribute `readonly_shared_dir_names`, and `csauto tail` defaults to the solver's main log instead of `listing`
- Dashboard tabs are now declared by each solver adapter in `dashboard_panels`, and by nothing else: an adapter may leave out a tab it could feed, and Status, Log Tail and Recent Errors are ordinary entries rather than imposed. A test fails when an adapter declares a tab it cannot feed or an unknown tab name. `capabilities` stays derived. No visible change for any shipped solver

- The dashboard uses `@lucide/svelte`, the Svelte 5 build of its icon set, instead of `lucide-svelte`. `pnpm check` now reports no errors and gates CI again

### Fixed
- On macOS, a run launched by `csauto serve` no longer stays RUNNING after it ends: the server reaps its own finished processes, since there is no /proc to spot them
- Clean resetting a code_aster case to PREPARED no longer flips back to DONE or FAILED at the next refresh (the reset now clears the start time, so the kept `csauto.stdout` is not read as a verdict)
- code_aster runs with several MPI ranks no longer show run_aster's `If MPI_Abort is called...` notice as an error
- `csauto serve` no longer prints `[telemetry] Sending serve ping` when telemetry is disabled
- An invalid `csauto.toml` (bad TOML, unknown runtime, ...) printed a Python traceback; it now prints a one-line error and exits with status 1
- code_aster images without `/opt/activate.sh` failed to start; csauto now sources it only when the image has it, so any image with `bash` and `run_aster` on its `PATH` works
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
- A PID reused by another process (after a reboot, for example) kept a finished case RUNNING. csauto now records the boot id and the process start time (in clock ticks since boot, which clock steps, DST and time zones leave alone) at launch, and a PID that no longer matches counts as ended, including when another user owns it
- Template rendering silently dropped non-UTF-8 bytes (Latin-1 accents in French comments) and read large binaries in full; files now keep their bytes, and binaries are detected from their first 8 KiB or from a NUL byte further on
- `csauto prepare` on a campaign prepared by csauto 0.5 reported "Existing case differs" for files with CRLF line endings or non-UTF-8 bytes; cases written that way still match
- A `csauto prepare` that failed on one DOE row left that case half made, with unrendered placeholders, which blocked every later prepare; a failing row now leaves nothing behind
- An adapter anomaly pattern with an unknown label made Recent Errors fail with HTTP 500; such labels are now refused when the adapter is defined
- Probe plots ignored a `Time` or `TIME` axis column, and the probe position fell back to the first coordinate row for a probe it could not match
- Residual rows without an `iteration` column were all drawn at x = 0; they are now plotted in row order, with a warning
- The Log Tail never offered `csauto.stdout` and `csauto.stderr`, so it stayed empty for solvers that log to their console and for runs that failed before writing a results folder
- When `/api/app_config` failed once (for example before the API token was entered), the dashboard showed the full code_saturne interface until a reload. It now shows only Status, Log Tail and Recent Errors until the solver's description loads, and fetches it again with a growing delay or as soon as a token is saved
- The Log Tail's case selector disappeared when the selected case had no log yet, leaving the panel stuck on that case
- The Residuals, Probes and Profiles panels hid their case selector, and Probes and Profiles disabled their tab, when the selected case had no results yet, leaving no way to pick another case
- Clean's "Keep specific folders" on several cases deleted every run of all cases but one: the folder list came from a single case. The folder choices are now offered for one case at a time, and Clean leaves alone a case that has none of the folders to keep
- A queued (PENDING) case could flip to DONE or FAILED on the next refresh, from the logs of its previous run
- `csauto tail -n N` printed fewer than N lines when they were long: it only read the last 4 KB of the file
- The file routes (`/api/tail`, `/api/tail_lines`, `/api/case_file`, Compare, Recent Errors) now refuse any file a solver adapter resolves outside the case folder, and a file name with a NUL byte returns 404 instead of HTTP 500. A huge `restart_value` returned HTTP 500 as well

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
