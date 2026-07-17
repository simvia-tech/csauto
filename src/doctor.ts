import * as vscode from "vscode";
import * as path from "path";
import { execFile } from "child_process";

export interface DoctorResult {
  fails: string[];
  warns: string[];
  lines: string[];
}

const results = new Map<string, DoctorResult>();
const resultEmitter = new vscode.EventEmitter<DoctorResult>();

/** Fires whenever a doctor run completes (server start or explicit command). */
export const onDidRunDoctor = resultEmitter.event;

/** The latest doctor result for a campaign's runs directory, if any ran. */
export function lastDoctorResult(runsDir: string): DoctorResult | undefined {
  return results.get(path.resolve(runsDir));
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
      results.set(path.resolve(runsDir), result);
      resultEmitter.fire(result);
      resolve(result);
    });
  });
}
