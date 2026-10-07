# API Reference

Base URL is the server started by:

```bash
csauto serve <runs_dir>
```

`serve` starts the primary FastAPI server.

Example base URL:

- `http://127.0.0.1:8000`

Interactive API documentation is available at:

- `http://127.0.0.1:8000/docs` (Swagger UI)
- `http://127.0.0.1:8000/redoc` (ReDoc)

The server works with the solver the campaign was prepared for (recorded in
`RUNS/campaign.json`). Several responses depend on it: `GET /api/app_config`
lists what the solver offers, and a restart, control or GUI request the solver
cannot perform is refused with `400` (for example `Solver 'code_aster' does not
support restart`).

## Authentication

Authentication is optional.

If `[api].token` is configured in `csauto.toml` (or `serve --token` is given), each `/api/*` request must send either:

- `X-CSAUTO-TOKEN: <token>`
- `Authorization: Bearer <token>`

Without a valid token, the server returns `401 Unauthorized`.

`GET /api/solver_logo` and `GET /api/solver_icon` need no token, like the
dashboard's own assets.

## Request conventions

Case list query format:

- many endpoints require `case` query parameter
- accepted forms:
  - repeated query: `?case=case0001&case=case0002`
  - comma-separated: `?case=case0001,case0002`

Boolean query values (any case):

- true: `1`, `true`, `yes`, `on`, `t`, `y`
- false: `0`, `false`, `no`, `off`, `f`, `n`
- any other value, empty included, is refused with `422`

Case validation:

- case IDs are validated and path traversal is blocked
- invalid case values return `400`

## GET endpoints

## `GET /api/app_config`

Purpose:

- describe what the campaign's solver offers, so a client shows only what works

Response (code_saturne):

```json
{
  "solver": "code_saturne",
  "panels": ["status", "residuals", "probes", "performance", "compare", "tail", "errors"],
  "capabilities": ["compare", "control", "gui", "performance", "probes", "residuals", "restart"],
  "compare_kinds": [
    { "value": "setup.xml", "label": "setup.xml" },
    { "value": "doe_row.csv", "label": "doe_row.csv" },
    { "value": "run_solver.log", "label": "run_solver.log" },
    { "value": "performance.log", "label": "performance.log" }
  ],
  "error_files": ["csauto.stderr", "run_solver.log", "listing", "csauto.stdout"],
  "tail_files": ["run_solver.log", "listing", "run_status.running", "csauto.stdout", "csauto.stderr", "performance.log", "summary"],
  "control_actions": [
    { "name": "stop", "label": "Stop gracefully", "value_label": "", "value_kind": "int" },
    { "name": "extend", "label": "Extend", "value_label": "Additional time steps", "value_kind": "int" },
    { "name": "checkpoint", "label": "Write a checkpoint", "value_label": "", "value_kind": "int" },
    { "name": "flush", "label": "Flush logs and plots", "value_label": "", "value_kind": "int" }
  ],
  "restart_modes": [
    { "name": "iterations", "label": "Additional iterations", "value_label": "Iterations", "value_kind": "int" },
    { "name": "physical_time", "label": "Additional physical time", "value_label": "Time (s)", "value_kind": "float" }
  ],
  "default_residual_columns": ["velocity", "pressure"],
  "logo": true,
  "icon": true
}
```

Fields:

- `panels`: dashboard tabs, in display order
- `capabilities`: what the solver can do (`residuals`, `probes`, `performance`,
  `compare`, `control`, `restart`, `gui`). Restart, control and GUI requests the
  solver does not support are refused with `400`; the residuals, probes and
  timing endpoints of a solver without them return empty results
- `compare_kinds`: files offered by Compare; the first one is the default `kind` of `/api/compare_runs`
- `error_files`: files `/api/recent_errors` scans by default
- `tail_files`: Log Tail file names, best first; entries may be globs such as
  `*.mess`, and `/api/tail_files` resolves them for one case
- `control_actions`, `restart_modes`: an empty `value_label` means no value is
  taken; otherwise `value_kind` (`int` or `float`) says which number is expected
- `default_residual_columns`: residual curves plotted first
- `logo`, `icon`: whether `/api/solver_logo` and `/api/solver_icon` have an image

For code_aster, `panels` is `status`, `compare`, `tail`, `errors`, the only
capability is `compare`, and `control_actions` and `restart_modes` are empty.

## `GET /api/solver_logo` and `GET /api/solver_icon`

Purpose:

- the solver's logo (dashboard header) and square icon (browser tab)

No authentication. Response content-type: `image/svg+xml`, or `404` when the
solver has no such image.

## `GET /api/status`

Purpose:

- refresh and return all case rows + detected DOE columns

Query parameters:

- `log` (optional, boolean): if true, logs `refresh` actions in case history

Response:

```json
{
  "rows": [
    {
      "case_id": "case0001",
      "status": "RUNNING",
      "convergence": "",
      "note": "",
      "nprocs": 4,
      "nt": 2,
      "last_iter": 178,
      "duration_s": 522,
      "duration": "8m42s",
      "last_mod": "2026-03-09T10:02:11+00:00",
      "resu_size_mb": 128.4,
      "doe": {
        "density_value": "1.1"
      }
    }
  ],
  "doe_columns": ["density_value", "turbulence_model", "ref_v"]
}
```

`last_mod` is a UTC timestamp.

## `GET /api/perf`

Purpose:

- collect timing records from selected cases

Query parameters:

- `case` (required)

Response:

```json
{
  "columns": [
    { "key": "elapsed_time", "label": "Elapsed (s)", "kind": "time" },
    { "key": "mpi_ranks", "label": "MPI Ranks", "kind": "int" }
  ],
  "records": [
    { "case_id": "case0001", "elapsed_time": "1.967", "mpi_ranks": null }
  ]
}
```

`columns` are the solver's timing columns (`kind` is `time`, `int`, `float` or
`text`). Each record holds `case_id` plus one value per column `key`, `null`
when the log does not give it. Cases without a timing log have no record. Both
lists are empty for a solver without timing columns (code_aster).

## `GET /api/restart_origin`

Purpose:

- infer restart base iteration/time from latest run logs

Query parameters:

- `case` (required)

Response:

- `{ "origins": { "case0001": { "iteration": 500, "time": 12.5 } } }`

## `GET /api/recent_errors`

Purpose:

- scan log files for anomalies (error/warn/info)

Query parameters:

- `case` (required)
- `files` (optional comma list): defaults to the solver's `error_files` (see `/api/app_config`)
- `max_hits` (optional int `1..500`, default `200`)
- `context` (optional int `0..50`, default `6`): lines before and after hit
- `sev` (optional): `all`, `error`, `warn`, `info`, or comma mix
- `q` (optional): plain text filter

Response:

- `{ "items": [...] }`

Each item contains:

- `case_id`, `file`, `severity`
- `line_html` (highlighted + context)
- `tail_index`, `tail_total`

## `GET /api/residual_columns`

Purpose:

- list available residual columns for selected cases

Query parameters:

- `case` (required)

Response:

- `{ "columns": ["iteration", "velocity", "pressure", ...] }`

## `GET /api/residuals_svg`

Purpose:

- render residuals plot as SVG

Query parameters:

- `case` (required)
- `columns` (optional comma/space list, default: the solver's `default_residual_columns`, else the first two residuals)
- `width` (optional int, default `900`)
- `height` (optional int, default `500`)
- `x_min` (optional float, default `0`)
- `include_history` (optional boolean)

Response content-type:

- `image/svg+xml`

## `GET /api/tail`

Purpose:

- return tail content of a case file

Query parameters:

- `case` (required)
- `file` (optional, default: the first file `/api/tail_files` lists for the case)
- `n` (optional int, default `200`)

Response content-type:

- `text/plain`

## `GET /api/tail_files`

Purpose:

- list the log files the Log Tail panel can show for one case, best first

Query parameters:

- `case` (required)

Response:

```json
{ "files": ["run_solver.log", "csauto.stdout", "csauto.stderr", "performance.log", "summary", "RESU/20261007-1437/setup.log"] }
```

The solver's `tail_files` that exist come first; glob entries become paths
relative to the case. The other `*.log` files of the latest run follow.

## `GET /api/tail_lines`

Purpose:

- return the last lines of a case file, each with the severity the solver's
  anomaly patterns give it (what the Log Tail colours)

Query parameters:

- `case` (required)
- `file` (optional, same default as `/api/tail`)
- `n` (optional int, default `200`)

Response:

```json
{
  "file": "run_solver.log",
  "lines": [
    { "text": "  Time step 12", "severity": null },
    { "text": "Warning: clipping of k", "severity": "warn" }
  ]
}
```

`severity` is `error`, `warn`, `info` or `null`.

## `GET /api/resu_files`

Purpose:

- list the files of the case's latest run folder, relative to the case

Query parameters:

- `case` (required)
- `limit` (optional int, default `2000`)

Response:

- `{ "files": [...] }`

## `GET /api/resu_dirs`

Purpose:

- list the case's run folders, newest first: the folders the solver reports as
  runs (code_saturne: each `RESU/<run>`; code_aster: `RESU` itself)

Query parameters:

- `case` (required)

Response:

- `{ "dirs": ["20260308-1413", "20260308-1347", ...] }`

## `GET /api/probes`

Purpose:

- list the probe/profile files of one or more cases (names merged, no duplicates)

Query parameters:

- `case` (required)
- `scope` (optional): `probes` (default) or `profiles`
- `limit` (optional int, default `200`)

Response:

- `{ "files": [...] }`

## `GET /api/probe_position`

Purpose:

- infer probe coordinates from associated coords file when available

Query parameters:

- `case` (required)
- `probe` (required)
- `column` (optional)

Response:

- `{ "found": false }`
- or `{ "found": true, "x": 0.05, "y": 0.05, "z": 0.0, "source": "..." }`

## `GET /api/probe_columns`

Purpose:

- list columns available in one or more probe files

Query parameters:

- `case` (required)
- `probe` (required, comma or repeated)

Response:

- `{ "columns": [...] }`

## `GET /api/probe_svg`

Purpose:

- render probe/profile plot as SVG

Query parameters:

- `case` (required)
- `probe` (required, comma or repeated)
- `axis` (optional, default `time`)
- `columns` (optional comma/space list)
- `width` (optional int, default `900`)
- `height` (optional int, default `500`)
- `include_history` (optional boolean)
- `x_min` (optional float)
- `time_min` (legacy alias if `x_min` absent)

Response content-type:

- `image/svg+xml`

## `GET /api/case_file`

Purpose:

- return a readable case file

Query parameters:

- `case` (required)
- `kind` (required): a path relative to the case (`doe_row.csv`,
  `DATA/setup.xml`), or a name the solver resolves: code_saturne `setup.xml`
  and run files such as `run_solver.log` (from the latest run that has them),
  code_aster `export`

Response content-type:

- `text/plain`

## `GET /api/compare_runs`

Purpose:

- compare a selected file across multiple cases against one base case

Query parameters:

- `case` (required)
- `base` (optional, default first selected case)
- `kind` (optional, default: the solver's first compare kind, `setup.xml` for
  code_saturne, `export` for code_aster)
- `filter` (optional regex)

Response content-type:

- `text/plain` diff output

## `GET /api/settings/telemetry`

Purpose:

- read whether anonymous usage telemetry is enabled

Response:

```json
{ "enabled": true }
```

## POST endpoints

## `POST /api/settings/telemetry`

Purpose:

- enable or disable anonymous usage telemetry

Payload:

```json
{ "enabled": false }
```

Response: the new setting, as for `GET /api/settings/telemetry`.

## `POST /api/case_file`

Purpose:

- update an editable case file

Payload:

```json
{
  "case": "case0001",
  "kind": "setup.xml",
  "content": "<xml>...</xml>"
}
```

Response:

```json
{ "status": "ok" }
```

## `POST /api/case_note`

Purpose:

- set/update a user note for a case

Payload:

```json
{ "case": "case0001", "note": "investigate pressure drift" }
```

Response:

```json
{ "status": "ok" }
```

## `POST /api/case_convergence`

Purpose:

- set convergence label for a finished case

Payload:

```json
{ "case": "case0001", "convergence": "converged" }
```

Allowed `convergence` values:

- `converged`
- `not_converged`
- empty string (clear)

Constraint:

- case status must be `DONE` or `FAILED`

Response:

```json
{ "status": "ok" }
```

## `POST /api/cleanup_cases`

Purpose:

- apply cleanup policies on selected case list

Payload example:

```json
{
  "cases": ["case0001", "case0002"],
  "prune_resu": true,
  "keep_last": 1,
  "max_log_mb": 50,
  "clear_cid": true,
  "clear_pyc": false,
  "dry_run": false,
  "keep_resu": ["20260308-1413"],
  "delete_resu": []
}
```

Rules:

- `cases` is required
- `keep_resu` and `delete_resu` are mutually exclusive; they name run folders as
  `/api/resu_dirs` lists them
- only the run folders the solver reports are deleted (code_saturne: each
  `RESU/<run>`; code_aster: `RESU` itself, one run per case)
- `RUNNING` and `PENDING` cases are skipped
- with `prune_resu`, a `DONE` or `FAILED` case left without any run returns to `PREPARED`

Response:

```json
{
  "resu_removed": 3,
  "logs_truncated": 2,
  "bytes_freed": 10485760,
  "cid_removed": 1,
  "pycache_removed": 0
}
```

## `POST /api/kill_case`

Purpose:

- kill one or multiple selected cases

Payload:

```json
{ "cases": ["case0001", "case0002"] }
```

Behavior:

- multi-case kill runs in parallel
- docker runs: the case's container is stopped (found from `.csauto.cid`, else
  by its labels among this campaign's containers)
- returns `500` if any selected case fails to stop

Success response:

```json
{ "status": "ok" }
```

## `POST /api/control_case`

Purpose:

- send one of the solver's live control actions to one or more running cases,
  an alternative to killing the process. code_saturne drops a `control_file`
  into the active `RESU/<run>/` directory, which it polls once per time step.

Payload:

```json
{ "cases": ["case0001", "case0002"], "action": "extend", "value": 500 }
```

- `action`: one of the solver's `control_actions` (see `/api/app_config`);
  code_saturne: `stop`, `extend`, `checkpoint`, `flush`
- `value`: a number, required (and positive) when the action has a
  `value_label`, refused otherwise; a whole number when its `value_kind` is
  `int`. Only code_saturne's `extend` takes one (additional time steps).

Behavior:

- `400` for a solver without live control, an unknown action, or a bad `value`
- multi-case control runs in parallel
- every selected case must currently be `RUNNING`
- `extend` raises the case's actual configured iteration limit (as
  code_saturne reports it, not csauto's own `--nt`/OpenMP thread count) by
  `value`; repeated extends stack correctly
- returns `500` if any selected case fails (not `RUNNING`, no active run
  folder, etc.)
- each action is logged to the case's `.csauto.history.jsonl`

Success response:

```json
{ "status": "ok" }
```

## `POST /api/open_gui`

Purpose:

- launch the solver's GUI (code_saturne) for one case on server side

Payload:

```json
{ "case": "case0001" }
```

Notes:

- `400` for a solver without a GUI
- requires server `DISPLAY`
- runtime resolution errors are returned as `500`

Success response:

```json
{ "status": "ok" }
```

## `POST /api/run_case`

Purpose:

- launch selected cases from web/API, with optional restart settings

Minimal payload:

```json
{
  "cases": ["case0001"],
  "n": 4,
  "nt": 2,
  "max_parallel": 2
}
```

Restart payload:

```json
{
  "cases": ["case0001"],
  "n": 4,
  "nt": 2,
  "restart": true,
  "restart_mode": "iterations",
  "restart_value": 100,
  "restart_path": "20260308-1413"
}
```

Rules:

- `cases`, `n`, `nt` are required
- `n`, `nt`, `max_parallel` must be integers `> 0`
- without `max_parallel`, every selected case starts at once (`max_parallel` in
  `csauto.toml` only applies to `csauto run`)
- a restart needs the `restart` capability (code_saturne only)
- `restart_mode` must be one of the solver's `restart_modes` (see
  `/api/app_config`); code_saturne: `iterations`, `physical_time`
- `restart_value` must be positive, and a whole number for an `int` mode; it
  needs a `restart_mode`
- without `restart_mode`, code_saturne restarts with the limits already in the case's setup
- `restart_path` (optional) picks the run to restart from: a run folder name
  (`20260308-1413`) or a `RESU/<run>/checkpoint` path. By default code_saturne
  restarts from the latest run that has a checkpoint.

A case the solver refuses to launch (a restart without checkpoint, say) keeps
its status, and the other selected cases still launch. The response is then
`500` and names the refused cases:
`Launch error: 1 case(s) not launched: case0003: No checkpoint found for case0003`.

Success response:

```json
{ "status": "ok" }
```

## Error handling

Common status codes:

- `200`: success
- `400`: missing/invalid parameters, or an action the solver does not support
- `401`: unauthorized (token)
- `404`: resource not found
- `422`: a parameter of the wrong type or out of range (for example `"n": 1.5`)
- `500`: internal/runtime/launch errors

Common error messages:

- `Missing case parameter`
- `Missing cases parameter`
- `Missing case, probe parameters`
- `Missing case, kind, content parameters`
- `n, nt, and max_parallel must be integers > 0`
- `Solver 'code_aster' does not support restart`
- `Unknown restart_mode 'iter' (expected: iterations, physical_time)`
- `iterations needs a whole number (Iterations)`
- `Invalid action (expected one of: stop, extend, checkpoint, flush)`
- `extend needs a positive value (Additional time steps)`

## cURL examples

Read status:

```bash
curl -s "http://127.0.0.1:8000/api/status"
```

Read status with token:

```bash
curl -s -H "X-CSAUTO-TOKEN: my-token" \
  "http://127.0.0.1:8000/api/status"
```

See what the campaign's solver offers:

```bash
curl -s "http://127.0.0.1:8000/api/app_config"
```

Fetch residual SVG:

```bash
curl -s "http://127.0.0.1:8000/api/residuals_svg?case=case0001&columns=velocity,pressure" > residuals.svg
```

Run a case from API:

```bash
curl -s -X POST "http://127.0.0.1:8000/api/run_case" \
  -H "Content-Type: application/json" \
  -d '{"cases":["case0001"],"n":4,"nt":2,"max_parallel":1}'
```
