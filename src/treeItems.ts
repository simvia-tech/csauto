import * as vscode from "vscode";

export class Item extends vscode.TreeItem {
  children?: Item[];
  /** The campaign's runs directory, for the commands of its context menu. */
  runsDir?: string;

  constructor(label: string, collapsible: vscode.TreeItemCollapsibleState = vscode.TreeItemCollapsibleState.None) {
    super(label, collapsible);
  }
}

export function actionItem(label: string, icon: string, command: string, description?: string, args?: unknown[]): Item {
  const item = new Item(label);
  item.iconPath = new vscode.ThemeIcon(icon);
  item.command = { command, title: label, arguments: args };
  item.description = description;
  return item;
}
