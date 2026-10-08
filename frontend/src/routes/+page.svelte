<!--
  Main dashboard page: single-page app composed of card components.

  Loads status and the solver config on mount, and renders the cards of the
  panels the solver declares.
-->
<script lang="ts">
  import { onMount, untrack } from "svelte";
  import "../app.css";

  import DialogManager from "$lib/components/dialogs/DialogManager.svelte";
  import ToastManager from "$lib/components/shared/ToastManager.svelte";
  import HeroBanner from "$lib/components/hero/HeroBanner.svelte";
  import simviaLogo from "../assets/simvia-logo.svg";
  import StatusCard from "$lib/components/status/StatusCard.svelte";
  import ResidualPlotCard from "$lib/components/plots/ResidualPlotCard.svelte";
  import ProbesCard from "$lib/components/probes/ProbesCard.svelte";
  import PerformanceCard from "$lib/components/performance/PerformanceCard.svelte";
  import LogTailCard from "$lib/components/tail/LogTailCard.svelte";
  import CompareCard from "$lib/components/compare/CompareCard.svelte";
  import RecentErrorsCard from "$lib/components/errors/RecentErrorsCard.svelte";

  import { fetchStatus, solverIconUrl } from "$lib/api/endpoints";
  import {
    setRows,
    setDoeColumns,
    getRows,
    getFilteredRows,
    getHeroCounts,
  } from "$lib/stores/status.svelte";
  import {
    getAppConfig,
    hasPanel,
    loadAppConfig,
  } from "$lib/stores/appConfig.svelte";
  import { getToken } from "$lib/stores/auth.svelte";

  /* Hero counts, updated on every status load */
  let heroCounts = $state({
    totalCases: 0,
    shownCases: 0,
    totalRunning: 0,
    shownRunning: 0,
    totalConverged: 0,
    shownConverged: 0,
  });

  /** All case IDs, updated on each status load */
  let allCaseIds = $state<string[]>([]);

  /* Load the solver config now, and retry at once whenever the API token
     changes (Settings dialog or the 401 prompt) while it is still missing. */
  $effect(() => {
    getToken();
    untrack(() => void loadAppConfig());
  });

  /* The solver's favicon when it ships one; app.html's generic one otherwise. */
  $effect(() => {
    const config = getAppConfig();
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (link && config?.icon) link.href = solverIconUrl(config.solver);
  });

  async function loadStatus() {
    try {
      const data = await fetchStatus();
      setRows(data.rows);
      setDoeColumns(data.doe_columns);
      allCaseIds = data.rows.map((r) => r.case_id);
      heroCounts = getHeroCounts(getFilteredRows(), getRows());
    } catch (err) {
      console.error("Failed to load status:", err);
    }
  }

  onMount(() => {
    loadStatus();
  });
</script>

<DialogManager />
<ToastManager />

<HeroBanner
  totalCases={heroCounts.totalCases}
  shownCases={heroCounts.shownCases}
  totalRunning={heroCounts.totalRunning}
  shownRunning={heroCounts.shownRunning}
  totalConverged={heroCounts.totalConverged}
  shownConverged={heroCounts.shownConverged}
/>

<main class="grid grid-cols-12 gap-4 w-[min(1200px,94vw)] mx-auto pt-5 pb-12">
  {#if hasPanel("status")}
    <StatusCard onRefresh={loadStatus} />
  {/if}
  {#if hasPanel("residuals")}
    <ResidualPlotCard allCases={allCaseIds} />
  {/if}
  {#if hasPanel("probes")}
    <ProbesCard allCases={allCaseIds} />
  {/if}
  {#if hasPanel("performance")}
    <PerformanceCard allCases={allCaseIds} />
  {/if}
  {#if hasPanel("compare")}
    <CompareCard allCases={allCaseIds} />
  {/if}
  {#if hasPanel("tail")}
    <LogTailCard allCases={allCaseIds} />
  {/if}
  {#if hasPanel("errors")}
    <RecentErrorsCard allCases={allCaseIds} />
  {/if}
</main>

<footer
  class="flex items-center justify-center gap-2 py-4 text-sm text-edf-gris-fonce font-[edf-2020-soft] italic"
>
  <span>Developed by</span>
  <a
    href="https://simvia.tech"
    target="_blank"
    rel="noopener noreferrer"
    class="flex items-center"
  >
    <img src={simviaLogo} alt="Simvia" class="h-10 w-auto" />
  </a>
</footer>
