/**
 * Auth token store, backed by localStorage.
 *
 * The token is sent as X-CSAUTO-TOKEN on every API request.
 * When the server returns 401, the API client prompts for a new token.
 */

const STORAGE_KEY = "csauto_token";

/**
 * A `?token=` query parameter (used by the VS Code extension to hand over the
 * server token) takes precedence over localStorage and is stripped from the
 * URL after being stored.
 */
function initialToken(): string {
  const params = new URLSearchParams(window.location.search);
  const urlToken = params.get("token");
  if (urlToken === null) {
    return localStorage.getItem(STORAGE_KEY) ?? "";
  }
  if (urlToken) {
    localStorage.setItem(STORAGE_KEY, urlToken);
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
  const url = new URL(window.location.href);
  url.searchParams.delete("token");
  window.history.replaceState(null, "", url.toString());
  return urlToken;
}

let token = $state(initialToken());

export function getToken(): string {
  return token;
}

export function setToken(value: string): void {
  token = value;
  if (value) {
    localStorage.setItem(STORAGE_KEY, value);
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function clearToken(): void {
  setToken("");
}
