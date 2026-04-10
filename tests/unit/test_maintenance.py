from __future__ import annotations

from pathlib import Path

import pytest

from csauto.maintenance import cleanup_runs, run_doctor


def _make_runs_dir(tmp_path: Path) -> Path:
    runs_dir = tmp_path / "RUNS"
    runs_dir.mkdir()
    return runs_dir


def _add_case(runs_dir: Path, case_id: str, with_setup: bool = True) -> Path:
    case_dir = runs_dir / case_id
    case_dir.mkdir(parents=True, exist_ok=True)
    if with_setup:
        (case_dir / "DATA").mkdir(parents=True, exist_ok=True)
        (case_dir / "DATA" / "setup.xml").write_text("<root/>", encoding="utf-8")
    return case_dir


def _has_item(items: list, level: str, text: str) -> bool:
    return any(item.level == level and text in item.message for item in items)


def _patch_which(monkeypatch: pytest.MonkeyPatch, mapping: dict[str, str]) -> None:
    monkeypatch.setattr("csauto.maintenance.shutil.which", lambda name: mapping.get(name))


def _make_binary(path: Path, executable: bool = True) -> Path:
    path.write_text("#!/bin/sh\nexit 0\n", encoding="utf-8")
    path.chmod(0o755 if executable else 0o644)
    return path


def test_run_doctor_fails_when_runs_dir_is_missing(tmp_path: Path) -> None:
    runs_dir = tmp_path / "MISSING"
    items = run_doctor(runs_dir, check_display=False)
    assert len(items) == 1
    assert items[0].level == "fail"
    assert items[0].message == f"runs_dir not found: {runs_dir}"


def test_run_doctor_fails_when_no_case_directory_found(tmp_path: Path) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    items = run_doctor(runs_dir, check_display=False)
    assert _has_item(items, "ok", "write OK")
    assert _has_item(items, "fail", "no case* directory found")


def test_run_doctor_detects_case_directories(tmp_path: Path) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001", with_setup=False)
    _add_case(runs_dir, "case0002", with_setup=False)

    items = run_doctor(runs_dir, check_setup=False, check_display=False)
    assert _has_item(items, "ok", "2 cases detected")


def test_run_doctor_reports_setup_present_for_all_cases(tmp_path: Path) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001", with_setup=True)
    _add_case(runs_dir, "case0002", with_setup=True)

    items = run_doctor(runs_dir, check_display=False)
    assert _has_item(items, "ok", "setup.xml present in every case")


def test_run_doctor_reports_setup_missing_cases(tmp_path: Path) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001", with_setup=True)
    _add_case(runs_dir, "case0002", with_setup=False)

    items = run_doctor(runs_dir, check_display=False)
    assert _has_item(items, "fail", "setup.xml missing for: case0002")


def test_run_doctor_skips_setup_check_when_disabled(tmp_path: Path) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001", with_setup=False)

    items = run_doctor(runs_dir, check_setup=False, check_display=False)
    assert all("setup.xml" not in item.message for item in items)


def test_run_doctor_runtime_docker_ok_when_found(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    _patch_which(monkeypatch, {"docker": "/usr/bin/docker"})

    items = run_doctor(runs_dir, runtime="docker", check_display=False)
    assert _has_item(items, "ok", "docker available")


def test_run_doctor_runtime_docker_fail_when_missing(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    _patch_which(monkeypatch, {})

    items = run_doctor(runs_dir, runtime="docker", check_display=False)
    assert _has_item(items, "fail", "docker not found in PATH")


def test_run_doctor_runtime_singularity_explicit_executable_bin_ok(
    tmp_path: Path,
) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    singularity_bin = _make_binary(tmp_path / "apptainer", executable=True)

    items = run_doctor(
        runs_dir,
        runtime="singularity",
        singularity_bin=str(singularity_bin),
        singularity_image="docker://example/code_saturne:latest",
        check_display=False,
    )
    assert _has_item(items, "ok", f"singularity binary: {singularity_bin}")


def test_run_doctor_runtime_singularity_explicit_non_exec_bin_fails(
    tmp_path: Path,
) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    singularity_bin = _make_binary(tmp_path / "apptainer", executable=False)

    items = run_doctor(
        runs_dir,
        runtime="singularity",
        singularity_bin=str(singularity_bin),
        singularity_image="docker://example/code_saturne:latest",
        check_display=False,
    )
    assert _has_item(items, "fail", "singularity binary not found or not executable")


def test_run_doctor_runtime_singularity_path_detects_apptainer(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    _patch_which(monkeypatch, {"apptainer": "/usr/bin/apptainer"})

    items = run_doctor(
        runs_dir,
        runtime="singularity",
        singularity_image="docker://example/code_saturne:latest",
        check_display=False,
    )
    assert _has_item(items, "ok", "apptainer/singularity available")


def test_run_doctor_runtime_singularity_path_missing_fails(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    _patch_which(monkeypatch, {})

    items = run_doctor(
        runs_dir,
        runtime="singularity",
        singularity_image="docker://example/code_saturne:latest",
        check_display=False,
    )
    assert _has_item(items, "fail", "apptainer/singularity not found in PATH")


def test_run_doctor_runtime_singularity_local_image_ok(tmp_path: Path) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    singularity_bin = _make_binary(tmp_path / "apptainer", executable=True)
    image = tmp_path / "code_saturne.sif"
    image.write_text("sif", encoding="utf-8")

    items = run_doctor(
        runs_dir,
        runtime="singularity",
        singularity_bin=str(singularity_bin),
        singularity_image=str(image),
        check_display=False,
    )
    assert _has_item(items, "ok", f"singularity image: {image}")


def test_run_doctor_runtime_singularity_missing_image_fails(tmp_path: Path) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    singularity_bin = _make_binary(tmp_path / "apptainer", executable=True)
    missing_image = tmp_path / "missing.sif"

    items = run_doctor(
        runs_dir,
        runtime="singularity",
        singularity_bin=str(singularity_bin),
        singularity_image=str(missing_image),
        check_display=False,
    )
    assert _has_item(items, "fail", f"singularity image not found: {missing_image}")


def test_run_doctor_runtime_singularity_remote_image_uri_ok(tmp_path: Path) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    singularity_bin = _make_binary(tmp_path / "apptainer", executable=True)

    items = run_doctor(
        runs_dir,
        runtime="singularity",
        singularity_bin=str(singularity_bin),
        singularity_image="oras://registry/simvia/code_saturne:8.3.0",
        check_display=False,
    )
    assert _has_item(items, "ok", "remote URI, not checked")


def test_run_doctor_runtime_singularity_missing_image_config_warns(tmp_path: Path) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    singularity_bin = _make_binary(tmp_path / "apptainer", executable=True)

    items = run_doctor(
        runs_dir,
        runtime="singularity",
        singularity_bin=str(singularity_bin),
        check_display=False,
    )
    assert _has_item(items, "warn", "singularity_image not configured")


def test_run_doctor_runtime_native_explicit_executable_bin_ok(tmp_path: Path) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    saturne_bin = _make_binary(tmp_path / "code_saturne", executable=True)

    items = run_doctor(
        runs_dir,
        runtime="native",
        saturne_bin=str(saturne_bin),
        check_display=False,
    )
    assert _has_item(items, "ok", f"code_saturne binary: {saturne_bin}")


def test_run_doctor_runtime_native_explicit_non_exec_bin_fails(tmp_path: Path) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    saturne_bin = _make_binary(tmp_path / "code_saturne", executable=False)

    items = run_doctor(
        runs_dir,
        runtime="native",
        saturne_bin=str(saturne_bin),
        check_display=False,
    )
    assert _has_item(items, "fail", "code_saturne binary not found or not executable")


def test_run_doctor_runtime_native_explicit_missing_bin_fails(tmp_path: Path) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")

    items = run_doctor(
        runs_dir,
        runtime="native",
        saturne_bin=str(tmp_path / "missing_code_saturne"),
        check_display=False,
    )
    assert _has_item(items, "fail", "code_saturne binary not found or not executable")


def test_run_doctor_runtime_native_falls_back_to_path(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    _patch_which(monkeypatch, {"code_saturne": "/usr/bin/code_saturne"})

    items = run_doctor(runs_dir, runtime="native", check_display=False)
    assert _has_item(items, "ok", "code_saturne found in PATH")


def test_run_doctor_runtime_native_fails_without_bin_or_path(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    _patch_which(monkeypatch, {})

    items = run_doctor(runs_dir, runtime="native", check_display=False)
    assert _has_item(items, "fail", "code_saturne not found in PATH and saturne_bin not configured")


def test_run_doctor_runtime_auto_detects_all_runtimes(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    _patch_which(
        monkeypatch,
        {
            "code_saturne": "/usr/bin/code_saturne",
            "docker": "/usr/bin/docker",
            "apptainer": "/usr/bin/apptainer",
        },
    )

    items = run_doctor(runs_dir, runtime="auto", check_display=False)
    assert _has_item(items, "ok", "available runtimes: native, docker, singularity")


def test_run_doctor_runtime_auto_warns_when_none_detected(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    _patch_which(monkeypatch, {})

    items = run_doctor(runs_dir, runtime="auto", check_display=False)
    assert _has_item(items, "warn", "no runtime found (code_saturne, docker, apptainer/singularity)")


def test_run_doctor_runtime_auto_detects_native_from_saturne_bin_file(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    saturne_bin = _make_binary(tmp_path / "code_saturne", executable=False)
    _patch_which(monkeypatch, {})

    items = run_doctor(
        runs_dir,
        runtime="auto",
        saturne_bin=str(saturne_bin),
        check_display=False,
    )
    assert _has_item(items, "ok", "available runtimes: native")


def test_run_doctor_runtime_auto_detects_docker_only(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    _patch_which(monkeypatch, {"docker": "/usr/bin/docker"})

    items = run_doctor(runs_dir, runtime="auto", check_display=False)
    assert _has_item(items, "ok", "available runtimes: docker")


def test_run_doctor_runtime_auto_detects_singularity_only(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    _patch_which(monkeypatch, {"singularity": "/usr/bin/singularity"})

    items = run_doctor(runs_dir, runtime="auto", check_display=False)
    assert _has_item(items, "ok", "available runtimes: singularity")


def test_run_doctor_display_warns_when_unset(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    monkeypatch.delenv("DISPLAY", raising=False)

    items = run_doctor(runs_dir, check_display=True)
    assert _has_item(items, "warn", "DISPLAY not set (GUI unavailable)")


def test_run_doctor_display_ok_when_socket_present(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    monkeypatch.setenv("DISPLAY", ":0")

    original_exists = Path.exists

    def fake_exists(path: Path) -> bool:
        if str(path) == "/tmp/.X11-unix":
            return True
        return original_exists(path)

    monkeypatch.setattr("csauto.maintenance.Path.exists", fake_exists)
    items = run_doctor(runs_dir, check_display=True)
    assert _has_item(items, "ok", "DISPLAY=:0")


def test_run_doctor_display_warns_when_socket_missing(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    monkeypatch.setenv("DISPLAY", ":0")

    original_exists = Path.exists

    def fake_exists(path: Path) -> bool:
        if str(path) == "/tmp/.X11-unix":
            return False
        return original_exists(path)

    monkeypatch.setattr("csauto.maintenance.Path.exists", fake_exists)
    items = run_doctor(runs_dir, check_display=True)
    assert _has_item(items, "warn", "DISPLAY is set but /tmp/.X11-unix is missing")


def test_run_doctor_display_check_can_be_disabled(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    monkeypatch.setenv("DISPLAY", ":0")

    items = run_doctor(runs_dir, check_display=False)
    assert all("DISPLAY" not in item.message for item in items)


def test_run_doctor_legacy_require_docker_still_supported(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    _patch_which(monkeypatch, {"docker": "/usr/bin/docker"})

    items = run_doctor(runs_dir, require_docker=True, check_display=False)
    assert _has_item(items, "ok", "docker available")


def test_run_doctor_explicit_runtime_overrides_legacy_require_docker(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    runs_dir = _make_runs_dir(tmp_path)
    _add_case(runs_dir, "case0001")
    _patch_which(monkeypatch, {"code_saturne": "/usr/bin/code_saturne"})

    items = run_doctor(
        runs_dir,
        require_docker=True,
        runtime="native",
        check_display=False,
    )
    assert _has_item(items, "ok", "code_saturne found in PATH")
    assert not _has_item(items, "fail", "docker not found in PATH")


def test_cleanup_runs_unlinks_symlink_without_following_target(tmp_path: Path) -> None:
    """Fix 10: a symlink inside RESU must be removed (unlinked) during cleanup,
    not followed — the target directory and its contents must survive."""
    runs_dir = _make_runs_dir(tmp_path)
    case_dir = _add_case(runs_dir, "case0001")

    # Real RESU directory that should be kept.
    real_resu = tmp_path / "external_resu"
    real_resu.mkdir()
    sentinel = real_resu / "important.csv"
    sentinel.write_text("data", encoding="utf-8")

    # Symlink inside RESU pointing to the real directory.
    resu_root = case_dir / "RESU"
    resu_root.mkdir()
    link = resu_root / "001"
    link.symlink_to(real_resu)

    report = cleanup_runs(runs_dir, prune_resu=True, keep_last=0)

    # The symlink must be gone.
    assert not link.exists()
    assert not link.is_symlink()
    # The target and its contents must be intact.
    assert real_resu.is_dir()
    assert sentinel.read_text(encoding="utf-8") == "data"
    assert report.resu_removed == 1
