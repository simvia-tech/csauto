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


def test_build_run_command_mounts_symlinked_shared_dirs(monkeypatch, tmp_path: Path) -> None:
    monkeypatch.delenv("DISPLAY", raising=False)
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    case_dir.mkdir(parents=True)
    mesh = tmp_path / "study" / "MESH"
    post = tmp_path / "study" / "POST"
    mesh.mkdir(parents=True)
    post.mkdir(parents=True)
    (runs_dir / "MESH").symlink_to(mesh, target_is_directory=True)
    (runs_dir / "POST").symlink_to(post, target_is_directory=True)

    cmd = build_run_command(case_dir, 4, 2, "my_image")

    joined = " ".join(cmd)
    assert f"-v {mesh.resolve()}:{mesh.resolve()}:ro" in joined
    assert f"-v {post.resolve()}:{post.resolve()}" in joined
    assert f"{post.resolve()}:ro" not in joined
