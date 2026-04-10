<!--
  ProfileProbePanel — spatial profile plots (e.g. along a line or surface).

  Includes axis selector for the x-axis quantity (s, x, distance, etc.)
  and auto-selects reasonable defaults.
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
    getProfileState,
    setProfileState,
    setProfileHasData,
  } from "$lib/stores/probes.svelte";

  interface Props {
    allCases: string[];
    onRefresh?: () => void;
  }

  let { allCases, onRefresh = $bindable() }: Props = $props();

  let state = $derived(getProfileState());

  /** Preferred axis column names, in priority order */
  const AXIS_PREFERENCE = [
    "s",
    "x",
    "abscissa",
    "distance",
    "arclength",
    "arc_length",
    "curvilinear",
    "length",
    "r",
    "y",
    "z",
    "coord",
    "position",
  ];

  function chooseAxis(columns: string[]): string {
    const lower = columns.map((c) => c.toLowerCase());
    for (const pref of AXIS_PREFERENCE) {
      const idx = lower.indexOf(pref);
      if (idx >= 0) return columns[idx];
    }
    return columns[0] ?? "";
  }

  const loader = createProbeLoader({
    scope: "profiles",
    getState: getProfileState,
    setState: setProfileState,
    setHasData: setProfileHasData,
    onColumnsLoaded: (cols) => {
      const axis = state.axis || chooseAxis(cols);
      const values = cols
        .filter((c) => c !== axis)
        .toSorted((a, b) => a.localeCompare(b));
      setProfileState({
        columns: values,
        axis,
        selectedColumns: state.selectedColumns.length
          ? state.selectedColumns
          : values.length
            ? [values[0]]
            : [],
      });
    },
    getAxis: () => getProfileState().axis,
  });

  function handleAxisChange(value: string) {
    const oldAxis = state.axis;
    setProfileState({ axis: value });
    const allCols = [...state.columns, ...(oldAxis ? [oldAxis] : [])];
    const values = allCols
      .filter((c) => c !== value)
      .toSorted((a, b) => a.localeCompare(b));
    setProfileState({ columns: values });
    loader.loadPlot();
  }

  let fileOptions = $derived(
    state.files.map((f) => ({
      value: f,
      label: f
        .replace(/\.csv$/i, "")
        .replace(/^profiles\//i, "")
        .replace(/_/g, " "),
    })),
  );
  let axisOptions = $derived(
    [...(state.axis ? [state.axis] : []), ...state.columns]
      .toSorted((a, b) => a.localeCompare(b))
      .map((c) => ({ value: c, label: c })),
  );

  let casesInitialized = false;
  $effect(() => {
    if (allCases.length > 0 && !casesInitialized) {
      casesInitialized = true;
      setProfileState({ selectedCases: [...allCases] });
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
        ? "Please select at least one value."
        : "No data to display.",
  );
</script>

{#if state.files.length > 0}
  <PlotControls
    prefix="profile"
    {allCases}
    selectedCases={state.selectedCases}
    onCasesChange={loader.handleCasesChange}
    middleSlot={middleControls}
    columnLabel="Values"
    columns={state.columns}
    selectedColumns={state.selectedColumns}
    onColumnsChange={loader.handleColumnsChange}
    startFrom={state.startFrom}
    onStartFromChange={(m) => {
      setProfileState({ startFrom: m });
      loader.loadPlot();
    }}
    xMinLabel="X min"
    xMin={state.xMin}
    onXMinChange={(n) => {
      setProfileState({ xMin: n });
      loader.loadPlot();
    }}
    extraSlot={saveButton}
  />

  {#snippet middleControls()}
    <FormLabel text="Profile">
      <Dropdown
        class="w-[160px]"
        options={fileOptions}
        value={state.file}
        onchange={loader.handleFileChange}
      />
    </FormLabel>
    <FormLabel text="X axis">
      <Dropdown
        class="w-[140px]"
        options={axisOptions}
        value={state.axis}
        onchange={handleAxisChange}
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
            "profile-plot-holder",
            buildPlotFilename("profile", state.selectedCases),
          )}
        disabled={!state.svgHtml}
        ><Icon icon={Download} /> Download as PNG</Button
      >
    </div>
  {/snippet}

  <div class="flex justify-center">
    <SvgHolder
      id="profile-plot-holder"
      svgHtml={state.svgHtml}
      {emptyMessage}
    />
  </div>
{:else}
  <div class="flex justify-center">
    <SvgHolder
      id="profile-plot-holder"
      svgHtml=""
      emptyMessage="No profile data available. Please run a simulation first."
    />
  </div>
{/if}
