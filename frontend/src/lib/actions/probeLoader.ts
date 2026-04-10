/**
 * Shared probe panel logic — file loading, column loading, plot fetching.
 *
 * Used by both TimeProbePanel and ProfileProbePanel to eliminate duplicated
 * load/handle patterns.
 */

import type { ProbeTabState } from "$lib/stores/probes.svelte";
import {
  fetchProbeFiles,
  fetchProbeColumns,
  fetchProbeSvg,
  fetchRestartOrigin,
} from "$lib/api/endpoints";

export interface ProbeLoaderConfig {
  scope: "monitoring" | "profiles";
  getState: () => ProbeTabState;
  setState: (partial: Partial<ProbeTabState>) => void;
  setHasData: (v: boolean) => void;
  /** Filter raw columns after fetching (e.g. exclude axis columns for time probes) */
  filterColumns?: (cols: string[]) => string[];
  /** Pick defaults after columns are loaded (e.g. auto-select axis for profiles) */
  onColumnsLoaded?: (cols: string[]) => void;
  /** Resolve the SVG axis parameter */
  getAxis: () => string;
  /** Filter files after fetching (e.g. exclude coords for time probes) */
  filterFiles?: (files: string[]) => string[];
}

export function createProbeLoader(config: ProbeLoaderConfig) {
  const { scope, getState, setState, setHasData, getAxis } = config;

  async function loadFiles() {
    const state = getState();
    if (!state.selectedCases.length) return;
    try {
      let files = await fetchProbeFiles(state.selectedCases, scope);
      if (config.filterFiles) files = config.filterFiles(files);
      setState({ files });
      setHasData(files.length > 0);
      if (files.length === 0) {
        setState({
          file: "",
          columns: [],
          selectedColumns: [],
          positionText: "",
          svgHtml: "",
        });
        return;
      }
      if (!state.file || !files.includes(state.file)) {
        setState({ file: files[0] });
        await loadColumns();
      }
    } catch (err) {
      console.error(`Failed to load ${scope} files:`, err);
    }
  }

  async function loadColumns() {
    const state = getState();
    if (!state.selectedCases.length || !state.file) return;
    try {
      const cols = await fetchProbeColumns(state.selectedCases, [state.file]);
      const filtered = config.filterColumns ? config.filterColumns(cols) : cols;
      if (config.onColumnsLoaded) {
        config.onColumnsLoaded(cols);
      } else {
        setState({ columns: filtered });
      }
      const updated = getState();
      if (updated.columns.length === 0) {
        setState({ selectedColumns: [], positionText: "", svgHtml: "" });
        return;
      }
      if (updated.selectedColumns.length === 0) {
        setState({ selectedColumns: [updated.columns[0]] });
      }
    } catch (err) {
      console.error(`Failed to load ${scope} columns:`, err);
    }
  }

  async function loadPlot() {
    let state = getState();
    if (!state.selectedCases.length) return;
    await loadFiles();
    state = getState();
    if (!state.file) {
      setState({ positionText: "", svgHtml: "" });
      return;
    }
    if (state.columns.length === 0 || state.selectedColumns.length === 0) {
      await loadColumns();
      state = getState();
      if (!state.selectedColumns.length) {
        setState({ positionText: "", svgHtml: "" });
        return;
      }
    }
    try {
      let xMin: number | undefined;
      const currentState = getState();

      if (currentState.startFrom === "restart") {
        const origins = await fetchRestartOrigin(currentState.selectedCases);
        const axisLower = getAxis().toLowerCase();
        const key =
          axisLower === "t" || axisLower === "time" ? "time" : "iteration";
        const values = Object.values(origins.origins)
          .map((o) => o[key])
          .filter((v): v is number => v !== undefined && Number.isFinite(v));
        xMin = values.length > 0 ? Math.min(...values) : undefined;
      } else if (currentState.startFrom === "custom") {
        xMin = currentState.xMin;
      }

      const svg = await fetchProbeSvg({
        cases: currentState.selectedCases,
        probes: [currentState.file],
        columns: currentState.selectedColumns,
        axis: getAxis(),
        timeMin: typeof xMin === "number" ? xMin : undefined,
        xMin,
        includeHistory: true,
      });
      if (svg) setState({ svgHtml: svg });
    } catch (err) {
      console.error(`Failed to load ${scope} plot:`, err);
    }
  }

  async function handleCasesChange(cases: string[]) {
    setState({ selectedCases: cases });
    if (cases.length === 0) {
      setState({ svgHtml: "" });
      return;
    }
    await loadFiles();
    if (scope === "monitoring") await loadPlot();
  }

  function handleColumnsChange(cols: string[]) {
    setState({ selectedColumns: cols });
    if (cols.length === 0) {
      setState({ svgHtml: "" });
      return;
    }
    loadPlot();
  }

  async function handleFileChange(value: string) {
    setState({ file: value });
    await loadColumns();
    await loadPlot();
  }

  return {
    loadFiles,
    loadColumns,
    loadPlot,
    handleCasesChange,
    handleColumnsChange,
    handleFileChange,
  };
}
