from __future__ import annotations

import csv
import re
import shutil
import threading
from collections.abc import Iterable, Mapping, Sequence
from pathlib import Path
from typing import Any

from .registry import STATUS_PREPARED, registry_transaction, update_case
from .template import (
    extract_condition_variables,
    extract_placeholders,
    find_run_cfg,
    find_setup_file,
    render_template,
)
from .warn import warn

RESERVED_COLUMNS = {"case_id"}
CASE_ID_PATTERN = re.compile(r"^[A-Za-z0-9][A-Za-z0-9_.-]*$")
DOE_ROW_CACHE_LOCK = threading.RLock()
DOE_ROW_CACHE: dict[Path, dict[str, Any]] = {}


def _is_temp_or_hidden(relative: Path) -> bool:
    """Return True for editor temp files and hidden paths."""
    name = relative.name
    if any(part.startswith(".") for part in relative.parts):
        return True
    if name.endswith(("~", ".swp", ".swo", ".tmp", ".bak", ".orig")):
        return True
    return bool(name.startswith("#") and name.endswith("#"))


def load_doe(doe_path: Path) -> tuple[list[str], list[dict[str, str]]]:
    """Load the DOE CSV file and return headers and row dictionaries."""
    if not doe_path.is_file():
        raise FileNotFoundError(f"DOE file not found: {doe_path}")

    with doe_path.open(newline="", encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)
        if reader.fieldnames is None:
            raise ValueError("The DOE file has no header row.")

        headers = [name if name is not None else "" for name in reader.fieldnames]
        rows: list[dict[str, str]] = []
        for row in reader:
            normalized = {header: (row.get(header) or "") for header in headers}
            rows.append(normalized)

    if not rows:
        raise ValueError("The DOE file contains no data rows.")

    return headers, rows


def _resolve_case_id(row: Mapping[str, str], row_index: int) -> str:
    """Return the case identifier for a row or raise if missing."""
    if "case_id" in row:
        case_id = (row.get("case_id") or "").strip()
        if not case_id:
            raise ValueError(f"Missing case_id for row {row_index}")
        if "/" in case_id or "\\" in case_id:
            raise ValueError(f"Invalid case_id (contains path separator) for row {row_index}")
        if not CASE_ID_PATTERN.fullmatch(case_id):
            raise ValueError(f"Invalid case_id (allowed characters: letters, digits, ., _, -) for row {row_index}")
        return case_id

    return f"case{row_index:04d}"


def _warn_unused_columns(headers: Iterable[str], used_columns: set[str]) -> None:
    """Log a warning for CSV columns not used in the template."""
    unused = [h for h in headers if h not in used_columns and h not in RESERVED_COLUMNS]
    if unused:
        joined = ", ".join(unused)
        warn(f"DOE columns not used in template: {joined}")


def _write_doe_row(case_dir: Path, headers: Sequence[str], row: Mapping[str, str], case_id: str) -> None:
    """Persist the DOE row used for a generated case."""
    doe_path = case_dir / "doe_row.csv"
    fieldnames = list(headers)
    if "case_id" not in fieldnames:
        fieldnames.append("case_id")
    row_data = dict(row)
    row_data.setdefault("case_id", case_id)

    with doe_path.open("w", newline="", encoding="utf-8") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerow(row_data)


def _copy_shared_dir(parent_dir: Path, name: str, source_dir: Path) -> None:
    """Copy a shared folder into the runs directory."""
    dest_dir = parent_dir / name
    if not source_dir.is_dir():
        warn(f"source directory missing for copy {name}: {source_dir}")
        return
    if dest_dir.exists() or dest_dir.is_symlink():
        if dest_dir.is_dir() and not dest_dir.is_symlink():
            return
        if dest_dir.is_symlink():
            try:
                if dest_dir.resolve() == source_dir.resolve():
                    dest_dir.unlink()
                else:
                    raise OSError("symlink points to a different target")
            except OSError:
                warn(f"{dest_dir} already exists (unexpected symlink), copy skipped.")
                return
        else:
            warn(f"{dest_dir} already exists, copy skipped.")
            return
    try:
        shutil.copytree(source_dir, dest_dir)
    except OSError as exc:
        raise OSError(f"Failed to copy {source_dir} -> {dest_dir}: {exc}") from exc


def _collect_render_targets(template_dir: Path) -> list[tuple[Path, str, set[str], set[str]]]:
    skip_dirs = {"MESH", "POST"}
    targets: list[tuple[Path, str, set[str], set[str]]] = []
    for path in template_dir.rglob("*"):
        if not path.is_file():
            continue
        try:
            relative = path.relative_to(template_dir)
        except ValueError:
            continue
        if relative.name in {"setup.xml", "run.cfg"}:
            continue
        if relative.parts and relative.parts[0] in skip_dirs:
            continue
        if _is_temp_or_hidden(relative):
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        if "\x00" in text:
            continue
        placeholders = extract_placeholders(text)
        cond_vars = extract_condition_variables(text)
        if not placeholders and not cond_vars:
            continue
        targets.append((relative, text, placeholders, cond_vars))
    return targets


def _expected_doe_values(
    headers: Sequence[str],
    row: Mapping[str, str],
    case_id: str,
) -> dict[str, str]:
    values = {header: str(row.get(header) or "") for header in headers}
    values["case_id"] = case_id
    return values


def _existing_case_matches(
    case_dir: Path,
    template_dir: Path,
    headers: Sequence[str],
    row: Mapping[str, str],
    case_id: str,
    setup_relative: Path,
    setup_text: str,
    run_cfg_relative: Path | None,
    run_cfg_template_text: str | None,
    extra_targets: Sequence[tuple[Path, str, set[str], set[str]]],
) -> bool:
    expected_doe = _expected_doe_values(headers, row, case_id)
    existing_doe, _columns = read_doe_row(case_dir)
    if not existing_doe:
        return False
    if set(existing_doe) != set(expected_doe):
        return False
    for key, value in expected_doe.items():
        if existing_doe.get(key, "") != value:
            return False

    rendered_targets: dict[Path, str] = {
        setup_relative: render_template(setup_text, row, case_id),
    }
    if run_cfg_relative and run_cfg_template_text is not None:
        rendered_targets[run_cfg_relative] = render_template(run_cfg_template_text, row, case_id)
    for rel_path, extra_text, _placeholders_set, _cond_vars in extra_targets:
        rendered_targets[rel_path] = render_template(extra_text, row, case_id)

    for template_path in template_dir.rglob("*"):
        if not template_path.is_file():
            continue
        rel_path = template_path.relative_to(template_dir)
        case_path = case_dir / rel_path
        if not case_path.is_file():
            return False
        if rel_path in rendered_targets:
            try:
                case_text = case_path.read_text(encoding="utf-8")
            except (OSError, UnicodeDecodeError):
                return False
            if case_text != rendered_targets[rel_path]:
                return False
            continue
        try:
            if case_path.read_bytes() != template_path.read_bytes():
                return False
        except OSError:
            return False
    return True


def _ensure_registry_case(registry: dict[str, dict[str, Any]], case_id: str, case_dir: Path) -> None:
    record = registry.get(case_id)
    if record is None:
        update_case(
            registry,
            case_id,
            path=str(case_dir),
            status=STATUS_PREPARED,
            nprocs=None,
            nt=None,
            start_time=None,
            end_time=None,
            pid=None,
            last_iter=None,
        )
        return
    if str(record.get("path") or "") != str(case_dir):
        update_case(registry, case_id, path=str(case_dir))


def generate_cases(
    headers: Sequence[str],
    rows: Sequence[Mapping[str, str]],
    template_dir: Path,
    output_dir: Path,
) -> None:
    """Generate case folders for each DOE row."""
    if not template_dir.is_dir():
        raise FileNotFoundError(f"Template directory not found: {template_dir}")

    template_setup = find_setup_file(template_dir)

    setup_text = template_setup.read_text(encoding="utf-8")
    placeholders = extract_placeholders(setup_text)
    condition_vars = extract_condition_variables(setup_text)
    run_cfg_path = find_run_cfg(template_dir)
    run_cfg_template_text: str | None = None
    run_cfg_placeholders: set[str] = set()
    run_cfg_condition_vars: set[str] = set()
    run_cfg_relative: Path | None = None
    if run_cfg_path:
        run_cfg_template_text = run_cfg_path.read_text(encoding="utf-8")
        run_cfg_relative = run_cfg_path.relative_to(template_dir)
        run_cfg_placeholders = extract_placeholders(run_cfg_template_text)
        run_cfg_condition_vars = extract_condition_variables(run_cfg_template_text)
        placeholders |= run_cfg_placeholders
        condition_vars |= run_cfg_condition_vars

    extra_targets = _collect_render_targets(template_dir)
    for _, _, extra_placeholders, extra_condition in extra_targets:
        placeholders |= extra_placeholders
        condition_vars |= extra_condition

    header_set = set(headers)
    required_columns = placeholders | condition_vars
    missing_columns = sorted(name for name in required_columns if name not in header_set)
    if missing_columns:
        joined = ", ".join(missing_columns)
        raise ValueError(f"Variables without matching DOE columns: {joined}")

    _warn_unused_columns(headers, required_columns)
    output_dir.mkdir(parents=True, exist_ok=True)

    setup_relative = template_setup.relative_to(template_dir)
    shared_root = template_dir.parent
    _copy_shared_dir(output_dir, "MESH", shared_root / "MESH")
    _copy_shared_dir(output_dir, "POST", shared_root / "POST")

    with registry_transaction(output_dir) as registry:
        seen_case_ids: set[str] = set()
        for index, row in enumerate(rows, start=1):
            case_id = _resolve_case_id(row, index)
            if case_id in seen_case_ids:
                raise ValueError(f"Duplicate case_id in DOE: {case_id}")
            seen_case_ids.add(case_id)
            case_dir = output_dir / case_id
            if case_dir.exists():
                if not case_dir.is_dir():
                    raise FileExistsError(f"Output path already exists and is not a directory: {case_dir}")
                if not _existing_case_matches(
                    case_dir,
                    template_dir,
                    headers,
                    row,
                    case_id,
                    setup_relative,
                    setup_text,
                    run_cfg_relative,
                    run_cfg_template_text,
                    extra_targets,
                ):
                    raise FileExistsError(f"Existing case differs from current DOE/template content: {case_dir}")
                _ensure_registry_case(registry, case_id, case_dir)
                continue

            shutil.copytree(template_dir, case_dir)
            rendered = render_template(setup_text, row, case_id)

            target_setup = case_dir / setup_relative
            target_setup.write_text(rendered, encoding="utf-8")
            if run_cfg_template_text and run_cfg_relative:
                target_run_cfg = case_dir / run_cfg_relative
                target_run_cfg.write_text(
                    render_template(run_cfg_template_text, row, case_id),
                    encoding="utf-8",
                )
            for rel_path, extra_text, _placeholders_set, _ in extra_targets:
                target_path = case_dir / rel_path
                if not target_path.exists():
                    continue
                target_path.write_text(
                    render_template(extra_text, row, case_id),
                    encoding="utf-8",
                )
            _write_doe_row(case_dir, headers, row, case_id)
            _ensure_registry_case(registry, case_id, case_dir)


def read_doe_row(case_dir: Path) -> tuple[dict[str, str], list[str]]:
    """Read the stored DOE row for a case (values and column order)."""
    doe_path = case_dir / "doe_row.csv"
    try:
        stat = doe_path.stat()
    except OSError:
        with DOE_ROW_CACHE_LOCK:
            DOE_ROW_CACHE.pop(doe_path, None)
        return {}, []
    cache_key = doe_path
    mtime = stat.st_mtime
    size = stat.st_size
    with DOE_ROW_CACHE_LOCK:
        cached = DOE_ROW_CACHE.get(cache_key)
        if cached and cached.get("mtime") == mtime and cached.get("size") == size:
            return dict(cached.get("values") or {}), list(cached.get("columns") or [])
    values: dict[str, str] = {}
    columns: list[str] = []
    try:
        with doe_path.open(newline="", encoding="utf-8", errors="ignore") as handle:
            reader = csv.DictReader(handle)
            if reader.fieldnames is not None:
                columns = [f.strip() for f in reader.fieldnames if f is not None]
                for row in reader:
                    for key, val in row.items():
                        if key is None:
                            continue
                        values[key.strip()] = val.strip() if isinstance(val, str) else str(val)
                    break
    except OSError:
        with DOE_ROW_CACHE_LOCK:
            cached = DOE_ROW_CACHE.get(cache_key)
            if cached:
                return dict(cached.get("values") or {}), list(cached.get("columns") or [])
        return {}, []
    with DOE_ROW_CACHE_LOCK:
        DOE_ROW_CACHE[cache_key] = {
            "mtime": mtime,
            "size": size,
            "values": values,
            "columns": columns,
        }
    return dict(values), list(columns)
