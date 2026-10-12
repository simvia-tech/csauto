import * as vscode from "vscode";
import { runCsauto } from "./csautoProcess";

import type { SolverSpec } from "./newCampaignProtocol";

export type SolverInfo = SolverSpec;

let cached: { python: string; solvers: Promise<SolverInfo[] | undefined> } | undefined;

/** The solvers csauto offers (`csauto _solvers`), asked once per interpreter. */
export function listSolvers(python: string, cwd: string, output: vscode.OutputChannel): Promise<SolverInfo[] | undefined> {
  if (!cached || cached.python !== python) {
    const solvers = runCsauto(python, ["_solvers"], cwd, output).then((result) =>
      result.ok ? (JSON.parse(result.stdout) as SolverInfo[]) : undefined,
    );
    cached = { python, solvers };
    // Ask again next time when it failed.
    void solvers.then(
      (result) => result === undefined && cached?.solvers === solvers && (cached = undefined),
      () => cached?.solvers === solvers && (cached = undefined),
    );
  }
  return cached.solvers;
}

/** Solvers already known, without starting Python (for drawing the sidebar). */
export async function knownSolvers(): Promise<SolverInfo[]> {
  return (await cached?.solvers) ?? [];
}
