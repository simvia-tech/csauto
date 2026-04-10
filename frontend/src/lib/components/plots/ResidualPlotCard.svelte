<!--
  ResidualPlotCard — residual convergence plots for selected cases.

  Fetches available columns from the API, renders SVG plots via the backend,
  and supports start-from-restart with restart origin detection.
-->
<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import CardShell from "$lib/components/shared/CardShell.svelte";
  import AutoRefreshToggle from "$lib/components/shared/AutoRefreshToggle.svelte";
  import Icon from "$lib/components/shared/Icon.svelte";
  import PlotControls from "./PlotControls.svelte";
  import SvgHolder from "./SvgHolder.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import { RefreshCw, Download } from "lucide-svelte";
  import { savePngFromContainer, buildPlotFilename } from "$lib/actions/export";
  import {
    getPlotState,
    setPlotCases,
    setPlotColumns,
    setPlotSelectedColumns,
    setPlotStartFrom,
    setPlotIterMin,
    setPlotSvg,
    setPlotAutoRefresh,
  } from "$lib/stores/plots.svelte";
  import {
    fetchResidualColumns,
    fetchResidualsSvg,
    fetchRestartOrigin,
  } from "$lib/api/endpoints";
  import {
    startTimer,
    stopTimer,
    getPlotRefreshMs,
    getAutoRefreshEnabled,
    setAutoRefreshEnabled,
    onGlobalRefresh,
  } from "$lib/stores/refresh.svelte";

  interface Props {
    allCases: string[];
  }

  let { allCases }: Props = $props();

  let state = $derived(getPlotState());
  let fetchError = $state("");

  /** Excluded column names (not plottable) */
  const EXCLUDED = new Set(["iteration", "wall_distance", "walldistance"]);

  /** Preferred default columns */
  const PREFERRED = ["velocity", "pressure"];

  async function loadColumns() {
    if (!state.selectedCases.length) return;
    try {
      const cols = await fetchResidualColumns(state.selectedCases);
      fetchError = "";
      const filtered = cols.filter(
        (c) => !EXCLUDED.has(c.toLowerCase().replace(/\s+/g, "_")),
      );
      setPlotColumns(filtered);
      if (filtered.length === 0) {
        setPlotSelectedColumns([]);
        setPlotSvg("");
        return;
      }
      if (state.selectedColumns.length === 0) {
        const preferred = filtered.filter((c) =>
          PREFERRED.some((p) => c.toLowerCase().includes(p)),
        );
        setPlotSelectedColumns(
          preferred.length > 0 ? preferred : [filtered[0]],
        );
      }
    } catch (err) {
      fetchError = "Failed to load residual columns";
      console.error("Failed to load residual columns:", err);
    }
  }

  async function loadPlot() {
    if (!state.selectedCases.length) return;
    /* If no columns loaded yet, try fetching them (solver may have started writing) */
    if (state.columns.length === 0 || state.selectedColumns.length === 0) {
      await loadColumns();
      if (!state.selectedColumns.length) return;
    }
    try {
      let xMin = 0;
      let includeHistory = true;

      if (state.startFrom === "restart") {
        const origins = await fetchRestartOrigin(state.selectedCases);
        const iters = Object.values(origins.origins)
          .map((o) => o.iteration)
          .filter((v): v is number => v !== undefined && Number.isFinite(v));
        xMin = iters.length > 0 ? Math.min(...iters) : 0;
      } else if (state.startFrom === "custom") {
        xMin = state.iterMin;
      }

      const svg = await fetchResidualsSvg(
        state.selectedCases,
        state.selectedColumns,
        {
          xMin,
          includeHistory,
        },
      );
      fetchError = "";
      if (svg) setPlotSvg(svg);
    } catch (err) {
      fetchError = "Failed to load residual plot";
      console.error("Failed to load residual plot:", err);
    }
  }

  function handleCasesChange(cases: string[]) {
    setPlotCases(cases);
    if (cases.length === 0) {
      setPlotSvg("");
      return;
    }
    loadColumns();
    loadPlot();
  }

  function handleColumnsChange(cols: string[]) {
    setPlotSelectedColumns(cols);
    if (cols.length === 0) {
      setPlotSvg("");
      return;
    }
    loadPlot();
  }

  function handleStartFromChange(mode: "zero" | "restart" | "custom") {
    setPlotStartFrom(mode);
    loadPlot();
  }

  function handleXMinChange(n: number) {
    setPlotIterMin(n);
    loadPlot();
  }

  let autoRefresh = $state(getAutoRefreshEnabled("plot"));
  $effect(() => {
    setAutoRefreshEnabled("plot", autoRefresh);
  });

  /* Auto-refresh */
  $effect(() => {
    if (autoRefresh) {
      startTimer("residualPlot", loadPlot, getPlotRefreshMs());
    } else {
      stopTimer("residualPlot");
    }
  });

  /* Auto-select all cases on first load, then load plot */
  let casesInitialized = false;
  $effect(() => {
    if (allCases.length > 0 && !casesInitialized) {
      casesInitialized = true;
      setPlotCases([...allCases]);
      loadColumns().then(() => loadPlot());
    }
  });

  /* React to global refresh (e.g. after cleanup) */
  const unsubGlobal = onGlobalRefresh(() => {
    if (casesInitialized) loadColumns().then(() => loadPlot());
  });

  onDestroy(() => {
    stopTimer("residualPlot");
    unsubGlobal();
  });
</script>

<CardShell eyebrow="Diagnostics" title="Residuals Plot" wide>
  {#snippet actions()}
    <AutoRefreshToggle
      name="residualPlot"
      intervalMs={getPlotRefreshMs()}
      bind:checked={autoRefresh}
      onRefresh={loadPlot}
    />
    {#if !autoRefresh}
      <Button variant="primary" onclick={loadPlot}
        ><Icon icon={RefreshCw} /> Refresh</Button
      >
    {/if}
  {/snippet}

  {#if state.columns.length > 0}
    <PlotControls
      prefix="plot"
      {allCases}
      selectedCases={state.selectedCases}
      onCasesChange={handleCasesChange}
      columnLabel="Variables"
      columns={state.columns}
      selectedColumns={state.selectedColumns}
      onColumnsChange={handleColumnsChange}
      startFrom={state.startFrom}
      onStartFromChange={handleStartFromChange}
      xMinLabel="Iter min"
      xMin={state.iterMin}
      onXMinChange={handleXMinChange}
      extraSlot={saveButton}
    />

    {#snippet saveButton()}
      <div class="self-end ml-auto">
        <Button
          variant="secondary"
          size="sm"
          onclick={() =>
            savePngFromContainer(
              "plot-holder",
              buildPlotFilename("residuals", state.selectedCases),
            )}
          disabled={!state.svgHtml}
          ><Icon icon={Download} /> Download as PNG</Button
        >
      </div>
    {/snippet}

    <div class="flex justify-center">
      <SvgHolder
        id="plot-holder"
        svgHtml={state.svgHtml}
        emptyMessage={state.selectedCases.length === 0
          ? "Please select at least one case."
          : state.selectedColumns.length === 0
            ? "Please select at least one variable."
            : "No data to display."}
      />
    </div>
  {:else}
    <div class="flex justify-center">
      <SvgHolder
        id="plot-holder"
        svgHtml=""
        emptyMessage="No data available. Please run a simulation first."
      />
    </div>
  {/if}

  {#if fetchError}
    <p class="text-xs text-edf-orange-fonce text-center mt-1">{fetchError}</p>
  {/if}
</CardShell>
