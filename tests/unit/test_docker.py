from __future__ import annotations

from pathlib import Path

from csauto.docker import campaign_label, read_container_id
from csauto.execution import RuntimeSelection, build_runtime_gui_command, build_runtime_run_command
from csauto.solvers import get_solver_adapter


def _docker(image: str = "my_image") -> RuntimeSelection:
    return RuntimeSelection(runtime="docker", docker_image=image)


def test_build_run_command_without_display(monkeypatch, tmp_path: Path) -> None:
    monkeypatch.delenv("DISPLAY", raising=False)
    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    cmd = build_runtime_run_command(case_dir, 4, 2, _docker())
    assert cmd[:4] == ["nohup", "docker", "run", "--rm"]
    assert cmd[cmd.index("-w") + 1] == "/csauto/case0001"
    assert "csauto.case_id=case0001" in cmd
    assert f"csauto.campaign={campaign_label(tmp_path)}" in cmd
    image = cmd.index("my_image")
    # --entrypoint makes the command independent of the image's own ENTRYPOINT.
    assert cmd[image - 2 : image] == ["--entrypoint", "code_saturne"]
    assert cmd[image + 1 :] == ["run", "--case", ".", "-n", "4", "--nt", "2"]


def test_build_run_command_appends_extra_run_args(monkeypatch, tmp_path: Path) -> None:
    monkeypatch.delenv("DISPLAY", raising=False)
    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    cmd = build_runtime_run_command(case_dir, 4, 2, _docker(), run_args=["--restart", "--iter-num", "250"])
    assert cmd[-3:] == ["--restart", "--iter-num", "250"]


def test_container_setup_runs_before_the_solver(monkeypatch, tmp_path: Path) -> None:
    monkeypatch.delenv("DISPLAY", raising=False)
    case_dir = tmp_path / "case0001"
    case_dir.mkdir()
    cmd = build_runtime_run_command(case_dir, 2, 1, _docker("aster"), adapter=get_solver_adapter("code_aster"))
    image = cmd.index("aster")
    assert cmd[image - 2 : image] == ["--entrypoint", "bash"]
    assert cmd[image + 1 :] == ["-c", 'source /opt/activate.sh && exec "$0" "$@"', "run_aster", ".csauto.export"]


def test_campaign_labels_differ_between_campaigns(tmp_path: Path) -> None:
    assert campaign_label(tmp_path / "A") != campaign_label(tmp_path / "B")
    assert campaign_label(tmp_path / "A") == campaign_label(tmp_path / "A")


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

    cmd = build_runtime_run_command(case_dir, 4, 2, _docker())

    joined = " ".join(cmd)
    assert f"-v {mesh.resolve()}:{mesh.resolve()}:ro" in joined
    assert f"-v {post.resolve()}:{post.resolve()}" in joined
    assert f"{post.resolve()}:ro" not in joined


def test_build_gui_command_mounts_shared_dir_symlinks(monkeypatch, tmp_path: Path) -> None:
    """The GUI must see the same shared dirs as a run, or symlinked meshes break inside the container."""
    monkeypatch.delenv("DISPLAY", raising=False)
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    (case_dir / "DATA").mkdir(parents=True)
    (case_dir / "DATA" / "setup.xml").write_text("<root/>", encoding="utf-8")
    mesh = tmp_path / "study" / "MESH"
    post = tmp_path / "study" / "POST"
    mesh.mkdir(parents=True)
    post.mkdir(parents=True)
    (runs_dir / "MESH").symlink_to(mesh, target_is_directory=True)
    (runs_dir / "POST").symlink_to(post, target_is_directory=True)

    cmd = build_runtime_gui_command(case_dir, _docker())

    assert f"{mesh.resolve()}:{mesh.resolve()}:ro" in cmd
    assert f"{post.resolve()}:{post.resolve()}" in cmd
    assert cmd[-2:] == ["gui", "DATA/setup.xml"]


def test_build_gui_command_adds_no_mount_without_symlinks(monkeypatch, tmp_path: Path) -> None:
    monkeypatch.delenv("DISPLAY", raising=False)
    runs_dir = tmp_path / "RUNS"
    case_dir = runs_dir / "case0001"
    (case_dir / "DATA").mkdir(parents=True)
    (case_dir / "DATA" / "setup.xml").write_text("<root/>", encoding="utf-8")
    (runs_dir / "MESH").mkdir()

    cmd = build_runtime_gui_command(case_dir, _docker())

    assert cmd.count("-v") == 1
