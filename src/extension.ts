import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { ActionsViewProvider } from "./ActionsView";
import { DashboardPanel } from "./DashboardPanel";
import { RunWatcher } from "./RunWatcher";
import { RuntimeManager } from "./RuntimeManager";
import { ServerManager, ServerState } from "./ServerManager";
import { installCli } from "./InstallCli";
import { suggestAsterForMeshes } from "./asterSuggestion";
import { runDoctor } from "./doctor";
import { prepareCampaign } from "./prepareCampaign";
import { findCampaignRunsDirs, pickCampaign } from "./selectRunsDir";
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
    for (const runsDir of await findCampaignRunsDirs()) {
      if (fs.existsSync(runsDir)) {
        await runDoctor(python, runsDir, server.campaignRoot(runsDir), server.channelFor(runsDir));
      }
    }
  })();
  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 50);
  statusBar.command = "csauto.openDashboard";
  context.subscriptions.push(output, server, statusBar);

  const updateStatusBar = () => {
    const running = server.list();
    if (running.length === 0) {
      statusBar.text = "$(play) csauto";
      statusBar.tooltip = "Start the csauto server and open the dashboard";
    } else if (running.length === 1) {
      statusBar.text = `$(pulse) csauto :${running[0].port}`;
      statusBar.tooltip = `csauto server running on port ${running[0].port} — click to open the dashboard`;
    } else {
      statusBar.text = `$(pulse) csauto ×${running.length}`;
      statusBar.tooltip = `${running.length} csauto servers running — click to open a dashboard`;
    }
    statusBar.show();
  };
  updateStatusBar();
  context.subscriptions.push(server.onDidChangeState(updateStatusBar));
  context.subscriptions.push(
    server.onDidStart(() => {
      sendTelemetry(runtime.current(), EVENT_EXT_SERVE);
    }),
  );
  const actionsView = new ActionsViewProvider(server, runtime);
  const registryWatcher = vscode.workspace.createFileSystemWatcher("**/registry.json");
  context.subscriptions.push(
    vscode.window.registerTreeDataProvider("csauto.actions", actionsView),
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration("csauto")) {
        actionsView.refresh();
      }
    }),
    registryWatcher,
    registryWatcher.onDidCreate(() => actionsView.refresh()),
    registryWatcher.onDidDelete(() => actionsView.refresh()),
  );

  let dashboardPinged = false;

  const startServer = async (runsDir: string): Promise<ServerState | undefined> => {
    try {
      return await server.start(runsDir);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      const choice = await vscode.window.showErrorMessage(`csauto: ${message}`, "Show Logs");
      if (choice === "Show Logs") {
        output.show(true);
      }
      return undefined;
    }
  };

  const doctorFlow = async (runsDirArg?: string): Promise<void> => {
    const python = await runtime.ensurePython();
    if (!python) {
      return;
    }
    const runsDir = runsDirArg ?? (await pickCampaign("Check the environment of which campaign?"));
    if (!runsDir) {
      return;
    }
    const channel = server.channelFor(runsDir);
    const { fails, warns } = await runDoctor(python, runsDir, server.campaignRoot(runsDir), channel);
    if (fails.length > 0) {
      const choice = await vscode.window.showWarningMessage(
        `csauto environment check: ${fails.length} problem(s), ${warns.length} warning(s). ${fails[0]}`,
        "Show Logs",
      );
      if (choice === "Show Logs") {
        channel.show(true);
      }
    } else {
      vscode.window.showInformationMessage(
        warns.length > 0
          ? `csauto environment check: OK with ${warns.length} warning(s) — see logs.`
          : "csauto environment check: all good.",
      );
    }
  };

  const openDashboardFor = async (runsDir: string): Promise<void> => {
    const state = await startServer(runsDir);
    if (state) {
      await DashboardPanel.createOrShow(state);
      if (!dashboardPinged) {
        dashboardPinged = true;
        sendTelemetry(runtime.current(), EVENT_EXT_DASHBOARD_OPEN);
      }
    }
  };

  /** Quick-pick one of the running servers (undefined if none; auto when single). */
  const pickRunningServer = async (placeHolder: string): Promise<ServerState | undefined> => {
    const running = server.list();
    if (running.length === 0) {
      return undefined;
    }
    if (running.length === 1) {
      return running[0];
    }
    const picked = await vscode.window.showQuickPick(
      running.map((state) => ({
        label: path.basename(path.dirname(state.runsDir)),
        description: `port ${state.port}`,
        state,
      })),
      { placeHolder },
    );
    return picked?.state;
  };

  context.subscriptions.push(
    vscode.commands.registerCommand("csauto.openDashboard", async () => {
      const runsDir = await pickCampaign("Open the dashboard for which campaign?");
      if (runsDir) {
        await openDashboardFor(runsDir);
      }
    }),
    vscode.commands.registerCommand("csauto.openCampaignDashboardFor", (runsDir: string) => openDashboardFor(runsDir)),
    vscode.commands.registerCommand("csauto.startServer", async () => {
      const runsDir = await pickCampaign("Start the server for which campaign?");
      if (!runsDir) {
        return;
      }
      const state = await startServer(runsDir);
      if (state) {
        vscode.window.setStatusBarMessage(`csauto server running on port ${state.port}`, 5_000);
      }
    }),
    vscode.commands.registerCommand("csauto.stopServer", async () => {
      const target = await pickRunningServer("Stop which server?");
      if (target) {
        await server.stop(target.runsDir);
      }
    }),
    vscode.commands.registerCommand("csauto.stopAllServers", async () => {
      await server.stop();
    }),
    vscode.commands.registerCommand("csauto.restartServer", async () => {
      const target = await pickRunningServer("Restart which server?");
      if (!target) {
        return;
      }
      await server.stop(target.runsDir);
      const state = await startServer(target.runsDir);
      if (state) {
        await DashboardPanel.createOrShow(state);
      }
    }),
    vscode.commands.registerCommand("csauto.showLogs", () => {
      output.show(true);
    }),
    vscode.commands.registerCommand("csauto.showLogsFor", (runsDir: string) => {
      server.channelFor(runsDir).show(true);
    }),
    vscode.commands.registerCommand("csauto.reloadDashboard", () => DashboardPanel.reloadAll()),
    vscode.commands.registerCommand("csauto.runDoctor", () => doctorFlow()),
    vscode.commands.registerCommand("csauto.runDoctorFor", (runsDir: string) => doctorFlow(runsDir)),
    vscode.commands.registerCommand("csauto.stopServerFor", (runsDir: string) => server.stop(runsDir)),
    vscode.commands.registerCommand("csauto.restartServerFor", async (runsDir: string) => {
      await server.stop(runsDir);
      const state = await startServer(runsDir);
      if (state) {
        await DashboardPanel.createOrShow(state);
      }
    }),
    vscode.commands.registerCommand("csauto.installCli", async () => {
      await installCli(runtime, output);
      actionsView.refresh();
    }),
    vscode.commands.registerCommand("csauto.prepare", async () => {
      const createdRunsDir = await prepareCampaign(runtime, output);
      if (!createdRunsDir) {
        return;
      }
      const choice = await vscode.window.showInformationMessage("Campaign prepared.", "Open Dashboard");
      if (choice === "Open Dashboard") {
        await openDashboardFor(createdRunsDir);
      }
    }),
  );
}

export function deactivate(): void {}
