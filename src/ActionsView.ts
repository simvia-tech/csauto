import * as vscode from "vscode";
import * as path from "path";
import { findShadowingAliasFiles, shimInstalled } from "./InstallCli";
import { RuntimeManager } from "./RuntimeManager";
import { ServerManager } from "./ServerManager";
import { lastDoctorResult, onDidRunDoctor } from "./doctor";

class Item extends vscode.TreeItem {
  children?: Item[];

  constructor(label: string, collapsible: vscode.TreeItemCollapsibleState = vscode.TreeItemCollapsibleState.None) {
    super(label, collapsible);
  }
}

function actionItem(label: string, icon: string, command: string, description?: string): Item {
  const item = new Item(label);
  item.iconPath = new vscode.ThemeIcon(icon);
  item.command = { command, title: label };
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
    return [this.campaignGroup(), this.serverGroup(), await this.setupGroup(), this.settingsGroup()];
  }

  private pinnedRunsDir(): string | undefined {
    try {
      const runsDir = this.server.resolveRunsDir();
      const root = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
      if (root) {
        const rel = path.relative(root, runsDir);
        return rel === "" ? "." : rel.startsWith("..") ? runsDir : rel;
      }
      return runsDir;
    } catch {
      return undefined;
    }
  }

  private campaignGroup(): Item {
    const item = new Item("Campaign", vscode.TreeItemCollapsibleState.Expanded);
    item.iconPath = new vscode.ThemeIcon("beaker");
    item.children = [
      actionItem("Prepare Campaign…", "new-folder", "csauto.prepare"),
      actionItem("Runs Directory", "pinned", "csauto.selectRunsDir", this.pinnedRunsDir() ?? "not set"),
      actionItem("Open Dashboard", "dashboard", "csauto.openDashboard"),
      actionItem("Run Doctor", "checklist", "csauto.runDoctor"),
    ];
    return item;
  }

  private serverGroup(): Item {
    const state = this.server.current;
    const item = new Item("Server", vscode.TreeItemCollapsibleState.Expanded);
    item.iconPath = new vscode.ThemeIcon("server-process");
    const status = new Item(state ? "Running" : "Stopped");
    status.description = state ? `port ${state.port}` : undefined;
    status.iconPath = state
      ? new vscode.ThemeIcon("pass-filled", new vscode.ThemeColor("testing.iconPassed"))
      : new vscode.ThemeIcon("circle-slash");
    status.command = { command: "csauto.showLogs", title: "Show Server Logs" };
    item.children = [status];
    if (state) {
      item.children.push(
        actionItem("Stop Server", "debug-stop", "csauto.stopServer"),
        actionItem("Restart Server", "debug-restart", "csauto.restartServer"),
      );
    } else {
      item.children.push(actionItem("Start Server", "play", "csauto.startServer"));
    }
    item.children.push(actionItem("Show Server Logs", "output", "csauto.showLogs"));
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

    item.children = [versionItem, runtimeItem, solverItem, cliItem];
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
