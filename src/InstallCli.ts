import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import * as os from "os";
import { RuntimeManager } from "./RuntimeManager";
import { EVENT_EXT_CLI_INSTALL, sendTelemetry } from "./telemetry";

const SHIM_MARKER = "# csauto VS Code extension shim";

function shimPath(): string {
  return path.join(os.homedir(), ".local", "bin", "csauto");
}

function shimContent(python: string): string {
  return `#!/bin/sh\n${SHIM_MARKER}\nexec "${python}" -m csauto "$@"\n`;
}

/** Whether the ~/.local/bin/csauto shim written by this extension exists. */
export function shimInstalled(): boolean {
  try {
    return fs.readFileSync(shimPath(), "utf-8").includes(SHIM_MARKER);
  } catch {
    return false;
  }
}

/**
 * Shell rc files that may contain a `csauto` alias (created by install.sh or
 * by hand) which would shadow the shim in interactive shells.
 */
export async function findShadowingAliasFiles(): Promise<string[]> {
  const home = os.homedir();
  const hits: string[] = [];
  for (const name of [".zshrc", ".bashrc", ".bash_aliases"]) {
    try {
      const content = await fs.promises.readFile(path.join(home, name), "utf-8");
      if (/^\s*alias\s+csauto=/m.test(content)) {
        hits.push(path.join(home, name));
      }
    } catch {
      // File absent or unreadable — nothing to shadow.
    }
  }
  return hits;
}

/**
 * Expose the managed runtime's csauto as a `csauto` command in the user's
 * shell, via a shim in ~/.local/bin.
 */
export async function installCli(runtime: RuntimeManager, output: vscode.OutputChannel): Promise<void> {
  if (process.platform === "win32") {
    void vscode.window.showErrorMessage("Installing the csauto CLI shim is not supported on Windows yet.");
    return;
  }
  const python = await runtime.ensurePython();
  if (!python) {
    return;
  }
  const target = shimPath();
  try {
    let existing: string | undefined;
    try {
      existing = await fs.promises.readFile(target, "utf-8");
    } catch {
      // No existing file.
    }
    if (existing !== undefined && !existing.includes(SHIM_MARKER)) {
      const choice = await vscode.window.showWarningMessage(
        `${target} already exists and was not created by this extension. Overwrite it?`,
        { modal: true },
        "Overwrite",
      );
      if (choice !== "Overwrite") {
        return;
      }
    }
    await fs.promises.mkdir(path.dirname(target), { recursive: true });
    await fs.promises.writeFile(target, shimContent(python), { mode: 0o755 });
    output.appendLine(`[csauto] CLI shim written to ${target} (using ${python}).`);
    sendTelemetry(runtime.current(), EVENT_EXT_CLI_INSTALL);

    const onPath = (process.env.PATH ?? "").split(path.delimiter).includes(path.dirname(target));
    const aliasFiles = await findShadowingAliasFiles();
    if (aliasFiles.length > 0) {
      const names = aliasFiles.map((file) => path.basename(file)).join(", ");
      const choice = await vscode.window.showWarningMessage(
        `csauto CLI installed, but an existing alias in ${names} will shadow it in interactive shells. ` +
          'Remove the "alias csauto=" line to use the extension-managed CLI.',
        `Open ${path.basename(aliasFiles[0])}`,
      );
      if (choice) {
        await vscode.window.showTextDocument(vscode.Uri.file(aliasFiles[0]));
      }
    } else {
      void vscode.window.showInformationMessage(
        onPath
          ? "csauto CLI installed — try `csauto --help` in a new terminal."
          : `csauto CLI installed at ${target} — add ~/.local/bin to your PATH to use it.`,
      );
    }
  } catch (err) {
    sendTelemetry(runtime.current(), EVENT_EXT_CLI_INSTALL, false);
    const message = err instanceof Error ? err.message : String(err);
    void vscode.window.showErrorMessage(`csauto: installing the CLI failed: ${message}`);
  }
}
