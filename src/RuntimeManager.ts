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

  private get venvDir(): string {
    return path.join(this.runtimesRoot, this.version);
  }

  private get venvPython(): string {
    return process.platform === "win32"
      ? path.join(this.venvDir, "Scripts", "python.exe")
      : path.join(this.venvDir, "bin", "python");
  }

  private get readyMarker(): string {
    return path.join(this.venvDir, ".csauto-ready");
  }

  /** The python executable running csauto, without triggering any setup. */
  current(): string | undefined {
    const override = vscode.workspace.getConfiguration("csauto").get<string>("pythonPath", "").trim();
    if (override) {
      return override;
    }
    return fs.existsSync(this.readyMarker) ? this.venvPython : undefined;
  }

  /**
   * Returns the python executable to run csauto with, creating the managed
   * venv on first use (with user consent). Undefined if the user declined.
   * The runtime is recreated when the install source changes — e.g. when a
   * dev checkout switches from the bundled wheel to an editable install.
   */
  async ensurePython(): Promise<string | undefined> {
    const override = vscode.workspace.getConfiguration("csauto").get<string>("pythonPath", "").trim();
    if (override) {
      return override;
    }
    const source = this.findInstallSource();
    const expected = this.markerFor(source);
    let existing: string | undefined;
    try {
      existing = fs.readFileSync(this.readyMarker, "utf-8");
    } catch {
      // No runtime yet.
    }
    if (existing === expected) {
      return this.venvPython;
    }
    if (!(await this.askConsent())) {
      return undefined;
    }
    await this.createRuntime(source, expected);
    void this.cleanupStaleRuntimes();
    return this.venvPython;
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

  private async findBasePython(): Promise<string> {
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

  private markerFor(source: InstallSource): string {
    return JSON.stringify({ version: this.version, kind: source.kind, source: source.path });
  }

  private async createRuntime(source: InstallSource, marker: string): Promise<void> {
    const basePython = await this.findBasePython();
    await vscode.window.withProgress(
      { location: vscode.ProgressLocation.Notification, title: "Setting up the csauto runtime…" },
      async (progress) => {
        this.output.appendLine(`[csauto] Creating runtime venv at ${this.venvDir} (${source.kind} install)`);
        await fs.promises.rm(this.venvDir, { recursive: true, force: true });
        await fs.promises.mkdir(this.runtimesRoot, { recursive: true });
        await run(basePython, ["-m", "venv", this.venvDir], this.output);
        progress.report({ message: "installing csauto…" });
        const installArgs =
          source.kind === "editable"
            ? ["-m", "pip", "install", "--upgrade", "-e", `${source.path}[web]`]
            : ["-m", "pip", "install", "--upgrade", `${source.path}[web]`];
        await run(this.venvPython, installArgs, this.output);
        await fs.promises.writeFile(this.readyMarker, marker, "utf-8");
        this.output.appendLine(`[csauto] Runtime ready (csauto ${this.version}, ${source.kind}).`);
      },
    );
  }

  private async cleanupStaleRuntimes(): Promise<void> {
    try {
      const entries = await fs.promises.readdir(this.runtimesRoot);
      for (const entry of entries) {
        if (entry !== this.version) {
          await fs.promises.rm(path.join(this.runtimesRoot, entry), { recursive: true, force: true });
          this.output.appendLine(`[csauto] Removed stale runtime ${entry}.`);
        }
      }
    } catch {
      // Best-effort cleanup only.
    }
  }
}
