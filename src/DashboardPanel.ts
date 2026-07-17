import * as vscode from "vscode";
import * as crypto from "crypto";
import * as path from "path";
import { ServerState } from "./ServerManager";

/**
 * Theme variables forwarded into the dashboard iframe. The iframe is a
 * different origin, so VS Code's CSS variables don't cascade into it — the
 * webview bootstrap script reads these and hands them over with postMessage
 * (see frontend/src/lib/vscode-embed.ts for the receiving side).
 */
const THEME_VARS = [
  "--vscode-editor-background",
  "--vscode-editor-foreground",
  "--vscode-foreground",
  "--vscode-descriptionForeground",
  "--vscode-textLink-foreground",
  "--vscode-editorWidget-background",
  "--vscode-editorWidget-border",
  "--vscode-widget-border",
  "--vscode-panel-border",
  "--vscode-sideBar-background",
  "--vscode-input-background",
  "--vscode-input-foreground",
  "--vscode-input-border",
  "--vscode-input-placeholderForeground",
  "--vscode-dropdown-background",
  "--vscode-dropdown-foreground",
  "--vscode-dropdown-border",
  "--vscode-button-background",
  "--vscode-button-foreground",
  "--vscode-button-hoverBackground",
  "--vscode-focusBorder",
  "--vscode-list-hoverBackground",
  "--vscode-list-activeSelectionBackground",
  "--vscode-list-activeSelectionForeground",
  "--vscode-tab-activeBackground",
  "--vscode-font-family",
  "--vscode-font-size",
  "--vscode-editor-font-family",
  "--vscode-scrollbarSlider-background",
  "--vscode-scrollbarSlider-hoverBackground",
  "--vscode-scrollbarSlider-activeBackground",
];

function themeKind(): string {
  switch (vscode.window.activeColorTheme.kind) {
    case vscode.ColorThemeKind.Dark:
    case vscode.ColorThemeKind.HighContrast:
      return "dark";
    default:
      return "light";
  }
}

async function fetchSolverName(state: ServerState): Promise<string | undefined> {
  try {
    const response = await fetch(`http://127.0.0.1:${state.port}/api/app_config`, {
      headers: { "X-CSAUTO-TOKEN": state.token },
      signal: AbortSignal.timeout(3_000),
    });
    if (!response.ok) {
      return undefined;
    }
    return ((await response.json()) as { solver?: string }).solver;
  } catch {
    return undefined;
  }
}

/** One dashboard panel per campaign; several can be open at once. */
export class DashboardPanel {
  private static readonly panels = new Map<string, DashboardPanel>();
  static output: vscode.OutputChannel | undefined;
  static extensionUri: vscode.Uri | undefined;

  private constructor(
    private readonly panel: vscode.WebviewPanel,
    private state: ServerState,
  ) {
    panel.onDidDispose(() => {
      if (DashboardPanel.panels.get(this.state.runsDir) === this) {
        DashboardPanel.panels.delete(this.state.runsDir);
      }
    });
  }

  static openCount(): number {
    return DashboardPanel.panels.size;
  }

  /** Force every open dashboard to reload (picks up a rebuilt frontend). */
  static async reloadAll(): Promise<void> {
    for (const instance of DashboardPanel.panels.values()) {
      await instance.render();
    }
  }

  static async createOrShow(state: ServerState): Promise<void> {
    const existing = DashboardPanel.panels.get(state.runsDir);
    if (existing) {
      if (existing.state.port !== state.port || existing.state.token !== state.token) {
        existing.state = state;
        await existing.render();
      }
      existing.panel.reveal();
      return;
    }
    const campaignName = path.basename(path.dirname(state.runsDir)) || "csauto";
    const panel = vscode.window.createWebviewPanel("csautoDashboard", campaignName, vscode.ViewColumn.One, {
      enableScripts: true,
      retainContextWhenHidden: true,
      portMapping: [{ webviewPort: state.port, extensionHostPort: state.port }],
    });
    if (DashboardPanel.extensionUri) {
      panel.iconPath = vscode.Uri.joinPath(DashboardPanel.extensionUri, "assets", "icone-code-saturne.svg");
    }
    const instance = new DashboardPanel(panel, state);
    DashboardPanel.panels.set(state.runsDir, instance);
    await instance.render();
    void fetchSolverName(state).then((solver) => {
      if (solver) {
        panel.title = `${solver} · ${campaignName}`;
      }
    });
  }

  private async render(): Promise<void> {
    const externalUri = await vscode.env.asExternalUri(vscode.Uri.parse(`http://127.0.0.1:${this.state.port}/`));
    const separator = externalUri.query ? "&" : "?";
    const query = `token=${encodeURIComponent(this.state.token)}&embed=vscode&vsTheme=${themeKind()}`;
    const src = `${externalUri.toString(true)}${separator}${query}`;
    const origin = `${externalUri.scheme}://${externalUri.authority}`;
    DashboardPanel.output?.appendLine(
      `[csauto] Dashboard iframe: ${externalUri.toString(true)} (${this.state.runsDir}, vsTheme=${themeKind()})`,
    );
    const nonce = crypto.randomBytes(16).toString("base64");
    this.panel.webview.html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; frame-src ${origin}; style-src 'unsafe-inline'; script-src 'nonce-${nonce}';">
  <style>
    html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
    iframe { display: block; width: 100%; height: 100vh; border: 0; }
  </style>
</head>
<body>
  <iframe id="dashboard" src="${src}" allow="clipboard-read; clipboard-write"></iframe>
  <script nonce="${nonce}">
    const iframe = document.getElementById("dashboard");
    const targetOrigin = ${JSON.stringify(origin)};
    const themeVars = ${JSON.stringify(THEME_VARS)};

    function sendTheme() {
      if (!iframe.contentWindow) {
        return;
      }
      const styles = getComputedStyle(document.body);
      const vars = {};
      for (const name of themeVars) {
        const value = styles.getPropertyValue(name).trim();
        if (value) {
          vars[name] = value;
        }
      }
      const kind = document.body.dataset.vscodeThemeKind || "";
      iframe.contentWindow.postMessage({ type: "csauto-theme", kind, vars }, targetOrigin);
    }

    iframe.addEventListener("load", sendTheme);
    window.addEventListener("message", (event) => {
      if (event.data && event.data.type === "csauto-theme-request") {
        sendTheme();
      }
    });
    new MutationObserver(sendTheme).observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "data-vscode-theme-kind", "data-vscode-theme-name"],
    });
  </script>
</body>
</html>`;
  }
}
