import * as vscode from "vscode";
import * as crypto from "crypto";

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
  "--vscode-tab-activeBackground",
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

export class DashboardPanel {
  static current: DashboardPanel | undefined;
  static output: vscode.OutputChannel | undefined;
  static extensionUri: vscode.Uri | undefined;

  private constructor(
    private readonly panel: vscode.WebviewPanel,
    private port: number,
    private token: string,
  ) {
    panel.onDidDispose(() => {
      if (DashboardPanel.current === this) {
        DashboardPanel.current = undefined;
      }
    });
  }

  /** Force the iframe to reload (picks up a rebuilt dashboard). */
  static async reload(): Promise<void> {
    if (DashboardPanel.current) {
      await DashboardPanel.current.render();
      DashboardPanel.current.panel.reveal();
    }
  }

  static async createOrShow(port: number, token: string): Promise<void> {
    if (DashboardPanel.current) {
      if (DashboardPanel.current.port !== port || DashboardPanel.current.token !== token) {
        DashboardPanel.current.port = port;
        DashboardPanel.current.token = token;
        await DashboardPanel.current.render();
      }
      DashboardPanel.current.panel.reveal();
      return;
    }
    const panel = vscode.window.createWebviewPanel("csautoDashboard", "csauto", vscode.ViewColumn.One, {
      enableScripts: true,
      retainContextWhenHidden: true,
      portMapping: [{ webviewPort: port, extensionHostPort: port }],
    });
    if (DashboardPanel.extensionUri) {
      panel.iconPath = vscode.Uri.joinPath(DashboardPanel.extensionUri, "assets", "icone-code-saturne.svg");
    }
    DashboardPanel.current = new DashboardPanel(panel, port, token);
    await DashboardPanel.current.render();
  }

  private async render(): Promise<void> {
    const externalUri = await vscode.env.asExternalUri(vscode.Uri.parse(`http://127.0.0.1:${this.port}/`));
    const separator = externalUri.query ? "&" : "?";
    const query = `token=${encodeURIComponent(this.token)}&embed=vscode&vsTheme=${themeKind()}`;
    const src = `${externalUri.toString(true)}${separator}${query}`;
    const origin = `${externalUri.scheme}://${externalUri.authority}`;
    DashboardPanel.output?.appendLine(`[csauto] Dashboard iframe: ${externalUri.toString(true)} (embed=vscode, vsTheme=${themeKind()})`);
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
