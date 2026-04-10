<!--
  CardShell — reusable card wrapper with eyebrow, title, and action slot.

  Usage:
    <CardShell eyebrow="Monitoring" title="Status" wide>
      {#snippet actions()}<button class="btn">Refresh</button>{/snippet}
      <StatusTable />
    </CardShell>
-->
<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    eyebrow?: string;
    title?: string;
    titleSlot?: Snippet;
    wide?: boolean;
    id?: string;
    actions?: Snippet;
    children: Snippet;
  }

  let {
    eyebrow = "",
    title = "",
    titleSlot,
    wide = false,
    id,
    actions,
    children,
  }: Props = $props();
</script>

<section
  class="{wide
    ? 'col-span-12'
    : 'col-span-6'} bg-card border border-border rounded-[10px] p-[16px_18px_18px] relative overflow-clip animate-rise"
  {id}
>
  <div class="absolute top-0 left-0 right-0 h-[3px] bg-edf-orange-moyen"></div>
  {#if eyebrow || title || titleSlot || actions}
    <div
      class="flex justify-between items-center gap-3 pb-3 border-b border-[rgba(51,51,51,0.08)] mb-3.5"
    >
      {#if titleSlot}
        {@render titleSlot()}
      {:else}
        <div>
          {#if eyebrow}<div class="text-xs text-muted font-normal">
              {eyebrow}
            </div>{/if}
          {#if title}<h2
              class="mt-1 mb-0 text-lg font-bold tracking-tight text-edf-bleu-fonce"
            >
              {title}
            </h2>{/if}
        </div>
      {/if}
      {#if actions}
        <div class="flex items-center gap-2.5 flex-wrap">
          {@render actions()}
        </div>
      {/if}
    </div>
  {/if}
  {@render children()}
</section>
