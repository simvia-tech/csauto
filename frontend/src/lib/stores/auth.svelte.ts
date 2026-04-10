/**
 * Auth token store, backed by localStorage.
 *
 * The token is sent as X-CSAUTO-TOKEN on every API request.
 * When the server returns 401, the API client prompts for a new token.
 */

const STORAGE_KEY = "csauto_token";

let token = $state(localStorage.getItem(STORAGE_KEY) ?? "");

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
