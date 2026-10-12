<!--
  A themed select: VS Code Aster's Dropdown (webviews/shared/components/ui)
  with its trigger button built in, optional group headings, a muted detail
  on the right of each option, and arrow-key navigation.
-->
<script lang="ts">
  export interface SelectOption {
    value: string;
    label: string;
    /** Muted text on the right, e.g. a size or a date. */
    detail?: string;
    /** Heading this option is listed under; options of one group must be contiguous. */
    group?: string;
  }

  interface Props {
    id?: string;
    options: SelectOption[];
    value: string;
    onSelect: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
  }

  let { id, options, value, onSelect, placeholder = "Choose…", disabled = false }: Props = $props();

  let open = $state(false);
  let active = $state(-1);
  let triggerEl = $state<HTMLButtonElement | null>(null);
  let panelEl = $state<HTMLElement | null>(null);

  const current = $derived(options.find((option) => option.value === value));

  $effect(() => {
    if (!open || !panelEl || !triggerEl) {
      return;
    }
    const rect = triggerEl.getBoundingClientRect();
    const panelW = Math.max(panelEl.offsetWidth, rect.width);
    const panelH = panelEl.offsetHeight;
    const left = Math.max(4, Math.min(rect.left, window.innerWidth - panelW - 4));
    const openUp = window.innerHeight - rect.bottom < panelH + 8 && rect.top > panelH + 8;
    panelEl.style.left = `${left}px`;
    panelEl.style.top = `${openUp ? rect.top - panelH - 4 : rect.bottom + 4}px`;
    panelEl.style.minWidth = `${rect.width}px`;
    panelEl.querySelector<HTMLElement>('[data-active="true"]')?.scrollIntoView({ block: "nearest" });
  });

  function toggle(event: MouseEvent) {
    event.stopPropagation();
    open = !open;
    active = options.findIndex((option) => option.value === value);
  }

  function select(next: string) {
    onSelect(next);
    open = false;
    triggerEl?.focus();
  }

  function onKeydown(event: KeyboardEvent) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) {
        open = true;
        active = options.findIndex((option) => option.value === value);
        return;
      }
      const step = event.key === "ArrowDown" ? 1 : -1;
      active = (active + step + options.length) % options.length;
    } else if ((event.key === "Enter" || event.key === " ") && open && active >= 0) {
      event.preventDefault();
      select(options[active].value);
    } else if (event.key === "Escape" && open) {
      event.preventDefault();
      open = false;
    }
  }

  function portal(node: HTMLElement) {
    document.body.appendChild(node);
    return {
      destroy() {
        node.remove();
      },
    };
  }
</script>

<svelte:document onclick={() => (open = false)} />

<button
  {id}
  bind:this={triggerEl}
  type="button"
  class="flex w-full items-center justify-between gap-2 rounded-sm border bg-ui-input-bg px-2 py-1 text-left text-sm text-ui-input-fg focus:border-ui-focus focus:outline-none enabled:cursor-pointer enabled:hover:border-ui-focus disabled:opacity-50 {open
    ? 'border-ui-focus'
    : 'border-ui-input-border'}"
  aria-haspopup="listbox"
  aria-expanded={open}
  {disabled}
  onclick={toggle}
  onkeydown={onKeydown}
>
  <span class="truncate {current ? '' : 'text-ui-text-muted'}">{current?.label ?? placeholder}</span>
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" class="shrink-0 opacity-70 transition-transform {open ? 'rotate-180' : ''}">
    <path d="M3 6l5 5 5-5" />
  </svg>
</button>

{#if open}
  <div
    use:portal
    bind:this={panelEl}
    class="fixed z-[9999] max-h-[50vh] overflow-y-auto rounded border border-ui-border bg-ui-popup-bg py-[3px] shadow-[0_4px_16px_rgba(0,0,0,0.25)] no-scrollbar"
    role="listbox"
    tabindex="-1"
  >
    {#each options as option, index (option.value)}
      {#if option.group && option.group !== options[index - 1]?.group}
        <div class="px-2.5 pb-1 text-[0.7rem] font-semibold uppercase tracking-wide text-ui-text-muted {index > 0 ? 'mt-1 border-t border-ui-border pt-2' : 'pt-1'}">
          {option.group}
        </div>
      {/if}
      <div
        class="flex cursor-pointer items-center gap-2 px-2.5 py-[5px] text-xs whitespace-nowrap text-ui-fg hover:bg-ui-elem-hover {index === active ? 'bg-ui-elem-hover' : ''} {option.value === value ? 'font-semibold' : ''}"
        role="option"
        tabindex="-1"
        aria-selected={option.value === value}
        data-active={index === active}
        onclick={(event) => {
          event.stopPropagation();
          select(option.value);
        }}
        onkeydown={() => {}}
        onmouseenter={() => (active = index)}
      >
        <span class="w-2.5 shrink-0 text-[0.6rem] {option.value === value ? '' : 'opacity-0'}">✓</span>
        <span class="flex-1">{option.label}</span>
        {#if option.detail}<span class="pl-6 text-ui-text-muted">{option.detail}</span>{/if}
      </div>
    {/each}
  </div>
{/if}
