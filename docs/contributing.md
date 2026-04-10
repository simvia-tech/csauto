# Contributing

## Development principles

- keep changes focused and reviewable
- prefer explicit behavior and clear tests
- update docs when UI/CLI/API behavior changes

## Local checks

```bash
csauto --help
pytest -q
```

Useful subsets:

```bash
pytest tests/unit -q
pytest tests/integration -q
pytest tests/runner -q
pytest tests/web -q
```

## Coding style

- simple Python, standard library first
- 4-space indentation, snake_case, explicit type hints
- avoid repository-wide formatting unless needed

## Feature workflow

1. implement or adjust public behavior
2. add/update tests
3. update docs
4. run relevant test suites

## Commit and PR guidelines

- small commits with imperative titles
  - example: `Add Slurm mpi_exec_options injection`
- PR description should include:
  - problem statement
  - behavior changes
  - tests executed
  - docs/UI impact

## UI changes

When UI changes are visible:

- add screenshots under [`assets/`](./assets/)
- reference screenshots from [`web-ui.md`](./web-ui.md)

## Security

See [`../SECURITY.md`](../SECURITY.md) for vulnerability reporting policy.
