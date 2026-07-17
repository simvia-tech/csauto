# Core Concepts

This page explains the mental model behind csauto before you run any commands.
Reading it once will make everything else click.

## The problem csauto solves

When you run a code_saturne simulation study, you typically need to explore many
parameter combinations: different inlet velocities, turbulence models, mesh
refinements, boundary conditions. Setting up each case by hand — copying
directories, editing XML files, launching processes, tracking outcomes — does not
scale beyond a handful of cases.

csauto automates this entire loop:

```
parameter table (CSV)
        +
base template (your case files)
        │
        ▼
    [prepare]
        │
        ▼
  generated cases  ──►  [serve]  ──►  [run]
  RUNS/case0001/
  RUNS/case0002/
  RUNS/case0003/
  ...
```

One command generates all your cases. One command launches them all. One web UI
monitors everything.

---

## Key concepts

### DOE — Design of Experiments table

Your parameter space is described in a CSV file called the **DOE** (Design of
Experiments). Each row is one simulation case. Each column is one input parameter.

```csv
case_id,u_inlet,turbulence_model,use_radiation
case0001,12.0,k-epsilon,false
case0002,15.0,k-epsilon,false
case0003,12.0,k-omega,true
```

This is the single source of truth for what you want to simulate. csauto reads it
and generates one case directory per row.

The `case_id` column is optional. If absent, csauto auto-generates IDs:
`case0001`, `case0002`, etc.

### Template

The **template** is your reference case directory. It contains all the files
needed to run one code_saturne simulation: `setup.xml`, optionally `run.cfg`,
optionally user source files under `SRC/`.

Instead of hard-coded values, the template uses **placeholders**:

```xml
<!-- TEMPLATE/DATA/setup.xml -->
<inlet label="INLET">
  <velocity>{u_inlet}</velocity>
  <turbulence model="{turbulence_model}"/>
</inlet>

<!-- IF use_radiation=true -->
<radiative_transfer model="DOM"/>
<!-- ENDIF -->
```

When csauto generates cases, it replaces `{u_inlet}` with the DOE value for that
row, evaluates IF conditions, and writes the result into each case directory.

### Placeholder syntax

- `{column_name}` — replaced with the DOE value for that column
- `<!-- IF column_name=value -->...<!-- ENDIF -->` — block included only if condition is true
- `<!-- IF column_name!=value -->...<!-- ENDIF -->` — block included only if condition is false
- `<!-- IF column_name -->...<!-- ENDIF -->` — block included only if column value is truthy

Shell variables like `${HOME}` are left untouched.

### Case directory

A **case** (`caseXXXX`) is a fully resolved copy of your template for one DOE
row. After `csauto prepare`, each case contains:

```
RUNS/
├── registry.json          ← global state for all cases
├── case0001/
│   ├── DATA/
│   │   └── setup.xml      ← rendered from template + DOE row
│   ├── doe_row.csv        ← the DOE values used for this case
│   └── ...
├── case0002/
│   └── ...
```

The `doe_row.csv` file inside each case records exactly which parameter values
were used — useful for traceability.

### RUNS directory

The **RUNS directory** (you choose the name) is the root that contains all generated
cases plus the registry. It is the single argument most csauto commands need:

```bash
csauto prepare doe.csv TEMPLATE RUNS   # setup (terminal only)
csauto doctor RUNS                     # validate (terminal only)
csauto serve RUNS                      # start the primary FastAPI web UI ← your daily driver
```

Once `csauto serve RUNS` is running, you operate the campaign entirely from
the browser: launching, monitoring, restarting, cleaning.

### Registry

The **registry** (`RUNS/registry.json`) is csauto's persistent state. It stores
the current status, process IDs, Slurm job IDs, iteration count, and metadata for
every case. You never edit it manually — csauto maintains it automatically.

### Runtime

A **runtime** is the execution backend csauto uses to actually run code_saturne:

| Runtime | When to use |
|---|---|
| `native` | code_saturne binary installed directly on the machine |
| `docker` | code_saturne inside a Docker container |
| `singularity` | code_saturne inside a Singularity/Apptainer image (common on HPC) |
| `auto` | csauto detects the best available option |

The runtime is set in `csauto.toml` or via CLI flags.

### RESU directory

`RESU` is code_saturne's output directory, created automatically inside each case
when a run starts:

```
RUNS/case0001/RESU/
└── 20260308-1413/          ← one directory per run attempt
    ├── listing             ← main solver log
    ├── run_solver.log
    ├── residuals.csv
    ├── performance.log
    ├── checkpoint/         ← restart data
    ├── monitoring/         ← probe output files
    └── profiles/           ← profile output files
```

Each run attempt gets a timestamped directory. If you restart a case, a new
`RESU/<timestamp>/` directory is created alongside the previous ones.

### Checkpoint and restart

A **checkpoint** is the restart data saved by code_saturne at the end of (or
during) a run. It lives at `RESU/<run_id>/checkpoint/`.

csauto resolves the latest checkpoint automatically. From the web UI, select
the case, click **Restart Selected**, choose a stop criterion, and submit —
no need to know the checkpoint path.

---

## Case lifecycle

A case moves through these states:

```
[prepare]
    │
    ▼
PREPARED ──► [run] ──► RUNNING ──► DONE
                                    │
                                    └──► FAILED
```

- **PREPARED**: case directory exists, never launched
- **RUNNING**: active process or Slurm job
- **DONE**: completed successfully (log signature detected)
- **FAILED**: abnormal termination or error detected

For finished cases, you can set a convergence label (`Converged` /
`Not converged`) from the UI context menu.

---

## Shared MESH/POST directories

`prepare` places one `MESH/` and one `POST/` folder directly under `RUNS/` (not
per-case) so every case can reference the mesh with a relative `../MESH` path.
How that folder gets there is controlled by `mesh_mode` in `csauto.toml` (or
`--mesh-mode` on `csauto prepare`):

- `symlink` (default) — `RUNS/MESH` and `RUNS/POST` become symlinks to the
  original directories instead of copies, so large meshes (`.med` files can be
  gigabytes) are never duplicated per study. Container runtimes handle this
  transparently: `csauto run` bind-mounts each symlink target into the
  container at the same absolute host path (`MESH` read-only, `POST`
  writable), so the symlinks stored in `RUNS/` resolve identically on both
  sides. A broken symlink (target deleted or moved) is still detected up front
  and reported before launching.
- `copy` — the template's sibling `MESH/`/`POST/` dirs are physically copied
  into `RUNS/`. Uses more disk, but makes `RUNS/` fully self-contained — useful
  when the runs directory is moved or archived independently of the study.
- On Windows, creating a symlink may require developer mode or elevated
  privileges; `prepare` falls back to copying (with a warning) if the symlink
  cannot be created.

---

## Slurm mode

On HPC clusters, csauto submits each case as a Slurm job via `sbatch` instead
of launching a local background process. The job ID is tracked in the registry.
Status refreshes use `squeue` to detect whether the job is still running.

Local and Slurm modes are configured in `csauto.toml` — see [config.md](./config.md).

---

## Project layout recommendation

```
my-campaign/
├── csauto.toml        ← configuration
├── doe.csv            ← parameter table
├── TEMPLATE/          ← base case (your template)
│   └── DATA/
│       └── setup.xml
└── RUNS/              ← generated cases (created by prepare)
    ├── registry.json
    ├── case0001/
    └── case0002/
```

Keep `RUNS/` out of version control (add it to `.gitignore`). Track
`doe.csv` and `TEMPLATE/` — they are your actual inputs.
