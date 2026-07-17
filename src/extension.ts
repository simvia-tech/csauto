import * as vscode from "vscode";
import * as fs from "fs";
import { ActionsViewProvider } from "./ActionsView";
import { DashboardPanel } from "./DashboardPanel";
import { RunWatcher } from "./RunWatcher";
import { RuntimeManager } from "./RuntimeManager";
import { ServerManager, ServerState } from "./ServerManager";
import { installCli } from "./InstallCli";
import { suggestAsterForMeshes } from "./asterSuggestion";
import { runDoctor } from "./doctor";
import { selectRunsDir } from "./selectRunsDir";
import { EVENT_EXT_DASHBOARD_OPEN, EVENT_EXT_SERVE, sendTelemetry } from "./telemetry";

export function activate(context: vscode.ExtensionContext): void {
  const output = vscode.window.createOutputChannel("csauto");
  DashboardPanel.output = output;
  DashboardPanel.extensionUri = context.extensionUri;
  const runtime = new RuntimeManager(context, output);
  const server = new ServerManager(runtime, output, context.workspaceState);
  context.subscriptions.push(new RunWatcher(server, output));
  void suggestAsterForMeshes(context);

  // Populate the sidebar's environment checks without any side effects: only
  // when the managed runtime already exists and the runs dir is present (a
  // first-time setup must stay tied to an explicit user action).
  void (async () => {
    const python = runtime.current();
    if (!python) {
      return;
    }
    try {
      const runsDir = server.resolveRunsDir();
      if (!fs.existsSync(runsDir)) {
        return;
      }
      const cwd = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath ?? runsDir;
      await runDoctor(python, runsDir, cwd, output);
    } catch {
      // No workspace folder — nothing to check against.
    }
  })();
  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 50);
  statusBar.command = "csauto.openDashboard";
  context.subscriptions.push(output, server, statusBar);

  const updateStatusBar = (state: { port: number } | undefined) => {
    if (state) {
      statusBar.text = `$(pulse) csauto :${state.port}`;
      statusBar.tooltip = `csauto server running on port ${state.port} — click to open the dashboard`;
    } else {
      statusBar.text = "$(play) csauto";
      statusBar.tooltip = "Start the csauto server and open the dashboard";
    }
    statusBar.show();
  };
  updateStatusBar(server.current);
  context.subscriptions.push(server.onDidChangeState(updateStatusBar));
  context.subscriptions.push(
    server.onDidChangeState((state) => {
      if (state) {
        sendTelemetry(runtime.current(), EVENT_EXT_SERVE);
      }
    }),
  );
  const actionsView = new ActionsViewProvider(server, runtime);
  context.subscriptions.push(
    vscode.window.registerTreeDataProvider("csauto.actions", actionsView),
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration("csauto")) {
        actionsView.refresh();
      }
    }),
  );

  let dashboardPinged = false;

  const startServer = async (): Promise<ServerState | undefined> => {
    try {
      return await server.start();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      const choice = await vscode.window.showErrorMessage(`csauto: ${message}`, "Show Logs");
      if (choice === "Show Logs") {
        output.show(true);
      }
      return undefined;
    }
  };

  context.subscriptions.push(
    vscode.commands.registerCommand("csauto.openDashboard", async () => {
      const state = await startServer();
      if (state) {
        await DashboardPanel.createOrShow(state.port, state.token);
        if (!dashboardPinged) {
          dashboardPinged = true;
          sendTelemetry(runtime.current(), EVENT_EXT_DASHBOARD_OPEN);
        }
      }
    }),
    vscode.commands.registerCommand("csauto.startServer", async () => {
      const state = await startServer();
      if (state) {
        vscode.window.setStatusBarMessage(`csauto server running on port ${state.port}`, 5_000);
      }
    }),
    vscode.commands.registerCommand("csauto.stopServer", async () => {
      await server.stop();
    }),
    vscode.commands.registerCommand("csauto.restartServer", async () => {
      await server.stop();
      await startServer();
    }),
    vscode.commands.registerCommand("csauto.showLogs", () => {
      output.show(true);
    }),
    vscode.commands.registerCommand("csauto.reloadDashboard", () => DashboardPanel.reload()),
    vscode.commands.registerCommand("csauto.runDoctor", async () => {
      const python = await runtime.ensurePython();
      if (!python) {
        return;
      }
      const runsDir = server.resolveRunsDir();
      const cwd = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath ?? runsDir;
      const { fails, warns } = await runDoctor(python, runsDir, cwd, output);
      if (fails.length > 0) {
        const choice = await vscode.window.showWarningMessage(
          `csauto doctor: ${fails.length} problem(s), ${warns.length} warning(s). ${fails[0]}`,
          "Show Logs",
        );
        if (choice === "Show Logs") {
          output.show(true);
        }
      } else {
        vscode.window.showInformationMessage(
          warns.length > 0 ? `csauto doctor: OK with ${warns.length} warning(s) — see logs.` : "csauto doctor: all checks passed.",
        );
      }
    }),
    vscode.commands.registerCommand("csauto.installCli", async () => {
      await installCli(runtime, output);
      actionsView.refresh();
    }),
    vscode.commands.registerCommand("csauto.selectRunsDir", async () => {
      const changed = await selectRunsDir();
      if (!changed) {
        return;
      }
      if (server.current) {
        await server.stop();
        const state = await startServer();
        if (state && DashboardPanel.current) {
          await DashboardPanel.createOrShow(state.port, state.token);
        }
      }
    }),
  );
}

export function deactivate(): void {}
