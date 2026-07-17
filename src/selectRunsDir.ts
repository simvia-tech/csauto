import * as vscode from "vscode";
import * as path from "path";

/** Campaign runs directories detected in the workspace via their registry.json. */
export async function findCampaignRunsDirs(): Promise<string[]> {
  const registries = await vscode.workspace.findFiles("**/registry.json", "**/{node_modules,.git,.venv}/**", 10);
  return Array.from(new Set(registries.map((uri) => path.resolve(path.dirname(uri.fsPath))))).sort();
}

/**
 * Resolve the campaign a palette command should act on: auto when the
 * workspace has exactly one, quick-pick (plus browse) otherwise.
 */
export async function pickCampaign(placeHolder: string): Promise<string | undefined> {
  const campaigns = await findCampaignRunsDirs();
  if (campaigns.length === 1) {
    return campaigns[0];
  }
  const workspaceRoot = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath ?? "";
  interface CampaignItem extends vscode.QuickPickItem {
    dir?: string;
    browse?: boolean;
  }
  const items: CampaignItem[] = campaigns.map((dir) => ({
    label: `$(folder) ${path.relative(workspaceRoot, dir) || path.basename(dir)}`,
    dir,
  }));
  items.push({ label: "$(search) Browse…", browse: true });
  const picked = await vscode.window.showQuickPick(items, { placeHolder });
  if (!picked) {
    return undefined;
  }
  if (picked.browse) {
    const chosen = await vscode.window.showOpenDialog({
      canSelectFiles: false,
      canSelectFolders: true,
      canSelectMany: false,
      openLabel: "Use as runs directory",
    });
    return chosen?.[0]?.fsPath;
  }
  return picked.dir;
}
