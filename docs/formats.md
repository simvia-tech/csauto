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

## `setup.xml` (template input)

Required template file.

Accepted locations:

- `TEMPLATE/setup.xml`
- `TEMPLATE/DATA/setup.xml`

Supports placeholders and IF blocks.

## `run.cfg` (optional template input)

Optional file, can be in template root or under `DATA/`.
Also supports placeholders and IF blocks.

## User source files in `SRC/` (optional template input)

Template text files under `SRC/` are also rendered.

Example:

- `TEMPLATE/SRC/cs_user_parameters.cpp` with `{my_value}` will be rendered from DOE values.

Note:

- placeholders are detected using `{name}` syntax, so avoid ambiguous brace patterns in C/C++ code.

## `doe_row.csv` (generated per case)

Generated at:

```text
RUNS/case0001/doe_row.csv
```

Contains the resolved DOE values used for that case.

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
RUNS/case0001/csauto.stdout
RUNS/case0001/csauto.stderr
RUNS/case0001/.csauto.history.jsonl
RUNS/case0001/.csauto.jobid
RUNS/case0001/RESU/<run_id>/listing
RUNS/case0001/RESU/<run_id>/run_solver.log
RUNS/case0001/RESU/<run_id>/residuals.csv
RUNS/case0001/RESU/<run_id>/performance.log
RUNS/case0001/RESU/<run_id>/monitoring/*.csv
RUNS/case0001/RESU/<run_id>/profiles/*.csv
```

## `residuals.csv`

Typical format:

```csv
iteration,velocity,pressure
1,1.0e-2,5.0e-3
2,1.0e-3,4.0e-3
```

If missing, residual fallback parsing from `run_solver.log` may be used.

## Probes and profiles CSV

- probes: `RESU/<run>/monitoring/*.csv`
- profiles: `RESU/<run>/profiles/*.csv`

UI labels are derived from physical quantity naming in filenames.

## `performance.log`

`csauto` extracts elapsed time, ranks, threads, solver timings, and IO timings from known text patterns.
