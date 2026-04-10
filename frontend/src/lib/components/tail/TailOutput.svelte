<!--
  TailOutput — rendered log lines with severity coloring, search highlighting, and new-line flash.
-->
<script lang="ts">
  import { tick } from "svelte";
  import { escapeHtml } from "$lib/utils/escapeHtml";
  import type { Severity } from "$lib/utils/severity";

  interface TailLine {
    text: string;
    index: number;
    severity: Severity;
    isNew: boolean;
  }

  interface Props {
    lines: TailLine[];
    searchQuery: string;
    autoScroll: boolean;
  }

  let { lines, searchQuery, autoScroll }: Props = $props();

  let paneEl: HTMLElement | undefined = $state();

  /** Highlight search matches in a line */
  function highlightLine(text: string): string {
    const escaped = escapeHtml(text);
    if (!searchQuery.trim()) return escaped;
    try {
      const re = new RegExp(`(${searchQuery})`, "gi");
      return escaped.replace(re, '<span class="tail-query-hit">$1</span>');
    } catch {
      return escaped;
    }
  }

  function severityClass(sev: Severity): string {
    if (sev === "error") return "tail-sev-error";
    if (sev === "warn") return "tail-sev-warn";
    if (sev === "info") return "tail-sev-info";
    return "";
  }

  /** Check if user is near the bottom of the pane (within 24px) */
  function isNearBottom(): boolean {
    if (!paneEl) return true;
    return paneEl.scrollHeight - paneEl.scrollTop - paneEl.clientHeight <= 24;
  }

  let wasNearBottom = $state(true);

  /** Track scroll position before new lines arrive */
  function handleScroll() {
    wasNearBottom = isNearBottom();
  }

  /* Auto-scroll to bottom only when user was already near the bottom */
  $effect(() => {
    if (autoScroll && lines.length > 0 && paneEl && wasNearBottom) {
      tick().then(() => {
        if (paneEl) paneEl.scrollTop = paneEl.scrollHeight;
      });
    }
  });
</script>

<!-- @html is safe: highlightLine() calls escapeHtml() before injecting search highlight spans -->
<pre
  class="code-box tail-pane"
  bind:this={paneEl}
  onscroll={handleScroll}>{#each lines as line (line.index)}<div
      class="tail-line {severityClass(line.severity)} {line.isNew
        ? 'tail-new'
        : ''}">{@html highlightLine(line.text)}</div>{/each}</pre>
