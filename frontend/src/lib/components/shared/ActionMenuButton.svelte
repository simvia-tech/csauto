<!--
  ActionMenuButton — a small "More" button that opens a fixed-position dropdown
  of action items (label + icon + onClick), e.g. secondary case-control actions.

  Closes on selection, outside click, scroll, or Escape.
-->
<script lang="ts">
  import { tick, type Component } from "svelte";
  import Icon from "./Icon.svelte";
  import Portal from "./Portal.svelte";
  import Button from "./Button.svelte";
  import { Ellipsis } from "lucide-svelte";

  interface MenuItem {
    label: string;
    icon: Component;
    onClick: () => void;
    disabled?: boolean;
  }

  interface Props {
    label?: string;
    items: MenuItem[];
  }

  let { label = "More", items }: Props = $props();

  let open = $state(false);
  let buttonWrapEl: HTMLSpanElement | undefined = $state();
  let listEl: HTMLUListElement | undefined = $state();
  let listStyle = $state("");

  function updateListPosition() {
    if (!buttonWrapEl || !listEl) return;
    const rect = buttonWrapEl.getBoundingClientRect();
    const listH = listEl.offsetHeight;
    const gap = 4;
    const spaceBelow = window.innerHeight - rect.bottom - gap;
    const flipUp = spaceBelow < listH && rect.top - gap > spaceBelow;
    const top = flipUp ? rect.top - gap - listH : rect.bottom + gap;
    const left = Math.min(rect.left, window.innerWidth - 180);
    listStyle = `position:fixed; top:${top}px; left:${left}px; min-width:170px; z-index:9999;`;
  }

  async function toggleOpen() {
    open = !open;
    if (open) {
      await tick();
      updateListPosition();
    }
  }

  function select(item: MenuItem) {
    if (item.disabled) return;
    open = false;
    item.onClick();
  }

  function handleMousedown(e: MouseEvent) {
    if (
      open &&
      buttonWrapEl &&
      !buttonWrapEl.contains(e.target as Node) &&
      listEl &&
      !listEl.contains(e.target as Node)
    ) {
      open = false;
    }
  }
</script>

<svelte:window
  onmousedown={handleMousedown}
  onkeydown={(e) => {
    if (e.key === "Escape") open = false;
  }}
  onscroll={() => {
    if (open) open = false;
  }}
/>

<span bind:this={buttonWrapEl} class="inline-flex">
  <Button variant="secondary" size="sm" onclick={toggleOpen}>
    <Icon icon={Ellipsis} />
    {label}
  </Button>
</span>

{#if open}
  <Portal>
    <ul
      bind:this={listEl}
      role="menu"
      class="bg-white border border-border rounded-md p-1 grid gap-0.5 shadow-lg"
      style={listStyle}
    >
      {#each items as item (item.label)}
        <li role="none">
          <button
            role="menuitem"
            type="button"
            disabled={item.disabled}
            aria-disabled={item.disabled}
            class="w-full flex items-center gap-2 text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] text-ink transition-[background] duration-[120ms] ease-in-out disabled:opacity-40 disabled:pointer-events-none {item.disabled
              ? ''
              : 'cursor-pointer hover:bg-edf-gris-clair hover:border-border'}"
            onmousedown={(e) => {
              e.stopPropagation();
              select(item);
            }}
          >
            <Icon icon={item.icon} size={14} />
            {item.label}
          </button>
        </li>
      {/each}
    </ul>
  </Portal>
{/if}
