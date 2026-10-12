import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { CampaignsViewProvider } from "./CampaignsView";
import { SetupViewProvider } from "./SetupView";
import { Item } from "./treeItems";
import { readCampaignConfig, campaignSolver, writeCampaignConfig } from "./campaignConfig";
import { listSolvers } from "./solvers";
import { pickSolverSetup } from "./solverPicker";
import { DashboardPanel } from "./DashboardPanel";
import { RunWatcher } from "./RunWatcher";
import { RuntimeManager } from "./RuntimeManager";
import { ServerManager, ServerState } from "./ServerManager";
import { disableCliAlias, installCli } from "./InstallCli";
import { suggestAsterForMeshes } from "./asterSuggestion";
import { runDoctor } from "./doctor";
import { generateCases } from "./generateCases";
import { NewCampaignPanel } from "./NewCampaignPanel";
import { registerSetupGuide } from "./setupGuide";
import { findCampaignRunsDirs, isGenerated, pickCampaign } from "./selectRunsDir";
import { EVENT_EXT_ACTIVATED, sendTelemetry } from "./telemetry";

export function activate(context: vscode.ExtensionContext): void {
  const output = vscode.window.createOutputChannel("csauto");
  DashboardPanel.output = output;
  DashboardPanel.extensionUri = context.extensionUri;
  DashboardPanel.storageUri = context.globalStorageUri;
  const runtime = new RuntimeManager(context, output);
  const server = new ServerManager(runtime, output, context.workspaceState);
  context.subscriptions.push(new RunWatcher(server, output));
  void suggestAsterForMeshes(context);

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
      statusBar.tooltip = `csauto server running on port ${running[0].port}: click to open the dashboard`;
    } else {
      statusBar.text = `$(pulse) csauto ×${running.length}`;
      statusBar.tooltip = `${running.length} csauto servers running: click to open a dashboard`;
    }
    statusBar.show();
  };
  updateStatusBar();
  context.subscriptions.push(server.onDidChangeState(updateStatusBar));
  const campaignsView = new CampaignsViewProvider(server);
  const setupView = new SetupViewProvider(runtime);
  const setupTree = vscode.window.createTreeView("csauto.setup", { treeDataProvider: setupView });
  const updateSetupBadge = () => {
    setupTree.badge = setupView.attention > 0 ? { value: setupView.attention, tooltip: "Setup needs attention" } : undefined;
  };
  context.subscriptions.push(setupTree, setupView.onDidChangeTreeData(() => setTimeout(updateSetupBadge, 0)));
  const refreshViews = () => {
    campaignsView.refresh();
    setupView.refresh();
  };
  registerSetupGuide(context, runtime, output, refreshViews);
  // Commands run from a campaign's row, its context menu, or with a runs directory.
  const runsDirOf = (arg: string | Item): string => (typeof arg === "string" ? arg : (arg.runsDir ?? ""));
  const registryWatcher = vscode.workspace.createFileSystemWatcher("**/{registry.json,csauto.toml,doe.csv}");
  context.subscriptions.push(
    vscode.window.registerTreeDataProvider("csauto.campaigns", campaignsView),
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration("csauto")) {
        refreshViews();
      }
    }),
    registryWatcher,
    registryWatcher.onDidCreate(() => campaignsView.refresh()),
    registryWatcher.onDidDelete(() => campaignsView.refresh()),
    registryWatcher.onDidChange(() => campaignsView.refresh()),
  );

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
          ? `csauto environment check: OK with ${warns.length} warning(s): see logs.`
          : "csauto environment check: all good.",
      );
    }
  };

  const openDashboardFor = async (runsDir: string): Promise<void> => {
    const state = await startServer(runsDir);
    if (state) {
      await DashboardPanel.createOrShow(state);
    }
  };

  /** Re-run the environment check of a generated campaign, quietly (no runtime setup prompt). */
  const checkEnvironment = async (runsDir: string): Promise<void> => {
    const python = runtime.current();
    if (python && isGenerated(runsDir)) {
      await runDoctor(python, runsDir, server.campaignRoot(runsDir), server.channelFor(runsDir));
    }
  };
  const checkAllEnvironments = async (): Promise<void> => {
    for (const runsDir of await findCampaignRunsDirs()) {
      await checkEnvironment(runsDir);
    }
  };

  /** Cases of a campaign that are still running or queued, which deleting would orphan. */
  const activeCases = (runsDir: string): string[] => {
    try {
      const registry = JSON.parse(fs.readFileSync(path.join(runsDir, "registry.json"), "utf-8")) as Record<
        string,
        { status?: string }
      >;
      return Object.entries(registry)
        .filter(([, record]) => ["RUNNING", "PENDING"].includes(String(record.status ?? "").toUpperCase()))
        .map(([caseId]) => caseId);
    } catch {
      return [];
    }
  };

  /** Move a campaign folder, or only its generated cases (RUNS/), to the trash after confirmation. */
  const deleteCampaign = async (runsDir: string, whole: boolean): Promise<void> => {
    const root = server.campaignRoot(runsDir);
    const name = path.basename(root);
    const busy = activeCases(runsDir);
    if (busy.length > 0) {
      void vscode.window.showWarningMessage(
        `${name} still has ${busy.length} running or queued case(s) (${busy.slice(0, 5).join(", ")}). Kill them from the dashboard first.`,
      );
      return;
    }
    const target = whole ? root : runsDir;
    const confirm = await vscode.window.showWarningMessage(
      whole ? `Delete the campaign ${name}?` : `Delete the generated cases of ${name}?`,
      {
        modal: true,
        detail: whole
          ? `The whole folder ${root} (template case, DOE table, cases and results) is moved to the trash.`
          : "RUNS/ (every case and its results) is moved to the trash. The template case, the DOE table and " +
            "csauto.toml stay, and Generate Cases recreates the cases.",
      },
      "Move to Trash",
    );
    if (!confirm) {
      return;
    }
    await server.stop(runsDir);
    DashboardPanel.close(runsDir);
    const uri = vscode.Uri.file(target);
    try {
      await vscode.workspace.fs.delete(uri, { recursive: true, useTrash: true });
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      const again = await vscode.window.showWarningMessage(
        `${target} could not be moved to the trash (${reason}).`,
        { modal: true },
        "Delete Permanently",
      );
      if (!again) {
        return;
      }
      await vscode.workspace.fs.delete(uri, { recursive: true, useTrash: false });
    }
    campaignsView.refresh();
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

  // Fill in the solver versions and environment checks when the managed runtime already
  // exists (a first-time setup stays tied to an explicit user action).
  const existingPython = runtime.current();
  // Skipped before the managed runtime exists: the ping goes through csauto.
  sendTelemetry(existingPython, EVENT_EXT_ACTIVATED);
  const workspaceRoot = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  if (existingPython && workspaceRoot) {
    void listSolvers(existingPython, workspaceRoot, output).then(() => campaignsView.refresh());
  }
  void checkAllEnvironments();

  context.subscriptions.push(
    vscode.commands.registerCommand("csauto.openDashboard", async () => {
      const runsDir = await pickCampaign("Open the dashboard for which campaign?");
      if (runsDir) {
        await openDashboardFor(runsDir);
      }
    }),
    vscode.commands.registerCommand("csauto.openCampaignDashboardFor", (arg: string | Item) =>
      openDashboardFor(runsDirOf(arg)),
    ),
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
    vscode.commands.registerCommand("csauto.showLogsFor", (arg: string | Item) => {
      server.channelFor(runsDirOf(arg)).show(true);
    }),
    vscode.commands.registerCommand("csauto.reloadDashboard", () => DashboardPanel.reloadAll()),
    vscode.commands.registerCommand("csauto.runDoctor", () => doctorFlow()),
    vscode.commands.registerCommand("csauto.runDoctorFor", (arg: string | Item) => doctorFlow(runsDirOf(arg))),
    vscode.commands.registerCommand("csauto.stopServerFor", (arg: string | Item) => server.stop(runsDirOf(arg))),
    vscode.commands.registerCommand("csauto.restartServerFor", async (arg: string | Item) => {
      const runsDir = runsDirOf(arg);
      await server.stop(runsDir);
      const state = await startServer(runsDir);
      if (state) {
        await DashboardPanel.createOrShow(state);
      }
    }),
    vscode.commands.registerCommand("csauto.installCli", async () => {
      await installCli(runtime, output);
      refreshViews();
    }),
    vscode.commands.registerCommand("csauto.disableCliAlias", async () => {
      await disableCliAlias();
      refreshViews();
    }),
    vscode.commands.registerCommand("csauto.newCampaign", () =>
      NewCampaignPanel.show(context.extensionUri, runtime, output, async ({ root, generated }) => {
        campaignsView.refresh();
        const runsDir = path.join(root, "RUNS");
        if (generated) {
          void checkEnvironment(runsDir);
          await openDashboardFor(runsDir);
        } else if (!fs.existsSync(path.join(root, "TEMPLATE")) || fs.readdirSync(path.join(root, "TEMPLATE")).length === 0) {
          await vscode.commands.executeCommand("revealInExplorer", vscode.Uri.file(path.join(root, "TEMPLATE")));
          void vscode.window.showInformationMessage(
            `Campaign ${path.basename(root)} created. Put your case files in its TEMPLATE folder, then click Cases in the csauto sidebar.`,
          );
        } else {
          void vscode.window.showInformationMessage(
            `Campaign ${path.basename(root)} created. Click Cases in the csauto sidebar to generate its cases.`,
          );
        }
      }),
    ),
    vscode.commands.registerCommand("csauto.generateCasesFor", async (arg: string | Item) => {
      const runsDir = runsDirOf(arg);
      const generated = await generateCases(runtime, output, server.campaignRoot(runsDir));
      campaignsView.refresh();
      if (!generated) {
        return;
      }
      void checkEnvironment(runsDir);
      if (server.get(runsDir)) {
        await DashboardPanel.reloadAll();
        return;
      }
      const choice = await vscode.window.showInformationMessage("Cases generated.", "Open Dashboard");
      if (choice === "Open Dashboard") {
        await openDashboardFor(runsDir);
      }
    }),
    vscode.commands.registerCommand("csauto.changeSolverFor", async (arg: string | Item) => {
      const runsDir = runsDirOf(arg);
      const root = server.campaignRoot(runsDir);
      const python = await runtime.ensurePython();
      if (!python) {
        return;
      }
      const solverName = campaignSolver(runsDir, root);
      const solver = (await listSolvers(python, root, output))?.find((info) => info.name === solverName);
      if (!solver) {
        void vscode.window.showErrorMessage(`csauto does not know the solver ${solverName}.`);
        return;
      }
      const setup = await pickSolverSetup(solver, readCampaignConfig(root), `${path.basename(root)}: ${solverName}`);
      if (!setup) {
        return;
      }
      writeCampaignConfig(root, setup);
      campaignsView.refresh();
      // The server read csauto.toml when it started: restart it so runs use the new setup.
      if (server.get(runsDir)) {
        await server.stop(runsDir);
        const state = await startServer(runsDir);
        if (state) {
          await DashboardPanel.createOrShow(state);
        }
      }
      void checkEnvironment(runsDir);
    }),
    vscode.commands.registerCommand("csauto.editConfigFor", (arg: string | Item) =>
      vscode.window.showTextDocument(vscode.Uri.file(path.join(server.campaignRoot(runsDirOf(arg)), "csauto.toml"))),
    ),
    vscode.commands.registerCommand("csauto.revealCampaignFor", (arg: string | Item) =>
      vscode.commands.executeCommand("revealInExplorer", vscode.Uri.file(server.campaignRoot(runsDirOf(arg)))),
    ),
    vscode.commands.registerCommand("csauto.deleteCasesFor", (arg: string | Item) => deleteCampaign(runsDirOf(arg), false)),
    vscode.commands.registerCommand("csauto.deleteCampaignFor", (arg: string | Item) => deleteCampaign(runsDirOf(arg), true)),
    vscode.commands.registerCommand("csauto.refreshCampaigns", () => {
      refreshViews();
      void checkAllEnvironments();
    }),
  );
}

export function deactivate(): void {}
