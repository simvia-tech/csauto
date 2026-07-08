# Documentation Index

## Getting started

1. [Core concepts](./concepts.md) — understand the DOE/template/cases mental model before anything else
2. [Quickstart](./quickstart.md) — step-by-step first run, local and Slurm

## Daily use (web UI)

The web UI is the recommended interface for all daily operations.

- [Web UI guide](./web-ui.md) — launch, monitor, restart, stop/extend/checkpoint, kill, clean from the browser
- [Task cookbook](./task-cookbook.md) — copy/paste recipes, UI-first with CLI alternatives
- [Run lifecycle](./run-lifecycle.md) — case states, transitions, and state files

## Reference

- [Configuration](./config.md) — `csauto.toml` keys, environment variables, priority rules
- [DOE format](./doe-format.md) — CSV format, placeholders, IF blocks
- [Input/output formats](./formats.md) — files read and written by csauto
- [HTTP API](./api.md) — REST endpoints, request conventions, cURL examples
- [CLI reference](./cli.md) — all commands and options (for scripting and setup steps)
- [Limitations](./limitations.md) — known constraints and best practices

## Troubleshooting

- [Troubleshooting](./troubleshooting.md) — error messages, diagnostics, common issues

## Contributing

- [Architecture](./architecture.md)
- [Contributing guide](./contributing.md)
- [Test suite](../tests/README.md)
