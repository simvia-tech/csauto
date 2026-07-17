/**
 * VS Code embedded mode.
 *
 * The dashboard runs inside an iframe in the extension's webview, which is a
 * different origin — VS Code's --vscode-* theme variables don't reach us.
 * The webview wrapper page (see src/DashboardPanel.ts in the repo root)
 * signals embedding via the `embed=vscode` query parameter and forwards the
 * theme variables with postMessage, re-sending whenever the VS Code theme
 * changes. This module applies them: it toggles `vscode-embedded` (and
 * `vs-dark`) classes on <html> and copies the variables onto the root
 * element, where the overrides in app.css pick them up.
 */

const VAR_PATTERN = /^--vscode-[A-Za-z0-9-]+$/;
const MAX_VALUE_LENGTH = 256;

interface ThemeMessage {
  type?: unknown;
  kind?: unknown;
  vars?: unknown;
}

function applyKind(kind: string): void {
  const dark =
    kind.includes("dark") ||
    (kind.includes("high-contrast") && !kind.includes("light"));
  document.documentElement.classList.toggle("vs-dark", dark);
}

export function initVscodeEmbed(): void {
  const params = new URLSearchParams(window.location.search);
  if (params.get("embed") !== "vscode") {
    return;
  }
  document.documentElement.classList.add("vscode-embedded");
  const initialKind = params.get("vsTheme");
  if (initialKind) {
    applyKind(initialKind);
  }

  window.addEventListener("message", (event: MessageEvent<ThemeMessage>) => {
    const data = event.data;
    if (!data || data.type !== "csauto-theme") {
      return;
    }
    if (typeof data.kind === "string") {
      applyKind(data.kind);
    }
    if (data.vars && typeof data.vars === "object") {
      for (const [name, value] of Object.entries(
        data.vars as Record<string, unknown>,
      )) {
        if (
          VAR_PATTERN.test(name) &&
          typeof value === "string" &&
          value.length <= MAX_VALUE_LENGTH
        ) {
          document.documentElement.style.setProperty(name, value);
        }
      }
    }
  });

  // Ask the webview wrapper for the theme instead of relying on its iframe
  // load event — this makes delivery independent of load-timing races.
  if (window.parent !== window) {
    window.parent.postMessage({ type: "csauto-theme-request" }, "*");
  }
}
