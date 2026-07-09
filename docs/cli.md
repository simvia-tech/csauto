# CLI Reference

> **The web UI is the recommended interface for daily operations** — launching
> cases, monitoring runs, restarting from checkpoint, inspecting logs and
> residuals, cleaning up. Start it with `csauto serve RUNS`.
>
> Use the CLI when you need:
> - **Setup steps** (`prepare`, `doctor`) — no UI equivalent
> - **Scripting and automation** in CI/CD pipelines or shell scripts
> - **Data export** to CSV/SVG (`residuals`, `perf`)
> - **Terminal-only** access (no SSH tunnel set up)
>
> Where a UI equivalent exists, it is noted in the command description.

All commands are run through:

```bash
csauto <command> [options]
```

Global option:

```bash
csauto --config /path/to/csauto.toml <command> ...
```

If `--config` is omitted, config discovery follows the order in [config.md](./config.md).

---

## Command overview

| Command | What it does | UI equivalent |
|---|---|---|
| `prepare` | Generate case folders from DOE + template | — (CLI only) |
| `doctor` | Run pre-launch environment checks | — (CLI only) |
| `serve` | Start the primary FastAPI web UI + HTTP API server | — (starts the UI) |
| `run` | Launch selected or all prepared cases | Status panel → Run Selected |
| `status` | Refresh and print current case states | Status panel (auto-refreshes) |
| `tail` | Stream a case log file (like `tail -f`) | Log Tail panel |
| `control` | Steer a running case (stop/extend/checkpoint/flush) without killing it | Status panel → Stop, More ▾ menu (Extend/Checkpoint/Flush) |
| `residuals` | Export residuals data and/or SVG plot | Residuals Plot panel |
| `perf` | Extract performance metrics from logs | Timing Snapshot panel |
| `cleanup` | Prune old data and truncate heavy logs | Status panel → Clean Selected |

---

## `prepare`

Reads a DOE CSV and renders the template for each row, creating one case directory
per row in `<output_dir>`. If a case directory already exists and still matches
the current DOE row and template content, it is kept as-is; only new cases are added.

```bash
csauto prepare <doe.csv> <template_dir> <output_dir>
```

Arguments:

- `<doe.csv>`: parameter table with header row (see [doe-format.md](./doe-format.md))
- `<template_dir>`: base case root containing `setup.xml` (at root or under `DATA/`)
- `<output_dir>`: destination root where `caseXXXX/` folders are created

Options:

- `--mesh-mode {copy,symlink}`: how to place the shared `MESH`/`POST` dirs (siblings of
  `<template_dir>`) into `<output_dir>`. Defaults to `mesh_mode` in `csauto.toml`
  (itself defaulting to `copy`). See [concepts.md](./concepts.md#shared-meshpost-directories)
  for the tradeoffs, in particular the `symlink` + container-runtime caveat.

Generated files:

```
<output_dir>/
├── registry.json
├── case0001/
│   ├── DATA/setup.xml     ← rendered from template
│   └── doe_row.csv        ← DOE values used for this case
└── case0002/
    └── ...
```

Examples:

```bash
csauto prepare doe.csv TEMPLATE RUNS
csauto prepare /data/doe.csv /data/TEMPLATE /data/RUNS
```

Common errors:

- `setup.xml` missing from template
- placeholder variable not found in DOE header
- empty DOE value for an active placeholder
- existing case folder conflicts with the current DOE/template content

---

## `run`

> **UI equivalent**: Status panel → select cases → **Run Selected** (recommended
> for interactive use). Use this CLI command for scripting or when the UI is not running.

Launches one or more prepared cases. Cases run as background processes (local) or
Slurm batch jobs depending on the configuration.

```bash
csauto run <runs_dir> --n <mpi_ranks> --nt <omp_threads> [options]
```

Required arguments:

- `<runs_dir>`: root folder containing the `caseXXXX/` directories
- `--n N`: number of MPI ranks per case (must be `> 0`)
- `--nt N`: number of OpenMP threads per MPI rank (must be `> 0`)

Options:

- `--max-parallel N`: maximum number of cases running simultaneously (default: from config)
- `--case CASE_ID`: launch only specific cases — repeatable
- `--resume`: launch only cases currently in `FAILED` status
- `--runtime auto|docker|singularity|native`: override runtime from config
- `--docker-image IMAGE`: override Docker image
- `--saturne-bin PATH`: override native code_saturne binary path
- `--singularity-image PATH`: override Singularity image
- `--singularity-bin PATH`: override Singularity/Apptainer binary path
- `--no-doctor`: skip pre-launch environment checks

Notes:

- Restart (from checkpoint) is available only via the web UI or API, not via this CLI command
- Slurm submission is controlled by `use_slurm` in `csauto.toml` or `CSAUTO_USE_SLURM`

Examples:

```bash
# Launch all cases, 4 MPI ranks, 2 threads, at most 2 at a time
csauto run RUNS --n 4 --nt 2 --max-parallel 2

# Launch only two specific cases
csauto run RUNS --n 64 --nt 1 --case case0002 --case case0008

# Re-run only failed cases
csauto run RUNS --n 4 --nt 2 --resume

# Override runtime without editing csauto.toml
csauto run RUNS --n 4 --nt 2 --runtime native --saturne-bin /opt/cs/bin/code_saturne
```

---

## `status`

> **UI equivalent**: the Status panel in the web UI refreshes automatically and
> shows the same information with sorting and filtering. Use this CLI command for
> quick checks in the terminal or in scripts.

Refreshes the registry from current process/job/log state and prints a summary table.

```bash
csauto status <runs_dir>
```

Printed columns: `case_id`, `status`, `nprocs`, `nt`, `last_iter`, `duration`,
`last_mod`, `resu_size_mb`.

Example:

```bash
csauto status RUNS
```

---

## `serve`

> This is the command that **starts the web UI**. Run it once at the beginning of
> a work session and keep it running. See [web-ui.md](./web-ui.md) for the full
> UI guide.

Starts the primary FastAPI web UI and HTTP REST API server.

```bash
csauto serve <runs_dir> [--host 127.0.0.1] [--port 8000] [--token TOKEN] [--no-doctor]
```

Options:

- `--host`: bind address (default: `127.0.0.1`)
- `--port`: bind port (default: `8000`)
- `--token TOKEN`: API authentication token (overrides `[api].token` from config)
- `--no-doctor`: skip pre-launch environment checks
- `--show-api-logs`: enable uvicorn access logs (disabled by default for cleaner output)

Security rule: binding to any host other than `127.0.0.1` / `localhost` requires
a token to be configured.

Examples:

```bash
# Local only
csauto serve RUNS --host 127.0.0.1 --port 8000

# Remote access with authentication
csauto serve RUNS --host 0.0.0.0 --port 8000 --token my-secret-token
```

See [web-ui.md](./web-ui.md) for the full UI guide.

## `tail`

> **UI equivalent**: **Log Tail** panel in the web UI — same file selection,
> live streaming, and severity filtering, directly in the browser.
> Use this CLI command for quick terminal access or when the UI is not running.

Streams the end of a case log file, like `tail -f`.

```bash
csauto tail <runs_dir> --case CASE_ID [--file FILE] [-n LINES] [--no-follow]
```

Options:

- `--case CASE_ID`: case to inspect (required)
- `--file FILE`: log file to read. Common values:
  - `listing` — main solver log (default)
  - `run_solver.log` — solver launch log
  - `csauto.stdout` — csauto launch output (useful if the process didn't start)
  - `csauto.stderr` — csauto launch errors
- `-n N`: initial number of lines to display (default: `20`)
- `--no-follow`: print once and exit instead of following new lines

Examples:

```bash
# Follow main solver log, show last 200 lines
csauto tail RUNS --case case0001 --file listing -n 200

# One-shot read of launch log
csauto tail RUNS --case case0001 --file csauto.stdout -n 50 --no-follow
```

---

## `control`

> **UI equivalent**: Status panel → **Stop** button, plus a **More ▾** menu
> with Extend, Checkpoint, and Flush.

Sends a live steering directive to a running case by dropping a
`control_file` into its active `RESU/<run>/` directory, which code_saturne
polls once per time step. This is the non-destructive alternative to killing
the process: the solver finishes its current step cleanly instead of being
interrupted mid-iteration.

```bash
csauto control <runs_dir> <case_id> [--stop | --extend N | --checkpoint | --flush]
```

Exactly one action is required:

- `--stop`: graceful stop — finish the current time step, write a checkpoint,
  and exit. No restart is needed afterwards; the run is already at a
  consistent state.
- `--extend N`: raise the case's configured iteration limit (`nt_max`, as
  code_saturne itself reports it — not csauto's own `--nt`/OpenMP thread count)
  by `N`, so it keeps running past a limit it's about to hit instead of
  stopping. csauto reads the actual limit from the solver's own logs
  (`setup.log`, or a prior extend's echo in `run_solver.log`/`listing`), so
  repeated extends compound correctly. Falls back to the case's current
  iteration if the configured limit can't be read yet (e.g. right after
  launch, before `setup.log` is written), or `0` if that isn't available either.
- `--checkpoint`: request a checkpoint at the next time step, without
  stopping the run.
- `--flush`: flush logs and time plots at the next time step.

The case must be `RUNNING` for any of these to apply. Each action is logged
to the case's `.csauto.history.jsonl`.

Examples:

```bash
csauto control RUNS case0007 --stop
csauto control RUNS case0007 --extend 500
csauto control RUNS case0007 --checkpoint
csauto control RUNS case0007 --flush
```

---

## `residuals`

> **UI equivalent**: **Residuals Plot** panel — interactive case selection,
> quantity picker, and live chart. Use this CLI command when you need to export
> data to CSV or SVG for reports or external processing.

Collects residual data from one or more cases and optionally renders an SVG plot.

```bash
csauto residuals <runs_dir> --case CASE_ID [--case CASE_ID ...] [--out FILE] [--plot FILE] [--columns COL ...]
```

Options:

- `--case CASE_ID`: case to include — required, repeatable
- `--out FILE`: write merged CSV to this path (stdout if omitted)
- `--plot FILE`: render residuals as SVG to this path
- `--columns COL [COL ...]`: limit SVG plot to these residual quantities

The output CSV has one row per iteration, with columns for `case_id`,
`iteration`, and each residual quantity found in `residuals.csv`.

Examples:

```bash
# Print residuals to stdout
csauto residuals RUNS --case case0001

# Export CSV and SVG for two cases
csauto residuals RUNS --case case0001 --case case0002 \
  --out merged.csv --plot merged.svg --columns velocity pressure
```

---

## `perf`

> **UI equivalent**: **Timing Snapshot** panel — select a case and click **Load**.
> Use this CLI command to export metrics to CSV for batch comparison or reporting.

Extracts timing and performance metrics from `performance.log` for one or more cases.

```bash
csauto perf <runs_dir> --case CASE_ID [--case CASE_ID ...] [--out FILE]
```

Options:

- `--case CASE_ID`: case to include — required, repeatable
- `--out FILE`: write CSV to this path (stdout if omitted)

The output CSV includes: elapsed time, number of processes, number of threads,
solver phase timings (initialization, time loop, I/O), and derived metrics.

Examples:

```bash
# Print performance data for one case
csauto perf RUNS --case case0001

# Export for multiple cases
csauto perf RUNS --case case0001 --case case0005 --out perf.csv
```

---

## `doctor`

Validates the environment before launching or serving. Run this whenever something
doesn't work as expected.

```bash
csauto doctor <runs_dir>
```

Checks performed:
- `RUNS/` directory is writable
- At least one `case*` directory exists
- `setup.xml` is present in each case
- Runtime binary / image is accessible (reads `csauto.toml` — native binary, Singularity image, or Docker)
- X11 display availability (for GUI launch)

Each check prints `[OK]` or `[FAIL]`. Fix all failures before running.

---

## `cleanup`

> **UI equivalent**: Status panel → select cases → **Clean Selected**. The UI
> popup lets you choose interactively what to keep or delete.
> Use this CLI command for scripting, scheduled cleanups, or disk-space emergencies.

Removes old RESU directories and truncates oversized logs.

```bash
csauto cleanup <runs_dir> [options]
```

Options:

- `--prune-resu`: enable removal of old RESU run directories
- `--keep-last N`: keep the N most recent RESU dirs per case (default: `1`)
- `--max-log-mb X`: truncate log files larger than X MB
- `--clear-cid`: remove `.csauto.cid` process tracking files
- `--clear-pyc`: remove `__pycache__` directories under case folders
- `--dry-run`: preview what would be deleted — no actual changes

If no cleanup option is provided, the command exits with an informational message
and makes no changes.

**Always run with `--dry-run` first**:

```bash
csauto cleanup RUNS --prune-resu --keep-last 1 --max-log-mb 100 --dry-run
```

Examples:

```bash
# Remove all but the latest RESU run, truncate logs > 100 MB
csauto cleanup RUNS --prune-resu --keep-last 1 --max-log-mb 100

# Same, but preview first
csauto cleanup RUNS --prune-resu --keep-last 1 --max-log-mb 100 --dry-run

# Remove all RESU history (keep none)
csauto cleanup RUNS --prune-resu --keep-last 0
```
