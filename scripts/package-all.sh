#!/usr/bin/env bash
# Build every .vsix of a release: one per platform carrying its dependency
# wheels (offline setup), and a generic one for the other platforms, which
# downloads them from PyPI. Used by the release workflow and scripts/publish.sh.
set -euo pipefail

cd "$(dirname "$0")/.."

rm -f csauto-*.vsix
npm ci
npm run package
npm run bundle
export CSAUTO_SKIP_PREPUBLISH=1
for target in linux-x64 linux-arm64 darwin-x64 darwin-arm64; do
    bash scripts/bundle-deps.sh "$target"
    npx --yes @vscode/vsce package --target "$target"
done
rm -rf bundled/wheels
npx --yes @vscode/vsce package
