import * as vscode from "vscode";
import { execFile } from "child_process";
import { telemetryEnv } from "./telemetry";

export interface CsautoResult {
  ok: boolean;
  stdout: string;
  stderr: string;
}

/** Run `python -m csauto <args>` from `cwd`, echoing what it prints on stderr to the channel. */
export function runCsauto(
  python: string,
  args: string[],
  cwd: string,
  output: vscode.OutputChannel,
): Promise<CsautoResult> {
  return new Promise((resolve) => {
    output.appendLine(`[csauto] ${args.join(" ")}  (in ${cwd})`);
    execFile(python, ["-m", "csauto", ...args], { cwd, env: { ...process.env, ...telemetryEnv() }, maxBuffer: 16 * 1024 * 1024 }, (error, stdout, stderr) => {
      if (stderr.trim()) {
        output.append(stderr);
      }
      resolve({ ok: !error, stdout, stderr });
    });
  });
}

/** The "Error: ..." line csauto printed, for a short notification. */
export function errorLine(result: CsautoResult): string {
  const line = result.stderr.split("\n").find((text) => text.startsWith("Error:")) ?? result.stderr.trim();
  return line.replace(/^Error:\s*/, "") || "see the csauto logs";
}

export async function showFailure(message: string, output: vscode.OutputChannel): Promise<void> {
  if ((await vscode.window.showErrorMessage(message, "Show Logs")) === "Show Logs") {
    output.show(true);
  }
}
