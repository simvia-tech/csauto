from __future__ import annotations

import json
import os
from pathlib import Path

import pytest

# Tests spawn the CLI/serve command directly; without this, every such run
# would fire a real telemetry ping to the production endpoint. Set as a
# module-level env var (not a fixture) so it's also inherited by the
# `csauto serve` subprocesses tests spawn via subprocess.Popen(env=os.environ).
os.environ["CSAUTO_TELEMETRY_DISABLED"] = "1"


@pytest.fixture()
def runs_dir(tmp_path: Path) -> Path:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    return runs_dir


def make_case(runs_dir: Path, case_id: str = "case0001") -> Path:
    case_dir = runs_dir / case_id
    (case_dir / "DATA").mkdir(parents=True, exist_ok=True)
    (case_dir / "DATA" / "setup.xml").write_text("<root/>", encoding="utf-8")
    return case_dir


def write_registry(runs_dir: Path, case_id: str, case_dir: Path, status: str = "PREPARED") -> None:
    data = {
        case_id: {
            "case_id": case_id,
            "path": str(case_dir),
            "status": status,
        }
    }
    (runs_dir / "registry.json").write_text(json.dumps(data, indent=2), encoding="utf-8")


@pytest.fixture()
def case_factory() -> callable:
    return make_case


@pytest.fixture()
def registry_factory() -> callable:
    return write_registry
