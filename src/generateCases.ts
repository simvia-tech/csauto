import * as vscode from "vscode";
import * as path from "path";
import { RuntimeManager } from "./RuntimeManager";
import { errorLine, runCsauto, showFailure } from "./csautoProcess";

/**
 * Generate the campaign's cases (`csauto prepare doe.csv TEMPLATE RUNS`) from
 * its folder, so its csauto.toml applies. Returns the runs directory.
 */
export async function generateCases(
  runtime: RuntimeManager,
  output: vscode.OutputChannel,
  campaignRoot: string,
): Promise<string | undefined> {
  const python = await runtime.ensurePython();
  if (!python) {
    return undefined;
  }
  const result = await vscode.window.withProgress(
    { location: vscode.ProgressLocation.Notification, title: `Generating the cases of ${path.basename(campaignRoot)}…` },
    () => runCsauto(python, ["prepare", "doe.csv", "TEMPLATE", "RUNS"], campaignRoot, output),
  );
  if (!result.ok) {
    await showFailure(`csauto could not generate the cases: ${errorLine(result)}`, output);
    return undefined;
  }
  return path.join(campaignRoot, "RUNS");
}
