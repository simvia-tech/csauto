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


def test_serve_ping_reports_the_solver_with_the_runtime(monkeypatch, tmp_path) -> None:
    from types import SimpleNamespace

    from csauto.config import Config
    from csauto.serve_commands import dispatch_serve_command

    sent: list[dict] = []
    monkeypatch.setattr(telemetry, "send_event", lambda event_type, **extra: sent.append(extra))
    monkeypatch.setattr(telemetry, "is_enabled", lambda: True)
    args = SimpleNamespace(command="serve", no_doctor=True, api_token=None, host="127.0.0.1", port=0, runs_dir=tmp_path)
    dispatch_serve_command(
        args,
        Config(solver="code_aster", runtime="docker"),
        run_doctor=lambda *a, **k: [],
        print_doctor=lambda items: False,
        serve_fastapi=lambda *a, **k: None,
    )
    assert [extra["id_docker"] for extra in sent] == ["code_aster:docker"]


def test_serve_announces_no_ping_when_telemetry_is_off(monkeypatch, tmp_path, capsys) -> None:
    from types import SimpleNamespace

    from csauto.config import Config
    from csauto.serve_commands import dispatch_serve_command

    monkeypatch.setenv("CSAUTO_TELEMETRY_DISABLED", "1")
    args = SimpleNamespace(command="serve", no_doctor=True, api_token=None, host="127.0.0.1", port=0, runs_dir=tmp_path)
    dispatch_serve_command(
        args,
        Config(),
        run_doctor=lambda *a, **k: [],
        print_doctor=lambda items: False,
        serve_fastapi=lambda *a, **k: None,
    )
    assert "[telemetry]" not in capsys.readouterr().out


def test_servers_started_by_the_extension_send_no_serve_ping(monkeypatch, tmp_path) -> None:
    from types import SimpleNamespace

    from csauto.config import Config
    from csauto.serve_commands import dispatch_serve_command

    sent: list[dict] = []
    monkeypatch.setattr(telemetry, "send_event", lambda event_type, **extra: sent.append(extra))
    monkeypatch.setattr(telemetry, "is_enabled", lambda: True)
    monkeypatch.setenv("CSAUTO_CLIENT", "wsl")
    args = SimpleNamespace(command="serve", no_doctor=True, api_token=None, host="127.0.0.1", port=0, runs_dir=tmp_path)
    dispatch_serve_command(
        args,
        Config(),
        run_doctor=lambda *a, **k: [],
        print_doctor=lambda items: False,
        serve_fastapi=lambda *a, **k: None,
    )
    assert sent == []


def test_ping_can_carry_the_client_version(monkeypatch) -> None:
    from csauto.cli import main

    sent: list[dict] = []
    monkeypatch.setattr(telemetry, "send_event", lambda event_type, **extra: sent.append(extra))
    main(["_telemetry-ping", "7", "wsl", "--version", "1.0.0-rc.1"])
    assert sent[0]["version"] == "1.0.0-rc.1" and sent[0]["id_docker"] == "wsl"
