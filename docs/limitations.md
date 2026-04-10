# Limitations and Best Practices

## Log-based completion detection

`RUNNING -> DONE/FAILED` transitions rely on process/job status and log signatures.

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

`open_gui` requires valid `DISPLAY` and X11 access.
This is often unavailable on headless HPC nodes.

## Runtime feature differences

Not all features are available across all runtimes:

| Feature | native | singularity | docker |
|---|:---:|:---:|:---:|
| Slurm (`sbatch`) | ✓ | ✓ | ✗ |
| `mpi_exec_options` | ✓ (Slurm only) | ✓ (Slurm only) | ✗ |
| `open_gui` | ✓ | ✓ | ✓ |
| Container kill (`docker stop`) | ✗ | ✗ | ✓ |
| Container ID tracking (`.csauto.cid`) | ✗ | ✗ | ✓ |

**Docker is incompatible with Slurm.** Even with `use_slurm = true` in `csauto.toml`,
Slurm submission is silently disabled for the Docker runtime. The reason is that Docker
requires a root-owned daemon (`dockerd`) running on every compute node, which is not
available on HPC clusters. If you have a Docker image, convert it to a Singularity image
first:

```bash
apptainer pull code_saturne.sif docker://simvia/code_saturne
```

Then use `runtime = "singularity"` with `use_slurm = true`.

## Scheduler scope

Built-in scheduler integration targets Slurm (`sbatch`/`squeue`/`scancel`), with
opportunistic support for PBS/Torque (`qsub`/`qstat`/`qdel`) and LSF (`bsub`/`bjobs`/`bkill`)
for job kill operations. Without a supported scheduler, launches run as local background processes.

## Restart dependency

Restart requires valid checkpoint data under `RESU/<run_id>/checkpoint`.
Without checkpoints, restart cannot run.

## Public API exposure

When serving beyond localhost, always configure an API token.
