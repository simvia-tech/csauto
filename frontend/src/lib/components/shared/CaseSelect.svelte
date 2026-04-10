<!--
  CaseSelect — a <select> element populated from a case list.

  Supports both single-select and multi-select modes.
  When `selectAll` is true (default for multi), all options are pre-selected.
  Auto-selects when cases arrive asynchronously (from empty to populated).
-->
<script lang="ts">
  interface Props {
    id?: string;
    cases: string[];
    multiple?: boolean;
    selectAll?: boolean;
    selected?: string[];
    onchange?: (selected: string[]) => void;
  }

  let {
    id,
    cases,
    multiple = false,
    selectAll = multiple,
    selected = $bindable([]),
    onchange,
  }: Props = $props();

  /* Auto-select when cases arrive and nothing is selected yet */
  let initialized = $state(false);
  $effect(() => {
    if (cases.length > 0 && !initialized) {
      initialized = true;
      if (selectAll) {
        selected = [...cases];
        onchange?.(selected);
      } else if (!multiple && cases.length > 0) {
        selected = [cases[0]];
        onchange?.(selected);
      }
    }
  });

  function handleChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    const values = Array.from(select.selectedOptions, (o) => o.value);
    selected = values;
    onchange?.(values);
  }

  let selectEl: HTMLSelectElement | undefined = $state();

  /* Sync native <select> when selected changes programmatically */
  $effect(() => {
    if (!selectEl) return;
    const sel = new Set(selected);
    for (const opt of selectEl.options) {
      opt.selected = sel.has(opt.value);
    }
  });
</script>

<select
  {id}
  {multiple}
  onchange={handleChange}
  size={multiple ? 6 : undefined}
  bind:this={selectEl}
>
  {#each cases as c (c)}
    <option value={c}>{c}</option>
  {/each}
</select>
