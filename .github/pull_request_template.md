## What

<!-- Brief description of the change -->

## Why

<!-- Motivation: what problem does this solve? -->

## How to test

<!-- Steps for reviewers to verify the change -->

## Checklist

- [ ] Tests pass locally (`pytest -q`)
- [ ] Frontend builds (`cd frontend && pnpm build`)
- [ ] No linting errors (`ruff check . && ruff format --check .`)
- [ ] `frontend/dist/` is up-to-date (committed after `pnpm build`)
