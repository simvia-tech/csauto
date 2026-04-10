# Example: single-case

A complete campaign showcasing the main csauto features: parametric DOE,
conditional blocks, mesh selection, user source compilation, and the web UI. Use this to verify
that your csauto installation and code_saturne runtime are working end to end.

## What this example does

Simulates an internal flow over a stepped channel geometry with an immersed
cylinder (volume-penalization IBM). The DOE combines:

- **2 fluid densities** — 1.1 and 1.2 kg/m³
- **2 turbulence models** — Spalart-Allmaras and k-omega SST
- **2 meshes** — `mesh1.med` and `mesh2.med`
- **2 penalization coefficients** — K0 = 1000 and 2000

This produces **8 cases** (full factorial). The template demonstrates:
- **value placeholders** — `{density_value}`, `{ref_v}`, `{mesh}`, `{K0}`
- **conditional blocks** — `<!-- IF turbulence_model == "..." -->` to switch
  between Spalart-Allmaras and k-omega SST sections
- **user source compilation** — `TEMPLATE/SRC/cs_user_source_terms.cpp` with a
  `{K0}` placeholder, compiled by code_saturne at run time

## Files

```
single-case/
├── csauto.toml                    ← runtime configuration (Docker)
├── doe.csv                        ← 8 cases (2 densities × 2 models × 2 meshes)
├── TEMPLATE/
│   ├── DATA/
│   │   ├── setup.xml              ← template with placeholders and IF blocks
│   │   └── run.cfg
│   └── SRC/
│       └── cs_user_source_terms.cpp ← IBM penalization source (uses {K0})
├── MESH/
│   ├── mesh1.med                  ← first mesh variant
│   └── mesh2.med                  ← second mesh variant
└── POST/                          ← post-processing output directory
```

## Prerequisites

- csauto installed (`csauto --version` works)
- A working code_saturne runtime: native binary, Singularity image, or Docker

## 1. Configure your runtime

A `csauto.toml` is already provided with a Docker configuration. Edit it to
match your environment, or replace it entirely. Examples:

**Docker (provided):**
```toml
runtime = "docker"
docker_image = "simvia/code_saturne:latest"

host = "127.0.0.1"
port = 8000

[api]
token = "your-secret-token"
```

**Native binary:**
```toml
runtime = "native"
saturne_bin = "/path/to/code_saturne"

host = "127.0.0.1"
port = 8000

[api]
token = "your-secret-token"
```

**Singularity image:**
```toml
runtime = "singularity"
singularity_image = "/path/to/code_saturne.sif"

host = "127.0.0.1"
port = 8000

[api]
token = "your-secret-token"
```

## 2. Generate the case

```bash
cd examples/single-case
csauto prepare doe.csv TEMPLATE RUNS
```

Expected output:
```
RUNS/
├── registry.json
├── case0001/
│   ├── DATA/setup.xml     ← all placeholders substituted, IF blocks resolved
│   ├── SRC/               ← cs_user_source_terms.cpp with K0 substituted
│   ├── MESH/              ← selected mesh copied from single-case/MESH/
│   └── doe_row.csv
├── case0002/
│   └── ...
└── ...                    ← 8 cases total
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
- **Residuals Plot** — convergence curves
- **Log Tail** — live solver output (`listing` file)
- **Probes** — time series at the two probe points defined in the mesh
