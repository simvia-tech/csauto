import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { findShadowingAliasFiles, shimInstalled } from "./InstallCli";
import { RuntimeManager } from "./RuntimeManager";
import { ServerManager } from "./ServerManager";
import { findCampaignRunsDirs } from "./selectRunsDir";
import { lastDoctorResult, onDidRunDoctor } from "./doctor";

class Item extends vscode.TreeItem {
  children?: Item[];

  constructor(label: string, collapsible: vscode.TreeItemCollapsibleState = vscode.TreeItemCollapsibleState.None) {
    super(label, collapsible);
  }
}

function actionItem(label: string, icon: string, command: string, description?: string, args?: unknown[]): Item {
  const item = new Item(label);
  item.iconPath = new vscode.ThemeIcon(icon);
  item.command = { command, title: label, arguments: args };
  item.description = description;
  return item;
}

function settingScope(
  inspection: { globalValue?: unknown; workspaceValue?: unknown; workspaceFolderValue?: unknown } | undefined,
): string {
  if (inspection?.workspaceFolderValue !== undefined || inspection?.workspaceValue !== undefined) {
    return "scope: workspace";
  }
  if (inspection?.globalValue !== undefined) {
    return "scope: user";
  }
  return "scope: default";
}

/** Solver name from the campaign's csauto.toml; code_saturne is the engine default. */
function campaignSolver(campaignRoot: string): string {
  try {
    const config = fs.readFileSync(path.join(campaignRoot, "csauto.toml"), "utf-8");
    return /^\s*solver\s*=\s*"([^"]+)"/m.exec(config)?.[1] ?? "code_saturne";
  } catch {
    return "code_saturne";
  }
}

/**
 * Sidebar tree: one section per campaign (its dashboard, doctor, and server
 * lifecycle), followed by the global Prepare action and the Setup/Settings
 * sections.
 */
export class ActionsViewProvider implements vscode.TreeDataProvider<Item> {
  private readonly changeEmitter = new vscode.EventEmitter<void>();
  readonly onDidChangeTreeData = this.changeEmitter.event;

  constructor(
    private readonly server: ServerManager,
    private readonly runtime: RuntimeManager,
  ) {
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
    return [...(await this.campaignGroups()), await this.setupGroup(), this.settingsGroup()];
  }

  private async campaignGroups(): Promise<Item[]> {
    const campaigns = await findCampaignRunsDirs();

    const groups: Item[] = [actionItem("New Campaign…", "new-folder", "csauto.prepare")];
    groups.push(...campaigns.map((runsDir) => this.campaignGroup(runsDir)));
    if (campaigns.length === 0) {
      const empty = new Item("No campaigns found");
      empty.iconPath = new vscode.ThemeIcon("info");
      empty.tooltip = "Create a campaign from a DOE CSV and a template case.";
      groups.push(empty);
    }
    return groups;
  }

  private campaignGroup(runsDir: string): Item {
    const root = this.server.campaignRoot(runsDir);
    const state = this.server.get(runsDir);
    const solver = campaignSolver(root);

    const item = new Item(path.basename(root), vscode.TreeItemCollapsibleState.Expanded);
    item.iconPath = state
      ? new vscode.ThemeIcon("vm-running", new vscode.ThemeColor("testing.iconPassed"))
      : new vscode.ThemeIcon("folder");
    const parts = [solver, state ? `port ${state.port}` : undefined];
    item.description = parts.filter(Boolean).join(" · ");
    const workspaceRoot = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
    item.tooltip = workspaceRoot ? path.relative(workspaceRoot, runsDir) || runsDir : runsDir;

    item.children = [
      actionItem("Open Dashboard", "dashboard", "csauto.openCampaignDashboardFor", undefined, [runsDir]),
      actionItem("Run Doctor", "checklist", "csauto.runDoctorFor", undefined, [runsDir]),
      actionItem("Server Logs", "output", "csauto.showLogsFor", undefined, [runsDir]),
    ];
    if (state) {
      item.children.push(
        actionItem("Stop Server", "debug-stop", "csauto.stopServerFor", undefined, [runsDir]),
        actionItem("Restart Server", "debug-restart", "csauto.restartServerFor", undefined, [runsDir]),
      );
    }
    return item;
  }

  private async setupGroup(): Promise<Item> {
    const runtimePython = this.runtime.current();
    const cliInstalled = shimInstalled();
    const aliasFiles = cliInstalled ? await findShadowingAliasFiles() : [];
    const shadowed = aliasFiles.length > 0;
    const allReady = runtimePython !== undefined && cliInstalled && !shadowed;
    const item = new Item(
      "Setup",
      allReady ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.Expanded,
    );
    item.iconPath = new vscode.ThemeIcon("tools");

    const { version, kind } = this.runtime.info();
    const versionItem = new Item("Version");
    versionItem.iconPath = new vscode.ThemeIcon("tag");
    versionItem.description = kind === "editable" ? `${version} (dev)` : version;
    versionItem.tooltip =
      kind === "editable"
        ? "Editable install of the source checkout"
        : kind === "wheel"
          ? "Installed from the bundled wheel"
          : undefined;

    const runtimeItem = new Item("Python runtime");
    runtimeItem.command = { command: "csauto.showLogs", title: "Show Server Logs" };
    if (runtimePython) {
      runtimeItem.iconPath = new vscode.ThemeIcon("pass-filled", new vscode.ThemeColor("testing.iconPassed"));
      runtimeItem.description = "ready";
      runtimeItem.tooltip = runtimePython;
    } else {
      runtimeItem.iconPath = new vscode.ThemeIcon("info");
      runtimeItem.description = "created at next server start";
    }

    const solverItem = new Item("code_saturne");
    const doctor = lastDoctorResult();
    const runtimeLine = doctor?.lines.find((line) => line.includes("available runtimes:"));
    const noRuntimeLine = doctor?.lines.find((line) => line.includes("no runtime found"));
    if (runtimeLine) {
      solverItem.iconPath = new vscode.ThemeIcon("pass-filled", new vscode.ThemeColor("testing.iconPassed"));
      solverItem.description = runtimeLine.split("available runtimes:")[1].trim();
      solverItem.tooltip = "Solver runtimes detected. Click to re-run the checks.";
    } else if (noRuntimeLine) {
      solverItem.iconPath = new vscode.ThemeIcon("warning", new vscode.ThemeColor("list.warningForeground"));
      solverItem.description = "no runtime found";
      solverItem.tooltip =
        "No Code_Saturne runtime detected: install Docker (with the solver image), a native code_saturne " +
        "binary, or Apptainer/Singularity. Click to re-run the checks.";
    } else {
      solverItem.iconPath = new vscode.ThemeIcon("question");
      solverItem.description = "click to check";
      solverItem.tooltip = "Run doctor to check for a Code_Saturne runtime (docker, native binary, or Singularity).";
    }
    solverItem.command = { command: "csauto.runDoctor", title: "Run Doctor" };

    let cliItem: Item;
    if (cliInstalled && shadowed) {
      cliItem = new Item("csauto CLI");
      cliItem.iconPath = new vscode.ThemeIcon("warning", new vscode.ThemeColor("list.warningForeground"));
      cliItem.description = `shadowed by alias (${aliasFiles.map((file) => path.basename(file)).join(", ")})`;
      cliItem.tooltip =
        `An "alias csauto=" line in ${aliasFiles.join(", ")} takes precedence over the installed CLI ` +
        "in interactive shells. Click to open the file and remove the alias.";
      cliItem.command = {
        title: "Open shell configuration",
        command: "vscode.open",
        arguments: [vscode.Uri.file(aliasFiles[0])],
      };
    } else if (cliInstalled) {
      cliItem = actionItem("csauto CLI", "pass-filled", "csauto.installCli", "installed");
      cliItem.iconPath = new vscode.ThemeIcon("pass-filled", new vscode.ThemeColor("testing.iconPassed"));
      cliItem.tooltip = "Reinstall/update the csauto CLI shim";
    } else {
      cliItem = actionItem("Install csauto CLI", "terminal", "csauto.installCli");
    }

    const logsItem = actionItem("Extension Logs", "output", "csauto.showLogs");

    item.children = [versionItem, runtimeItem, solverItem, cliItem, logsItem];
    return item;
  }

  private settingsGroup(): Item {
    const item = new Item("Settings", vscode.TreeItemCollapsibleState.Collapsed);
    item.iconPath = new vscode.ThemeIcon("settings-gear");
    item.children = [
      this.settingItem("Python interpreter", "csauto.pythonPath", "terminal", (value) =>
        value ? String(value) : "managed runtime",
      ),
      this.settingItem("Port", "csauto.port", "plug", (value) => (value ? String(value) : "auto")),
      this.settingItem("Extra serve args", "csauto.serveArgs", "list-flat", (value) =>
        Array.isArray(value) && value.length > 0 ? value.join(" ") : "none",
      ),
    ];
    return item;
  }

  private settingItem(label: string, key: string, icon: string, format?: (value: unknown) => string): Item {
    const item = new Item(label);
    item.iconPath = new vscode.ThemeIcon(icon);
    const config = vscode.workspace.getConfiguration();
    const value = config.get<unknown>(key);
    item.description = format ? format(value) : value === undefined || value === "" ? "not set" : String(value);
    item.tooltip = `${key} = ${JSON.stringify(value)}\n${settingScope(config.inspect<unknown>(key))}`;
    item.command = {
      title: "Open setting",
      command: "workbench.action.openSettings",
      arguments: [`@id:${key}`],
    };
    return item;
  }
}
