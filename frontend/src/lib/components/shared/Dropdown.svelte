<!--
  Dropdown — fully custom single-select dropdown matching EDF/Simvia design.

  Closes on selection, outside click, or Escape.
  Uses fixed positioning to escape overflow-clip ancestors.
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
    value?: string;
    onchange?: (value: string) => void;
    placeholder?: string;
    class?: string;
    buttonClass?: string;
  }

  let {
    options,
    value = "",
    onchange,
    placeholder = "Select...",
    class: className = "",
    buttonClass = "",
  }: Props = $props();

  let open = $state(false);
  let buttonEl: HTMLButtonElement | undefined = $state();
  let listEl: HTMLUListElement | undefined = $state();
  let listStyle = $state("");

  let selectedLabel = $derived(
    options.find((o) => o.value === value)?.label ?? placeholder,
  );

  function select(optValue: string) {
    open = false;
    onchange?.(optValue);
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
    listStyle = `position:fixed; top:${top}px; left:${left}px; width:${rect.width}px; z-index:9999;`;
  }

  async function toggleOpen() {
    open = !open;
    if (open) {
      await tick();
      updateListPosition();
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      open = false;
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
    class={buttonClass ||
      "flex items-center justify-between gap-1.5 w-full h-[30px] cursor-pointer bg-control border border-border rounded-md text-[13px] text-ink font-normal pl-2.5 pr-2 transition-colors duration-150 hover:bg-control-hover focus:outline-none focus:border-accent"}
    onmousedown={(e) => {
      e.stopPropagation();
      toggleOpen();
    }}
    aria-haspopup="listbox"
    aria-expanded={open}
  >
    <span class="truncate">{selectedLabel}</span>
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
    <ul
      bind:this={listEl}
      role="listbox"
      class="bg-control border border-border rounded-md max-h-[240px] overflow-y-auto py-1"
      style={listStyle}
    >
      {#each options as opt (opt.value)}
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <li
          role="option"
          aria-selected={opt.value === value}
          tabindex={0}
          class="px-2.5 py-1.5 text-[13px] cursor-pointer transition-colors duration-100
						{opt.value === value
            ? 'option-selected font-bold'
            : 'text-ink hover:bg-control-hover'}"
          onmousedown={(e) => {
            e.stopPropagation();
            select(opt.value);
          }}
        >
          {opt.label}
        </li>
      {/each}
    </ul>
  </Portal>
{/if}
