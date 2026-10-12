#!/usr/bin/env bash
# csauto installer
#
# Fresh install (curl):
#   bash -c "$(curl -fsSL https://raw.githubusercontent.com/simvia-tech/csauto/main/install.sh)"
#
# Installs the latest GitHub release into ~/.local/share/csauto/.venv.
#
# Contributor install (editable, from a local clone):
#   ./install.sh
#
# Update (re-run the same command; the script detects the existing install):
#   bash -c "$(curl -fsSL https://raw.githubusercontent.com/simvia-tech/csauto/main/install.sh)"
#
# Options:
#   --no-venv        Install into the current Python environment instead of a venv
#   --no-telemetry   Disable anonymous usage telemetry

set -euo pipefail

REPO_SLUG="simvia-tech/csauto"
DEFAULT_INSTALL_DIR="$HOME/.local/share/csauto"
USE_VENV=true
NO_TELEMETRY=false

info()    { printf "[info]  %s\n" "$*"; }
success() { printf "[ok]    %s\n" "$*"; }
warn()    { printf "[warn]  %s\n" "$*"; }
error()   { printf "[error] %s\n" "$*" >&2; }

usage() {
    echo "Usage: ./install.sh [--no-venv] [--no-telemetry]"
    echo ""
    echo "Install or update csauto and its web dashboard dependencies."
    echo ""
    echo "Options:"
    echo "  --no-venv        Install into the current Python environment instead of a venv"
    echo "  --no-telemetry   Disable anonymous usage telemetry"
    exit 0
}

for arg in "$@"; do
    case "$arg" in
        --no-venv) USE_VENV=false ;;
        --no-telemetry) NO_TELEMETRY=true ;;
        -h|--help) usage ;;
        *) echo "Unknown option: $arg"; usage ;;
    esac
done

# -- Determine install mode --
# Run from inside a clone (contributor): editable install of that clone.
# Otherwise (curl): install the wheel of the latest GitHub release.

MODE="release"
SCRIPT_DIR=""
if [ -n "${BASH_SOURCE[0]+x}" ] && [ -f "${BASH_SOURCE[0]}" ]; then
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
fi
if [ -n "$SCRIPT_DIR" ] && [ -f "$SCRIPT_DIR/pyproject.toml" ] && grep -q "csauto" "$SCRIPT_DIR/pyproject.toml" 2>/dev/null; then
    MODE="local"
    INSTALL_DIR="$SCRIPT_DIR"
else
    INSTALL_DIR="$DEFAULT_INSTALL_DIR"
    [ -d "$INSTALL_DIR/.venv" ] && MODE="update"
fi

printf "\n"
printf "  csauto installer\n"
printf "  ─────────────────\n"
printf "\n"

# -- Check dependencies --
PYTHON=python3
if ! command -v "$PYTHON" &>/dev/null; then
    error "python3 not found. Please install Python 3.11 or later."
    exit 1
fi

PY_VERSION=$("$PYTHON" -c "import sys; print(f'{sys.version_info.major}.{sys.version_info.minor}')")
PY_MAJOR=$("$PYTHON" -c "import sys; print(sys.version_info.major)")
PY_MINOR=$("$PYTHON" -c "import sys; print(sys.version_info.minor)")

if [ "$PY_MAJOR" -lt 3 ] || { [ "$PY_MAJOR" -eq 3 ] && [ "$PY_MINOR" -lt 11 ]; }; then
    error "Python 3.11+ is required (found $PY_VERSION)."
    exit 1
fi

info "Found Python $PY_VERSION"

# -- Find what to install --
if [ "$MODE" = "local" ]; then
    info "Running from local clone at $INSTALL_DIR"
    PACKAGE_SPEC=("-e" "$INSTALL_DIR[web]")
    if [ ! -f "$INSTALL_DIR/csauto/_frontend/index.html" ]; then
        warn "The dashboard is not built in this clone: run 'cd frontend && pnpm install && pnpm build'."
    fi
else
    # The wheel attached to a release carries the built dashboard. Take the
    # newest stable release that has one, else the newest pre-release.
    info "Looking up the latest csauto release ..."
    RELEASE_INFO=$(curl -fsSL "https://api.github.com/repos/$REPO_SLUG/releases?per_page=50" | "$PYTHON" -c "
import json, sys
releases = [r for r in json.load(sys.stdin) if not r.get('draft')]
with_wheel = [(r, a) for r in releases for a in r.get('assets', []) if a['name'].endswith('.whl')]
stable = [x for x in with_wheel if not x[0].get('prerelease')]
release, asset = (stable or with_wheel or [(None, None)])[0]
if release:
    print(release['tag_name'], asset['browser_download_url'])
") || { error "Could not reach the GitHub releases of $REPO_SLUG."; exit 1; }
    if [ -z "$RELEASE_INFO" ]; then
        error "No csauto release ships a wheel yet. Install from a clone instead: git clone https://github.com/$REPO_SLUG && ./csauto/install.sh"
        exit 1
    fi
    read -r RELEASE_TAG WHEEL_URL <<< "$RELEASE_INFO"
    PACKAGE_SPEC=("csauto[web] @ $WHEEL_URL")
    info "Installing csauto $RELEASE_TAG"
fi

VENV_DIR="$INSTALL_DIR/.venv"

# -- Create venv if requested --
if $USE_VENV; then
    if [ ! -d "$VENV_DIR" ]; then
        info "Creating virtual environment in $VENV_DIR ..."
        mkdir -p "$INSTALL_DIR"
        "$PYTHON" -m venv "$VENV_DIR"
    else
        info "Virtual environment already exists at $VENV_DIR"
    fi
    PIP="$VENV_DIR/bin/pip"
else
    PIP=pip
fi

# -- Install csauto with web dependencies --
info "Installing csauto with web dashboard dependencies ..."
"$PIP" install --quiet --upgrade "${PACKAGE_SPEC[@]}"

# -- Verify installation --
CSAUTO_BIN=""
if $USE_VENV; then
    CSAUTO_BIN="$VENV_DIR/bin/csauto"
else
    CSAUTO_BIN="$(command -v csauto 2>/dev/null || true)"
fi

if [ -z "$CSAUTO_BIN" ] || [ ! -x "$CSAUTO_BIN" ]; then
    error "csauto binary not found after installation."
    exit 1
fi

VERSION=$("$CSAUTO_BIN" --version 2>&1)
success "Installed: $VERSION"

# -- Telemetry --
case "$MODE" in
    release|update)
        if $NO_TELEMETRY; then
            info "Telemetry disabled by --no-telemetry flag"
            "$PYTHON" -c "
import json, uuid, pathlib
d = pathlib.Path.home() / '.local' / 'share' / 'csauto'
d.mkdir(parents=True, exist_ok=True)
f = d / 'telemetry.json'
f.write_text(json.dumps({'user_id': str(uuid.uuid4()), 'enabled': False}, indent=2))
" 2>/dev/null || true
        else
            PING_TAG="install"
            [ "$MODE" = "update" ] && PING_TAG="update"
            "$CSAUTO_BIN" _telemetry-ping 3 "$PING_TAG" 2>/dev/null || true
        fi
        ;;
esac

# -- Set up shell alias (venv mode only) --
if $USE_VENV; then
    ALIAS_LINE="alias csauto='$CSAUTO_BIN'"

    _PARENT_CMD="$(ps -o comm= -p "$PPID" 2>/dev/null || true)"
    case "$_PARENT_CMD" in
        zsh|bash) SHELL_NAME="$_PARENT_CMD" ;;
        *)        SHELL_NAME="$(basename "${SHELL:-/bin/bash}")" ;;
    esac
    case "$SHELL_NAME" in
        zsh)  RC_FILE="$HOME/.zshrc" ;;
        *)    RC_FILE="$HOME/.bashrc" ;;
    esac

    COMPLETION_LINE="eval \"\$($CSAUTO_BIN completion $SHELL_NAME)\""

    # Always clean stale entries and rewrite, so updates pick up new paths
    if [ -f "$RC_FILE" ]; then
        sed -i '/^# csauto CLI$/d; /^alias csauto=/d; /^# csauto completion$/d; /csauto completion/d' "$RC_FILE"
    fi
    {
        echo ""
        echo "# csauto CLI"
        echo "$ALIAS_LINE"
        echo "# csauto completion"
        echo "$COMPLETION_LINE"
    } >> "$RC_FILE"
    success "Shell alias and completion configured in $RC_FILE"
fi

# -- Done --
printf "\n"
case "$MODE" in
    release) success "Installation complete!" ;;
    update)  success "Update complete!" ;;
    local)   success "Installation complete!" ;;
esac
printf "\n"

if $USE_VENV && [ "$MODE" != "update" ]; then
    echo "To start using csauto, reload your shell:"
    echo "  source $RC_FILE"
    echo ""
fi

echo "Quick start:"
echo "  csauto --help                          # show available commands"
echo "  csauto prepare doe.csv TEMPLATE RUNS   # generate cases"
echo "  csauto serve RUNS                      # launch web dashboard"
