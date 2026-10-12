#!/usr/bin/env bash
# Build every .vsix and publish them all to the VS Code Marketplace, which then
# serves each user the package for their platform (the generic one otherwise).
# Needs a vsce login (vsce login simvia) or VSCE_PAT.
#
# Usage: scripts/publish.sh [--pre-release]
set -euo pipefail

cd "$(dirname "$0")/.."

VERSION=$(node -p "require('./package.json').version")
# The Marketplace only takes major.minor.patch; ship previews with --pre-release.
if [[ ! "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "The Marketplace does not accept version $VERSION: use major.minor.patch." >&2
    exit 1
fi
if [ -n "$(git status --porcelain)" ]; then
    echo "The working tree has uncommitted changes: commit or stash them first." >&2
    exit 1
fi

bash scripts/package-all.sh
ls -lh csauto-*.vsix
read -r -p "Publish csauto $VERSION ($(ls csauto-*.vsix | wc -l) packages) to the Marketplace? [y/N] " answer
[ "$answer" = "y" ] || exit 1
npx --yes @vscode/vsce publish "$@" --packagePath csauto-*.vsix
