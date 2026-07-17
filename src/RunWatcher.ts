import * as vscode from "vscode";
import { ServerManager, ServerState } from "./ServerManager";

const TERMINAL = new Set(["DONE", "FAILED"]);
const ACTIVE = new Set(["PENDING", "RUNNING"]);
const POLL_MS = 5_000;

interface StatusRow {
  case_id: string;
  status: string | null;
}

function listCases(cases: string[]): string {
  return cases.length <= 3 ? cases.join(", ") : `${cases.slice(0, 3).join(", ")}, …`;
}

/**
 * Polls the running server's status endpoint and raises a notification when a
 * case transitions from an active state to DONE or FAILED. Polling (rather
 * than watching registry.json) is deliberate: for scheduler runs the status is
 * computed on query, so polling also keeps it fresh.
 */
export class RunWatcher implements vscode.Disposable {
  private timer: NodeJS.Timeout | undefined;
  private previous = new Map<string, string>();

  constructor(
    server: ServerManager,
    private readonly output: vscode.OutputChannel,
  ) {
    server.onDidChangeState((state) => {
      this.stop();
      if (state) {
        this.start(state);
      }
    });
    if (server.current) {
      this.start(server.current);
    }
  }

  private start(state: ServerState): void {
    this.previous.clear();
    this.timer = setInterval(() => void this.poll(state), POLL_MS);
  }

  private stop(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  private async poll(state: ServerState): Promise<void> {
    if (!vscode.workspace.getConfiguration("csauto").get<boolean>("notifyOnRunCompletion", true)) {
      return;
    }
    let rows: StatusRow[];
    try {
      const response = await fetch(`http://127.0.0.1:${state.port}/api/status`, {
        headers: { "X-CSAUTO-TOKEN": state.token },
        signal: AbortSignal.timeout(4_000),
      });
      if (!response.ok) {
        return;
      }
      rows = ((await response.json()) as { rows?: StatusRow[] }).rows ?? [];
    } catch {
      return; // Server busy or shutting down — try again next tick.
    }

    const next = new Map<string, string>();
    const done: string[] = [];
    const failed: string[] = [];
    for (const row of rows) {
      const status = String(row.status ?? "").toUpperCase();
      next.set(row.case_id, status);
      const before = this.previous.get(row.case_id);
      if (before && ACTIVE.has(before) && TERMINAL.has(status)) {
        (status === "FAILED" ? failed : done).push(row.case_id);
      }
    }
    this.previous = next;

    if (done.length === 0 && failed.length === 0) {
      return;
    }
    const parts: string[] = [];
    if (done.length > 0) {
      parts.push(done.length === 1 ? `${done[0]} finished` : `${done.length} cases finished (${listCases(done)})`);
    }
    if (failed.length > 0) {
      parts.push(failed.length === 1 ? `${failed[0]} failed` : `${failed.length} cases failed (${listCases(failed)})`);
    }
    const message = `csauto: ${parts.join("; ")}`;
    this.output.appendLine(`[csauto] Run completion: ${parts.join("; ")}`);
    const show = failed.length > 0 ? vscode.window.showWarningMessage : vscode.window.showInformationMessage;
    void show(message, "Open Dashboard").then((choice) => {
      if (choice === "Open Dashboard") {
        void vscode.commands.executeCommand("csauto.openDashboard");
      }
    });
  }

  dispose(): void {
    this.stop();
  }
}
