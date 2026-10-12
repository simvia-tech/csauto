import * as vscode from "vscode";
import * as os from "os";
import { execFile } from "child_process";
import { RuntimeManager } from "./RuntimeManager";
import { listSolvers } from "./solvers";

/** The walkthrough contributed in package.json ("Get started with csauto"). */
const WALKTHROUGH = "simvia.csauto#csauto.setup";

interface Check {
  ok: boolean;
  /** What is wrong and how to fix it, when not ok. */
  problem?: string;
}

interface SetupChecks {
  python: Check;
  venv: Check;
  runtime: Check;
  code_aster: Check;
  code_saturne: Check;
}

function succeeds(command: string, args: string[]): Promise<boolean> {
  return new Promise((resolve) => {
    execFile(command, args, { timeout: 15_000 }, (error) => resolve(!error));
  });
}

/**
 * What csauto needs on this machine, in the walkthrough's order. Each result
 * also sets a `csauto.setup.<step>` context key, which ticks its step.
 */
async function runChecks(runtime: RuntimeManager, output: vscode.OutputChannel): Promise<SetupChecks> {
  const ownPython = vscode.workspace.getConfiguration("csauto").get<string>("pythonPath", "").trim();
  const runtimePython = runtime.current();

  let python: Check;
  let venv: Check;
  if (ownPython) {
    python = { ok: true };
    venv = { ok: true };
  } else {
    let base: string | undefined;
    try {
      base = await runtime.findBasePython();
      python = { ok: true };
    } catch (err) {
      python = { ok: false, problem: err instanceof Error ? err.message : String(err) };
    }
    const problem = base ? await runtime.venvProblem(base) : "needs Python first";
    // An environment already created does not need venv support any more.
    venv = runtimePython ? { ok: true } : { ok: !problem, problem };
  }

  const environment: Check = runtimePython
    ? { ok: true }
    : { ok: false, problem: "csauto's Python environment is not set up yet." };

  // Docker can pull either solver's image; otherwise each solver needs its own native or Singularity runtime.
  const dockerRunning = await succeeds("docker", ["info"]);
  const cwd = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath ?? os.homedir();
  const solvers = runtimePython ? await listSolvers(runtimePython, cwd, output) : undefined;
  const dockerInstalled = dockerRunning || (await succeeds("docker", ["--version"]));
  const solverCheck = (name: string): Check => {
    const others = solvers?.find((info) => info.name === name)?.found_runtimes.some((r) => r !== "docker") ?? false;
    if (dockerRunning || others) {
      return { ok: true };
    }
    return {
      ok: false,
      problem: dockerInstalled
        ? "Docker is installed but not running: start Docker Desktop or the docker service."
        : `No way to run ${name} found: install Docker, a native ${name}, or Apptainer/Singularity.`,
    };
  };

  const checks = {
    python,
    venv,
    runtime: environment,
    code_aster: solverCheck("code_aster"),
    code_saturne: solverCheck("code_saturne"),
  };
  output.appendLine(
    `[csauto] Setup checks: ${Object.entries(checks).map(([step, c]) => `${step} ${c.ok ? "ok" : `failed (${c.problem})`}`).join(", ")}`,
  );
  for (const step of ["python", "venv", "runtime"] as const) {
    void vscode.commands.executeCommand("setContext", `csauto.setup.${step}`, checks[step].ok);
  }
  // One runnable solver is enough to tick the Solvers step.
  void vscode.commands.executeCommand("setContext", "csauto.setup.solver", checks.code_aster.ok || checks.code_saturne.ok);
  return checks;
}

const STEP_NAMES: Record<keyof SetupChecks, string> = {
  python: "Python",
  venv: "Python environments",
  runtime: "csauto environment",
  code_aster: "code_aster",
  code_saturne: "code_saturne",
};

export function registerSetupGuide(
  context: vscode.ExtensionContext,
  runtime: RuntimeManager,
  output: vscode.OutputChannel,
  onRuntimeReady: () => void,
): void {
  const openGuide = () =>
    vscode.commands.executeCommand("workbench.action.openWalkthrough", WALKTHROUGH, false);

  const check = async (): Promise<void> => {
    const checks = await runChecks(runtime, output);
    const oneSolver = checks.code_aster.ok || checks.code_saturne.ok;
    const failed = (Object.keys(checks) as (keyof SetupChecks)[]).filter(
      (step) => !checks[step].ok && !(oneSolver && step.startsWith("code_")),
    );
    if (failed.length === 0) {
      const solvers = (["code_aster", "code_saturne"] as const)
        .map((name) => `${name} ${checks[name].ok ? "can run" : "cannot run yet"}`)
        .join(", ");
      void vscode.window.showInformationMessage(`csauto is set up (${solvers}). Create a campaign to get started.`);
      return;
    }
    const details = failed.map((step) => `${STEP_NAMES[step]}: ${checks[step].problem}`).join(" ");
    void vscode.window.showWarningMessage(`csauto setup: ${details}`);
  };

  context.subscriptions.push(
    vscode.commands.registerCommand("csauto.openSetupGuide", openGuide),
    vscode.commands.registerCommand("csauto.checkSetup", check),
    vscode.commands.registerCommand("csauto.setUpRuntime", async () => {
      if (await runtime.setUp()) {
        onRuntimeReady();
      }
      await runChecks(runtime, output);
    }),
  );

  // Tick the steps already done, in case the guide is open.
  void runChecks(runtime, output);
}
