from __future__ import annotations

import json
from pathlib import Path

import pytest


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
