import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { ServerManager } from "./ServerManager";
import { campaignSolver, readCampaignConfig } from "./campaignConfig";
import { lastDoctorResult, onDidRunDoctor } from "./doctor";
import { findCampaignRunsDirs, isGenerated } from "./selectRunsDir";
import { knownSolvers } from "./solvers";
import { describeSolverSetup } from "./solverPicker";
import { Item, actionItem } from "./treeItems";

/** Data rows of a DOE table, or undefined when it does not exist. */
function countDoeRows(doe: string): number | undefined {
  try {
    const lines = fs.readFileSync(doe, "utf-8").split(/\r?\n/).filter((line) => line.trim());
    return Math.max(lines.length - 1, 0);
  } catch {
    return undefined;
  }
}

/** Cases csauto generated, from the campaign's registry. */
function countGeneratedCases(runsDir: string): number {
  try {
    return Object.keys(JSON.parse(fs.readFileSync(path.join(runsDir, "registry.json"), "utf-8"))).length;
  } catch {
    return 0;
  }
}

/**
 * The Campaigns view: one row per campaign folder, its solver and version in
 * the description and its dashboard as an inline button; the row expands to
 * the campaign's steps, and its context menu holds the other actions.
 */
export class CampaignsViewProvider implements vscode.TreeDataProvider<Item> {
  private readonly changeEmitter = new vscode.EventEmitter<void>();
  readonly onDidChangeTreeData = this.changeEmitter.event;

  constructor(private readonly server: ServerManager) {
    server.onDidChangeState(() => this.changeEmitter.fire());
    onDidRunDoctor(() => this.changeEmitter.fire());
  }

  refresh(): void {
    this.changeEmitter.fire();
  }

  getTreeItem(item: Item): vscode.TreeItem {
    return item;
  }

  async getChildren(parent?: Item): Promise<Item[]> {
    if (parent) {
      return parent.children ?? [];
    }
    const campaigns = await findCampaignRunsDirs();
    // Empty: the view's welcome content explains campaigns and offers New Campaign.
    const solvers = await knownSolvers();
    return campaigns.map((runsDir) => this.campaignItem(runsDir, solvers));
  }

  private campaignItem(runsDir: string, solvers: Awaited<ReturnType<typeof knownSolvers>>): Item {
    const root = this.server.campaignRoot(runsDir);
    const solverName = campaignSolver(runsDir, root);
    const config = readCampaignConfig(root);
    const solverSetup = `${solverName} ${describeSolverSetup(config, solvers.find((s) => s.name === solverName))}`;
    const generated = isGenerated(runsDir);
    const running = this.server.get(runsDir) !== undefined;
    const doctor = generated ? lastDoctorResult(runsDir) : undefined;

    const item = new Item(path.basename(root), vscode.TreeItemCollapsibleState.Collapsed);
    item.runsDir = runsDir;
    item.contextValue = generated ? (running ? "campaign.generated.running" : "campaign.generated") : "campaign";
    item.description = solverSetup;
    item.tooltip = `${root}${running ? "\nDashboard server running" : ""}`;
    item.iconPath =
      doctor && doctor.fails.length > 0
        ? new vscode.ThemeIcon("warning", new vscode.ThemeColor("list.warningForeground"))
        : new vscode.ThemeIcon(running ? "folder-active" : "folder");

    const rows = countDoeRows(path.join(root, "doe.csv"));
    const doeItem = actionItem("DOE table", "table", "vscode.open", undefined, [vscode.Uri.file(path.join(root, "doe.csv"))]);
    doeItem.description = rows === undefined ? "doe.csv missing" : `${rows} row${rows === 1 ? "" : "s"}`;
    doeItem.tooltip = "doe.csv: one row per case, one column per {placeholder} of the template case.";

    const templateItem = actionItem("Template case", "file-code", "revealInExplorer", "TEMPLATE/", [
      vscode.Uri.file(path.join(root, "TEMPLATE")),
    ]);
    templateItem.tooltip = "The case copied for every DOE row, with its {placeholders} filled in.";

    const solverItem = actionItem("Solver", "settings-gear", "csauto.changeSolverFor", solverSetup, [runsDir]);
    if (doctor && doctor.fails.length > 0) {
      solverItem.iconPath = new vscode.ThemeIcon("warning", new vscode.ThemeColor("list.warningForeground"));
      solverItem.tooltip = `${doctor.fails.join("\n")}\nClick to change the solver version or runtime.`;
    } else {
      solverItem.tooltip = "Click to change the solver version or runtime.";
    }

    const casesItem = actionItem("Cases", "run-all", "csauto.generateCasesFor", undefined, [runsDir]);
    const pending = Math.max((rows ?? 0) - countGeneratedCases(runsDir), 0);
    if (!generated) {
      casesItem.description = "not generated yet: click to generate";
    } else if (pending > 0) {
      casesItem.description = `${countGeneratedCases(runsDir)} generated · ${pending} new row${pending === 1 ? "" : "s"}: click to generate`;
      casesItem.iconPath = new vscode.ThemeIcon("run-all", new vscode.ThemeColor("charts.yellow"));
    } else {
      casesItem.description = `${countGeneratedCases(runsDir)} generated`;
    }
    casesItem.tooltip = "Generate one case per DOE row in RUNS/ (csauto prepare). Cases already generated are kept.";

    item.children = [doeItem, templateItem, solverItem, casesItem];
    if (generated) {
      item.children.push(actionItem("Open Dashboard", "dashboard", "csauto.openCampaignDashboardFor", undefined, [runsDir]));
    }
    const readme = path.join(root, "README.md");
    if (fs.existsSync(readme)) {
      item.children.push(actionItem("About this campaign", "book", "markdown.showPreview", undefined, [vscode.Uri.file(readme)]));
    }
    return item;
  }
}
