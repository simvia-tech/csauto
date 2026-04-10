/**
 * Typed localStorage helpers with JSON serialization.
 */

/** Read and parse JSON from localStorage. Returns fallback on any error. */
export function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/** Serialize and write JSON to localStorage. */
export function writeJson<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
