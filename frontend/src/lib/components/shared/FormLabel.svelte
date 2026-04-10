<!--
  FormLabel — styled label wrapper for form fields.
-->
<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    text: string;
    children: Snippet;
  }

  let { text, children }: Props = $props();
</script>

<label
  class="flex flex-col gap-1.5 text-xs text-muted font-normal cursor-pointer"
>
  {text}
  {@render children()}
</label>
