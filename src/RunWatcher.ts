import * as vscode from "vscode";
import * as path from "path";
import { DashboardPanel } from "./DashboardPanel";
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
 * Polls every running server's status endpoint and raises a notification
 * when a case transitions from an active state to DONE or FAILED. Polling
 * (rather than watching registry.json) is deliberate: for scheduler runs the
 * status is computed on query, so polling also keeps it fresh.
 */
export class RunWatcher implements vscode.Disposable {
  private timer: NodeJS.Timeout | undefined;
  /** runsDir -> (case_id -> status) */
  private previous = new Map<string, Map<string, string>>();

  constructor(
    private readonly server: ServerManager,
    private readonly output: vscode.OutputChannel,
  ) {
    server.onDidChangeState(() => this.sync());
    this.sync();
  }

  private sync(): void {
    const running = this.server.list();
    for (const key of [...this.previous.keys()]) {
      if (!running.some((state) => state.runsDir === key)) {
        this.previous.delete(key);
      }
    }
    if (running.length > 0 && !this.timer) {
      this.timer = setInterval(() => void this.pollAll(), POLL_MS);
    } else if (running.length === 0 && this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  private async pollAll(): Promise<void> {
    if (!vscode.workspace.getConfiguration("csauto").get<boolean>("notifyOnRunCompletion", true)) {
      return;
    }
    await Promise.all(this.server.list().map((state) => this.poll(state)));
  }

  private async poll(state: ServerState): Promise<void> {
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

    const before = this.previous.get(state.runsDir);
    const next = new Map<string, string>();
    const done: string[] = [];
    const failed: string[] = [];
    for (const row of rows) {
      const status = String(row.status ?? "").toUpperCase();
      next.set(row.case_id, status);
      const previous = before?.get(row.case_id);
      if (previous && ACTIVE.has(previous) && TERMINAL.has(status)) {
        (status === "FAILED" ? failed : done).push(row.case_id);
      }
    }
    this.previous.set(state.runsDir, next);

    if (done.length === 0 && failed.length === 0) {
      return;
    }
    const campaign = path.basename(path.dirname(state.runsDir));
    const parts: string[] = [];
    if (done.length > 0) {
      parts.push(done.length === 1 ? `${done[0]} finished` : `${done.length} cases finished (${listCases(done)})`);
    }
    if (failed.length > 0) {
      parts.push(failed.length === 1 ? `${failed[0]} failed` : `${failed.length} cases failed (${listCases(failed)})`);
    }
    const message = `csauto (${campaign}): ${parts.join("; ")}`;
    this.output.appendLine(`[csauto] Run completion in ${state.runsDir}: ${parts.join("; ")}`);
    const show = failed.length > 0 ? vscode.window.showWarningMessage : vscode.window.showInformationMessage;
    void show(message, "Open Dashboard").then(async (choice) => {
      if (choice === "Open Dashboard") {
        await DashboardPanel.createOrShow(state);
      }
    });
  }

  dispose(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
