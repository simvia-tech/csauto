# Example: codeaster-cube

A complete campaign showcasing the main csauto features with code_aster.

## What this example does

Simulates a cube under triaxial traction. The DOE combines:

- **2 values of imposed displacement along x, y or z**: 1.0e-3 and 0.0
- **2 meshes**: `mesh1.med` and `mesh2.med`
- **1 additional case** with an invalid imposed displacement, which fails on purpose

This produces **9 cases**. The template demonstrates:
- **value placeholders**: `{depl_x}`, `{depl_y}`, `{depl_z}` in the `comm` file and `{mesh_name}` in the `export` file
- **a condition in the command file**: a Python `if` on the DOE values, which stops the invalid case with an error

## Files

```
codeaster-cube/
├── csauto.toml                    ← solver and runtime configuration (Docker)
├── doe.csv                        ← 9 cases
├── TEMPLATE/
│   ├── study.comm                 ← a code_aster command file
│   └── study.export               ← a code_aster export file
└── MESH/
    ├── create_mesh.py             ← a Salome script to get the MED files
    ├── mesh1.med                  ← first mesh variant
    └── mesh2.med                  ← second mesh variant
```

`MESH` is shared by every case: `csauto prepare` places it next to the cases
(`RUNS/MESH`), so `study.export` references a mesh as `../MESH/{mesh_name}`.
Results are written under `RESU/` (`RESU/myresults.rmed`), the folder csauto
treats as the case's run: its size shows in the status table, and Clean deletes
it when asked to keep no run.

## Prerequisites

- csauto installed (`csauto --version` works)
- A working code_aster runtime: Docker (the default image is
  `simvia/code_aster:17.4.0`), a Singularity image, or `run_aster` installed natively

## 1. Configure your runtime

A `csauto.toml` is already provided with a Docker configuration. Edit it to
match your environment, or replace it entirely. Keep `solver = "code_aster"`:
without it, csauto expects a code_saturne case. Examples:

**Docker (provided):**
```toml
solver = "code_aster"
runtime = "docker"
docker_image = "simvia/code_aster:17.4.0"   # the default for code_aster

host = "127.0.0.1"
port = 8000

[api]
token = "your-secret-token"
```

**Singularity image:**
```toml
solver = "code_aster"
runtime = "singularity"
singularity_image = "/path/to/code_aster_17.4.0.sif"

host = "127.0.0.1"
port = 8000

[api]
token = "your-secret-token"
```

**Native `run_aster`:**
```toml
solver = "code_aster"
runtime = "native"
saturne_bin = "/path/to/run_aster"   # optional when run_aster is in PATH

host = "127.0.0.1"
port = 8000

[api]
token = "your-secret-token"
```

## 2. Generate the case

```bash
cd examples/codeaster-cube
csauto prepare doe.csv TEMPLATE RUNS
```

Expected output:
```
RUNS/
├── registry.json
├── campaign.json          ← records the code_aster solver
├── MESH/                  ← link to the example's MESH folder (mesh_mode = "symlink")
├── case0001/
│   ├── study.comm         ← a copy of the code_aster command file with the input values
│   ├── study.export       ← a copy of the code_aster export file with the input values
│   └── doe_row.csv
├── case0002/
│   └── ...
└── ...                    ← 9 cases total
```

## 3. Validate

```bash
csauto doctor RUNS
```

All checks should print `[OK]`. Fix any `[FAIL]` before continuing.

## 4. Open the web UI

```bash
csauto serve RUNS --host 127.0.0.1 --port 8000
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000).

## 5. Launch from the UI

In the **Status** panel:
1. Select one or more cases (`Ctrl+A` to select all)
2. Click **Run**
3. Set **n** = 1 (MPI rank), **nt** = 1 (thread)
4. Click **Run** in the popup

csauto writes **n** and **nt** into `.csauto.export` (as `mpi_nbcpu` and
`ncpus`), a copy of the case's `study.export` that `run_aster` runs; the case's
own export is never modified.

Cases move to `RUNNING`. Once complete they show `DONE`, except `case0001`,
whose invalid displacement stops the command file: it shows `FAILED`, with
`DIAGNOSTIC JOB : <F>_ABNORMAL_ABORT` in its `csauto.stdout`.

## Alternative: launch from the terminal

```bash
csauto run RUNS --n 1 --nt 1
```

## Explore the results

From the web UI:
- **Log Tail**: `csauto.stdout` (the output of `run_aster`, which ends with the
  `DIAGNOSTIC JOB` verdict), the `output.mess` message file, and `csauto.stderr`
- **Recent Errors**: code_aster alarms (`<A>`) and errors (`<F>`, `<E>`, `<S>`)
  from `csauto.stdout` and `csauto.stderr`
- **Compare**: the export file or `doe_row.csv`, side by side across cases

Residuals, probes and timings are not available for code_aster. The results
themselves are in `RUNS/caseXXXX/RESU/myresults.rmed`.
