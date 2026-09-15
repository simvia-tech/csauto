/**
 * Solver UI metadata from /api/app_config (dashboard panels, compare kinds,
 * error files). Null until loaded — consumers fall back to their hardcoded
 * defaults, which keeps older backends working.
 */

import type { AppConfig } from "$lib/api/types";

let config = $state<AppConfig | null>(null);

export function setAppConfig(value: AppConfig): void {
  config = value;
}

export function getAppConfig(): AppConfig | null {
  return config;
}

/**
 * Whether the selected solver supports a capability (residuals, probes,
 * performance, compare, control, restart, gui).
 *
 * Permissive while the config is null: the dashboard stays complete during the
 * initial load and, more importantly, if /api/app_config fails (for instance a
 * 401 while the token is being entered) rather than rendering an empty and
 * unexplained page.
 */
export function hasCapability(name: string): boolean {
  return config === null || config.capabilities.includes(name);
}

/** Whether the solver supports one specific live control directive. */
export function hasControlAction(name: string): boolean {
  return config === null || config.control_actions.includes(name);
}

/**
 * Execution backends the server offers, beside running on this machine.
 *
 * Empty while the config is null, unlike hasCapability which is permissive:
 * offering a cloud run that the server may not support would let a user submit
 * a campaign that fails, and a paid one at that. Local stays the safe default.
 */
export function getBackends(): string[] {
  return config?.backends ?? [];
}
