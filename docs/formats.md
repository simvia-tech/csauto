# Input and Output Formats

This page lists the main files read and written by `csauto`.

## `doe.csv` (input)

- CSV with required header
- one row = one generated case

Example:

```csv
case_id,alpha,beta
case0001,0.10,1.20
case0002,0.20,1.30
```

## `setup.xml` (code_saturne template input)

Required template file for code_saturne.

Accepted locations:

- `TEMPLATE/setup.xml`
- `TEMPLATE/DATA/setup.xml`

Supports placeholders and IF blocks.

## `run.cfg` (optional code_saturne template input)

Optional file, can be in template root or under `DATA/`.
Also supports placeholders and IF blocks.

## `.export` (code_aster template input)

Required template file for code_aster: exactly one `*.export` file at the root
of the template. It lists the command files, the mesh and the result files:
reference the shared mesh folder as `../MESH/<file>` and write results under
`RESU/`. Like the `.comm` command files, it supports placeholders and IF blocks.

## User source files in `SRC/` (optional template input)

Every text file of the template that holds placeholders or IF blocks is rendered,
including user sources under `SRC/`.

Example:

- `TEMPLATE/SRC/cs_user_parameters.cpp` with `{my_value}` will be rendered from DOE values.

Note:

- placeholders are detected using `{name}` syntax; write `\{name}` for braces
  that must stay as they are in C/C++ code (see [doe-format.md](./doe-format.md#placeholder-syntax)).

## `doe_row.csv` (generated per case)

Generated at:

```text
RUNS/case0001/doe_row.csv
```

Contains the resolved DOE values used for that case. With the registry, it is
how csauto recognizes case folders.

## `campaign.json` (campaign solver)

Located at:

```text
RUNS/campaign.json
```

Written by `csauto prepare`:

```json
{ "solver": "code_aster" }
```

Every later command on the campaign uses this solver, whatever directory it
runs from.

## `registry.json` (global state)

Located at:

```text
RUNS/registry.json
```

Stores status and metadata, including:

- `status`, `path`, `nprocs`, `nt`
- `start_time`, `end_time`
- `pid` or `job_id`
- `last_iter`, `convergence`, `note`

## Per-case runtime files

Typical files:

```text
RUNS/case0001/csauto.stdout          ← output of the run command
RUNS/case0001/csauto.stderr
RUNS/case0001/.csauto.history.jsonl
RUNS/case0001/.csauto.exitcode       ← exit status of the last run command
RUNS/case0001/.csauto.jobid          ← Slurm job ID
RUNS/case0001/.csauto.cid            ← Docker container ID
RUNS/case0001/.csauto.slurm.sh       ← batch script, for solvers that write one
RUNS/case0001/.csauto.export         ← code_aster: the export actually run
```

`.csauto.exitcode` is written when the run command ends, for local runs and
`sbatch --wrap` jobs. code_saturne writes its Slurm batch script for the
Singularity runtime. code_aster runs `.csauto.export`, a copy of the case's
`.export` with `mpi_nbcpu` and `ncpus` set from `n` and `nt`; the case's own
`.export` is never modified.

code_saturne writes one folder per run:

```text
RUNS/case0001/RESU/<run_id>/run_solver.log    ← main solver log (listing on older versions)
RUNS/case0001/RESU/<run_id>/residuals.csv
RUNS/case0001/RESU/<run_id>/performance.log
RUNS/case0001/RESU/<run_id>/monitoring/*.csv
RUNS/case0001/RESU/<run_id>/profiles/*.csv
```

code_aster writes its results straight into `RUNS/case0001/RESU/`, at the paths
its `.export` gives, so a case holds one run.

## `residuals.csv` (code_saturne)

Typical format:

```csv
iteration,velocity,pressure
1,1.0e-2,5.0e-3
2,1.0e-3,4.0e-3
```

If missing, residual fallback parsing from `run_solver.log` may be used.

## Probes and profiles CSV (code_saturne)

- probes: `RESU/<run>/monitoring/*.csv`
- profiles: `RESU/<run>/profiles/*.csv`

UI labels are derived from physical quantity naming in filenames.

## `performance.log` (code_saturne)

`csauto` extracts elapsed time, ranks, threads, solver timings, and IO timings from known text patterns.
