# CLI Reference

> **The web UI is the recommended interface for daily operations**: launching
> cases, monitoring runs, restarting from checkpoint, inspecting logs and
> residuals, cleaning up. Start it with `csauto serve RUNS`.
>
> Use the CLI when you need:
> - **Setup steps** (`prepare`, `doctor`): no UI equivalent
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

Commands that take a `<runs_dir>` use the solver recorded in
`<runs_dir>/campaign.json` by `prepare`, whatever directory they run from.

---

## Command overview

| Command | What it does | UI equivalent |
|---|---|---|
| `prepare` | Generate case folders from DOE + template | CLI only |
| `doe` | Generate a `doe.csv` from a parameter spec (see [doe-format.md](./doe-format.md#generating-doecsv-with-csauto-doe)) | CLI only |
| `doctor` | Run pre-launch environment checks | CLI only |
| `serve` | Start the primary FastAPI web UI + HTTP API server | Starts the UI |
| `run` | Launch the selected cases, or every case not `RUNNING` | Status panel → Run |
| `status` | Refresh and print current case states | Status panel (auto-refreshes) |
| `tail` | Stream a case log file (like `tail -f`) | Log Tail panel |
| `control` | Send one of the solver's live control actions to a running case (code_saturne: stop, extend, checkpoint, flush) | Status panel → Control menu |
| `residuals` | Export residuals data and/or SVG plot | Residuals Plot panel |
| `perf` | Export the solver's timing metrics | Timing Snapshot panel |
| `cleanup` | Prune old run folders and truncate heavy logs | Status panel → Clean |

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
- `<template_dir>`: base case root containing the solver's setup file (code_saturne:
  `setup.xml`, at the root or under `DATA/`; code_aster: a single `.export` file)
- `<output_dir>`: destination root where the case folders are created (`case0001/`,
  ..., or the DOE's `case_id` values)

Options:

- `--mesh-mode {copy,symlink}`: how to place the solver's shared dirs (siblings of
  `<template_dir>`: `MESH` and `POST` for code_saturne, `MESH` for code_aster) into
  `<output_dir>`. Defaults to `mesh_mode` in `csauto.toml` (itself defaulting to
  `symlink`; container runtimes bind-mount the symlink targets automatically). See
  [concepts.md](./concepts.md#shared-meshpost-directories) for the tradeoffs.
- `--strict`: fail (instead of warn) when a DOE column matches nothing in the
  template, the same silent-mismatch failure mode `csauto doe` checks for at
  generation time.

`prepare` records the solver (`solver` in `csauto.toml`, `code_saturne` by
default) in `<output_dir>/campaign.json`, and refuses to add cases to a folder
prepared for another solver.

Generated files:

```
<output_dir>/
├── registry.json
├── campaign.json          ← the solver of this campaign
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

- the solver's setup file is missing from the template
- a placeholder variable is not found in the DOE header (the error names the file;
  write `\{name}` to keep a literal `{name}`)
- empty DOE value for an active placeholder
- an existing case folder no longer matches the current DOE/template content
  (a new column or a template change does this to every case): `prepare` stops there
- `<output_dir>` holds a campaign of another solver

---

## `run`

> **UI equivalent**: Status panel → select cases → **Run** (recommended
> for interactive use). Use this CLI command for scripting or when the UI is not running.

Launches cases: by default every case of the campaign that is not `RUNNING`,
finished ones included (a code_saturne case gets a new run, a code_aster case
replaces its results). `--case` limits the launch to the named cases, `--resume`
to `FAILED` ones. Cases run as background processes (local) or Slurm batch jobs
depending on the configuration.

```bash
csauto run <runs_dir> --n <mpi_ranks> --nt <omp_threads> [options]
```

Required arguments:

- `<runs_dir>`: the campaign folder created by `prepare`
- `--n N`: number of MPI ranks per case (must be `> 0`)
- `--nt N`: number of OpenMP threads per MPI rank (must be `> 0`)

Options:

- `--max-parallel N`: maximum number of the campaign's cases running at the same time, those already running included (default: `max_parallel` from config, which defaults to `1`)
- `--case CASE_ID`: launch only specific cases (repeatable)
- `--resume`: launch only cases currently in `FAILED` status
- `--runtime auto|docker|singularity|native`: override runtime from config
- `--docker-image IMAGE`: Docker image (default: `docker_image` from config, else the solver's own image)
- `--saturne-bin PATH`: the native solver executable (`code_saturne`, or `run_aster` for code_aster)
- `--singularity-image PATH`: override Singularity image
- `--singularity-bin PATH`: override Singularity/Apptainer binary path
- `--no-doctor`: skip pre-launch environment checks

Notes:

- Restart (from checkpoint) is available only via the web UI or API, not via this CLI command
- Cases already `RUNNING` are skipped
- The solver starts inside the case folder, whatever the runtime. Docker runs
  use `docker run --rm` with the campaign folder mounted at `/mnt`
- How `--n` and `--nt` are used depends on the solver: code_saturne receives
  them as `-n` and `--nt`; code_aster runs `.csauto.export`, a copy of the case's
  export with `mpi_nbcpu` set from `--n` and `ncpus` from `--nt`
- A case the solver refuses to launch keeps its status, the other cases still
  launch, and the command ends with an error naming the refused cases
- Slurm submission is controlled by `use_slurm` in `csauto.toml` or `CSAUTO_USE_SLURM`.
  `sbatch --wrap` jobs request `--ntasks` from `--n` and `--cpus-per-task` from `--nt`

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

Starts the primary FastAPI web UI and HTTP REST API server. The dashboard shows
the panels and actions of the campaign's solver.

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

> **UI equivalent**: **Log Tail** panel in the web UI, with the same file
> selection, live streaming, and severity filtering, directly in the browser.
> Use this CLI command for quick terminal access or when the UI is not running.

Streams the end of a case log file, like `tail -f`.

```bash
csauto tail <runs_dir> --case CASE_ID [--file FILE] [-n LINES] [--no-follow]
```

Options:

- `--case CASE_ID`: case to inspect (required)
- `--file FILE`: log file to read. By default, the first file the Log Tail
  offers for the case, usually the solver's main log (`run_solver.log` for
  code_saturne, `csauto.stdout` for code_aster). Other common values:
  - `csauto.stdout`: the run command's output (useful if the solver didn't start)
  - `csauto.stderr`: the run command's errors
  - `listing`: code_saturne's main log on older versions
  - any path relative to the case
- `-n N`: number of lines shown at start (default: `20`)
- `--no-follow`: print once and exit instead of following new lines

Examples:

```bash
# Follow the solver's main log
csauto tail RUNS --case case0001

# One-shot read of the launch log
csauto tail RUNS --case case0001 --file csauto.stdout --no-follow
```

---

## `control`

> **UI equivalent**: Status panel → **Control** menu, which lists the same actions.

Sends one of the solver's live control actions to a running case. The actions
depend on the solver, and `csauto doctor RUNS` lists them with the value each
one takes:

```
[OK] solver code_saturne: control actions stop, extend <Additional time steps>, checkpoint, flush
```

```bash
csauto control <runs_dir> <case_id> <action> [value]
```

For code_saturne, csauto drops a `control_file` into the case's active
`RESU/<run>/` directory, which code_saturne polls once per time step. This is
the non-destructive alternative to killing the process: the solver finishes its
current step cleanly instead of being interrupted mid-iteration. Its actions:

- `stop`: graceful stop. Finish the current time step, write a checkpoint,
  and exit. No restart is needed afterwards; the run is already at a
  consistent state.
- `extend N`: raise the case's configured iteration limit (`nt_max`, as
  code_saturne itself reports it, not csauto's own `--nt`/OpenMP thread count)
  by `N`, so it keeps running past a limit it's about to hit instead of
  stopping. csauto reads the actual limit from the solver's own logs
  (`setup.log`, or a prior extend's echo in `run_solver.log`/`listing`), so
  repeated extends compound correctly. Falls back to the case's current
  iteration if the configured limit can't be read yet (e.g. right after
  launch, before `setup.log` is written), or `0` if that isn't available either.
- `checkpoint`: request a checkpoint at the next time step, without
  stopping the run.
- `flush`: flush logs and time plots at the next time step.

The case must be `RUNNING`. An action that takes a value refuses to run
without one, and the others refuse a value. Each action is logged to the
case's `.csauto.history.jsonl`. code_aster has no live control actions.

Examples:

```bash
csauto control RUNS case0007 stop
csauto control RUNS case0007 extend 500
csauto control RUNS case0007 checkpoint
csauto control RUNS case0007 flush
```

---

## `residuals`

> **UI equivalent**: **Residuals Plot** panel, with interactive case selection,
> quantity picker, and live chart. Use this CLI command when you need to export
> data to CSV or SVG for reports or external processing.

Collects residual data from one or more cases and optionally renders an SVG plot.
Residuals are available for solvers that provide them (code_saturne).

```bash
csauto residuals <runs_dir> --case CASE_ID [--case CASE_ID ...] [--out FILE] [--plot FILE] [--columns COL ...]
```

Options:

- `--case CASE_ID`: case to include (required, repeatable)
- `--out FILE`: write merged CSV to this path (stdout if omitted)
- `--plot FILE`: render residuals as SVG to this path
- `--columns COL [COL ...]`: limit SVG plot to these residual quantities

The output CSV has one row per iteration, with columns for `case_id`,
`iteration`, and each residual quantity found in code_saturne's `residuals.csv`
(or parsed from `run_solver.log` when that file is missing).

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

> **UI equivalent**: **Timing Snapshot** panel, which lists the timings of every
> case that has a timing log and refreshes on its own (narrow with **Cases**,
> export with **Download as CSV**).
> Use this CLI command to export metrics to CSV for batch comparison or reporting.

Extracts timing metrics from the solver's timing log (code_saturne:
`performance.log`) for one or more cases.

```bash
csauto perf <runs_dir> --case CASE_ID [--case CASE_ID ...] [--out FILE]
```

Options:

- `--case CASE_ID`: case to include (required, repeatable)
- `--out FILE`: write CSV to this path (stdout if omitted)

The output CSV has `case_id` plus the solver's timing columns, the same as the
Timing Snapshot panel. For code_saturne: `elapsed_time`, `io_time`,
`linear_solver_time`, `gradients_time`, `balances_time`, `mpi_ranks`, `threads`.

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
- At least one case exists (a folder listed in `registry.json` or holding a `doe_row.csv`)
- The solver's setup file is present in each case (`setup.xml`, or the `.export` for code_aster)
- What the solver offers: dashboard panels, capabilities, live control actions, and supported runtimes
- The runtime is usable (reads `csauto.toml`): the native executable, the Singularity
  binary and image, or the `docker` command (the Docker image itself is not checked)
- X11 display availability (for GUI launch, code_saturne)
- Web dependencies (`fastapi`, `uvicorn`, `pydantic`) for `csauto serve`

Each check prints `[OK]`, `[WARN]` or `[FAIL]`. Fix all failures before running.

---

## `cleanup`

> **UI equivalent**: Status panel → select cases → **Clean**. The UI
> popup lets you choose interactively which runs to keep or delete; Clean also
> cuts the solver's logs over 50 MB down to their last 50 MB and removes `.csauto.cid`.
> Use this CLI command for scripting, scheduled cleanups, or disk-space emergencies.

Removes old run folders and truncates oversized logs. `--prune-resu` deletes
only the run folders the solver reports: each `RESU/<run>` for code_saturne,
`RESU` itself for code_aster (one run per case). `RUNNING` and `PENDING` cases
are skipped. This command does not change case statuses.

```bash
csauto cleanup <runs_dir> [options]
```

Options:

- `--prune-resu`: enable removal of old run folders
- `--keep-last N`: keep the N most recent run folders per case (default: `1`, `0` to delete all)
- `--max-log-mb X`: truncate the solver's log files larger than X MB, keeping their end
- `--clear-cid`: remove `.csauto.cid` process tracking files
- `--clear-pyc`: remove `__pycache__` directories under case folders
- `--dry-run`: preview what would be deleted, without any actual change

If no cleanup option is provided, the command exits with an informational message
and makes no changes.

**Always run with `--dry-run` first**:

```bash
csauto cleanup RUNS --prune-resu --keep-last 1 --max-log-mb 100 --dry-run
```

Examples:

```bash
# Remove all but the latest run, truncate logs > 100 MB
csauto cleanup RUNS --prune-resu --keep-last 1 --max-log-mb 100

# Same, but preview first
csauto cleanup RUNS --prune-resu --keep-last 1 --max-log-mb 100 --dry-run

# Remove every run (keep none)
csauto cleanup RUNS --prune-resu --keep-last 0
```
