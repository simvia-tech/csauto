# Solvers

csauto drives code_aster and code_saturne. You only need the ones you use, and each campaign picks its own way to run its solver (you can change it later from its **Solver** row).

## <img src="../../csauto/solvers/logos/code_aster.svg" width="166" alt="code_aster">

Structural mechanics, from `.export` and `.comm` studies.

- **Docker (recommended).** csauto lists the `simvia/code_aster` versions from Docker Hub and downloads the one you pick.
- **A native install.** csauto finds `run_aster` on your PATH.
- **Apptainer or Singularity**, common on clusters: point the campaign to a `.sif` image of code_aster.

## <img src="../../csauto/solvers/logos/code_saturne.svg" width="207" alt="code_saturne">

Computational fluid dynamics, from `setup.xml` cases.

- **Docker (recommended).** csauto lists the `simvia/code_saturne` versions from Docker Hub and downloads the one you pick.
- **A native install.** csauto finds `code_saturne` on your PATH.
- **Apptainer or Singularity**: point the campaign to a `.sif` image of code_saturne.

For Docker, install [Docker Desktop](https://docs.docker.com/get-started/get-docker/) on macOS or Windows (with WSL), or Docker Engine on Linux, and make sure it is running.
