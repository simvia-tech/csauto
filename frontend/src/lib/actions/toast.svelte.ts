/**
 * Lightweight toast notifications.
 *
 * showToast() pushes a message; ToastManager.svelte renders the queue and
 * auto-dismisses each entry after its duration.
 */

export interface ToastItem {
  id: number;
  message: string;
  variant: "success" | "error";
}

let toasts = $state<ToastItem[]>([]);
let nextId = 0;

export function getToasts(): readonly ToastItem[] {
  return toasts;
}

export function showToast(
  message: string,
  variant: "success" | "error" = "success",
  durationMs = 3500,
): void {
  const id = ++nextId;
  toasts = [...toasts, { id, message, variant }];
  setTimeout(() => dismissToast(id), durationMs);
}

export function dismissToast(id: number): void {
  toasts = toasts.filter((t) => t.id !== id);
}
