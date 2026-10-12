<!--
  SectionNav: a row of links to the dashboard's panels, under the header.
  Click (or Alt+1..9) scrolls to a panel; the panel in view is highlighted.
-->
<script lang="ts">
  import { onMount } from "svelte";

  interface Section {
    id: string;
    label: string;
  }

  let { sections }: { sections: Section[] } = $props();

  let active = $state("");
  let navEl = $state<HTMLElement | null>(null);
  // While a jump scrolls the page, its target stays highlighted: the panels
  // passed on the way, or one that cannot reach the top, must not take over.
  let jumpingTo = "";
  let jumpTimer: ReturnType<typeof setTimeout> | undefined;

  function jump(id: string) {
    active = id;
    jumpingTo = id;
    clearTimeout(jumpTimer);
    jumpTimer = setTimeout(() => (jumpingTo = ""), 1500);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /** The panel in view: the last one whose top is under the bar, or the last one at the bottom of the page. */
  function update() {
    if (jumpingTo) return;
    const line = (navEl?.getBoundingClientRect().bottom ?? 0) + 12;
    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4;
    let current = sections[0]?.id ?? "";
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element && element.getBoundingClientRect().top <= line)
        current = section.id;
    }
    active =
      atBottom && window.scrollY > 0
        ? (sections[sections.length - 1]?.id ?? current)
        : current;
  }

  function onScrollEnd() {
    if (jumpingTo) {
      jumpingTo = "";
      clearTimeout(jumpTimer);
    }
  }

  let frame = 0;
  function onScroll() {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(update);
  }

  function onKeydown(event: KeyboardEvent) {
    if (!event.altKey || event.ctrlKey || event.metaKey) return;
    const index = Number(event.key) - 1;
    if (Number.isInteger(index) && index >= 0 && index < sections.length) {
      event.preventDefault();
      jump(sections[index].id);
    }
  }

  onMount(() => {
    update();
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(jumpTimer);
    };
  });
</script>

<svelte:window
  onkeydown={onKeydown}
  onscroll={onScroll}
  onscrollend={onScrollEnd}
  onresize={onScroll}
/>

{#if sections.length > 1}
  <nav
    bind:this={navEl}
    class="section-nav flex gap-1 overflow-x-auto border-b border-border bg-card px-[max(3vw,calc((100vw-1200px)/2))] py-1.5"
    aria-label="Dashboard sections"
  >
    {#each sections as section, index (section.id)}
      <button
        type="button"
        class="shrink-0 cursor-pointer rounded-md px-3 py-1 text-sm whitespace-nowrap transition-colors {active ===
        section.id
          ? 'bg-accent text-accent-fg'
          : 'text-muted hover:bg-control-hover hover:text-ink'}"
        title={`Alt+${index + 1}`}
        aria-current={active === section.id ? "true" : undefined}
        onclick={() => jump(section.id)}
      >
        {section.label}
      </button>
    {/each}
  </nav>
{/if}
