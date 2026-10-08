# Adding a new solver

csauto knows a solver only through its **adapter**: one Python class that
says how to start the solver, where its files are, and how to read its
output. Everything else (case generation, launching on a laptop, a container
or Slurm, status tracking, the web dashboard) is shared by every solver.

Adding a solver means writing one adapter class, registering its name and
adding a sample case to the test suite. No other part of csauto changes,
including the dashboard.

Three adapters ship with csauto:

| Adapter | Read it for |
|---|---|
| `csauto/solvers/stub.py` | The smallest complete adapter: a fake solver used by the tests. Start here. |
| `csauto/solvers/code_aster.py` | A real solver in about 100 lines: environment setup in containers, results written straight into `RESU/`, verdict read from the solver's standard output. |
| `csauto/solvers/code_saturne.py` | The most complete adapter: residuals, probes, timing, restart, live control, GUI, a custom Slurm script. |

## 1. Write the adapter

Create `csauto/solvers/<name>.py` with a subclass of `SolverAdapter`. This
is a complete adapter for a solver started as `mysolver input.cfg`, which
writes each run's results into a new folder under `results/`:

```python
from collections.abc import Sequence
from pathlib import Path
from typing import ClassVar

from .base import SolverAdapter


class MySolverAdapter(SolverAdapter):
    name: ClassVar[str] = "mysolver"  # the value of `solver` in csauto.toml
    native_bin_name: ClassVar[str] = "mysolver"  # looked up in PATH by the native runtime
    container_bin_name: ClassVar[str] = "mysolver"  # started inside docker and apptainer images
    default_docker_image: ClassVar[str] = "example/mysolver:1.0"
    results_dirname: ClassVar[str] = "results"
    dashboard_panels: ClassVar[tuple[str, ...]] = ("status", "tail", "errors")

    def run_argv(self, case_dir: Path, nprocs: int, nt: int, run_args: Sequence[str] | None = None) -> list[str]:
        return ["input.cfg", "--procs", str(nprocs), *(run_args or [])]

    def find_setup_file(self, template_dir: Path) -> Path:
        path = template_dir / "input.cfg"
        if not path.is_file():
            raise FileNotFoundError(f"input.cfg not found in {template_dir}")
        return path
```

That is all csauto needs:

- **`run_argv`** returns the arguments after the solver executable. The
  command always starts **inside the case folder**, in every runtime, so use
  paths relative to it. `case_dir` is the case folder on this machine, for
  when you need to read a file to build the arguments. `nprocs` is the number
  of MPI processes and `nt` the number of threads per process: use them,
  translate them, or ignore them.
- **`find_setup_file`** returns the solver's main input file. `csauto prepare`
  renders it from each DOE row, and `csauto doctor` checks every case has one.
- **How a run ends.** When the run command exits, csauto reads its exit
  status: 0 means DONE, anything else FAILED. If your solver's exit status
  is not reliable, override `detect_outcome` (see
  [the recipe](#the-solver-prints-its-verdict-in-a-log)).

## 2. Register it

In `csauto/solvers/__init__.py`, add the name to `_SOLVER_NAMES` and a branch
in `_adapter_for()`:

```python
_SOLVER_NAMES = ("code_saturne", "stub", "code_aster", "mysolver")

    if normalized == "mysolver":
        from .mysolver import MySolverAdapter

        return MySolverAdapter()
```

Select it in the campaign's `csauto.toml` (`solver = "mysolver"`).
`csauto prepare` records it in `RUNS/campaign.json`, so later commands use the
right adapter from any directory.

## 3. Test it

Add a `sample_mysolver(case_dir)` function to
`tests/unit/test_adapter_conformance.py`. It writes a small **finished** case,
the way your solver leaves it: the input file, the logs, the results. The
conformance suite then checks your adapter against it and says, in plain
words, what the dashboard would miss: an unknown tab, a log file the Log Tail
offers but cannot open, a capability with nothing behind it, a finished run
that does not read as DONE.

```
pytest tests/unit/test_adapter_conformance.py -q
```

Then run a real campaign: `csauto prepare`, `csauto run`, `csauto status`,
and `csauto serve` to look at the dashboard. If your solver has a docker
image, add it to `tests/integration/test_docker_solvers.py`, which runs the
shipped examples for real when `CSAUTO_DOCKER_TESTS=1` is set.

`csauto doctor RUNS` shows what your adapter offers:

```
[OK] solver mysolver: panels status, tail, errors
[OK] solver mysolver: capabilities none
[OK] solver mysolver: runtimes docker, native, singularity
```

## 4. Fill the dashboard

The dashboard shows the tabs listed in `dashboard_panels`, in this order:
`status`, `residuals`, `probes`, `performance`, `compare`, `tail`, `errors`.
Status, Log Tail and Recent Errors work for every solver. List another tab
once your adapter feeds it; the conformance suite refuses a tab nothing feeds.

| Tab | What to add |
|---|---|
| Log Tail | Nothing. It offers `csauto.stdout` and `csauto.stderr` (the solver's console output) plus every `*.log` file of the latest run. Set `tail_file_names` to put your main logs first; entries may be globs, such as `"*.mess"`. |
| Recent Errors | Nothing. It scans `anomaly_file_names` for crashes, tracebacks, `error:` lines and warnings. Add your solver's own markers with `anomaly_patterns` (labels `"error"` or `"warn"`) and silence false positives with `anomaly_ignore_patterns`. The Log Tail colours lines with the same patterns. |
| Compare | `compare_kinds`: `CompareKind(value, label)` entries. The value is a name handed to `locate_case_file`, so it can be an alias for a file whose name changes per case (code_aster maps `"export"` to the case's `.export`). The first entry is the default. |
| Residuals | `find_residuals_files` returning CSV files with an `iteration` column and one column per residual, or `parse_live_residuals` returning rows parsed from a log. `default_residual_columns` names the curves shown first. |
| Probes | `list_probe_files` and `locate_probe_files`. Time series need a `t` or `time` column. Files are read as comma-separated CSV; override `read_probe_file(path, max_rows)` for another format (return at most `max_rows` rows when it is set: 0 means only the column names are needed). `list_profile_files` adds spatial profiles. |
| Timing Snapshot | `performance_columns` (`PerfColumn(key, label, kind)`, kind `"time"`, `"int"`, `"float"` or `"text"`), `find_performance_log`, and `parse_performance` returning values under those keys. `csauto perf` exports the same columns. |

The status table's **Last Iter** column comes from `read_progress`.

**Actions.** Run, Kill and Clean work for every solver. These ones appear
only when the adapter provides them:

| Button | What to add |
|---|---|
| Restart | `build_restart_args` and `restart_modes`: `RestartMode(name, label, value_label, value_kind)` entries, one per way to restart (code_saturne offers additional iterations or additional physical time). The dialog asks for a value when `value_label` is set. |
| Live control | `control_actions` (`ControlAction(name, label, value_label, value_kind)`) and `apply_control`. They appear in the dashboard's control menu and as `csauto control RUNS CASE ACTION [VALUE]`. |
| Open GUI | `gui_argv(setup_path)`: the arguments that open the solver's GUI on the setup file. |

**Branding.** Point `logo_file` at an SVG for the dashboard header and
`icon_file` at a square SVG for the browser tab; keep them in
`csauto/solvers/logos/`. Without them the header shows the solver's name.

## Recipes

### The solver prints its verdict in a log

Override `detect_outcome` and let `csauto.logs.scan_outcome` do the reading:
it looks at the end of each file, skips files written before the current run
started, and returns DONE, FAILED or None (no verdict yet).

```python
DONE = (re.compile(r"Normal end of run"),)
FAILED = (re.compile(r"Fatal error"),)

def detect_outcome(self, case_dir, start_time=None):
    return scan_outcome([case_dir / "csauto.stdout"], start_time, DONE, FAILED)
```

A run stays RUNNING until its process or Slurm job is gone, even after the
verdict is printed; the verdict then decides the status. When the logs give
no verdict, csauto falls back to the exit status.

### The image needs its environment activated

Set `container_setup` to the shell commands to run in the container before
the solver (code_aster: `"[ ! -f /opt/activate.sh ] || source /opt/activate.sh"`, run by `bash`). When the image has no
ENTRYPOINT, csauto starts the solver with `--entrypoint`; an image whose own
ENTRYPOINT starts the solver gets only `run_argv`, so that script sets up the
environment instead of `container_setup`.
For native runs, the solver must already be on PATH, or `saturne_bin` in
`csauto.toml` must point to it.

### Results go in one folder per run, or straight into the results folder

`list_run_dirs` returns the folders that each hold one run's results. Clean
only ever deletes these folders, and "Keep latest N" counts them. The default
lists the subfolders of `results_dirname`, which suits solvers that create a
new folder per run (code_saturne's `RESU/<run_id>`). If your solver writes
everything into `results_dirname` itself, return `[self.results_root(case_dir)]`
(code_aster does): each case then holds one run, and a new run replaces it.

`locate_case_file(case_dir, name)` turns the names used by the Log Tail,
Recent Errors and Compare into files. The default resolves paths relative to
the case folder; extend it when your logs live in run folders (see
`StubAdapter` and `CodeSaturneAdapter`). These names can come from API
requests: build paths with `pathutil.safe_subpath(folder, name)`, which refuses
`..` and absolute paths, as the stub does. csauto also ignores any file you
return from outside the case folder.

### The solver needs a file written at launch

Do it in `prepare_launch(case_dir, nprocs, nt)`, called right before each
launch. Never modify a file that came from the template: `csauto prepare`
compares those to the template to detect changed cases. Write a new file
instead. code_aster writes `.csauto.export`, a copy of the case's export
carrying the run's `n` and `nt`, and runs that one.

### Template files contain braces

`{name}` in a template is a DOE placeholder. When braces belong to the input
language (Python f-strings or sets in a code_aster `.comm` file), write `\{i}`
to keep a literal `{i}`. To keep csauto away from a whole file, list its name
in `template_input_names`.

### Slurm

By default csauto submits the run command with `sbatch --wrap`, requesting
`--ntasks` from `n` and `--cpus-per-task` from `nt`. When your solver needs a
real batch script (code_saturne's apptainer runs stage, compute and finalize
in separate steps), return it from `build_slurm_script`. `mpi_env` turns the
`mpi_exec_options` setting into environment variables for the solver.

### Runtimes

`supported_runtimes` lists the runtimes the solver can use (`native`,
`docker`, `singularity`). Auto mode only picks among them, and asking for
another one is refused before anything starts. Containers mount the campaign
folder at `container_root` (`/csauto` by default). Keep it out of the image
user's home directory, or the solver's own settings and caches end up in the
campaign folder.

## Reference

Required (no default):

| Member | Meaning |
|---|---|
| `name` | value of `solver` in `csauto.toml` |
| `native_bin_name` | executable looked up in PATH by the native runtime |
| `container_bin_name` | executable started inside container images |
| `default_docker_image` | image used when `csauto.toml` sets no `docker_image` |
| `results_dirname` | results folder inside each case |
| `dashboard_panels` | dashboard tabs |
| `run_argv(case_dir, nprocs, nt, run_args)` | arguments after the executable |
| `find_setup_file(template_dir)` | the main input file |

Optional, with their default:

| Member | Default |
|---|---|
| `supported_runtimes` | native, docker and singularity |
| `container_root` | `"/csauto"` |
| `container_setup` | none |
| `shared_dir_names`, `readonly_shared_dir_names` | none: folders next to `TEMPLATE` shared by every case (code_saturne: `MESH`, `POST`), reached as `../MESH` from a case |
| `template_input_names` | none: files never rendered |
| `tail_file_names` | `csauto.stdout`, `csauto.stderr` |
| `anomaly_file_names` | `csauto.stderr`, `csauto.stdout` |
| `anomaly_patterns`, `anomaly_ignore_patterns` | none |
| `cleanup_log_names` | `csauto.stdout`, `csauto.stderr`: logs Clean may shorten |
| `compare_kinds`, `performance_columns`, `control_actions`, `restart_modes`, `default_residual_columns` | none |
| `logo_file`, `icon_file` | none |
| `prepare_launch` | does nothing |
| `detect_outcome` | no verdict: the exit status decides |
| `read_progress`, `read_restart_origin` | no value |
| `locate_case_file` | paths relative to the case folder |
| `list_run_dirs` | subfolders of `results_dirname`, newest first |
| `find_run_config` | none: a second rendered input file (code_saturne's `run.cfg`) |
| `build_slurm_script`, `mpi_env` | `sbatch --wrap`, no variables |
| `doctor_checks` | every case has a setup file |
| analytics methods | empty results |

`capabilities` (what the dashboard and the API allow), `performance_fields`
and `default_compare_kind` are derived from the members above; declaring
them is an error.
