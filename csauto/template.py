from __future__ import annotations

import re
from collections.abc import Mapping

# `{name}` placeholders. Shell expansions like ${HOME} are left alone, and
# `\{name}` is an escape rendered as a literal `{name}`, for files where
# braces are code (Python f-strings and sets in code_aster .comm files).
PLACEHOLDER_PATTERN = re.compile(r"(?<![$\\]){\s*([A-Za-z0-9_.-]+)\s*}")
ESCAPED_PLACEHOLDER_PATTERN = re.compile(r"\\({\s*[A-Za-z0-9_.-]+\s*})")
COND_START_PATTERN = re.compile(r"<!--\s*IF\s+(.+?)\s*-->", re.IGNORECASE)
COND_END_PATTERN = re.compile(r"<!--\s*ENDIF\s*-->", re.IGNORECASE)
COND_EXPR_PATTERN = re.compile(r"^([A-Za-z0-9_.-]+)\s*(==|=|!=)\s*(.+)$")


def _strip_quotes(value: str) -> str:
    """Remove matching outer quotes from a string."""
    if len(value) >= 2 and value[0] == value[-1] and value[0] in {"'", '"'}:
        return value[1:-1]
    return value


def _normalize_truthy(value: str | None) -> bool:
    """Return True unless value is empty, '0', 'false', 'no', 'off', or 'none'."""
    if value is None:
        return False
    text = str(value).strip().lower()
    return text not in {"", "0", "false", "no", "off", "none"}


def _parse_condition(expr: str) -> tuple[str, str | None, str | None]:
    """Parse a conditional expression into (key, operator, value)."""
    expr = expr.strip()
    if not expr:
        raise ValueError("Empty IF condition.")
    match = COND_EXPR_PATTERN.match(expr)
    if match:
        key, op, raw_value = match.groups()
        value = _strip_quotes(raw_value.strip())
        return key, op, value
    return expr, None, None


def _evaluate_condition(expr: str, row: Mapping[str, str]) -> bool:
    """Evaluate an IF condition against a DOE row."""
    key, op, value = _parse_condition(expr)
    current = row.get(key, "")
    if op is None:
        return _normalize_truthy(current)
    current_str = current.strip()
    if op in {"=", "=="}:
        return current_str == value
    if op == "!=":
        return current_str != value
    raise ValueError(f"Unknown conditional operator: {op}")


def _apply_conditionals(template_text: str, row: Mapping[str, str]) -> str:
    """Process IF/ENDIF blocks, keeping or dropping lines based on DOE row values."""
    output: list[str] = []
    active_stack: list[bool] = []
    active = True
    for line in template_text.splitlines(keepends=True):
        start = COND_START_PATTERN.search(line)
        if start:
            cond = _evaluate_condition(start.group(1), row)
            active_stack.append(active)
            active = active and cond
            continue
        if COND_END_PATTERN.search(line):
            if not active_stack:
                raise ValueError("ENDIF without matching IF.")
            active = active_stack.pop()
            continue
        if active:
            output.append(line)
    if active_stack:
        raise ValueError("IF block without ENDIF.")
    return "".join(output)


def extract_condition_variables(template_text: str) -> set[str]:
    """Return the set of variable names referenced in IF conditions."""
    vars_used: set[str] = set()
    for expr in COND_START_PATTERN.findall(template_text):
        key, _op, _value = _parse_condition(expr)
        if key:
            vars_used.add(key)
    return vars_used


def extract_placeholders(template_text: str) -> set[str]:
    """Return the set of placeholder names (e.g. {velocity}) found in the template."""
    return set(PLACEHOLDER_PATTERN.findall(template_text))


def render_template(
    template_text: str,
    row: Mapping[str, str],
    case_id: str,
) -> str:
    """Replace placeholders in the template using the provided row values."""
    filtered = _apply_conditionals(template_text, row)
    active_placeholders = extract_placeholders(filtered)
    missing = sorted(name for name in active_placeholders if row.get(name, "") == "")
    if missing:
        joined = ", ".join(missing)
        raise ValueError(f"Missing placeholder values for {case_id}: {joined}")

    def replace_placeholder(match: re.Match[str]) -> str:
        name = match.group(1)
        return str(row[name])

    rendered = PLACEHOLDER_PATTERN.sub(replace_placeholder, filtered)

    remaining = extract_placeholders(rendered)
    if remaining:
        joined = ", ".join(sorted(set(remaining)))
        raise ValueError(f"Unresolved placeholders after rendering for {case_id}: {joined}")

    return ESCAPED_PLACEHOLDER_PATTERN.sub(r"\1", rendered)
