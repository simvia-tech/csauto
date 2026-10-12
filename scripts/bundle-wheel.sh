#!/usr/bin/env bash
# Build the dashboard, then the csauto wheel that carries it and gets bundled
# into the .vsix. The extension installs it into its managed runtime venv on
# first use.
set -euo pipefail

cd "$(dirname "$0")/.."

PY=python3
[ -x .venv/bin/python ] && PY=.venv/bin/python

pnpm --dir frontend install --frozen-lockfile
pnpm --dir frontend build

rm -rf bundled
"$PY" -m pip wheel --no-deps -w bundled . --quiet
echo "Bundled: $(ls bundled/*.whl)"
