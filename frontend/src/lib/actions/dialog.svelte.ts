/**
 * Promise-based dialog manager.
 *
 * Components call openRunDialog(), appAlert(), etc. which set the reactive
 * dialog state and return a Promise. DialogManager.svelte reads this state
 * and renders the appropriate dialog. When the user confirms or cancels,
 * closeDialog() resolves the promise.
 */

import type { RunParams, RestartParams, CleanChoice } from "$lib/api/types";

export type DialogType =
  | "none"
  | "run"
  | "restart"
  | "clean"
  | "alert"
  | "confirm"
  | "prompt";

interface DialogState {
  type: DialogType;
  props: Record<string, unknown>;
  resolve: ((result: unknown) => void) | null;
}

let dialog = $state<DialogState>({ type: "none", props: {}, resolve: null });

/** Reactive accessor for the current dialog state. */
export function getDialog(): Readonly<DialogState> {
  return dialog;
}

/** Close the active dialog and resolve its promise. */
export function closeDialog(result: unknown = undefined): void {
  const { resolve } = dialog;
  dialog = { type: "none", props: {}, resolve: null };
  resolve?.(result);
}

/** Open the run dialog. Returns run params or null if cancelled. */
export function openRunDialog(cases: string[]): Promise<RunParams | null> {
  return new Promise((resolve) => {
    dialog = {
      type: "run",
      props: { cases },
      resolve: resolve as (r: unknown) => void,
    };
  });
}

/** Open the restart dialog. Returns restart params or null if cancelled. */
export function openRestartDialog(
  cases: string[],
): Promise<RestartParams | null> {
  return new Promise((resolve) => {
    dialog = {
      type: "restart",
      props: { cases },
      resolve: resolve as (r: unknown) => void,
    };
  });
}

/** Open the clean dialog. Returns clean choice or null if cancelled. */
export function openCleanDialog(cases: string[]): Promise<CleanChoice | null> {
  return new Promise((resolve) => {
    dialog = {
      type: "clean",
      props: { cases },
      resolve: resolve as (r: unknown) => void,
    };
  });
}

/** Show a simple alert. Resolves when the user clicks OK. */
export function appAlert(message: string, title = "Alert"): Promise<void> {
  return new Promise((resolve) => {
    dialog = {
      type: "alert",
      props: { title, message },
      resolve: () => resolve(),
    };
  });
}

/** Show a confirm dialog. Returns true if confirmed, false if cancelled. */
export function appConfirm(
  message: string,
  title = "Confirm",
  confirmLabel = "OK",
  confirmVariant = "primary",
): Promise<boolean> {
  return new Promise((resolve) => {
    dialog = {
      type: "confirm",
      props: { title, message, confirmLabel, confirmVariant },
      resolve: resolve as (r: unknown) => void,
    };
  });
}

/** Show a prompt dialog. Returns the input string or null if cancelled. */
export function appPrompt(
  message: string,
  value = "",
  title = "Input",
  placeholder = "",
  multiline = false,
): Promise<string | null> {
  return new Promise((resolve) => {
    dialog = {
      type: "prompt",
      props: { title, message, value, placeholder, multiline },
      resolve: resolve as (r: unknown) => void,
    };
  });
}
