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
solver_bin = "/opt/code_saturne/bin/code_saturne"

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
solver_bin = "/opt/code_saturne/bin/code_saturne"

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
case folder (`docker run --rm ...`). Any image works:

- an image whose ENTRYPOINT is the solver, or a script that sets up the
  environment and starts it (modules, spack, conda, a switch to another user),
  gets only the solver's arguments, as before;
- an image whose ENTRYPOINT runs the command it is given (`tini --`,
  `exec "$@"` scripts) gets the full solver command;
- an image without ENTRYPOINT gets the solver as `--entrypoint`, so it must be
  on the image's `PATH`.

csauto tells the first two apart by starting the image once with `true` (one
short container per image, the first time a csauto process launches it).

### code_aster

```toml
solver = "code_aster"
runtime = "docker"   # docker_image defaults to simvia/code_aster:17.4.0

max_parallel = 2
```

For the `native` runtime, `run_aster` must be in `PATH`, or `solver_bin` must
point to it.

In containers, csauto starts `run_aster` with `bash`, after sourcing
`/opt/activate.sh` when the image has it (the `simvia/code_aster` images do). A
custom image needs `bash`, and `run_aster` on its `PATH` once that file is
sourced (or from the start, when the image has no such file). An image whose
ENTRYPOINT starts `run_aster` itself only gets its arguments.

### openTELEMAC

```toml
solver = "openTELEMAC"
runtime = "docker"   # docker_image defaults to simvia/opentelemac:v9.1.0

max_parallel = 2
```

Every module (TELEMAC-2D, TELEMAC-3D, TOMAWAC, ARTEMIS...) is started by the
same launcher, from the case folder:
`runcode.py <module> --ncsize <n> --mpi <main .cas>`. `n` sets the number of
MPI processes (`PARALLEL PROCESSORS` in the steering file is ignored), `nt` is
not used, and `--mpi` keeps runcode from submitting its own job when
`systel.cfg` describes a batch queue: csauto submits to Slurm itself.

**Module.** csauto detects it automatically from the main steering file:
the keywords it sets that only one module's dictionary has, in English or
French (`NUMBER OF HORIZONTAL LEVELS` for TELEMAC-3D, `NUMBER OF FREQUENCIES`
for TOMAWAC...; the tables are generated from the openTELEMAC v9.1
dictionaries by `scripts/telemac_keywords.py`), else the file name prefix
(`t2d_`, `t3d_`, `tom_`, `art_`).

The VS Code extension's New Campaign and the dashboard (above its panels) show
the module found and offer a **TELEMAC module** menu: *Detect automatically*,
or one module. csauto keeps the choice with the campaign, in
`RUNS/campaign.json`; your steering files are never changed. `csauto doctor`
lists the module of each case. When it cannot be detected,
New Campaign, the dashboard, its Run dialog, `csauto doctor` and the VS Code
sidebar warn that it has to be set, and a run stops with that message.

**Main steering file.** A case may hold several `.cas` files when modules are
coupled (`COUPLING WITH = 'GAIA'` with `GAIA STEERING FILE = 'gai.cas'`): the
main one is the only `.cas` no other one names as a coupled module's steering
file. runcode runs the coupled modules itself, and DOE placeholders work in
every `.cas`. New Campaign and the dashboard list the coupled modules
("Coupled with GAIA (gai.cas), TOMAWAC (tom.cas)") and say when the coupling
cannot work: a module in `COUPLING WITH` without its `<MODULE> STEERING FILE`
keyword, or naming a file the case does not hold (New Campaign then refuses to
create the campaign), or a steering file named for a module `COUPLING WITH`
leaves out, which TELEMAC then does not run.

**Files.** Write results under `RESU/` (`RESULTS FILE = 'RESU/r2d.slf'`): it
is the folder csauto treats as the case's run, which Clean deletes. A large
mesh can sit in a `MESH/` folder next to `TEMPLATE` and be named
`'../MESH/geo.slf'`. Keep paths holding a `/` in quotes: in a `.cas` file, `/`
starts a comment. csauto warns about both when it checks the steering file.

**Monitoring.** csauto shows only values TELEMAC writes. runcode prints the
listing on its standard output, saved as `csauto.stdout`: Last Iter is its
last time step (TELEMAC-2D, TELEMAC-3D and TOMAWAC formats), the status
table's **Progress** column is the simulated time reached against the time to
simulate (`DURATION`, else `NUMBER OF TIME STEPS` x `TIME STEP`), for example
`13 / 30 d (43 %)`, and a run is DONE when runcode prints `My work is done`.
TELEMAC prints no equation residuals, so its dashboard has no Residuals tab;
the **Probes** tab offers these series against the simulated time, physical
quantities first:

| Series | Read from | Modules |
|---|---|---|
| *Variable* at probes (*Temperature at probes*...) | TELEMAC's own probes: the `TIME SERIES FILE` it writes at the points of its `TIME SERIES COORDINATES FILE`, see below | TELEMAC-2D, TELEMAC-3D, TOMAWAC |
| Boundary discharges | liquid boundary fluxes, `FLUX BOUNDARY n: ... M3/S` | TELEMAC-2D, TELEMAC-3D |
| Control section discharges | discharge through each control section (`CONTROL SECTIONS` keyword), `DISCHARGE: ...` | TELEMAC-2D, TELEMAC-3D |
| Water volume | water volume in the domain (m3) | TELEMAC-2D, TELEMAC-3D |
| Tracer quantities | each tracer's quantity (`BALANCE OF TRACER n`) | with tracers |
| Courant number | maximum Courant number, when TELEMAC prints it | TELEMAC-2D |
| Water volume error | relative error in volume since the start (`RELATIVE ERROR IN VOLUME AT T = ...`), or the error in m3 during the time step (`ERROR ON THE VOLUME DURING THIS TIME STEP`) | TELEMAC-2D, TELEMAC-3D |
| Tracer balance errors | the relative error of each tracer's balance | with tracers |
| Solver iterations (diagnostics) | iterations of each linear solver, by stage of the time step (`diffusion-propagation: GMRES (BIEF)`); Recent Errors reports `EXCEEDING MAXIMUM ITERATIONS` | all |

The listing's values exist only at its `LISTING PRINTOUT PERIOD`.

**Probes.** To follow variables at chosen points, use TELEMAC's own time
series in the steering file: a `TIME SERIES COORDINATES FILE` lists the
points, and TELEMAC writes the values there in a `TIME SERIES FILE`
(TELEMAC-2D: `... FILE 1` and `... FILE 2`; TELEMAC-3D: one coordinates file,
a `2D TIME SERIES FILE` and a `3D TIME SERIES FILE`; TOMAWAC: one of each):

```
TIME SERIES COORDINATES FILE 1 = 'probes.txt'
TIME SERIES FILE 1             = 'RESU/probes.slf'
```

```
1 3
0 50 1
2.5   1.0   1 inlet
10.0  1.0   2 middle
17.5  1.0   3 outlet
```

The coordinates file's first line gives the number of periods and of points,
then each period (start time, end time, interval), then each point: x, y,
station number and station name. The Probes panel offers one series per
variable (*Velocity U at probes*...), one curve per point named after its
station; a 3D file has each point on every plane, from the bottom
(*inlet_plane1*). As TELEMAC reads it, a station name is one word, or a quoted
string (`'west bank'`); the rest of its line is ignored. Names never hold
commas, colons or spaces (they become `_`: `'west bank'` is `west_bank`, the
listing's volume is `volume_in_the_domain_(m3)`), because the Probes panel
splits the names it asks for at commas and spaces. During a run they are read from the file TELEMAC is writing in its
working folder (one file per process in parallel, each with the points in its
part of the mesh), then from the final file. TELEMAC writes them in chunks, so
they follow the run with some delay. The series are written as CSV files in
each case's `.csauto.monitor/` folder.
The Timing Snapshot shows the elapsed time, the last time step and the
simulated time.

**Restart.** The dashboard's Restart continues a finished TELEMAC-2D or
TELEMAC-3D case from its last results, for an **additional simulated time**
(seconds) or a number of **additional time steps**; without either, it runs
the steering file's own length again. csauto writes `.csauto.restart.cas`, a
copy of the main steering file with `PREVIOUS COMPUTATION FILE` set to the
`RESTART FILE` when the steering file names one (a perfect continuation),
else to its results file, and runs that copy: your steering file is never
changed. TELEMAC continues the simulated time from the last record, and
runcode keeps the previous results as `..._old1.slf`. The Progress column then
counts the restart's own length. Coupled cases (`COUPLING WITH`) and the other
modules are not restarted. Time-dependent input files (liquid boundaries,
meteo...) must cover the continued period, or TELEMAC stops.

For the `native` runtime, source TELEMAC's environment (`HOMETEL`, `PATH`,
`PYTHONPATH`, `SYSTELCFG`) before starting csauto, so that `runcode.py` is in
`PATH`, or point `solver_bin` to it.

### Remote access with authentication

```toml
runtime = "native"
solver_bin = "/opt/code_saturne/bin/code_saturne"
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
| `solver` | `code_saturne` | The campaign's solver: `code_saturne`, `code_aster`, `openTELEMAC`, or `stub` (a fake solver for tests); the name is case-insensitive. `csauto prepare` records it in `RUNS/campaign.json` (see [architecture.md](./architecture.md#solver-adapter-boundary)) |
| `runtime` | `auto` | Execution backend: `auto`, `native`, `docker`, or `singularity` |
| `solver_bin` | (auto-detected) | Path to the native solver executable (`code_saturne`, `run_aster` for code_aster, `runcode.py` for openTELEMAC) for `native` runtime |
| `docker_image` | (the solver's own image) | Docker image name for `docker` runtime; defaults to `simvia/code_saturne` for code_saturne, `simvia/code_aster:17.4.0` for code_aster, `simvia/opentelemac:v9.1.0` for openTELEMAC. csauto keeps the image's own ENTRYPOINT (see [Docker container](#docker-container)) |
| `singularity_image` | (none) | Path or URI to `.sif` image for `singularity` runtime |
| `singularity_bin` | (auto-detected) | Path to `apptainer` or `singularity` binary |
| `use_slurm` | (auto-detected) | `true` to force Slurm submission, `false` to force local |
| `mpi_exec_options` | (none) | MPI options for Slurm jobs, passed to code_saturne as `CS_MPIEXEC_OPTIONS` (code_aster ignores it) |
| `max_parallel` | `1` | Default of `csauto run --max-parallel`. The web UI does not read it: set Max Parallel in the Run or Restart dialog (left empty, local runs are capped to `cpu_count // (n * nt)` at once, a scheduler receives every selected case) |
| `mesh_mode` | `symlink` | How `prepare` places the solver's shared dirs (`MESH`, plus `POST` for code_saturne) into `RUNS/`: `symlink` or `copy` (see [concepts.md](./concepts.md#shared-meshpost-directories)) |
| `host` | `127.0.0.1` | Bind address for `serve` |
| `port` | `8000` | Bind port for `serve` |
| `[api].token` | (none) | API authentication token |

---

## Environment variables

| Variable | Description |
|---|---|
| `CSAUTO_CONFIG` | Explicit path to `csauto.toml` |
| `CSAUTO_MIN_FREE_MEMORY_PERCENT` | Local runs only: a queued case waits for a launch slot while less than this share of the RAM is available and another case is running (default `10`, `0` disables; Linux only) |
| `CSAUTO_USE_SLURM` | Override Slurm mode: `1`/`true`/`yes`/`on` or `0`/`false`/`no`/`off` |
| `DISPLAY` | Required for GUI launch (`Open GUI` from the web UI) |

---

## Priority rules

**Runtime**: CLI flags (`--runtime`, `--solver-bin`, etc.) override the TOML values.

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

1. Explicit `solver_bin` set → use `native`
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
