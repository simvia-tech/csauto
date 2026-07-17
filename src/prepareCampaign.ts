import * as vscode from "vscode";
import * as path from "path";
import { execFile } from "child_process";
import { RuntimeManager } from "./RuntimeManager";

interface PickItem extends vscode.QuickPickItem {
  fsPath?: string;
  browse?: boolean;
}

async function pickPath(
  items: PickItem[],
  placeHolder: string,
  browseOptions: vscode.OpenDialogOptions,
): Promise<string | undefined> {
  items.push({ label: "$(search) Browse…", browse: true });
  const picked = await vscode.window.showQuickPick(items, { placeHolder });
  if (!picked) {
    return undefined;
  }
  if (picked.browse) {
    const chosen = await vscode.window.showOpenDialog({ canSelectMany: false, ...browseOptions });
    return chosen?.[0]?.fsPath;
  }
  return picked.fsPath;
}

/**
 * Guided `csauto prepare`: pick a DOE CSV and a template case from the
 * workspace and generate the cases. Returns the created runs directory.
 */
export async function prepareCampaign(runtime: RuntimeManager, output: vscode.OutputChannel): Promise<string | undefined> {
  const folder = vscode.workspace.workspaceFolders?.[0];
  if (!folder) {
    void vscode.window.showErrorMessage("csauto: open a folder first to prepare a campaign.");
    return undefined;
  }
  const root = folder.uri.fsPath;
  const python = await runtime.ensurePython();
  if (!python) {
    return undefined;
  }

  const csvs = await vscode.workspace.findFiles("**/*.csv", "**/{node_modules,.git,RUNS}/**", 30);
  const csvItems: PickItem[] = csvs
    .map((uri) => ({ label: `$(file) ${path.relative(root, uri.fsPath)}`, fsPath: uri.fsPath }))
    .sort((a, b) => Number(b.label.includes("doe")) - Number(a.label.includes("doe")));
  const doePath = await pickPath(csvItems, "DOE CSV (one case per row)", {
    defaultUri: folder.uri,
    filters: { "CSV files": ["csv"] },
  });
  if (!doePath) {
    return undefined;
  }

  const setups = await vscode.workspace.findFiles("**/DATA/setup.xml", "**/{node_modules,.git,RUNS}/**", 30);
  const templateDirs = Array.from(new Set(setups.map((uri) => path.dirname(path.dirname(uri.fsPath))))).sort();
  const templateItems: PickItem[] = templateDirs.map((dir) => ({
    label: `$(folder) ${path.relative(root, dir) || "."}`,
    fsPath: dir,
  }));
  const templatePath = await pickPath(templateItems, "Template case (contains DATA/setup.xml)", {
    defaultUri: folder.uri,
    canSelectFiles: false,
    canSelectFolders: true,
  });
  if (!templatePath) {
    return undefined;
  }

  const outName = await vscode.window.showInputBox({
    prompt: "Runs directory to generate the cases into (created if missing)",
    value: "RUNS",
  });
  if (!outName) {
    return undefined;
  }

  const ok = await vscode.window.withProgress(
    { location: vscode.ProgressLocation.Notification, title: "Preparing campaign…" },
    () =>
      new Promise<boolean>((resolve) => {
        output.appendLine(`[csauto] prepare ${doePath} ${templatePath} ${outName}`);
        execFile(
          python,
          ["-m", "csauto", "prepare", doePath, templatePath, outName],
          { cwd: root, maxBuffer: 16 * 1024 * 1024 },
          (error, stdout, stderr) => {
            if (stdout.trim()) {
              output.append(stdout);
            }
            if (stderr.trim()) {
              output.append(stderr);
            }
            resolve(!error);
          },
        );
      }),
  );
  if (!ok) {
    const choice = await vscode.window.showErrorMessage("csauto prepare failed.", "Show Logs");
    if (choice === "Show Logs") {
      output.show(true);
    }
    return undefined;
  }

  return path.resolve(root, outName);
}
