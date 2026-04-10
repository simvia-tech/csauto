# Troubleshooting

This page maps error messages to their causes and fixes, and covers common
diagnostic situations.

**First reflex**: run `csauto doctor RUNS` — it checks your runtime,
directory structure, and environment in one command.

---

## Error messages and fixes

### `Variables without matching DOE columns: ...`

**Cause**: a placeholder or IF condition variable in the template has no
corresponding column in `doe.csv`.

**Fix**:
1. Add the missing column(s) to the `doe.csv` header
2. Re-run `csauto prepare`

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

### `No checkpoint found for caseXXXX`

**Cause**: a restart was requested but no RESU run contains a `checkpoint/`
directory.

**Fix**:
1. Check that `RESU/<run_id>/checkpoint/` exists and is non-empty
2. If no checkpoint exists, run a fresh simulation first — code_saturne must write
   at least one checkpoint before a restart is possible

---

### `The requested number of time steps ... nt_max ... has to be greater than nt_prev`

**Cause**: the restart target iteration is not strictly greater than the number of
iterations already completed.

**Fix**: increase the additional iteration count so the absolute target exceeds the
checkpoint iteration.

---

### `Invalid restart_mode (must be iterations or physical_time)`

**Cause**: invalid `restart_mode` value.

**Fix**: set `restart_mode` to exactly `iterations` or `physical_time`.

---

### `restart_value must be an integer > 0 for restart_mode=iterations`

**Cause**: the restart increment is not a valid positive integer.

**Fix**: provide a strictly positive integer (e.g., `100`).

---

### `restart_value must be > 0 for restart_mode=physical_time`

**Cause**: the physical time increment is not a valid positive number.

**Fix**: provide a strictly positive number (e.g., `0.5`).

---

### `n, nt, and max_parallel must be integers > 0`

**Cause**: one of the run parameters is zero, negative, or not an integer.

**Fix**: provide strictly positive integers for all three values.

---

### `Public host requires api.token (csauto.toml) or --token.`

**Cause**: `serve` was started with a non-localhost bind address but no API token
is configured.

**Fix**: set `[api].token` in `csauto.toml` or pass `--token` on the command line.

---

### `DISPLAY not set (GUI unavailable)`

**Cause**: a GUI launch (`Open GUI` from the UI) was requested on a headless server
without an X11 display.

**Fix**: configure X11 forwarding or avoid GUI launch on headless nodes.

---

### `Unauthorized` / HTTP 401

**Cause**: the API token is missing or invalid.

**Fix**:
- In the UI: click `Token` and enter the correct token
- In API calls: send `X-CSAUTO-TOKEN: <token>` or `Authorization: Bearer <token>`

---

## Diagnostic situations

### Status stays `RUNNING` indefinitely

1. Check `RUNS/caseXXXX/csauto.stdout` for launch errors
2. Check `RUNS/caseXXXX/csauto.stderr` for process errors
3. On Slurm: `squeue -u "$USER"` — verify the job is still queued or running
4. Re-run `csauto status RUNS` to force a registry refresh
5. If the process or job is no longer alive, the status should update to `DONE` or
   `FAILED` on the next refresh

---

### Case finished but status shows `RUNNING`

csauto detects completion from process/job status combined with log signatures.
Force a refresh:

```bash
csauto status RUNS
```

If it still doesn't update, check `listing` or `run_solver.log` for a normal
completion message.

---

### Runtime not found (docker / code_saturne / apptainer)

1. Run `csauto doctor RUNS` — it will identify the exact failing check
2. Verify the binary is in `PATH` or set the explicit path in `csauto.toml`:
   - `saturne_bin = "/path/to/code_saturne"`
   - `singularity_bin = "/path/to/apptainer"`
   - `singularity_image = "/path/to/image.sif"`
   - `docker_image = "image:tag"` (and confirm Docker daemon is running)

---

### Missing residuals, probes, or profiles in the UI

- **Residuals**: check `RESU/<run_id>/residuals.csv` — if missing, csauto falls
  back to parsing `run_solver.log`
- **Probes**: check `RESU/<run_id>/monitoring/*.csv`
- **Profiles**: check `RESU/<run_id>/profiles/*.csv`

If you restarted a case and data from the first run seems missing, use
`Start from = 0` in the Residuals Plot to include all RESU directories.

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

This prints what would be deleted without actually deleting anything.

---

### Pre-check failed

```bash
csauto doctor RUNS
```

Fix every `[FAIL]` line before launching. Common causes:
- Runtime binary not found
- Image file not accessible
- `RUNS/` directory not writable
- No `case*` directories found in `RUNS/`
