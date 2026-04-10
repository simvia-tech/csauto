/**
 * Severity classification for log lines.
 *
 * Used by the tail viewer and error scanner to color-code lines
 * based on known error/warning patterns from code_saturne output.
 */

const ERROR_RE =
  /(fatal error|error detected|error reading|error writing|segmentation fault|sigterm|sigsegv|sigkill|abort|killed|terminated|core dumped|traceback|exception|errno)/i;

const WARN_RE =
  /(warning|divergence|non-convergence|clipping|negative|nan detected|overflow|underflow)/i;

export type Severity = "error" | "warn" | "info" | "none";

/** Classify a log line by severity based on pattern matching. */
export function classifySeverity(line: string): Severity {
  if (ERROR_RE.test(line)) return "error";
  if (WARN_RE.test(line)) return "warn";
  return "none";
}

/** Check if severity passes a filter ('all' shows everything). */
export function passesSeverityFilter(
  severity: Severity,
  filter: string,
): boolean {
  if (filter === "all" || filter === "") return true;
  if (filter === "info") return severity !== "none";
  return severity === filter;
}
