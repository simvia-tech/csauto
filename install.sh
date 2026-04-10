#!/usr/bin/env bash
# csauto installer
#
# Fresh install (curl):
#   sh -c "$(curl -fsSL https://raw.githubusercontent.com/simvia-tech/csauto/main/install.sh)"
#
# Fresh install (from a local clone):
#   ./install.sh
#
# Update (re-run the same command — the script detects the existing install):
#   sh -c "$(curl -fsSL https://raw.githubusercontent.com/simvia-tech/csauto/main/install.sh)"
#
# Options:
#   --no-venv   Install into the current Python environment instead of a venv

set -euo pipefail

REPO_URL="https://github.com/simvia-tech/csauto.git"
DEFAULT_INSTALL_DIR="$HOME/.local/share/csauto"
USE_VENV=true

info()    { printf "[info]  %s\n" "$*"; }
success() { printf "[ok]    %s\n" "$*"; }
warn()    { printf "[warn]  %s\n" "$*"; }
error()   { printf "[error] %s\n" "$*" >&2; }

usage() {
    echo "Usage: ./install.sh [--no-venv]"
    echo ""
    echo "Install or update csauto and its web dashboard dependencies."
    echo ""
    echo "Options:"
    echo "  --no-venv   Install into the current Python environment instead of a venv"
    exit 0
}

for arg in "$@"; do
    case "$arg" in
        --no-venv) USE_VENV=false ;;
        -h|--help) usage ;;
        *) echo "Unknown option: $arg"; usage ;;
    esac
done

# -- Determine install mode --
# If we're inside an existing clone (contributor), use that directory.
# Otherwise, use the default install location (end-user curl install).

detect_repo_dir() {
    # Check if this script is being run from inside a git clone of csauto
    SCRIPT_DIR=""
    if [ -n "${BASH_SOURCE[0]+x}" ] && [ -f "${BASH_SOURCE[0]}" ]; then
        SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    fi

    if [ -n "$SCRIPT_DIR" ] && [ -f "$SCRIPT_DIR/pyproject.toml" ] && grep -q "csauto" "$SCRIPT_DIR/pyproject.toml" 2>/dev/null; then
        # Running from inside an existing clone (./install.sh)
        REPO_DIR="$SCRIPT_DIR"
        MODE="local"
    elif [ -d "$DEFAULT_INSTALL_DIR/.git" ] && [ -f "$DEFAULT_INSTALL_DIR/pyproject.toml" ]; then
        # Existing curl install found — update mode
        REPO_DIR="$DEFAULT_INSTALL_DIR"
        MODE="update"
    else
        # Fresh curl install
        REPO_DIR="$DEFAULT_INSTALL_DIR"
        MODE="fresh"
    fi
}

detect_repo_dir

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

# -- Clone or update the repository --
case "$MODE" in
    fresh)
        if ! command -v git &>/dev/null; then
            error "git is required but was not found."
            exit 1
        fi
        info "Cloning csauto to $REPO_DIR ..."
        mkdir -p "$(dirname "$REPO_DIR")"
        git clone "$REPO_URL" "$REPO_DIR"
        success "Repository cloned"
        ;;
    update)
        info "Existing installation found at $REPO_DIR"
        info "Pulling latest changes ..."
        git -C "$REPO_DIR" pull --ff-only
        success "Repository updated"
        ;;
    local)
        info "Running from local clone at $REPO_DIR"
        ;;
esac

VENV_DIR="$REPO_DIR/.venv"

# -- Create venv if requested --
if $USE_VENV; then
    if [ ! -d "$VENV_DIR" ]; then
        info "Creating virtual environment in $VENV_DIR ..."
        "$PYTHON" -m venv "$VENV_DIR"
    else
        info "Virtual environment already exists at $VENV_DIR"
    fi
    # shellcheck disable=SC1091
    source "$VENV_DIR/bin/activate"
    PIP="$VENV_DIR/bin/pip"
else
    PIP=pip
fi

# -- Install csauto with web dependencies --
info "Installing csauto with web dashboard dependencies ..."
"$PIP" install --quiet -e "$REPO_DIR[web]"

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

# -- Set up shell alias (venv mode only) --
if $USE_VENV; then
    ALIAS_LINE="alias csauto='$CSAUTO_BIN'"

    SHELL_NAME="$(basename "${SHELL:-/bin/bash}")"
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
    fresh)   success "Installation complete!" ;;
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
