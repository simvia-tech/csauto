# Contributing to csauto

Thank you for your interest in contributing to **csauto**, a project developed by **Simvia SAS** ! We welcome contributions from everyone, whether it's reporting bugs, suggesting features, improving documentation, or submitting code.

Please take a moment to review this document to understand how you can contribute effectively.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to ensure a positive and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

- **Check existing issues**: Before opening a new issue, search the [issue tracker](https://github.com/simvia-tech/csauto/issues) to avoid duplicates.
- **Open a new issue**: If the bug hasn't been reported, create a new issue with a clear title and description. Include:
  - Steps to reproduce the issue.
  - Expected and actual behavior.
  - Python version and OS.
  - Relevant log output.

### Suggesting Features

- Open an issue with the label `enhancement`.
- Describe the feature, its use case, and why it would be beneficial.
- Include examples or references if possible.

### Adding a New Solver

Merge requests adding support for new solvers are gladly welcome! csauto's solver-specific logic (commands, log parsing, file conventions, dashboard columns and panels) lives behind a single `SolverAdapter` class, so supporting a new solver means writing one adapter — no changes to the orchestration core or the frontend. Follow the step-by-step guide in [docs/adding-a-solver.md](docs/adding-a-solver.md), and use the built-in `stub` adapter and `tests/unit/test_solver_boundary.py` as references for the expected shape.

### Improving Documentation

- Fix typos, clarify instructions, or add missing details.
- Open a pull request (PR) with your changes.

### Submitting Code

1. **Fork the repository** and create a new branch from `main`.
2. **Follow the project's coding style** (PEP 8, 4-space indentation, snake_case, explicit type hints).
3. **Write tests** for new features or bug fixes.
4. **Commit your changes** with a conventional commit prefix in imperative mood (e.g., `feat: add Slurm retry logic`).
5. **Open a pull request** to the `main` branch. Include:
   - A clear title and description of the changes.
   - Reference any related issues (e.g., `fixes #123`).
   - Tests executed.
   - Documentation or UI impact.

### Development setup

Please refer to the [README](README.md) to setup your development environment.

After cloning, install the git hooks:

```bash
sh scripts/setup-hooks.sh
```

This installs a pre-commit hook that automatically rebuilds `csauto/_frontend/` (the packaged dashboard) when frontend source files are staged. The build requires `pnpm` and `node_modules` to be installed (`cd frontend && pnpm install`).

### Pull Request Guidelines

- Ensure your code passes all tests.
- Keep PRs focused and concise. Large changes should be broken into smaller PRs.
- Update the [Changelog](CHANGELOG.md) if your changes affect functionality.
- A maintainer will review your PR and may request changes.

### Recognition

All contributors will be acknowledged in the project's [README](README.md) file.

### Contact

For questions or feedback, reach out to us:

Email: [ulysse.bouchet@simvia.tech](mailto:ulysse.bouchet@simvia.tech) or [florian.hermet@simvia.tech](mailto:florian.hermet@simvia.tech).
