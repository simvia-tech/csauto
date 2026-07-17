<!--
  PerformanceCard — timing snapshot table with CSV export.

  Displays elapsed time, I/O, solver, gradients, balances per case.
  Auto-refreshes and reacts to global refresh (e.g. after cleanup).
-->
<script lang="ts">
  import { onDestroy } from "svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import CardShell from "$lib/components/shared/CardShell.svelte";
  import AutoRefreshToggle from "$lib/components/shared/AutoRefreshToggle.svelte";
  import MultiDropdown from "$lib/components/shared/MultiDropdown.svelte";
  import FieldRow from "$lib/components/shared/FieldRow.svelte";
  import FormLabel from "$lib/components/shared/FormLabel.svelte";
  import Icon from "$lib/components/shared/Icon.svelte";
  import { fetchPerf } from "$lib/api/endpoints";
  import { saveCsvBlob, buildPlotFilename } from "$lib/actions/export";
  import type { PerfColumn, PerfRecord } from "$lib/api/types";
  import { RefreshCw, Download } from "lucide-svelte";
  import {
    startTimer,
    stopTimer,
    getAutoRefreshEnabled,
    setAutoRefreshEnabled,
    onGlobalRefresh,
  } from "$lib/stores/refresh.svelte";

  interface Props {
    allCases: string[];
  }

  let { allCases }: Props = $props();

  let selectedCases = $state<string[]>([]);
  let records = $state<PerfRecord[]>([]);
  let hasAvailableData = $state(false);
  let loading = $state(false);
  let autoRefresh = $state(getAutoRefreshEnabled("perf"));
  $effect(() => {
    setAutoRefreshEnabled("perf", autoRefresh);
  });

  const PERF_REFRESH_MS = 5000;

  /* Columns come from the solver adapter via /api/perf; this hardcoded set
     is only the fallback for older backends whose payload has no metadata. */
  const FALLBACK_COLUMNS: PerfColumn[] = [
    { key: "elapsed_time", label: "Elapsed (s)", kind: "time" },
    { key: "io_time", label: "I/O (s)", kind: "time" },
    { key: "linear_solver_time", label: "Linear Solver (s)", kind: "time" },
    { key: "gradients_time", label: "Gradients (s)", kind: "time" },
    { key: "balances_time", label: "Balances (s)", kind: "time" },
    { key: "mpi_ranks", label: "MPI Ranks", kind: "int" },
    { key: "threads", label: "Threads", kind: "int" },
  ];
  let columns = $state<PerfColumn[]>(FALLBACK_COLUMNS);

  let caseOptions = $derived(allCases.map((c) => ({ value: c, label: c })));
  let hasData = $derived(records.length > 0);

  async function load() {
    if (!selectedCases.length) return;
    loading = true;
    try {
      const data = await fetchPerf(selectedCases);
      if (data.columns?.length) columns = data.columns;
      records = data.records;
      if (records.length > 0) hasAvailableData = true;
    } catch (err) {
      console.error("Failed to load perf:", err);
    }
    loading = false;
  }

  function handleCasesChange(cases: string[]) {
    selectedCases = cases;
    if (cases.length === 0) {
      records = [];
      return;
    }
    load();
  }

  function formatCell(kind: PerfColumn["kind"], value: string | null): string {
    if (value === null || value === undefined || value === "") return "-";
    if (kind === "text") return value;
    const n = Number(value);
    if (!Number.isFinite(n)) return value;
    if (kind === "int") return String(Math.round(n));
    return n.toFixed(3);
  }

  async function saveCsv() {
    if (!records.length) return;
    const header = ["case_id", ...columns.map((c) => c.key)];
    const rows = records.map((r) =>
      [r.case_id, ...columns.map((c) => r[c.key] ?? "")].join(","),
    );
    const csv = [header.join(","), ...rows].join("\n");
    const filename = buildPlotFilename("timing_snapshot", selectedCases, "csv");
    await saveCsvBlob(csv, filename);
  }

  /* Auto-select all cases on first load and check data availability */
  let casesInitialized = false;
  $effect(() => {
    if (allCases.length > 0 && !casesInitialized) {
      casesInitialized = true;
      selectedCases = [...allCases];
      fetchPerf(allCases)
        .then((data) => {
          if (data.columns?.length) columns = data.columns;
          hasAvailableData = data.records.length > 0;
          records = data.records;
        })
        .catch(() => {});
    }
  });

  /* Auto-refresh */
  $effect(() => {
    if (autoRefresh) {
      startTimer("perf", load, PERF_REFRESH_MS);
    } else {
      stopTimer("perf");
    }
  });

  /* React to global refresh (e.g. after cleanup) */
  const unsubGlobal = onGlobalRefresh(() => {
    if (casesInitialized) load();
  });

  onDestroy(() => {
    stopTimer("perf");
    unsubGlobal();
  });
</script>

<CardShell eyebrow="Performance" title="Timing Snapshot" wide>
  {#snippet actions()}
    <AutoRefreshToggle
      name="perf"
      intervalMs={PERF_REFRESH_MS}
      bind:checked={autoRefresh}
      onRefresh={load}
    />
    {#if !autoRefresh}
      <Button variant="primary" onclick={load}
        ><Icon icon={RefreshCw} /> Refresh</Button
      >
    {/if}
  {/snippet}

  {#if hasAvailableData}
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
      <div class="self-end ml-auto">
        <Button
          variant="secondary"
          size="sm"
          onclick={saveCsv}
          disabled={!hasData}><Icon icon={Download} /> Download as CSV</Button
        >
      </div>
    </FieldRow>
  {/if}

  {#if hasData}
    <div class="table-wrap">
      <table
        id="perf-table"
        style="border-collapse: separate; border-spacing: 0; width: max-content; min-width: 100%;"
      >
        <thead>
          <tr>
            <th
              style="position: sticky; left: 0; z-index: 4; background: var(--color-table-head); border-right: 1px solid var(--color-border);"
              >Case</th
            >
            {#each columns as col (col.key)}
              <th>{col.label}</th>
            {/each}
          </tr>
        </thead>
        <tbody id="perf-body">
          {#each records as rec (rec.case_id)}
            <tr>
              <td
                class="case-id whitespace-nowrap"
                style="position: sticky; left: 0; z-index: 3; background: var(--color-table-row); border-right: 1px solid var(--color-border);"
                >{rec.case_id}</td
              >
              {#each columns as col (col.key)}
                <td class="whitespace-nowrap"
                  >{formatCell(col.kind, rec[col.key])}</td
                >
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <p class="text-sm text-muted italic text-center py-8">
      {#if hasAvailableData}
        Select cases above to view timing information.
      {:else}
        No performance data available. Please run a simulation first.
      {/if}
    </p>
  {/if}
</CardShell>
