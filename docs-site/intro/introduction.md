---
title: csauto documentation
---

**csauto** automates [code_saturne](https://www.code-saturne.org/) and [code_aster](https://www.code-aster.org/) simulation campaigns: it generates cases from a parameter table and a template, runs them locally or on Slurm, and follows them in a dashboard.

The [VS Code extension](/extension) is the primary interface and embeds the dashboard in your editor, also over Remote-SSH on HPC clusters. The [CLI](/cli) is the companion for headless machines and scripts, and `csauto serve` shows the same dashboard in a browser.

## Where to start

- **New here?** Read [Core concepts](/concepts), then follow the [Quickstart](/quickstart).
- **Using VS Code?** The [extension guide](/extension) covers install, New Campaign, the Campaigns view and settings.
- **Looking something up?** See [Configuration](/config), the [DOE format](/doe-format), the [CLI reference](/cli) and the [HTTP API](/api).
- **Something broke?** [Troubleshooting](/troubleshooting) lists error messages and fixes.
- **Adding a solver?** [Adding a solver](/adding-a-solver) explains the adapter class.

## Install in one minute

In VS Code, install [csauto from the Marketplace](https://marketplace.visualstudio.com/items?itemName=simvia.csauto) (or run `code --install-extension simvia.csauto`), then click the **csauto** icon and choose **New Campaign…**.

Without VS Code:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/simvia-tech/csauto/main/install.sh)"
```

Python 3.11+ is required in both cases.
