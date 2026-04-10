/**
 * PNG and CSV export helpers.
 *
 * savePngFromContainer() converts an inline SVG to a PNG via canvas.
 * saveCsvBlob() triggers a file download for CSV data.
 */

/**
 * Convert an SVG inside a container element to PNG and trigger a download.
 * Uses the File System Access API when available, with a fallback link click.
 */
export async function savePngFromContainer(
  containerId: string,
  filename = "plot.png",
): Promise<void> {
  const container = document.getElementById(containerId);
  const svgEl = container?.querySelector("svg");
  if (!svgEl) return;

  const { width, height } = parseSvgSize(svgEl);
  const dpr = window.devicePixelRatio || 1;
  const canvas = document.createElement("canvas");
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.scale(dpr, dpr);

  const svgData = new XMLSerializer().serializeToString(svgEl);
  const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const img = new Image();
  img.width = width;
  img.height = height;

  await new Promise<void>((resolve, reject) => {
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      resolve();
    };
    img.onerror = reject;
    img.src = url;
  });

  const pngBlob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/png"),
  );
  if (pngBlob) await saveBlobWithPicker(pngBlob, ensurePngExtension(filename));
}

/**
 * Build a plot filename from a prefix, case list, and suffix.
 */
export function buildPlotFilename(
  prefix: string,
  cases: string[],
  suffix = "png",
): string {
  const label = cases.length <= 3 ? cases.join("_") : `${cases.length}_cases`;
  const ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  return sanitizeFilename(`${prefix}_${label}_${ts}.${suffix}`);
}

/**
 * Build and download a CSV blob.
 */
export async function saveCsvBlob(
  csv: string,
  filename: string,
): Promise<void> {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  await saveBlobWithPicker(blob, filename);
}

/* Internal helpers */

function parseSvgSize(svg: SVGSVGElement): { width: number; height: number } {
  const vb = svg.getAttribute("viewBox");
  if (vb) {
    const parts = vb.split(/[\s,]+/).map(Number);
    if (parts.length === 4) return { width: parts[2], height: parts[3] };
  }
  return {
    width: svg.width.baseVal.value || 900,
    height: svg.height.baseVal.value || 500,
  };
}

async function saveBlobWithPicker(blob: Blob, filename: string): Promise<void> {
  if ("showSaveFilePicker" in window) {
    try {
      const handle = await (window as any).showSaveFilePicker({
        suggestedName: filename,
        types: [
          {
            description: blob.type.startsWith("image/") ? "Image" : "File",
            accept: { [blob.type]: [`.${filename.split(".").pop()}`] },
          },
        ],
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return;
    } catch (err: any) {
      if (err?.name === "AbortError") return;
      /* API unavailable — fall through to link download */
    }
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function ensurePngExtension(name: string): string {
  return name.endsWith(".png") ? name : `${name}.png`;
}

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_");
}
