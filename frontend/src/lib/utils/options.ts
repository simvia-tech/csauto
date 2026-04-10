/** Shared helpers for building dropdown option lists. */

export interface DropdownOption {
  value: string;
  label: string;
}

/** Convert a list of case IDs into dropdown options. */
export function toCaseOptions(cases: string[]): DropdownOption[] {
  return cases.map((c) => ({ value: c, label: c }));
}
