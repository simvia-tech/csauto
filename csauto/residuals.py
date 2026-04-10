from __future__ import annotations

import csv
import math
import re
import sys
from collections.abc import Iterator, Sequence
from dataclasses import dataclass
from pathlib import Path

from .logs import locate_case_file
from .registry import STATUS_PREPARED, STATUS_RUNNING, load_registry
from .svg_utils import (
    COLOR_PALETTE,
    as_float,
    linear_ticks,
    log_ticks,
    render_axis_labels,
    render_grid_lines,
    render_legend,
    render_restart_markers,
    render_series_paths,
    render_tick_marks,
    svg_boilerplate,
)
from .viz import empty_svg
from .warn import warn


@dataclass(frozen=True)
class ResidualCaseContext:
    case_id: str
    case_dir: Path
    residual_paths: tuple[Path, ...]
    is_running: bool
    is_launched: bool  # False for PREPARED cases that have never run


def find_latest_residuals(case_dir: Path) -> Path | None:
    """Locate the most recent residuals.csv in RESU subdirectories."""
    resu_root = case_dir / "RESU"
    if not resu_root.is_dir():
        return None
    candidates: list[Path] = []
    for resu_dir in resu_root.iterdir():
        if not resu_dir.is_dir():
            continue
        candidate = resu_dir / "residuals.csv"
        if candidate.is_file():
            candidates.append(candidate)
    if not candidates:
        return None
    candidates.sort(key=lambda p: p.stat().st_mtime, reverse=True)
    return candidates[0]


def find_residuals_files(case_dir: Path, include_history: bool = False) -> list[Path]:
    """Locate residuals.csv files for a case.

    If include_history is False, returns at most one file (latest RESU behavior).
    If include_history is True, returns all residuals.csv files from RESU, ordered by run age.
    """
    latest = find_latest_residuals(case_dir)
    if not include_history:
        return [latest] if latest else []
    resu_root = case_dir / "RESU"
    if not resu_root.is_dir():
        return []
    candidates: list[Path] = []
    for resu_dir in resu_root.iterdir():
        if not resu_dir.is_dir():
            continue
        candidate = resu_dir / "residuals.csv"
        if candidate.is_file():
            candidates.append(candidate)
    candidates.sort(key=lambda p: (p.parent.stat().st_mtime, p.stat().st_mtime))
    return candidates


def _looks_like_number(token: str) -> bool:
    return as_float(token) is not None


def _normalize_residual_row(row: dict[str | None, str | None]) -> dict[str, str]:
    normalized: dict[str, str] = {}
    for raw_k, raw_v in row.items():
        if raw_k is None:
            continue
        key = raw_k.strip()
        val = raw_v.strip() if isinstance(raw_v, str) else str(raw_v or "")
        normalized[key] = val
    return normalized


def _has_residual_data(row: dict[str, str]) -> bool:
    return any(value != "" for value in row.values())


def _read_residual_csv(path: Path) -> tuple[list[str] | None, list[dict[str, str]], float | None]:
    try:
        with path.open(newline="", encoding="utf-8") as handle:
            reader = csv.DictReader(handle)
            if reader.fieldnames is None:
                return None, [], None
            fields = [f.strip() for f in reader.fieldnames if f is not None]
            rows: list[dict[str, str]] = []
            max_iter: float | None = None
            for row in reader:
                normalized = _normalize_residual_row(row)
                if not _has_residual_data(normalized):
                    continue
                rows.append(normalized)
                iter_value = as_float(normalized.get("iteration"))
                if iter_value is not None and (max_iter is None or iter_value > max_iter):
                    max_iter = iter_value
    except OSError:
        return None, [], None
    return fields, rows, max_iter


def _iter_residual_case_contexts(
    runs_dir: Path,
    cases: Sequence[str],
    include_history: bool,
) -> list[ResidualCaseContext]:
    try:
        registry = load_registry(runs_dir)
    except (OSError, ValueError):
        registry = {}

    contexts: list[ResidualCaseContext] = []
    for case_id in cases:
        case_dir = runs_dir / case_id
        if not case_dir.is_dir():
            warn(f"case not found: {case_id}")
            continue
        status_value = str((registry.get(case_id) or {}).get("status") or "").upper()
        contexts.append(
            ResidualCaseContext(
                case_id=case_id,
                case_dir=case_dir,
                residual_paths=tuple(find_residuals_files(case_dir, include_history=include_history)),
                is_running=status_value == STATUS_RUNNING,
                is_launched=status_value not in ("", STATUS_PREPARED),
            )
        )
    return contexts


def _merge_header_fields(header: list[str] | None, fields: Sequence[str]) -> list[str]:
    merged = list(header) if header is not None else ["case_id"]
    for field in fields:
        if field and field not in merged:
            merged.append(field)
    return merged


def _collect_residual_header_from_contexts(
    contexts: Sequence[ResidualCaseContext],
) -> list[str] | None:
    header: list[str] | None = None
    for context in contexts:
        added_for_case = 0
        for residual_path in context.residual_paths:
            fields, _rows, _max_iter = _read_residual_csv(residual_path)
            if fields is None:
                warn(f"residuals.csv has no header for {context.case_id}")
                continue
            header = _merge_header_fields(header, fields)
            added_for_case += 1
        if added_for_case == 0 or context.is_running:
            log_path = locate_case_file(context.case_dir, "run_solver.log")
            fields, rows_local = parse_residuals_from_log(log_path) if log_path else ([], [])
            if fields and rows_local:
                header = _merge_header_fields(header, fields)
            elif added_for_case == 0 and context.is_launched:
                warn(f"residuals.csv not found for {context.case_id}")
    return header


def _iter_residual_records_from_contexts(
    contexts: Sequence[ResidualCaseContext],
) -> Iterator[dict[str, str]]:
    for context in contexts:
        added_for_case = 0
        max_csv_iter: float | None = None
        for residual_path in context.residual_paths:
            fields, rows_local, path_max_iter = _read_residual_csv(residual_path)
            if fields is None:
                continue
            for row in rows_local:
                rec = {"case_id": context.case_id}
                rec.update(row)
                yield rec
                added_for_case += 1
            if path_max_iter is not None and (max_csv_iter is None or path_max_iter > max_csv_iter):
                max_csv_iter = path_max_iter
        if added_for_case == 0 or context.is_running:
            log_path = locate_case_file(context.case_dir, "run_solver.log")
            _fields, rows_local = parse_residuals_from_log(log_path) if log_path else ([], [])
            for row in rows_local:
                iter_value = as_float(row.get("iteration"))
                if (
                    added_for_case > 0
                    and max_csv_iter is not None
                    and iter_value is not None
                    and iter_value <= max_csv_iter
                ):
                    continue
                rec = {"case_id": context.case_id}
                rec.update(row)
                yield rec


def _prepare_residual_contexts(
    runs_dir: Path,
    cases: Sequence[str],
    include_history: bool = False,
) -> tuple[list[ResidualCaseContext], list[str] | None]:
    if not cases:
        raise ValueError("At least one case must be specified via --case.")
    contexts = _iter_residual_case_contexts(runs_dir, cases, include_history)
    header = _collect_residual_header_from_contexts(contexts)
    return contexts, header


def parse_residuals_from_log(log_path: Path) -> tuple[list[str], list[dict[str, str]]]:
    """Parse residual blocks from run_solver.log."""
    if not log_path or not log_path.is_file():
        return [], []
    block_idx = 0
    current: dict[str, str] | None = None
    block_has_data = False
    rows: list[dict[str, str]] = []
    fields: list[str] = ["iteration"]
    header_re = re.compile(r"Variable\s+Rhs norm", re.IGNORECASE)
    sep_re = re.compile(r"^-{3,}")
    try:
        with log_path.open("r", encoding="utf-8", errors="ignore") as handle:
            for line in handle:
                if header_re.search(line):
                    if current:
                        rows.append(current)
                        current = None
                    block_has_data = False
                    block_idx += 1
                    current = {"iteration": str(block_idx)}
                    continue
                if current is not None:
                    if sep_re.match(line) and not block_has_data:
                        continue
                    if not line.strip() or sep_re.match(line):
                        if current:
                            rows.append(current)
                        current = None
                        block_has_data = False
                        continue
                    parts = line.split()
                    if len(parts) < 3:
                        continue
                    name_tokens: list[str] = []
                    value_token: str | None = None
                    for tok in parts[1:]:
                        if _looks_like_number(tok):
                            value_token = parts[-1]
                            break
                        name_tokens.append(tok)
                    if not name_tokens or value_token is None:
                        continue
                    name = "_".join(t.lower() for t in name_tokens)
                    try:
                        float(value_token)
                    except (ValueError, TypeError):
                        continue
                    current[name] = value_token
                    if name not in fields:
                        fields.append(name)
                    block_has_data = True
            if current:
                rows.append(current)
    except OSError:
        return [], []
    return fields, rows


def read_residual_rows(
    runs_dir: Path,
    cases: Sequence[str],
    allow_empty: bool = False,
    include_history: bool = False,
    limit: int | None = None,
) -> tuple[list[str], list[dict[str, str]]]:
    """Read residual rows for given cases, returning header and records."""
    contexts, header = _prepare_residual_contexts(
        runs_dir,
        cases,
        include_history=include_history,
    )
    limit_value = limit if limit is not None and limit > 0 else None
    records: list[dict[str, str]] = []
    for record in _iter_residual_records_from_contexts(contexts):
        records.append(record)
        if limit_value is not None and len(records) >= limit_value:
            break

    if not records:
        if allow_empty:
            if header is None:
                header = ["case_id"]
            return header, records
        raise ValueError("No residual data collected.")
    if header is None:
        if allow_empty:
            header = ["case_id"]
        else:
            raise ValueError("Residual header not found.")
    return header, records


def residual_columns(runs_dir: Path, cases: Sequence[str]) -> list[str]:
    """Return residual column names (excluding case_id) for given cases."""
    _contexts, header = _prepare_residual_contexts(runs_dir, cases)
    if header is None:
        return []
    return [c for c in header if c != "case_id"]


def collect_residuals(runs_dir: Path, cases: Sequence[str], output_path: Path | None = None) -> None:
    """Collect residuals for specified cases and emit a merged CSV."""
    contexts, header = _prepare_residual_contexts(runs_dir, cases)
    if header is None:
        raise ValueError("No residual data collected.")
    rows = _iter_residual_records_from_contexts(contexts)
    try:
        first_row = next(rows)
    except StopIteration as exc:
        raise ValueError("No residual data collected.") from exc
    output = sys.stdout if output_path is None else output_path.open("w", newline="", encoding="utf-8")
    try:
        writer = csv.DictWriter(output, fieldnames=header)
        writer.writeheader()
        writer.writerow(first_row)
        for row in rows:
            writer.writerow(row)
    finally:
        if output_path is not None:
            output.close()


def render_residuals_svg(
    runs_dir: Path,
    cases: Sequence[str],
    columns: Sequence[str] | None,
    width: int = 900,
    height: int = 500,
    x_from: float = 0.0,
    include_history: bool = False,
    restart_iterations: Sequence[float] | None = None,
) -> str:
    """Generate an SVG string of residuals vs iteration for selected cases/columns."""
    header, rows = read_residual_rows(
        runs_dir,
        cases,
        allow_empty=True,
        include_history=include_history,
    )
    available_cols = [c for c in header if c != "case_id"]
    cols = list(columns) if columns else ["velocity"]
    missing = [c for c in cols if c not in available_cols]
    if missing:
        warn(f"columns missing from residuals.csv: {', '.join(missing)}")
    cols = [c for c in cols if c in available_cols]
    if not cols:
        cols = available_cols[:2] if available_cols else []
        if not cols:
            return empty_svg(width, height, "No residual data available")

    try:
        x_from_value = float(x_from)
    except (ValueError, TypeError):
        x_from_value = 0.0
    if not math.isfinite(x_from_value):
        x_from_value = 0.0

    series: dict[str, list[tuple[float, float]]] = {}
    x_min = float("inf")
    x_max = float("-inf")
    y_min = float("inf")
    y_max = float("-inf")

    for row in rows:
        case_id = row.get("case_id", "")
        try:
            x = float(row.get("iteration", "") or 0.0)
        except ValueError:
            continue
        if x < x_from_value:
            continue
        if x_min > x:
            x_min = x
        if x_max < x:
            x_max = x
        for col in cols:
            try:
                y = float(row.get(col, "") or 0.0)
            except ValueError:
                continue
            if y <= 0:
                continue
            key = f"{case_id}:{col}"
            series.setdefault(key, []).append((x, y))
            if y_min > y:
                y_min = y
            if y_max < y:
                y_max = y

    if not series:
        return empty_svg(width, height, "No numeric data to plot")

    if x_min == float("inf") or x_max == float("-inf"):
        return empty_svg(width, height, "No valid iteration")
    if y_min == float("inf") or y_max == float("-inf"):
        return empty_svg(width, height, "No positive value (log scale)")

    if x_min == x_max:
        x_max = x_min + 1.0
    if y_min == y_max:
        y_min = y_min * 0.1
        y_max = y_max * 10.0

    margin = 70
    plot_w = width - 2 * margin
    plot_h = height - 2 * margin

    def scale_x(x: float) -> float:
        return margin + (x - x_min) / (x_max - x_min) * plot_w

    def scale_y(y: float) -> float:
        return height - margin - (math.log10(y) - math.log10(y_min)) / (math.log10(y_max) - math.log10(y_min)) * plot_h

    svg_elements: list[str] = svg_boilerplate(width, height, margin, plot_w, plot_h)

    x_ticks = linear_ticks(x_min, x_max, n=5, fmt=".0f")
    y_ticks = log_ticks(y_min, y_max)
    svg_elements.extend(render_tick_marks(x_ticks, "x", scale_x, margin, width, height))
    svg_elements.extend(render_tick_marks(y_ticks, "y", scale_y, margin, width, height))
    svg_elements.extend(
        render_grid_lines(linear_ticks(x_min, x_max, n=6, fmt=".0f"), "x", scale_x, margin, width, height)
    )
    svg_elements.extend(render_grid_lines(y_ticks, "y", scale_y, margin, width, height))
    svg_elements.extend(render_axis_labels("Iteration", "Residuals (log10)", margin, width, height))

    ordered_series_list: list[tuple[str, list[tuple[float, float]], str]] = []
    legend_groups: dict[str, list[tuple[str, str]]] = {}
    for idx, (key, pts) in enumerate(sorted(series.items())):
        color = COLOR_PALETTE[idx % len(COLOR_PALETTE)]
        ordered_series_list.append((key, sorted(pts, key=lambda p: p[0]), color))
        if ":" in key:
            case_name, col_name = key.split(":", 1)
        else:
            case_name, col_name = key, ""
        legend_groups.setdefault(case_name, []).append((col_name.strip() or "residual", color))

    def residual_tooltip(label: str, x: float, y: float) -> str:
        return f"{label} @ {x:.0f}: {y:.3g}"

    svg_elements.extend(render_series_paths(ordered_series_list, scale_x, scale_y, tooltip_fn=residual_tooltip))

    if restart_iterations:
        svg_elements.extend(render_restart_markers(restart_iterations, scale_x, x_min, x_max, margin, height))

    svg_elements.extend(render_legend(legend_groups, margin, width))
    svg_elements.append("</svg>")
    return "\n".join(svg_elements)


def plot_residuals(
    runs_dir: Path,
    cases: Sequence[str],
    columns: Sequence[str] | None,
    output_path: Path,
    width: int = 900,
    height: int = 500,
) -> None:
    """Generate a simple SVG plot of residuals vs iteration for selected cases/columns."""
    svg = render_residuals_svg(runs_dir, cases, columns, width=width, height=height)
    output_path.write_text(svg, encoding="utf-8")
