<!--
  SetupWarnings — problems in the input files of the cases about to be launched,
  shown in the Run and Restart dialogs.
-->
<script lang="ts">
  import { onMount } from "svelte";
  import { fetchSetupWarnings } from "#lib/api/endpoints.ts";

  let { cases }: { cases: string[] } = $props();

  let warnings = $state<string[]>([]);
  onMount(() => {
    fetchSetupWarnings(cases).then(
      (found) => (warnings = found),
      () => undefined,
    );
  });
</script>

{#each warnings as warning (warning)}
  <p class="mb-2 border-l-[3px] border-warn bg-warn/10 px-3 py-2 text-xs">
    {warning}
  </p>
{/each}
