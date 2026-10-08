# Troubleshooting

This page maps error messages to their causes and fixes, and covers common
diagnostic situations.

**First reflex**: run `csauto doctor RUNS`: it checks your runtime,
directory structure, and environment in one command.

---

## Error messages and fixes

### `Variables without matching DOE columns: ...`

**Cause**: a placeholder or IF condition variable in the template has no
corresponding column in `doe.csv`. The message names the file that uses it.

**Fix**:
1. Add the missing column(s) to the `doe.csv` header
2. Re-run `csauto prepare`

If the braces belong to the file's own language (a Python f-string or set in a
code_aster `.comm` file, C/C++ code), write `\{name}` to keep a literal `{name}`
instead (see [doe-format.md](./doe-format.md#placeholder-syntax)).

---

### `Missing placeholder values for caseXXXX: ...`

**Cause**: an active placeholder (`{variable}`) has an empty value in the DOE row
for that case.

**Fix**:
- Fill the empty cell(s) in `doe.csv`
- Or wrap the placeholder in an `<!-- IF -->` block so it is only active when needed

---

### `setup.xml not found in template: ...`

**Cause**: the template directory has no detectable `setup.xml`.

**Fix**: place `setup.xml` in `TEMPLATE/` or `TEMPLATE/DATA/`.

---

### `.export file not found in ...` / `Several .export files in ...: keep only one.`

**Cause**: a code_aster template needs exactly one `.export` file at its root.

**Fix**: keep a single `*.export` file directly in `TEMPLATE/`.

---

### `RUNS holds a code_saturne campaign; csauto.toml selects code_aster.`

**Cause**: `csauto prepare` was asked to add cases for one solver to a folder
prepared for another (recorded in `RUNS/campaign.json`).

**Fix**: prepare into a new folder, or set `solver` in `csauto.toml` to the
campaign's solver.

---

### `Warning: RUNS was prepared for code_saturne: ignoring solver, docker_image, saturne_bin and singularity_image from ...`

**Cause**: the `csauto.toml` found for this command selects another solver than
the one the campaign was prepared for. csauto uses the campaign's solver, with
that solver's default image and executable: the image and paths in that file
belong to the other solver.

**Fix**: nothing is needed. To silence it, run the command from the campaign's
own directory or fix `solver` in that `csauto.toml`. To use your own image for
this campaign, pass `--docker-image` (or `--saturne-bin`, `--singularity-image`)
on the command line, or set it in a `csauto.toml` that selects the campaign's
solver.

---

### `RUNS/campaign.json names an unknown solver: 'xyz'`

**Cause**: the campaign was prepared with a solver this csauto installation
does not have (a newer csauto, say), or `campaign.json` was edited.

**Fix**: use the csauto that prepared the campaign, or correct the solver name
in `RUNS/campaign.json` (`code_saturne` or `code_aster`).

---

### `No checkpoint found for caseXXXX`

**Cause**: a restart was requested but no RESU run contains a `checkpoint/`
directory. The case keeps its status; the other selected cases still launch.

**Fix**:
1. Check that `RESU/<run_id>/checkpoint/` exists and is non-empty
2. If no checkpoint exists, run a fresh simulation first: code_saturne must write
   at least one checkpoint before a restart is possible

---

### `Run 20260101-1000 of caseXXXX has no checkpoint to restart from`

**Cause**: the run chosen in the Restart dialog's **Restart from** (or passed
as `restart_path`) holds no checkpoint, usually because it failed before
writing one. The case keeps its status; the other selected cases still launch.

**Fix**: pick another run, or leave **Restart from** on its default, the most
recent run that has a checkpoint.

---

### `The requested number of time steps ... nt_max ... has to be greater than nt_prev`

**Cause**: the restart target iteration is not strictly greater than the number of
iterations already completed.

**Fix**: increase the additional iteration count so the absolute target exceeds the
checkpoint iteration.

---

### `Unknown restart_mode '...' (expected: iterations, physical_time)`

**Cause**: the restart mode is not one the solver offers. The old names
`iteration`, `iter`, `time` and `tmax` are no longer accepted.

**Fix**: use one of the names the message lists (`/api/app_config` lists them
as `restart_modes`).

---

### `iterations needs a whole number (Iterations)` / `iterations needs a positive value (Iterations)`

**Cause**: the restart increment is not a valid positive integer.

**Fix**: provide a strictly positive integer (e.g., `100`).

---

### `physical_time needs a positive value (Time (s))`

**Cause**: the physical time increment is not a valid positive number.

**Fix**: provide a strictly positive number (e.g., `0.5`).

---

### `csauto control: error: the following arguments are required: action` / `csauto: error: unrecognized arguments: --extend`

**Cause**: the action is a word after the case, not a flag: the `--stop`,
`--extend N`, `--checkpoint` and `--flush` flags are gone.

**Fix**: `csauto control RUNS case0007 stop`, or `csauto control RUNS case0007 extend 500`.

---

### `Invalid control action: '...' (expected one of: stop, extend, checkpoint, flush)`

**Cause**: `csauto control` was given an action the solver does not offer.

**Fix**: use one of the listed actions; `csauto doctor RUNS` lists them with
the value each one takes.

---

### `n, nt, and max_parallel must be integers > 0`

**Cause**: `n`, `nt` or `max_parallel` sent to the API (`POST /api/run_case`)
is zero or negative (non-integers are refused with `422`). `csauto run` prints
`nprocs and nt must be > 0` or `max_parallel must be > 0` instead.

**Fix**: provide strictly positive integers for all three values.

---

### `Public host requires api.token (csauto.toml) or --token.`

**Cause**: `serve` was started with a non-localhost bind address but no API token
is configured.

**Fix**: set `[api].token` in `csauto.toml` or pass `--token` on the command line.

---

### `DISPLAY not set (GUI unavailable)` / `DISPLAY not set on server`

**Cause**: `csauto doctor` warns that no X11 display is set; **Open GUI**
(code_saturne) then fails with `DISPLAY not set on server`.

**Fix**: configure X11 forwarding or avoid GUI launch on headless nodes.

---

### `Unauthorized` / HTTP 401

**Cause**: the API token is missing or invalid.

**Fix**:
- In the UI: open Settings (gear icon) and enter the token under **API token**
- In API calls: send `X-CSAUTO-TOKEN: <token>` or `Authorization: Bearer <token>`

---

## Diagnostic situations

### Status stays `RUNNING` indefinitely

1. Check `RUNS/caseXXXX/csauto.stdout` for launch errors
2. Check `RUNS/caseXXXX/csauto.stderr` for process errors
3. On Slurm: `squeue -u "$USER"`, to verify the job is still queued or running
4. Re-run `csauto status RUNS` to force a registry refresh
5. If the process or job is no longer alive, the status should update to `DONE` or
   `FAILED` on the next refresh

---

### Case finished but status shows `RUNNING`

A case stays `RUNNING` while its process or Slurm job is alive, even after its
log prints the end of the calculation: the solver may still be writing results.
Force a refresh:

```bash
csauto status RUNS
```

If it still doesn't update, check whether the run is still alive (`ps`,
`docker ps`, or `squeue`). Once it is gone, the status follows the solver's
verdict in its logs (`run_solver.log` for code_saturne, `csauto.stdout` for
code_aster), or the exit status in `.csauto.exitcode`.

---

### Runtime not found (docker / code_saturne / run_aster / apptainer)

1. Run `csauto doctor RUNS`: it will identify the exact failing check
2. Verify the binary is in `PATH` or set the explicit path in `csauto.toml`:
   - `saturne_bin = "/path/to/code_saturne"` (or to `run_aster` for code_aster)
   - `singularity_bin = "/path/to/apptainer"`
   - `singularity_image = "/path/to/image.sif"`
   - `docker_image = "image:tag"` (optional, the solver's own image by default;
     confirm the Docker daemon is running)

---

### Missing residuals, probes, or profiles in the UI

These panels exist for code_saturne only.

- **Residuals**: check `RESU/<run_id>/residuals.csv`; if missing, csauto falls
  back to parsing `run_solver.log`
- **Probes**: check `RESU/<run_id>/monitoring/*.csv`
- **Profiles**: check `RESU/<run_id>/profiles/*.csv`

The Residuals Plot always includes every run of the case: after a restart, set
**Start from** to **Zero** to see the history from iteration 0.

---

### UI not reachable from another machine

Use an SSH tunnel:

```bash
ssh -L 8000:127.0.0.1:8000 your-server
```

Then open [http://127.0.0.1:8000](http://127.0.0.1:8000) locally.

---

### Cleanup deleted too much

Always test with `--dry-run` first:

```bash
csauto cleanup RUNS --prune-resu --keep-last 1 --max-log-mb 100 --dry-run
```

This prints how many run folders and logs would be affected, without deleting
anything. `--prune-resu` only deletes the run folders the solver reports (each
`RESU/<run>` for code_saturne, `RESU` itself for code_aster), and cleanup skips
`RUNNING` and `PENDING` cases.

---

### Pre-check failed

```bash
csauto doctor RUNS
```

Fix every `[FAIL]` line before launching. Common causes:
- Runtime binary not found
- Image file not accessible
- `RUNS/` directory not writable
- No case found in `RUNS/` (run `csauto prepare` first)
- The solver's setup file missing from some cases
