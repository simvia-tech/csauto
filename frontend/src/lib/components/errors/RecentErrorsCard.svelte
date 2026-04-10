<!--
  RecentErrorsCard — scan logs for errors/warnings with deduplication and NEW badges.

  Features:
  - Multi-case, multi-file, severity, and search filtering
  - Deduplication by fingerprint (case + file + severity + normalized line)
  - "NEW" badge for errors not seen in previous scan
  - Configurable context lines
  - Row expand/collapse for error details
  - Sortable by severity, count, case, or file
  - CSV export
  - Auto-refresh
-->
<script lang="ts">
  import { onDestroy } from "svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import CardShell from "$lib/components/shared/CardShell.svelte";
  import AutoRefreshToggle from "$lib/components/shared/AutoRefreshToggle.svelte";
  import MultiDropdown from "$lib/components/shared/MultiDropdown.svelte";
  import Dropdown from "$lib/components/shared/Dropdown.svelte";
  import FieldRow from "$lib/components/shared/FieldRow.svelte";
  import FormLabel from "$lib/components/shared/FormLabel.svelte";
  import Icon from "$lib/components/shared/Icon.svelte";
  import { fetchRecentErrors } from "$lib/api/endpoints";
  import { toCaseOptions } from "$lib/utils/options";
  import { saveCsvBlob, buildPlotFilename } from "$lib/actions/export";
  import {
    RefreshCw,
    Download,
    ChevronDown,
    ChevronRight,
    ArrowUp,
    ArrowDown,
  } from "lucide-svelte";
  import {
    startTimer,
    stopTimer,
    getErrorsRefreshMs,
    getAutoRefreshEnabled,
    setAutoRefreshEnabled,
    onGlobalRefresh,
  } from "$lib/stores/refresh.svelte";
  import type { ErrorItem } from "$lib/api/types";

  interface Props {
    allCases: string[];
  }

  let { allCases }: Props = $props();

  const DEFAULT_ERROR_CONTEXT = 6;
  const DEFAULT_ERROR_FILES = ["csauto.stderr", "run_solver.log", "listing"];

  let selectedCases = $state<string[]>([]);
  let selectedFiles = $state<string[]>([...DEFAULT_ERROR_FILES]);
  let severity = $state("all");
  let searchQuery = $state("");
  let context = $state(DEFAULT_ERROR_CONTEXT);
  let loading = $state(false);
  let fetchError = $state("");
  let autoRefresh = $state(getAutoRefreshEnabled("errors"));
  $effect(() => {
    setAutoRefreshEnabled("errors", autoRefresh);
  });
  let items = $state<ErrorItem[]>([]);
  let previousFingerprints = $state<Set<string>>(new Set());

  interface DedupedItem extends ErrorItem {
    count: number;
    fingerprint: string;
    isNew: boolean;
  }

  /** Normalize a line for fingerprinting */
  function normalizeSignature(text: string): string {
    return text
      .toLowerCase()
      .replace(/[0-9]+/g, "#")
      .replace(/0x[0-9a-f]+/gi, "#")
      .replace(/\s+/g, " ")
      .trim();
  }

  /** Build fingerprint from an error item */
  function buildFingerprint(item: ErrorItem): string {
    const lineText = item.line_html.replace(/<[^>]*>/g, "").slice(0, 120);
    return `${item.case_id}|${item.file}|${item.severity}|${normalizeSignature(lineText)}`;
  }

  /** Deduplicate errors by fingerprint */
  function dedup(errorItems: ErrorItem[]): DedupedItem[] {
    const map = new Map<string, DedupedItem>();
    for (const item of errorItems) {
      const fp = buildFingerprint(item);
      const existing = map.get(fp);
      if (existing) {
        existing.count++;
      } else {
        map.set(fp, {
          ...item,
          count: 1,
          fingerprint: fp,
          isNew: !previousFingerprints.has(fp),
        });
      }
    }
    return Array.from(map.values());
  }

  async function loadErrors() {
    if (!selectedCases.length || !selectedFiles.length) return;
    loading = true;
    try {
      const data = await fetchRecentErrors({
        cases: selectedCases,
        files: selectedFiles,
        context,
        sev: severity === "all" ? "" : severity,
        q: searchQuery,
      });

      fetchError = "";
      const deduped = dedup(data.items);
      items = data.items;

      /* Update fingerprint tracking */
      const currentFps = new Set(deduped.map((d) => d.fingerprint));
      previousFingerprints = currentFps;

      dedupedItems = deduped;
    } catch (err) {
      fetchError = "Failed to load errors";
      console.error("Failed to load errors:", err);
    } finally {
      loading = false;
    }
  }

  let dedupedItems = $state<DedupedItem[]>([]);

  let searchTimer: ReturnType<typeof setTimeout> | null = null;
  function scheduleSearch() {
    if (searchTimer) clearTimeout(searchTimer);
    searchTimer = setTimeout(loadErrors, 250);
  }

  function sevClass(sev: string): string {
    if (sev === "error") return "error-sev-error";
    if (sev === "warn") return "error-sev-warn";
    return "error-sev-info";
  }

  /* Dropdown options */
  let caseOptions = $derived(toCaseOptions(allCases));
  const ALL_ERROR_FILES = [
    "csauto.stderr",
    "run_solver.log",
    "listing",
    "csauto.stdout",
  ];
  let fileOptions = ALL_ERROR_FILES.map((f) => ({ value: f, label: f }));
  let severityOptions = [
    { value: "all", label: "All" },
    { value: "error", label: "Error" },
    { value: "warn", label: "Warn" },
    { value: "info", label: "Info" },
  ];

  /* Filter change handlers */
  function handleCasesChange(cases: string[]) {
    selectedCases = cases;
    if (cases.length === 0) {
      dedupedItems = [];
      items = [];
      return;
    }
    loadErrors();
  }

  function handleFilesChange(files: string[]) {
    selectedFiles = files;
    if (files.length === 0) {
      dedupedItems = [];
      items = [];
      return;
    }
    loadErrors();
  }

  function handleSeverityChange(value: string) {
    severity = value;
    loadErrors();
  }

  function handleContextChange() {
    loadErrors();
  }

  /* Auto-select all cases on first load */
  let casesInitialized = false;
  $effect(() => {
    if (allCases.length > 0 && !casesInitialized) {
      casesInitialized = true;
      selectedCases = [...allCases];
      loadErrors();
    }
  });

  /* Auto-refresh */
  $effect(() => {
    if (autoRefresh) {
      startTimer("errors", loadErrors, getErrorsRefreshMs());
    } else {
      stopTimer("errors");
    }
  });

  /* React to global refresh (e.g. after cleanup) */
  const unsubGlobal = onGlobalRefresh(() => {
    if (casesInitialized) loadErrors();
  });

  onDestroy(() => {
    stopTimer("errors");
    unsubGlobal();
  });

  /* Expand/collapse */
  let expandedSet = $state<Set<string>>(new Set());

  function toggleExpand(fp: string) {
    const next = new Set(expandedSet);
    if (next.has(fp)) next.delete(fp);
    else next.add(fp);
    expandedSet = next;
  }

  /* Sorting */
  type SortKey = "severity" | "count" | "case_id" | "file";
  let sortKey = $state<SortKey>("severity");
  let sortDir = $state<"asc" | "desc">("desc");

  const SEV_ORDER: Record<string, number> = { info: 0, warn: 1, error: 2 };

  let sortedItems = $derived.by(() => {
    const arr = [...dedupedItems];
    arr.sort((a, b) => {
      let cmp = 0;
      if (sortKey === "severity")
        cmp = (SEV_ORDER[a.severity] ?? 9) - (SEV_ORDER[b.severity] ?? 9);
      else if (sortKey === "count") cmp = a.count - b.count;
      else cmp = a[sortKey].localeCompare(b[sortKey]);
      return sortDir === "asc" ? cmp : -cmp;
    });
    return arr;
  });

  const DEFAULT_SORT_DIR: Record<SortKey, "asc" | "desc"> = {
    severity: "desc",
    count: "desc",
    case_id: "asc",
    file: "asc",
  };

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      sortDir = sortDir === "asc" ? "desc" : "asc";
    } else {
      sortKey = key;
      sortDir = DEFAULT_SORT_DIR[key];
    }
  }

  /* CSV export */
  function exportCsv() {
    if (!dedupedItems.length) return;
    const header = [
      "case_id",
      "file",
      "severity",
      "count",
      "is_new",
      "line_text",
    ];
    const rows = sortedItems.map((d) =>
      [
        d.case_id,
        d.file,
        d.severity,
        d.count,
        d.isNew ? "yes" : "no",
        `"${d.line_html.replace(/<[^>]*>/g, "").replace(/"/g, '""')}"`,
      ].join(","),
    );
    const csv = [header.join(","), ...rows].join("\n");
    const filename = buildPlotFilename("errors", selectedCases, "csv");
    saveCsvBlob(csv, filename);
  }
</script>

<CardShell eyebrow="Diagnostics" title="Recent Errors" wide>
  {#snippet actions()}
    <AutoRefreshToggle
      name="errors"
      intervalMs={getErrorsRefreshMs()}
      bind:checked={autoRefresh}
      onRefresh={loadErrors}
    />
    {#if !autoRefresh}
      <Button variant="primary" onclick={loadErrors}
        ><Icon icon={RefreshCw} /> Refresh</Button
      >
    {/if}
  {/snippet}

  <FieldRow>
    <FormLabel text="Cases">
      <MultiDropdown
        class="w-[160px]"
        options={caseOptions}
        selected={selectedCases}
        onchange={handleCasesChange}
        placeholder="Select cases..."
      />
    </FormLabel>
    <FormLabel text="Files">
      <MultiDropdown
        class="w-[160px]"
        options={fileOptions}
        selected={selectedFiles}
        onchange={handleFilesChange}
        placeholder="Select files..."
      />
    </FormLabel>
    <FormLabel text="Severity">
      <Dropdown
        class="w-[90px]"
        options={severityOptions}
        value={severity}
        onchange={handleSeverityChange}
      />
    </FormLabel>
    <FormLabel text="Search">
      <input
        type="text"
        bind:value={searchQuery}
        oninput={scheduleSearch}
        placeholder="text filter..."
        class="min-w-[200px]"
      />
    </FormLabel>
    <FormLabel text="Context">
      <input
        type="number"
        min="0"
        max="50"
        bind:value={context}
        onchange={handleContextChange}
        style="width: 70px;"
      />
    </FormLabel>
    <div class="self-end ml-auto">
      <Button
        variant="secondary"
        size="sm"
        onclick={exportCsv}
        disabled={dedupedItems.length === 0}
        ><Icon icon={Download} /> Download as CSV</Button
      >
    </div>
  </FieldRow>

  {#if sortedItems.length > 0}
    <div class="flex items-center gap-3 text-xs text-muted mb-1 mt-2">
      <span>Sort by:</span>
      {#each [{ key: "severity", label: "Severity" }, { key: "count", label: "Count" }, { key: "case_id", label: "Case" }, { key: "file", label: "File" }] as col (col.key)}
        <button
          class="cursor-pointer bg-transparent border-none text-xs hover:underline {sortKey ===
          col.key
            ? 'text-edf-bleu-fonce font-bold'
            : 'text-muted'}"
          onclick={() => toggleSort(col.key as SortKey)}
        >
          {col.label}{#if sortKey === col.key}&nbsp;<Icon
              icon={sortDir === "asc" ? ArrowUp : ArrowDown}
              size={12}
            />{/if}
        </button>
      {/each}
    </div>
  {/if}

  <div class="error-list {loading ? 'opacity-50 pointer-events-none' : ''}">
    {#if sortedItems.length === 0 && !loading}
      <p class="error-empty">
        No errors found. Select cases and adjust filters above.
      </p>
    {/if}
    {#each sortedItems as item (item.fingerprint)}
      <div class="error-item {sevClass(item.severity)}">
        <button
          class="error-item-toggle error-meta-row"
          onclick={() => toggleExpand(item.fingerprint)}
          type="button"
        >
          <span class="error-expand-icon">
            <Icon
              icon={expandedSet.has(item.fingerprint)
                ? ChevronDown
                : ChevronRight}
              size={14}
            />
          </span>
          <span class="error-meta">
            {item.case_id} / {item.file} : {item.severity}
          </span>
          <span class="error-badges">
            {#if item.count > 1}
              <span class="error-badge">{item.count}x</span>
            {/if}
            {#if item.isNew}
              <span class="error-badge error-badge-new">NEW</span>
            {/if}
          </span>
        </button>
        {#if expandedSet.has(item.fingerprint)}
          <!-- @html is safe: line_html is generated server-side from log file content, not user input -->
          <div class="error-line">{@html item.line_html}</div>
        {/if}
      </div>
    {/each}
  </div>

  {#if sortedItems.length > 0}
    <div class="flex items-center gap-3 mt-2">
      <span
        class="inline-flex items-center h-[30px] min-w-[72px] text-center font-bold tracking-wide text-edf-noir bg-[rgba(214,67,10,0.12)] rounded-md px-2.5 text-[13px]"
      >
        {dedupedItems.length} unique / {items.length} total
      </span>
      {#if dedupedItems.some((d) => d.isNew)}
        <span class="text-xs font-bold text-edf-bleu-fonce">
          {dedupedItems.filter((d) => d.isNew).length} new
        </span>
      {/if}
    </div>
  {/if}

  {#if fetchError}
    <p class="text-xs text-edf-orange-fonce text-center mt-1">{fetchError}</p>
  {/if}
</CardShell>
