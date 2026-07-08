<!--
  ToastManager — renders queued toast notifications (see toast.svelte.ts).

  Placed once in +page.svelte, alongside DialogManager.
-->
<script lang="ts">
  import { getToasts, dismissToast } from "$lib/actions/toast.svelte";
  import Portal from "./Portal.svelte";

  let toasts = $derived(getToasts());
</script>

<Portal>
  <div
    class="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2 items-end pointer-events-none"
  >
    {#each toasts as toast (toast.id)}
      <div
        role="status"
        class="pointer-events-auto max-w-[320px] px-4 py-2.5 rounded-md shadow-lg text-sm font-semibold text-white cursor-pointer {toast.variant ===
        'success'
          ? 'bg-edf-vert-fonce'
          : 'bg-edf-orange-fonce'}"
        onclick={() => dismissToast(toast.id)}
      >
        {toast.message}
      </div>
    {/each}
  </div>
</Portal>
