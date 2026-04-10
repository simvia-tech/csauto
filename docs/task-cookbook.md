# Task Cookbook

Copy/paste recipes for common operations.
The web UI is the primary interface — CLI alternatives are noted where available.

---

## Preparation

### Generate cases from a DOE

`prepare` is a CLI-only step (there is no UI equivalent):

```bash
csauto prepare doe.csv TEMPLATE RUNS
```

Run this again whenever you change `doe.csv` (new rows, new columns) or modify
template placeholders.

Important:

- `prepare` is incremental for unchanged existing cases: re-running it adds only the
  missing cases.
- If an existing case no longer matches the current DOE row or template content,
  `prepare` fails for that case.

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

In the **Status** panel: `Ctrl/Cmd + A` → **Run Selected** → fill in `n`, `nt`,
`max parallel` → **Submit**.

CLI alternative:

```bash
csauto run RUNS --n 8 --nt 2 --max-parallel 4
```

### Launch specific cases only

In the **Status** panel: select the target rows → **Run Selected**.

CLI alternative:

```bash
csauto run RUNS --n 8 --nt 2 --case case0003 --case case0010
```

### Re-run only failed cases

In the **Status** panel: filter by `FAILED` status → select all → **Run Selected**.

CLI alternative:

```bash
csauto run RUNS --n 8 --nt 2 --resume
```

### Launch on Slurm with many cases

Same UI flow — with `use_slurm = true` in `csauto.toml`, each submission goes
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

In the **Log Tail** tab: select the case and file (`listing` for the solver log),
set line count, enable auto-scroll.

CLI alternative:

```bash
# Main solver log
csauto tail RUNS --case case0001 --file listing -n 200

# Launch log (if process didn't start)
csauto tail RUNS --case case0001 --file csauto.stdout -n 50 --no-follow
```

### Inspect residuals

In the **Residuals Plot** tab: select case(s), choose physical quantities,
set start point, click **Plot**.

CLI alternative (export to CSV + SVG):

```bash
csauto residuals RUNS --case case0001 \
  --out residuals_case0001.csv --plot residuals_case0001.svg

# Merge multiple cases
csauto residuals RUNS --case case0001 --case case0002 \
  --out residuals_merged.csv
```

### Inspect performance metrics

In the **Timing Snapshot** tab: select a case, click **Load**.

CLI alternative:

```bash
csauto perf RUNS --case case0001
csauto perf RUNS --case case0001 --case case0005 --out perf.csv
```

### Scan for errors after a failure

In the **Recent Errors** tab: select the case, choose severity (`error`, `warn`,
`all`), click **Scan**.

---

## Restart

### Restart from checkpoint

In the **Status** panel:

1. Select the case(s) to restart
2. Click **Restart Selected**
3. Choose stop criterion:
   - `Iterations` + number of additional iterations
   - `Physical time` + additional physical time
4. Click **Submit**

csauto resolves the latest checkpoint automatically.

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

## Kill running cases

In the **Status** panel: select the running cases → **Kill Selected**.

API alternative:

```bash
curl -s -X POST "http://127.0.0.1:8000/api/kill_case" \
  -H "Content-Type: application/json" \
  -d '{"cases": ["case0001", "case0002"]}'
```

---

## Cleanup

In the **Status** panel: select cases → **Clean Selected**. The popup lets you
choose which RESU runs to keep or delete and whether to truncate heavy logs.

CLI alternative (always preview with `--dry-run` first):

```bash
csauto cleanup RUNS --prune-resu --keep-last 1 --max-log-mb 100 --dry-run
csauto cleanup RUNS --prune-resu --keep-last 1 --max-log-mb 100 --clear-cid
```

Remove all RESU history (disk space emergency):

```bash
csauto cleanup RUNS --prune-resu --keep-last 0
```

---

## Comparing cases

In the **Multi-Run Compare** tab:

1. Select cases to compare
2. Choose a base case (reference)
3. Choose file kind (`setup.xml`, `doe_row.csv`, `listing`, ...)
4. Optionally add a regex filter
5. Click **Compare**

---

## Marking convergence

Right-click a `DONE` or `FAILED` row in the **Status** panel:
- **Mark Converged**
- **Mark Not Converged**
- **Clear** (remove label)

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
