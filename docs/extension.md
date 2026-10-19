# VS Code extension

The extension is the primary way to use csauto. It runs the csauto server in the background on a free port and embeds the dashboard in an editor panel. Over Remote-SSH and in WSL, VS Code forwards the port automatically.

## Install

Install **csauto** from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=simvia.csauto): open the Extensions view, search for "csauto" and click **Install**, or run:

```bash
code --install-extension simvia.csauto
```

Then open a folder, click the **csauto** icon in the activity bar, and create a campaign with **New Campaign…**, or open the dashboard of a campaign the folder already holds. With Remote-SSH or WSL, install the extension on the remote side. Windows is supported through WSL.

The Marketplace serves the package for your platform (`linux-x64`, `linux-arm64`, `darwin-arm64` or `darwin-x64`) with csauto's Python dependencies included, so the setup works offline. For a machine without Marketplace access, download the matching `.vsix` from the [releases page](https://github.com/simvia-tech/csauto/releases) and run **Extensions: Install from VSIX**. The generic `csauto-<version>.vsix` downloads the dependencies from PyPI instead.

Python 3.11+ must be available on the machine. On first use the extension creates a private Python environment in its storage and installs the csauto it ships with, so extension and engine versions never drift. Each WSL distribution or remote host gets its own.

The **Setup Guide** (a VS Code walkthrough, opened on install and available from the Setup view) checks what csauto needs, one step each with a fix: Python 3.11 or newer, Python's `venv` module (a separate `python3.X-venv` package on Debian and Ubuntu), csauto's environment, then the solvers (Docker running, the solver on the PATH, or Apptainer/Singularity), then a first campaign.

## Campaigns

A **campaign** is a folder holding a template case (`TEMPLATE/`), a DOE table (`doe.csv`, one row per case, one column per `{placeholder}` of the template) and a `csauto.toml` naming its solver and runtime. csauto generates one case per row into `RUNS/`, runs them, and follows them in the dashboard. See [Core concepts](/concepts) for the model.

### New Campaign

**New Campaign…** (the + button of the Campaigns view) opens a page in the editor that fills top to bottom:

1. **Solver**: every installed solver adapter is offered.
2. **Start from**: the solver's example (ready to run), **my files**, a case folder you already have, or nothing (an empty `TEMPLATE/` to fill yourself).
3. **Your files**: one picker per input the solver needs. code_aster asks for the command file (`.comm`), the meshes, and optionally an `.export`: csauto writes one for the picked files or points yours to them. code_saturne asks for the setup file (it becomes `DATA/setup.xml`), the meshes, and optionally `run.cfg` and user sources. Meshes go to the campaign's shared `MESH/` folder.
4. **Parameters**: the `{placeholders}` found in your files, and a table with one row per case. Fill it by hand, paste rows from a spreadsheet or a CSV file into any cell, or **Import a CSV…**: the file's header names the columns, the reserved ones (`case_id`, `csauto_mpi`, `csauto_omp`) are kept, and columns the case does not use or placeholders the file lacks are listed under the table. **Generate…** builds the table from a list of levels or a range per column with the methods of [`csauto doe`](/doe-format#generating-doecsv-with-csauto-doe) (full factorial, Latin hypercube, Sobol, central composite), and can add `csauto_mpi` / `csauto_omp` columns for a scaling study. A case without placeholders gets one `baseline` case that runs it as is; importing a CSV with only reserved columns runs it several times with different resources. To vary a value across cases, replace it with `{name}` in your files and add a `name` column to `doe.csv`.
5. **Campaign**: the folder name (a free one is suggested), the runtime (those found on your machine are marked), the solver version, and whether to generate the cases right away.

The solver version is a Docker image tag (the installed ones, then every tag on Docker Hub with its size and date, downloaded when the campaign is created), the native executable, or a `.sif` image.

### The Campaigns view

One row per campaign, with its solver and version, and a Dashboard button once its cases exist. Expanding a campaign shows its steps:

- **DOE table** (its row count) and **Template case**: open them to edit the study.
- **Solver**: the version and runtime. Click to change them (the dashboard server restarts to apply it). A warning appears here when the environment check finds a problem.
- **Cases**: what is left to generate ("2 new rows"). Click to run `csauto prepare`, which keeps the cases already generated.
- **Open Dashboard**, and **About this campaign** when the folder has a README.

Right-click a campaign for the rest: Check Environment, Edit csauto.toml, Reveal in Explorer, Stop or Restart Dashboard Server, Show Server Logs, **Delete Generated Cases…** (moves `RUNS/` to the trash) and **Delete Campaign…** (moves the whole folder to the trash). Both deletions refuse while cases are running or queued.

Several campaigns, even with different solvers, can have their dashboards open side by side. Each is backed by its own server and `csauto.toml`, with a panel titled by solver and campaign. Dashboard servers start when a dashboard opens, and **csauto: Stop All Servers** stops them all.

## The dashboard

The embedded dashboard follows your editor theme and is the same one `csauto serve` shows in a browser. See the [Web UI guide](/web-ui) for every panel.

**Run notifications**: a notification fires when a running case finishes (`DONE` or `FAILED`) in any campaign, with a shortcut back to its dashboard.

## Settings

| Setting | Default | Purpose |
| --- | --- | --- |
| `csauto.pythonPath` | empty | Use your own Python with csauto installed instead of the managed runtime |
| `csauto.port` | `0` | Port of the csauto server (`0` picks a free one) |
| `csauto.serveArgs` | `[]` | Extra arguments for `csauto serve`, such as `--show-api-logs` |
| `csauto.notifyOnRunCompletion` | `true` | Notify when cases finish or fail |
| `csauto.enableTelemetry` | `true` | Anonymous usage statistics (also needs VS Code's own telemetry on) |

## The CLI alongside

**Install csauto CLI** in the Setup view writes a `csauto` shim to `~/.local/bin`, backed by the extension's managed runtime, so the terminal and the extension share one engine. It warns when a shell alias would shadow it, and **csauto: Disable the csauto Shell Alias** comments that alias out. For machines without VS Code, see the [CLI reference](/cli).

## Troubleshooting

If the setup fails or a server does not start, **csauto: Show Server Logs** shows what went wrong. See also [Troubleshooting](/troubleshooting).
