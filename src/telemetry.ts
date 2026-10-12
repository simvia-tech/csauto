import * as vscode from "vscode";
import { execFile } from "child_process";

// Event types, shared with csauto/telemetry.py (the server rejects unknown ones).
// The third one, a finished run (7), is sent by the servers the extension starts.
export const EVENT_EXT_ACTIVATED = 5;
export const EVENT_EXT_CAMPAIGN_CREATED = 6;

/** Whether the user allows csauto telemetry: both VS Code's setting and csauto.enableTelemetry. */
function telemetryAllowed(): boolean {
  return (
    vscode.env.isTelemetryEnabled &&
    vscode.workspace.getConfiguration("csauto").get<boolean>("enableTelemetry", true)
  );
}

/** The VS Code side of the context string: where the window runs, never workspace data. */
function remoteKind(): string {
  return vscode.env.remoteName ?? "local";
}

function extensionVersion(): string {
  return (vscode.extensions.getExtension("simvia.csauto")?.packageJSON.version as string | undefined) ?? "";
}

/**
 * Environment for the csauto processes the extension starts: they report
 * finished runs with the extension's version and where VS Code runs, send none
 * of the CLI's own pings, and nothing at all when telemetry is off in VS Code.
 */
export function telemetryEnv(): Record<string, string> {
  const env = { CSAUTO_CLIENT: remoteKind(), CSAUTO_CLIENT_VERSION: extensionVersion() };
  return telemetryAllowed() ? env : { ...env, CSAUTO_TELEMETRY_DISABLED: "1" };
}

/**
 * Fire-and-forget anonymous usage ping, routed through csauto's own telemetry
 * (`csauto _telemetry-ping`) so the CLI and the extension share one user id and
 * one opt-out. It carries the extension's version, and `detail` (a solver
 * name, never a path) is appended to the remote kind.
 */
export function sendTelemetry(python: string | undefined, eventType: number, ok = true, detail?: string): void {
  if (!python || !telemetryAllowed()) {
    return;
  }
  const context = detail ? `${detail}:${remoteKind()}` : remoteKind();
  const version = extensionVersion();
  const args = ["-m", "csauto", "_telemetry-ping", String(eventType), context];
  if (version) {
    args.push("--version", version);
  }
  if (!ok) {
    args.push("--failed");
  }
  execFile(python, args, () => {});
}
