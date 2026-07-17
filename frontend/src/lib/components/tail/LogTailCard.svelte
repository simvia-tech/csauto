<!--
  LogTailCard — live log tailing with severity filtering and search highlighting.

  Features:
  - Case and file selector (auto-discovers available files)
  - Line count control
  - Severity filter (all / error / warn / info)
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
  import { fetchTail, fetchResuFiles } from "$lib/api/endpoints";
  import {
    startTimer,
    stopTimer,
    getTailRefreshMs,
    getAutoRefreshEnabled,
    setAutoRefreshEnabled,
    onGlobalRefresh,
  } from "$lib/stores/refresh.svelte";
  import { getRows } from "$lib/stores/status.svelte";
  import { classifySeverity, passesSeverityFilter } from "$lib/utils/severity";
  import { toCaseOptions } from "$lib/utils/options";

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

  let rawLines = $state<string[]>([]);
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
  ];

  let hasFiles = $derived(availableFiles.length > 0);
  let caseIsRunning = $derived(
    getRows().some(
      (r) => r.case_id === caseId && r.status?.toUpperCase() === "RUNNING",
    ),
  );

  /** File priority for auto-selection */
  const FILE_PRIORITY: Record<string, number> = {
    "run_solver.log": 1,
    listing: 2,
    "run_status.running": 3,
    "csauto.stdout": 4,
    "csauto.stderr": 5,
    "performance.log": 6,
  };

  function filePriority(name: string): number {
    const base = name.split("/").pop() ?? name;
    return FILE_PRIORITY[base] ?? 99;
  }

  async function loadFiles() {
    if (!caseId) return;
    try {
      const files = await fetchResuFiles(caseId);
      const logFiles = files.filter((f) => {
        const base = f.split("/").pop() ?? f;
        return (
          f.endsWith(".log") || f.endsWith("/summary") || base in FILE_PRIORITY
        );
      });
      const sorted = logFiles.sort((a, b) => filePriority(a) - filePriority(b));
      availableFiles = sorted;
      if (sorted.length > 0) {
        const bestFile = sorted[0];
        if (!file || !sorted.includes(file)) {
          file = bestFile;
          userPickedFile = false;
        } else if (
          !userPickedFile &&
          filePriority(bestFile) < filePriority(file)
        ) {
          file = bestFile;
        }
      }
      if (availableFiles.length === 0) {
        file = "";
        rawLines = [];
      }
    } catch (err) {
      console.error("Failed to load tail files:", err);
      availableFiles = [];
    }
  }

  async function loadTail(force = false) {
    if (!caseId) return;
    if (paused && !force) return;
    /* Always re-check files to discover new logs as simulation progresses */
    await loadFiles();
    if (!file) return;

    try {
      const text = await fetchTail(caseId, file, lines);
      fetchError = "";
      const split = text.split("\n");
      const currentLines =
        split.length > 0 && split[split.length - 1] === ""
          ? split.slice(0, -1)
          : split;

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

  function computeOverlap(prev: string[], curr: string[]): number {
    const maxCheck = Math.min(prev.length, curr.length);
    for (let offset = 0; offset < maxCheck; offset++) {
      let match = true;
      for (let i = 0; i < Math.min(prev.length - offset, curr.length); i++) {
        if (prev[offset + i] !== curr[i]) {
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
      text: line,
      index: i,
      severity: classifySeverity(line),
      isNew: newLineIndexes.has(i),
    }));

    if (severityFilter !== "all") {
      result = result.filter((l) =>
        passesSeverityFilter(l.severity, severityFilter),
      );
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

  /* Auto-refresh — restart timer when dependencies change */
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

  {#if hasFiles}
    <FieldRow>
      <FormLabel text="Case">
        <Dropdown
          class="w-[130px]"
          options={caseOptions}
          value={caseId}
          onchange={handleCaseChange}
        />
      </FormLabel>
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
    </FieldRow>
  {/if}

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
      No log data available. Please run a simulation first.
    </p>
  {/if}

  {#if fetchError}
    <p class="text-xs text-edf-orange-fonce text-center mt-1">{fetchError}</p>
  {/if}
</CardShell>
