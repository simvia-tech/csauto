import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { RuntimeManager } from "./RuntimeManager";
import { writeCampaignConfig } from "./campaignConfig";
import { errorLine, runCsauto } from "./csautoProcess";
import { generateCases } from "./generateCases";
import { CreateRequest, ToExtension, ToWebview } from "./newCampaignProtocol";
import { listSolvers } from "./solvers";
import { pullImage, solverImages } from "./solverPicker";
import { EVENT_EXT_CAMPAIGN_CREATED, sendTelemetry } from "./telemetry";

/** A value for a CSV cell, quoted when it holds a separator, a quote or a line break. */
function csvCell(value: string): string {
  return /[",\r\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

/** Where a campaign was created, and whether its cases were generated. */
export interface CreatedCampaign {
  root: string;
  generated: boolean;
}

/**
 * The New Campaign page (webviews/new-campaign): it collects the choices,
 * this side shows the file dialogs and runs csauto. One page at a time.
 */
export class NewCampaignPanel {
  private static current: NewCampaignPanel | undefined;

  private constructor(
    private readonly panel: vscode.WebviewPanel,
    private readonly extensionUri: vscode.Uri,
    private readonly runtime: RuntimeManager,
    private readonly output: vscode.OutputChannel,
    private readonly workspaceRoot: string,
    private readonly onCreated: (created: CreatedCampaign) => void,
  ) {
    panel.onDidDispose(() => {
      NewCampaignPanel.current = undefined;
    });
    panel.webview.onDidReceiveMessage((message: ToExtension) => void this.handle(message));
    panel.webview.html = this.html();
  }

  static show(
    extensionUri: vscode.Uri,
    runtime: RuntimeManager,
    output: vscode.OutputChannel,
    onCreated: (created: CreatedCampaign) => void,
  ): void {
    if (NewCampaignPanel.current) {
      NewCampaignPanel.current.panel.reveal();
      return;
    }
    const folder = vscode.workspace.workspaceFolders?.[0];
    if (!folder) {
      void vscode.window.showErrorMessage("csauto: open a folder first, campaigns are created inside it.");
      return;
    }
    const dist = vscode.Uri.joinPath(extensionUri, "webviews", "new-campaign", "dist");
    const panel = vscode.window.createWebviewPanel("csautoNewCampaign", "New campaign", vscode.ViewColumn.Active, {
      enableScripts: true,
      retainContextWhenHidden: true,
      localResourceRoots: [dist],
    });
    panel.iconPath = {
      light: vscode.Uri.joinPath(extensionUri, "assets", "csauto-mark-light.svg"),
      dark: vscode.Uri.joinPath(extensionUri, "assets", "csauto-mark-dark.svg"),
    };
    NewCampaignPanel.current = new NewCampaignPanel(panel, extensionUri, runtime, output, folder.uri.fsPath, onCreated);
  }

  private html(): string {
    const dist = vscode.Uri.joinPath(this.extensionUri, "webviews", "new-campaign", "dist");
    const indexPath = path.join(dist.fsPath, "index.html");
    if (!fs.existsSync(indexPath)) {
      return "<p>The New Campaign page is not built: run <code>npm run build:webview</code>.</p>";
    }
    return fs
      .readFileSync(indexPath, "utf-8")
      .replace(/(<link[^>]+?href="|<script[^>]+?src=")\.\/([^"]+)"/g, (_match, prefix: string, file: string) => {
        return `${prefix}${this.panel.webview.asWebviewUri(vscode.Uri.joinPath(dist, file)).toString()}"`;
      })
      .replace(/\$\{webview\.cspSource\}/g, this.panel.webview.cspSource);
  }

  private post(message: ToWebview): void {
    void this.panel.webview.postMessage(message);
  }

  private async python(): Promise<string | undefined> {
    return this.runtime.ensurePython();
  }

  private async handle(message: ToExtension): Promise<void> {
    switch (message.type) {
      case "ready": {
        const python = await this.python();
        if (!python) {
          this.panel.dispose();
          return;
        }
        const solvers = await listSolvers(python, this.workspaceRoot, this.output);
        if (!solvers) {
          void vscode.window.showErrorMessage("csauto could not list its solvers: see the csauto logs.");
          return;
        }
        const asset = (name: string) => svgDataUri(path.join(this.extensionUri.fsPath, "assets", name)) ?? "";
        this.post({
          type: "init",
          solvers: solvers.map((solver) => ({ ...solver, icon: svgDataUri(solver.icon_file) })),
          workspace: path.basename(this.workspaceRoot),
          takenNames: fs.readdirSync(this.workspaceRoot),
          logo: { light: asset("csauto-mark-light.svg"), dark: asset("csauto-mark-dark.svg") },
        });
        return;
      }
      case "pickFiles": {
        const picked = await vscode.window.showOpenDialog({
          title: message.label,
          canSelectMany: message.multiple,
          defaultUri: vscode.Uri.file(this.workspaceRoot),
          filters: { [message.label]: message.extensions.map((ext) => ext.replace(/^\./, "")), "All files": ["*"] },
        });
        // Always answered, even when cancelled: the page waits for it.
        this.post({ type: "picked", key: message.key, paths: picked?.map((uri) => uri.fsPath) ?? [] });
        return;
      }
      case "pickFolder": {
        const picked = await vscode.window.showOpenDialog({
          title: `The folder of your ${message.solver} case`,
          canSelectFiles: false,
          canSelectFolders: true,
          defaultUri: vscode.Uri.file(this.workspaceRoot),
        });
        this.post({ type: "picked", key: "__folder__", paths: picked ? [picked[0].fsPath] : [] });
        return;
      }
      case "inspect": {
        const python = await this.python();
        if (!python) {
          return;
        }
        const args =
          message.start === "folder"
            ? ["_case-info", message.folder ?? "", "--solver", message.solver]
            : ["_inspect-inputs", "--solver", message.solver, ...inputArgs(message.files)];
        const result = await runCsauto(python, args, this.workspaceRoot, this.output);
        this.post(
          result.ok
            ? { type: "inspected", inspection: JSON.parse(result.stdout) }
            : { type: "inspectFailed", message: errorLine(result) },
        );
        return;
      }
      case "checkFiles": {
        const python = await this.python();
        if (!python) {
          return;
        }
        const result = await runCsauto(
          python,
          ["_inspect-inputs", "--solver", message.solver, "--warnings-only", ...inputArgs(message.files)],
          this.workspaceRoot,
          this.output,
        );
        if (result.ok) {
          this.post({ type: "fileWarnings", warnings: JSON.parse(result.stdout).warnings });
        }
        return;
      }
      case "listImages": {
        const python = await this.python();
        const solver = python
          ? (await listSolvers(python, this.workspaceRoot, this.output))?.find((info) => info.name === message.solver)
          : undefined;
        if (solver) {
          const { images, hubReachable } = await solverImages(solver);
          this.post({ type: "images", solver: solver.name, images, hubReachable });
        }
        return;
      }
      case "pickPath": {
        const picked = await vscode.window.showOpenDialog({
          title: message.purpose === "native" ? `The ${message.solver} executable` : `The ${message.solver} .sif image`,
          canSelectMany: false,
          filters: message.purpose === "singularity" ? { "Singularity images": ["sif"] } : undefined,
        });
        this.post({ type: "pathPicked", purpose: message.purpose, path: picked?.[0]?.fsPath ?? "" });
        return;
      }
      case "pickCsv": {
        const picked = await vscode.window.showOpenDialog({
          title: "The CSV file of your parameter table",
          canSelectMany: false,
          defaultUri: vscode.Uri.file(this.workspaceRoot),
          filters: { "CSV files": ["csv", "tsv", "txt"], "All files": ["*"] },
        });
        const file = picked?.[0];
        if (!file) {
          this.post({ type: "csvPicked", name: "", text: "" });
          return;
        }
        try {
          this.post({ type: "csvPicked", name: path.basename(file.fsPath), text: fs.readFileSync(file.fsPath, "utf-8") });
        } catch (error) {
          const reason = error instanceof Error ? error.message : String(error);
          this.post({ type: "csvPicked", name: path.basename(file.fsPath), text: "", error: `Could not read ${file.fsPath}: ${reason}` });
        }
        return;
      }
      case "closeDialog":
        // In a remote window the file dialog is a quick input; closing it resolves the pending pick.
        await vscode.commands.executeCommand("workbench.action.closeQuickOpen");
        return;
      case "create":
        await this.create(message.request);
        return;
      case "cancel":
        this.panel.dispose();
        return;
    }
  }

  private async create(request: CreateRequest): Promise<void> {
    const python = await this.python();
    const fail = (text: string) => {
      sendTelemetry(python, EVENT_EXT_CAMPAIGN_CREATED, false, `${request.solver}:${request.start}`);
      this.post({ type: "createFailed", message: text });
    };
    if (!python) {
      fail("csauto needs its Python environment to create a campaign.");
      return;
    }
    const target = path.join(this.workspaceRoot, request.name);

    if (request.setup.runtime === "docker" && request.setup.docker_image) {
      const solver = (await listSolvers(python, this.workspaceRoot, this.output))?.find((info) => info.name === request.solver);
      const installed = solver
        ? (await solverImages(solver)).images.some((entry) => entry.installed && entry.image === request.setup.docker_image)
        : false;
      if (!installed) {
        this.post({ type: "progress", message: `Downloading ${request.setup.docker_image}…` });
        const failure = await pullImage(request.setup.docker_image);
        if (failure) {
          fail(`docker could not download ${request.setup.docker_image}: ${failure}`);
          return;
        }
      }
    }

    this.post({ type: "progress", message: "Creating the campaign…" });
    const args = ["_new-campaign", target, "--solver", request.solver, "--runtime", request.setup.runtime];
    if (request.start === "files") {
      args.push(...inputArgs(request.files));
    } else if (request.start === "folder" && request.folder) {
      args.push("--template", request.folder);
    } else if (request.start === "empty") {
      args.push("--empty");
    }
    const created = await runCsauto(python, args, this.workspaceRoot, this.output);
    if (!created.ok) {
      fail(errorLine(created));
      return;
    }
    writeCampaignConfig(target, request.setup);
    if (request.doe) {
      const lines = [request.doe.columns, ...request.doe.rows].map((row) => row.map(csvCell).join(","));
      fs.writeFileSync(path.join(target, "doe.csv"), `${lines.join("\n")}\n`, "utf-8");
    }

    sendTelemetry(python, EVENT_EXT_CAMPAIGN_CREATED, true, `${request.solver}:${request.start}`);
    let generated = false;
    if (request.generate && request.start !== "empty") {
      this.post({ type: "progress", message: "Generating the cases…" });
      generated = (await generateCases(this.runtime, this.output, target)) !== undefined;
    }
    this.panel.dispose();
    this.onCreated({ root: target, generated });
  }
}

/** An SVG file as a data URI the page can show (it cannot read files itself). */
function svgDataUri(file: string): string | undefined {
  try {
    return `data:image/svg+xml;base64,${fs.readFileSync(file).toString("base64")}`;
  } catch {
    return undefined;
  }
}

function inputArgs(files: Record<string, string[]>): string[] {
  return Object.entries(files).flatMap(([key, paths]) => paths.flatMap((filePath) => ["--input", `${key}=${filePath}`]));
}
