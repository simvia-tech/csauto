<p align="center"><img src="assets/csauto-logo.png" alt="csauto logo" width="140" /></p>

<p align="center">
  <a href="https://simvia-tech.github.io/csauto/"><img src="https://img.shields.io/badge/website-csauto-1057C8" alt="Website" /></a>
  <a href="https://simvia-tech.github.io/csauto/docs/"><img src="https://img.shields.io/badge/docs-online-1057C8" alt="Docs" /></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=simvia.csauto"><img src="https://img.shields.io/badge/VS%20Code-Marketplace-1057C8" alt="VS Code Marketplace" /></a>
  <a href="https://github.com/simvia-tech/csauto/actions/workflows/pr.yml"><img src="https://github.com/simvia-tech/csauto/actions/workflows/pr.yml/badge.svg" alt="CI-CD" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-GPL%203.0-green" alt="License" /></a>
</p>

# csauto

Automate [code_saturne](https://www.code-saturne.org/) and [code_aster](https://www.code-aster.org/) simulation campaigns: generate hundreds of cases from one parameter table and a template, run them locally or on Slurm, and follow them in a dashboard inside VS Code.

![csauto in VS Code](assets/ui-overview.png)

## Install

**VS Code (recommended)**: install csauto from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=simvia.csauto), or run `code --install-extension simvia.csauto`. Then click the csauto icon in the activity bar and choose **New Campaign…**.

**Terminal or HPC, without VS Code**:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/simvia-tech/csauto/main/install.sh)"
```

Python 3.11+ and a solver runtime (native, Docker or Singularity) are needed in both cases. See the [installation guide](docs/installation.md).

## Quick start

From a folder holding a `doe.csv` (one row per case) and a `TEMPLATE/` case:

```bash
csauto prepare doe.csv TEMPLATE RUNS   # generate the cases
csauto doctor RUNS                     # check the environment
csauto serve RUNS                      # open the dashboard, then run from the Status panel
```

New to csauto? Follow the [Quickstart](docs/quickstart.md) and read the [core concepts](docs/concepts.md).

## Documentation

Full documentation: **https://simvia-tech.github.io/csauto/docs/**, built from [`docs/`](docs/).

[Installation](docs/installation.md) · [VS Code extension](docs/extension.md) · [Quickstart](docs/quickstart.md) · [Web UI](docs/web-ui.md) · [CLI](docs/cli.md) · [Configuration](docs/config.md) · [Troubleshooting](docs/troubleshooting.md) · [Telemetry](docs/telemetry.md)

## Contributing

Contributions are welcome, including support for new solvers: see [CONTRIBUTING.md](CONTRIBUTING.md), [DEVELOPMENT.md](DEVELOPMENT.md) and [adding a solver](docs/adding-a-solver.md).

## License

GPL-3.0, see [LICENSE](LICENSE). Made by [Simvia](https://simvia.tech).
