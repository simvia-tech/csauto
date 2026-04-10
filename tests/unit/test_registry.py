from __future__ import annotations

from pathlib import Path

from csauto.registry import append_history, load_registry, read_history, registry_transaction, update_case


def test_update_case_sets_fields() -> None:
    registry: dict[str, dict[str, object]] = {}
    update_case(registry, "case0001", path="/tmp/case0001", status="RUNNING")
    assert registry["case0001"]["status"] == "RUNNING"
    assert registry["case0001"]["path"] == "/tmp/case0001"
    assert registry["case0001"]["last_update"]


def test_history_roundtrip(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    append_history(case_dir, "run", details={"n": 1}, source="test")
    items = read_history(case_dir, limit=10)
    assert items
    assert items[0]["action"] == "run"


def test_history_limit_order(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0002"
    case_dir.mkdir()
    append_history(case_dir, "first", source="test")
    append_history(case_dir, "second", source="test")
    items = read_history(case_dir, limit=1)
    assert len(items) == 1
    assert items[0]["action"] == "second"


def test_history_exclude_and_query(tmp_path: Path) -> None:
    case_dir = tmp_path / "case0003"
    case_dir.mkdir()
    append_history(case_dir, "run", source="test")
    append_history(case_dir, "refresh", source="test")
    append_history(case_dir, "tail", source="test")
    items = read_history(case_dir, limit=10, exclude_actions={"refresh"}, query="tail")
    assert len(items) == 1
    assert items[0]["action"] == "tail"


def test_read_history_skips_malformed_lines_and_warns(tmp_path: Path, capsys) -> None:
    """Fix 12: malformed JSON lines must be skipped without silently losing data;
    a warning must be written to stderr so the user knows the file is corrupt."""
    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    history_file = case_dir / ".csauto.history.jsonl"
    history_file.write_text(
        '{"ts":"2024-01-01","action":"run","source":"test"}\n'
        "THIS IS NOT JSON\n"
        '{"ts":"2024-01-02","action":"stop","source":"test"}\n',
        encoding="utf-8",
    )

    items = read_history(case_dir, limit=10)

    # Valid records are returned.
    assert len(items) == 2
    actions = {item["action"] for item in items}
    assert actions == {"run", "stop"}

    # A warning about the skipped line is written to stderr.
    captured = capsys.readouterr()
    assert "1 malformed line" in captured.err
    assert str(history_file) in captured.err


def test_registry_transaction_keeps_valid_json(tmp_path: Path) -> None:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    with registry_transaction(runs_dir) as registry:
        registry["case0001"] = {"case_id": "case0001"}
    try:
        with registry_transaction(runs_dir) as registry:
            registry["case0002"] = {"case_id": "case0002"}
            raise RuntimeError("boom")
    except RuntimeError:
        pass
    registry = load_registry(runs_dir)
    assert "case0001" in registry
