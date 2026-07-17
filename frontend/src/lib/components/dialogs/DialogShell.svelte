<!--
  DialogShell — shared backdrop, container, title, keyboard, and dismiss logic
  for all modal dialogs (Run, Restart, Clean, App alert/confirm/prompt, Settings).

  Handles Escape to cancel, optional Enter to confirm, and backdrop click to dismiss.
-->
<script lang="ts">
  import type { Snippet } from "svelte";
  import { closeDialog } from "$lib/actions/dialog.svelte";
  import Portal from "$lib/components/shared/Portal.svelte";

  interface Props {
    title: string;
    titleId: string;
    subtitle?: string;
    /** Called on Enter key. Omit to disable Enter-to-confirm. */
    onConfirm?: () => void;
    /** Override the default cancel behavior (closeDialog(null)). */
    onCancel?: () => void;
    /** Max width of the dialog container (default: 520px). */
    maxWidth?: string;
    /** Wrap the dialog in a Portal (for dialogs outside the dialog manager). */
    portal?: boolean;
    children: Snippet;
    footer: Snippet;
  }

  let {
    title,
    titleId,
    subtitle,
    onConfirm,
    onCancel,
    maxWidth = "520px",
    portal = false,
    children,
    footer,
  }: Props = $props();

  function cancel() {
    if (onCancel) onCancel();
    else closeDialog(null);
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") cancel();
    else if (e.key === "Enter" && onConfirm) onConfirm();
  }

  let mouseDownOnBackdrop = false;

  function onBackdropMouseDown(e: MouseEvent) {
    mouseDownOnBackdrop =
      (e.target as HTMLElement).dataset.backdrop !== undefined;
  }

  function onBackdropClick(e: MouseEvent) {
    const onBackdrop = (e.target as HTMLElement).dataset.backdrop !== undefined;
    if (mouseDownOnBackdrop && onBackdrop) cancel();
    mouseDownOnBackdrop = false;
  }
</script>

{#snippet dialogContent()}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 bg-scrim backdrop-blur-sm flex items-center justify-center p-4 z-50"
    data-backdrop
    onkeydown={onKeydown}
    onmousedown={onBackdropMouseDown}
    onclick={onBackdropClick}
  >
    <div
      class="w-[min({maxWidth},96vw)] bg-control border border-border rounded-(--radius-card) p-4.5"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div class="mb-3.5 grid gap-1">
        <div class="text-lg font-bold text-edf-bleu-fonce" id={titleId}>
          {title}
        </div>
        {#if subtitle}
          <div class="text-xs text-muted font-light">{subtitle}</div>
        {/if}
      </div>

      {@render children()}

      <div class="flex justify-end gap-2">
        {@render footer()}
      </div>
    </div>
  </div>
{/snippet}

{#if portal}
  <Portal>
    {@render dialogContent()}
  </Portal>
{:else}
  {@render dialogContent()}
{/if}
