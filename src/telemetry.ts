import * as vscode from "vscode";
import { execFile } from "child_process";

export const EVENT_EXT_SERVE = 6;
export const EVENT_EXT_DASHBOARD_OPEN = 7;
export const EVENT_EXT_CLI_INSTALL = 8;

/**
 * Fire-and-forget anonymous usage ping, routed through csauto's own telemetry
 * (`csauto _telemetry-ping`) so the CLI and the extension share one user id and
 * one opt-out. Gated here on VS Code's telemetry setting; the Python side
 * additionally honors csauto's enable/disable-telemetry state. The context
 * string carries the remote kind — never workspace-identifying data.
 */
export function sendTelemetry(python: string | undefined, eventType: number, ok = true): void {
  if (!python || !vscode.env.isTelemetryEnabled) {
    return;
  }
  const context = vscode.env.remoteName ?? "local";
  const args = ["-m", "csauto", "_telemetry-ping", String(eventType), context];
  if (!ok) {
    args.push("--failed");
  }
  execFile(python, args, () => {});
}
