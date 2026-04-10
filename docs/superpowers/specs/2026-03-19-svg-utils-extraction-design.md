# SVG Utils Extraction Design

## Goal

Extract duplicated SVG rendering logic from `csauto/residuals.py` and `csauto/probes.py` into a new `csauto/svg_utils.py` module. This reduces maintenance burden: style or layout changes need only be made in one place.

## Constraints

- Zero change to public API signatures (`render_residuals_svg`, `render_probe_svg`).
- No new external dependencies.
- Approach: pure utility functions returning `list[str]` of SVG elements. No classes, no mutable state.

## Identified Duplication

The following are duplicated (near-identical) between `residuals.py` and `probes.py`:

| Element | residuals.py | probes.py |
|---|---|---|
| Color palette (10 colors) | lines 437-448 | lines 524-535 |
| `as_float` / `_as_float` | `_looks_like_number` + `_parse_iteration` | nested `as_float` in render fn |
| SVG boilerplate (open tag, style, background, plot rect, axes) | lines 458-477 | lines 543-556 |
| `add_ticks()` function | lines 479-496 (log10 Y) | lines 558-570 (linear Y) |
| Tick mark rendering loops | lines 498-511 | lines 572-585 |
| Grid line rendering loops | lines 513-520 | lines 587-594 |
| Series path + circle marker | lines 553-569 | lines 635-657 |
| Legend rendering | lines 571-586 | lines 659-674 |
| Constants: margin=70, plot_w, plot_h, scale_x | lines 433-451 | lines 520-538 |

Key differences that must remain module-specific:
- **Y-axis scaling**: log10 in residuals, linear in probes.
- **Series key type**: `str` in residuals, `tuple[str, str|None, str]` in probes.
- **Axis labels**: "Iteration" / "Residuals (log10)" vs dynamic axis name / "Probes".
- **Tooltip format**: `key @ iter: value` vs `case | probe | col @ x: y`.

## New Module: `csauto/svg_utils.py`

### Constants

```python
COLOR_PALETTE: list[str] = [
    "#4c6ef5", "#f59f00", "#2fb344", "#e03131", "#ae3ec9",
    "#0ca678", "#f76707", "#228be6", "#15aabf", "#fab005",
]
```

### Functions

#### `as_float(value: str | None) -> float | None`

Safe string-to-float conversion. Returns `None` on failure or `None` input. Replaces `_as_float`, nested `as_float`, `_looks_like_number`, and `_parse_iteration` where used for simple conversion.

#### `svg_boilerplate(width: int, height: int, margin: int, plot_w: int, plot_h: int) -> list[str]`

Returns SVG elements: opening `<svg>` tag, `<style>`, background `<rect>`, plot area `<rect>` with rounded corners, X and Y axis `<line>` elements.

#### `linear_ticks(min_v: float, max_v: float, n: int = 5, fmt: str = ".3g") -> list[tuple[float, str]]`

Returns `n` evenly spaced `(value, label)` pairs. Labels formatted with the `fmt` format specifier (default `.3g`). Residuals passes `fmt=".0f"` for integer iteration labels. When `min_v == max_v`, returns a single tick `[(min_v, label)]` instead of `n` identical ticks.

#### `log_ticks(min_v: float, max_v: float) -> list[tuple[float, str]]`

Returns `(value, label)` pairs at integer powers of 10 within range. Labels formatted as `"1eN"`. Raises `ValueError` if `min_v <= 0`.

#### `render_tick_marks(ticks: list[tuple[float, str]], axis: str, scale_fn: Callable[[float], float], margin: int, width: int, height: int) -> list[str]`

Renders tick marks (short lines + text labels) for a given axis ("x" or "y"). Uses `scale_fn` to convert data values to pixel positions.

#### `render_grid_lines(ticks: list[tuple[float, str]], axis: str, scale_fn: Callable[[float], float], margin: int, width: int, height: int) -> list[str]`

Renders dashed grid lines across the plot area for each tick value.

#### `render_axis_labels(x_label: str, y_label: str, margin: int, width: int, height: int) -> list[str]`

Renders X and Y axis label text elements. Y label is rotated -90 degrees. Callers pass their own label strings ("Iteration" / "Residuals (log10)" for residuals, dynamic axis / "Probes" for probes).

#### `render_series_paths(ordered_series: Sequence[tuple[str, list[tuple[float, float]], str]], scale_x: Callable[[float], float], scale_y: Callable[[float], float], tooltip_fn: Callable[[str, float, float], str] | None = None) -> list[str]`

Renders `<path>` polylines and end-of-series `<circle>` markers with `<title>` tooltips. Each entry in `ordered_series` is `(label, sorted_points, color)`. The optional `tooltip_fn(label, x, y) -> str` controls tooltip formatting. Default: `f"{label} @ {x:.3g}: {y:.3g}"`. Residuals passes a custom formatter using `.0f` for iteration values.

#### `render_legend(legend_groups: dict[str, list[tuple[str, str]]], margin: int, width: int, col_width: int = 140, y_start: int | None = None) -> list[str]`

Renders the legend box: background rect (with `opacity="0.9"`), bold group names, colored squares + labels. `legend_groups` maps group names to lists of `(label, color)`. Both modules now use the same semi-transparent legend background.

## Changes to Existing Modules

### `residuals.py`

In `render_residuals_svg`:
1. Replace inline color palette with `COLOR_PALETTE` import.
2. Replace boilerplate SVG construction with `svg_boilerplate()` call.
3. Replace `add_ticks()` inner function: use `linear_ticks()` for X, `log_ticks()` for Y.
4. Replace tick/grid rendering loops with `render_tick_marks()` and `render_grid_lines()` calls, passing `scale_x` and `scale_y` (log10) as callbacks.
5. Replace series path rendering with `render_series_paths()`, formatting labels as `f"{key} @ {last_x:.0f}: {last_y:.3g}"`.
6. Replace legend rendering with `render_legend()`.
7. Keep: data parsing, `scale_y` (log10), axis labels, `empty_svg` calls, all public signatures.

`_looks_like_number` and `_parse_iteration` in residuals.py are used outside SVG rendering (in `parse_residuals_from_log`), so they stay. Only the SVG-internal duplication is removed.

### `probes.py`

In `render_probe_svg`:
1. Same substitutions as residuals: palette, boilerplate, ticks, grid, series, legend.
2. Use `linear_ticks()` for both X and Y axes.
3. Pass `scale_y` (linear) as callback.
4. Format series labels as `f"{title} @ {last_x:.3g}: {last_y:.3g}"` with case/probe/col components.
5. Keep: data parsing, axis candidate logic, multi-probe support, probe_label_suffix, all public signatures.

The nested `as_float` inside `render_probe_svg` is replaced by the `svg_utils.as_float` import. The module-level `_as_float` (line 221, used by `_extract_coord_value`) is also replaced by `svg_utils.as_float` since the logic is identical — this avoids having two functions with the same behavior under different names.

## Tests: `tests/unit/test_svg_utils.py`

All functions in `svg_utils.py` are pure (inputs -> outputs), tested in isolation.

| Test | Validates |
|---|---|
| `test_as_float_valid` | `as_float("3.14")` returns `3.14` |
| `test_as_float_none_and_invalid` | `as_float(None)` and `as_float("abc")` return `None` |
| `test_color_palette_length` | 10 colors, all start with `#` |
| `test_svg_boilerplate_structure` | Contains `<svg`, `<rect`, `<line`, correct width/height |
| `test_linear_ticks_count_and_order` | Returns `n` ticks, ascending values, formatted labels |
| `test_linear_ticks_edge_case_equal` | `min_v == max_v` does not crash |
| `test_log_ticks_powers` | Returns powers of 10, labels match `1eN` |
| `test_log_ticks_narrow_range` | Range < 1 decade returns at least 1 tick |
| `test_log_ticks_invalid_min` | `min_v <= 0` raises `ValueError` |
| `test_render_axis_labels` | Contains `<text` for both labels, Y label has `rotate(-90` |
| `test_render_series_paths_custom_tooltip` | Custom `tooltip_fn` output appears in `<title>` |
| `test_render_tick_marks_x_and_y` | SVG has `<line` and `<text` with correct attributes per axis |
| `test_render_grid_lines` | Contains `stroke-dasharray`, correct coordinates |
| `test_render_series_paths` | `<path d="M...L..."`, `<circle` with `<title>` |
| `test_render_series_empty` | Empty input returns `[]` |
| `test_render_legend_single_group` | Colored rect + label text present |
| `test_render_legend_multi_group` | Multiple groups rendered, case names bold |

Existing tests for `render_residuals_svg` and `render_probe_svg` serve as integration tests validating the wiring.

## File Summary

| Action | File |
|---|---|
| **Create** | `csauto/svg_utils.py` |
| **Modify** | `csauto/residuals.py` (remove ~100 lines of SVG code, add imports + calls) |
| **Modify** | `csauto/probes.py` (remove ~100 lines of SVG code, add imports + calls) |
| **Create** | `tests/unit/test_svg_utils.py` |

Estimated net change: ~150 lines added in `svg_utils.py` + ~80 lines in tests, ~200 lines removed from residuals + probes. Net reduction: ~70 lines with better maintainability.
