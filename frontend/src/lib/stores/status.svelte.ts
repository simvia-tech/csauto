/**
 * Status store — the central state for the case status table.
 *
 * Holds all rows from /api/status, selection state, sort/filter/search
 * configuration, named views, and derived data for the hero banner.
 */

import type { StatusRow } from "$lib/api/types";
import { readJson, writeJson } from "$lib/utils/localStorage";

/* Sort direction type */
export interface SortRule {
  key: string;
  dir: "asc" | "desc";
}

/* Base (non-DOE) columns that can be toggled */
export const BASE_COLUMNS: { key: string; label: string }[] = [
  { key: "note", label: "Note" },
  { key: "nprocs", label: "MPI Ranks" },
  { key: "nt", label: "Thread Count" },
  { key: "last_iter", label: "Last Iter" },
  { key: "duration", label: "Duration" },
  { key: "last_mod", label: "Last Modified" },
  { key: "resu_size_mb", label: "RESU Size (MB)" },
];

/* Named view snapshot */
export interface StatusView {
  visibleColumns: string[];
  search: string;
  sorts: SortRule[];
}

/* Reactive state */
let rows = $state<StatusRow[]>([]);
let doeColumns = $state<string[]>([]);
let selectedCases = $state<Set<string>>(new Set());
let activeCaseId = $state("");
let selectionAnchor = $state("");
let visibleColumns = $state<string[]>([]);
let sorts = $state<SortRule[]>([]);
let searchQuery = $state("");
let freezeColumns = $state(true);
let autoRefresh = $state(true);
let views = $state<Record<string, StatusView>>(
  readJson("csauto_status_views", {}),
);
let activeViewName = $state(
  localStorage.getItem("csauto_status_view_selected") ?? "",
);

/* Getters */
export function getRows(): StatusRow[] {
  return rows;
}
export function getDoeColumns(): string[] {
  return doeColumns;
}
export function getSelectedCases(): Set<string> {
  return selectedCases;
}
export function getActiveCaseId(): string {
  return activeCaseId;
}
export function getSelectionAnchor(): string {
  return selectionAnchor;
}
export function getVisibleColumns(): string[] {
  return visibleColumns;
}
export function getSelectedDoeColumns(): string[] {
  return visibleColumns.filter((c) => doeColumns.includes(c));
}
export function getVisibleBaseColumns(): string[] {
  return visibleColumns.filter((c) => BASE_COLUMNS.some((b) => b.key === c));
}
export function getSorts(): SortRule[] {
  return sorts;
}
export function getSearchQuery(): string {
  return searchQuery;
}
export function getFreezeColumns(): boolean {
  return freezeColumns;
}
export function getAutoRefresh(): boolean {
  return autoRefresh;
}
export function getViews(): Record<string, StatusView> {
  return views;
}
export function getActiveViewName(): string {
  return activeViewName;
}

/* Setters */
export function setRows(r: StatusRow[]): void {
  rows = r;
}
export function setDoeColumns(cols: string[]): void {
  const isFirstLoad = doeColumns.length === 0 && cols.length > 0;
  doeColumns = cols;
  if (isFirstLoad && visibleColumns.length === 0) {
    visibleColumns = [...cols, ...BASE_COLUMNS.map((c) => c.key)];
  }
}
export function setSelectedCases(s: Set<string>): void {
  selectedCases = s;
}
export function setActiveCaseId(id: string): void {
  activeCaseId = id;
}
export function setSelectionAnchor(id: string): void {
  selectionAnchor = id;
}
export function setVisibleColumns(cols: string[]): void {
  visibleColumns = cols;
}
export function setSorts(s: SortRule[]): void {
  sorts = s;
}
export function setSearchQuery(q: string): void {
  searchQuery = q;
}
export function setFreezeColumns(f: boolean): void {
  freezeColumns = f;
}
export function setAutoRefresh(a: boolean): void {
  autoRefresh = a;
}

export function setActiveViewName(name: string): void {
  activeViewName = name;
  localStorage.setItem("csauto_status_view_selected", name);
}

/* Selection helpers */

export function toggleCase(caseId: string): void {
  const next = new Set(selectedCases);
  if (next.has(caseId)) next.delete(caseId);
  else next.add(caseId);
  selectedCases = next;
  activeCaseId = caseId;
  selectionAnchor = caseId;
}

export function selectOnly(caseId: string): void {
  selectedCases = new Set([caseId]);
  activeCaseId = caseId;
  selectionAnchor = caseId;
}

export function selectRange(
  fromId: string,
  toId: string,
  visibleIds: string[],
): void {
  const i = visibleIds.indexOf(fromId);
  const j = visibleIds.indexOf(toId);
  if (i < 0 || j < 0) return;
  const [lo, hi] = i < j ? [i, j] : [j, i];
  const next = new Set(selectedCases);
  for (let k = lo; k <= hi; k++) next.add(visibleIds[k]);
  selectedCases = next;
  activeCaseId = toId;
}

export function selectAll(visibleIds: string[]): void {
  selectedCases = new Set(visibleIds);
}

export function clearSelection(): void {
  selectedCases = new Set();
}

/* Filtering */

function buildSearchText(row: StatusRow): string {
  const parts = [row.case_id, row.status ?? "", row.note ?? ""];
  if (row.doe) {
    for (const v of Object.values(row.doe)) parts.push(String(v));
  }
  return parts.join(" ").toLowerCase();
}

export function getFilteredRows(): StatusRow[] {
  if (!searchQuery.trim()) return rows;
  const terms = searchQuery.toLowerCase().trim().split(/\s+/);
  return rows.filter((row) => {
    const text = buildSearchText(row);
    return terms.every((t) => text.includes(t));
  });
}

/* Sorting */

function normalizeValue(v: unknown): string | number {
  if (v === null || v === undefined || v === "") return "";
  const n = Number(v);
  return Number.isFinite(n) ? n : String(v).toLowerCase();
}

function getSortValue(row: StatusRow, key: string): string | number {
  if (key === "case_id") return row.case_id;
  if (key === "status") return row.status ?? "";
  if (key === "note") return row.note ?? "";
  if (key === "nprocs") return row.nprocs ?? 0;
  if (key === "nt") return row.nt ?? 0;
  if (key === "last_iter") return row.last_iter ?? 0;
  if (key === "duration") return row.duration_s ?? 0;
  if (key === "last_mod") return row.last_mod ?? "";
  if (key === "resu_size_mb") return row.resu_size_mb ?? 0;
  /* DOE column */
  const doeVal = row.doe?.[key];
  if (doeVal !== undefined) return normalizeValue(doeVal);
  return "";
}

function compareValues(a: string | number, b: string | number): number {
  if (a === "" && b === "") return 0;
  if (a === "") return 1;
  if (b === "") return -1;
  if (typeof a === "number" && typeof b === "number") return a - b;
  return String(a).localeCompare(String(b));
}

export function getSortedRows(): StatusRow[] {
  const filtered = getFilteredRows();
  if (sorts.length === 0) return filtered;

  return [...filtered].sort((a, b) => {
    for (const rule of sorts) {
      const av = getSortValue(a, rule.key);
      const bv = getSortValue(b, rule.key);
      const cmp = compareValues(av, bv);
      if (cmp !== 0) return rule.dir === "asc" ? cmp : -cmp;
    }
    return 0;
  });
}

export function getVisibleCaseIds(): string[] {
  return getSortedRows().map((r) => r.case_id);
}

/* Sort management */

export function updateSort(key: string, multi: boolean): void {
  const existing = sorts.findIndex((s) => s.key === key);
  if (multi) {
    if (existing >= 0) {
      const next = [...sorts];
      next[existing] = {
        key,
        dir: next[existing].dir === "asc" ? "desc" : "asc",
      };
      sorts = next;
    } else {
      sorts = [...sorts, { key, dir: "asc" }];
    }
  } else {
    if (existing >= 0 && sorts.length === 1) {
      sorts = [{ key, dir: sorts[0].dir === "asc" ? "desc" : "asc" }];
    } else {
      sorts = [{ key, dir: "asc" }];
    }
  }
}

/* View management */

export function captureView(): StatusView {
  return {
    visibleColumns: [...visibleColumns],
    search: searchQuery,
    sorts: sorts.map((s) => ({ ...s })),
  };
}

export function applyView(view: StatusView): void {
  visibleColumns = [...view.visibleColumns];
  searchQuery = view.search;
  sorts = view.sorts.map((s) => ({ ...s }));
}

export function saveView(name: string): void {
  views = { ...views, [name]: captureView() };
  writeJson("csauto_status_views", views);
  setActiveViewName(name);
}

export function deleteView(name: string): void {
  const next = { ...views };
  delete next[name];
  views = next;
  writeJson("csauto_status_views", next);
  if (activeViewName === name) setActiveViewName("");
}

/* Selected case status helpers */

export function getSelectedStatuses(): Set<string> {
  const statuses = new Set<string>();
  for (const row of rows) {
    if (selectedCases.has(row.case_id)) {
      statuses.add((row.status ?? "").toUpperCase());
    }
  }
  return statuses;
}

export function hasSelectedWithResu(): boolean {
  for (const row of rows) {
    if (
      selectedCases.has(row.case_id) &&
      row.resu_size_mb != null &&
      row.resu_size_mb > 0
    ) {
      return true;
    }
  }
  return false;
}

/* Hero counts (derived from current state) */

export function getHeroCounts(filteredRows: StatusRow[], allRows: StatusRow[]) {
  const totalCases = allRows.length;
  const shownCases = filteredRows.length;
  const totalRunning = allRows.filter((r) => r.status === "RUNNING").length;
  const shownRunning = filteredRows.filter(
    (r) => r.status === "RUNNING",
  ).length;
  const totalConverged = allRows.filter(
    (r) => r.convergence === "converged",
  ).length;
  const shownConverged = filteredRows.filter(
    (r) => r.convergence === "converged",
  ).length;

  return {
    totalCases,
    shownCases,
    totalRunning,
    shownRunning,
    totalConverged,
    shownConverged,
  };
}
