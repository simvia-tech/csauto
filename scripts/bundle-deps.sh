#!/usr/bin/env bash
# Download the dependency wheels of the bundled csauto wheel for one VS Code
# target, for every Python the extension supports, into bundled/wheels. The
# extension installs from them offline; a .vsix without them downloads its
# dependencies from PyPI instead.
#
# Usage: scripts/bundle-deps.sh <linux-x64|linux-arm64|darwin-x64|darwin-arm64>
# Run after scripts/bundle-wheel.sh.
set -euo pipefail

cd "$(dirname "$0")/.."

TARGET="${1:?usage: scripts/bundle-deps.sh <linux-x64|linux-arm64|darwin-x64|darwin-arm64>}"
case "$TARGET" in
    # manylinux 2.17 (glibc 2.17) keeps old cluster distributions supported.
    linux-x64) PLATFORMS=(manylinux_2_17_x86_64 manylinux2014_x86_64) ;;
    linux-arm64) PLATFORMS=(manylinux_2_17_aarch64 manylinux2014_aarch64) ;;
    darwin-x64) PLATFORMS=(macosx_10_12_x86_64) ;;
    darwin-arm64) PLATFORMS=(macosx_11_0_arm64) ;;
    *) echo "Unknown target: $TARGET" >&2; exit 1 ;;
esac
PYTHONS=(311 312 313 314)

PY=python3
[ -x .venv/bin/python ] && PY=.venv/bin/python

WHEEL=$(ls bundled/csauto-*.whl)
rm -rf bundled/wheels
for VERSION in "${PYTHONS[@]}"; do
    "$PY" -m pip download --quiet --dest bundled/wheels --only-binary=:all: \
        --implementation cp --python-version "$VERSION" --abi "cp$VERSION" \
        "${PLATFORMS[@]/#/--platform=}" "$WHEEL[web]"
done
rm -f bundled/wheels/csauto-*.whl
echo "Bundled $(ls bundled/wheels | wc -l) dependency wheels for $TARGET ($(du -sh bundled/wheels | cut -f1))"
