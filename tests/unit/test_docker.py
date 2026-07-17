from __future__ import annotations

from pathlib import Path

from csauto.docker import build_run_command, read_container_id


def test_build_run_command_without_display(monkeypatch, tmp_path: Path) -> None:
    monkeypatch.delenv("DISPLAY", raising=False)
    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    cmd = build_run_command(case_dir, 4, 2, "my_image")
    container_case = "/home/code_saturne/case0001"
    assert cmd[:3] == ["nohup", "docker", "run"]
    assert "--label" in cmd
    assert "-w" in cmd
    assert container_case in cmd
    assert "run" in cmd
    assert "--case" in cmd
    assert cmd.index("run") < cmd.index("--case")
    assert "-n" in cmd and cmd[cmd.index("-n") + 1] == "4"
    assert "--nt" in cmd and cmd[cmd.index("--nt") + 1] == "2"


def test_build_run_command_appends_extra_run_args(monkeypatch, tmp_path: Path) -> None:
    monkeypatch.delenv("DISPLAY", raising=False)
    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    cmd = build_run_command(case_dir, 4, 2, "my_image", run_args=["--restart", "--iter-num", "250"])
    assert cmd[-3:] == ["--restart", "--iter-num", "250"]


def test_read_container_id_returns_first_nonempty_line(tmp_path: Path) -> None:
    """Fix 6: blank leading lines must not cause a premature empty-string return."""
    cidfile = tmp_path / "container.cid"
    cidfile.write_text("\n\n  abc123  \ngarbage\n", encoding="utf-8")
    result = read_container_id(cidfile, wait=0.0)
    assert result == "abc123"


def test_read_container_id_returns_none_when_file_empty(tmp_path: Path) -> None:
    """Fix 6: an all-blank file must return None after the deadline."""
    cidfile = tmp_path / "container.cid"
    cidfile.write_text("   \n   \n", encoding="utf-8")
    result = read_container_id(cidfile, wait=0.0)
    assert result is None


def test_read_container_id_returns_none_when_file_missing(tmp_path: Path) -> None:
    """Fix 6: a missing cidfile must return None after the deadline."""
    cidfile = tmp_path / "no_such_file.cid"
    result = read_container_id(cidfile, wait=0.0)
    assert result is None


def test_find_x11_socket_dir_prefers_wslg(tmp_path, monkeypatch) -> None:
    from csauto import docker as docker_module

    wslg = tmp_path / "wslg" / ".X11-unix"
    tmp_x11 = tmp_path / "tmp" / ".X11-unix"
    wslg.mkdir(parents=True)
    tmp_x11.mkdir(parents=True)
    (wslg / "X0").touch()
    (tmp_x11 / "X0").touch()
    monkeypatch.setattr(docker_module, "_X11_SOCKET_CANDIDATES", (str(wslg), str(tmp_x11)))

    assert docker_module.find_x11_socket_dir() == str(wslg.resolve())


def test_find_x11_socket_dir_skips_empty_dirs(tmp_path, monkeypatch) -> None:
    from csauto import docker as docker_module

    empty = tmp_path / "empty" / ".X11-unix"
    populated = tmp_path / "tmp" / ".X11-unix"
    empty.mkdir(parents=True)
    populated.mkdir(parents=True)
    (populated / "X0").touch()
    monkeypatch.setattr(docker_module, "_X11_SOCKET_CANDIDATES", (str(empty), str(populated)))

    assert docker_module.find_x11_socket_dir() == str(populated.resolve())


def test_build_gui_command_passes_display_unprefixed(tmp_path, monkeypatch) -> None:
    from csauto.docker import build_gui_command

    case_dir = tmp_path / "RUNS" / "case0001"
    (case_dir / "DATA").mkdir(parents=True)
    (case_dir / "DATA" / "setup.xml").write_text("<root/>", encoding="utf-8")
    monkeypatch.setenv("DISPLAY", ":0")

    cmd = build_gui_command(case_dir)

    display_index = cmd.index("-e") + 1
    assert cmd[display_index] == "DISPLAY=:0"
    assert not any(part.startswith("DISPLAY=unix") for part in cmd)


def test_build_gui_command_injects_extra_env(tmp_path, monkeypatch) -> None:
    from csauto.docker import build_gui_command

    case_dir = tmp_path / "RUNS" / "case0001"
    (case_dir / "DATA").mkdir(parents=True)
    (case_dir / "DATA" / "setup.xml").write_text("<root/>", encoding="utf-8")
    monkeypatch.setenv("DISPLAY", ":0")

    cmd = build_gui_command(case_dir, extra_env={"QT_SCALE_FACTOR": "2.00"})

    joined = " ".join(cmd)
    assert "-e QT_SCALE_FACTOR=2.00" in joined
    image_index = joined.index("QT_SCALE_FACTOR")
    assert image_index < joined.index("gui ")
