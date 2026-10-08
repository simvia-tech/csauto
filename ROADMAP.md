# Product Roadmap — csauto

> Automate **code_saturne** simulation campaigns from DOE to results, locally or on HPC clusters.

This roadmap is a declaration of intent, not a contractual engagement. It is updated at each minor or major release.

*Last updated: v0.6.0 — 2026-10-08*

## Current Capabilities (v0.6.0)

- Case generation from DOE CSV + template directory, or a generated parameter spec
- Local and Slurm job execution
- Web monitoring dashboard (residuals, probes, logs, status)
- Restart from checkpoint, live case steering (stop/extend/checkpoint), input file comparison, cleanup
- Support for native, Docker, and Singularity runtimes
- code_saturne and code_aster solvers, each described by one adapter class that the CLI and dashboard follow

## Short Term

- Add total line count indicator in the log tail panel
- Show timing snapshots for previous restarts
- Show log tail history for previous restarts

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
