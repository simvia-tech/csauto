import * as vscode from "vscode";
import * as path from "path";

interface RunsDirItem extends vscode.QuickPickItem {
  value?: string;
  browse?: boolean;
}

function toSettingValue(workspaceRoot: string, dir: string): string {
  const rel = path.relative(workspaceRoot, dir);
  if (rel === "") {
    return ".";
  }
  return rel.startsWith("..") ? dir : rel;
}

/** Campaign runs directories detected in the workspace via their registry.json. */
export async function findCampaignRunsDirs(): Promise<string[]> {
  const registries = await vscode.workspace.findFiles("**/registry.json", "**/{node_modules,.git,.venv}/**", 10);
  return Array.from(new Set(registries.map((uri) => path.dirname(uri.fsPath)))).sort();
}

/**
 * Pin the runs directory for this workspace: quick-pick of campaign
 * directories detected via their registry.json, plus a folder browser.
 * Persists to workspace settings. Returns true if the setting changed.
 */
export async function selectRunsDir(): Promise<boolean> {
  const folder = vscode.workspace.workspaceFolders?.[0];
  if (!folder) {
    void vscode.window.showErrorMessage("csauto: open a folder first to pin a runs directory.");
    return false;
  }
  const config = vscode.workspace.getConfiguration("csauto");
  const current = config.get<string>("runsDir", "RUNS");

  const candidates = await findCampaignRunsDirs();

  const items: RunsDirItem[] = candidates.map((dir) => {
    const value = toSettingValue(folder.uri.fsPath, dir);
    return {
      label: `$(folder) ${value}`,
      description: value === current ? "current" : undefined,
      value,
    };
  });
  items.push({ label: "$(search) Browse…", browse: true });

  const picked = await vscode.window.showQuickPick(items, {
    placeHolder: "Pin the runs directory for this workspace (campaigns detected via registry.json)",
  });
  if (!picked) {
    return false;
  }

  let value = picked.value;
  if (picked.browse) {
    const chosen = await vscode.window.showOpenDialog({
      canSelectFiles: false,
      canSelectFolders: true,
      canSelectMany: false,
      defaultUri: folder.uri,
      openLabel: "Pin as runs directory",
    });
    if (!chosen || chosen.length === 0) {
      return false;
    }
    value = toSettingValue(folder.uri.fsPath, chosen[0].fsPath);
  }
  if (value === undefined || value === current) {
    return false;
  }
  await config.update("runsDir", value, vscode.ConfigurationTarget.Workspace);
  return true;
}
