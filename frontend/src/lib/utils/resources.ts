/**
 * Launch resources (MPI ranks, threads) a case may take from its DOE row,
 * through the reserved columns /api/app_config names (csauto_mpi, csauto_omp).
 */

import { getAppConfig } from "#lib/stores/appConfig.svelte.ts";
import { getRows } from "#lib/stores/status.svelte.ts";

export type ResourceKey = "nprocs" | "nt";

export interface ResourceCoverage {
  /** The DOE column that sets this resource ("" when the server names none). */
  column: string;
  /** Selected cases whose DOE row fills that column. */
  defined: number;
  total: number;
}

/** How many of `cases` take this resource from their DOE row. */
export function doeResourceCoverage(
  cases: string[],
  key: ResourceKey,
): ResourceCoverage {
  const column = getAppConfig()?.resource_columns?.[key] ?? "";
  const byId = new Map(getRows().map((row) => [row.case_id, row]));
  const defined = column
    ? cases.filter((id) => {
        const value = byId.get(id)?.doe?.[column];
        return value != null && String(value) !== "";
      }).length
    : 0;
  return { column, defined, total: cases.length };
}

/** True when every selected case takes the resource from the DOE: the dialog needs no value. */
export function coveredByDoe(coverage: ResourceCoverage): boolean {
  return coverage.total > 0 && coverage.defined === coverage.total;
}

/** Why `value` cannot be sent for this resource, or "" when it can. */
export function resourceValueError(
  label: string,
  value: number,
  coverage: ResourceCoverage,
): string {
  if (coveredByDoe(coverage)) return "";
  if (!Number.isFinite(value) || value <= 0 || !Number.isInteger(value)) {
    return `${label} must be an integer > 0.`;
  }
  return "";
}
