/**
 * Centralized auto-refresh timer manager.
 *
 * Each card registers a named timer with a callback and interval.
 * Timers can be started, stopped, or all stopped at once.
 *
 * Refresh intervals are reactive and persisted to localStorage.
 */

import { readJson, writeJson } from "$lib/utils/localStorage";

const timers = new Map<string, ReturnType<typeof setInterval>>();

/** Start (or restart) a named timer. */
export function startTimer(
  name: string,
  callback: () => void,
  intervalMs: number,
): void {
  stopTimer(name);
  timers.set(name, setInterval(callback, intervalMs));
}

/** Stop a named timer. No-op if not running. */
export function stopTimer(name: string): void {
  const id = timers.get(name);
  if (id !== undefined) {
    clearInterval(id);
    timers.delete(name);
  }
}

/** Stop all timers (e.g. on app unmount). */
export function stopAllTimers(): void {
  timers.forEach((id) => clearInterval(id));
  timers.clear();
}

/** Check whether a named timer is currently running. */
export function isTimerRunning(name: string): boolean {
  return timers.has(name);
}

/* Default intervals (ms) */
export const REFRESH_DEFAULTS: Record<string, number> = {
  status: 1000,
  tail: 1000,
  plot: 3000,
  probe: 3000,
  errors: 5000,
};

export const REFRESH_KEYS = [
  "status",
  "plot",
  "probe",
  "tail",
  "errors",
] as const;

export const REFRESH_META: Record<string, { label: string; min: number }> = {
  status: { label: "Status table", min: 500 },
  plot: { label: "Residual plots", min: 1000 },
  probe: { label: "Probe plots", min: 1000 },
  tail: { label: "Log tail", min: 500 },
  errors: { label: "Recent errors", min: 2000 },
};

/* Persisted intervals */
const saved = readJson<Record<string, number>>("csauto_refresh_rates", {});

let rates = $state<Record<string, number>>({
  status: saved.status ?? REFRESH_DEFAULTS.status,
  tail: saved.tail ?? REFRESH_DEFAULTS.tail,
  plot: saved.plot ?? REFRESH_DEFAULTS.plot,
  probe: saved.probe ?? REFRESH_DEFAULTS.probe,
  errors: saved.errors ?? REFRESH_DEFAULTS.errors,
});

export function getRefreshRates(): Record<string, number> {
  return rates;
}

export function setRefreshRate(key: string, ms: number): void {
  rates = { ...rates, [key]: ms };
  writeJson("csauto_refresh_rates", rates);
}

export function resetRefreshRates(): void {
  rates = { ...REFRESH_DEFAULTS };
  writeJson("csauto_refresh_rates", rates);
}

/* Convenience getters (called at timer registration time) */
export function getStatusRefreshMs(): number {
  return rates.status;
}
export function getTailRefreshMs(): number {
  return rates.tail;
}
export function getPlotRefreshMs(): number {
  return rates.plot;
}
export function getProbeRefreshMs(): number {
  return rates.probe;
}
export function getErrorsRefreshMs(): number {
  return rates.errors;
}

/* Global refresh — callback registry for triggering all cards to reload */
const globalRefreshCallbacks = new Set<() => void>();
export function onGlobalRefresh(cb: () => void): () => void {
  globalRefreshCallbacks.add(cb);
  return () => globalRefreshCallbacks.delete(cb);
}
export function triggerGlobalRefresh(): void {
  globalRefreshCallbacks.forEach((cb) => cb());
}

/* Persisted auto-refresh enabled states (non-reactive, just localStorage) */
const _enabledCache = readJson<Record<string, boolean>>(
  "csauto_autorefresh_enabled",
  {},
);

export function getAutoRefreshEnabled(key: string): boolean {
  return _enabledCache[key] ?? true;
}

export function setAutoRefreshEnabled(key: string, v: boolean): void {
  _enabledCache[key] = v;
  writeJson("csauto_autorefresh_enabled", _enabledCache);
}
