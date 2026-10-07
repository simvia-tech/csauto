# Limitations and Best Practices

## Solver features

The dashboard shows what the campaign's solver supports. Residuals, probes,
timings, restart, live control and the GUI are available for code_saturne.
code_aster campaigns get Status, Compare, Log Tail and Recent Errors; each
code_aster case holds one run, and a new run replaces its results.

## Completion detection

A run ends when its process or Slurm job is gone. Its status then comes from
the solver's verdict in its logs, or, when the logs give none, from the exit
status of its command (`.csauto.exitcode`: 0 means `DONE`).

Best practice: keep clean per-run logs and avoid mixing historical logs.

## Large RESU directories

For large DOE campaigns, RESU size grows quickly.

Best practice: schedule regular cleanup runs.

## Large UI tables

With many cases and DOE columns, status rendering is heavier.

Best practice:

- use saved views
- reduce visible DOE columns
- filter before bulk actions

## GUI launch constraints

`open_gui` (code_saturne) requires valid `DISPLAY` and X11 access.
This is often unavailable on headless HPC nodes.

## Runtime feature differences

Not all features are available across all runtimes:

| Feature | native | singularity | docker |
|---|:---:|:---:|:---:|
| Slurm (`sbatch`) | ✓ | ✓ | ✓ (needs Docker on the compute nodes) |
| `mpi_exec_options` | ✓ (Slurm only) | ✓ (Slurm only) | ✓ (Slurm only) |
| `open_gui` | ✓ | ✓ | ✓ |
| Container kill (`docker stop`) | ✗ | ✗ | ✓ |
| Container ID tracking (`.csauto.cid`) | ✗ | ✗ | ✓ |

**Docker rarely works with Slurm.** csauto submits Docker runs to Slurm like the
others, but each compute node then needs a running Docker daemon (`dockerd`),
which HPC clusters seldom provide. If you have a Docker image, convert it to a
Singularity image first:

```bash
apptainer pull code_saturne.sif docker://simvia/code_saturne
```

Then use `runtime = "singularity"` with `use_slurm = true`.

## Scheduler scope

Launching and status use Slurm (`sbatch`, `squeue`). Kill tries `scancel`, `qdel`
(PBS/Torque) and `bkill` (LSF), whichever is installed, on a job id taken from
the registry, `.csauto.jobid` or the case's logs. Without Slurm, launches run as
local background processes.

## Restart dependency

Restart (code_saturne) requires valid checkpoint data under `RESU/<run_id>/checkpoint`.
Without checkpoints, restart cannot run: the case keeps its status and the
other selected cases still launch.

## Public API exposure

When serving beyond localhost, always configure an API token.
