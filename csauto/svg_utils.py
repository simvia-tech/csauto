from __future__ import annotations

import math
from collections.abc import Callable, Sequence

COLOR_PALETTE: list[str] = [
    "#4c6ef5",
    "#f59f00",
    "#2fb344",
    "#e03131",
    "#ae3ec9",
    "#0ca678",
    "#f76707",
    "#228be6",
    "#15aabf",
    "#fab005",
]


def as_float(value: str | None) -> float | None:
    """Safe string-to-float conversion. Returns None on failure or None input."""
    if value is None:
        return None
    try:
        return float(value)
    except (ValueError, TypeError):
        return None


def linear_ticks(min_v: float, max_v: float, n: int = 5, fmt: str = ".3g") -> list[tuple[float, str]]:
    """Return n evenly spaced (value, label) pairs for a linear axis."""
    if min_v == max_v:
        return [(min_v, f"{min_v:{fmt}}")]
    step = (max_v - min_v) / max(1, n - 1)
    return [(min_v + i * step, f"{min_v + i * step:{fmt}}") for i in range(n)]


def log_ticks(min_v: float, max_v: float) -> list[tuple[float, str]]:
    """Return (value, label) pairs at integer powers of 10 within range.

    When no integer power of 10 falls within [min_v, max_v], the nearest
    lower bounding power is returned. Callers should expect values outside
    the input range in this edge case.
    """
    if min_v <= 0:
        raise ValueError("min_v must be positive for log scale")
    exp_min = math.floor(math.log10(min_v))
    exp_max = math.ceil(math.log10(max_v))
    ticks = []
    for exp in range(exp_min, exp_max + 1):
        v = 10**exp
        if v < min_v or v > max_v:
            continue
        ticks.append((v, f"1e{exp}"))
    if not ticks:
        ticks.append((10**exp_min, f"1e{exp_min}"))
    return ticks


def render_series_paths(
    ordered_series: Sequence[tuple[str, list[tuple[float, float]], str]],
    scale_x: Callable[[float], float],
    scale_y: Callable[[float], float],
    tooltip_fn: Callable[[str, float, float], str] | None = None,
) -> list[str]:
    """Render path polylines and end-of-series circle markers with tooltips."""
    if not ordered_series:
        return []
    if tooltip_fn is None:

        def tooltip_fn(label: str, x: float, y: float) -> str:
            return f"{label} @ {x:.3g}: {y:.3g}"

    elements: list[str] = []
    for label, pts, color in ordered_series:
        path_parts = []
        for i, (x, y) in enumerate(pts):
            px, py = scale_x(x), scale_y(y)
            cmd = "M" if i == 0 else "L"
            path_parts.append(f"{cmd}{px:.2f},{py:.2f}")
        path_d = " ".join(path_parts)
        elements.append(f'<path d="{path_d}" fill="none" stroke="{color}" stroke-width="1.5"/>')
        if pts:
            last_x, last_y = pts[-1]
            mx, my = scale_x(last_x), scale_y(last_y)
            title = tooltip_fn(label, last_x, last_y)
            elements.append(
                f'<circle cx="{mx:.2f}" cy="{my:.2f}" r="3.5" fill="{color}" '
                f'stroke="#fff" stroke-width="1"><title>{title}</title></circle>'
            )
    return elements


def render_axis_labels(x_label: str, y_label: str, margin: int, width: int, height: int) -> list[str]:
    """Render X and Y axis label text elements."""
    return [
        (
            f'<text x="{width / 2:.1f}" y="{height - margin / 3:.1f}" '
            f'font-size="14" text-anchor="middle" fill="#000">{x_label}</text>'
        ),
        (
            f'<text x="{margin / 3:.1f}" y="{height / 2:.1f}" '
            f'font-size="14" text-anchor="middle" fill="#000" '
            f'transform="rotate(-90 {margin / 3:.1f},{height / 2:.1f})">{y_label}</text>'
        ),
    ]


def render_tick_marks(
    ticks: list[tuple[float, str]],
    axis: str,
    scale_fn: Callable[[float], float],
    margin: int,
    width: int,
    height: int,
) -> list[str]:
    """Render tick marks (short lines + text labels) for an axis."""
    if axis not in ("x", "y"):
        raise ValueError(f"axis must be 'x' or 'y', got {axis!r}")
    elements: list[str] = []
    for value, label in ticks:
        pos = scale_fn(value)
        if axis == "x":
            elements.append(
                f'<line x1="{pos}" y1="{height - margin}" x2="{pos}" '
                f'y2="{height - margin + 5}" stroke="#000" stroke-width="1"/>'
            )
            elements.append(
                f'<text x="{pos}" y="{height - margin + 20}" font-size="12" '
                f'text-anchor="middle" fill="#000">{label}</text>'
            )
        else:
            elements.append(
                f'<line x1="{margin - 5}" y1="{pos}" x2="{margin}" y2="{pos}" stroke="#000" stroke-width="1"/>'
            )
            elements.append(
                f'<text x="{margin - 10}" y="{pos + 4}" font-size="12" text-anchor="end" fill="#000">{label}</text>'
            )
    return elements


def render_grid_lines(
    ticks: list[tuple[float, str]],
    axis: str,
    scale_fn: Callable[[float], float],
    margin: int,
    width: int,
    height: int,
) -> list[str]:
    """Render dashed grid lines across the plot area."""
    if axis not in ("x", "y"):
        raise ValueError(f"axis must be 'x' or 'y', got {axis!r}")
    elements: list[str] = []
    for value, _ in ticks:
        pos = scale_fn(value)
        if axis == "x":
            elements.append(
                f'<line x1="{pos}" y1="{margin}" x2="{pos}" y2="{height - margin}" '
                'stroke="#d9d9d9" stroke-width="0.5" stroke-dasharray="3,3" />'
            )
        else:
            elements.append(
                f'<line x1="{margin}" y1="{pos}" x2="{width - margin}" y2="{pos}" '
                'stroke="#d9d9d9" stroke-width="0.5" stroke-dasharray="3,3" />'
            )
    return elements


def svg_boilerplate(width: int, height: int, margin: int, plot_w: int, plot_h: int) -> list[str]:
    """Return SVG opening elements: root tag, style, background, plot area, axes."""
    return [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}">',
        "<style>text{font-family:'Helvetica, Arial, sans-serif';}</style>",
        f'<rect x="0" y="0" width="{width}" height="{height}" fill="#f8f9fb"/>',
        (
            f'<rect x="{margin}" y="{margin}" width="{plot_w}" height="{plot_h}" '
            'fill="#ffffff" stroke="#e0e0e0" stroke-width="1" rx="6" ry="6"/>'
        ),
        f'<line x1="{margin}" y1="{height - margin}" x2="{margin}" y2="{margin}" stroke="#000" stroke-width="1"/>',
        f'<line x1="{margin}" y1="{height - margin}" x2="{width - margin}" y2="{height - margin}" stroke="#000" stroke-width="1"/>',
    ]


def render_restart_markers(
    values: Sequence[float],
    scale_x: Callable[[float], float],
    x_min: float,
    x_max: float,
    margin: int,
    height: int,
) -> list[str]:
    """Render dashed vertical restart-marker lines with labels."""
    elements: list[str] = []
    for v in values:
        if x_min <= v <= x_max:
            rx = scale_x(v)
            elements.append(
                f'<line x1="{rx:.1f}" y1="{margin}" x2="{rx:.1f}" y2="{height - margin}"'
                f' stroke="#ff861d" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.7"/>'
            )
            elements.append(
                f'<text x="{rx + 4:.1f}" y="{margin + 12}" font-size="10" fill="#ff861d" opacity="0.8">restart</text>'
            )
    return elements


def render_legend(
    legend_groups: dict[str, list[tuple[str, str]]],
    margin: int,
    width: int,
    col_width: int = 140,
    y_start: int | None = None,
) -> list[str]:
    """Render the legend box with group names, colored squares, and labels."""
    if not legend_groups:
        return []
    n_cols = len(legend_groups)
    legend_total_w = col_width * n_cols + 20
    legend_x = max(margin + 10, width - margin - legend_total_w)
    legend_y_start = y_start if y_start is not None else margin + 10
    max_rows = max((len(v) for v in legend_groups.values()), default=0)
    legend_h = 22 + 18 * max_rows if max_rows else 0
    elements: list[str] = []
    if legend_h > 0:
        elements.append(
            f'<rect x="{legend_x - 8}" y="{legend_y_start - 12}" '
            f'width="{legend_total_w}" height="{legend_h}" '
            'fill="#ffffff" stroke="#e0e0e0" stroke-width="1" rx="6" ry="6" opacity="0.9"/>'
        )
    for col_idx, group_name in enumerate(sorted(legend_groups)):
        items = sorted(legend_groups[group_name], key=lambda t: t[0])
        x_base = legend_x + col_idx * col_width
        y_base = legend_y_start
        elements.append(
            f'<text x="{x_base}" y="{y_base}" font-size="12" fill="#000" font-weight="bold">{group_name}</text>'
        )
        for row_idx, (label, color) in enumerate(items, start=1):
            y = y_base + 18 * row_idx
            elements.append(f'<rect x="{x_base}" y="{y - 9}" width="12" height="12" fill="{color}" />')
            display_label = label.strip() or "value"
            elements.append(
                f'<text x="{x_base + 18}" y="{y}" font-size="12" fill="#000" '
                f'dominant-baseline="middle">{display_label}</text>'
            )
    return elements
