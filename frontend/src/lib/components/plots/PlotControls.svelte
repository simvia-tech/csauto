<!--
  PlotControls — shared controls for plot cards (case selector, column selector, start mode).

  Used by ResidualPlotCard, TimeProbePanel, and ProfileProbePanel with
  different labels and column sources.
-->
<script lang="ts">
  import FieldRow from "$lib/components/shared/FieldRow.svelte";
  import FormLabel from "$lib/components/shared/FormLabel.svelte";
  import MultiDropdown from "$lib/components/shared/MultiDropdown.svelte";
  import Dropdown from "$lib/components/shared/Dropdown.svelte";
  import { toCaseOptions } from "$lib/utils/options";

  interface Props {
    /** ID prefix for form elements */
    prefix: string;
    /** All available cases */
    allCases: string[];
    /** Currently selected cases */
    selectedCases: string[];
    onCasesChange: (cases: string[]) => void;
    /** Column/quantity selector */
    columnLabel?: string;
    columns: string[];
    selectedColumns: string[];
    onColumnsChange: (cols: string[]) => void;
    /** Start mode */
    startFrom: "zero" | "restart" | "custom";
    onStartFromChange: (mode: "zero" | "restart" | "custom") => void;
    /** Custom x-min input */
    xMinLabel?: string;
    xMin: number;
    onXMinChange: (n: number) => void;
    /** Slot rendered between cases and columns (e.g. file/quantity selector) */
    middleSlot?: import("svelte").Snippet;
    /** Slot rendered at the end of the row (e.g. save button) */
    extraSlot?: import("svelte").Snippet;
  }

  let {
    prefix,
    allCases,
    selectedCases,
    onCasesChange,
    columnLabel = "Columns",
    columns,
    selectedColumns,
    onColumnsChange,
    startFrom,
    onStartFromChange,
    xMinLabel = "Iter min",
    xMin,
    onXMinChange,
    middleSlot,
    extraSlot,
  }: Props = $props();

  let caseOptions = $derived(toCaseOptions(allCases));
  let colOptions = $derived(columns.map((c) => ({ value: c, label: c })));

  let startOptions = [
    { value: "zero", label: "Zero" },
    { value: "restart", label: "Restart start" },
    { value: "custom", label: "Custom" },
  ];

  function handleXMinChange(e: Event) {
    onXMinChange(Number((e.target as HTMLInputElement).value) || 0);
  }
</script>

<FieldRow>
  <FormLabel text="Cases">
    <MultiDropdown
      class="w-[160px]"
      options={caseOptions}
      selected={selectedCases}
      onchange={onCasesChange}
      placeholder="Select cases..."
    />
  </FormLabel>

  {#if middleSlot}
    {@render middleSlot()}
  {/if}

  <FormLabel text={columnLabel}>
    <MultiDropdown
      class="w-[160px]"
      options={colOptions}
      selected={selectedColumns}
      onchange={onColumnsChange}
      placeholder="Select..."
    />
  </FormLabel>

  <FormLabel text="Start from">
    <Dropdown
      class="w-[140px]"
      options={startOptions}
      value={startFrom}
      onchange={(v) => onStartFromChange(v as "zero" | "restart" | "custom")}
    />
  </FormLabel>

  {#if startFrom === "custom"}
    <FormLabel text={xMinLabel}>
      <input
        type="number"
        step="any"
        value={xMin}
        oninput={handleXMinChange}
        class="w-[110px]"
      />
    </FormLabel>
  {/if}

  {#if extraSlot}
    {@render extraSlot()}
  {/if}
</FieldRow>
