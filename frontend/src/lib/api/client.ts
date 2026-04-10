/**
 * Core HTTP client for the csauto API.
 *
 * Wraps fetch() to inject the auth token and handle 401 responses by
 * prompting the user for a new token, then retrying the request once.
 */

import { getToken, setToken } from "$lib/stores/auth.svelte";
import { appPrompt } from "$lib/actions/dialog.svelte";

let authPromptActive: Promise<string | null> | null = null;

/**
 * Authenticated fetch wrapper.
 * Adds the X-CSAUTO-TOKEN header from localStorage and retries once on 401.
 */
export async function apiFetch(
  url: string,
  options: RequestInit = {},
): Promise<Response> {
  const headers = new Headers(options.headers);
  const token = getToken();
  if (token) {
    headers.set("X-CSAUTO-TOKEN", token);
  }

  const res = await fetch(url, { ...options, headers });

  if (res.status === 401) {
    if (!authPromptActive) {
      authPromptActive = appPrompt(
        "API token required:",
        token,
        "Authentication",
      );
    }
    const newToken = await authPromptActive;
    authPromptActive = null;
    if (newToken === null) return res;
    setToken(newToken);
    headers.set("X-CSAUTO-TOKEN", newToken);
    return fetch(url, { ...options, headers });
  }

  return res;
}

/**
 * Shorthand for GET requests that return JSON.
 * Throws if the response is not ok.
 */
export async function apiGet<T>(url: string): Promise<T> {
  const res = await apiFetch(url);
  if (!res.ok) {
    throw new Error(`GET ${url} failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

/**
 * Shorthand for GET requests that return plain text (e.g. SVG, diff, tail).
 */
export async function apiGetText(url: string): Promise<string> {
  const res = await apiFetch(url);
  if (!res.ok) {
    throw new Error(`GET ${url} failed: ${res.status}`);
  }
  return res.text();
}

/**
 * Shorthand for POST requests with a JSON body.
 */
export async function apiPost<T = unknown>(
  url: string,
  body: unknown,
): Promise<T> {
  const res = await apiFetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => res.statusText);
    throw new Error(`POST ${url} failed: ${res.status} — ${detail}`);
  }
  return res.json() as Promise<T>;
}
