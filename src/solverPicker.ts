import * as vscode from "vscode";
import * as path from "path";
import { execFile } from "child_process";
import { CampaignConfig } from "./campaignConfig";
import { DockerImage } from "./newCampaignProtocol";
import { SolverInfo } from "./solvers";

import type { SolverSetup } from "./newCampaignProtocol";

interface Choice<T> extends vscode.QuickPickItem {
  value: T;
}

function repositoryOf(image: string): string {
  const slash = image.lastIndexOf("/");
  const colon = image.lastIndexOf(":");
  return colon > slash ? image.slice(0, colon) : image;
}

function tagOf(image: string): string {
  const slash = image.lastIndexOf("/");
  const colon = image.lastIndexOf(":");
  return colon > slash ? image.slice(colon + 1) : "latest";
}

/** "17.4.0 · docker", "native (PATH)", ...: the version and runtime a campaign runs with. */
export function describeSolverSetup(config: CampaignConfig, solver: SolverInfo | undefined): string {
  const runtime = config.runtime ?? "auto";
  if (runtime === "docker") {
    const image = config.docker_image ?? solver?.default_docker_image;
    return image ? `${tagOf(image)} · docker` : "docker";
  }
  if (runtime === "native") {
    return config.solver_bin ? `native (${config.solver_bin})` : "native (PATH)";
  }
  if (runtime === "singularity") {
    return config.singularity_image ? `${path.basename(config.singularity_image)} · singularity` : "singularity (no image set)";
  }
  return runtime;
}

function run(command: string, args: string[]): Promise<{ ok: boolean; stdout: string; stderr: string }> {
  return new Promise((resolve) => {
    execFile(command, args, { maxBuffer: 4 * 1024 * 1024 }, (error, stdout, stderr) =>
      resolve({ ok: !error, stdout, stderr }),
    );
  });
}

/** Docker Hub's name for a repository ("simvia/code_aster"), or undefined for another registry. */
function hubRepository(repository: string): string | undefined {
  const parts = repository.split("/");
  if (parts.length > 2 || (parts.length === 2 && /[.:]/.test(parts[0])) || parts[0] === "localhost") {
    return undefined;
  }
  return parts.length === 1 ? `library/${parts[0]}` : repository;
}

const hubTags = new Map<string, Promise<DockerImage[] | undefined>>();

/** Every tag of a Docker Hub repository with its size and push date; undefined when the Hub cannot be reached. */
function fetchHubTags(repository: string): Promise<DockerImage[] | undefined> {
  const hub = hubRepository(repository);
  if (!hub) {
    return Promise.resolve(undefined);
  }
  let tags = hubTags.get(hub);
  if (!tags) {
    tags = (async () => {
      const found: DockerImage[] = [];
      let url: string | null = `https://hub.docker.com/v2/repositories/${hub}/tags?page_size=100&ordering=last_updated`;
      for (let page = 0; url && page < 5; page += 1) {
        const response = await fetch(url, { signal: AbortSignal.timeout(8_000) });
        if (!response.ok) {
          return undefined;
        }
        const body = (await response.json()) as {
          next: string | null;
          results: { name: string; full_size?: number; last_updated?: string }[];
        };
        for (const tag of body.results) {
          found.push({ image: `${repository}:${tag.name}`, tag: tag.name, installed: false, size: tag.full_size, updated: tag.last_updated });
        }
        url = body.next;
      }
      return found;
    })().catch(() => undefined);
    // A failed lookup is retried next time (the network may come back).
    void tags.then((result) => result === undefined && hubTags.delete(hub));
    hubTags.set(hub, tags);
  }
  return tags;
}

const ALIAS_ORDER = ["latest", "stable", "oldstable"];

/** Newest first: the moving aliases (latest, stable...), then versions by number. */
function compareTags(a: string, b: string): number {
  const aliasA = ALIAS_ORDER.indexOf(a);
  const aliasB = ALIAS_ORDER.indexOf(b);
  if (aliasA !== -1 || aliasB !== -1) {
    return (aliasA === -1 ? 99 : aliasA) - (aliasB === -1 ? 99 : aliasB);
  }
  const pa = a.split(/[^0-9]+/).filter(Boolean).map(Number);
  const pb = b.split(/[^0-9]+/).filter(Boolean).map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i += 1) {
    if ((pa[i] ?? -1) !== (pb[i] ?? -1)) {
      return (pb[i] ?? -1) - (pa[i] ?? -1);
    }
  }
  return a.localeCompare(b);
}

/**
 * The solver's versions: the images installed in docker, then the other tags
 * of its repository on Docker Hub (when reachable), newest first.
 */
export async function solverImages(solver: SolverInfo): Promise<{ images: DockerImage[]; hubReachable: boolean }> {
  const repository = repositoryOf(solver.default_docker_image);
  const [listed, hub] = await Promise.all([
    run("docker", ["images", "--format", "{{.Repository}}:{{.Tag}}"]),
    fetchHubTags(repository),
  ]);
  const installed = listed.stdout
    .split("\n")
    .map((line) => line.trim())
    .filter((image) => image && repositoryOf(image) === repository && !image.endsWith(":<none>"));
  const byImage = new Map<string, DockerImage>();
  for (const entry of hub ?? []) {
    byImage.set(entry.image, entry);
  }
  for (const image of installed) {
    byImage.set(image, { ...(byImage.get(image) ?? { image, tag: tagOf(image) }), installed: true });
  }
  // An image named without a tag is its :latest.
  const defaultImage = `${repository}:${tagOf(solver.default_docker_image)}`;
  byImage.set(defaultImage, { ...(byImage.get(defaultImage) ?? { image: defaultImage, tag: tagOf(defaultImage), installed: false }), isDefault: true });
  const images = [...byImage.values()].sort(
    (a, b) => Number(b.installed) - Number(a.installed) || compareTags(a.tag, b.tag),
  );
  return { images, hubReachable: hub !== undefined };
}

/** "1.6 GB", "590 MB". */
function formatSize(bytes: number | undefined): string {
  if (!bytes) {
    return "";
  }
  return bytes >= 1e9 ? `${(bytes / 1e9).toFixed(1)} GB` : `${Math.round(bytes / 1e6)} MB`;
}

/** `docker pull`, with a notification while it downloads; the error text when it fails. */
export async function pullImage(image: string): Promise<string | undefined> {
  const pulled = await vscode.window.withProgress(
    { location: vscode.ProgressLocation.Notification, title: `Downloading ${image}…` },
    () => run("docker", ["pull", image]),
  );
  return pulled.ok ? undefined : pulled.stderr.trim().split("\n").pop() || `docker pull ${image} failed`;
}

async function pickDockerImage(solver: SolverInfo, current: string | undefined, title: string): Promise<string | undefined> {
  const repository = repositoryOf(solver.default_docker_image);
  const { images, hubReachable } = await vscode.window.withProgress(
    { location: vscode.ProgressLocation.Window, title: `Looking up ${repository} versions` },
    () => solverImages(solver),
  );
  const currentRaw = current ?? solver.default_docker_image;
  const currentImage = `${repositoryOf(currentRaw)}:${tagOf(currentRaw)}`;
  const items: (Choice<string | undefined> | vscode.QuickPickItem)[] = [];
  const installed = images.filter((entry) => entry.installed);
  const available = images.filter((entry) => !entry.installed);
  if (installed.length > 0) {
    items.push({ label: "Installed", kind: vscode.QuickPickItemKind.Separator });
    for (const entry of installed) {
      items.push({ label: entry.tag, description: entry.image === currentImage ? "current" : "", value: entry.image });
    }
  }
  if (available.length > 0) {
    items.push({ label: hubReachable ? "On Docker Hub (downloaded when chosen)" : "Default", kind: vscode.QuickPickItemKind.Separator });
    for (const entry of available) {
      items.push({
        label: entry.tag,
        description: [entry.image === currentImage ? "current" : "", formatSize(entry.size), entry.updated?.slice(0, 10) ?? ""]
          .filter(Boolean)
          .join(" · "),
        value: entry.image,
      });
    }
  }
  items.push({ label: "$(cloud-download) Other version…", description: `any tag of ${repository}`, value: undefined });
  const picked = (await vscode.window.showQuickPick(items, {
    title,
    placeHolder: `Which ${solver.name} version (${repository} image)?`,
    ignoreFocusOut: true,
  })) as Choice<string | undefined> | undefined;
  if (!picked) {
    return undefined;
  }
  if (picked.value) {
    if (!installed.some((entry) => entry.image === picked.value)) {
      const failure = await pullImage(picked.value);
      if (failure) {
        void vscode.window.showErrorMessage(`docker could not download ${picked.value}: ${failure}`);
        return undefined;
      }
    }
    return picked.value;
  }
  const tag = await vscode.window.showInputBox({
    title,
    prompt: `Tag of ${repository} to use (it is downloaded now)`,
    placeHolder: "e.g. 16.9.0",
    ignoreFocusOut: true,
    validateInput: (value) => (/^[\w][\w.-]*$/.test(value.trim()) ? undefined : "A docker tag, e.g. 16.9.0"),
  });
  if (!tag) {
    return undefined;
  }
  const image = `${repository}:${tag.trim()}`;
  const failure = await pullImage(image);
  if (failure) {
    void vscode.window.showErrorMessage(`docker could not download ${image}: ${failure}`);
    return undefined;
  }
  return image;
}

/**
 * Ask how the solver runs: the runtime (those found on this machine first), then
 * the version for it: a docker image tag, the native executable, or a .sif image.
 */
export async function pickSolverSetup(
  solver: SolverInfo,
  current: CampaignConfig,
  title: string,
): Promise<SolverSetup | undefined> {
  const runtimes = [...solver.runtimes].sort(
    (a, b) => Number(solver.found_runtimes.includes(b)) - Number(solver.found_runtimes.includes(a)),
  );
  const details: Record<string, string> = {
    docker: `${solver.name} from its docker image; pick the version next.`,
    native: `The ${solver.name} installed on this machine (${solver.native_bin_name}).`,
    singularity: "An apptainer/singularity image (.sif) you choose next.",
  };
  const runtime = (
    await vscode.window.showQuickPick(
      runtimes.map((value) => ({
        label: value,
        description: [
          value === current.runtime ? "current" : "",
          solver.found_runtimes.includes(value) ? "found on this machine" : "not found on this machine",
        ]
          .filter(Boolean)
          .join(" · "),
        detail: details[value],
        value,
      })),
      { title, placeHolder: `How should ${solver.name} run?`, ignoreFocusOut: true },
    )
  )?.value;
  if (!runtime) {
    return undefined;
  }

  if (runtime === "docker") {
    const image = await pickDockerImage(solver, current.docker_image, title);
    return image ? { runtime, docker_image: image } : undefined;
  }
  if (runtime === "native") {
    const items: Choice<"path" | "browse">[] = [];
    if (solver.found_runtimes.includes("native")) {
      items.push({ label: `$(terminal) ${solver.native_bin_name} found in PATH`, value: "path" });
    }
    items.push({ label: "$(folder-opened) Choose the executable…", value: "browse" });
    const how = (await vscode.window.showQuickPick(items, { title, placeHolder: `Which ${solver.native_bin_name}?`, ignoreFocusOut: true }))?.value;
    if (how === "path") {
      return { runtime, solver_bin: undefined };
    }
    if (how === "browse") {
      const chosen = await vscode.window.showOpenDialog({ title: `Choose ${solver.native_bin_name}`, canSelectMany: false });
      return chosen?.[0] ? { runtime, solver_bin: chosen[0].fsPath } : undefined;
    }
    return undefined;
  }
  const image = await vscode.window.showOpenDialog({
    title: `Choose the ${solver.name} apptainer/singularity image`,
    canSelectMany: false,
    filters: { "Singularity images": ["sif"] },
  });
  return image?.[0] ? { runtime, singularity_image: image[0].fsPath } : undefined;
}
