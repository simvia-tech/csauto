import * as vscode from "vscode";
import * as crypto from "crypto";
import * as net from "net";
import * as path from "path";
import * as fs from "fs";
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { RuntimeManager } from "./RuntimeManager";
import { runDoctor } from "./doctor";

export interface ServerState {
  port: number;
  runsDir: string;
  token: string;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function findFreePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => {
        if (address && typeof address === "object") {
          resolve(address.port);
        } else {
          reject(new Error("Could not allocate a free port."));
        }
      });
    });
  });
}

function isPortFree(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.listen(port, "127.0.0.1", () => {
      server.close(() => resolve(true));
    });
  });
}

export class ServerManager implements vscode.Disposable {
  private child: ChildProcessWithoutNullStreams | undefined;
  private state: ServerState | undefined;
  private stopping = false;
  private starting: Promise<ServerState> | undefined;
  private readonly stateEmitter = new vscode.EventEmitter<ServerState | undefined>();
  readonly onDidChangeState = this.stateEmitter.event;

  constructor(
    private readonly runtime: RuntimeManager,
    private readonly output: vscode.OutputChannel,
    private readonly workspaceState: vscode.Memento,
  ) {}

  /**
   * Keep the port stable per workspace: every new port becomes another
   * forwarded-port entry in remote sessions, so reuse the previous one
   * whenever it is still free.
   */
  private async choosePort(configured: number): Promise<number> {
    if (configured > 0) {
      return configured;
    }
    const remembered = this.workspaceState.get<number>("csauto.lastPort");
    if (remembered && (await isPortFree(remembered))) {
      return remembered;
    }
    return findFreePort();
  }

  get current(): ServerState | undefined {
    return this.state;
  }

  resolveRunsDir(): string {
    const config = vscode.workspace.getConfiguration("csauto");
    const configured = config.get<string>("runsDir", "RUNS").trim() || "RUNS";
    if (path.isAbsolute(configured)) {
      return configured;
    }
    const folder = vscode.workspace.workspaceFolders?.[0];
    if (!folder) {
      throw new Error("Open a folder first: the runs directory is resolved against the workspace root.");
    }
    return path.join(folder.uri.fsPath, configured);
  }

  async start(): Promise<ServerState> {
    if (this.state) {
      return this.state;
    }
    if (!this.starting) {
      this.starting = this.doStart().finally(() => {
        this.starting = undefined;
      });
    }
    return this.starting;
  }

  private async doStart(): Promise<ServerState> {
    const python = await this.runtime.ensurePython();
    if (!python) {
      throw new Error("csauto runtime setup was declined. Set it up, or point csauto.pythonPath to your own interpreter.");
    }

    const config = vscode.workspace.getConfiguration("csauto");
    const runsDir = this.resolveRunsDir();
    if (!fs.existsSync(runsDir)) {
      const choice = await vscode.window.showInformationMessage(
        `The runs directory does not exist yet: ${runsDir}. Create it and start an empty campaign?`,
        "Create",
        "Change Setting",
      );
      if (choice !== "Create") {
        if (choice === "Change Setting") {
          void vscode.commands.executeCommand("workbench.action.openSettings", "csauto.runsDir");
        }
        throw new Error(`Runs directory not found: ${runsDir}. Adjust csauto.runsDir or open your campaign folder.`);
      }
      await fs.promises.mkdir(runsDir, { recursive: true });
    }
    const cwd = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath ?? path.dirname(runsDir);

    void runDoctor(python, runsDir, cwd, this.output).then(({ fails }) => {
      // An empty campaign is a normal state for the extension (fresh folder,
      // prepare not run yet) — hint instead of alarming.
      const realFails = fails.filter((line) => !line.includes("no case"));
      if (realFails.length > 0) {
        void vscode.window
          .showWarningMessage(`csauto doctor found ${realFails.length} problem(s): ${realFails[0]}`, "Show Logs")
          .then((choice) => {
            if (choice === "Show Logs") {
              this.output.show(true);
            }
          });
      } else if (fails.length > 0) {
        void vscode.window.showInformationMessage(
          `No cases in ${runsDir} yet — the dashboard will be empty until you generate cases (csauto prepare).`,
        );
      }
    });

    const port = await this.choosePort(config.get<number>("port", 0));
    const extraArgs = config.get<string[]>("serveArgs", []);
    const token = crypto.randomBytes(24).toString("hex");
    const serveArgs = [
      "-m",
      "csauto",
      "serve",
      runsDir,
      "--host",
      "127.0.0.1",
      "--port",
      String(port),
      "--no-doctor",
      ...extraArgs,
    ];

    this.output.appendLine(`[csauto] Starting: ${python} ${serveArgs.join(" ")}`);
    const child = spawn(python, serveArgs, { cwd, env: { ...process.env, CSAUTO_API_TOKEN: token } });
    this.child = child;
    this.stopping = false;

    child.stdout.on("data", (data: Buffer) => this.output.append(data.toString()));
    child.stderr.on("data", (data: Buffer) => this.output.append(data.toString()));
    child.on("exit", (code) => {
      this.output.appendLine(`[csauto] Server exited with code ${code ?? "unknown"}.`);
      const wasRunning = this.state !== undefined;
      this.child = undefined;
      this.state = undefined;
      this.stateEmitter.fire(undefined);
      if (wasRunning && !this.stopping) {
        void vscode.window
          .showWarningMessage("The csauto server stopped unexpectedly.", "Show Logs")
          .then((choice) => {
            if (choice === "Show Logs") {
              this.output.show(true);
            }
          });
      }
    });

    const spawnError = new Promise<never>((_, reject) => {
      child.once("error", (err: NodeJS.ErrnoException) => {
        if (err.code === "ENOENT") {
          reject(new Error(`Python executable not found: ${python}. Check the csauto.pythonPath setting.`));
        } else {
          reject(err);
        }
      });
    });

    try {
      await Promise.race([this.waitForReady(port, child), spawnError]);
    } catch (err) {
      this.stopping = true;
      child.kill();
      throw err;
    }

    this.state = { port, runsDir, token };
    void this.workspaceState.update("csauto.lastPort", port);
    this.stateEmitter.fire(this.state);
    this.output.appendLine(`[csauto] Server ready on http://127.0.0.1:${port}/`);
    return this.state;
  }

  private async waitForReady(port: number, child: ChildProcessWithoutNullStreams): Promise<void> {
    const deadline = Date.now() + 30_000;
    while (Date.now() < deadline) {
      if (child.exitCode !== null) {
        throw new Error(`csauto serve exited with code ${child.exitCode} — see the "csauto" output channel.`);
      }
      try {
        const response = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(1000) });
        if (response.status < 500) {
          return;
        }
      } catch {
        // Server not accepting connections yet.
      }
      await delay(300);
    }
    throw new Error("Timed out waiting for the csauto server to start.");
  }

  async stop(): Promise<void> {
    const child = this.child;
    if (!child) {
      return;
    }
    this.stopping = true;
    this.output.appendLine("[csauto] Stopping server...");
    const exited = new Promise<void>((resolve) => child.once("exit", () => resolve()));
    child.kill("SIGTERM");
    const timeout = delay(5_000).then(() => "timeout" as const);
    if ((await Promise.race([exited, timeout])) === "timeout") {
      child.kill("SIGKILL");
      await exited;
    }
  }

  dispose(): void {
    this.stopping = true;
    this.child?.kill("SIGTERM");
    this.stateEmitter.dispose();
  }
}
