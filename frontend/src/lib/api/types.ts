/**
 * TypeScript interfaces matching the csauto FastAPI response shapes.
 *
 * These are kept in sync with the Pydantic models defined in
 * csauto/fastapi_routes/common.py and the individual route modules.
 */

/* Status & hero */

export interface StatusRow {
  case_id: string;
  status: string | null;
  convergence: string | null;
  note: string | null;
  nprocs: number | null;
  nt: number | null;
  last_iter: number | null;
  duration_s: number | null;
  duration: string | null;
  last_mod: string | null;
  resu_size_mb: number | null;
  doe: Record<string, string | number> | null;
  [extra: string]: unknown;
}

export interface StatusPayload {
  rows: StatusRow[];
  doe_columns: string[];
}

/* Performance */

/** case_id plus one value per PerfColumn.key; the adapter picks the value types. */
export interface PerfRecord {
  case_id: string;
  [key: string]: unknown;
}

export interface PerfColumn {
  key: string;
  label: string;
  kind: "time" | "int" | "float" | "text";
}

export interface PerfPayload {
  /** Columns the solver adapter declares; empty when it reports no timings. */
  columns: PerfColumn[];
  records: PerfRecord[];
}

export interface CompareKindOption {
  value: string;
  label: string;
}

/**
 * A live control action or a restart mode declared by the solver adapter.
 * The value, when there is one, must be positive (and whole for "int").
 */
export interface SolverOption {
  name: string;
  label: string;
  /** Label of the value field; empty when it takes no value. */
  value_label: string;
  value_kind: "int" | "float";
}

export interface AppConfig {
  solver: string;
  panels: string[];
  capabilities: string[];
  compare_kinds: CompareKindOption[];
  error_files: string[];
  tail_files: string[];
  control_actions: SolverOption[];
  restart_modes: SolverOption[];
  /** Residual columns preselected when present. */
  default_residual_columns: string[];
  /** True when /api/solver_logo serves an SVG. */
  logo: boolean;
  /** True when /api/solver_icon serves an SVG. */
  icon: boolean;
}

/* Shared */

export interface StringListResponse {
  columns?: string[];
  dirs?: string[];
  files?: string[];
}

/* Log tail */

export type LogSeverity = "error" | "warn" | "info";

export interface TailLine {
  text: string;
  /** From the solver's anomaly patterns; null for an ordinary line. */
  severity: LogSeverity | null;
}

export interface TailLinesResponse {
  file: string;
  lines: TailLine[];
}

/* Errors */

export interface ErrorItem {
  case_id: string;
  file: string;
  severity: string;
  line_html: string;
  tail_index: number | null;
  tail_total: number | null;
}

export interface ErrorsPayload {
  items: ErrorItem[];
}

/* Restart origins */

export interface RestartOriginEntry {
  iteration?: number;
  time?: number;
  [key: string]: number | undefined;
}

export interface RestartOriginResponse {
  origins: Record<string, RestartOriginEntry>;
}

/* Probe position */

export interface ProbePositionResponse {
  found: boolean;
  x?: number;
  y?: number;
  z?: number;
  [key: string]: unknown;
}

/* Cleanup result */

export interface CleanupResponse {
  resu_removed: number;
  logs_truncated: number;
  bytes_freed: number;
  cid_removed: number;
  pycache_removed: number;
}

/* Action params (sent by frontend) */

export interface RunParams {
  n: number;
  nt: number;
  maxParallel: number | null;
}

export interface RestartParams extends RunParams {
  /** A restart_modes name, or "" when the solver declares none. */
  restartMode: string;
  /** Null when the mode takes no value. */
  restartValue: number | null;
  /** A run folder of the case (from /api/resu_dirs); null restarts from the latest run. */
  restartPath: string | null;
}

export interface CleanChoice {
  action: "keep_latest" | "delete_all" | "keep_folder" | "delete_folder";
  keepLast?: number;
  keepResu?: string[];
  deleteResu?: string[];
}
