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
  backend: string | null;
  backend_progress: number | null;
  backend_execution_time_s: number | null;
  backend_core_count: number | null;
  doe: Record<string, string | number> | null;
  [extra: string]: unknown;
}

export interface StatusPayload {
  rows: StatusRow[];
  doe_columns: string[];
}

/* Performance */

export interface PerfRecord {
  case_id: string;
  [key: string]: string | null;
}

export interface PerfColumn {
  key: string;
  label: string;
  kind: "time" | "int" | "float" | "text";
}

export interface PerfPayload {
  /** Column metadata from the solver adapter; absent on older backends. */
  columns?: PerfColumn[];
  records: PerfRecord[];
}

export interface CompareKindOption {
  value: string;
  label: string;
}

export interface AppConfig {
  solver: string;
  panels: string[];
  capabilities: string[];
  compare_kinds: CompareKindOption[];
  error_files: string[];
  control_actions: string[];
  backends: string[];
}

export interface LaunchOption {
  key: string;
  label: string;
  choices: [string, string][];
  default: string;
}

export interface LaunchOptionsPayload {
  backend: string;
  degraded: boolean;
  options: LaunchOption[];
}

/* Shared */

export interface StringListResponse {
  columns?: string[];
  dirs?: string[];
  files?: string[];
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
  /** Execution backend name, or null/absent to run on this machine. */
  backend?: string | null;
  /** Values chosen for the backend's declared options. */
  options?: Record<string, string>;
}

export interface RestartParams extends RunParams {
  restartMode: "iterations" | "physical_time";
  restartValue: number;
}

export interface CleanChoice {
  action: "keep_latest" | "delete_all" | "keep_folder" | "delete_folder";
  keepLast?: number;
  keepResu?: string[];
  deleteResu?: string[];
}
