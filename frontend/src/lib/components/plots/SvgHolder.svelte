<!--
  SvgHolder — embeds SVG content from the API.

  Shows an empty message when no content is available.
-->
<script lang="ts">
  interface Props {
    id: string;
    svgHtml: string;
    emptyMessage?: string;
  }

  let { id, svgHtml, emptyMessage = "" }: Props = $props();
</script>

<div
  class="border border-border rounded-lg bg-white w-full max-w-[920px] p-2.5"
  {id}
>
  {#if svgHtml}
    {@html svgHtml}
  {:else}
    <div class="flex items-center justify-center aspect-[900/500]">
      <span class="text-sm text-muted italic"
        >{emptyMessage || "No data to display."}</span
      >
    </div>
  {/if}
</div>

<style>
  div :global(svg) {
    display: block;
    max-width: 100%;
    height: auto;
  }
</style>
