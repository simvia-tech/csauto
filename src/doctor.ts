import * as vscode from "vscode";
import { execFile } from "child_process";

export interface DoctorResult {
  fails: string[];
  warns: string[];
  lines: string[];
}

let lastResult: DoctorResult | undefined;
const resultEmitter = new vscode.EventEmitter<DoctorResult>();

/** Fires whenever a doctor run completes (server start or explicit command). */
export const onDidRunDoctor = resultEmitter.event;

export function lastDoctorResult(): DoctorResult | undefined {
  return lastResult;
}

export function runDoctor(
  python: string,
  runsDir: string,
  cwd: string,
  output: vscode.OutputChannel,
): Promise<DoctorResult> {
  return new Promise((resolve) => {
    execFile(python, ["-m", "csauto", "doctor", runsDir], { cwd, maxBuffer: 4 * 1024 * 1024 }, (_error, stdout, stderr) => {
      const text = `${stdout}\n${stderr}`.trim();
      if (text) {
        output.appendLine("[csauto] doctor:");
        output.appendLine(text);
      }
      const lines = text.split("\n");
      const result: DoctorResult = {
        fails: lines.filter((line) => line.startsWith("[FAIL]")),
        warns: lines.filter((line) => line.startsWith("[WARN]")),
        lines,
      };
      lastResult = result;
      resultEmitter.fire(result);
      resolve(result);
    });
  });
}
