import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

const IGNORED = "**/{node_modules,.git,.venv,RUNS,_examples}/**";

/**
 * Campaign runs directories in the workspace. A campaign is a folder holding a
 * csauto.toml (its runs directory is RUNS/ next to it, generated or not yet), or
 * a runs directory whose registry.json looks like csauto's (campaigns from older csauto).
 */
export async function findCampaignRunsDirs(): Promise<string[]> {
  const [configs, registries] = await Promise.all([
    vscode.workspace.findFiles("**/csauto.toml", IGNORED, 50),
    vscode.workspace.findFiles("**/registry.json", "**/{node_modules,.git,.venv,_examples}/**", 50),
  ]);
  const runsDirs = [
    ...configs.map((uri) => path.join(path.dirname(uri.fsPath), "RUNS")),
    ...registries.filter((uri) => isCsautoRegistry(uri.fsPath)).map((uri) => path.dirname(uri.fsPath)),
  ];
  return Array.from(new Set(runsDirs.map((dir) => path.resolve(dir)))).sort();
}

const STATUSES = ["PREPARED", "PENDING", "RUNNING", "DONE", "FAILED"];

/** A registry.json written by csauto: next to a campaign.json, or a non-empty map of cases carrying a status. */
function isCsautoRegistry(file: string): boolean {
  if (fs.existsSync(path.join(path.dirname(file), "campaign.json"))) {
    return true;
  }
  try {
    const cases = Object.values(JSON.parse(fs.readFileSync(file, "utf-8")) as Record<string, { status?: string }>);
    return cases.length > 0 && cases.every((c) => STATUSES.includes(c?.status ?? ""));
  } catch {
    return false;
  }
}

/** True once `csauto prepare` generated the campaign's cases. */
export function isGenerated(runsDir: string): boolean {
  return fs.existsSync(path.join(runsDir, "registry.json"));
}

/**
 * Resolve the campaign a palette command should act on: auto when the
 * workspace has exactly one, quick-pick (plus browse) otherwise.
 */
export async function pickCampaign(placeHolder: string): Promise<string | undefined> {
  const campaigns = (await findCampaignRunsDirs()).filter(isGenerated);
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
