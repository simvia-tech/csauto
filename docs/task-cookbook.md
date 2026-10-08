# Task Cookbook

Copy/paste recipes for common operations.
The web UI is the primary interface; CLI alternatives are noted where available.

---

## Preparation

### Generate cases from a DOE

`prepare` is a CLI-only step (there is no UI equivalent):

```bash
csauto prepare doe.csv TEMPLATE RUNS
```

Run this again after adding rows to `doe.csv`: unchanged cases are kept and
new ones are added.

Important: after adding a column or changing the template, existing cases no
longer match. `prepare` stops at the first one (`Existing case differs from
current DOE/template content`). Generate into a new folder, or remove those
cases first.

### Add new cases to an existing campaign

Add rows to `doe.csv`, then run `prepare` again. New rows create new case folders,
while existing unchanged cases are kept.

If `prepare` reports a conflict on an existing case, either:

1. generate into a new output folder, or
2. remove the conflicting `RUNS/caseXXXX` folders first, then run `prepare` again.

### Validate environment before launching

```bash
csauto doctor RUNS
csauto status RUNS
```

Fix all `[FAIL]` lines from `doctor` before proceeding.

---

## Launching

### Launch all cases

In the **Status** panel: `Ctrl/Cmd + A` → **Run** → fill in `n`, `nt`,
`max parallel` → **Run**.

CLI alternative:

```bash
csauto run RUNS --n 8 --nt 2 --max-parallel 4
```

### Launch specific cases only

In the **Status** panel: select the target rows → **Run**.

CLI alternative:

```bash
csauto run RUNS --n 8 --nt 2 --case case0003 --case case0010
```

### Re-run only failed cases

In the **Status** panel: filter by `FAILED` status → select all → **Run**.

CLI alternative:

```bash
csauto run RUNS --n 8 --nt 2 --resume
```

### Launch on Slurm with many cases

Same UI flow: with `use_slurm = true` in `csauto.toml`, each submission goes
through `sbatch` automatically. Verify with `squeue -u "$USER"` in the terminal.

CLI alternative:

```bash
csauto run RUNS --n 64 --nt 1 --max-parallel 50
```

---

## Monitoring

### Open the web UI (local)

```bash
csauto serve RUNS --host 127.0.0.1 --port 8000
# Open http://127.0.0.1:8000
```

`serve` uses the primary FastAPI server.

### Open the web UI (remote server or HPC)

On the server:

```bash
csauto serve RUNS --host 127.0.0.1 --port 8000
```

On your laptop:

```bash
ssh -L 8000:127.0.0.1:8000 your-server
# Open http://127.0.0.1:8000
```

### Check run status

In the **Status** panel: the table refreshes automatically. Sort, filter, or
search by case ID, status, or DOE column.

CLI alternative:

```bash
csauto status RUNS
```

### Stream a case log in real time

In the **Log Tail** tab: select the case and file (the solver's main log comes
first: `run_solver.log` for code_saturne, `csauto.stdout` for code_aster), set
line count, enable auto-scroll.

CLI alternative:

```bash
# Main solver log (the default file)
csauto tail RUNS --case case0001

# Launch log (if process didn't start)
csauto tail RUNS --case case0001 --file csauto.stdout --no-follow
```

### Inspect residuals

In the **Residuals Plot** tab: select the **Cases** and **Variables**, and
choose **Start from**. The plot updates by itself (**Refresh** when auto-refresh
is off); **Download as PNG** saves it.

CLI alternative (export to CSV + SVG):

```bash
csauto residuals RUNS --case case0001 \
  --out residuals_case0001.csv --plot residuals_case0001.svg

# Merge multiple cases
csauto residuals RUNS --case case0001 --case case0002 \
  --out residuals_merged.csv
```

### Inspect performance metrics

In the **Timing Snapshot** tab: every case with a timing log is listed. Narrow
the list with **Cases**, export it with **Download as CSV**.

CLI alternative:

```bash
csauto perf RUNS --case case0001
csauto perf RUNS --case case0001 --case case0005 --out perf.csv
```

### Scan for errors after a failure

In the **Recent Errors** tab: select the case in **Cases** and a **Severity**
(All, Error, Warn, Info). The list updates by itself (**Refresh** when
auto-refresh is off).

---

## Restart

### Restart from checkpoint

Restart is available for code_saturne. In the **Status** panel:

1. Select the case(s) to restart
2. Click **Restart**
3. Choose the **Mode**, how far to go:
   - **Additional iterations**, then the number of iterations
   - **Additional physical time**, then the time in seconds
4. With one case selected, **Restart from** picks the run to restart from
   (default: **Latest run**, the newest run with a checkpoint). With several
   cases, each one restarts from its own latest run.
5. Click **Restart** in the popup

Through the API, `restart_path` picks the run the same way (for example
`"restart_path": "20260308-1413"`).

API alternative:

```bash
curl -s -X POST "http://127.0.0.1:8000/api/run_case" \
  -H "Content-Type: application/json" \
  -d '{
    "cases": ["case0001"],
    "n": 4,
    "nt": 2,
    "restart": true,
    "restart_mode": "iterations",
    "restart_value": 100
  }'
```

---

## Steer a running case without killing it

A code_saturne case about to hit its time step limit doesn't need a kill +
restart round trip. Use `csauto control` (or the Status panel's **Control**
menu) instead:

```bash
csauto control RUNS case0007 stop          # finish current step, checkpoint, exit
csauto control RUNS case0007 extend 500    # keep going 500 more time steps
csauto control RUNS case0007 checkpoint    # checkpoint now, keep running
csauto control RUNS case0007 flush         # flush logs/time plots now
```

The actions come from the solver; `csauto doctor RUNS` lists them.

API alternative:

```bash
curl -s -X POST "http://127.0.0.1:8000/api/control_case" \
  -H "Content-Type: application/json" \
  -d '{"cases": ["case0001"], "action": "extend", "value": 500}'
```

See [docs/cli.md](./cli.md#control) for details on each action.

---

## Kill running cases

In the **Status** panel: select the running cases → **Kill**. Prefer the
`stop` control action (above) when you just want the run to wind down cleanly:
Kill discards in-flight work and requires restarting from the last checkpoint.

API alternative:

```bash
curl -s -X POST "http://127.0.0.1:8000/api/kill_case" \
  -H "Content-Type: application/json" \
  -d '{"cases": ["case0001", "case0002"]}'
```

---

## Cleanup

In the **Status** panel: select cases → **Clean**. The popup lets you choose
which runs to keep or delete. Of the results, Clean deletes only the solver's
run folders (each `RESU/<run>` for code_saturne, `RESU` itself for code_aster).
It also cuts the solver's logs over 50 MB down to their last 50 MB and removes
`.csauto.cid`. It skips running and pending cases, and returns a finished case
to `PREPARED` once all its runs are gone.

CLI alternative (always preview with `--dry-run` first):

```bash
csauto cleanup RUNS --prune-resu --keep-last 1 --max-log-mb 100 --dry-run
csauto cleanup RUNS --prune-resu --keep-last 1 --max-log-mb 100 --clear-cid
```

Remove every run (disk space emergency):

```bash
csauto cleanup RUNS --prune-resu --keep-last 0
```

---

## Comparing cases

In the **Compare** panel:

1. Pick the **First case** and the **Second case** (the arrows button swaps them)
2. Pick the **File** (code_saturne: `setup.xml`, `doe_row.csv`, `run_solver.log`,
   `performance.log`; code_aster: the export file, `doe_row.csv`)

The DOE values that differ and the side-by-side diff appear at once; type in
the **Search** box to jump between matching lines. A regex filter is available
through `GET /api/compare_runs` (`filter`).

---

## Marking convergence

Right-click a `DONE` or `FAILED` row in the **Status** panel:
- **Mark Converged**
- **Mark Not Converged**
- **Clear Mark** (remove label)

---

## Authentication for remote UI

```bash
# Serve with token on public interface
csauto serve RUNS --host 0.0.0.0 --port 8000 --token my-token
```

API call with token:

```bash
curl -s -H "X-CSAUTO-TOKEN: my-token" "http://server:8000/api/status"
```
