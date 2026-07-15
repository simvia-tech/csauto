<!--
  AppDialog — generic alert / confirm / prompt dialog.

  Renders based on the mode ('alert', 'confirm', 'prompt').
  Enter confirms, Escape cancels, backdrop click cancels.
-->
<script lang="ts">
  import { closeDialog } from "$lib/actions/dialog.svelte";
  import DialogShell from "./DialogShell.svelte";
  import Button from "$lib/components/shared/Button.svelte";

  interface Props {
    mode: "alert" | "confirm" | "prompt";
    title: string;
    message: string;
    confirmLabel?: string;
    confirmVariant?: "primary" | "secondary" | "warning" | "run" | "danger";
    value?: string;
    placeholder?: string;
    multiline?: boolean;
  }

  let {
    mode,
    title,
    message,
    confirmLabel = "OK",
    confirmVariant = "primary",
    value = "",
    placeholder = "",
    multiline = false,
  }: Props = $props();

  const initialValue = value;
  let inputValue = $state(initialValue);
  let inputEl: HTMLInputElement | HTMLTextAreaElement | undefined = $state();
  let confirmBtnWrap: HTMLSpanElement | undefined = $state();

  /* Focus the input (prompt) or the confirm button on mount */
  $effect(() => {
    if (mode === "prompt" && inputEl) {
      inputEl.focus();
      if ("select" in inputEl) inputEl.select();
    } else if (confirmBtnWrap) {
      confirmBtnWrap.querySelector("button")?.focus();
    }
  });

  function confirm() {
    if (mode === "prompt") closeDialog(inputValue);
    else if (mode === "confirm") closeDialog(true);
    else closeDialog();
  }

  function cancel() {
    if (mode === "confirm") closeDialog(false);
    else if (mode === "prompt") closeDialog(null);
    else closeDialog();
  }
</script>

<DialogShell
  {title}
  titleId="app-dialog-title"
  onConfirm={multiline ? undefined : confirm}
  onCancel={cancel}
>
  <p class="m-0 mb-2.5 text-ink whitespace-pre-wrap leading-[1.45]">
    {message}
  </p>

  {#if mode === "prompt"}
    <div class="mb-4.5">
      {#if multiline}
        <textarea
          bind:this={inputEl}
          bind:value={inputValue}
          {placeholder}
          class="w-full !min-h-[80px]"
          rows="3"></textarea>
      {:else}
        <input
          bind:this={inputEl}
          bind:value={inputValue}
          {placeholder}
          class="w-full"
        />
      {/if}
    </div>
  {/if}

  {#snippet footer()}
    {#if mode !== "alert"}
      <Button variant="secondary" onclick={cancel}>Cancel</Button>
    {/if}
    <span bind:this={confirmBtnWrap}
      ><Button variant={confirmVariant} onclick={confirm}>{confirmLabel}</Button
      ></span
    >
  {/snippet}
</DialogShell>
