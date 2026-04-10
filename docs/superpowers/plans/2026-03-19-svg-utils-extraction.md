# SVG Utils Extraction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract duplicated SVG rendering code from `csauto/residuals.py` and `csauto/probes.py` into `csauto/svg_utils.py`, with zero public API changes.

**Architecture:** Pure utility functions in a new `svg_utils.py` module, each returning `list[str]` of SVG elements. The two existing render functions become orchestrators that call these utilities. TDD: tests first for each function, then implementation.

**Tech Stack:** Python 3.11+ standard library only. pytest for tests.

**Spec:** `docs/superpowers/specs/2026-03-19-svg-utils-extraction-design.md`

---

## File Map

| Action | File | Responsibility |
|---|---|---|
| **Create** | `csauto/svg_utils.py` | Shared SVG constants + pure rendering functions |
| **Create** | `tests/unit/test_svg_utils.py` | Unit tests for all svg_utils functions |
| **Modify** | `csauto/residuals.py` | Replace inline SVG code with svg_utils calls |
| **Modify** | `csauto/probes.py` | Replace inline SVG code with svg_utils calls, remove `_as_float` |

---

### Task 1: `as_float` + `COLOR_PALETTE`

**Files:**
- Create: `csauto/svg_utils.py`
- Create: `tests/unit/test_svg_utils.py`

- [ ] **Step 1: Write failing tests for `as_float` and `COLOR_PALETTE`**

```python
# tests/unit/test_svg_utils.py
from __future__ import annotations

from csauto.svg_utils import COLOR_PALETTE, as_float


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
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `pytest tests/unit/test_svg_utils.py -v`
Expected: FAIL — `ModuleNotFoundError: No module named 'csauto.svg_utils'`

- [ ] **Step 3: Implement `as_float` and `COLOR_PALETTE`**

```python
# csauto/svg_utils.py
from __future__ import annotations

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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `pytest tests/unit/test_svg_utils.py -v`
Expected: 3 PASSED

- [ ] **Step 5: Commit**

```bash
git add csauto/svg_utils.py tests/unit/test_svg_utils.py
git commit -m "Add svg_utils module with as_float and COLOR_PALETTE"
```

---

### Task 2: `svg_boilerplate`

**Files:**
- Modify: `csauto/svg_utils.py`
- Modify: `tests/unit/test_svg_utils.py`

- [ ] **Step 1: Write failing test**

```python
from csauto.svg_utils import svg_boilerplate


def test_svg_boilerplate_structure():
    elements = svg_boilerplate(width=900, height=500, margin=70, plot_w=760, plot_h=360)
    joined = "\n".join(elements)
    assert '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="500">' in joined
    assert "<style>" in joined
    assert 'fill="#f8f9fb"' in joined  # background rect
    assert 'rx="6"' in joined  # plot area rounded corners
    assert "<line" in joined  # axes
    # Exactly 2 axis lines (X and Y)
    assert joined.count("<line") == 2
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/unit/test_svg_utils.py::test_svg_boilerplate_structure -v`
Expected: FAIL — `ImportError: cannot import name 'svg_boilerplate'`

- [ ] **Step 3: Implement `svg_boilerplate`**

Add to `csauto/svg_utils.py`:

```python
def svg_boilerplate(
    width: int, height: int, margin: int, plot_w: int, plot_h: int
) -> list[str]:
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pytest tests/unit/test_svg_utils.py::test_svg_boilerplate_structure -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add csauto/svg_utils.py tests/unit/test_svg_utils.py
git commit -m "Add svg_boilerplate to svg_utils"
```

---

### Task 3: `linear_ticks` and `log_ticks`

**Files:**
- Modify: `csauto/svg_utils.py`
- Modify: `tests/unit/test_svg_utils.py`

- [ ] **Step 1: Write failing tests**

```python
import math
import pytest

from csauto.svg_utils import linear_ticks, log_ticks


def test_linear_ticks_count_and_order():
    ticks = linear_ticks(0.0, 100.0, n=5)
    assert len(ticks) == 5
    values = [v for v, _ in ticks]
    assert values == sorted(values)
    assert values[0] == 0.0
    assert values[-1] == 100.0
    # Labels are formatted strings
    assert all(isinstance(label, str) for _, label in ticks)


def test_linear_ticks_edge_case_equal():
    ticks = linear_ticks(5.0, 5.0, n=5)
    assert len(ticks) == 1
    assert ticks[0][0] == 5.0


def test_linear_ticks_custom_fmt():
    ticks = linear_ticks(0.0, 2000.0, n=3, fmt=".0f")
    labels = [label for _, label in ticks]
    assert labels == ["0", "1000", "2000"]
    # Default .3g would produce "2e+03" for 2000
    ticks_default = linear_ticks(0.0, 2000.0, n=3)
    default_labels = [label for _, label in ticks_default]
    assert default_labels == ["0", "1e+03", "2e+03"]


def test_log_ticks_powers():
    ticks = log_ticks(0.001, 1000.0)
    values = [v for v, _ in ticks]
    labels = [label for _, label in ticks]
    # Should include powers 1e-3 through 1e3
    assert 0.001 in values
    assert 1000.0 in values
    assert "1e-3" in labels
    assert "1e3" in labels
    # All values are powers of 10
    for v in values:
        assert math.log10(v) == int(math.log10(v))


def test_log_ticks_narrow_range():
    ticks = log_ticks(5.0, 8.0)
    # Range within one decade — no integer power of 10 inside
    # Should still return at least 1 tick (nearest bounding powers)
    assert len(ticks) >= 1


def test_log_ticks_invalid_min():
    with pytest.raises(ValueError, match="min_v must be positive"):
        log_ticks(0.0, 10.0)
    with pytest.raises(ValueError, match="min_v must be positive"):
        log_ticks(-1.0, 10.0)
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `pytest tests/unit/test_svg_utils.py -k "tick" -v`
Expected: FAIL — `ImportError`

- [ ] **Step 3: Implement `linear_ticks` and `log_ticks`**

Add to `csauto/svg_utils.py`:

```python
import math


def linear_ticks(
    min_v: float, max_v: float, n: int = 5, fmt: str = ".3g"
) -> list[tuple[float, str]]:
    """Return n evenly spaced (value, label) pairs for a linear axis."""
    if min_v == max_v:
        return [(min_v, f"{min_v:{fmt}}")]
    step = (max_v - min_v) / max(1, n - 1)
    return [(min_v + i * step, f"{min_v + i * step:{fmt}}") for i in range(n)]


def log_ticks(min_v: float, max_v: float) -> list[tuple[float, str]]:
    """Return (value, label) pairs at integer powers of 10 within range."""
    if min_v <= 0:
        raise ValueError("min_v must be positive for log scale")
    exp_min = math.floor(math.log10(min_v))
    exp_max = math.ceil(math.log10(max_v))
    ticks = []
    for exp in range(exp_min, exp_max + 1):
        v = 10 ** exp
        if v < min_v or v > max_v:
            continue
        ticks.append((v, f"1e{exp}"))
    if not ticks:
        # Narrow range — include bounding powers
        ticks.append((10 ** exp_min, f"1e{exp_min}"))
    return ticks
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `pytest tests/unit/test_svg_utils.py -k "tick" -v`
Expected: 6 PASSED

- [ ] **Step 5: Commit**

```bash
git add csauto/svg_utils.py tests/unit/test_svg_utils.py
git commit -m "Add linear_ticks and log_ticks to svg_utils"
```

---

### Task 4: `render_tick_marks` and `render_grid_lines`

**Files:**
- Modify: `csauto/svg_utils.py`
- Modify: `tests/unit/test_svg_utils.py`

- [ ] **Step 1: Write failing tests**

```python
from csauto.svg_utils import render_tick_marks, render_grid_lines


def test_render_tick_marks_x():
    ticks = [(0.0, "0"), (50.0, "50"), (100.0, "100")]
    scale_fn = lambda v: 70 + v * 7.6  # simple linear scale
    elements = render_tick_marks(ticks, "x", scale_fn, margin=70, width=900, height=500)
    joined = "\n".join(elements)
    assert joined.count("<line") == 3
    assert joined.count("<text") == 3
    assert 'text-anchor="middle"' in joined


def test_render_tick_marks_y():
    ticks = [(1.0, "1e0"), (10.0, "1e1")]
    scale_fn = lambda v: 430 - v * 36  # simple linear scale
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
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `pytest tests/unit/test_svg_utils.py -k "render_tick or render_grid" -v`
Expected: FAIL — `ImportError`

- [ ] **Step 3: Implement `render_tick_marks` and `render_grid_lines`**

Add to `csauto/svg_utils.py` (add `Callable` to the typing import):

```python
from typing import Callable, Sequence


def render_tick_marks(
    ticks: list[tuple[float, str]],
    axis: str,
    scale_fn: Callable[[float], float],
    margin: int,
    width: int,
    height: int,
) -> list[str]:
    """Render tick marks (short lines + text labels) for an axis."""
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
                f'<line x1="{margin - 5}" y1="{pos}" x2="{margin}" '
                f'y2="{pos}" stroke="#000" stroke-width="1"/>'
            )
            elements.append(
                f'<text x="{margin - 10}" y="{pos + 4}" font-size="12" '
                f'text-anchor="end" fill="#000">{label}</text>'
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `pytest tests/unit/test_svg_utils.py -k "render_tick or render_grid" -v`
Expected: 3 PASSED

- [ ] **Step 5: Commit**

```bash
git add csauto/svg_utils.py tests/unit/test_svg_utils.py
git commit -m "Add render_tick_marks and render_grid_lines to svg_utils"
```

---

### Task 5: `render_axis_labels`

**Files:**
- Modify: `csauto/svg_utils.py`
- Modify: `tests/unit/test_svg_utils.py`

- [ ] **Step 1: Write failing test**

```python
from csauto.svg_utils import render_axis_labels


def test_render_axis_labels():
    elements = render_axis_labels("Iteration", "Residuals (log10)", margin=70, width=900, height=500)
    joined = "\n".join(elements)
    assert "<text" in joined
    assert "Iteration" in joined
    assert "Residuals (log10)" in joined
    assert "rotate(-90" in joined
    assert joined.count("<text") == 2
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/unit/test_svg_utils.py::test_render_axis_labels -v`
Expected: FAIL — `ImportError`

- [ ] **Step 3: Implement `render_axis_labels`**

Add to `csauto/svg_utils.py`:

```python
def render_axis_labels(
    x_label: str, y_label: str, margin: int, width: int, height: int
) -> list[str]:
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pytest tests/unit/test_svg_utils.py::test_render_axis_labels -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add csauto/svg_utils.py tests/unit/test_svg_utils.py
git commit -m "Add render_axis_labels to svg_utils"
```

---

### Task 6: `render_series_paths`

**Files:**
- Modify: `csauto/svg_utils.py`
- Modify: `tests/unit/test_svg_utils.py`

- [ ] **Step 1: Write failing tests**

```python
from csauto.svg_utils import render_series_paths


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
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `pytest tests/unit/test_svg_utils.py -k "render_series" -v`
Expected: FAIL — `ImportError`

- [ ] **Step 3: Implement `render_series_paths`**

Add to `csauto/svg_utils.py`:

```python
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
        tooltip_fn = lambda label, x, y: f"{label} @ {x:.3g}: {y:.3g}"
    elements: list[str] = []
    for label, pts, color in ordered_series:
        path_parts = []
        for i, (x, y) in enumerate(pts):
            px, py = scale_x(x), scale_y(y)
            cmd = "M" if i == 0 else "L"
            path_parts.append(f"{cmd}{px:.2f},{py:.2f}")
        path_d = " ".join(path_parts)
        elements.append(
            f'<path d="{path_d}" fill="none" stroke="{color}" stroke-width="1.5"/>'
        )
        if pts:
            last_x, last_y = pts[-1]
            mx, my = scale_x(last_x), scale_y(last_y)
            title = tooltip_fn(label, last_x, last_y)
            elements.append(
                f'<circle cx="{mx:.2f}" cy="{my:.2f}" r="3.5" fill="{color}" '
                f'stroke="#fff" stroke-width="1"><title>{title}</title></circle>'
            )
    return elements
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `pytest tests/unit/test_svg_utils.py -k "render_series" -v`
Expected: 3 PASSED

- [ ] **Step 5: Commit**

```bash
git add csauto/svg_utils.py tests/unit/test_svg_utils.py
git commit -m "Add render_series_paths to svg_utils"
```

---

### Task 7: `render_legend`

**Files:**
- Modify: `csauto/svg_utils.py`
- Modify: `tests/unit/test_svg_utils.py`

- [ ] **Step 1: Write failing tests**

```python
from csauto.svg_utils import render_legend


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


def test_render_legend_multi_group():
    groups = {
        "case0001": [("velocity", "#4c6ef5")],
        "case0002": [("pressure", "#f59f00")],
    }
    elements = render_legend(groups, margin=70, width=900)
    joined = "\n".join(elements)
    assert "case0001" in joined
    assert "case0002" in joined
    # Two bold group headers
    assert joined.count('font-weight="bold"') == 2
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `pytest tests/unit/test_svg_utils.py -k "render_legend" -v`
Expected: FAIL — `ImportError`

- [ ] **Step 3: Implement `render_legend`**

Add to `csauto/svg_utils.py`:

```python
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
            f'<text x="{x_base}" y="{y_base}" font-size="12" fill="#000" '
            f'font-weight="bold">{group_name}</text>'
        )
        for row_idx, (label, color) in enumerate(items, start=1):
            y = y_base + 18 * row_idx
            elements.append(
                f'<rect x="{x_base}" y="{y - 9}" width="12" height="12" fill="{color}" />'
            )
            display_label = label.strip() or "value"
            elements.append(
                f'<text x="{x_base + 18}" y="{y}" font-size="12" fill="#000" '
                f'dominant-baseline="middle">{display_label}</text>'
            )
    return elements
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `pytest tests/unit/test_svg_utils.py -k "render_legend" -v`
Expected: 2 PASSED

- [ ] **Step 5: Run all svg_utils tests**

Run: `pytest tests/unit/test_svg_utils.py -v`
Expected: 18 PASSED

- [ ] **Step 6: Commit**

```bash
git add csauto/svg_utils.py tests/unit/test_svg_utils.py
git commit -m "Add render_legend to svg_utils — module complete"
```

---

### Task 8: Refactor `residuals.py` to use `svg_utils`

**Files:**
- Modify: `csauto/residuals.py:351-589` (the `render_residuals_svg` function)

- [ ] **Step 1: Run existing residuals tests to establish baseline**

Run: `pytest tests/ -k "residual" -v`
Expected: all existing residual tests PASS (record count)

- [ ] **Step 2: Add svg_utils import to residuals.py**

At the top of `csauto/residuals.py`, add after the existing imports:

```python
from .svg_utils import (
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
```

- [ ] **Step 3: Replace SVG code in `render_residuals_svg`**

In `render_residuals_svg`, replace the inline SVG construction (lines 433-588) with calls to svg_utils functions. Keep:
- Data parsing and series building (lines 385-417) — unchanged
- `scale_x` and `scale_y` (log10) definitions — unchanged
- `ordered_series` and `legend_groups` construction — unchanged but adapt to svg_utils signature

The function body after the data-preparation section becomes:

```python
    margin = 70
    plot_w = width - 2 * margin
    plot_h = height - 2 * margin

    def scale_x(x: float) -> float:
        return margin + (x - x_min) / (x_max - x_min) * plot_w

    def scale_y(y: float) -> float:
        return height - margin - (math.log10(y) - math.log10(y_min)) / (
            math.log10(y_max) - math.log10(y_min)
        ) * plot_h

    svg_elements: list[str] = svg_boilerplate(width, height, margin, plot_w, plot_h)

    x_ticks = linear_ticks(x_min, x_max, n=5, fmt=".0f")
    y_ticks = log_ticks(y_min, y_max)
    svg_elements.extend(render_tick_marks(x_ticks, "x", scale_x, margin, width, height))
    svg_elements.extend(render_tick_marks(y_ticks, "y", scale_y, margin, width, height))
    svg_elements.extend(render_grid_lines(linear_ticks(x_min, x_max, n=6, fmt=".0f"), "x", scale_x, margin, width, height))
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
    svg_elements.extend(render_legend(legend_groups, margin, width))
    svg_elements.append("</svg>")
    return "\n".join(svg_elements)
```

- [ ] **Step 4: Run existing residuals tests to verify no regression**

Run: `pytest tests/ -k "residual" -v`
Expected: same count PASSED as step 1, zero failures

- [ ] **Step 5: Commit**

```bash
git add csauto/residuals.py
git commit -m "Refactor render_residuals_svg to use svg_utils"
```

---

### Task 9: Refactor `probes.py` to use `svg_utils`

**Files:**
- Modify: `csauto/probes.py:421-677` (the `render_probe_svg` function)
- Modify: `csauto/probes.py:221-227` (remove `_as_float`, replace usages)

- [ ] **Step 1: Run existing probe tests to establish baseline**

Run: `pytest tests/ -k "probe" -v`
Expected: all existing probe tests PASS (record count)

- [ ] **Step 2: Add svg_utils import and remove `_as_float`**

At the top of `csauto/probes.py`, add after the existing imports:

```python
from .svg_utils import (
    COLOR_PALETTE,
    as_float,
    linear_ticks,
    render_axis_labels,
    render_grid_lines,
    render_legend,
    render_series_paths,
    render_tick_marks,
    svg_boilerplate,
)
```

Remove the `_as_float` function (lines 221-227). Replace its usage in `_extract_coord_value` (line 234): change `_as_float(value)` to `as_float(value)`.

- [ ] **Step 3: Replace SVG code in `render_probe_svg`**

In `render_probe_svg`, replace the inline SVG construction (lines 520-677) with calls to svg_utils functions. Keep:
- Data parsing and series building — unchanged
- `scale_x` and `scale_y` (linear) definitions — unchanged
- `ordered_keys` construction — unchanged but adapt to svg_utils signature

The function body after the data-preparation section becomes:

```python
    margin = 70
    plot_w = width - 2 * margin
    plot_h = height - 2 * margin

    def scale_x(x: float) -> float:
        return margin + (x - x_min) / (x_max - x_min) * plot_w

    def scale_y(y: float) -> float:
        return height - margin - (y - y_min) / (y_max - y_min) * plot_h

    svg_elements: list[str] = svg_boilerplate(width, height, margin, plot_w, plot_h)

    x_ticks = linear_ticks(x_min, x_max, n=5)
    y_ticks = linear_ticks(y_min, y_max, n=5)
    svg_elements.extend(render_tick_marks(x_ticks, "x", scale_x, margin, width, height))
    svg_elements.extend(render_tick_marks(y_ticks, "y", scale_y, margin, width, height))
    svg_elements.extend(render_grid_lines(linear_ticks(x_min, x_max, n=6), "x", scale_x, margin, width, height))
    svg_elements.extend(render_grid_lines(linear_ticks(y_min, y_max, n=6), "y", scale_y, margin, width, height))

    y_label = "Probes"
    if len(probe_list) == 1:
        suffix = probe_label_suffix(probe_list[0])
        if suffix and suffix.lower() not in {"probe", "probes"}:
            y_label = f"{y_label} · {suffix}"
    svg_elements.extend(render_axis_labels(axis.capitalize(), y_label, margin, width, height))

    ordered_keys = sorted(series.keys(), key=lambda k: (k[0], k[1] or "", k[2]))
    ordered_series_list: list[tuple[str, list[tuple[float, float]], str]] = []
    legend_groups: dict[str, list[tuple[str, str]]] = {}
    for idx, key in enumerate(ordered_keys):
        case_name, probe_name, col_name = key
        color = COLOR_PALETTE[idx % len(COLOR_PALETTE)]
        label_parts = [case_name]
        if probe_name:
            label_parts.append(probe_name)
        label_parts.append(col_name)
        series_label = " | ".join(p for p in label_parts if p)
        ordered_series_list.append((series_label, sorted(series[key], key=lambda p: p[0]), color))
        legend_label = col_name.strip() or "value"
        if probe_name:
            legend_label = f"{probe_name} · {legend_label}"
        legend_groups.setdefault(case_name, []).append((legend_label, color))

    svg_elements.extend(render_series_paths(ordered_series_list, scale_x, scale_y))
    svg_elements.extend(render_legend(legend_groups, margin, width))
    svg_elements.append("</svg>")
    return "\n".join(svg_elements)
```

- [ ] **Step 4: Run existing probe tests to verify no regression**

Run: `pytest tests/ -k "probe" -v`
Expected: same count PASSED as step 1, zero failures

- [ ] **Step 5: Commit**

```bash
git add csauto/probes.py
git commit -m "Refactor render_probe_svg to use svg_utils, remove _as_float"
```

---

### Task 10: Full regression + cleanup

**Files:**
- All modified files

- [ ] **Step 1: Run the full test suite**

Run: `pytest tests/ -v`
Expected: same pass/skip counts as before the refactoring. Zero new failures.

- [ ] **Step 2: Verify no leftover dead code**

Check that `csauto/residuals.py` no longer contains:
- The `colors = [...]` list inside `render_residuals_svg`
- The `add_ticks` inner function
- The tick/grid rendering loops
- The series path rendering loop
- The legend rendering loop

Check that `csauto/probes.py` no longer contains:
- The `colors = [...]` list inside `render_probe_svg`
- The `add_ticks` inner function
- The `as_float` nested function inside `render_probe_svg`
- The `_as_float` module-level function
- The tick/grid/series/legend rendering loops

- [ ] **Step 3: Commit cleanup if any dead code found**

```bash
git add -u
git commit -m "Remove leftover dead code from SVG extraction"
```

- [ ] **Step 4: Run full test suite one final time**

Run: `pytest tests/ -v`
Expected: all tests pass, same counts as step 1
