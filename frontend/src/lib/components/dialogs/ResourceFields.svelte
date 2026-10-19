<!--
  ResourceFields — MPI ranks, threads and max parallel for the Run and Restart
  dialogs. A resource every selected case takes from its DOE row (csauto_mpi,
  csauto_omp) is shown as such instead of asked; when only some cases do, the
  value entered applies to the others.
-->
<script lang="ts">
  import FormLabel from "#lib/components/shared/FormLabel.svelte";
  import { coveredByDoe, type ResourceCoverage } from "#lib/utils/resources.ts";

  interface Props {
    n: number;
    nt: number;
    maxParallel: number;
    coverageN: ResourceCoverage;
    coverageNt: ResourceCoverage;
  }

  let {
    n = $bindable(),
    nt = $bindable(),
    maxParallel = $bindable(),
    coverageN,
    coverageNt,
  }: Props = $props();

  /** Who the entered value is for, when some selected cases take theirs from the DOE. */
  function hint(coverage: ResourceCoverage): string {
    if (!coverage.column || coverage.defined === 0) return "";
    const others = coverage.total - coverage.defined;
    return `for the ${others} case${others > 1 ? "s" : ""} without ${coverage.column}`;
  }
</script>

{#snippet fromDoe(coverage: ResourceCoverage)}
  <span
    class="flex h-[30px] items-center rounded-md border border-border bg-control px-2.5 text-xs text-muted"
    title="Set per case by the {coverage.column} column of the DOE"
  >
    From the DOE ({coverage.column})
  </span>
{/snippet}

<div class="grid grid-cols-3 gap-2.5 mb-3">
  <FormLabel text="MPI Ranks (n)">
    {#if coveredByDoe(coverageN)}
      {@render fromDoe(coverageN)}
    {:else}
      <input type="number" min="1" step="1" bind:value={n} />
      {#if hint(coverageN)}
        <span class="text-[11px] text-muted">{hint(coverageN)}</span>
      {/if}
    {/if}
  </FormLabel>
  <FormLabel text="OMP Threads (nt)">
    {#if coveredByDoe(coverageNt)}
      {@render fromDoe(coverageNt)}
    {:else}
      <input type="number" min="1" step="1" bind:value={nt} />
      {#if hint(coverageNt)}
        <span class="text-[11px] text-muted">{hint(coverageNt)}</span>
      {/if}
    {/if}
  </FormLabel>
  <FormLabel text="Max Parallel">
    <input type="number" min="0" step="1" bind:value={maxParallel} />
  </FormLabel>
</div>
