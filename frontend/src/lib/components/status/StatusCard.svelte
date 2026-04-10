<!--
  StatusCard — the main case status table card.

  Orchestrates StatusControls (search, DOE selector, views, bulk actions)
  and StatusTable (sortable columns, selectable rows, sticky layout).
-->
<script lang="ts">
  import CardShell from "$lib/components/shared/CardShell.svelte";
  import AutoRefreshToggle from "$lib/components/shared/AutoRefreshToggle.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import Icon from "$lib/components/shared/Icon.svelte";
  import ViewManager from "./ViewManager.svelte";
  import StatusTable from "./StatusTable.svelte";
  import ConvergenceMenu from "./ConvergenceMenu.svelte";
  import { RefreshCw, Play, RotateCcw, XCircle, Trash2 } from "lucide-svelte";
  import {
    getAutoRefresh,
    setAutoRefresh,
    getSortedRows,
    getVisibleCaseIds,
    getSelectedCases,
    getSearchQuery,
    setSearchQuery,
    setFreezeColumns,
    getActiveCaseId,
    setActiveCaseId,
    setSelectionAnchor,
    selectOnly,
    toggleCase,
    selectRange,
    selectAll,
    clearSelection,
    getSelectionAnchor,
    getSelectedStatuses,
    hasSelectedWithResu,
  } from "$lib/stores/status.svelte";
  import {
    getStatusRefreshMs,
    getAutoRefreshEnabled,
    setAutoRefreshEnabled,
    triggerGlobalRefresh,
  } from "$lib/stores/refresh.svelte";
  import {
    openRunDialog,
    openRestartDialog,
    openCleanDialog,
    appConfirm,
  } from "$lib/actions/dialog.svelte";
  import { runCase, killCase, cleanupCases } from "$lib/api/endpoints";
  import { appAlert } from "$lib/actions/dialog.svelte";

  interface Props {
    onRefresh: () => void;
  }

  let { onRefresh }: Props = $props();

  function getSelectedArray(): string[] {
    return [...getSelectedCases()];
  }

  async function runSelected() {
    const cases = getSelectedArray();
    if (!cases.length) return;
    const params = await openRunDialog(cases);
    if (!params) return;
    try {
      await runCase({
        cases,
        n: params.n,
        nt: params.nt,
        maxParallel: params.maxParallel,
      });
      onRefresh();
    } catch (err) {
      await appAlert(
        `Run failed: ${err instanceof Error ? err.message : err}`,
        "Error",
      );
    }
  }

  async function restartSelected() {
    const cases = getSelectedArray();
    if (!cases.length) return;
    const params = await openRestartDialog(cases);
    if (!params) return;
    try {
      await runCase({
        cases,
        n: params.n,
        nt: params.nt,
        maxParallel: params.maxParallel,
        restart: true,
        restartMode: params.restartMode,
        restartValue: params.restartValue,
      });
      onRefresh();
    } catch (err) {
      await appAlert(
        `Restart failed: ${err instanceof Error ? err.message : err}`,
        "Error",
      );
    }
  }

  async function killSelected() {
    const cases = getSelectedArray();
    if (!cases.length) return;
    const ok = await appConfirm(
      `Kill ${cases.length} case${cases.length > 1 ? "s" : ""}?`,
      "Confirm Kill",
      "Kill",
      "danger",
    );
    if (!ok) return;
    try {
      await killCase(cases);
      onRefresh();
    } catch (err) {
      await appAlert(
        `Kill failed: ${err instanceof Error ? err.message : err}`,
        "Error",
      );
    }
  }

  async function cleanSelected() {
    const cases = getSelectedArray();
    if (!cases.length) return;
    const choice = await openCleanDialog(cases);
    if (!choice) return;
    try {
      await cleanupCases({
        cases,
        keepLast: choice.keepLast,
        keepResu: choice.keepResu,
        deleteResu: choice.deleteResu,
        pruneResu: true,
      });
      onRefresh();
      triggerGlobalRefresh();
    } catch (err) {
      await appAlert(
        `Cleanup failed: ${err instanceof Error ? err.message : err}`,
        "Error",
      );
    }
  }

  function toggleAll() {
    const visible = getVisibleCaseIds();
    const allSelected =
      visible.length > 0 && visible.every((id) => getSelectedCases().has(id));
    if (allSelected) {
      clearSelection();
    } else {
      selectAll(visible);
    }
  }

  function toggleRow(caseId: string) {
    toggleCase(caseId);
  }

  let autoRefresh = $state(getAutoRefreshEnabled("status"));
  $effect(() => {
    setAutoRefreshEnabled("status", autoRefresh);
  });
  setFreezeColumns(true);

  /* Smart button states based on selected case statuses */
  let canRun = $derived.by(() => {
    const statuses = getSelectedStatuses();
    return (
      statuses.size > 0 &&
      [...statuses].some(
        (s) => s === "PREPARED" || s === "DONE" || s === "FAILED",
      )
    );
  });
  let canRestart = $derived.by(() => {
    const statuses = getSelectedStatuses();
    return (
      statuses.size > 0 &&
      [...statuses].some((s) => s === "DONE" || s === "FAILED") &&
      hasSelectedWithResu()
    );
  });
  let canKill = $derived.by(() => {
    const statuses = getSelectedStatuses();
    return statuses.size > 0 && statuses.has("RUNNING");
  });
  let canClean = $derived(hasSelectedWithResu());

  /* Search */
  let searchValue = $state(getSearchQuery());
  let searchTimer: ReturnType<typeof setTimeout> | null = null;

  function handleSearchInput() {
    if (searchTimer) clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      setSearchQuery(searchValue);
    }, 200);
  }

  /* Sync local checkbox state with store */
  $effect(() => setAutoRefresh(autoRefresh));

  /* Context menu state */
  let menuVisible = $state(false);
  let menuX = $state(0);
  let menuY = $state(0);
  let menuCases = $state<string[]>([]);
  let menuCurrentValue = $state("");

  function handleContextMenu(
    caseId: string,
    x: number,
    y: number,
    convergence: string,
  ) {
    menuCases = getSelectedCases().has(caseId)
      ? [...getSelectedCases()]
      : [caseId];
    menuCurrentValue = convergence;
    menuX = x;
    menuY = y;
    menuVisible = true;
  }

  function closeMenu() {
    menuVisible = false;
  }

  /* Keyboard navigation */
  function handleKeydown(e: KeyboardEvent) {
    const visibleIds = getVisibleCaseIds();
    if (!visibleIds.length) return;

    if (e.key === "Escape") {
      clearSelection();
      closeMenu();
      return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key === "a") {
      e.preventDefault();
      selectAll(visibleIds);
      return;
    }

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const delta = e.key === "ArrowDown" ? 1 : -1;
      const activeId = getActiveCaseId();
      const currentIdx = visibleIds.indexOf(activeId);
      const nextIdx = Math.max(
        0,
        Math.min(visibleIds.length - 1, currentIdx + delta),
      );
      const nextId = visibleIds[nextIdx];

      if (e.shiftKey) {
        selectRange(getSelectionAnchor() || visibleIds[0], nextId, visibleIds);
      } else {
        selectOnly(nextId);
      }
      setActiveCaseId(nextId);
      return;
    }

    if (e.key === " ") {
      e.preventDefault();
      const activeId = getActiveCaseId();
      if (activeId) {
        if (e.shiftKey) {
          selectRange(
            getSelectionAnchor() || activeId,
            activeId,
            getVisibleCaseIds(),
          );
        } else {
          toggleCase(activeId);
        }
      }
    }
  }
</script>

<svelte:window onclick={closeMenu} onscroll={closeMenu} />

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
  id="status-card"
  class="col-span-12"
  tabindex="0"
  role="grid"
  onkeydown={handleKeydown}
>
  <CardShell eyebrow="Overview" title="Status" wide id="status-card-shell">
    {#snippet actions()}
      <AutoRefreshToggle
        name="status"
        intervalMs={getStatusRefreshMs()}
        bind:checked={autoRefresh}
        {onRefresh}
      />
      {#if !autoRefresh}
        <Button variant="primary" onclick={() => onRefresh()}
          ><Icon icon={RefreshCw} /> Refresh</Button
        >
      {/if}
    {/snippet}

    <!-- Search + views + selection actions row (directly above table) -->
    <div class="flex items-center justify-between gap-3 flex-wrap mb-2.5">
      <div class="flex items-center gap-2">
        <input
          type="search"
          placeholder="Search cases..."
          class="w-[180px] !py-1 h-[30px]"
          bind:value={searchValue}
          oninput={handleSearchInput}
        />
        <ViewManager />
      </div>
      <div class="flex items-center gap-2.5">
        <span class="text-xs text-muted"
          >{getSelectedCases().size} selected</span
        >
        <Button variant="run" size="sm" onclick={runSelected} disabled={!canRun}
          ><Icon icon={Play} /> Run</Button
        >
        <Button
          variant="warning"
          size="sm"
          onclick={restartSelected}
          disabled={!canRestart}><Icon icon={RotateCcw} /> Restart</Button
        >
        <Button
          variant="danger"
          size="sm"
          onclick={killSelected}
          disabled={!canKill}><Icon icon={XCircle} /> Kill</Button
        >
        <Button
          variant="secondary"
          size="sm"
          onclick={cleanSelected}
          disabled={!canClean}><Icon icon={Trash2} /> Clean</Button
        >
      </div>
    </div>
    <StatusTable
      rows={getSortedRows()}
      onContextMenu={handleContextMenu}
      onToggleAll={toggleAll}
      onToggleRow={toggleRow}
    />
  </CardShell>
</div>

{#if menuVisible}
  <ConvergenceMenu
    cases={menuCases}
    x={menuX}
    y={menuY}
    currentValue={menuCurrentValue}
    onClose={closeMenu}
  />
{/if}
