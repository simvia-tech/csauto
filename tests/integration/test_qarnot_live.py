"""The real Qarnot round trip. Skipped unless explicitly enabled.

Everything else about the Qarnot backend is tested against a fake connection,
which proves what csauto *asks* Qarnot to do. This proves what Qarnot actually
does with it, and it is the only test here that costs money.

Run it with:

    CSAUTO_QARNOT_LIVE=1 QARNOT_TOKEN=... .venv/bin/python -m pytest \\
        tests/integration/test_qarnot_live.py -q -s

It submits one tiny task, waits for it, and asserts the three things the design
rests on: that the case files arrive, that a partial result comes back while
the task is still running, and that the full results land on local disk.
"""

from __future__ import annotations

import os
import time
from pathlib import Path

import pytest

LIVE = os.environ.get("CSAUTO_QARNOT_LIVE", "").strip() == "1"
TIMEOUT_S = 600
POLL_S = 10

pytestmark = pytest.mark.skipif(
    not LIVE,
    reason="set CSAUTO_QARNOT_LIVE=1 and QARNOT_TOKEN to run against the real Qarnot API",
)


@pytest.fixture
def tiny_case(tmp_path: Path) -> Path:
    """A case that needs no solver: a shell loop writing into the results dir.

    Deliberately not code_saturne. This test answers questions about Qarnot,
    not about the solver, and a real mesh would make it slow and expensive.
    """
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    (case_dir / "DATA").mkdir(parents=True)
    (case_dir / "DATA" / "input.txt").write_text("hello from csauto\n", encoding="utf-8")
    (runs_dir / "csauto.toml").write_text("solver = 'stub'\n", encoding="utf-8")
    return case_dir


def test_a_real_task_round_trips(tiny_case: Path) -> None:
    from csauto.backends.qarnot import QarnotBackend

    backend = QarnotBackend()
    script = (
        "mkdir -p OUT/run_0001 && "
        "cp DATA/input.txt OUT/run_0001/echoed.txt && "
        "for i in 1 2 3 4 5 6; do "
        "echo iteration $i >> OUT/run_0001/progress.log; echo iteration $i; sleep 10; "
        "done && "
        "echo finished > OUT/run_0001/final.txt"
    )

    task_id = backend.submit(
        tiny_case,
        ["sh", "-c", script],
        "library/alpine:3.20",
        nprocs=1,
        nt=1,
        observability_globs=("OUT/*/progress.log",),
    )
    print(f"submitted task {task_id}")
    assert task_id

    saw_running = False
    saw_partial = False
    saw_stdout = False
    deadline = time.monotonic() + TIMEOUT_S
    state = None

    try:
        while time.monotonic() < deadline:
            state = backend.poll(task_id)
            if state.stdout_delta:
                saw_stdout = True
            if state.status == "RUNNING":
                saw_running = True
                backend.sync(task_id, tiny_case)
                if (tiny_case / "OUT" / "run_0001" / "progress.log").is_file():
                    saw_partial = True
            if state.status in ("DONE", "FAILED"):
                break
            time.sleep(POLL_S)

        assert state is not None, "the task never reported a state"
        assert state.status == "DONE", f"the task ended {state.status}"
        assert saw_running, "the task never went through RUNNING"

        backend.fetch_final(task_id, tiny_case)
    finally:
        backend.cancel(task_id)

    # The design's three load-bearing claims, in order.
    assert saw_stdout, "fresh_stdout returned nothing: the Log Tail would stay empty during a cloud run"
    assert saw_partial, (
        "no snapshot came back while the task ran: the whole targeted-observability design rests on this"
    )
    assert (tiny_case / "OUT" / "run_0001" / "final.txt").read_text().strip() == "finished"
    assert (tiny_case / "OUT" / "run_0001" / "echoed.txt").read_text() == "hello from csauto\n", (
        "the case input did not reach the task's working directory: the relative --case path is wrong"
    )
