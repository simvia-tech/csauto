# Run Lifecycle

A case moves through five states from creation to completion.

---

## State diagram

```
csauto prepare
      │
      ▼
  PREPARED ──────► [run / Run]
                          │
                          ▼
                       PENDING   (next in line for a launch slot)
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
                [run / Run / Restart]
                          │
                          ▼
                PENDING ──► RUNNING ──► ...
```

---

## State descriptions

### `PREPARED`

The case directory has been created by `csauto prepare` and is ready to launch.
No simulation has started yet. A finished case also returns to `PREPARED` when
the dashboard's Clean deletes all its runs.

Relevant files:
- `RUNS/caseXXXX/DATA/setup.xml`: rendered from template (code_saturne; the
  `.export` and `.comm` files for code_aster)
- `RUNS/caseXXXX/doe_row.csv`: DOE values used for this case
- `RUNS/registry.json`: registry entry with `status: PREPARED`
- `RUNS/campaign.json`: the solver of the campaign

### `PENDING`

The case is next in line and waits for a free launch slot: fewer running cases
in the campaign than Max Parallel (`--max-parallel` for `csauto run`). The other
cases of the batch keep their status until their turn. If the solver refuses to
launch it (a code_saturne restart without checkpoint, say), the case goes back
to the status it had, and the other cases of the batch still launch.

### `RUNNING`

A simulation is active: either a local background process or a Slurm job.
Every runtime starts the solver inside the case folder.

Relevant files:
- `RUNS/caseXXXX/csauto.stdout`: output of the run command
- `RUNS/caseXXXX/csauto.stderr`: errors of the run command
- `RUNS/caseXXXX/.csauto.cid`: Docker container ID (Docker runtime only)
- `RUNS/caseXXXX/.csauto.jobid`: Slurm job ID (only when Slurm is active)
- `RUNS/caseXXXX/.csauto.exitcode`: exit status of the run command, written
  when it ends (local runs and `sbatch --wrap` jobs)
- `RUNS/caseXXXX/RESU/<timestamp>/run_solver.log`: code_saturne's main log
  (`listing` on older versions)

Status is refreshed by checking whether the run is still alive:
- Local runs (native, docker, singularity): the PID stored in `registry.json`
  (a PID that another process took over, after a reboot for instance, does not count)
- Slurm: `squeue` reports the job ID as active

A case stays `RUNNING` until its process or job is gone, even after its log
prints a verdict: the solver may still be writing results. Only when `squeue`
cannot tell does a verdict (or a recorded exit status) end the run early.

### `DONE`

The run ended and the solver reported success: code_saturne wrote a normal
completion message to its log, code_aster printed `DIAGNOSTIC JOB : OK` (or
`<A>_ALARM`) in `csauto.stdout`. When the logs give no verdict, an exit status
of 0 in `.csauto.exitcode` means `DONE`.

Relevant files (code_saturne, in `RESU/<timestamp>/`):
- `residuals.csv`: solver residuals per iteration
- `performance.log`: timing and resource metrics
- `checkpoint/`: restart data (if code_saturne was configured to write checkpoints)
- `monitoring/*.csv`: probe output files (if configured)
- `profiles/*.csv`: profile output files (if configured)

code_aster writes its results straight into `RESU/`.

### `FAILED`

The run ended abnormally: the solver reported a failure (code_saturne: an error
in its log or a failure marker in its run folder; code_aster: any other
`DIAGNOSTIC JOB` verdict), or, with no verdict, the run command exited with
another status or recorded none (a cancelled Slurm job, say).

---

## Convergence labels

For `DONE` and `FAILED` cases, you can set a user-level convergence tag:
- **Converged**: solution is considered physically converged
- **Not converged**: run finished but solution is not converged
- **Empty**: no label set (default)

Set from UI context menu (right-click) or via the API (`POST /api/case_convergence`).

---

## RESU directory structure

With code_saturne, each run attempt creates a new timestamped directory:

```
RUNS/case0001/RESU/
├── 20260308-1413/      ← first run
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
the previous one. The Residuals Plot always includes every run of the case; set
**Start from** to **Zero** to see the full history from iteration 0.

code_aster writes everything into `RESU/` itself, so a case holds one run and a
new run replaces it.

While a code_saturne case is `RUNNING`, `csauto control` (CLI) and the Control
menu (web UI) drop a `control_file` into the active `RESU/<timestamp>/`
directory. code_saturne polls this file once per time step, applies the
directive, and deletes it, so it's a transient handshake file, not part of the
persisted RESU output.

---

## Cleaning runs

Clean (dashboard) and `csauto cleanup --prune-resu` (CLI) delete only the run
folders the solver reports: each `RESU/<timestamp>/` for code_saturne, `RESU`
itself for code_aster. Clean also cuts the solver's logs over 50 MB down to
their last 50 MB and removes `.csauto.cid` (`csauto cleanup` does so with
`--max-log-mb` and `--clear-cid`). Neither touches `RUNNING` or `PENDING`
cases. The dashboard's Clean returns a `DONE` or `FAILED` case to `PREPARED`
only when it leaves the case without any run; `csauto cleanup` leaves statuses
as they are.

---

## Slurm specifics

- Job ID is stored in `.csauto.jobid` and in `registry.json`
- `sbatch --wrap` jobs request `--ntasks` from `n` and `--cpus-per-task` from
  `nt`; code_saturne with the Singularity runtime submits its own batch script,
  `.csauto.slurm.sh`, with the same requests
- Status remains `RUNNING` while `squeue` reports the job as active
- When the job disappears from `squeue`, csauto reads the solver's verdict in
  its logs, else the exit status in `.csauto.exitcode`, to decide between
  `DONE` and `FAILED`
- `Kill` cancels the job with `scancel` (it also tries `qdel` and `bkill` when they are installed)

For a Docker run, `Kill` stops the case's container, found from `.csauto.cid`
or by its `csauto.case_id` and `csauto.campaign` labels, so containers of other
campaigns are never touched.

---

## Per-case history

Every launch, refused launch, kill, control action and dashboard action (notes,
convergence labels, cleanups, file edits...) is appended to:

```
RUNS/caseXXXX/.csauto.history.jsonl
```

Each line is a JSON object with `ts`, `action`, and relevant metadata.
