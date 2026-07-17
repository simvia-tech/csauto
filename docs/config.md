# Configuration

csauto reads its configuration from a TOML file and environment variables.

## Config file lookup order

csauto finds `csauto.toml` in this order (first match wins):

1. `--config /path/to/csauto.toml` (CLI flag)
2. `CSAUTO_CONFIG` environment variable
3. `./csauto.toml` (current working directory)
4. `<repo_root>/csauto.toml` (repository root, i.e. parent of the `csauto/` package)

If no file is found, all default values are used.

---

## Complete annotated configurations

### Local workstation (native)

```toml
# Use the code_saturne binary installed on the machine
runtime = "native"
saturne_bin = "/opt/code_saturne/bin/code_saturne"

# No Slurm, run up to 2 cases at the same time
use_slurm = false
max_parallel = 2

# Web UI: accessible only from this machine
host = "127.0.0.1"
port = 8000
```

### HPC cluster with Slurm

```toml
# Native code_saturne on the compute nodes
runtime = "native"
saturne_bin = "/opt/code_saturne/bin/code_saturne"

# Submit each case as a Slurm job
use_slurm = true

# MPI options injected via CS_MPIEXEC_OPTIONS for each sbatch job
mpi_exec_options = "--mca btl vader,self,tcp --bind-to core"

# Allow up to 20 jobs in the queue simultaneously
max_parallel = 20

# Serve UI on login node, tunnel with: ssh -L 8000:127.0.0.1:8000 login-node
host = "127.0.0.1"
port = 8000
```

### Singularity / Apptainer container

```toml
runtime = "singularity"
singularity_image = "/opt/images/code_saturne.sif"
singularity_bin = "/usr/bin/apptainer"   # optional: auto-detected if in PATH

use_slurm = false
max_parallel = 2

host = "127.0.0.1"
port = 8000
```

With `use_slurm = true`, `csauto` submits a dedicated batch script for the
Singularity runtime. The job follows the same pattern as a manual HPC launch:
`code_saturne run --stage --initialize`, then `srun ./cs_solver --mpi`, then
`code_saturne run --finalize`.

### Docker container

```toml
runtime = "docker"
docker_image = "simvia/code_saturne"

use_slurm = false
max_parallel = 2

host = "127.0.0.1"
port = 8000
```

### Remote access with authentication

```toml
runtime = "native"
saturne_bin = "/opt/code_saturne/bin/code_saturne"
use_slurm = false
max_parallel = 4

# Expose UI to all interfaces
host = "0.0.0.0"
port = 8000

# Required when host is not 127.0.0.1 or localhost
[api]
token = "your-secret-token"
```

---

## All configuration keys

| Key | Default | Description |
|---|---|---|
| `solver` | `code_saturne` | Solver adapter used for command building, output parsing, and file conventions (`code_saturne`, or `stub` for testing; see [architecture.md](./architecture.md#solver-adapter-boundary)) |
| `runtime` | `auto` | Execution backend: `auto`, `native`, `docker`, or `singularity` |
| `saturne_bin` | (auto-detected) | Path to the `code_saturne` binary for `native` runtime |
| `docker_image` | `simvia/code_saturne` | Docker image name for `docker` runtime |
| `singularity_image` | (none) | Path or URI to `.sif` image for `singularity` runtime |
| `singularity_bin` | (auto-detected) | Path to `apptainer` or `singularity` binary |
| `use_slurm` | (auto-detected) | `true` to force Slurm submission, `false` to force local |
| `mpi_exec_options` | (none) | Options injected as `CS_MPIEXEC_OPTIONS` in Slurm jobs |
| `max_parallel` | `1` | Maximum simultaneous case launches |
| `mesh_mode` | `symlink` | How `prepare` places the shared `MESH`/`POST` dirs into `RUNS/`: `symlink` or `copy` (see [concepts.md](./concepts.md#shared-meshpost-directories)) |
| `host` | `127.0.0.1` | Bind address for `serve` |
| `port` | `8000` | Bind port for `serve` |
| `[api].token` | (none) | API authentication token |

---

## Environment variables

| Variable | Description |
|---|---|
| `CSAUTO_CONFIG` | Explicit path to `csauto.toml` |
| `CSAUTO_USE_SLURM` | Override Slurm mode: `1`/`true`/`yes`/`on` or `0`/`false`/`no`/`off` |
| `DISPLAY` | Required for GUI launch (`Open GUI` from the web UI) |

---

## Priority rules

**Runtime**: CLI flags (`--runtime`, `--saturne-bin`, etc.) override the TOML values.

**Slurm detection order**:
1. `use_slurm` in `csauto.toml` — if set, this is authoritative
2. `CSAUTO_USE_SLURM` environment variable
3. Auto-detection: checks if `sbatch` is in `PATH` and Slurm environment variables are set

**API token**: `serve --token` overrides `[api].token` from config.

---

## Auto runtime resolution

When `runtime = "auto"`, csauto tries backends in this order:

1. Explicit `saturne_bin` set → use `native`
2. Explicit `singularity_image` set → use `singularity`
3. `docker` command available → use `docker`
4. `code_saturne` in `PATH` → use `native`
5. None found → error

---

## `mpi_exec_options` and Slurm

When Slurm submission is active and `mpi_exec_options` is set, the value is
injected as:

```bash
CS_MPIEXEC_OPTIONS="<mpi_exec_options>" <code_saturne run command>
```

If not set, no `CS_MPIEXEC_OPTIONS` is injected.
