import * as vscode from "vscode";

export class DashboardPanel {
  static current: DashboardPanel | undefined;

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
    const panel = vscode.window.createWebviewPanel("csautoDashboard", "csauto Dashboard", vscode.ViewColumn.One, {
      enableScripts: true,
      retainContextWhenHidden: true,
      portMapping: [{ webviewPort: port, extensionHostPort: port }],
    });
    DashboardPanel.current = new DashboardPanel(panel, port, token);
    await DashboardPanel.current.render();
  }

  private async render(): Promise<void> {
    const externalUri = await vscode.env.asExternalUri(vscode.Uri.parse(`http://127.0.0.1:${this.port}/`));
    const separator = externalUri.query ? "&" : "?";
    const src = `${externalUri.toString(true)}${separator}token=${encodeURIComponent(this.token)}`;
    const origin = `${externalUri.scheme}://${externalUri.authority}`;
    this.panel.webview.html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; frame-src ${origin}; style-src 'unsafe-inline';">
  <style>
    html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
    iframe { display: block; width: 100%; height: 100vh; border: 0; }
  </style>
</head>
<body>
  <iframe src="${src}" allow="clipboard-read; clipboard-write"></iframe>
</body>
</html>`;
  }
}
