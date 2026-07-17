<!--
  HeroBanner — compact top bar with title, metrics, and settings.

  Counts show "shown / total" when a search filter is active.
-->
<script lang="ts">
  import Icon from "$lib/components/shared/Icon.svelte";
  import SettingsDialog from "$lib/components/settings/SettingsDialog.svelte";
  import { Settings } from "lucide-svelte";

  import codeSaturneLogo from "../../../assets/code-saturne.svg";
  import { getAppConfig } from "$lib/stores/appConfig.svelte";

  interface Props {
    totalCases: number;
    shownCases: number;
    totalRunning: number;
    shownRunning: number;
    totalConverged: number;
    shownConverged: number;
  }

  let {
    totalCases,
    shownCases,
    totalRunning,
    shownRunning,
    totalConverged,
    shownConverged,
  }: Props = $props();

  let isFiltered = $derived(shownCases !== totalCases);
  let settingsOpen = $state(false);
</script>

<header
  class="app-header sticky top-0 z-40 flex items-center gap-6 h-14 bg-card border-b border-border max-lg:flex-wrap max-lg:h-auto max-lg:gap-2"
  style="padding-inline: max(16px, calc((100vw - 1200px) / 2));"
>
  <div class="flex items-center gap-3 mr-auto">
    {#if !getAppConfig() || getAppConfig()?.solver === "code_saturne"}
      <img src={codeSaturneLogo} alt="CODE_SATURNE" class="h-7 w-auto" />
    {:else}
      <span class="text-lg font-bold text-ink tracking-tight"
        >{getAppConfig()?.solver}</span
      >
    {/if}
  </div>

  <nav
    class="flex items-center gap-5 max-lg:gap-3 max-lg:order-3 max-lg:w-full"
  >
    <div class="flex items-baseline gap-1.5">
      <span class="text-lg font-bold text-edf-bleu-fonce tracking-tight"
        >{#if isFiltered}{shownCases}/{/if}{totalCases}</span
      >
      <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"
        >{totalCases === 1 ? "case" : "cases"}</span
      >
    </div>
    <div class="flex items-baseline gap-1.5">
      <span class="text-lg font-bold text-edf-bleu-clair tracking-tight"
        >{#if isFiltered}{shownRunning}/{/if}{totalRunning}</span
      >
      <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"
        >running</span
      >
    </div>
    <div class="flex items-baseline gap-1.5">
      <span class="text-lg font-bold text-edf-vert-fonce tracking-tight"
        >{#if isFiltered}{shownConverged}/{/if}{totalConverged}</span
      >
      <span class="text-sm font-[edf-2020-soft] italic text-edf-noir"
        >converged</span
      >
    </div>
  </nav>

  <div class="flex items-center">
    <button
      class="flex items-center justify-center w-9 h-9 border border-border rounded-md bg-control text-ink cursor-pointer transition-colors duration-150 hover:bg-control-hover hover:border-border"
      onclick={() => (settingsOpen = true)}
      title="Settings"
    >
      <Icon icon={Settings} size={18} />
    </button>
  </div>
</header>

{#if settingsOpen}
  <SettingsDialog onClose={() => (settingsOpen = false)} />
{/if}
