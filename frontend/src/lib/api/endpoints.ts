/**
 * Typed wrappers for every csauto API endpoint.
 *
 * Each function builds the URL, calls the appropriate client method,
 * and returns a typed result. Callers never construct URLs themselves.
 */

import { apiGet, apiGetText, apiPost } from "./client";
import type {
  AppConfig,
  StatusPayload,
  PerfPayload,
  StringListResponse,
  ErrorsPayload,
  RestartOriginResponse,
  ProbePositionResponse,
  CleanupResponse,
} from "./types";

/* Helpers */

/** Encode case list as repeated query params: ?case=a&case=b */
function caseParams(cases: string[]): string {
  return cases.map((c) => `case=${encodeURIComponent(c)}`).join("&");
}

/* Observability */

export function fetchStatus(log = false): Promise<StatusPayload> {
  const qs = log ? "?log=1" : "";
  return apiGet<StatusPayload>(`/api/status${qs}`);
}

export function fetchPerf(cases: string[]): Promise<PerfPayload> {
  return apiGet<PerfPayload>(`/api/perf?${caseParams(cases)}`);
}

export function fetchAppConfig(): Promise<AppConfig> {
  return apiGet<AppConfig>("/api/app_config");
}

export function fetchResidualColumns(cases: string[]): Promise<string[]> {
  return apiGet<StringListResponse>(
    `/api/residual_columns?${caseParams(cases)}`,
  ).then((r) => r.columns ?? []);
}

export function fetchResidualsSvg(
  cases: string[],
  columns: string[],
  opts: {
    width?: number;
    height?: number;
    xMin?: number;
    includeHistory?: boolean;
  } = {},
): Promise<string> {
  const params = new URLSearchParams();
  cases.forEach((c) => params.append("case", c));
  params.set("columns", columns.join(","));
  if (opts.width) params.set("width", String(opts.width));
  if (opts.height) params.set("height", String(opts.height));
  if (opts.xMin !== undefined) params.set("x_min", String(opts.xMin));
  if (opts.includeHistory) params.set("include_history", "true");
  return apiGetText(`/api/residuals_svg?${params}`);
}

export function fetchRestartOrigin(
  cases: string[],
): Promise<RestartOriginResponse> {
  return apiGet<RestartOriginResponse>(
    `/api/restart_origin?${caseParams(cases)}`,
  );
}

export function fetchRecentErrors(params: {
  cases: string[];
  files?: string[];
  maxHits?: number;
  context?: number;
  sev?: string;
  q?: string;
}): Promise<ErrorsPayload> {
  const qs = new URLSearchParams();
  params.cases.forEach((c) => qs.append("case", c));
  if (params.files?.length) qs.set("files", params.files.join(","));
  if (params.maxHits) qs.set("max_hits", String(params.maxHits));
  if (params.context !== undefined) qs.set("context", String(params.context));
  if (params.sev) qs.set("sev", params.sev);
  if (params.q) qs.set("q", params.q);
  return apiGet<ErrorsPayload>(`/api/recent_errors?${qs}`);
}

/* Case data */

export function fetchTail(
  caseId: string,
  file: string,
  n: number,
): Promise<string> {
  const qs = new URLSearchParams({ case: caseId, file, n: String(n) });
  return apiGetText(`/api/tail?${qs}`);
}

export function fetchResuFiles(caseId: string): Promise<string[]> {
  return apiGet<StringListResponse>(
    `/api/resu_files?case=${encodeURIComponent(caseId)}`,
  ).then((r) => r.files ?? []);
}

export function fetchResuDirs(cases: string[]): Promise<string[]> {
  return apiGet<StringListResponse>(`/api/resu_dirs?${caseParams(cases)}`).then(
    (r) => r.dirs ?? [],
  );
}

export function fetchProbeFiles(
  cases: string[],
  scope: "monitoring" | "profiles",
): Promise<string[]> {
  const qs = new URLSearchParams({ scope });
  cases.forEach((c) => qs.append("case", c));
  return apiGet<StringListResponse>(`/api/probes?${qs}`).then(
    (r) => r.files ?? [],
  );
}

export function fetchProbeColumns(
  cases: string[],
  probes: string[],
): Promise<string[]> {
  const qs = new URLSearchParams();
  cases.forEach((c) => qs.append("case", c));
  probes.forEach((p) => qs.append("probe", p));
  return apiGet<StringListResponse>(`/api/probe_columns?${qs}`).then(
    (r) => r.columns ?? [],
  );
}

export function fetchProbePosition(
  caseId: string,
  probe: string,
  columns: string[],
): Promise<ProbePositionResponse> {
  const qs = new URLSearchParams({ case: caseId, probe });
  columns.forEach((c) => qs.append("column", c));
  return apiGet<ProbePositionResponse>(`/api/probe_position?${qs}`);
}

export function fetchProbeSvg(params: {
  cases: string[];
  probes: string[];
  columns: string[];
  axis?: string;
  xMin?: number;
  timeMin?: number;
  includeHistory?: boolean;
  width?: number;
  height?: number;
}): Promise<string> {
  const qs = new URLSearchParams();
  params.cases.forEach((c) => qs.append("case", c));
  params.probes.forEach((p) => qs.append("probe", p));
  qs.set("columns", params.columns.join(","));
  if (params.axis) qs.set("axis", params.axis);
  if (params.xMin !== undefined) qs.set("x_min", String(params.xMin));
  if (params.timeMin !== undefined) qs.set("time_min", String(params.timeMin));
  if (params.includeHistory) qs.set("include_history", "true");
  if (params.width) qs.set("width", String(params.width));
  if (params.height) qs.set("height", String(params.height));
  return apiGetText(`/api/probe_svg?${qs}`);
}

/* Compare */

export function fetchCompareDiff(params: {
  cases: string[];
  base?: string;
  kind?: string;
  filter?: string;
}): Promise<string> {
  const qs = new URLSearchParams();
  params.cases.forEach((c) => qs.append("case", c));
  if (params.base) qs.set("base", params.base);
  if (params.kind) qs.set("kind", params.kind);
  if (params.filter) qs.set("filter", params.filter);
  return apiGetText(`/api/compare_runs?${qs}`);
}

/* Actions (POST) */

export function runCase(params: {
  cases: string[];
  n: number;
  nt: number;
  maxParallel?: number | null;
  restart?: boolean;
  restartMode?: string;
  restartValue?: number;
}): Promise<void> {
  return apiPost("/api/run_case", {
    cases: params.cases,
    n: params.n,
    nt: params.nt,
    max_parallel: params.maxParallel ?? undefined,
    restart: params.restart ?? false,
    restart_mode: params.restartMode ?? "",
    restart_value: params.restartValue ?? undefined,
  }).then(() => undefined);
}

export function killCase(cases: string[]): Promise<void> {
  return apiPost("/api/kill_case", { cases }).then(() => undefined);
}

export function controlCase(params: {
  cases: string[];
  action: "stop" | "extend" | "checkpoint" | "flush";
  value?: number;
}): Promise<void> {
  return apiPost("/api/control_case", {
    cases: params.cases,
    action: params.action,
    value: params.value ?? undefined,
  }).then(() => undefined);
}

export function cleanupCases(params: {
  cases: string[];
  keepLast?: number;
  keepResu?: string[];
  deleteResu?: string[];
  pruneResu?: boolean;
  maxLogMb?: number;
}): Promise<CleanupResponse> {
  return apiPost<CleanupResponse>("/api/cleanup_cases", {
    cases: params.cases,
    keep_last: params.keepLast ?? 1,
    prune_resu: params.pruneResu ?? true,
    keep_resu: params.keepResu ?? [],
    delete_resu: params.deleteResu ?? [],
    max_log_mb: params.maxLogMb ?? 50.0,
    clear_cid: true,
    clear_pyc: false,
  });
}

export function setCaseNote(caseId: string, note: string): Promise<void> {
  return apiPost("/api/case_note", { case: caseId, note }).then(
    () => undefined,
  );
}

export function setCaseConvergence(
  caseId: string,
  convergence: string,
): Promise<void> {
  return apiPost("/api/case_convergence", { case: caseId, convergence }).then(
    () => undefined,
  );
}

export function openGui(caseId: string): Promise<void> {
  return apiPost("/api/open_gui", { case: caseId }).then(() => undefined);
}

/* Settings */

export function fetchTelemetrySettings(): Promise<{ enabled: boolean }> {
  return apiGet<{ enabled: boolean }>("/api/settings/telemetry");
}

export function setTelemetrySettings(
  enabled: boolean,
): Promise<{ enabled: boolean }> {
  return apiPost<{ enabled: boolean }>("/api/settings/telemetry", { enabled });
}
