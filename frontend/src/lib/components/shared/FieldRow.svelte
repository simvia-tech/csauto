<!--
  FieldRow — a horizontal row of form fields with flex-wrap layout.
  Direct replacement for the `.field-row` CSS class.
-->
<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="flex gap-3 flex-wrap items-end mb-2.5">
  {@render children()}
</div>
