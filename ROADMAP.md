# Product Roadmap — csauto

> Automate **code_saturne** simulation campaigns from DOE to results, locally or on HPC clusters.

This roadmap is a declaration of intent, not a contractual engagement. It is updated at each minor or major release.

*Last updated: v0.3.1 — 2026-07-09*

## Current Capabilities (v0.3.1)

- Case generation from DOE CSV + template directory, or a generated parameter spec
- Local and Slurm job execution
- Web monitoring dashboard (residuals, probes, logs, status)
- Restart from checkpoint, live case steering (stop/extend/checkpoint), input file comparison, cleanup
- Support for native, Docker, and Singularity runtimes

## Short Term

- Add total line count indicator in the log tail panel
- Show timing snapshots for previous restarts
- Show log tail history for previous restarts
- Avoid copying the mesh folder into the calculation directory to reduce disk space usage

## Medium Term

- Time range filtering for residuals and probes (starts from / ends at)
- Export charts as PNG, JPG, and other image formats
- XML setup files directly editable in the web UI
- Dashboard layout customization (extract tabs as standalone cards)

## Long Term

- WebSocket-based live refresh (replace polling)
- Client-side chart rendering from data (replace server-side SVG generation)
- Improve log error/warning detection accuracy in the log tail

## Out of Scope (for now)

- Mesh generation or preprocessing
- Solver development or debugging
- Cloud-native orchestration (Kubernetes, etc.)
