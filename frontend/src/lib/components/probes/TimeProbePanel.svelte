<!--
  TimeProbePanel — time-domain probe monitoring plots.

  Shows probe file selector, column selector, position display,
  and SVG plot with auto-refresh.
-->
<script lang="ts">
  import PlotControls from "$lib/components/plots/PlotControls.svelte";
  import SvgHolder from "$lib/components/plots/SvgHolder.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import FormLabel from "$lib/components/shared/FormLabel.svelte";
  import Dropdown from "$lib/components/shared/Dropdown.svelte";
  import Icon from "$lib/components/shared/Icon.svelte";
  import { Download } from "lucide-svelte";
  import { savePngFromContainer, buildPlotFilename } from "$lib/actions/export";
  import { createProbeLoader } from "$lib/actions/probeLoader";
  import {
    getTimeState,
    setTimeState,
    setTimeHasData,
  } from "$lib/stores/probes.svelte";
  import { fetchProbePosition } from "$lib/api/endpoints";

  interface Props {
    allCases: string[];
    onRefresh?: () => void;
  }

  let { allCases, onRefresh = $bindable() }: Props = $props();

  let state = $derived(getTimeState());

  const AXIS_EXCLUDED = new Set(["time", "t", "iteration", "iter"]);

  const loader = createProbeLoader({
    scope: "monitoring",
    getState: getTimeState,
    setState: setTimeState,
    setHasData: setTimeHasData,
    filterFiles: (files) =>
      files.filter((f) => {
        const stem = f.replace(/\.csv$/i, "").toLowerCase();
        return stem !== "coords" && !stem.includes("coordinates");
      }),
    filterColumns: (cols) =>
      cols.filter((c) => !AXIS_EXCLUDED.has(c.toLowerCase())),
    onColumnsLoaded: (cols) => {
      const filtered = cols.filter((c) => !AXIS_EXCLUDED.has(c.toLowerCase()));
      setTimeState({ columns: filtered });
      loadPosition();
    },
    getAxis: () => "time",
  });

  async function loadPosition() {
    if (
      !state.selectedCases.length ||
      !state.file ||
      !state.selectedColumns.length
    )
      return;
    try {
      const positions: { col: string; x?: number; y?: number; z?: number }[] =
        [];
      for (const col of state.selectedColumns) {
        const pos = await fetchProbePosition(
          state.selectedCases[0],
          state.file,
          [col],
        );
        if (pos.found) {
          positions.push({ col, x: pos.x, y: pos.y, z: pos.z });
        }
      }
      if (!positions.length) {
        setTimeState({ positionText: "" });
        return;
      }

      const maxDecimals = (vals: (number | undefined)[]) => {
        let max = 0;
        for (const v of vals) {
          if (v === undefined) continue;
          const s = String(v);
          const dot = s.indexOf(".");
          if (dot >= 0) max = Math.max(max, s.length - dot - 1);
        }
        return max;
      };
      const xDec = maxDecimals(positions.map((p) => p.x));
      const yDec = maxDecimals(positions.map((p) => p.y));
      const zDec = maxDecimals(positions.map((p) => p.z));

      const lines = positions.map((p) => {
        const coords: string[] = [];
        if (p.x !== undefined) coords.push(`x=${p.x.toFixed(xDec)}`);
        if (p.y !== undefined) coords.push(`y=${p.y.toFixed(yDec)}`);
        if (p.z !== undefined) coords.push(`z=${p.z.toFixed(zDec)}`);
        return `Probe position [${p.col}] : ${coords.join(" · ")}`;
      });
      setTimeState({ positionText: lines.join("\n") });
    } catch {
      setTimeState({ positionText: "" });
    }
  }

  function handleColumnsChange(cols: string[]) {
    loader.handleColumnsChange(cols);
    if (cols.length > 0) loadPosition();
  }

  let fileOptions = $derived(
    state.files.map((f) => ({
      value: f,
      label: f.replace(/\.csv$/i, "").replace(/^probes?_/i, ""),
    })),
  );

  let casesInitialized = false;
  $effect(() => {
    if (allCases.length > 0 && !casesInitialized) {
      casesInitialized = true;
      setTimeState({ selectedCases: [...allCases] });
      loader.loadFiles().then(() => loader.loadPlot());
    }
  });

  $effect(() => {
    onRefresh = loader.loadPlot;
  });

  let emptyMessage = $derived(
    state.selectedCases.length === 0
      ? "Please select at least one case."
      : state.selectedColumns.length === 0
        ? "Please select at least one probe."
        : "No data to display.",
  );
</script>

{#if state.files.length > 0}
  <PlotControls
    prefix="probe"
    {allCases}
    selectedCases={state.selectedCases}
    onCasesChange={loader.handleCasesChange}
    middleSlot={quantitySlot}
    columnLabel="Probes"
    columns={state.columns}
    selectedColumns={state.selectedColumns}
    onColumnsChange={handleColumnsChange}
    startFrom={state.startFrom}
    onStartFromChange={(m) => {
      setTimeState({ startFrom: m });
      loader.loadPlot();
    }}
    xMinLabel="Time min"
    xMin={state.xMin}
    onXMinChange={(n) => {
      setTimeState({ xMin: n });
      loader.loadPlot();
    }}
    extraSlot={saveButton}
  />

  {#snippet quantitySlot()}
    <FormLabel text="Quantity">
      <Dropdown
        class="w-[160px]"
        options={fileOptions}
        value={state.file}
        onchange={loader.handleFileChange}
      />
    </FormLabel>
  {/snippet}

  {#snippet saveButton()}
    <div class="self-end ml-auto">
      <Button
        variant="secondary"
        size="sm"
        onclick={() =>
          savePngFromContainer(
            "probe-plot-holder",
            buildPlotFilename("probe", state.selectedCases),
          )}
        disabled={!state.svgHtml}
        ><Icon icon={Download} /> Download as PNG</Button
      >
    </div>
  {/snippet}

  {#if state.positionText}
    <div class="text-xs text-muted mb-1 text-center font-mono">
      {#each state.positionText.split("\n").sort() as line}
        <div>{line}</div>
      {/each}
    </div>
  {/if}

  <div class="flex justify-center">
    <SvgHolder id="probe-plot-holder" svgHtml={state.svgHtml} {emptyMessage} />
  </div>
{:else}
  <div class="flex justify-center">
    <SvgHolder
      id="probe-plot-holder"
      svgHtml=""
      emptyMessage="No probe data available. Please run a simulation first."
    />
  </div>
{/if}
