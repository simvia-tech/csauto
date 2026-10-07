/**
 * What the solver adapter declares, from /api/app_config: panels,
 * capabilities, control actions, restart modes, branding.
 *
 * Null until loaded. Meanwhile only the panels every solver feeds are shown
 * and every capability is off, so the dashboard never offers something the
 * solver may not support.
 */

import type { AppConfig } from "$lib/api/types";
import { fetchAppConfig } from "$lib/api/endpoints";

/** Fed by the registry and the launcher logs, whatever the solver. */
const GENERIC_PANELS = ["status", "tail", "errors"];
const MAX_RETRY_MS = 30_000;

let config = $state<AppConfig | null>(null);
let loading = false;
let retryMs = 1000;
let retryTimer: ReturnType<typeof setTimeout> | undefined;

export function getAppConfig(): AppConfig | null {
  return config;
}

/**
 * Fetch the config unless it is loaded or already on its way. A failure
 * (server not ready, token missing) retries with a growing delay; calling
 * again retries at once, e.g. after the API token changed.
 */
export async function loadAppConfig(): Promise<void> {
  if (config || loading) return;
  clearTimeout(retryTimer);
  loading = true;
  try {
    config = await fetchAppConfig();
  } catch {
    retryTimer = setTimeout(loadAppConfig, retryMs);
    retryMs = Math.min(retryMs * 2, MAX_RETRY_MS);
  } finally {
    loading = false;
  }
}

/** Whether a dashboard panel (status, residuals, probes, ...) should show. */
export function hasPanel(name: string): boolean {
  return (config?.panels ?? GENERIC_PANELS).includes(name);
}

/**
 * Whether the solver supports a capability (residuals, probes, performance,
 * compare, control, restart, gui). False until the config is loaded.
 */
export function hasCapability(name: string): boolean {
  return config?.capabilities.includes(name) ?? false;
}
