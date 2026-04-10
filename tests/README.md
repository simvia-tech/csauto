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

## Testing guidelines

- test public APIs and public behavior
- avoid brittle full-string matching for HTML/SVG
- assert invariants and outcomes
- for API changes, cover both success and error status paths

## Fixtures

Common fixtures are defined in `tests/conftest.py`:

- `runs_dir`
- `case_factory`
- `registry_factory`

## When adding tests

Checklist:

1. place tests in the right scope folder
2. use `test_*.py` naming
3. describe expected behavior in test names
4. use `tmp_path` for all temporary I/O
5. run at least the impacted subset
