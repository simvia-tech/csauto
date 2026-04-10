<!--
  DiffViewer — side-by-side diff viewer parsed from unified diff output.

  Parses backend unified diff into left/right panels with context collapsing.
  Includes case and file dropdowns in the panel headers.
-->
<script lang="ts">
  import { tick } from "svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import { escapeHtml } from "$lib/utils/escapeHtml";
  import {
    parseDiff,
    type DiffRow,
    type DisplayItem,
  } from "$lib/utils/diffParser";

  interface Props {
    diffText: string;
    leftLabel: string;
    rightLabel: string;
    kind: string;
    search: string;
    loading?: boolean;
    onSearchChange: (value: string) => void;
  }

  let {
    diffText,
    leftLabel,
    rightLabel,
    kind,
    search,
    loading = false,
    onSearchChange,
  }: Props = $props();

  let wrapperEl: HTMLDivElement | undefined = $state();

  let displayItems = $derived.by(() => parseDiff(diffText));

  let hunkStarts = $derived.by(() => {
    const starts: number[] = [];
    displayItems.forEach((item, idx) => {
      if (item.hunkStart) starts.push(idx);
    });
    return starts;
  });

  let hasDiffs = $derived(hunkStarts.length > 0);

  /* Map each display item index to its hunk index (-1 if not in a diff hunk) */
  let itemHunkMap = $derived.by(() => {
    const map: number[] = new Array(displayItems.length).fill(-1);
    for (let h = 0; h < hunkStarts.length; h++) {
      let i = hunkStarts[h];
      while (
        i < displayItems.length &&
        displayItems[i].kind === "line" &&
        displayItems[i].row?.type !== "equal"
      ) {
        map[i] = h;
        i++;
      }
    }
    return map;
  });

  let hunkCursor = $state(-1);
  let prevDiffText = "";
  $effect(() => {
    if (diffText !== prevDiffText) {
      prevDiffText = diffText;
      hunkCursor = -1;
    }
  });

  /* Search match positions — indices of displayItems that contain a match */
  let searchMatches = $derived.by(() => {
    if (!search.trim()) return [];
    try {
      const re = new RegExp(search, "i");
      const matches: number[] = [];
      displayItems.forEach((item, idx) => {
        if (item.kind === "line" && item.row) {
          if (re.test(item.row.leftContent) || re.test(item.row.rightContent)) {
            matches.push(idx);
          }
        }
      });
      return matches;
    } catch {
      return [];
    }
  });

  let searchCursor = $state(-1);
  let prevSearch = "";
  $effect(() => {
    if (search !== prevSearch) {
      prevSearch = search;
      searchCursor = searchMatches.length > 0 ? 0 : -1;
    }
  });

  async function goToSearchMatch(idx: number) {
    searchCursor = idx;
    await tick();
    const matchIdx = searchMatches[idx];
    const el = leftPaneEl?.querySelector(
      `[data-item-idx="${matchIdx}"]`,
    ) as HTMLElement | null;
    if (el && leftPaneEl && rightPaneEl) {
      const paneRect = leftPaneEl.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const scrollTop =
        elRect.top -
        paneRect.top +
        leftPaneEl.scrollTop -
        leftPaneEl.clientHeight / 3;
      jumping = true;
      leftPaneEl.scrollTop = scrollTop;
      rightPaneEl.scrollTop = scrollTop;
      requestAnimationFrame(() => {
        jumping = false;
      });
    }
  }

  function prevSearchMatch() {
    if (searchCursor > 0) goToSearchMatch(searchCursor - 1);
  }

  function nextSearchMatch() {
    if (searchCursor < 0 && searchMatches.length > 0) goToSearchMatch(0);
    else if (searchCursor < searchMatches.length - 1)
      goToSearchMatch(searchCursor + 1);
  }

  /** @html is safe: escapeHtml() sanitizes content before regex-based highlight injection */
  function highlightSearch(text: string, isActiveMatch: boolean): string {
    const escaped = escapeHtml(text);
    if (!search.trim()) return escaped;
    try {
      const re = new RegExp(`(${search})`, "gi");
      const cls = isActiveMatch
        ? "bg-[rgba(255,178,16,0.6)] rounded-sm px-[1px]"
        : "bg-[rgba(255,178,16,0.1)] rounded-sm px-[1px]";
      return escaped.replace(re, `<span class="${cls}">$1</span>`);
    } catch {
      return escaped;
    }
  }

  function lineClass(type: string, side: "left" | "right"): string {
    if (type === "equal") return "";
    if (type === "del" && side === "left")
      return "bg-[rgba(214,67,10,0.08)] text-edf-orange-fonce";
    if (type === "del" && side === "right")
      return "bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce";
    if (type === "add" && side === "left") return "bg-edf-gris-clair";
    if (type === "add" && side === "right")
      return "bg-[rgba(48,122,16,0.08)] text-edf-vert-fonce";
    return "";
  }

  function gutterBg(type: string, side: "left" | "right"): string {
    if (type === "del" && side === "left") return "rgb(251,237,233)";
    if (type === "del" && side === "right") return "rgb(238,247,236)";
    if (type === "add" && side === "left") return "var(--color-edf-gris-clair)";
    if (type === "add" && side === "right") return "rgb(238,247,236)";
    return "white";
  }

  let leftPaneEl: HTMLDivElement | undefined = $state();
  let rightPaneEl: HTMLDivElement | undefined = $state();
  let syncing = false;
  let jumping = false;

  function syncScroll(source: "left" | "right") {
    if (syncing || jumping || !leftPaneEl || !rightPaneEl) return;
    syncing = true;
    if (source === "left") {
      rightPaneEl.scrollTop = leftPaneEl.scrollTop;
      rightPaneEl.scrollLeft = leftPaneEl.scrollLeft;
    } else {
      leftPaneEl.scrollTop = rightPaneEl.scrollTop;
      leftPaneEl.scrollLeft = rightPaneEl.scrollLeft;
    }
    requestAnimationFrame(() => {
      syncing = false;
    });
  }

  async function goToHunk(idx: number) {
    hunkCursor = idx;
    await tick();
    const el = leftPaneEl?.querySelector(
      `[data-hunk-start="${idx}"]`,
    ) as HTMLElement | null;
    if (el && leftPaneEl && rightPaneEl) {
      jumping = true;
      const paneRect = leftPaneEl.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const scrollTop =
        elRect.top -
        paneRect.top +
        leftPaneEl.scrollTop -
        leftPaneEl.clientHeight / 3;
      leftPaneEl.scrollTop = scrollTop;
      rightPaneEl.scrollTop = scrollTop;
      requestAnimationFrame(() => {
        jumping = false;
      });
    }
  }

  function prevHunk() {
    if (hunkCursor > 0) goToHunk(hunkCursor - 1);
  }

  function nextHunk() {
    if (hunkCursor < 0) goToHunk(0);
    else if (hunkCursor < hunkStarts.length - 1) goToHunk(hunkCursor + 1);
  }

  function handleLineClick(idx: number) {
    const h = itemHunkMap[idx];
    if (h >= 0) hunkCursor = h;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.target instanceof HTMLInputElement) return;
    if (e.key === "n" && !e.shiftKey) {
      e.preventDefault();
      nextHunk();
    } else if (e.key === "N" || (e.key === "n" && e.shiftKey)) {
      e.preventDefault();
      prevHunk();
    } else if (e.key === "j") {
      e.preventDefault();
      nextSearchMatch();
    } else if (e.key === "J" || (e.key === "j" && e.shiftKey)) {
      e.preventDefault();
      prevSearchMatch();
    }
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="border border-border rounded-lg overflow-hidden relative"
  bind:this={wrapperEl}
  tabindex="-1"
  onkeydown={handleKeydown}
>
  <div class="grid grid-cols-2">
    <div
      class="flex items-center gap-2 px-3 py-2 bg-[rgba(214,67,10,0.06)] border-b border-border"
    >
      <span class="text-[13px] font-bold text-edf-orange-fonce"
        >{leftLabel}</span
      >
      <span class="text-xs text-edf-orange-fonce">{kind}</span>
    </div>
    <div
      class="flex items-center gap-2 px-3 py-2 bg-[rgba(48,122,16,0.06)] border-b border-l border-border"
    >
      <span class="text-[13px] font-bold text-edf-vert-fonce">{rightLabel}</span
      >
      <span class="text-xs text-edf-vert-fonce">{kind}</span>
    </div>
  </div>

  <div
    class="flex items-center justify-between gap-3 px-3 py-1.5 bg-edf-gris-clair border-b border-border"
  >
    <div class="flex items-center gap-1">
      <input
        type="text"
        value={search}
        oninput={(e) => onSearchChange((e.target as HTMLInputElement).value)}
        onkeydown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            nextSearchMatch();
          }
        }}
        placeholder="Search..."
        class="w-[140px] text-xs"
      />
      {#if search.trim() && searchMatches.length > 0}
        <Button
          variant="secondary"
          size="sm"
          onclick={prevSearchMatch}
          disabled={searchCursor <= 0}>Prev</Button
        >
        <span class="text-xs min-w-[36px] text-center text-muted px-1.5"
          >{searchCursor >= 0 ? searchCursor + 1 : "–"} / {searchMatches.length} occurrence{searchMatches.length !==
          1
            ? "s"
            : ""}</span
        >
        <Button
          variant="secondary"
          size="sm"
          onclick={nextSearchMatch}
          disabled={searchCursor >= searchMatches.length - 1}>Next</Button
        >
      {:else if search.trim()}
        <span class="text-xs text-muted">No matches</span>
      {/if}
    </div>
    <div class="flex items-center gap-1">
      <Button
        variant="secondary"
        size="sm"
        onclick={prevHunk}
        disabled={hunkStarts.length === 0 || hunkCursor <= 0}>Prev</Button
      >
      <span class="text-xs font-bold min-w-[40px] text-center px-1.5"
        >{hunkCursor >= 0 ? hunkCursor + 1 : "–"} / {hunkStarts.length} diff{hunkStarts.length !==
        1
          ? "s"
          : ""}</span
      >
      <Button
        variant="secondary"
        size="sm"
        onclick={nextHunk}
        disabled={hunkStarts.length === 0 ||
          hunkCursor >= hunkStarts.length - 1}>Next</Button
      >
    </div>
  </div>

  {#snippet diffPaneContent(side: "left" | "right")}
    {#each displayItems as item, idx (idx)}
      {@const hunkIdx = hunkStarts.indexOf(idx)}
      {@const isActive =
        itemHunkMap[idx] >= 0 && itemHunkMap[idx] === hunkCursor}
      {@const lineNum =
        side === "left" ? item.row?.leftNum : item.row?.rightNum}
      {@const content =
        side === "left"
          ? (item.row?.leftContent ?? "")
          : (item.row?.rightContent ?? "")}
      {#if item.kind === "separator"}
        <div
          class="flex w-full bg-edf-gris-clair text-muted text-center py-0.5"
        >
          <span
            class="w-[40px] shrink-0 border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1] bg-edf-gris-clair"
          ></span>
          <span class="px-2 text-[11px]"
            >... {item.skipped} lines hidden ...</span
          >
        </div>
      {:else if item.row}
        <div
          class="flex w-full {lineClass(item.row.type, side)} {item.row.type !==
            'equal' || searchMatches.includes(idx)
            ? 'cursor-pointer'
            : ''}"
          style={isActive
            ? "background-color: rgba(16,87,200,0.12); color: rgb(16,87,200);"
            : ""}
          role={item.row.type !== "equal" || searchMatches.includes(idx)
            ? "button"
            : undefined}
          tabindex={item.row.type !== "equal" || searchMatches.includes(idx)
            ? 0
            : undefined}
          data-hunk-start={side === "left" && hunkIdx >= 0
            ? hunkIdx
            : undefined}
          data-item-idx={side === "left" ? idx : undefined}
          onclick={() => {
            if (item.row?.type !== "equal") handleLineClick(idx);
            const si = searchMatches.indexOf(idx);
            if (si >= 0) searchCursor = si;
          }}
          onkeydown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (item.row?.type !== "equal") handleLineClick(idx);
              const si = searchMatches.indexOf(idx);
              if (si >= 0) searchCursor = si;
            }
          }}
        >
          <span
            class="w-[40px] shrink-0 text-right pr-2 select-none border-r border-[rgba(51,51,51,0.08)] sticky left-0 z-[1]"
            style="background: {isActive
              ? 'rgb(16,87,200)'
              : gutterBg(item.row.type, side)}; color: {isActive
              ? 'white'
              : 'var(--color-muted)'};">{lineNum ?? ""}</span
          >
          <!-- @html is safe: highlightSearch calls escapeHtml before injecting spans -->
          <span class="px-2 whitespace-pre"
            >{@html highlightSearch(
              content,
              searchCursor >= 0 && searchMatches[searchCursor] === idx,
            )}</span
          >
        </div>
      {/if}
    {/each}
  {/snippet}

  {#if hasDiffs}
    <div class="grid grid-cols-2">
      <div
        class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6]"
        bind:this={leftPaneEl}
        onscroll={() => syncScroll("left")}
      >
        <div class="inline-block min-w-full">
          {@render diffPaneContent("left")}
        </div>
      </div>
      <div
        class="overflow-auto max-h-[500px] font-mono text-xs leading-[1.6] border-l border-border"
        bind:this={rightPaneEl}
        onscroll={() => syncScroll("right")}
      >
        <div class="inline-block min-w-full">
          {@render diffPaneContent("right")}
        </div>
      </div>
    </div>
  {:else}
    <p class="text-sm text-muted text-center py-8">Files are identical.</p>
  {/if}

  {#if loading}
    <div
      class="absolute inset-0 bg-white/60 flex items-center justify-center z-10"
    >
      <span class="text-sm text-muted">Loading...</span>
    </div>
  {/if}
</div>
