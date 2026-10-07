# Tests

This document explains how to run and extend test coverage in `csauto`.

## Run full test suite

```bash
pytest -q
```

## Run by scope

```bash
pytest tests/unit -q
pytest tests/integration -q
pytest tests/runner -q
pytest tests/web -q
```

## Structure

- `tests/unit/` - pure logic and parsing behavior
- `tests/integration/` - filesystem-oriented end-to-end slices
- `tests/runner/` - launch/status/kill orchestration behavior
- `tests/web/` - HTTP API behavior

## Solver adapters

- `tests/unit/test_adapter_conformance.py` runs the same contract checks on
  every registered solver adapter, against a sample finished case written by a
  `sample_<solver>` function. A new adapter adds its own sample there (see
  [Adding a new solver](../docs/adding-a-solver.md)).
- `tests/unit/test_solver_boundary.py` scans every module outside
  `csauto/solvers/` for code_saturne file names and log markers.
- `tests/integration/test_docker_solvers.py` runs the shipped code_saturne and
  code_aster examples for real in their docker images. It is opt-in:

```bash
docker pull simvia/code_saturne
docker pull simvia/code_aster:17.4.0
CSAUTO_DOCKER_TESTS=1 pytest tests/integration/test_docker_solvers.py -q
```

These runs write their cases under `CSAUTO_DOCKER_TEST_DIR` (default
`~/.cache/csauto-docker-tests`) instead of `tmp_path`, because Docker Desktop on
WSL2 cannot mount `/tmp`.

## Testing guidelines

- test public APIs and public behavior
- avoid brittle full-string matching for HTML/SVG
- assert invariants and outcomes
- for API changes, cover both success and error status paths

## Fixtures

Common fixtures are defined in `tests/conftest.py`:

- `runs_dir`
- `case_factory`: writes a case with `DATA/setup.xml` and the `doe_row.csv`
  by which csauto recognizes a case folder
- `registry_factory`

## When adding tests

Checklist:

1. place tests in the right scope folder
2. use `test_*.py` naming
3. describe expected behavior in test names
4. use `tmp_path` for all temporary I/O
5. run at least the impacted subset
