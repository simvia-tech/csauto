# Developing the csauto VS Code extension

How to set up a development environment to build, run and debug the extension together with the Python backend and the Svelte dashboard.

For installation and usage see the [README](README.md); for contribution rules see [CONTRIBUTING.md](CONTRIBUTING.md).

## Layers

| Layer | Technology | Location | Debugged with |
|---|---|---|---|
| Extension host | TypeScript | `src/` | the `Run Extension` launch configuration (F5) |
| New Campaign webview | Svelte | `webviews/new-campaign/` | Webview Developer Tools |
| Dashboard | SvelteKit | `frontend/` (builds into `csauto/_frontend/`, not committed) | Webview Developer Tools, or `pnpm dev` in a browser |
| Backend | Python 3.11+ (FastAPI) | `csauto/` | `debugpy` |

The extension starts one `csauto serve` per campaign and shows its dashboard in a webview that talks to the backend over HTTP (`/api`).

## Prerequisites

- Python 3.11+
- Node.js LTS (for the extension and the New Campaign webview)
- pnpm (`corepack enable`), used by `frontend/`
- Docker, Apptainer/Singularity, or a native solver install, only to run real simulations. UI and extension work needs none of them.

Useful VS Code extensions: Python, Python Debugger, Svelte for VS Code, ESLint.

## Setup

```bash
git clone https://github.com/simvia-tech/csauto.git
cd csauto

# Python backend, editable install: code changes are picked up without reinstalling
python3 -m venv .venv
source .venv/bin/activate
pip install -e ".[dev,web]"
sh scripts/setup-hooks.sh

# Extension and New Campaign webview (npm, root package-lock.json)
npm install

# Dashboard (pnpm, frontend/pnpm-lock.yaml)
cd frontend && pnpm install && cd ..
```

Run **Python: Select Interpreter** in VS Code and pick `.venv`. Keep one package manager per folder: npm at the root, pnpm in `frontend/`. If `node_modules` ends up mixed, delete it and reinstall with the right tool.

Check the build works in a plain terminal before the first F5:

```bash
npm run watch
```

It runs four watchers in parallel (esbuild and `tsc` for `src/`, the dashboard rebuild into `csauto/_frontend/`, the New Campaign webview). Stop it with Ctrl+C.

## Running the extension

1. Start `npm run watch` in a terminal (or run the `npm: watch` task).
2. Select **Run Extension** and press **F5**. An Extension Development Host window opens with the extension loaded. Open a folder holding a campaign in it, for example one copied from `examples/`.
3. After a change, reload the Development Host with **Ctrl+R** (**Cmd+R** on macOS).

In development the managed runtime uses an editable install of the checkout: Python changes apply after **Restart Server** on the campaign, dashboard changes after **Reload Dashboard**.

The `.vscode/launch.json` in the repo runs `npm: compile` before launching. For a faster loop add `"preLaunchTask"` pointing to a background `watch` task, or keep `npm run watch` running as above and remove the pre-launch task from your local copy.

Logs: **Output** panel, the `csauto` channel (extension) and one `csauto · <campaign>` channel per running server. Add `--show-api-logs` to the `csauto.serveArgs` setting to log every API call.

## Debugging

**Extension host**: breakpoints in `src/**/*.ts` are hit through source maps while the `Run Extension` configuration runs.

**Webviews**: in the Development Host, run `Developer: Open Webview Developer Tools` for the Chromium DevTools (console, network calls to `/api`, sources).

**Backend alone**: add this configuration to your `.vscode/launch.json` and point `cwd` to a campaign:

```jsonc
{
  "name": "csauto serve (backend only)",
  "type": "debugpy",
  "request": "launch",
  "module": "csauto",
  "args": ["serve", "RUNS", "--port", "8000"],
  "cwd": "${workspaceFolder}/examples/codeaster-cube",
  "justMyCode": false
}
```

**Dashboard with hot reload**, against a backend running on port 8000:

```bash
# terminal 1
cd examples/codeaster-cube && csauto serve RUNS

# terminal 2
cd frontend && pnpm dev     # proxies /api to http://127.0.0.1:8000
```

## Tests and checks

```bash
pytest -q                        # whole Python suite
pytest tests/unit -q             # also: integration, runner, web
pytest tests/unit/test_doe.py::test_name -q

ruff check . && ruff format --check .

npm run check-types              # TypeScript
npm run check:webview            # New Campaign webview
cd frontend && pnpm check && pnpm format:check

csauto doctor RUNS               # checks the solver runtime and campaign configuration
```

Docker tests against real solver images are opt-in: `CSAUTO_DOCKER_TESTS=1 pytest tests/integration/test_docker_solvers.py -q`.

## Packaging

`npm run package` builds the production bundle, `npm run bundle` builds the wheel shipped in the `.vsix`, `scripts/package-all.sh` builds every per-platform `.vsix`, and `scripts/publish.sh` publishes them. CI builds the dashboard for every wheel and `.vsix`, so users never need Node.js.

## Releasing

A release is a merge to `main`; the GitHub workflows do the rest.

1. On the branch, put the new section in `CHANGELOG.md` (`## [1.0.0-rc.3] - YYYY-MM-DD`, with a one-line summary under it), then bump `VERSION`, both `package.json` files, `package-lock.json`, the `softwareVersion` in `site/index.html` and the version lines in `ROADMAP.md`. The commit is named `docs: prepare release <version>`.
2. Open a pull request to `main`: the CI workflow (lint, Python tests on 3.11 to 3.13, frontend checks, extension build) must pass.
3. Merge it with a merge commit or a squash, not a fast-forward. The Release workflow runs after CI succeeds on `main` and only looks at whether `VERSION` changed in the tip commit against its first parent.
4. The Release workflow then reads the version from `VERSION`, takes the matching `CHANGELOG.md` section as the release notes (it fails when there is none), builds every `.vsix` and the wheel with `scripts/package-all.sh`, and creates the `v<version>` tag and GitHub release. A version with a hyphen (`1.0.0-rc.3`) is published as a pre-release. Nothing happens if the tag already exists.

Publishing the `.vsix` files to the marketplaces is a separate manual step (`scripts/publish.sh`).

## Troubleshooting

| Symptom | Likely cause and fix |
|---|---|
| `npm-run-all: not found` when running `watch` | Dependencies are missing at the repo root: run `npm install`. |
| A `watch:*` script fails with "command not found" | Install dependencies in `frontend/` too (`pnpm install`). |
| The dashboard is blank or says it is not built | `csauto/_frontend/` is missing: `cd frontend && pnpm build`, or let `npm run watch` build it. |
| Breakpoints in `.ts` files are not hit | Check `outFiles` matches `dist/` and that the watch task is running. |
| Python changes have no effect | Use **Restart Server** on the campaign; check the editable install points to your checkout (`pip show csauto`). |
| Python breakpoints are not hit | Wrong interpreter (select `.venv`), or `justMyCode` is `true`. |
| Simulations fail to start | Run `csauto doctor RUNS` to check the runtime. |
| Many cases are queued and never start | A queued case waits while less than 10% of the RAM is available; see `CSAUTO_MIN_FREE_MEMORY_PERCENT` in [docs/config.md](docs/config.md). |
