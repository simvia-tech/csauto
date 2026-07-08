from __future__ import annotations

import re
from pathlib import Path
from typing import Any

from .logs import extract_last_iteration, locate_log_file
from .probes import latest_resu_dir
from .registry import STATUS_RUNNING, append_history, load_registry
from .web_support import resolve_case_dir

CONTROL_FILENAME = "control_file"
VALID_ACTIONS = {"stop", "extend", "checkpoint", "flush"}

# code_saturne prints its configured iteration limit once at startup, into setup.log:
#   "      nt_max:  500 (final time step)\n" (cs_time_step_log_setup, src/base/cs_time_step.cpp)
NT_MAX_SETUP_RE = re.compile(r"nt_max:\s*(-?\d+)")
# ...and re-echoes it into the main log every time a control_file directive changes it:
#   "  max_time_step                        600 (current:            9)\n" (src/base/cs_control.cpp)
NT_MAX_CONTROL_RE = re.compile(r"max_time_step\s+(\d+)\s*\(current:")


def write_control_directive(case_dir: Path, directive: str) -> Path:
    """Append a directive line to control_file in the active RESU run directory.

    Code_Saturne polls this file once per time step and deletes it after reading,
    so appending (rather than overwriting) composes correctly if multiple
    directives are queued before the next poll.
    """
    resu_dir = latest_resu_dir(case_dir)
    if resu_dir is None:
        raise FileNotFoundError(f"No RESU run directory found for {case_dir.name}")
    control_path = resu_dir / CONTROL_FILENAME
    with control_path.open("a", encoding="utf-8") as handle:
        handle.write(f"{directive}\n")
    return control_path


def current_iteration(case_dir: Path, start_time: str | None = None) -> int | None:
    """Best-effort read of the case's current time step from its live log."""
    log_path = locate_log_file(case_dir, start_time)
    if log_path is None:
        return None
    return extract_last_iteration(log_path)


def configured_max_time_step(case_dir: Path) -> int | None:
    """Best-effort read of the run's actual configured iteration limit (nt_max).

    This is read from the solver's own logs, not from anything csauto passed on
    the command line: code_saturne logs it once at startup (setup.log) and again
    any time a control_file directive changes it (run_solver.log/listing), so
    repeated extends compound on top of each other correctly.
    """
    resu_dir = latest_resu_dir(case_dir)
    if resu_dir is None:
        return None
    candidates: list[int] = []

    setup_log = resu_dir / "setup.log"
    if setup_log.is_file():
        text = setup_log.read_text(encoding="utf-8", errors="ignore")
        match = NT_MAX_SETUP_RE.search(text)
        if match:
            value = int(match.group(1))
            if value >= 0:
                candidates.append(value)

    for name in ("run_solver.log", "listing"):
        log_path = resu_dir / name
        if not log_path.is_file():
            continue
        text = log_path.read_text(encoding="utf-8", errors="ignore")
        matches = NT_MAX_CONTROL_RE.findall(text)
        if matches:
            candidates.append(int(matches[-1]))

    return max(candidates) if candidates else None


def control_case(
    runs_dir: Path,
    case_id: str,
    action: str,
    *,
    value: int | None = None,
    source: str = "cli",
    actor: str | None = None,
) -> dict[str, Any]:
    """Drop a code_saturne control_file directive for a running case.

    Covers graceful stop, extend by N time steps, checkpoint-now, and flush,
    as an alternative to killing the process.
    """
    if action not in VALID_ACTIONS:
        raise ValueError(f"Invalid control action: {action!r} (expected one of {sorted(VALID_ACTIONS)})")

    registry = load_registry(runs_dir)
    record = registry.get(case_id)
    if not record:
        raise FileNotFoundError(f"Case not found: {case_id}")
    if record.get("status") != STATUS_RUNNING:
        raise ValueError(f"Case {case_id} is not RUNNING (status={record.get('status')})")

    case_dir = resolve_case_dir(record.get("path"), case_id, runs_dir)

    details: dict[str, Any] = {"action": action}
    if action == "stop":
        write_control_directive(case_dir, "max_time_step 0")
    elif action == "checkpoint":
        write_control_directive(case_dir, "checkpoint_time_step 0")
    elif action == "flush":
        write_control_directive(case_dir, "flush")
    else:  # extend
        if value is None or int(value) <= 0:
            raise ValueError("extend requires a positive integer number of time steps")
        increment = int(value)
        # "Raise max_time_step by N" means N beyond the run's *configured* limit, which
        # only the solver itself knows (registry["nt"] is csauto's --nt, i.e. OpenMP
        # thread count -- unrelated). Fall back to the live iteration count only if the
        # configured limit can't be read yet (e.g. setup.log not flushed right after launch).
        base = configured_max_time_step(case_dir)
        if base is None:
            base = current_iteration(case_dir, record.get("start_time")) or 0
        target = base + increment
        write_control_directive(case_dir, f"max_time_step {target}")
        details.update(increment=increment, previous_max_time_step=base, target_time_step=target)

    append_history(case_dir, f"control_{action}", details=details, source=source, actor=actor)
    return details
