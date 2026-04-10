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
