# Adding a new solver

csauto talks to solvers exclusively through the `SolverAdapter` boundary
(see [Architecture — Solver adapter boundary](./architecture.md#solver-adapter-boundary)).
Adding a solver means writing one adapter class and registering its name —
the core (runner, DOE generation, CLI, web routes) does not change.

Two reference implementations exist:

- `csauto/solvers/stub.py` — the minimal possible adapter (a fake solver used
  by integration tests). Start by reading this one.
- `csauto/solvers/code_saturne.py` — a full production adapter with restart,
  Slurm scripts, residuals/probes/performance parsing, and live control.

## 1. Create the adapter class

Create `csauto/solvers/<name>.py` and subclass `SolverAdapterBase`
(`csauto/solvers/base.py`), which provides working defaults for most of the
protocol.

Three methods are abstract and must be implemented:

| Method | Purpose |
|---|---|
| `run_argv(case_path, nprocs, nt, run_args)` | Solver argv fragment that starts a run, excluding the binary itself. The generic runtime wrapping composes it into `nohup <bin> ...` (native), `docker run ... <image> ...`, or `apptainer exec ... <image> <container_bin_name> ...`. |
| `detect_outcome(case_dir, start_time)` | Read the solver's output and return `STATUS_DONE`, `STATUS_FAILED`, or `None` (still unknown). This is how csauto decides a run finished. |
| `find_setup_file(template_dir)` | Locate the solver's primary input file in a template or case directory, raising `FileNotFoundError` if absent. Used by `prepare`, `doctor`, and the GUI. |

These class attributes have no default and must be set:

| Attribute | Example (code_saturne) | Used for |
|---|---|---|
| `name` | `"code_saturne"` | identity, error messages |
| `native_bin_name` | `"code_saturne"` | PATH lookup for the `native` runtime |
| `container_bin_name` | `"code_saturne"` | argv inside singularity containers |
| `container_root` | `"/home/code_saturne"` | bind-mount target inside containers |
| `default_docker_image` | `"simvia/code_saturne"` | `docker` runtime default |
| `results_dirname` | `"RESU"` | per-case results directory |

Then declare the conventions that differ from the base defaults:

- `template_input_names` — files rendered per case and skipped by the generic
  render sweep.
- `shared_dir_names` — template-level shared dirs copied/symlinked into the
  runs dir.
- `cleanup_log_names` — logs the Clean action may truncate.
- `anomaly_file_names` — launcher/solver logs scanned for anomalies, and the
  file list offered by the Recent Errors panel.
- `compare_kinds` — `CompareKind(value, label)` entries that populate the
  compare panel's file selector. The first entry is the default;
  `default_compare_kind` is derived from it, so do not declare it yourself.
- `performance_columns` — `PerfColumn(key, label, kind)` entries (`kind` is
  `"time"`, `"int"`, `"float"`, or `"text"`) that define the Timing Snapshot
  table. The CSV export keys (`performance_fields`) are derived from them, so
  do not declare those either.
- `control_actions` — the live-control directives your `apply_control`
  implements (code_saturne declares `stop`, `extend`, `checkpoint`, `flush`).
- `dashboard_panels` — which dashboard panels the UI renders. Defaults to all
  of them; trim it when a panel cannot be fed by your solver.

The web UI reads `dashboard_panels`, `compare_kinds`, and `anomaly_file_names`
from `/api/app_config` and the timing columns from `/api/perf`, so these
declarations reshape the dashboard without any frontend change.

Everything else is optional. Useful overrides, from most to least common:

- `read_progress(case_dir, start_time)` — current iteration for the status
  table (base returns `None`).
- `locate_case_file(case_dir, name)` — friendly-name file resolution for the
  web UI; the base only resolves paths relative to the case directory, so
  extend it if your results live in run subdirectories (see `StubAdapter`).
- `gui_argv(setup_path)` — argv fragment to open the solver GUI (base raises
  "GUI not supported").
- `build_slurm_script(...)` — return a full sbatch script when your solver
  cannot be launched via `sbatch --wrap` (base returns `None`, meaning wrap).
- `mpi_env(mpi_exec_options)` — env vars carrying MPI options to the solver.
- `build_restart_args(...)` / `apply_control(...)` — checkpoint restart and
  live control directives (base raises "not supported", which surfaces as a
  clean error in the UI).
- `find_residuals_files` / `parse_live_residuals` / probe listing /
  `find_performance_log` / `parse_performance` — analytics (base returns
  empty, so charts degrade gracefully).
- `doctor_checks(...)` — the base already verifies every case has a setup
  file; override to add solver-specific environment checks.

Results-layout helpers (`results_root`, `list_run_dirs`, `latest_run_dir`,
`list_result_files`) are derived from `results_dirname` and normally need no
override, as long as your solver writes one subdirectory per run under it.

## 2. Register the solver

In `csauto/solvers/__init__.py`, add the name to `_SOLVER_NAMES` and a branch
in `_adapter_for()`:

```python
_SOLVER_NAMES = ("code_saturne", "openfoam", "stub")

    if normalized == "openfoam":
        from .openfoam import OpenFoamAdapter

        return OpenFoamAdapter()
```

Config validation picks the new name up automatically from
`available_solvers()`.

## 3. Select it

```toml
# csauto.toml
solver = "openfoam"
```

The CLI and the web server build the adapter from this key; no other
configuration changes.

## 4. Test it

- Unit-test the argv fragments and outcome/progress parsing against golden
  values (see `tests/unit/test_solvers.py`).
- Copy the pattern of `tests/integration/test_stub_adapter.py`: generate cases
  from a template, launch with `runtime="native"` pointing at a harmless
  binary, and poll `refresh_status` until the adapter reports `DONE`.
- `tests/unit/test_solver_boundary.py` will fail if your work leaks solver
  literals into the generic modules — route everything through the adapter.

## 5. Optional: dashboard branding

The dashboard header shows your solver's `name` as text (only code_saturne
ships a header logo today; adding one means editing
`frontend/src/lib/components/hero/HeroBanner.svelte`). The favicon defaults to
the Simvia mark and switches to `/favicon-<name>.svg` automatically when that
asset exists — drop a `favicon-<name>.svg` into `frontend/static/` and rebuild
the frontend to ship one.
