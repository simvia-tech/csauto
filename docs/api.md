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

## Authentication

Authentication is optional.

If `[api].token` is configured in `csauto.toml`, each `/api/*` request must send either:

- `X-CSAUTO-TOKEN: <token>`
- `Authorization: Bearer <token>`

Without a valid token, the server returns `401 Unauthorized`.

## Request conventions

Case list query format:

- many endpoints require `case` query parameter
- accepted forms:
  - repeated query: `?case=case0001&case=case0002`
  - comma-separated: `?case=case0001,case0002`

Boolean query values:

- true values: `1`, `true`, `yes`
- any other value is treated as false

Case validation:

- case IDs are validated and path traversal is blocked
- invalid case values return `400`

## GET endpoints

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
      "last_mod": "2026-03-09T10:02:11",
      "resu_size_mb": 128.4,
      "doe": {
        "density_value": "1.1"
      }
    }
  ],
  "doe_columns": ["density_value", "turbulence_model", "ref_v"]
}
```

## `GET /api/perf`

Purpose:

- collect performance records from selected cases

Query parameters:

- `case` (required)

Response:

- `{ "records": [...] }`

## `GET /api/residuals`

Purpose:

- return residual rows as JSON

Query parameters:

- `case` (required)
- `limit` (optional int, default `0` = no limit)
- `include_history` (optional boolean): include all RESU runs

Response:

- `{ "header": [...], "records": [...] }`

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
- `files` (optional comma list): defaults to internal anomaly files
- `max_hits` (optional int, default `200`, clamped `1..500`)
- `context` (optional int, default `6`, clamped `0..50`): lines before and after hit
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
- `columns` (optional comma/space list)
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
- `file` (optional, default `listing`)
- `n` (optional int, default `200`)

Response content-type:

- `text/plain`

## `GET /api/resu_files`

Purpose:

- list files in latest RESU run

Query parameters:

- `case` (required)
- `limit` (optional int, default `2000`)

Response:

- `{ "files": [...] }`

## `GET /api/resu_dirs`

Purpose:

- list RESU run directories sorted by recency

Query parameters:

- `case` (required)

Response:

- `{ "dirs": ["20260308-1413", "20260308-1347", ...] }`

## `GET /api/probes`

Purpose:

- list available probe/profile files for one case

Query parameters:

- `case` (required)
- `scope` (optional): `monitoring` (default) or `profiles`
- `limit` (optional int, default `200`)

Response:

- `{ "files": [...] }`

## `GET /api/probe_data`

Purpose:

- return probe CSV records

Query parameters:

- `case` (required)
- `probe` (required)
- `limit` (optional int, default `200`)

Response:

- `{ "header": [...], "records": [...] }`

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
- `probe` or `probes` (required, comma or repeated)

Response:

- `{ "columns": [...] }`

## `GET /api/probe_svg`

Purpose:

- render probe/profile plot as SVG

Query parameters:

- `case` (required)
- `probe` or `probes` (required)
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
- `kind` (required): example `setup.xml`, `doe_row.csv`, `listing`, ...

Response content-type:

- `text/plain`

## `GET /api/compare_runs`

Purpose:

- compare a selected file across multiple cases against one base case

Query parameters:

- `case` (required)
- `base` (optional, default first selected case)
- `kind` (optional, default `setup.xml`)
- `filter` (optional regex)

Response content-type:

- `text/plain` diff output

## `GET /api/case_diff`

Purpose:

- diff a file between exactly two cases

Query parameters:

- `case1` (required)
- `case2` (required)
- `kind` (required)

Response content-type:

- `text/plain`

## `GET /api/history`

Purpose:

- read per-case action history

Query parameters:

- `case` (required)
- `limit` (optional int, default `100`, clamped `1..1000`)
- `include_refresh` (optional boolean, default false)
- `actions` (optional comma list to include)
- `q` (optional text filter)

Response:

- `{ "items": [...] }`

## POST endpoints

## `POST /api/highlight_xml`

Purpose:

- return highlighted HTML for XML content

Payload:

```json
{ "content": "<xml>...</xml>" }
```

Response content-type:

- `text/html`

## `POST /api/highlight_diff`

Purpose:

- return highlighted HTML for unified diff content

Payload:

```json
{ "content": "@@ ..." }
```

Response content-type:

- `text/html`

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
- `keep_resu` and `delete_resu` are mutually exclusive

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
- returns `500` if any selected case fails to stop

Success response:

```json
{ "status": "ok" }
```

## `POST /api/open_gui`

Purpose:

- launch code_saturne GUI for one case on server side

Payload:

```json
{ "case": "case0001" }
```

Notes:

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
- `restart_mode` accepted values: `iterations`, `physical_time`
- `restart_value` must match selected mode constraints

Success response:

```json
{ "status": "ok" }
```

## Error handling

Common status codes:

- `200`: success
- `400`: missing/invalid parameters
- `401`: unauthorized (token)
- `404`: resource not found
- `500`: internal/runtime/launch errors

Common error messages:

- `Missing case parameter`
- `Missing cases parameter`
- `Missing case, probe parameters`
- `Missing case, kind, content parameters`
- `n, nt, and max_parallel must be integers > 0`
- `restart_mode must be iterations or physical_time`

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
