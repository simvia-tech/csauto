from __future__ import annotations

import csv
import math
import sys
from collections.abc import Iterator, Sequence
from dataclasses import dataclass
from pathlib import Path

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


def _default_adapter():
    from .solvers import get_solver_adapter

    return get_solver_adapter(None)


@dataclass(frozen=True)
class ResidualCaseContext:
    case_id: str
    case_dir: Path
    residual_paths: tuple[Path, ...]
    is_running: bool
    is_launched: bool  # False for PREPARED cases that have never run


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
    adapter,
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
                residual_paths=tuple(adapter.find_residuals_files(case_dir, include_history=include_history)),
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
    adapter,
) -> list[str] | None:
    header: list[str] | None = None
    for context in contexts:
        added_for_case = 0
        for residual_path in context.residual_paths:
            fields, _rows, _max_iter = _read_residual_csv(residual_path)
            if fields is None:
                warn(f"residuals file has no header for {context.case_id}")
                continue
            header = _merge_header_fields(header, fields)
            added_for_case += 1
        if added_for_case == 0 or context.is_running:
            fields, rows_local = adapter.parse_live_residuals(context.case_dir)
            if fields and rows_local:
                header = _merge_header_fields(header, fields)
            elif added_for_case == 0 and context.is_launched:
                warn(f"residuals not found for {context.case_id}")
    return header


def _iter_residual_records_from_contexts(
    contexts: Sequence[ResidualCaseContext],
    adapter,
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
            _fields, rows_local = adapter.parse_live_residuals(context.case_dir)
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
    adapter=None,
) -> tuple[list[ResidualCaseContext], list[str] | None]:
    if not cases:
        raise ValueError("At least one case must be specified via --case.")
    adapter = adapter or _default_adapter()
    contexts = _iter_residual_case_contexts(runs_dir, cases, include_history, adapter)
    header = _collect_residual_header_from_contexts(contexts, adapter)
    return contexts, header


def read_residual_rows(
    runs_dir: Path,
    cases: Sequence[str],
    allow_empty: bool = False,
    include_history: bool = False,
    limit: int | None = None,
    adapter=None,
) -> tuple[list[str], list[dict[str, str]]]:
    """Read residual rows for given cases, returning header and records."""
    adapter = adapter or _default_adapter()
    contexts, header = _prepare_residual_contexts(
        runs_dir,
        cases,
        include_history=include_history,
        adapter=adapter,
    )
    limit_value = limit if limit is not None and limit > 0 else None
    records: list[dict[str, str]] = []
    for record in _iter_residual_records_from_contexts(contexts, adapter):
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


def residual_columns(runs_dir: Path, cases: Sequence[str], adapter=None) -> list[str]:
    """Return residual column names (excluding case_id) for given cases."""
    _contexts, header = _prepare_residual_contexts(runs_dir, cases, adapter=adapter)
    if header is None:
        return []
    return [c for c in header if c != "case_id"]


def collect_residuals(runs_dir: Path, cases: Sequence[str], output_path: Path | None = None, adapter=None) -> None:
    """Collect residuals for specified cases and emit a merged CSV."""
    adapter = adapter or _default_adapter()
    contexts, header = _prepare_residual_contexts(runs_dir, cases, adapter=adapter)
    if header is None:
        raise ValueError("No residual data collected.")
    rows = _iter_residual_records_from_contexts(contexts, adapter)
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
    adapter=None,
) -> str:
    """Generate an SVG string of residuals vs iteration for selected cases/columns.

    Without `columns`, plots the adapter's default_residual_columns, else the
    first two residuals.
    """
    adapter = adapter or _default_adapter()
    header, rows = read_residual_rows(
        runs_dir,
        cases,
        allow_empty=True,
        include_history=include_history,
        adapter=adapter,
    )
    available_cols = [c for c in header if c not in {"case_id", "iteration"}]
    cols = list(columns) if columns else [c for c in adapter.default_residual_columns if c in available_cols]
    missing = [c for c in cols if c not in available_cols]
    if missing:
        warn(f"columns missing from residuals: {', '.join(missing)}")
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

    # Rows without an iteration are numbered in order, per case.
    row_numbers: dict[str, int] = {}
    unnumbered = False
    for row in rows:
        case_id = row.get("case_id", "")
        row_numbers[case_id] = row_numbers.get(case_id, 0) + 1
        iteration = row.get("iteration", "")
        if iteration in ("", None):
            unnumbered = True
            iteration = row_numbers[case_id]
        try:
            x = float(iteration)
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

    if unnumbered:
        warn("some residual rows have no iteration column; they are plotted in row order")
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
    adapter=None,
) -> None:
    """Generate a simple SVG plot of residuals vs iteration for selected cases/columns."""
    svg = render_residuals_svg(runs_dir, cases, columns, width=width, height=height, adapter=adapter)
    output_path.write_text(svg, encoding="utf-8")
