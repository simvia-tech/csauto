<!--
  Checkbox — custom styled checkbox matching EDF/Simvia design.

  Supports a ternary "indeterminate" state for select-all headers.
-->
<script lang="ts">
  interface Props {
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    onchange?: (checked: boolean) => void;
    size?: number;
    label?: string;
    labelFirst?: boolean;
  }

  let {
    checked = false,
    indeterminate = false,
    disabled = false,
    onchange,
    size = 16,
    label = "",
    labelFirst = false,
  }: Props = $props();

  function handleClick(e: MouseEvent) {
    e.stopPropagation();
    if (disabled) return;
    const next = indeterminate ? true : !checked;
    onchange?.(next);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      handleClick(e as unknown as MouseEvent);
    }
  }
</script>

{#snippet box()}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <span
    class="inline-flex items-center justify-center rounded border-2 cursor-pointer transition-colors duration-100 shrink-0
			{disabled ? 'opacity-40 cursor-not-allowed' : ''}
			{checked || indeterminate
      ? 'bg-accent border-accent text-accent-fg'
      : 'bg-control border-border hover:border-accent'}"
    style="width: {size}px; height: {size}px;"
    role="checkbox"
    aria-checked={indeterminate ? "mixed" : checked}
    aria-disabled={disabled}
    tabindex={disabled ? -1 : 0}
    onclick={handleClick}
    onkeydown={handleKeydown}
  >
    {#if checked && !indeterminate}
      <svg
        viewBox="0 0 16 16"
        fill="none"
        style="width: {size - 4}px; height: {size - 4}px;"
      >
        <path
          d="M3.5 8.5L6.5 11.5L12.5 4.5"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    {:else if indeterminate}
      <svg
        viewBox="0 0 16 16"
        fill="none"
        style="width: {size - 4}px; height: {size - 4}px;"
      >
        <path
          d="M4 8H12"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
        />
      </svg>
    {/if}
  </span>
{/snippet}

{#if label}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <span
    class="text-xs text-muted inline-flex items-center gap-1.5 cursor-pointer"
    onclick={handleClick}
    onkeydown={handleKeydown}
  >
    {#if labelFirst}<span>{label}</span
      >{@render box()}{:else}{@render box()}<span>{label}</span>{/if}
  </span>
{:else}
  {@render box()}
{/if}
