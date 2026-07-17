<!--
  Main dashboard page — single-page app composed of card components.

  Loads status on mount, sets up auto-refresh, and renders all cards.
  Components are added progressively across implementation phases.
-->
<script lang="ts">
  import { onMount } from "svelte";
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

  import { fetchAppConfig, fetchStatus } from "$lib/api/endpoints";
  import {
    setRows,
    setDoeColumns,
    getRows,
    getFilteredRows,
    getHeroCounts,
  } from "$lib/stores/status.svelte";
  import { setAppConfig } from "$lib/stores/appConfig.svelte";

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

  /* Dashboard panels declared by the solver adapter; null (config not loaded
     or older backend) renders everything. */
  let panels = $state<string[] | null>(null);
  const showPanel = (name: string) => panels === null || panels.includes(name);

  /** Solver-specific favicon when a matching asset exists (e.g. /favicon-code_saturne.svg). */
  async function applySolverFavicon(solver: string): Promise<void> {
    const href = `/favicon-${solver}.svg`;
    try {
      // GET rather than HEAD: the SPA fallback route only accepts GET.
      const response = await fetch(href);
      if (
        !response.ok ||
        !response.headers.get("content-type")?.includes("svg")
      )
        return;
    } catch {
      return;
    }
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (link) link.href = href;
  }

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
    fetchAppConfig()
      .then((config) => {
        setAppConfig(config);
        panels = config.panels;
        void applySolverFavicon(config.solver);
      })
      .catch(() => {});
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
  {#if showPanel("status")}
    <StatusCard onRefresh={loadStatus} />
  {/if}
  {#if showPanel("residuals")}
    <ResidualPlotCard allCases={allCaseIds} />
  {/if}
  {#if showPanel("probes")}
    <ProbesCard allCases={allCaseIds} />
  {/if}
  {#if showPanel("performance")}
    <PerformanceCard allCases={allCaseIds} />
  {/if}
  {#if showPanel("compare")}
    <CompareCard allCases={allCaseIds} />
  {/if}
  {#if showPanel("tail")}
    <LogTailCard allCases={allCaseIds} />
  {/if}
  {#if showPanel("errors")}
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
