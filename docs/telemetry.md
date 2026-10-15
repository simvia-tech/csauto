# Telemetry

csauto collects anonymous usage statistics to help us understand how the tool is used and prioritize improvements. No personal data, file paths, simulation data, or case names are ever sent.

## What is collected

- A random anonymous identifier (persistent across sessions, shared by the CLI and the extension)
- csauto version (the extension's version for extension events)
- Timezone offset
- The event type, whether it succeeded, and a short context: the solver (code_saturne or code_aster), and the runtime (docker, singularity, or native) for the CLI or where VS Code runs (local, WSL, SSH remote...) for the extension
- For a finished simulation run, its duration

## When it is sent

- From the VS Code extension: when it activates in a window, when a campaign is created, and when a simulation run finishes (`DONE` or `FAILED`)
- From the CLI without VS Code: once during install or update (`install.sh`), and once when `csauto serve` starts, then a daily heartbeat while it runs

## How to opt out

In VS Code, turn off `csauto.enableTelemetry`, or VS Code's own telemetry (`telemetry.telemetryLevel`): either one also silences the servers the extension starts. Elsewhere:

```bash
# Via the CLI
csauto disable-telemetry

# During installation
./install.sh --no-telemetry

# Via the web UI
# Open Settings (gear icon) and uncheck "Send anonymous usage statistics"
```

To re-enable: `csauto enable-telemetry`.
