"""Code_Saturne automation package."""

from __future__ import annotations

from pathlib import Path

__version__ = (Path(__file__).resolve().parent.parent / "VERSION").read_text().strip()


def main(argv: list[str] | None = None) -> int:
    from .cli import main as _main

    return _main(argv)


__all__ = ["main"]
