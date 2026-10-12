import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import { execFile } from "child_process";

const CONSENT_KEY = "csauto.runtimeConsent";
const MIN_PYTHON = [3, 11] as const;

interface InstallSource {
  kind: "wheel" | "editable";
  path: string;
}

function run(command: string, args: string[], output: vscode.OutputChannel): Promise<string> {
  return new Promise((resolve, reject) => {
    execFile(command, args, { maxBuffer: 16 * 1024 * 1024 }, (error, stdout, stderr) => {
      if (stdout.trim()) {
        output.append(stdout);
      }
      if (stderr.trim()) {
        output.append(stderr);
      }
      if (error) {
        reject(new Error(`${command} ${args.join(" ")} failed: ${error.message}`));
      } else {
        resolve(stdout);
      }
    });
  });
}

export class RuntimeManager {
  constructor(
    private readonly context: vscode.ExtensionContext,
    private readonly output: vscode.OutputChannel,
  ) {}

  private get version(): string {
    return this.context.extension.packageJSON.version as string;
  }

  private get runtimesRoot(): string {
    return path.join(this.context.globalStorageUri.fsPath, "runtimes");
  }

  /**
   * Editable (dev) runtimes are version-independent (they serve whatever the
   * checkout contains), so they live in a stable "dev" directory that version
   * bumps don't invalidate. Wheel runtimes are keyed on the version. The two
   * coexist, so a dev host and an installed extension don't thrash a shared
   * venv.
   */
  private venvDirFor(source: InstallSource): string {
    return path.join(this.runtimesRoot, source.kind === "editable" ? "dev" : this.version);
  }

  private pythonIn(venvDir: string): string {
    return process.platform === "win32"
      ? path.join(venvDir, "Scripts", "python.exe")
      : path.join(venvDir, "bin", "python");
  }

  private markerIn(venvDir: string): string {
    return path.join(venvDir, ".csauto-ready");
  }

  /** Version and install kind, for display purposes. */
  info(): { version: string; kind: "wheel" | "editable" | "unknown" } {
    try {
      return { version: this.version, kind: this.findInstallSource().kind };
    } catch {
      return { version: this.version, kind: "unknown" };
    }
  }

  /** The python executable running csauto, without triggering any setup. */
  current(): string | undefined {
    const override = vscode.workspace.getConfiguration("csauto").get<string>("pythonPath", "").trim();
    if (override) {
      return override;
    }
    try {
      const source = this.findInstallSource();
      const venvDir = this.venvDirFor(source);
      const existing = fs.readFileSync(this.markerIn(venvDir), "utf-8");
      return existing === this.markerFor(source) ? this.pythonIn(venvDir) : undefined;
    } catch {
      return undefined;
    }
  }

  /**
   * Returns the python executable to run csauto with, creating the managed
   * venv on first use (with user consent). Undefined if the user declined.
   * The runtime is recreated when its install source changes, e.g. a new
   * bundled wheel version, or a dev checkout moving to a different path.
   */
  ensurePython(): Promise<string | undefined> {
    // Concurrent callers (server start, Set up button, New Campaign) share one setup.
    this.pending ??= this.resolvePython().finally(() => {
      this.pending = undefined;
    });
    return this.pending;
  }

  private pending: Promise<string | undefined> | undefined;

  private async resolvePython(): Promise<string | undefined> {
    const override = vscode.workspace.getConfiguration("csauto").get<string>("pythonPath", "").trim();
    if (override) {
      return override;
    }
    const source = this.findInstallSource();
    const venvDir = this.venvDirFor(source);
    const expected = this.markerFor(source);
    let existing: string | undefined;
    try {
      existing = fs.readFileSync(this.markerIn(venvDir), "utf-8");
    } catch {
      // No runtime yet.
    }
    if (existing === expected) {
      return this.pythonIn(venvDir);
    }
    if (!(await this.askConsent())) {
      return undefined;
    }
    try {
      await this.createRuntime(source, venvDir, expected);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      void vscode.window
        .showErrorMessage(`csauto could not set up its Python environment: ${message}`, "Open Setup Guide", "Show Logs")
        .then((choice) => {
          if (choice === "Open Setup Guide") {
            void vscode.commands.executeCommand("csauto.openSetupGuide");
          } else if (choice === "Show Logs") {
            this.output.show(true);
          }
        });
      return undefined;
    }
    void this.cleanupStaleRuntimes();
    return this.pythonIn(venvDir);
  }

  /** Set up the runtime from an explicit request (the setup guide's button): no consent prompt. */
  async setUp(): Promise<string | undefined> {
    await this.context.globalState.update(CONSENT_KEY, true);
    return this.ensurePython();
  }

  private async askConsent(): Promise<boolean> {
    if (this.context.globalState.get<boolean>(CONSENT_KEY)) {
      return true;
    }
    const choice = await vscode.window.showInformationMessage(
      "csauto needs a private Python environment for its server (one-time setup inside extension storage).",
      "Set Up",
      "Use My Own Python…",
    );
    if (choice === "Set Up") {
      await this.context.globalState.update(CONSENT_KEY, true);
      return true;
    }
    if (choice === "Use My Own Python…") {
      await vscode.commands.executeCommand("workbench.action.openSettings", "csauto.pythonPath");
    }
    return false;
  }

  /** The first Python on PATH recent enough to host the runtime; throws with what to do otherwise. */
  async findBasePython(): Promise<string> {
    if (process.platform === "win32") {
      throw new Error("csauto runs in WSL on Windows: open your folder in a WSL window (Remote - WSL), then set up csauto there.");
    }
    for (const candidate of ["python3", "python"]) {
      try {
        const out = await run(candidate, ["--version"], this.output);
        const match = out.match(/Python (\d+)\.(\d+)/);
        if (match && (Number(match[1]) > MIN_PYTHON[0] || (Number(match[1]) === MIN_PYTHON[0] && Number(match[2]) >= MIN_PYTHON[1]))) {
          return candidate;
        }
        this.output.appendLine(`[csauto] ${candidate} is too old (need >= ${MIN_PYTHON.join(".")}): ${out.trim()}`);
      } catch {
        // Not on PATH; try the next candidate.
      }
    }
    throw new Error(
      `No Python >= ${MIN_PYTHON.join(".")} found on PATH. Install one, or set csauto.pythonPath to an interpreter that has csauto installed.`,
    );
  }

  /**
   * Why `python` cannot create the runtime's environment, or undefined when it can.
   * Debian and Ubuntu ship Python without venv support (the python3-venv package).
   */
  async venvProblem(python: string): Promise<string | undefined> {
    try {
      await run(python, ["-c", "import venv, ensurepip"], this.output);
      return undefined;
    } catch {
      const version = (await run(python, ["-c", "import sys; print('%d.%d' % sys.version_info[:2])"], this.output)
        .catch(() => "")).trim();
      return (
        `${python} cannot create virtual environments. On Debian or Ubuntu, install them with ` +
        `"sudo apt install python${version || "3"}-venv".`
      );
    }
  }

  /**
   * In a dev checkout (F5 Extension Development Host) prefer an editable
   * install so Python and dashboard changes in the repo are live; a packaged
   * extension installs its bundled wheel.
   */
  private findInstallSource(): InstallSource {
    const devMode = this.context.extensionMode === vscode.ExtensionMode.Development;
    const hasPyproject = fs.existsSync(path.join(this.context.extensionPath, "pyproject.toml"));
    if (devMode && hasPyproject) {
      return { kind: "editable", path: this.context.extensionPath };
    }
    const bundledDir = path.join(this.context.extensionPath, "bundled");
    if (fs.existsSync(bundledDir)) {
      const wheel = fs.readdirSync(bundledDir).find((f) => f.startsWith("csauto-") && f.endsWith(".whl"));
      if (wheel) {
        return { kind: "wheel", path: path.join(bundledDir, wheel) };
      }
    }
    if (hasPyproject) {
      return { kind: "editable", path: this.context.extensionPath };
    }
    throw new Error("No bundled csauto wheel found in the extension (and no source checkout to install from).");
  }

  /**
   * Editable markers deliberately omit the version: the venv serves whatever
   * the checkout contains, so version bumps must not invalidate it.
   */
  private markerFor(source: InstallSource): string {
    if (source.kind === "editable") {
      return JSON.stringify({ kind: source.kind, source: source.path });
    }
    return JSON.stringify({ version: this.version, kind: source.kind, source: source.path });
  }

  private async createRuntime(source: InstallSource, venvDir: string, marker: string): Promise<void> {
    const basePython = await this.findBasePython();
    const venvProblem = await this.venvProblem(basePython);
    if (venvProblem) {
      throw new Error(venvProblem);
    }
    const python = this.pythonIn(venvDir);
    await vscode.window.withProgress(
      { location: vscode.ProgressLocation.Notification, title: "Setting up the csauto runtime…" },
      async (progress) => {
        this.output.appendLine(`[csauto] Creating runtime venv at ${venvDir} (${source.kind} install)`);
        await fs.promises.rm(venvDir, { recursive: true, force: true });
        await fs.promises.mkdir(this.runtimesRoot, { recursive: true });
        await run(basePython, ["-m", "venv", venvDir], this.output);
        progress.report({ message: "installing csauto…" });
        const target = source.kind === "editable" ? ["-e", `${source.path}[web]`] : [`${source.path}[web]`];
        // A platform-specific package carries the dependency wheels: install offline from
        // them, and download from PyPI only when none fits this Python.
        const wheels = path.join(this.context.extensionPath, "bundled", "wheels");
        let installed = false;
        if (source.kind === "wheel" && fs.existsSync(wheels)) {
          try {
            await run(python, ["-m", "pip", "install", "--no-index", "--find-links", wheels, ...target], this.output);
            installed = true;
          } catch {
            this.output.appendLine("[csauto] The bundled dependencies do not fit this Python, downloading them.");
          }
        }
        if (!installed) {
          await run(python, ["-m", "pip", "install", "--upgrade", ...target], this.output);
        }
        await fs.promises.writeFile(this.markerIn(venvDir), marker, "utf-8");
        this.output.appendLine(`[csauto] Runtime ready (csauto ${this.version}, ${source.kind}).`);
      },
    );
  }

  /**
   * Keep the current wheel runtime and the dev runtime; delete everything
   * else (old versions, and version-named dirs left over from when editable
   * installs shared them).
   */
  private async cleanupStaleRuntimes(): Promise<void> {
    try {
      const entries = await fs.promises.readdir(this.runtimesRoot);
      for (const entry of entries) {
        let stale = entry !== this.version && entry !== "dev";
        if (entry === this.version) {
          try {
            const marker = JSON.parse(await fs.promises.readFile(this.markerIn(path.join(this.runtimesRoot, entry)), "utf-8"));
            stale = marker.kind === "editable";
          } catch {
            // Unreadable marker: leave the directory alone.
          }
        }
        if (stale) {
          await fs.promises.rm(path.join(this.runtimesRoot, entry), { recursive: true, force: true });
          this.output.appendLine(`[csauto] Removed stale runtime ${entry}.`);
        }
      }
    } catch {
      // Best-effort cleanup only.
    }
  }
}
