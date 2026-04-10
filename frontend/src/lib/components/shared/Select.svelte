<!--
  Select — custom styled dropdown matching EDF/Simvia design.

  Wraps a native <select> with consistent styling and a cursor pointer.
-->
<script lang="ts">
  import type { Snippet } from "svelte";
  import Icon from "./Icon.svelte";
  import { ChevronDown } from "lucide-svelte";

  interface Props {
    value?: string;
    onchange?: (e: Event) => void;
    multiple?: boolean;
    size?: number;
    id?: string;
    class?: string;
    children: Snippet;
  }

  let {
    value = "",
    onchange,
    multiple = false,
    size,
    id,
    class: className = "",
    children,
  }: Props = $props();
</script>

<div class="relative inline-flex {className}">
  <select
    class="appearance-none cursor-pointer bg-white border border-border rounded-md text-[13px] text-ink font-normal
			{multiple ? 'py-1.5 px-2.5' : 'py-1.5 pl-2.5 pr-7'}
			transition-colors duration-150 focus:outline-none focus:border-edf-bleu-moyen
			!min-w-0"
    {value}
    {onchange}
    {multiple}
    {size}
    {id}
  >
    {@render children()}
  </select>
  {#if !multiple}
    <div
      class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted"
    >
      <Icon icon={ChevronDown} size={14} />
    </div>
  {/if}
</div>
