# Run Lifecycle

A case moves through four states from creation to completion.

---

## State diagram

```
csauto prepare
      │
      ▼
  PREPARED ──────► [run / Run Selected]
                          │
                          ▼
                       RUNNING
                          │
              ┌───────────┴───────────┐
              │                       │
              ▼                       ▼
            DONE                   FAILED
              │                       │
              └───────────┬───────────┘
                          │
                    [Restart Selected]
                          │
                          ▼
                       RUNNING
```

---

## State descriptions

### `PREPARED`

The case directory has been created by `csauto prepare` and is ready to launch.
No simulation has started yet.

Relevant files:
- `RUNS/caseXXXX/DATA/setup.xml` — rendered from template
- `RUNS/caseXXXX/doe_row.csv` — DOE values used for this case
- `RUNS/registry.json` — registry entry with `status: PREPARED`

### `RUNNING`

A simulation is active — either a local background process or a Slurm job.

Relevant files:
- `RUNS/caseXXXX/csauto.stdout` — csauto launch output
- `RUNS/caseXXXX/csauto.stderr` — csauto launch errors
- `RUNS/caseXXXX/.csauto.cid` — Docker container ID (Docker runtime only)
- `RUNS/caseXXXX/.csauto.jobid` — Slurm job ID (only when Slurm is active)
- `RUNS/caseXXXX/RESU/<timestamp>/listing` — main solver log
- `RUNS/caseXXXX/RESU/<timestamp>/run_solver.log` — solver launch log

Status is refreshed by reading process/job state and log signatures:
- Local (native/singularity): checks if the PID stored in `registry.json` is still alive
- Docker: checks the container ID stored in `.csauto.cid`
- Slurm: calls `squeue` to check if the job ID is still active

### `DONE`

The simulation completed successfully. Code_Saturne wrote a normal completion
signature to the log.

Relevant files (in `RESU/<timestamp>/`):
- `residuals.csv` — solver residuals per iteration
- `performance.log` — timing and resource metrics
- `checkpoint/` — restart data (if Code_Saturne was configured to write checkpoints)
- `monitoring/*.csv` — probe output files (if configured)
- `profiles/*.csv` — profile output files (if configured)

### `FAILED`

The simulation terminated abnormally: the process exited with an error, the Slurm
job was cancelled or failed, or an error signature was detected in the log.

---

## Convergence labels

For `DONE` and `FAILED` cases, you can set a user-level convergence tag:
- **Converged**: solution is considered physically converged
- **Not converged**: run finished but solution is not converged
- **Empty**: no label set (default)

Set from UI context menu (right-click) or via the API (`POST /api/case_convergence`).

---

## RESU directory structure

Each run attempt creates a new timestamped directory:

```
RUNS/case0001/RESU/
├── 20260308-1413/      ← first run
│   ├── listing
│   ├── run_solver.log
│   ├── residuals.csv
│   ├── performance.log
│   ├── checkpoint/
│   ├── monitoring/
│   └── profiles/
└── 20260309-0915/      ← restart run
    └── ...
```

When you restart a case, a new `RESU/<timestamp>/` directory is created alongside
the previous one. The Residuals Plot `Start from = 0` option displays data from
all RESU runs for the full history.

---

## Slurm specifics

- Job ID is stored in `.csauto.jobid` and in `registry.json`
- Status remains `RUNNING` while `squeue` reports the job as active
- When the job disappears from `squeue`, csauto inspects the log to determine
  if the outcome was `DONE` or `FAILED`
- `Kill Selected` calls the appropriate scheduler command: `scancel` (Slurm), `qdel` (PBS/Torque), or `bkill` (LSF)

---

## Per-case history

Every status change and action is appended to:

```
RUNS/caseXXXX/.csauto.history.jsonl
```

Each line is a JSON object with `ts`, `action`, and relevant metadata.
This file is readable with `GET /api/history?case=case0001`.
