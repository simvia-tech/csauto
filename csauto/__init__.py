"""Code_Saturne automation package."""

from __future__ import annotations

from pathlib import Path

_version_file = Path(__file__).resolve().parent.parent / "VERSION"
if _version_file.is_file():
    __version__ = _version_file.read_text().strip()
else:
    from importlib.metadata import version as _pkg_version

    __version__ = _pkg_version("csauto")


def main(argv: list[str] | None = None) -> int:
    from .cli import main as _main

    return _main(argv)


__all__ = ["main"]
