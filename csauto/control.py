from __future__ import annotations

from pathlib import Path
from typing import Any

from .registry import STATUS_RUNNING, append_history, load_registry
from .web_support import resolve_case_dir


def _default_adapter():
    from .solvers import get_solver_adapter

    return get_solver_adapter(None)


def control_case(
    runs_dir: Path,
    case_id: str,
    action: str,
    *,
    value: int | float | None = None,
    source: str = "cli",
    actor: str | None = None,
    adapter=None,
) -> dict[str, Any]:
    """Send one of the adapter's control actions to a running case.

    Validates the case is RUNNING and records history; the directive itself is
    solver-specific and applied by the adapter.
    """
    adapter = adapter or _default_adapter()
    if not adapter.control_actions:
        raise ValueError(f"Solver {adapter.name!r} does not support live control.")
    spec = adapter.control_action(action)
    if spec is None:
        names = ", ".join(a.name for a in adapter.control_actions)
        raise ValueError(f"Invalid control action: {action!r} (expected one of: {names})")
    if spec.value_label and value is None:
        raise ValueError(f"{action} needs a value ({spec.value_label})")
    if not spec.value_label and value is not None:
        raise ValueError(f"{action} takes no value")
    if value is not None and spec.value_kind == "int":
        if float(value) != int(value):
            raise ValueError(f"{action} needs a whole number ({spec.value_label})")
        value = int(value)

    registry = load_registry(runs_dir)
    record = registry.get(case_id)
    if not record:
        raise FileNotFoundError(f"Case not found: {case_id}")
    if record.get("status") != STATUS_RUNNING:
        raise ValueError(f"Case {case_id} is not RUNNING (status={record.get('status')})")

    case_dir = resolve_case_dir(record.get("path"), case_id, runs_dir)

    details = adapter.apply_control(case_dir, action, value=value, start_time=record.get("start_time"))

    append_history(case_dir, f"control_{action}", details=details, source=source, actor=actor)
    return details
