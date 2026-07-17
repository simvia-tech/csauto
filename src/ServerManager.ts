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

interface ManagedServer {
  child: ChildProcessWithoutNullStreams;
  state: ServerState;
  stopping: boolean;
}

/**
 * One csauto server per campaign (runs directory), each with its own port,
 * session token, and working directory — so each campaign's csauto.toml
 * (and therefore its solver) applies. Multiple servers run concurrently.
 */
export class ServerManager implements vscode.Disposable {
  private readonly servers = new Map<string, ManagedServer>();
  private readonly starting = new Map<string, Promise<ServerState>>();
  private readonly channels = new Map<string, vscode.OutputChannel>();
  private readonly stateEmitter = new vscode.EventEmitter<void>();
  private readonly startEmitter = new vscode.EventEmitter<ServerState>();
  readonly onDidChangeState = this.stateEmitter.event;
  readonly onDidStart = this.startEmitter.event;

  constructor(
    private readonly runtime: RuntimeManager,
    private readonly output: vscode.OutputChannel,
    private readonly workspaceState: vscode.Memento,
  ) {}

  /** Per-campaign output channel (server stdout/stderr, doctor runs). */
  channelFor(runsDir: string): vscode.OutputChannel {
    const key = path.resolve(runsDir);
    let channel = this.channels.get(key);
    if (!channel) {
      channel = vscode.window.createOutputChannel(`csauto · ${path.basename(this.campaignRoot(key))}`);
      this.channels.set(key, channel);
    }
    return channel;
  }

  /** All running servers. */
  list(): ServerState[] {
    return [...this.servers.values()].map((server) => server.state);
  }

  /** The running server for a runs directory, if any. */
  get(runsDir: string): ServerState | undefined {
    return this.servers.get(path.resolve(runsDir))?.state;
  }

  /** The directory whose csauto.toml governs this campaign. */
  campaignRoot(runsDir: string): string {
    const workspaceRoot = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
    if (workspaceRoot && path.resolve(runsDir) === path.resolve(workspaceRoot)) {
      return runsDir;
    }
    return path.dirname(runsDir);
  }

  /** Start (or return) the server for a runs directory. */
  async start(runsDirArg: string): Promise<ServerState> {
    const runsDir = path.resolve(runsDirArg);
    const running = this.servers.get(runsDir);
    if (running) {
      return running.state;
    }
    let pending = this.starting.get(runsDir);
    if (!pending) {
      pending = this.doStart(runsDir).finally(() => {
        this.starting.delete(runsDir);
      });
      this.starting.set(runsDir, pending);
    }
    return pending;
  }

  private async choosePort(runsDir: string, configured: number): Promise<number> {
    if (configured > 0 && this.list().length === 0) {
      return configured;
    }
    const remembered = this.workspaceState.get<number>(`csauto.lastPort:${runsDir}`);
    if (remembered && (await isPortFree(remembered))) {
      return remembered;
    }
    return findFreePort();
  }

  private async doStart(runsDir: string): Promise<ServerState> {
    const python = await this.runtime.ensurePython();
    if (!python) {
      throw new Error("csauto runtime setup was declined. Set it up, or point csauto.pythonPath to your own interpreter.");
    }

    const config = vscode.workspace.getConfiguration("csauto");
    if (!fs.existsSync(runsDir)) {
      const choice = await vscode.window.showInformationMessage(
        `The runs directory does not exist yet: ${runsDir}. Create it and start an empty campaign?`,
        "Create",
      );
      if (choice !== "Create") {
        throw new Error(`Runs directory not found: ${runsDir}.`);
      }
      await fs.promises.mkdir(runsDir, { recursive: true });
    }
    const cwd = this.campaignRoot(runsDir);
    const channel = this.channelFor(runsDir);

    void runDoctor(python, runsDir, cwd, channel).then(({ fails }) => {
      const realFails = fails.filter((line) => !line.includes("no case"));
      if (realFails.length > 0) {
        void vscode.window
          .showWarningMessage(`csauto doctor found ${realFails.length} problem(s): ${realFails[0]}`, "Show Logs")
          .then((choice) => {
            if (choice === "Show Logs") {
              channel.show(true);
            }
          });
      } else if (fails.length > 0) {
        void vscode.window.showInformationMessage(
          `No cases in ${runsDir} yet — the dashboard will be empty until you generate cases (csauto prepare).`,
        );
      }
    });

    const port = await this.choosePort(runsDir, config.get<number>("port", 0));
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

    channel.appendLine(`[csauto] Starting: ${python} ${serveArgs.join(" ")} (cwd ${cwd})`);
    const child = spawn(python, serveArgs, { cwd, env: { ...process.env, CSAUTO_API_TOKEN: token } });
    const managed: ManagedServer = { child, state: { port, runsDir, token }, stopping: false };

    child.stdout.on("data", (data: Buffer) => channel.append(data.toString()));
    child.stderr.on("data", (data: Buffer) => channel.append(data.toString()));
    child.on("exit", (code) => {
      channel.appendLine(`[csauto] Server exited with code ${code ?? "unknown"}.`);
      const wasRunning = this.servers.get(runsDir) === managed;
      this.servers.delete(runsDir);
      this.stateEmitter.fire();
      if (wasRunning && !managed.stopping) {
        void vscode.window
          .showWarningMessage(`The csauto server for ${path.basename(cwd)} stopped unexpectedly.`, "Show Logs")
          .then((choice) => {
            if (choice === "Show Logs") {
              channel.show(true);
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
      managed.stopping = true;
      child.kill();
      throw err;
    }

    this.servers.set(runsDir, managed);
    void this.workspaceState.update(`csauto.lastPort:${runsDir}`, port);
    this.stateEmitter.fire();
    this.startEmitter.fire(managed.state);
    channel.appendLine(`[csauto] Server ready on http://127.0.0.1:${port}/`);
    this.output.appendLine(`[csauto] Server for ${path.basename(cwd)} ready on port ${port} (logs: "csauto · ${path.basename(cwd)}").`);
    return managed.state;
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

  /** Stop the server for a runs directory (all servers when omitted). */
  async stop(runsDir?: string): Promise<void> {
    const targets = runsDir ? [path.resolve(runsDir)] : [...this.servers.keys()];
    await Promise.all(targets.map((target) => this.stopOne(target)));
  }

  private async stopOne(runsDir: string): Promise<void> {
    const managed = this.servers.get(runsDir);
    if (!managed) {
      return;
    }
    managed.stopping = true;
    this.channelFor(runsDir).appendLine("[csauto] Stopping server...");
    const exited = new Promise<void>((resolve) => managed.child.once("exit", () => resolve()));
    managed.child.kill("SIGTERM");
    const timeout = delay(5_000).then(() => "timeout" as const);
    if ((await Promise.race([exited, timeout])) === "timeout") {
      managed.child.kill("SIGKILL");
      await exited;
    }
  }

  dispose(): void {
    for (const managed of this.servers.values()) {
      managed.stopping = true;
      managed.child.kill("SIGTERM");
    }
    for (const channel of this.channels.values()) {
      channel.dispose();
    }
    this.stateEmitter.dispose();
    this.startEmitter.dispose();
  }
}
