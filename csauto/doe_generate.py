from __future__ import annotations

import csv
import itertools
import random
import re
import tomllib
from dataclasses import dataclass
from pathlib import Path

from .doe import RESERVED_COLUMNS
from .warn import warn

_NAME_PATTERN = re.compile(r"^[A-Za-z0-9_.-]+$")
METHODS = ("factorial", "lhs", "sobol", "ccd")


@dataclass
class ParameterSpec:
    """A single DOE parameter, either continuous (min/max) or discrete (levels)."""

    name: str
    kind: str
    low: float | None = None
    high: float | None = None
    levels: list[str] | None = None


def _parse_parameter(name: str, table: object, spec_path: Path) -> ParameterSpec:
    if not isinstance(table, dict):
        raise ValueError(f"Invalid parameter {name!r} in {spec_path}: expected a table")
    if not _NAME_PATTERN.fullmatch(name):
        raise ValueError(
            f"Invalid parameter name {name!r} in {spec_path}: allowed characters are letters, digits, ., _, -"
        )
    if name in RESERVED_COLUMNS:
        raise ValueError(f"Invalid parameter name {name!r} in {spec_path}: {name!r} is reserved")

    has_range = "min" in table or "max" in table
    has_levels = "levels" in table
    if has_range and has_levels:
        raise ValueError(f"Parameter {name!r} in {spec_path}: specify either min/max or levels, not both")
    if not has_range and not has_levels:
        raise ValueError(f"Parameter {name!r} in {spec_path}: must specify either min/max or levels")

    if has_levels:
        levels_raw = table["levels"]
        if not isinstance(levels_raw, list) or not levels_raw:
            raise ValueError(f"Parameter {name!r} in {spec_path}: levels must be a non-empty list")
        levels = [str(level) for level in levels_raw]
        if len(set(levels)) != len(levels):
            raise ValueError(f"Parameter {name!r} in {spec_path}: levels must not contain duplicates")
        return ParameterSpec(name=name, kind="discrete", levels=levels)

    if "min" not in table or "max" not in table:
        raise ValueError(f"Parameter {name!r} in {spec_path}: continuous parameters require both min and max")
    low, high = table["min"], table["max"]
    if (
        isinstance(low, bool)
        or isinstance(high, bool)
        or not isinstance(low, int | float)
        or not isinstance(high, int | float)
    ):
        raise ValueError(f"Parameter {name!r} in {spec_path}: min/max must be numeric")
    if low >= high:
        raise ValueError(f"Parameter {name!r} in {spec_path}: min must be less than max")
    return ParameterSpec(name=name, kind="continuous", low=float(low), high=float(high))


def load_doe_spec(spec_path: Path) -> list[ParameterSpec]:
    """Load and validate a parameter spec TOML file."""
    if not spec_path.is_file():
        raise FileNotFoundError(f"DOE spec file not found: {spec_path}")

    try:
        data = tomllib.loads(spec_path.read_text(encoding="utf-8"))
    except tomllib.TOMLDecodeError as exc:
        raise ValueError(f"Invalid TOML in DOE spec {spec_path}: {exc}") from exc

    if not isinstance(data, dict) or "parameters" not in data:
        raise ValueError(f"DOE spec {spec_path} must contain a [parameters] table")
    parameters = data["parameters"]
    if not isinstance(parameters, dict) or not parameters:
        raise ValueError(f"DOE spec {spec_path} must define at least one parameter under [parameters]")

    return [_parse_parameter(name, table, spec_path) for name, table in parameters.items()]


def check_spec_against_template(param_names: list[str], template_dir: Path, adapter=None) -> None:
    """Cross-check spec parameter names against the template's variables.

    A spec parameter matching nothing in the template is an error: the study
    would run with the template's hardcoded value while looking successful
    (typically a typo like u_inlett vs {u_inlet}). A template variable not
    covered by the spec is only a warning — prepare will fail on it anyway if
    it is still uncovered at that point.
    """
    from .doe import collect_template_variables

    variables = collect_template_variables(template_dir, adapter=adapter)
    unmatched = sorted(name for name in param_names if name not in variables)
    if unmatched:
        joined = ", ".join(unmatched)
        raise ValueError(
            f"Spec parameters with no matching placeholder in {template_dir}: {joined} "
            "(fix the spec, or pass --no-check to skip this check)"
        )
    uncovered = sorted(v for v in variables if v not in set(param_names))
    if uncovered:
        warn(f"Template variables not covered by the spec: {', '.join(uncovered)}")


def _format_value(value: float, round_ndigits: int) -> str:
    return str(round(value, round_ndigits))


def _discrete_combinations(discrete_params: list[ParameterSpec]) -> list[dict[str, str]]:
    if not discrete_params:
        return [{}]
    names = [p.name for p in discrete_params]
    return [dict(zip(names, combo, strict=True)) for combo in itertools.product(*(p.levels for p in discrete_params))]


def _sample_lhs(continuous_params: list[ParameterSpec], samples: int, seed: int) -> list[dict[str, float]]:
    rng = random.Random(seed)
    columns: dict[str, list[float]] = {}
    for param in continuous_params:
        strata = list(range(samples))
        rng.shuffle(strata)
        span = param.high - param.low
        values = []
        for stratum in strata:
            fraction = (stratum + rng.random()) / samples
            values.append(param.low + fraction * span)
        columns[param.name] = values
    return [{name: columns[name][i] for name in columns} for i in range(samples)]


def _sample_sobol(continuous_params: list[ParameterSpec], samples: int, seed: int) -> list[dict[str, float]]:
    try:
        from scipy.stats import qmc
    except ImportError as exc:
        raise ImportError(
            'csauto doe --method sobol requires the optional "doe" extra: pip install "csauto[doe]"'
        ) from exc

    if samples & (samples - 1) != 0:
        warn(f"Sobol sequences are best balanced when --samples is a power of 2, got {samples}")

    sampler = qmc.Sobol(d=len(continuous_params), scramble=True, seed=seed)
    points = sampler.random(samples)
    rows = []
    for point in points:
        row = {}
        for param, fraction in zip(continuous_params, point, strict=True):
            row[param.name] = param.low + fraction * (param.high - param.low)
        rows.append(row)
    return rows


def _sample_ccd(continuous_params: list[ParameterSpec]) -> list[dict[str, float]]:
    k = len(continuous_params)
    if k > 8:
        warn(f"CCD with {k} continuous parameters generates 2^{k} corner points; this may be very large")

    def to_values(coded: dict[str, float]) -> dict[str, float]:
        return {p.name: (p.low + p.high) / 2 + coded.get(p.name, 0.0) * (p.high - p.low) / 2 for p in continuous_params}

    rows: list[dict[str, float]] = []
    names = [p.name for p in continuous_params]
    for corner in itertools.product((-1.0, 1.0), repeat=k):
        rows.append(to_values(dict(zip(names, corner, strict=True))))
    for name in names:
        rows.append(to_values({name: -1.0}))
        rows.append(to_values({name: 1.0}))
    rows.append(to_values({}))
    return rows


def generate_rows(
    params: list[ParameterSpec],
    method: str,
    *,
    samples: int | None = None,
    seed: int = 0,
    round_ndigits: int = 6,
) -> list[dict[str, str]]:
    """Generate DOE rows (parameter name -> stringified value) for the given method."""
    if method not in METHODS:
        raise ValueError(f"Unknown DOE method {method!r} (expected one of {', '.join(METHODS)})")

    discrete_params = [p for p in params if p.kind == "discrete"]
    continuous_params = [p for p in params if p.kind == "continuous"]

    if method == "factorial":
        if continuous_params:
            names = ", ".join(p.name for p in continuous_params)
            raise ValueError(f"factorial requires discrete levels for all parameters; continuous: {names}")
        return _discrete_combinations(discrete_params)

    if not continuous_params:
        raise ValueError(f"--method {method} requires at least one continuous parameter")

    if method in ("lhs", "sobol"):
        if not samples or samples <= 0:
            raise ValueError(f"--samples is required (and must be > 0) for --method {method}")
        continuous_rows = (
            _sample_lhs(continuous_params, samples, seed)
            if method == "lhs"
            else _sample_sobol(continuous_params, samples, seed)
        )
    else:
        continuous_rows = _sample_ccd(continuous_params)

    continuous_str_rows = [
        {name: _format_value(value, round_ndigits) for name, value in row.items()} for row in continuous_rows
    ]

    discrete_combos = _discrete_combinations(discrete_params)
    return [
        {**discrete_combo, **continuous_row}
        for discrete_combo in discrete_combos
        for continuous_row in continuous_str_rows
    ]


def write_doe_csv(param_names: list[str], rows: list[dict[str, str]], output_path: Path) -> None:
    """Write DOE rows to a CSV file compatible with csauto.doe.load_doe."""
    with output_path.open("w", newline="", encoding="utf-8") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=param_names)
        writer.writeheader()
        for row in rows:
            writer.writerow(row)
