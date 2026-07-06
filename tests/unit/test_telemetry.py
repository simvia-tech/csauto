from __future__ import annotations

from csauto import telemetry


def test_is_enabled_respects_disable_env_var(monkeypatch, tmp_path) -> None:
    monkeypatch.setattr(telemetry, "TELEMETRY_FILE", tmp_path / "telemetry.json")
    monkeypatch.setenv("CSAUTO_TELEMETRY_DISABLED", "1")
    assert telemetry.is_enabled() is False


def test_is_enabled_defaults_true_without_state_or_env(monkeypatch, tmp_path) -> None:
    monkeypatch.setattr(telemetry, "TELEMETRY_FILE", tmp_path / "telemetry.json")
    monkeypatch.delenv("CSAUTO_TELEMETRY_DISABLED", raising=False)
    assert telemetry.is_enabled() is True
