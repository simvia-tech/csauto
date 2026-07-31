# Example: codeaster-cube

A complete campaign showcasing the main csauto features with code_aster.

## What this example does

Simulates a cube under trixial traction. The DOE combines:

- **2 values of imposed displacement along x, y or x** — 1.0e-3 and 0.0
- **2 meshes** — `mesh1.med` and `mesh2.med`
- **1 additional case** - with non valid values for imposed displacements

This produces **9 cases**. The template demonstrates:
- **value placeholders** — `{depl_x}`, `{depl_y}`, `{depl_z}`, `{mesh_name}` in both `export` and `comm`files
- **conditional way in command file** — with an `if` situation related to values of the DOE 

## Files

```
codeaster_cube/
├── csauto.toml                    ← runtime configuration (Docker)
├── doe.csv                        ← 9 cases
├── TEMPLATE/
│   ├── study.comm                 ← a code_aster command file
│   └── study.export               ← a code_aster export file
└── MESH/
    ├── create_mesh.py             ← a Salome script to get the MED files
    ├── mesh1.med                  ← first mesh variant
    └── mesh2.med                  ← second mesh variant
```

> **WARNING**: As the project currently stands, in an `export` file contained in `TEMPLATE`, the paths specified for the input meshes must be prefixed with the `MESH/` path, and the output files to be saved must be prefixed with the `RESU/` path.

## Prerequisites

- csauto installed (`csauto --version` works)
- A working code_aster runtime: Docker or Singularity image (native is coming)

## 1. Configure your runtime

A `csauto.toml` is already provided with a Docker configuration. Edit it to
match your environment, or replace it entirely. Examples:

**Docker (provided):**
```toml
runtime = "docker"
docker_image = "simvia/code_aster:17.4.0"

host = "127.0.0.1"
port = 8000

[api]
token = "your-secret-token"
```

**Singularity image:**
```toml
runtime = "singularity"
singularity_image = "/path/to/code_aster_17.4.0.sif"

host = "127.0.0.1"
port = 8000

[api]
token = "your-secret-token"
```

## 2. Generate the case

```bash
cd examples/codeaster_cube
csauto prepare doe.csv TEMPLATE RUNS
```

Expected output:
```
RUNS/
├── registry.json
├── case0001/
│   ├── MESH/              ← selected mesh copied from single-case/MESH/
│   ├── study.comm         ← a copy of the code_aster command file with the input values
│   ├── study.comm         ← a copy of the code_aster export file with the input values
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
2. Click **Run Selected**
3. Set **n** = 1 (MPI rank), **nt** = 1 (thread)
4. Click **Submit**

Cases move to `RUNNING`. Once complete they show `DONE`.

## Alternative: launch from the terminal

```bash
csauto run RUNS --n 1 --nt 1
```

## Explore the results

From the web UI:
- **Residuals Plot** — not in the current version `#TODO`
- **Probes** — not in the current version `#TODO`
- **Log Tail** — live solver output
