# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Changed
- `mesh_mode = "symlink"` now works with the docker and singularity runtimes: symlinked `MESH`/`POST` targets are bind-mounted into the container at their absolute host path (`MESH` read-only, `POST` writable), for direct runs and Slurm scripts alike, so the symlinks in `RUNS/` resolve identically inside the container; the up-front rejection now only fires for broken symlink targets
- `mesh_mode` defaults to `symlink` (was `copy`): physically duplicating multi-gigabyte meshes per study is now opt-in; the Windows fallback to copy-with-warning when symlinks cannot be created is unchanged

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
