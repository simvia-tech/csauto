#!/bin/sh
#
# Install project git hooks.
# Run once after cloning: sh scripts/setup-hooks.sh
#

REPO_ROOT="$(git rev-parse --show-toplevel)"
TARGET="$REPO_ROOT/.git/hooks/pre-commit"
SOURCE="$REPO_ROOT/hooks/pre-commit"

if [ -e "$TARGET" ]; then
    echo "Warning: $TARGET already exists. Backing up to ${TARGET}.bak"
    cp "$TARGET" "${TARGET}.bak"
fi

ln -sf "$SOURCE" "$TARGET"
echo "Installed pre-commit hook."
