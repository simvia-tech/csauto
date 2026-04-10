from __future__ import annotations

import csv
import math
from collections.abc import Mapping, Sequence
from pathlib import Path

from .pathutil import is_within_root, safe_subpath
from .registry import STATUS_PREPARED, load_registry
from .svg_utils import (
    COLOR_PALETTE,
    as_float,
    linear_ticks,
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


def latest_resu_dir(case_dir: Path) -> Path | None:
    """Return latest RESU subdirectory by mtime."""
    resu_root = case_dir / "RESU"
    if not resu_root.is_dir():
        return None
    subdirs = [d for d in resu_root.iterdir() if d.is_dir()]
    if not subdirs:
        return None
    subdirs.sort(key=lambda p: p.stat().st_mtime, reverse=True)
    return subdirs[0]


def _iter_resu_subdirs(case_dir: Path) -> list[Path]:
    resu_root = case_dir / "RESU"
    if not resu_root.is_dir():
        return []
    return [sub for sub in resu_root.iterdir() if sub.is_dir()]


def _iter_resu_subdirs_sorted(case_dir: Path, reverse: bool = False) -> list[Path]:
    subdirs = _iter_resu_subdirs(case_dir)
    subdirs.sort(key=lambda p: p.stat().st_mtime, reverse=reverse)
    return subdirs


def _list_case_csv_files(case_dir: Path, subdir_name: str, limit: int = 200, with_prefix: bool = False) -> list[str]:
    latest = latest_resu_dir(case_dir)
    if not latest:
        return []
    target_dir = latest / subdir_name
    if not target_dir.is_dir():
        return []
    files: list[str] = []
    for path in sorted(target_dir.glob("*.csv")):
        if not path.is_file():
            continue
        files.append(f"{subdir_name}/{path.name}" if with_prefix else path.name)
        if len(files) >= limit:
            break
    return files


def list_probe_files(case_dir: Path, limit: int = 200) -> list[str]:
    """List probe CSV files (by name) in latest RESU monitoring directory."""
    return _list_case_csv_files(case_dir, "monitoring", limit=limit, with_prefix=False)


def list_profile_files(case_dir: Path, limit: int = 200) -> list[str]:
    """List profile CSV files (with profiles/ prefix) in latest RESU profiles directory."""
    return _list_case_csv_files(case_dir, "profiles", limit=limit, with_prefix=True)


def _pick_most_recent(paths: Sequence[Path]) -> Path | None:
    best: Path | None = None
    best_mtime = float("-inf")
    for candidate in paths:
        try:
            mtime = candidate.stat().st_mtime
        except OSError:
            continue
        if best is None or mtime > best_mtime:
            best = candidate
            best_mtime = mtime
    return best


def _locate_in_resu_subdir(case_dir: Path, subdir_name: str, name: str) -> Path | None:
    latest = latest_resu_dir(case_dir)
    latest_candidate: Path | None = None
    if latest:
        candidate = latest / subdir_name / name
        if candidate.is_file() and is_within_root(candidate, case_dir.resolve()):
            latest_candidate = candidate

    all_candidates: list[Path] = []
    for sub in _iter_resu_subdirs(case_dir):
        candidate = sub / subdir_name / name
        if candidate.is_file() and is_within_root(candidate, case_dir.resolve()):
            all_candidates.append(candidate)
    newest = _pick_most_recent(all_candidates)
    if latest_candidate and newest:
        # If latest RESU contains the file, keep current behavior and prefer it.
        return latest_candidate
    return latest_candidate or newest


def _locate_in_resu_subdir_all(case_dir: Path, subdir_name: str, name: str) -> list[Path]:
    matches: list[Path] = []
    for sub in _iter_resu_subdirs_sorted(case_dir, reverse=False):
        candidate = sub / subdir_name / name
        if candidate.is_file() and is_within_root(candidate, case_dir.resolve()):
            matches.append(candidate)
    return matches


def locate_probe_files(case_dir: Path, probe_ref: str, include_history: bool = False) -> list[Path]:
    """Resolve a probe file reference to one or more file paths.

    If include_history is False, returns at most one file to preserve legacy behavior.
    If include_history is True, returns matching files across RESU runs, oldest to newest.
    """
    if not probe_ref:
        return []
    ref_path = Path(probe_ref)
    direct = safe_subpath(case_dir, ref_path)
    if direct and direct.is_file():
        return [direct]
    ref_parts = [part for part in ref_path.parts if part not in {".", ""}]
    if len(ref_parts) >= 2 and ref_parts[0] in {"monitoring", "profiles"}:
        scope = ref_parts[0]
        name = Path(ref_parts[-1]).name
        if include_history:
            return _locate_in_resu_subdir_all(case_dir, scope, name)
        scoped = _locate_in_resu_subdir(case_dir, scope, name)
        return [scoped] if scoped else []
    name = ref_path.name
    if not name:
        return []
    for subdir_name in ("monitoring", "profiles"):
        if include_history:
            matches = _locate_in_resu_subdir_all(case_dir, subdir_name, name)
            if matches:
                return matches
        else:
            candidate = _locate_in_resu_subdir(case_dir, subdir_name, name)
            if candidate:
                return [candidate]
    return []


def locate_probe_file(case_dir: Path, probe_ref: str) -> Path | None:
    """Resolve a probe file reference to a real file path."""
    matches = locate_probe_files(case_dir, probe_ref, include_history=False)
    return matches[0] if matches else None


def read_probe_records(case_dir: Path, probe_relpath: str, limit: int = 200) -> tuple[list[str], list[dict[str, str]]]:
    """Read probe CSV (limited rows)."""
    probe_path = locate_probe_file(case_dir, probe_relpath)
    if not probe_path or not probe_path.is_file():
        raise FileNotFoundError(f"Probe file not found: {probe_relpath}")
    header: list[str] | None = None
    records: list[dict[str, str]] = []
    with probe_path.open(newline="", encoding="utf-8", errors="ignore") as handle:
        reader = csv.DictReader(handle)
        if reader.fieldnames:
            header = [f.strip() for f in reader.fieldnames if f is not None]
        for idx, row in enumerate(reader, start=1):
            rec: dict[str, str] = {}
            for k, v in row.items():
                if k is None:
                    continue
                rec[k.strip()] = v.strip() if isinstance(v, str) else v
            records.append(rec)
            if limit and idx >= limit:
                break
    return header or [], records


def _normalize_probe_files(probe_files: str | Sequence[str]) -> list[str]:
    if isinstance(probe_files, str):
        return [f.strip() for f in probe_files.split(",") if f.strip()]
    normalized: list[str] = []
    for entry in probe_files:
        if not entry:
            continue
        normalized.extend([f.strip() for f in str(entry).split(",") if f.strip()])
    return normalized


def probe_label_suffix(probe_name: str) -> str:
    """Extract a readable suffix from a probe filename."""
    stem = Path(probe_name).stem
    if "_" in stem:
        suffix = stem.rsplit("_", 1)[-1]
        return suffix or stem
    return stem


def _normalize_coord_key(name: str) -> str:
    return "".join(ch for ch in name.lower() if ch.isalnum())


_COORD_ALIASES: dict[str, set[str]] = {
    "x": {"x", "coordx", "xcoord", "positionx", "xposition", "probex", "x1", "coord1"},
    "y": {"y", "coordy", "ycoord", "positiony", "yposition", "probey", "y2", "coord2"},
    "z": {"z", "coordz", "zcoord", "positionz", "zposition", "probez", "z3", "coord3"},
}
_COORD_INDEX_ALIASES = {"probe", "probeid", "probeindex", "index", "idx", "id", "point", "column", "col"}


def _extract_coord_value(row: Mapping[str, str], axis: str) -> float | None:
    aliases = _COORD_ALIASES.get(axis, set())
    for key, value in row.items():
        if _normalize_coord_key(str(key)) in aliases:
            parsed = as_float(value)
            if parsed is not None:
                return parsed
    return None


def _coords_probe_candidates(probe_ref: str) -> list[str]:
    base = Path(probe_ref).name
    stem = Path(base).stem
    suffix = Path(base).suffix or ".csv"
    candidates = [base]
    if "_" in stem:
        prefix, _ = stem.rsplit("_", 1)
        candidates.append(f"{prefix}_coords{suffix}")
    candidates.append(f"probe_coords{suffix}")
    candidates.append(f"coords{suffix}")
    uniq: list[str] = []
    seen: set[str] = set()
    for item in candidates:
        if item not in seen:
            seen.add(item)
            uniq.append(item)
    return uniq


def _select_coord_row(
    rows: list[tuple[Mapping[str, str], float, float, float | None]],
    column_ref: str | None,
) -> tuple[Mapping[str, str], float, float, float | None] | None:
    if not rows:
        return None
    ref = str(column_ref or "").strip()
    if not ref:
        return rows[0]
    for row, x, y, z in rows:
        for key, value in row.items():
            if _normalize_coord_key(str(key)) in _COORD_INDEX_ALIASES and str(value).strip() == ref:
                return row, x, y, z
    try:
        idx = int(ref)
    except (ValueError, TypeError):
        idx = None
    if idx is not None:
        if idx > 0 and idx <= len(rows):
            return rows[idx - 1]
        if idx >= 0 and idx < len(rows):
            return rows[idx]
    return rows[0]


def probe_position(case_dir: Path, probe_ref: str, column_ref: str | None = None) -> dict[str, float | str]:
    """Return probe coordinates inferred from an associated coords CSV."""
    if not probe_ref:
        return {}
    for candidate in _coords_probe_candidates(probe_ref):
        probe_path = locate_probe_file(case_dir, candidate)
        if not probe_path or not probe_path.is_file():
            continue
        try:
            rows_with_coords: list[tuple[Mapping[str, str], float, float, float | None]] = []
            with probe_path.open(newline="", encoding="utf-8", errors="ignore") as handle:
                reader = csv.DictReader(handle)
                for idx, row in enumerate(reader, start=1):
                    if idx > 200:
                        break
                    if not row:
                        continue
                    normalized_row = {
                        str(k).strip(): v.strip() if isinstance(v, str) else v for k, v in row.items() if k is not None
                    }
                    x = _extract_coord_value(normalized_row, "x")
                    y = _extract_coord_value(normalized_row, "y")
                    z = _extract_coord_value(normalized_row, "z")
                    if x is None or y is None:
                        continue
                    rows_with_coords.append((normalized_row, x, y, z))
            selected = _select_coord_row(rows_with_coords, column_ref)
            if selected is not None:
                _row, x, y, z = selected
                payload: dict[str, float | str] = {"x": x, "y": y, "source": probe_path.name}
                if z is not None:
                    payload["z"] = z
                if column_ref:
                    payload["column"] = str(column_ref)
                return payload
        except OSError:
            continue
    return {}


def read_probe_rows(
    runs_dir: Path,
    cases: Sequence[str],
    probe_files: str | Sequence[str],
    axis: str = "time",
    allow_empty: bool = False,
    include_history: bool = False,
) -> tuple[list[str], list[dict[str, str]]]:
    """Read probe rows for given cases and probe files."""
    if not cases:
        raise ValueError("At least one case must be specified via --case.")
    probe_list = _normalize_probe_files(probe_files)
    if not probe_list:
        raise ValueError("A probe file must be specified.")

    records: list[dict[str, str]] = []
    header: list[str] | None = None

    registry = load_registry(runs_dir)

    for case_id in cases:
        case_dir = runs_dir / case_id
        if not case_dir.is_dir():
            warn(f"case not found: {case_id}")
            continue
        case_status = registry.get(case_id, {}).get("status")
        case_launched = case_status not in (None, STATUS_PREPARED)
        for probe_file in probe_list:
            probe_paths = locate_probe_files(case_dir, probe_file, include_history=include_history)
            if not probe_paths:
                if case_launched:
                    warn(f"probe not found for {case_id}: {probe_file}")
                continue
            for probe_path in probe_paths:
                with probe_path.open(newline="", encoding="utf-8", errors="ignore") as handle:
                    reader = csv.DictReader(handle)
                    if reader.fieldnames is None:
                        warn(f"probe has no header for {case_id}")
                        continue
                    normalized_fields = [f.strip() for f in reader.fieldnames if f is not None]
                    if header is None:
                        header = ["case_id", "probe", *normalized_fields]
                    else:
                        if "probe" not in header:
                            header.append("probe")
                        for field in normalized_fields:
                            if field and field not in header:
                                header.append(field)
                    for row in reader:
                        rec = {"case_id": case_id, "probe": probe_file}
                        for raw_k, raw_v in row.items():
                            if raw_k is None:
                                continue
                            key = raw_k.strip()
                            val = raw_v.strip() if isinstance(raw_v, str) else raw_v
                            rec[key] = val
                        records.append(rec)

    if not records and not allow_empty:
        raise ValueError("No probe data collected.")
    if header is None:
        header = ["case_id"]
    if axis and axis not in header:
        header.append(axis)
    return header, records


def probe_columns(runs_dir: Path, case: str, probe_files: str | Sequence[str]) -> list[str]:
    """Return probe column names (excluding case_id)."""
    case_dir = runs_dir / case
    if not case_dir.is_dir():
        raise FileNotFoundError(f"Case not found: {case}")
    probe_list = _normalize_probe_files(probe_files)
    if not probe_list:
        raise ValueError("No probe file specified.")
    columns: list[str] = []
    seen: set[str] = set()
    for probe_file in probe_list:
        probe_path = locate_probe_file(case_dir, probe_file)
        if not probe_path or not probe_path.is_file():
            raise FileNotFoundError(f"Probe file not found: {probe_file}")
        with probe_path.open(newline="", encoding="utf-8", errors="ignore") as handle:
            reader = csv.DictReader(handle)
            if reader.fieldnames is None:
                continue
            for field in reader.fieldnames:
                if field is None:
                    continue
                name = field.strip()
                if name and name not in seen:
                    seen.add(name)
                    columns.append(name)
    return columns


def render_probe_svg(
    runs_dir: Path,
    cases: Sequence[str],
    probe_file: str | Sequence[str],
    columns: Sequence[str] | None,
    axis: str = "time",
    width: int = 900,
    height: int = 500,
    x_from: float = 0.0,
    include_history: bool = False,
    restart_values: Sequence[float] | None = None,
) -> str:
    """Generate an SVG plot for probe data (time or iteration on x-axis)."""
    probe_list = _normalize_probe_files(probe_file)
    multi_probe = len(probe_list) > 1
    header, rows = read_probe_rows(
        runs_dir,
        cases,
        probe_list,
        axis=axis,
        allow_empty=True,
        include_history=include_history,
    )
    available_cols = [c for c in header if c not in {"case_id", axis, "probe"}]
    cols = list(columns) if columns else available_cols[:2]
    missing = [c for c in cols if c not in available_cols]
    if missing:
        warn(f"probe columns not found: {', '.join(missing)}")
    cols = [c for c in cols if c in available_cols]
    if not cols:
        cols = available_cols[:2] if available_cols else []
        if not cols:
            return empty_svg(width, height, "No probe data available")

    try:
        x_threshold = float(x_from)
    except (ValueError, TypeError):
        x_threshold = 0.0
    if not math.isfinite(x_threshold):
        x_threshold = 0.0

    series: dict[tuple[str, str | None, str], list[tuple[float, float]]] = {}
    x_min = float("inf")
    x_max = float("-inf")
    y_min = float("inf")
    y_max = float("-inf")

    ax_lower = axis.lower()
    if ax_lower in {"time", "t"}:
        axis_candidates_base = ["time", "t"]
    elif ax_lower in {"iteration", "iter"}:
        axis_candidates_base = ["iteration"]
    else:
        axis_candidates_base = [axis]

    for row in rows:
        case_id = row.get("case_id", "")
        probe_name = row.get("probe") if multi_probe else None
        x_val = None
        for ax_name in axis_candidates_base:
            x_val = as_float(row.get(ax_name))
            if x_val is not None:
                break
        if x_val is None:
            continue
        if x_val < x_threshold:
            continue
        x_min = min(x_min, x_val)
        x_max = max(x_max, x_val)
        for col in cols:
            y_val = as_float(row.get(col))
            if y_val is None:
                continue
            key = (case_id, probe_name, col)
            series.setdefault(key, []).append((x_val, y_val))
            y_min = min(y_min, y_val)
            y_max = max(y_max, y_val)

    if not series:
        return empty_svg(width, height, "No numeric data to plot")

    if x_min == float("inf") or x_max == float("-inf"):
        return empty_svg(width, height, "No valid X value")
    if y_min == float("inf") or y_max == float("-inf"):
        return empty_svg(width, height, "No numeric values")

    if x_min == x_max:
        x_max = x_min + 1.0
    if y_min == y_max:
        y_min -= 0.5
        y_max += 0.5

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

    if restart_values:
        svg_elements.extend(render_restart_markers(restart_values, scale_x, x_min, x_max, margin, height))

    svg_elements.extend(render_legend(legend_groups, margin, width))
    svg_elements.append("</svg>")
    return "\n".join(svg_elements)


__all__ = [
    "list_probe_files",
    "list_profile_files",
    "locate_probe_file",
    "locate_probe_files",
    "probe_columns",
    "probe_label_suffix",
    "probe_position",
    "read_probe_records",
    "read_probe_rows",
    "render_probe_svg",
]
