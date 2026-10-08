/** Shared helpers for dropdown option lists and the solver's declared options. */

import type { SolverOption } from "$lib/api/types";

export interface DropdownOption {
  value: string;
  label: string;
}

/** Convert a list of case IDs into dropdown options. */
export function toCaseOptions(cases: string[]): DropdownOption[] {
  return cases.map((c) => ({ value: c, label: c }));
}

/**
 * Why `value` cannot be sent for a control action or restart mode, or "" when
 * it can: the server wants a positive number, whole when value_kind is "int".
 */
export function optionValueError(option: SolverOption, value: number): string {
  if (!Number.isFinite(value)) {
    return `${option.value_label} must be a number.`;
  }
  if (value <= 0) {
    return `${option.value_label} must be greater than 0.`;
  }
  if (option.value_kind === "int" && !Number.isInteger(value)) {
    return `${option.value_label} must be a whole number.`;
  }
  return "";
}
