from __future__ import annotations

import difflib
import re
from collections.abc import Sequence
from pathlib import Path

from .logs import read_case_file_text


def _filter_text_lines(text: str, pattern: re.Pattern[str] | None) -> list[str]:
    lines = text.splitlines()
    if not pattern:
        return lines
    return [line for line in lines if pattern.search(line)]


def compare_runs_diff(
    runs_dir: Path,
    cases: Sequence[str],
    base_case: str,
    kind: str,
    filter_expr: str | None = None,
    adapter=None,
) -> str:
    """Return a multi-run diff against a base case, optionally filtered by regex."""
    if not cases:
        raise ValueError("Missing cases")
    if base_case not in cases:
        raise ValueError("Base case must be part of selected cases")
    pattern = None
    if filter_expr:
        pattern = re.compile(filter_expr)
    base_dir = runs_dir / base_case
    if not base_dir.is_dir():
        raise FileNotFoundError(f"Case not found: {base_case}")
    base_text = read_case_file_text(base_dir, kind, adapter=adapter)
    base_lines = _filter_text_lines(base_text, pattern)
    output: list[str] = []
    for case_id in cases:
        if case_id == base_case:
            continue
        case_dir = runs_dir / case_id
        if not case_dir.is_dir():
            raise FileNotFoundError(f"Case not found: {case_id}")
        target_text = read_case_file_text(case_dir, kind, adapter=adapter)
        target_lines = _filter_text_lines(target_text, pattern)
        diff = difflib.unified_diff(
            base_lines,
            target_lines,
            fromfile=f"{base_case}/{kind}",
            tofile=f"{case_id}/{kind}",
            lineterm="",
        )
        header = f"=== {base_case} vs {case_id} ({kind}) ==="
        if filter_expr:
            header += f" [filter: {filter_expr}]"
        output.append(header)
        diff_text = "\n".join(diff)
        output.append(diff_text if diff_text else "(no diff)")
    return "\n".join(output) if output else "(no diff)"
