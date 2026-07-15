import * as vscode from "vscode";
import { execFile } from "child_process";

export interface DoctorResult {
  fails: string[];
  warns: string[];
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
      resolve({
        fails: lines.filter((line) => line.startsWith("[FAIL]")),
        warns: lines.filter((line) => line.startsWith("[WARN]")),
      });
    });
  });
}
