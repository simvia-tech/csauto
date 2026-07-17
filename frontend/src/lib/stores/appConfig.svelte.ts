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
