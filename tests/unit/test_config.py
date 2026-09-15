from __future__ import annotations

from pathlib import Path

import pytest

from csauto.config import load_config


def test_load_config_reads_runtime_fields(tmp_path: Path) -> None:
    cfg = tmp_path / "csauto.toml"
    cfg.write_text(
        """
runtime = "auto"
docker_image = "simvia/code_saturne:latest"
saturne_bin = "/opt/code_saturne/bin/code_saturne"
singularity_image = "/images/cs.sif"
singularity_bin = "/usr/bin/apptainer"
use_slurm = true
mpi_exec_options = "--mca btl vader,self,tcp --bind-to core"
""".strip(),
        encoding="utf-8",
    )

    config = load_config(cfg)
    assert config.runtime == "auto"
    assert config.docker_image == "simvia/code_saturne:latest"
    assert config.saturne_bin == "/opt/code_saturne/bin/code_saturne"
    assert config.singularity_image == "/images/cs.sif"
    assert config.singularity_bin == "/usr/bin/apptainer"
    assert config.use_slurm is True
    assert config.mpi_exec_options == "--mca btl vader,self,tcp --bind-to core"


def test_load_config_invalid_toml_raises(tmp_path: Path) -> None:
    cfg = tmp_path / "csauto.toml"
    cfg.write_text('runtime = "native"\n[api\n', encoding="utf-8")

    with pytest.raises(ValueError, match="Invalid TOML"):
        load_config(cfg)


def test_load_config_invalid_runtime_raises(tmp_path: Path) -> None:
    cfg = tmp_path / "csauto.toml"
    cfg.write_text('runtime = "podman"\n', encoding="utf-8")

    with pytest.raises(ValueError, match="Invalid runtime"):
        load_config(cfg)


def test_load_config_invalid_max_parallel_raises(tmp_path: Path) -> None:
    cfg = tmp_path / "csauto.toml"
    cfg.write_text("max_parallel = 0\n", encoding="utf-8")

    with pytest.raises(ValueError, match="max_parallel"):
        load_config(cfg)


def test_load_config_missing_explicit_path_raises(tmp_path: Path) -> None:
    missing = tmp_path / "missing.toml"

    with pytest.raises(FileNotFoundError, match="Config file not found"):
        load_config(missing)


def test_load_config_defaults_mesh_mode_to_symlink(tmp_path: Path) -> None:
    cfg = tmp_path / "csauto.toml"
    cfg.write_text("", encoding="utf-8")

    config = load_config(cfg)
    assert config.mesh_mode == "symlink"


def test_load_config_reads_mesh_mode(tmp_path: Path) -> None:
    cfg = tmp_path / "csauto.toml"
    cfg.write_text('mesh_mode = "symlink"\n', encoding="utf-8")

    config = load_config(cfg)
    assert config.mesh_mode == "symlink"


def test_load_config_invalid_mesh_mode_raises(tmp_path: Path) -> None:
    cfg = tmp_path / "csauto.toml"
    cfg.write_text('mesh_mode = "hardlink"\n', encoding="utf-8")

    with pytest.raises(ValueError, match="mesh_mode"):
        load_config(cfg)


def test_backend_intervals_have_defaults(tmp_path) -> None:
    from csauto.config import load_config

    config_path = tmp_path / "csauto.toml"
    config_path.write_text("runtime = 'native'\n", encoding="utf-8")
    config = load_config(config_path)

    assert config.backend_poll_interval_s == 15
    assert config.backend_sync_interval_s == 60


def test_backend_intervals_are_read_and_validated(tmp_path) -> None:
    from csauto.config import load_config

    config_path = tmp_path / "csauto.toml"
    config_path.write_text("backend_poll_interval_s = 30\nbackend_sync_interval_s = 120\n", encoding="utf-8")
    config = load_config(config_path)
    assert config.backend_poll_interval_s == 30
    assert config.backend_sync_interval_s == 120

    config_path.write_text("backend_poll_interval_s = 0\n", encoding="utf-8")
    with pytest.raises(ValueError, match="backend_poll_interval_s"):
        load_config(config_path)


def test_qarnot_settings_have_defaults(tmp_path: Path) -> None:
    (tmp_path / "csauto.toml").write_text("solver = 'stub'\n", encoding="utf-8")
    config = load_config(tmp_path / "csauto.toml")

    assert config.qarnot_profile == "docker-batch"
    assert config.qarnot_snapshot_interval_s == 60
    assert config.qarnot_max_upload_mb == 512


def test_qarnot_settings_are_read_from_their_table(tmp_path: Path) -> None:
    (tmp_path / "csauto.toml").write_text(
        "[qarnot]\nprofile = 'docker-batch'\nsnapshot_interval_s = 120\nmax_upload_mb = 64\n",
        encoding="utf-8",
    )
    config = load_config(tmp_path / "csauto.toml")

    assert config.qarnot_snapshot_interval_s == 120
    assert config.qarnot_max_upload_mb == 64


def test_a_qarnot_token_in_the_config_file_is_rejected(tmp_path: Path) -> None:
    """The campaign file is shared, committed and archived. The token is not."""
    (tmp_path / "csauto.toml").write_text("[qarnot]\ntoken = 'secret'\n", encoding="utf-8")

    with pytest.raises(ValueError, match="QARNOT_TOKEN"):
        load_config(tmp_path / "csauto.toml")


def test_a_bad_qarnot_interval_is_rejected(tmp_path: Path) -> None:
    (tmp_path / "csauto.toml").write_text("[qarnot]\nsnapshot_interval_s = 0\n", encoding="utf-8")

    with pytest.raises(ValueError, match="snapshot_interval_s"):
        load_config(tmp_path / "csauto.toml")
