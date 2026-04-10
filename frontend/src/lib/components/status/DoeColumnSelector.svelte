<!--
  DoeColumnSelector — multi-select to choose which DOE columns appear in the status table.
-->
<script lang="ts">
  import {
    getDoeColumns,
    getSelectedDoeColumns,
    setSelectedDoeColumns,
  } from "$lib/stores/status.svelte";
  import Icon from "$lib/components/shared/Icon.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import FormLabel from "$lib/components/shared/FormLabel.svelte";
  import { CheckSquare, Square } from "lucide-svelte";

  let allColumns = $derived(getDoeColumns());
  let selected = $derived(getSelectedDoeColumns());

  /* Initialize once: select all DOE columns when they first arrive */
  let initialized = false;
  $effect(() => {
    const cols = getDoeColumns();
    if (cols.length > 0 && !initialized) {
      initialized = true;
      if (getSelectedDoeColumns().length === 0) {
        setSelectedDoeColumns([...cols]);
      }
    }
  });

  function handleChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    const picked = Array.from(select.selectedOptions, (o) => o.value);
    setSelectedDoeColumns(picked);
  }

  function selectAllCols() {
    setSelectedDoeColumns([...allColumns]);
  }

  function clearCols() {
    setSelectedDoeColumns([]);
  }

  let selectEl: HTMLSelectElement | undefined = $state();

  /* Sync the native <select> element when store changes */
  $effect(() => {
    if (!selectEl) return;
    const sel = new Set(selected);
    for (const opt of selectEl.options) {
      opt.selected = sel.has(opt.value);
    }
  });
</script>

{#if allColumns.length > 0}
  <FormLabel text="DOE Columns">
    <select
      id="status-doe-select"
      multiple
      size="4"
      onchange={handleChange}
      bind:this={selectEl}
    >
      {#each allColumns as col (col)}
        <option value={col}>{col}</option>
      {/each}
    </select>
  </FormLabel>
  <div class="flex gap-1 self-end">
    <Button variant="secondary" size="sm" onclick={selectAllCols}
      ><Icon icon={CheckSquare} size={12} /> All</Button
    >
    <Button variant="secondary" size="sm" onclick={clearCols}
      ><Icon icon={Square} size={12} /> None</Button
    >
  </div>
{/if}
