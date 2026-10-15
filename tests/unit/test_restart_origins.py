import os
from pathlib import Path

from csauto.solvers import get_solver_adapter


def _run(case_dir: Path, name: str, nt_prev: int, mtime: int) -> None:
    run_dir = case_dir / "RESU" / name
    run_dir.mkdir(parents=True)
    (run_dir / "run_solver.log").write_text(f"nt_prev = {nt_prev}\n", encoding="utf-8")
    os.utime(run_dir, (mtime, mtime))


def test_restart_origins_list_every_restart_and_skip_first_start(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    _run(case_dir, "run1", 0, 1000)
    _run(case_dir, "run2", 300, 2000)
    _run(case_dir, "run3", 500, 3000)
    adapter = get_solver_adapter("code_saturne")
    assert [o["iteration"] for o in adapter.read_restart_origins(case_dir)] == [300, 500]
    assert adapter.read_restart_origin(case_dir)["iteration"] == 500
