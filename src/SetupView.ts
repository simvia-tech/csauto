import * as vscode from "vscode";
import * as path from "path";
import { findShadowingAliasFiles, shimInstalled } from "./InstallCli";
import { RuntimeManager } from "./RuntimeManager";
import { Item, actionItem } from "./treeItems";

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

/** The Setup view: csauto version, Python runtime, CLI, logs and settings. */
export class SetupViewProvider implements vscode.TreeDataProvider<Item> {
  private readonly changeEmitter = new vscode.EventEmitter<void>();
  readonly onDidChangeTreeData = this.changeEmitter.event;
  /** Number of setup items needing attention, shown as the view's badge. */
  attention = 0;

  constructor(private readonly runtime: RuntimeManager) {}

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
    const setup = await this.setupGroup();
    return [...(setup.children ?? []), this.settingsGroup()];
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
      runtimeItem.description = "not set up yet: click to set it up";
      runtimeItem.command = { command: "csauto.setUpRuntime", title: "Set Up csauto" };
    }

    let cliItem: Item;
    if (cliInstalled && shadowed) {
      cliItem = new Item("csauto CLI");
      cliItem.iconPath = new vscode.ThemeIcon("warning", new vscode.ThemeColor("list.warningForeground"));
      cliItem.description = `shadowed by alias (${aliasFiles.map((file) => path.basename(file)).join(", ")})`;
      cliItem.tooltip =
        `An "alias csauto=" line in ${aliasFiles.join(", ")} takes precedence over the installed CLI ` +
        "in interactive shells. Click to comment it out.";
      cliItem.command = { title: "Disable the csauto Shell Alias", command: "csauto.disableCliAlias" };
    } else if (cliInstalled) {
      cliItem = actionItem("csauto CLI", "pass-filled", "csauto.installCli", "installed");
      cliItem.iconPath = new vscode.ThemeIcon("pass-filled", new vscode.ThemeColor("testing.iconPassed"));
      cliItem.tooltip = "Reinstall/update the csauto CLI shim";
    } else {
      cliItem = actionItem("Install csauto CLI", "terminal", "csauto.installCli");
    }

    const logsItem = actionItem("Extension Logs", "output", "csauto.showLogs");
    const guideItem = actionItem("Setup Guide", "checklist", "csauto.openSetupGuide");
    guideItem.tooltip = "Check what csauto needs on this machine: Python, its environment and a solver runtime";

    item.children = [guideItem, versionItem, runtimeItem, cliItem, logsItem];
    this.attention = Number(shadowed);
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
