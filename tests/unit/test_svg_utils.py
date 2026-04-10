from __future__ import annotations

import math

import pytest

from csauto.svg_utils import (
    COLOR_PALETTE,
    as_float,
    linear_ticks,
    log_ticks,
    render_axis_labels,
    render_grid_lines,
    render_legend,
    render_series_paths,
    render_tick_marks,
    svg_boilerplate,
)


def test_as_float_valid():
    assert as_float("3.14") == 3.14
    assert as_float("0") == 0.0
    assert as_float("-1e3") == -1000.0


def test_as_float_none_and_invalid():
    assert as_float(None) is None
    assert as_float("abc") is None
    assert as_float("") is None


def test_color_palette_length():
    assert len(COLOR_PALETTE) == 10
    assert all(c.startswith("#") for c in COLOR_PALETTE)


def test_svg_boilerplate_structure():
    elements = svg_boilerplate(width=900, height=500, margin=70, plot_w=760, plot_h=360)
    joined = "\n".join(elements)
    assert '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="500">' in joined
    assert "<style>" in joined
    assert 'fill="#f8f9fb"' in joined
    assert 'rx="6"' in joined
    assert "<line" in joined
    assert joined.count("<line") == 2


def test_linear_ticks_count_and_order():
    ticks = linear_ticks(0.0, 100.0, n=5)
    assert len(ticks) == 5
    values = [v for v, _ in ticks]
    assert values == sorted(values)
    assert values[0] == 0.0
    assert values[-1] == 100.0
    assert all(isinstance(label, str) for _, label in ticks)


def test_linear_ticks_edge_case_equal():
    ticks = linear_ticks(5.0, 5.0, n=5)
    assert len(ticks) == 1
    assert ticks[0][0] == 5.0


def test_linear_ticks_custom_fmt():
    ticks = linear_ticks(0.0, 2000.0, n=3, fmt=".0f")
    labels = [label for _, label in ticks]
    assert labels == ["0", "1000", "2000"]
    ticks_default = linear_ticks(0.0, 2000.0, n=3)
    default_labels = [label for _, label in ticks_default]
    assert default_labels == ["0", "1e+03", "2e+03"]


def test_log_ticks_powers():
    ticks = log_ticks(0.001, 1000.0)
    values = [v for v, _ in ticks]
    labels = [label for _, label in ticks]
    assert 0.001 in values
    assert 1000.0 in values
    assert "1e-3" in labels
    assert "1e3" in labels
    for v in values:
        assert math.log10(v) == int(math.log10(v))


def test_log_ticks_narrow_range():
    ticks = log_ticks(5.0, 8.0)
    assert len(ticks) >= 1


def test_log_ticks_invalid_min():
    with pytest.raises(ValueError, match="min_v must be positive"):
        log_ticks(0.0, 10.0)
    with pytest.raises(ValueError, match="min_v must be positive"):
        log_ticks(-1.0, 10.0)


def test_render_tick_marks_x():
    ticks = [(0.0, "0"), (50.0, "50"), (100.0, "100")]
    scale_fn = lambda v: 70 + v * 7.6
    elements = render_tick_marks(ticks, "x", scale_fn, margin=70, width=900, height=500)
    joined = "\n".join(elements)
    assert joined.count("<line") == 3
    assert joined.count("<text") == 3
    assert 'text-anchor="middle"' in joined


def test_render_tick_marks_y():
    ticks = [(1.0, "1e0"), (10.0, "1e1")]
    scale_fn = lambda v: 430 - v * 36
    elements = render_tick_marks(ticks, "y", scale_fn, margin=70, width=900, height=500)
    joined = "\n".join(elements)
    assert joined.count("<line") == 2
    assert joined.count("<text") == 2
    assert 'text-anchor="end"' in joined


def test_render_grid_lines():
    ticks = [(0.0, "0"), (50.0, "50")]
    scale_fn = lambda v: 70 + v * 7.6
    elements = render_grid_lines(ticks, "x", scale_fn, margin=70, width=900, height=500)
    joined = "\n".join(elements)
    assert joined.count("<line") == 2
    assert "stroke-dasharray" in joined


def test_render_axis_labels():
    elements = render_axis_labels("Iteration", "Residuals (log10)", margin=70, width=900, height=500)
    joined = "\n".join(elements)
    assert "<text" in joined
    assert "Iteration" in joined
    assert "Residuals (log10)" in joined
    assert "rotate(-90" in joined
    assert joined.count("<text") == 2


def test_render_series_paths():
    series = [
        ("case0001:velocity", [(0, 1.0), (10, 0.5), (20, 0.1)], "#4c6ef5"),
    ]
    scale_x = lambda x: 70 + x * 38.0
    scale_y = lambda y: 430 - y * 360.0
    elements = render_series_paths(series, scale_x, scale_y)
    joined = "\n".join(elements)
    assert '<path d="M' in joined
    assert "L" in joined
    assert "<circle" in joined
    assert "<title>" in joined
    assert "case0001:velocity" in joined


def test_render_series_empty():
    elements = render_series_paths([], lambda x: x, lambda y: y)
    assert elements == []


def test_render_series_paths_custom_tooltip():
    series = [
        ("mykey", [(5, 100.0)], "#ff0000"),
    ]
    custom_fn = lambda label, x, y: f"CUSTOM {label} x={x:.0f} y={y:.0f}"
    elements = render_series_paths(series, lambda x: x, lambda y: y, tooltip_fn=custom_fn)
    joined = "\n".join(elements)
    assert "CUSTOM mykey x=5 y=100" in joined


def test_render_legend_single_group():
    groups = {"case0001": [("velocity", "#4c6ef5"), ("pressure", "#f59f00")]}
    elements = render_legend(groups, margin=70, width=900)
    joined = "\n".join(elements)
    assert "case0001" in joined
    assert 'font-weight="bold"' in joined
    assert 'fill="#4c6ef5"' in joined
    assert "velocity" in joined
    assert "pressure" in joined
    assert 'opacity="0.9"' in joined


def test_render_tick_marks_invalid_axis():
    with pytest.raises(ValueError, match="axis must be"):
        render_tick_marks([(1.0, "1")], "z", lambda v: v, margin=70, width=900, height=500)


def test_render_grid_lines_invalid_axis():
    with pytest.raises(ValueError, match="axis must be"):
        render_grid_lines([(1.0, "1")], "z", lambda v: v, margin=70, width=900, height=500)


def test_render_legend_multi_group():
    groups = {
        "case0001": [("velocity", "#4c6ef5")],
        "case0002": [("pressure", "#f59f00")],
    }
    elements = render_legend(groups, margin=70, width=900)
    joined = "\n".join(elements)
    assert "case0001" in joined
    assert "case0002" in joined
    assert joined.count('font-weight="bold"') == 2
