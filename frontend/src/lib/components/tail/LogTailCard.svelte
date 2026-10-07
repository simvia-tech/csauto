<!--
  LogTailCard: live log tailing with severity filtering and search highlighting.

  Features:
  - Case and file selector (the server lists the case's log files, best first)
  - Line count control
  - Severity filter (all / error / warn / info), severities computed by the
    server with the solver's anomaly patterns
  - Regex search with highlighting
  - Overlap detection for new lines (flash animation)
  - Pause / resume
  - Auto-scroll when following
  - Auto-refresh
-->
<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import Icon from "$lib/components/shared/Icon.svelte";
  import Dropdown from "$lib/components/shared/Dropdown.svelte";
  import Checkbox from "$lib/components/shared/Checkbox.svelte";
  import { RefreshCw, Pause, Play } from "lucide-svelte";
  import CardShell from "$lib/components/shared/CardShell.svelte";
  import AutoRefreshToggle from "$lib/components/shared/AutoRefreshToggle.svelte";
  import FieldRow from "$lib/components/shared/FieldRow.svelte";
  import FormLabel from "$lib/components/shared/FormLabel.svelte";
  import TailOutput from "./TailOutput.svelte";
  import { fetchTailFiles, fetchTailLines } from "$lib/api/endpoints";
  import {
    startTimer,
    stopTimer,
    getTailRefreshMs,
    getAutoRefreshEnabled,
    setAutoRefreshEnabled,
    onGlobalRefresh,
  } from "$lib/stores/refresh.svelte";
  import { getRows } from "$lib/stores/status.svelte";
  import { toCaseOptions } from "$lib/utils/options";
  import type { TailLine } from "$lib/api/types";

  interface Props {
    allCases: string[];
  }

  let { allCases }: Props = $props();

  const DEFAULT_TAIL_LINES = 80;

  let caseId = $state("");
  let file = $state("");
  let userPickedFile = $state(false);
  let availableFiles = $state<string[]>([]);
  let lines = $state(DEFAULT_TAIL_LINES);

  let rawLines = $state<TailLine[]>([]);
  let newLineIndexes = $state<Set<number>>(new Set());
  let paused = $state(false);
  let autoRefresh = $state(getAutoRefreshEnabled("tail"));
  $effect(() => {
    setAutoRefreshEnabled("tail", autoRefresh);
  });
  let autoScroll = $state(true);
  let severityFilter = $state("all");
  let searchQuery = $state("");
  let fetchError = $state("");
  let searchInputEl: HTMLInputElement | undefined = $state();

  let caseOptions = $derived(toCaseOptions(allCases));
  let fileOptions = $derived(
    availableFiles.map((f) => {
      const name = f.split("/").pop() ?? f;
      return { value: f, label: name };
    }),
  );
  let severityOptions = [
    { value: "all", label: "All" },
    { value: "error", label: "Error" },
    { value: "warn", label: "Warn" },
    { value: "info", label: "Info" },
  ];

  let hasFiles = $derived(availableFiles.length > 0);
  let caseIsRunning = $derived(
    getRows().some(
      (r) => r.case_id === caseId && r.status?.toUpperCase() === "RUNNING",
    ),
  );

  /* Follow the server's best file until the user picks another, and fall
     back to it when the picked one is gone. */
  async function loadFiles() {
    if (!caseId) return;
    try {
      availableFiles = await fetchTailFiles(caseId);
    } catch (err) {
      console.error("Failed to load tail files:", err);
      availableFiles = [];
      return;
    }
    if (!userPickedFile || !availableFiles.includes(file)) {
      file = availableFiles[0] ?? "";
      userPickedFile = false;
    }
    if (!file) rawLines = [];
  }

  async function loadTail(force = false) {
    if (!caseId) return;
    if (paused && !force) return;
    /* Always re-check files to discover new logs as the run progresses */
    await loadFiles();
    if (!file) return;

    try {
      const currentLines = (await fetchTailLines(caseId, file, lines)).lines;
      fetchError = "";

      if (rawLines.length > 0) {
        const overlap = computeOverlap(rawLines, currentLines);
        const newSet = new Set<number>();
        for (let i = overlap; i < currentLines.length; i++) {
          newSet.add(i);
        }
        newLineIndexes = newSet;
      }

      rawLines = currentLines;
    } catch (err) {
      fetchError = "Failed to load log tail";
      console.error("Failed to load tail:", err);
    }
  }

  function computeOverlap(prev: TailLine[], curr: TailLine[]): number {
    const maxCheck = Math.min(prev.length, curr.length);
    for (let offset = 0; offset < maxCheck; offset++) {
      let match = true;
      for (let i = 0; i < Math.min(prev.length - offset, curr.length); i++) {
        if (prev[offset + i].text !== curr[i].text) {
          match = false;
          break;
        }
      }
      if (match) return prev.length - offset;
    }
    return 0;
  }

  let filteredLines = $derived.by(() => {
    let result = rawLines.map((line, i) => ({
      ...line,
      index: i,
      isNew: newLineIndexes.has(i),
    }));

    if (severityFilter !== "all") {
      result = result.filter((l) => l.severity === severityFilter);
    }

    if (searchQuery.trim()) {
      try {
        const re = new RegExp(searchQuery, "i");
        result = result.filter((l) => re.test(l.text));
      } catch {
        /* Invalid regex */
      }
    }

    return result;
  });

  function handleCaseChange(value: string) {
    caseId = value;
    file = "";
    userPickedFile = false;
    rawLines = [];
    loadFiles().then(() => loadTail(true));
  }

  function handleFileChange(value: string) {
    file = value;
    userPickedFile = true;
    rawLines = [];
    loadTail(true);
  }

  function togglePause() {
    paused = !paused;
    if (!paused) loadTail(true);
  }

  function handleKeydown(e: KeyboardEvent) {
    if ((e.ctrlKey || e.metaKey) && e.key === "f") {
      if (searchInputEl) {
        e.preventDefault();
        searchInputEl.focus();
      }
    }
  }

  /* Auto-select first case when cases arrive */
  $effect(() => {
    if (allCases.length > 0 && !caseId) {
      caseId = allCases[0];
      loadFiles().then(() => loadTail(true));
    }
  });

  /* Auto-refresh: restart the timer when dependencies change */
  $effect(() => {
    if (autoRefresh && !paused && caseId) {
      startTimer("tail", () => loadTail(false), getTailRefreshMs());
    } else {
      stopTimer("tail");
    }
  });

  /* React to global refresh (e.g. after cleanup) */
  const unsubGlobal = onGlobalRefresh(() => {
    if (caseId) {
      loadFiles().then(() => loadTail(true));
    }
  });

  onDestroy(() => {
    stopTimer("tail");
    unsubGlobal();
  });
</script>

<svelte:window onkeydown={handleKeydown} />

<CardShell eyebrow="Live" title="Log Tail" wide>
  {#snippet actions()}
    <AutoRefreshToggle
      name="tail"
      intervalMs={getTailRefreshMs()}
      bind:checked={autoRefresh}
      onRefresh={() => loadTail(false)}
    />
    {#if !autoRefresh}
      <Button variant="primary" onclick={() => loadTail(true)}
        ><Icon icon={RefreshCw} /> Refresh</Button
      >
    {/if}
  {/snippet}

  <!-- The case selector stays visible so a case without logs can be left. -->
  <FieldRow>
    <FormLabel text="Case">
      <Dropdown
        class="w-[130px]"
        options={caseOptions}
        value={caseId}
        onchange={handleCaseChange}
      />
    </FormLabel>
    {#if hasFiles}
      <FormLabel text="File">
        <Dropdown
          class="w-[150px]"
          options={fileOptions}
          value={file}
          onchange={handleFileChange}
        />
      </FormLabel>
      <FormLabel text="Lines">
        <input
          type="number"
          min="1"
          bind:value={lines}
          onchange={() => loadTail(true)}
          class="w-[70px]"
        />
      </FormLabel>
      <FormLabel text="Filter">
        <input
          bind:this={searchInputEl}
          type="text"
          placeholder="regex..."
          bind:value={searchQuery}
          class="w-[140px]"
        />
      </FormLabel>
      <FormLabel text="Severity">
        <Dropdown
          class="w-[90px]"
          options={severityOptions}
          value={severityFilter}
          onchange={(v) => (severityFilter = v)}
        />
      </FormLabel>
    {/if}
  </FieldRow>

  {#if rawLines.length > 0}
    <TailOutput lines={filteredLines} {searchQuery} {autoScroll} />

    <div class="flex items-center gap-3 mt-2">
      <span
        class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(255,178,16,0.3)] rounded-md px-2.5 text-[13px]"
      >
        {#if paused}
          <svg class="shrink-0 mr-2" width="8" height="10" viewBox="0 0 8 10"
            ><rect
              x="0"
              y="0"
              width="3"
              height="10"
              rx="0.5"
              fill="currentColor"
            /><rect
              x="5"
              y="0"
              width="3"
              height="10"
              rx="0.5"
              fill="currentColor"
            /></svg
          >
        {:else if caseIsRunning}
          <svg
            class="shrink-0 mr-2 animate-pulse"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            ><circle cx="4" cy="4" r="4" fill="rgb(220,38,38)" /></svg
          >
        {:else}
          <svg class="shrink-0 mr-2" width="8" height="8" viewBox="0 0 8 8"
            ><circle cx="4" cy="4" r="4" fill="rgb(180,180,180)" /></svg
          >
        {/if}
        {filteredLines.length} / {rawLines.length}
      </span>
      {#if caseIsRunning}
        <Button variant="secondary" size="sm" onclick={togglePause}>
          {#if paused}<Icon icon={Play} /> Resume{:else}<Icon icon={Pause} /> Pause{/if}
        </Button>
      {:else}
        <span class="text-xs text-muted">Case not running</span>
      {/if}
      <div class="ml-auto">
        <Checkbox
          checked={autoScroll}
          onchange={(v) => (autoScroll = v)}
          size={14}
          label="Auto-scroll"
          labelFirst
        />
      </div>
    </div>
  {:else}
    <p class="text-sm text-muted italic text-center py-8">
      {#if caseId && !hasFiles}
        No log file yet for this case.
      {:else}
        No log data available. Please run a simulation first.
      {/if}
    </p>
  {/if}

  {#if fetchError}
    <p class="text-xs text-edf-orange-fonce text-center mt-1">{fetchError}</p>
  {/if}
</CardShell>
