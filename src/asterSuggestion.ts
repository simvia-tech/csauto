import * as vscode from "vscode";

const ASTER_ID = "simvia.vs-code-aster";
const DISMISS_KEY = "csauto.asterSuggestionDismissed";

/**
 * Campaigns carry MED meshes, and the VS Code Aster extension ships a 3D
 * viewer for them — suggest it once when meshes are present and it isn't
 * installed.
 */
export async function suggestAsterForMeshes(context: vscode.ExtensionContext): Promise<void> {
  if (context.globalState.get<boolean>(DISMISS_KEY)) {
    return;
  }
  if (vscode.extensions.getExtension(ASTER_ID)) {
    return;
  }
  const meshes = await vscode.workspace.findFiles("**/*.med", "**/{node_modules,.git}/**", 1);
  if (meshes.length === 0) {
    return;
  }
  const choice = await vscode.window.showInformationMessage(
    "This workspace contains MED mesh files. Install the VS Code Aster extension to visualize them in 3D?",
    "Install",
    "Don't Ask Again",
  );
  if (choice === "Install") {
    await vscode.commands.executeCommand("workbench.extensions.installExtension", ASTER_ID);
    void vscode.window.showInformationMessage("VS Code Aster installed — open a .med file to visualize it.");
  } else if (choice === "Don't Ask Again") {
    await context.globalState.update(DISMISS_KEY, true);
  }
}
