<!--
  LinePlot: interactive Chart.js line chart (log or linear y, zoom, tooltips,
  legend toggling, optional vertical markers). Updates in place so auto-refresh
  keeps the zoom. Wheel or drag to zoom, double-click to reset.
-->
<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    LogarithmicScale,
    Legend,
    Tooltip,
  } from "chart.js";
  import zoomPlugin from "chartjs-plugin-zoom";
  import annotationPlugin from "chartjs-plugin-annotation";
  import Button from "#lib/components/shared/Button.svelte";
  import Icon from "#lib/components/shared/Icon.svelte";
  import { RotateCcw } from "@lucide/svelte";
  import { saveCanvasPng } from "#lib/actions/export.ts";

  Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    LogarithmicScale,
    Legend,
    Tooltip,
    zoomPlugin,
    annotationPlugin,
  );

  export interface PlotSeries {
    label: string;
    points: [number, number][];
  }

  interface Props {
    id: string;
    series: PlotSeries[];
    markers?: number[];
    markerLabel?: string;
    xLabel: string;
    yLabel: string;
    logY?: boolean;
    emptyMessage?: string;
  }

  let {
    id,
    series,
    markers = [],
    markerLabel = "restart",
    xLabel,
    yLabel,
    logY = false,
    emptyMessage = "No data to display.",
  }: Props = $props();

  /* Same palette as csauto/svg_utils.py COLOR_PALETTE. */
  const PALETTE = [
    "#4c6ef5",
    "#f59f00",
    "#2fb344",
    "#e03131",
    "#ae3ec9",
    "#0ca678",
    "#f76707",
    "#228be6",
    "#15aabf",
    "#fab005",
  ];

  let canvas: HTMLCanvasElement;
  let chart: Chart | undefined;

  /* Resolve a theme token (may be a color-mix()) to a plain rgb() color. */
  function css(name: string): string {
    const probe = document.createElement("span");
    probe.style.color = `var(${name})`;
    canvas.parentElement!.appendChild(probe);
    const color = getComputedStyle(probe).color;
    probe.remove();
    return color;
  }

  function datasets() {
    return series.map((s, i) => ({
      label: s.label,
      data: s.points.map(([x, y]) => ({ x, y })),
      borderColor: PALETTE[i % PALETTE.length],
      backgroundColor: PALETTE[i % PALETTE.length],
      borderWidth: 1.5,
      pointRadius: 0,
      pointHoverRadius: 4,
    }));
  }

  function dataLimits() {
    const xs = series.flatMap((s) => s.points.map((p) => p[0]));
    const ys = series.flatMap((s) => s.points.map((p) => p[1]));
    if (xs.length === 0) return {};
    const range = (v: number[]) => ({
      min: v.reduce((a, b) => Math.min(a, b)),
      max: v.reduce((a, b) => Math.max(a, b)),
    });
    return { x: range(xs), y: range(ys) };
  }

  function annotations() {
    return Object.fromEntries(
      markers.map((x, i) => [
        `marker${i}`,
        {
          type: "line" as const,
          scaleID: "x",
          value: x,
          borderColor: "#f76707",
          borderDash: [6, 4],
          borderWidth: 1.5,
          label: {
            display: i === 0,
            content: markerLabel,
            position: "start" as const,
            backgroundColor: "transparent",
            color: "#f76707",
          },
        },
      ]),
    );
  }

  onMount(() => {
    const muted = css("--color-muted");
    const border = css("--color-border");
    const fg = css("--color-ink");
    const axis = (title: string, type: "linear" | "logarithmic") => ({
      type,
      bounds: "data" as const,
      title: { display: true, text: title, color: fg },
      ticks: { color: muted, includeBounds: false },
      grid: { color: border },
      border: { color: border },
    });
    /* Log axis: one tick and gridline per decade, labelled 1e-2 style. */
    const yAxis = axis(yLabel, logY ? "logarithmic" : "linear");
    if (logY) {
      Object.assign(yAxis, {
        afterBuildTicks: (scale: { ticks: { value: number }[] }) => {
          const decades = scale.ticks.filter(
            (t) => Math.abs(Math.log10(t.value) % 1) < 1e-9,
          );
          if (decades.length >= 2) scale.ticks = decades;
        },
        ticks: {
          color: muted,
          callback: (v: string | number) =>
            `1e${Math.round(Math.log10(Number(v)))}`,
        },
      });
    }
    chart = new Chart(canvas, {
      type: "line",
      data: { datasets: datasets() },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        parsing: false,
        interaction: { mode: "nearest", intersect: false },
        scales: {
          x: axis(xLabel, "linear"),
          y: yAxis,
        },
        plugins: {
          legend: {
            labels: {
              color: fg,
              usePointStyle: true,
              pointStyle: "line",
              boxWidth: 22,
              padding: 10,
              font: { size: 11 },
            },
          },
          tooltip: {
            callbacks: {
              label: (c) =>
                `${c.dataset.label} @ ${c.parsed.x}: ${Number(c.parsed.y).toPrecision(3)}`,
            },
          },
          annotation: { annotations: annotations() },
          zoom: {
            zoom: {
              wheel: { enabled: true },
              drag: { enabled: true },
              mode: "xy",
            },
            pan: { enabled: true, modifierKey: "shift", mode: "xy" },
            limits: dataLimits(),
          },
        },
      },
      plugins: [
        {
          /* Opaque background so the exported PNG is not transparent. */
          id: "background",
          beforeDraw: (c) => {
            c.ctx.save();
            c.ctx.globalCompositeOperation = "destination-over";
            c.ctx.fillStyle = css("--color-card");
            c.ctx.fillRect(0, 0, c.width, c.height);
            c.ctx.restore();
          },
        },
      ],
    });
  });

  $effect(() => {
    if (!chart) return;
    const hidden = new Set(
      chart.data.datasets
        .map((d, i) => (chart!.isDatasetVisible(i) ? null : d.label))
        .filter((l): l is string => l !== null),
    );
    chart.data.datasets = datasets();
    chart.data.datasets.forEach((d, i) => {
      if (d.label && hidden.has(d.label)) chart!.setDatasetVisibility(i, false);
    });
    chart.options.plugins!.annotation!.annotations = annotations();
    chart.options.plugins!.zoom!.limits = dataLimits();
    const scales = chart.options.scales!;
    (scales.x as { title: { text: string } }).title.text = xLabel;
    (scales.y as { title: { text: string } }).title.text = yLabel;
    chart.update("none");
  });

  onDestroy(() => chart?.destroy());

  export function savePng(filename: string) {
    return saveCanvasPng(canvas, filename);
  }
</script>

<div class="border border-border rounded-lg bg-card w-full p-2.5" {id}>
  <div class="flex items-center justify-end gap-3 mb-1">
    <span class="text-xs text-muted"
      >Scroll or drag to zoom, shift-drag to pan, double-click to reset</span
    >
    <Button variant="secondary" size="sm" onclick={() => chart?.resetZoom()}
      ><Icon icon={RotateCcw} /> Reset zoom</Button
    >
  </div>
  <div class="relative h-[clamp(380px,60vh,700px)]">
    <canvas bind:this={canvas} ondblclick={() => chart?.resetZoom()}></canvas>
    {#if series.length === 0}
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span class="text-sm text-muted italic">{emptyMessage}</span>
      </div>
    {/if}
  </div>
</div>
