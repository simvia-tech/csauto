#!/usr/bin/env bash
# Build the csauto wheel that gets bundled into the .vsix.
# The extension installs it into its managed runtime venv on first use.
set -euo pipefail

cd "$(dirname "$0")/.."

PY=python3
[ -x .venv/bin/python ] && PY=.venv/bin/python

rm -rf bundled
"$PY" -m pip wheel --no-deps -w bundled . --quiet
echo "Bundled: $(ls bundled/*.whl)"
