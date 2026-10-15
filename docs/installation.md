# Installation

csauto runs as a VS Code extension (recommended) or as a command-line tool with a browser dashboard. Both need **Python 3.11+** on the machine and a runtime for your solver (see [Prerequisites](#prerequisites)).

## VS Code extension (recommended)

Install **csauto** from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=simvia.csauto), or run:

```bash
code --install-extension simvia.csauto
```

The extension embeds the dashboard directly in the editor, including over [Remote-SSH](https://code.visualstudio.com/docs/remote/ssh) sessions on HPC clusters, and manages its own Python environment: no manual csauto install is needed. With Remote-SSH or WSL, install the extension on the remote side. Windows is supported through WSL.

For a machine without Marketplace access, download the `.vsix` for your platform from the [releases page](https://github.com/simvia-tech/csauto/releases) and use **Extensions: Install from VSIX**: `linux-x64` for most Linux machines and WSL, `linux-arm64`, `darwin-arm64` for Apple silicon Macs, `darwin-x64` for Intel Macs. These carry csauto's Python dependencies and set up offline. The generic `csauto-<version>.vsix` downloads them from PyPI instead.

Then open a folder, click the **csauto** icon in the activity bar and create a campaign with **New Campaign…**. See the [extension guide](./extension.md) for the details.

## Headless or HPC without VS Code (CLI and browser)

Core features have **no external dependencies** (pure standard library). The web dashboard needs a few extra packages, which the script installs.

```bash
# One-line install (latest release into ~/.local/share/csauto, with a venv and a shell alias)
bash -c "$(curl -fsSL https://raw.githubusercontent.com/simvia-tech/csauto/main/install.sh)"

# Reload your shell
source ~/.bashrc   # or: source ~/.zshrc
```

To update an existing installation, re-run the same command: it installs the latest release over the existing one. Neither git nor Node.js is needed.

Each [release](https://github.com/simvia-tech/csauto/releases) also ships a self-contained wheel (dashboard included) for scripted or CI installs:

```bash
pip install "csauto-<version>-py3-none-any.whl[web]"
```

Verify the installation:

```bash
csauto --help
```

### Manual installation (contributors or custom locations)

```bash
git clone https://github.com/simvia-tech/csauto.git ~/tools/csauto
cd ~/tools/csauto

# Option A: use the install script (creates venv, adds alias)
./install.sh

# Option B: manual setup
python3 -m venv .venv && source .venv/bin/activate
pip install -e ".[web]"

# Build the dashboard once (a clone does not include it; needs Node.js and pnpm)
cd frontend && pnpm install && pnpm build
```

The `csauto` command is available inside the venv. To use it globally, add an alias:

```bash
echo "alias csauto='$HOME/tools/csauto/.venv/bin/csauto'" >> ~/.bashrc
```

To install without a venv: `./install.sh --no-venv`.

## Prerequisites

You need at least one runtime for your solver:

| Runtime       | Requirement                                                                                              |
|---------------|----------------------------------------------------------------------------------------------------------|
| `native`      | The solver's executable (`code_saturne`, or `run_aster` for code_aster) in PATH or set via `solver_bin`  |
| `singularity` | Apptainer/Singularity and a `.sif` image                                                                 |
| `docker`      | Docker engine; the image defaults to the solver's own (`simvia/code_saturne`, `simvia/code_aster:17.4.0`) |

## Next steps

Follow the [Quickstart](./quickstart.md) for a complete walkthrough from zero to a running campaign.
