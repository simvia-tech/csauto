<!--
  ProbesCard — tabbed card for time-domain probes and spatial profile plots.

  Tabs are integrated into the card header. Auto-refresh and refresh button
  are in the header actions area, shared across tabs.
  Tabs are disabled when they have no data, and auto-switch to the one that does.
-->
<script lang="ts">
  import CardShell from "$lib/components/shared/CardShell.svelte";
  import AutoRefreshToggle from "$lib/components/shared/AutoRefreshToggle.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import Icon from "$lib/components/shared/Icon.svelte";
  import { RefreshCw } from "lucide-svelte";
  import TimeProbePanel from "./TimeProbePanel.svelte";
  import ProfileProbePanel from "./ProfileProbePanel.svelte";
  import {
    getActiveTab,
    setActiveTab,
    getProbeCardVisible,
    getTimeState,
    getProfileState,
    getTimeHasData,
    setTimeHasData,
    getProfileHasData,
    setProfileHasData,
    autoSelectTab,
  } from "$lib/stores/probes.svelte";
  import {
    getProbeRefreshMs,
    getAutoRefreshEnabled,
    setAutoRefreshEnabled,
    onGlobalRefresh,
  } from "$lib/stores/refresh.svelte";
  import { fetchProbeFiles } from "$lib/api/endpoints";

  interface Props {
    allCases: string[];
  }

  let { allCases }: Props = $props();

  let activeTab = $derived(getActiveTab());
  let visible = $derived(getProbeCardVisible());
  let timeHasData = $derived(getTimeHasData());
  let profileHasData = $derived(getProfileHasData());

  let autoRefresh = $state(getAutoRefreshEnabled("probe"));
  $effect(() => {
    setAutoRefreshEnabled("probe", autoRefresh);
  });

  let refreshFn: (() => void) | undefined = $state();

  function handleRefresh() {
    refreshFn?.();
  }

  /* Periodically check data availability for both tabs */
  async function checkDataAvailability() {
    if (!allCases.length) return;
    try {
      const timeFiles = await fetchProbeFiles(allCases, "monitoring");
      const filtered = timeFiles.filter((f) => {
        const stem = f.replace(/\.csv$/i, "").toLowerCase();
        return stem !== "coords" && !stem.includes("coordinates");
      });
      setTimeHasData(filtered.length > 0);
    } catch {
      setTimeHasData(false);
    }
    try {
      const profileFiles = await fetchProbeFiles(allCases, "profiles");
      setProfileHasData(profileFiles.length > 0);
    } catch {
      setProfileHasData(false);
    }
  }

  $effect(() => {
    if (allCases.length > 0) checkDataAvailability();
  });

  onGlobalRefresh(() => {
    checkDataAvailability();
    handleRefresh();
  });

  /* Auto-switch tab when data availability changes */
  $effect(() => {
    void timeHasData;
    void profileHasData;
    autoSelectTab();
  });

  function switchTab(tab: "time" | "profile") {
    if (tab === "time" && !timeHasData) return;
    if (tab === "profile" && !profileHasData) return;
    setActiveTab(tab);
  }
</script>

{#if visible}
  <CardShell wide titleSlot={tabs}>
    {#snippet tabs()}
      <div>
        <div class="text-xs text-muted font-normal">Diagnostics</div>
        <div class="flex items-baseline gap-4 mt-1">
          <button
            class="bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							{!timeHasData
              ? 'text-edf-gris-moyen cursor-not-allowed opacity-50'
              : activeTab === 'time'
                ? 'text-edf-bleu-fonce cursor-pointer'
                : 'text-edf-gris-moyen cursor-pointer hover:text-muted'}"
            onclick={() => switchTab("time")}
            disabled={!timeHasData}
            title={!timeHasData
              ? "No probe data available. Run a simulation first."
              : ""}
          >
            Probes
          </button>
          <button
            class="bg-transparent border-none p-0 m-0 text-lg font-bold tracking-tight transition-colors duration-150
							{!profileHasData
              ? 'text-edf-gris-moyen cursor-not-allowed opacity-50'
              : activeTab === 'profile'
                ? 'text-edf-bleu-fonce cursor-pointer'
                : 'text-edf-gris-moyen cursor-pointer hover:text-muted'}"
            onclick={() => switchTab("profile")}
            disabled={!profileHasData}
            title={!profileHasData
              ? "No profile data available. Run a simulation first."
              : ""}
          >
            Profiles
          </button>
        </div>
      </div>
    {/snippet}

    {#snippet actions()}
      <AutoRefreshToggle
        name={activeTab === "time" ? "probePlot" : "profilePlot"}
        intervalMs={getProbeRefreshMs()}
        bind:checked={autoRefresh}
        onRefresh={handleRefresh}
      />
      {#if !autoRefresh}
        <Button variant="primary" onclick={handleRefresh}
          ><Icon icon={RefreshCw} /> Refresh</Button
        >
      {/if}
    {/snippet}

    {#if activeTab === "time"}
      <TimeProbePanel {allCases} bind:onRefresh={refreshFn} />
    {:else}
      <ProfileProbePanel {allCases} bind:onRefresh={refreshFn} />
    {/if}
  </CardShell>
{/if}
