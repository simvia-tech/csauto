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

# No Slurm; csauto run launches at most 2 cases at a time
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

# csauto run keeps at most 20 jobs submitted (queued or running) at a time
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

For code_saturne with `use_slurm = true`, `csauto` submits a dedicated batch
script for the Singularity runtime (`.csauto.slurm.sh` in the case folder). The
job follows the same pattern as a manual HPC launch:
`code_saturne run --stage --initialize`, then `srun ./cs_solver --mpi`, then
`code_saturne run --finalize`. Other runs are submitted with `sbatch --wrap`.

### Docker container

```toml
runtime = "docker"
docker_image = "simvia/code_saturne"   # optional: the solver's own image by default

use_slurm = false
max_parallel = 2

host = "127.0.0.1"
port = 8000
```

Containers mount the campaign folder at `/csauto` and start the solver inside the
case folder (`docker run --rm --entrypoint ...`), so the image does not need
the solver as its entrypoint.

### code_aster

```toml
solver = "code_aster"
runtime = "docker"   # docker_image defaults to simvia/code_aster:17.4.0

max_parallel = 2
```

For the `native` runtime, `run_aster` must be in `PATH`, or `saturne_bin` must
point to it.

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
| `solver` | `code_saturne` | The campaign's solver: `code_saturne`, `code_aster`, or `stub` (a fake solver for tests). `csauto prepare` records it in `RUNS/campaign.json` (see [architecture.md](./architecture.md#solver-adapter-boundary)) |
| `runtime` | `auto` | Execution backend: `auto`, `native`, `docker`, or `singularity` |
| `saturne_bin` | (auto-detected) | Path to the native solver executable (`code_saturne`, or `run_aster` for code_aster) for `native` runtime |
| `docker_image` | (the solver's own image) | Docker image name for `docker` runtime; defaults to `simvia/code_saturne` for code_saturne, `simvia/code_aster:17.4.0` for code_aster. csauto starts the solver with `--entrypoint`, so in a custom image the solver must be on `PATH` and its environment set through `ENV` |
| `singularity_image` | (none) | Path or URI to `.sif` image for `singularity` runtime |
| `singularity_bin` | (auto-detected) | Path to `apptainer` or `singularity` binary |
| `use_slurm` | (auto-detected) | `true` to force Slurm submission, `false` to force local |
| `mpi_exec_options` | (none) | MPI options for Slurm jobs, passed to code_saturne as `CS_MPIEXEC_OPTIONS` (code_aster ignores it) |
| `max_parallel` | `1` | Default of `csauto run --max-parallel`. The web UI does not read it: set Max Parallel in the Run or Restart dialog (left empty, every selected case starts at once) |
| `mesh_mode` | `symlink` | How `prepare` places the solver's shared dirs (`MESH`, plus `POST` for code_saturne) into `RUNS/`: `symlink` or `copy` (see [concepts.md](./concepts.md#shared-meshpost-directories)) |
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

**Solver**: commands on an existing campaign use the solver recorded in
`RUNS/campaign.json` by `prepare`, whatever directory they run from; a different
`solver` in `csauto.toml` is ignored with a warning. `prepare` refuses to add
cases to a folder prepared for another solver.

**Slurm detection order**:
1. `use_slurm` in `csauto.toml`: if set, this is authoritative
2. `CSAUTO_USE_SLURM` environment variable
3. Auto-detection: checks if `sbatch` is in `PATH` and Slurm environment variables are set

**API token**: `serve --token` overrides `[api].token` from config.

---

## Auto runtime resolution

When `runtime = "auto"`, csauto tries backends in this order, among the
runtimes the solver supports (code_saturne and code_aster support all three):

1. Explicit `saturne_bin` set → use `native`
2. Explicit `singularity_image` set → use `singularity`
3. `docker` command available → use `docker`
4. The solver's executable (`code_saturne`, `run_aster`) in `PATH` → use `native`
5. None found → error

Asking explicitly for a runtime the solver does not support is refused before
anything starts.

---

## `mpi_exec_options` and Slurm

When Slurm submission is active and `mpi_exec_options` is set, code_saturne
receives the value as:

```bash
CS_MPIEXEC_OPTIONS="<mpi_exec_options>" <code_saturne run command>
```

With a container runtime, the variable is set inside the container instead. If
not set, no `CS_MPIEXEC_OPTIONS` is injected. code_aster ignores this option.
