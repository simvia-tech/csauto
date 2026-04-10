<!--
  StatusTable — sortable, selectable table of case status rows.

  Features:
  - Click to select, Shift+click for range, Ctrl+click for toggle
  - Right-click on finished cases opens convergence context menu
  - Sortable columns (click header, Ctrl+click for multi-sort)
  - Sticky left/right columns when freeze mode is on
  - Editable notes (click to prompt)
  - Status pills color-coded by state
-->
<script lang="ts">
  import { tick } from "svelte";
  import type { StatusRow } from "$lib/api/types";
  import {
    getSelectedCases,
    getActiveCaseId,
    getSelectedDoeColumns,
    getVisibleBaseColumns,
    getSorts,
    getFreezeColumns,
    selectOnly,
    toggleCase,
    selectRange,
    getSelectionAnchor,
    getVisibleCaseIds,
    updateSort,
  } from "$lib/stores/status.svelte";
  import { setCaseNote, openGui } from "$lib/api/endpoints";
  import { appPrompt, appAlert } from "$lib/actions/dialog.svelte";
  import Icon from "$lib/components/shared/Icon.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import Checkbox from "$lib/components/shared/Checkbox.svelte";
  import { ExternalLink, PenLine } from "lucide-svelte";

  interface Props {
    rows: StatusRow[];
    onContextMenu: (
      caseId: string,
      x: number,
      y: number,
      convergence: string,
    ) => void;
    onToggleAll: () => void;
    onToggleRow: (caseId: string) => void;
  }

  let { rows, onContextMenu, onToggleAll, onToggleRow }: Props = $props();

  let allChecked = $derived(
    rows.length > 0 && rows.every((r) => selectedCases.has(r.case_id)),
  );
  let someChecked = $derived(rows.some((r) => selectedCases.has(r.case_id)));
  let indeterminate = $derived(someChecked && !allChecked);

  /* Column definitions */
  interface Column {
    key: string;
    label: string;
    kind: "meta" | "doe" | "calc";
    sticky?: "left" | "right";
  }

  let doeCols = $derived(getSelectedDoeColumns());
  let visibleBase = $derived(new Set(getVisibleBaseColumns()));
  let sorts = $derived(getSorts());
  let freeze = $derived(getFreezeColumns());
  let selectedCases = $derived(getSelectedCases());
  let activeCaseId = $derived(getActiveCaseId());

  let columns = $derived.by(() => {
    const leading: Column[] = [
      { key: "_select", label: "", kind: "meta", sticky: "left" },
      { key: "case_id", label: "Case", kind: "meta", sticky: "left" },
      { key: "status", label: "Status", kind: "meta", sticky: "left" },
      ...(visibleBase.has("note")
        ? [{ key: "note", label: "Note", kind: "meta" as const }]
        : []),
    ];
    const doeColumns: Column[] = doeCols.map((col) => ({
      key: col,
      label: col,
      kind: "doe" as const,
    }));
    const allTrailing: Column[] = [
      { key: "nprocs", label: "MPI Ranks", kind: "calc" },
      { key: "nt", label: "Thread Count", kind: "calc" },
      { key: "last_iter", label: "Last Iter", kind: "calc" },
      { key: "duration", label: "Duration", kind: "calc" },
      { key: "last_mod", label: "Last Modified", kind: "calc" },
      { key: "resu_size_mb", label: "RESU Size (MB)", kind: "calc" },
    ];
    const trailing = allTrailing.filter((c) => visibleBase.has(c.key));
    const actions: Column[] = [
      { key: "_actions", label: "", kind: "meta", sticky: "right" },
    ];
    return [...leading, ...doeColumns, ...trailing, ...actions];
  });

  /* Sort indicator */
  function sortIndicator(key: string): string {
    const idx = sorts.findIndex((s) => s.key === key);
    if (idx < 0) return "";
    const arrow = sorts[idx].dir === "asc" ? "\u25B2" : "\u25BC";
    return sorts.length > 1 ? `${arrow}${idx + 1}` : arrow;
  }

  /* Header click */
  function handleHeaderClick(key: string, e: MouseEvent) {
    if (key === "_actions") return;
    updateSort(key, e.ctrlKey || e.metaKey);
  }

  /* Row click (selection) */
  function handleRowClick(caseId: string, e: MouseEvent) {
    if (e.shiftKey) {
      selectRange(getSelectionAnchor() || caseId, caseId, getVisibleCaseIds());
    } else if (e.ctrlKey || e.metaKey) {
      toggleCase(caseId);
    } else {
      selectOnly(caseId);
    }
  }

  /* Row right-click (convergence menu) */
  function handleRowContextMenu(row: StatusRow, e: MouseEvent) {
    const status = row.status?.toUpperCase() ?? "";
    if (status !== "DONE" && status !== "FAILED") return;
    e.preventDefault();
    onContextMenu(row.case_id, e.clientX, e.clientY, row.convergence ?? "");
  }

  /* Note editing */
  async function editNote(row: StatusRow) {
    const current = row.note ?? "";
    const newNote = await appPrompt(
      "Case note:",
      current,
      `Note — ${row.case_id}`,
      "",
      true,
    );
    if (newNote === null) return;
    try {
      await setCaseNote(row.case_id, newNote);
    } catch (err) {
      await appAlert(
        `Failed to set note: ${err instanceof Error ? err.message : err}`,
        "Error",
      );
    }
  }

  /* GUI launch */
  async function handleOpenGui(caseId: string) {
    try {
      await openGui(caseId);
    } catch (err) {
      await appAlert(
        `Failed to open GUI: ${err instanceof Error ? err.message : err}`,
        "Error",
      );
    }
  }

  /* Status display */
  function statusDisplayText(
    status: string | null,
    convergence: string | null,
  ): string {
    const s = status?.toUpperCase() ?? "";
    if ((s === "DONE" || s === "FAILED") && convergence === "converged")
      return "CONVERGED";
    if ((s === "DONE" || s === "FAILED") && convergence === "not_converged")
      return "NOT CONVERGED";
    return s;
  }

  function statusPillClass(
    status: string | null,
    convergence: string | null,
  ): string {
    const s = status?.toUpperCase() ?? "";
    if ((s === "DONE" || s === "FAILED") && convergence === "converged")
      return "status-converged";
    if ((s === "DONE" || s === "FAILED") && convergence === "not_converged")
      return "status-not-converged";
    if (s === "RUNNING") return "status-running";
    if (s === "DONE") return "status-done";
    if (s === "FAILED") return "status-failed";
    if (s === "PREPARED") return "status-prepared";
    return "status-unknown";
  }

  function rowClass(row: StatusRow): string {
    return selectedCases.has(row.case_id) ? "row-selected" : "";
  }

  /* Cell value */
  function cellValue(row: StatusRow, col: Column): string {
    if (col.key === "case_id") return row.case_id;
    if (col.key === "nprocs")
      return row.nprocs != null ? String(row.nprocs) : "";
    if (col.key === "nt") return row.nt != null ? String(row.nt) : "";
    if (col.key === "last_iter")
      return row.last_iter != null ? String(row.last_iter) : "";
    if (col.key === "duration") return row.duration ?? "";
    if (col.key === "last_mod") return formatLastMod(row.last_mod);
    if (col.key === "resu_size_mb")
      return row.resu_size_mb != null ? String(row.resu_size_mb) : "";
    /* DOE value */
    if (col.kind === "doe")
      return row.doe?.[col.key] != null && String(row.doe[col.key]) !== ""
        ? String(row.doe[col.key])
        : "—";
    return "";
  }

  function formatLastMod(value: string | null): string {
    if (!value) return "";
    try {
      const d = new Date(value);
      const now = new Date();
      const isToday = d.toDateString() === now.toDateString();
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      const isYesterday = d.toDateString() === yesterday.toDateString();
      const time = d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      if (isToday) return `Today ${time}`;
      if (isYesterday) return `Yesterday ${time}`;
      return (
        d.toLocaleDateString([], { month: "short", day: "numeric" }) +
        ` ${time}`
      );
    } catch {
      return value;
    }
  }

  /* Precompute left offsets for sticky columns using a dummy measurement approach */
  let stickyLeftOffsets = $state<Record<string, number>>({});
  let tableEl: HTMLTableElement | undefined = $state();

  /* Measure left-sticky column widths after render */
  $effect(() => {
    void freeze;
    void columns;
    void rows;
    if (!tableEl || !freeze) return;
    tick().then(() => {
      if (!tableEl) return;
      const leftHeaders = Array.from(
        tableEl.querySelectorAll<HTMLElement>("thead th.sticky-left"),
      );
      const offsets: Record<string, number> = {};
      let offset = 0;
      leftHeaders.forEach((th) => {
        const key = th.dataset.colKey ?? "";
        offsets[key] = offset;
        offset += th.getBoundingClientRect().width;
      });
      stickyLeftOffsets = offsets;
    });
  });

  /* Column CSS class */
  function colClass(col: Column, colIdx: number, isTh: boolean): string {
    const parts: string[] =
      isTh && col.key !== "_select" && col.key !== "_actions"
        ? ["status-sortable"]
        : [];
    if (!isTh && col.key === "case_id") parts.push("case-id");
    if (col.kind === "doe") parts.push("status-col-doe");
    if (!isTh && col.key === "note")
      parts.push(
        "max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-2",
      );
    if (freeze && col.sticky === "left") parts.push("sticky-left");
    if (freeze && col.sticky === "right") parts.push("sticky-right");
    if (freeze && col.sticky === "left") {
      const nextCol = columns[colIdx + 1];
      if (!nextCol || nextCol.sticky !== "left") parts.push("sticky-divider");
    }
    if (freeze && col.sticky === "right") {
      const prevCol = columns[colIdx - 1];
      if (!prevCol || prevCol.sticky !== "right") parts.push("sticky-divider");
    }
    return parts.join(" ");
  }

  function thClass(col: Column, colIdx: number): string {
    return colClass(col, colIdx, true);
  }

  function tdClass(col: Column, colIdx: number): string {
    return colClass(col, colIdx, false);
  }

  /** Inline style for sticky positioning */
  function stickyStyle(col: Column): string {
    if (!freeze || !col.sticky) return "";
    if (col.sticky === "right") return "position:sticky;right:0;";
    if (col.sticky === "left" && col.key in stickyLeftOffsets) {
      return `position:sticky;left:${stickyLeftOffsets[col.key]}px;`;
    }
    return "";
  }
</script>

<div id="status-table-wrap" class="table-wrap {freeze ? 'sticky-enabled' : ''}">
  <table id="status-table" bind:this={tableEl}>
    <thead>
      <tr>
        {#each columns as col, i (col.key)}
          {#if col.key === "_select"}
            <th
              class="{thClass(col, i)} !px-2.5 !py-0 w-9"
              data-col-key={col.key}
              style={stickyStyle(col)}
            >
              <div class="flex items-center justify-center h-full">
                <Checkbox
                  checked={allChecked}
                  {indeterminate}
                  onchange={onToggleAll}
                  size={14}
                />
              </div>
            </th>
          {:else if col.key === "_actions"}
            <th
              class={thClass(col, i)}
              data-col-key={col.key}
              style={stickyStyle(col)}
            ></th>
          {:else}
            <th
              class={thClass(col, i)}
              data-col-key={col.key}
              style={stickyStyle(col)}
              role="button"
              tabindex="0"
              onclick={(e) => handleHeaderClick(col.key, e)}
              onkeydown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleHeaderClick(col.key, e as unknown as MouseEvent);
                }
              }}
            >
              {col.label}
              {#if sortIndicator(col.key)}
                <span style="margin-left: 4px; font-size: 9px;"
                  >{sortIndicator(col.key)}</span
                >
              {/if}
            </th>
          {/if}
        {/each}
      </tr>
    </thead>
    <tbody id="status-body">
      {#each rows as row (row.case_id)}
        <tr
          class={rowClass(row)}
          onclick={(e) => handleRowClick(row.case_id, e)}
          oncontextmenu={(e) => handleRowContextMenu(row, e)}
        >
          {#each columns as col, i (col.key)}
            {#if col.key === "_select"}
              <td
                class="{tdClass(col, i)} !px-2.5 !py-0 w-9"
                data-col-key={col.key}
                style={stickyStyle(col)}
              >
                <div class="flex items-center justify-center h-full">
                  <Checkbox
                    checked={selectedCases.has(row.case_id)}
                    onchange={() => onToggleRow(row.case_id)}
                    size={14}
                  />
                </div>
              </td>
            {:else if col.key === "status"}
              <td
                class={tdClass(col, i)}
                data-col-key={col.key}
                style={stickyStyle(col)}
              >
                <span
                  class="status-pill {statusPillClass(
                    row.status,
                    row.convergence,
                  )}"
                >
                  {statusDisplayText(row.status, row.convergence)}
                </span>
              </td>
            {:else if col.key === "note"}
              <td
                class={tdClass(col, i)}
                data-col-key={col.key}
                style={stickyStyle(col)}
                role="button"
                tabindex="0"
                onclick={(e) => {
                  e.stopPropagation();
                  editNote(row);
                }}
                onkeydown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    editNote(row);
                  }
                }}
                title={row.note || "Add note"}
              >
                {#if row.note}
                  {row.note}
                {:else}
                  <span class="text-muted"
                    ><Icon icon={PenLine} size={12} /></span
                  >
                {/if}
              </td>
            {:else if col.key === "_actions"}
              <td
                class={tdClass(col, i)}
                data-col-key={col.key}
                style={stickyStyle(col)}
              >
                <Button
                  variant="primary"
                  size="sm"
                  onclick={(e) => {
                    e.stopPropagation();
                    handleOpenGui(row.case_id);
                  }}
                >
                  <Icon icon={ExternalLink} size={12} /> Open GUI
                </Button>
              </td>
            {:else}
              <td
                class={tdClass(col, i)}
                data-col-key={col.key}
                style={stickyStyle(col)}>{cellValue(row, col)}</td
              >
            {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
