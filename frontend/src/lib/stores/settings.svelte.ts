/**
 * Persistent user settings backed by localStorage.
 *
 * Stores run/restart/clean dialog defaults so the user doesn't
 * have to re-enter them every time they open a dialog.
 * Keys are kept identical to the vanilla JS version for compatibility.
 */

/* Helpers */

function readNumber(key: string, fallback: number): number {
  const raw = localStorage.getItem(key);
  if (raw === null) return fallback;
  const n = Number(raw);
  return Number.isFinite(n) ? n : fallback;
}

function writeNumber(key: string, value: number): void {
  if (Number.isFinite(value)) {
    localStorage.setItem(key, String(value));
  }
}

function readString(key: string, fallback: string): string {
  return localStorage.getItem(key) ?? fallback;
}

/* Run settings */

export interface RunSettings {
  n: number;
  nt: number;
  maxParallel: number | null;
}

export function getRunSettings(): RunSettings {
  return {
    n: readNumber("csauto_run_n", 1),
    nt: readNumber("csauto_run_nt", 1),
    maxParallel: readNumber("csauto_run_max_parallel", 0) || null,
  };
}

export function setRunSettings(s: RunSettings): void {
  writeNumber("csauto_run_n", s.n);
  writeNumber("csauto_run_nt", s.nt);
  if (s.maxParallel) writeNumber("csauto_run_max_parallel", s.maxParallel);
}

/* Restart settings */

export interface RestartSettings extends RunSettings {
  mode: "iterations" | "physical_time";
  value: number;
}

export function getRestartSettings(): RestartSettings {
  return {
    n: readNumber("csauto_restart_n", 1),
    nt: readNumber("csauto_restart_nt", 1),
    maxParallel: readNumber("csauto_restart_max_parallel", 0) || null,
    mode: readString("csauto_restart_mode", "iterations") as
      | "iterations"
      | "physical_time",
    value: readNumber("csauto_restart_value", 100),
  };
}

export function setRestartSettings(s: RestartSettings): void {
  writeNumber("csauto_restart_n", s.n);
  writeNumber("csauto_restart_nt", s.nt);
  if (s.maxParallel) writeNumber("csauto_restart_max_parallel", s.maxParallel);
  localStorage.setItem("csauto_restart_mode", s.mode);
  writeNumber("csauto_restart_value", s.value);
}

/* Clean settings */

export interface CleanSettings {
  keepLast: number;
}

export function getCleanSettings(): CleanSettings {
  return {
    keepLast: readNumber("csauto_clean_keep_last", 1),
  };
}

export function setCleanSettings(s: CleanSettings): void {
  writeNumber("csauto_clean_keep_last", s.keepLast);
}
