/**
 * Residual plot store.
 *
 * Tracks selected cases, columns, start mode, and the rendered SVG.
 */

let selectedCases = $state<string[]>([]);
let columns = $state<string[]>([]);
let selectedColumns = $state<string[]>([]);
let startFrom = $state<"zero" | "restart" | "custom">("zero");
let iterMin = $state(0);
let svgHtml = $state("");
let autoRefresh = $state(true);

export function getPlotState() {
  return {
    selectedCases,
    columns,
    selectedColumns,
    startFrom,
    iterMin,
    svgHtml,
    autoRefresh,
  };
}

export function setPlotCases(c: string[]) {
  selectedCases = c;
}
export function setPlotColumns(c: string[]) {
  columns = c;
}
export function setPlotSelectedColumns(c: string[]) {
  selectedColumns = c;
}
export function setPlotStartFrom(s: "zero" | "restart" | "custom") {
  startFrom = s;
}
export function setPlotIterMin(n: number) {
  iterMin = n;
}
export function setPlotSvg(s: string) {
  svgHtml = s;
}
export function setPlotAutoRefresh(a: boolean) {
  autoRefresh = a;
}
