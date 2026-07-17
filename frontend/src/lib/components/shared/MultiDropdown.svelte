<!--
  MultiDropdown — custom multi-select dropdown with checkboxes.

  Stays open while interacting with items. Closes on outside click or button toggle.
  Uses fixed positioning via Portal to escape overflow-clip ancestors.
-->
<script lang="ts">
  import { tick } from "svelte";
  import Icon from "./Icon.svelte";
  import Portal from "./Portal.svelte";
  import { ChevronDown } from "lucide-svelte";

  interface Option {
    value: string;
    label: string;
  }

  interface Props {
    options: Option[];
    selected?: string[];
    onchange?: (selected: string[]) => void;
    placeholder?: string;
    class?: string;
  }

  let {
    options,
    selected = [],
    onchange,
    placeholder = "Select...",
    class: className = "",
  }: Props = $props();

  let open = $state(false);
  let buttonEl: HTMLButtonElement | undefined = $state();
  let listEl: HTMLDivElement | undefined = $state();
  let listStyle = $state("");

  let selectedSet = $derived(new Set(selected));

  let summary = $derived.by(() => {
    if (selected.length === 0) return placeholder;
    if (selected.length === options.length) return `All (${options.length})`;
    if (selected.length <= 2)
      return selected
        .map((v) => options.find((o) => o.value === v)?.label ?? v)
        .join(", ");
    return `${selected.length} selected`;
  });

  function toggle(optValue: string) {
    const next = new Set(selectedSet);
    if (next.has(optValue)) next.delete(optValue);
    else next.add(optValue);
    onchange?.([...next]);
  }

  function selectAll() {
    onchange?.(options.map((o) => o.value));
  }

  function selectNone() {
    onchange?.([]);
  }

  function updateListPosition() {
    if (!buttonEl || !listEl) return;
    const rect = buttonEl.getBoundingClientRect();
    const listH = listEl.offsetHeight;
    const gap = 4;
    const spaceBelow = window.innerHeight - rect.bottom - gap;
    const flipUp = spaceBelow < listH && rect.top - gap > spaceBelow;
    const top = flipUp ? rect.top - gap - listH : rect.bottom + gap;
    const left = Math.min(rect.left, window.innerWidth - rect.width);
    listStyle = `position:fixed; top:${top}px; left:${left}px; min-width:${rect.width}px; z-index:9999;`;
  }

  async function toggleOpen() {
    open = !open;
    if (open) {
      await tick();
      updateListPosition();
    }
  }

  function handleMousedown(e: MouseEvent) {
    if (
      open &&
      buttonEl &&
      !buttonEl.contains(e.target as Node) &&
      listEl &&
      !listEl.contains(e.target as Node)
    ) {
      open = false;
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      open = false;
    }
  }
</script>

<svelte:window
  onmousedown={handleMousedown}
  onkeydown={handleKeydown}
  onscroll={() => {
    if (open) open = false;
  }}
/>

<div class="relative inline-flex {className}">
  <button
    bind:this={buttonEl}
    type="button"
    class="flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-control border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-control-hover focus:outline-none focus:border-accent"
    onmousedown={(e) => {
      e.stopPropagation();
      toggleOpen();
    }}
    aria-haspopup="listbox"
    aria-expanded={open}
  >
    <span class="truncate">{summary}</span>
    <span
      class="text-muted shrink-0 transition-transform duration-150 {open
        ? 'rotate-180'
        : ''}"
    >
      <Icon icon={ChevronDown} size={14} />
    </span>
  </button>
</div>

{#if open}
  <Portal>
    <div
      bind:this={listEl}
      class="bg-control border border-border rounded-md max-h-[260px] overflow-y-auto py-1 w-max"
      style={listStyle}
    >
      <div class="flex gap-2 px-2.5 py-1 border-b border-separator">
        <button
          class="link-btn"
          onmousedown={(e) => {
            e.stopPropagation();
            selectAll();
          }}>All</button
        >
        <button
          class="link-btn"
          onmousedown={(e) => {
            e.stopPropagation();
            selectNone();
          }}>None</button
        >
      </div>
      {#each options as opt (opt.value)}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="flex items-center gap-2 px-2.5 py-1.5 cursor-pointer transition-colors duration-100 hover:bg-control-hover select-none"
          onmousedown={(e) => {
            e.stopPropagation();
            toggle(opt.value);
          }}
        >
          <span
            class="inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] rounded border-2 transition-colors duration-100
						{selectedSet.has(opt.value)
              ? 'bg-accent border-accent text-accent-fg'
              : 'bg-control border-border'}"
          >
            {#if selectedSet.has(opt.value)}
              <svg viewBox="0 0 16 16" fill="none" class="w-[10px] h-[10px]">
                <path
                  d="M3.5 8.5L6.5 11.5L12.5 4.5"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            {/if}
          </span>
          <span class="text-[13px] text-ink">{opt.label}</span>
        </div>
      {/each}
    </div>
  </Portal>
{/if}
