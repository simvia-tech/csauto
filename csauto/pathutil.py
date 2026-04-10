from __future__ import annotations

from pathlib import Path


def is_within_root(path: Path, root: Path) -> bool:
    """Return True if *path* resolves to a location inside *root*."""
    try:
        path.resolve().relative_to(root)
        return True
    except (ValueError, OSError):
        return False


def safe_subpath(base: Path, relative: str | Path) -> Path | None:
    """Resolve *relative* under *base*, returning None if it escapes *base*."""
    rel = Path(relative)
    if not str(relative) or rel.is_absolute():
        return None
    candidate = (base / rel).resolve()
    if not is_within_root(candidate, base.resolve()):
        return None
    return candidate
