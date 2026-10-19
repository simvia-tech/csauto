// Messages between the extension and the New Campaign webview
// (webviews/new-campaign), shared by both sides. Types only.

export interface CaseInputSpec {
  key: string;
  label: string;
  extensions: string[];
  destination: string;
  required: boolean;
  multiple: boolean;
  rename_to: string;
  hint: string;
}

export interface SolverSpec {
  name: string;
  description: string;
  runtimes: string[];
  found_runtimes: string[];
  has_example: boolean;
  default_docker_image: string;
  native_bin_name: string;
  inputs: CaseInputSpec[];
  /** Path of the solver's icon (SVG), empty when it has none. */
  icon_file: string;
}

/** A solver as the page shows it: its icon inlined, since the page cannot read files. */
export interface SolverCard extends SolverSpec {
  icon?: string;
}

/** What a campaign starts from. */
export type StartKind = "example" | "files" | "folder" | "empty";

/** What csauto sees in a case: its main input file, DOE variables and (from files) the files it gets. */
export interface Inspection {
  setup_file: string;
  variables: string[];
  files?: string[];
  warnings?: string[];
}

export interface DockerImage {
  image: string;
  tag: string;
  installed: boolean;
  /** On Docker Hub: compressed size in bytes and last push date (ISO). */
  size?: number;
  updated?: string;
  /** The solver's own default image (csauto.toml without docker_image). */
  isDefault?: boolean;
}

export interface SolverSetup {
  runtime: string;
  docker_image?: string;
  solver_bin?: string;
  singularity_image?: string;
}

/** One column of a generated parameter table: a list of levels, or a numeric range to sample. */
export interface DoeParameterSpec {
  name: string;
  levels?: string[];
  min?: number;
  max?: number;
}

/** What `csauto _doe-generate` takes: the parameters, the sampling method and its settings. */
export interface DoeSpec {
  parameters: DoeParameterSpec[];
  method: "factorial" | "lhs" | "sobol" | "ccd";
  samples?: number;
  seed?: number;
}

export interface CreateRequest {
  solver: string;
  start: StartKind;
  name: string;
  files: Record<string, string[]>;
  folder?: string;
  /** The DOE table to write, when the campaign has variables or rows. */
  doe?: { columns: string[]; rows: string[][] };
  setup: SolverSetup;
  generate: boolean;
}

export type ToWebview =
  | { type: "init"; solvers: SolverCard[]; workspace: string; takenNames: string[]; logo: { light: string; dark: string } }
  /** The answer to a pick request, sent even when the dialog was cancelled (no paths). */
  | { type: "picked"; key: string; paths: string[] }
  | { type: "inspected"; inspection: Inspection }
  | { type: "inspectFailed"; message: string }
  | { type: "fileWarnings"; warnings: string[] }
  | { type: "images"; solver: string; images: DockerImage[]; hubReachable: boolean }
  | { type: "pathPicked"; purpose: "native" | "singularity"; path: string }
  /** The CSV picked for the parameter table; empty `text` when the pick was cancelled or the file unreadable. */
  | { type: "csvPicked"; name: string; text: string; error?: string }
  | { type: "doeGenerated"; columns: string[]; rows: string[][] }
  | { type: "doeGenerateFailed"; message: string }
  | { type: "progress"; message: string }
  | { type: "createFailed"; message: string };

export type ToExtension =
  | { type: "ready" }
  | { type: "pickFiles"; key: string; label: string; extensions: string[]; multiple: boolean }
  | { type: "pickFolder"; solver: string }
  | { type: "inspect"; solver: string; start: StartKind; files: Record<string, string[]>; folder?: string }
  /** Problems in the picked files, asked for before every required file is picked. */
  | { type: "checkFiles"; solver: string; files: Record<string, string[]> }
  | { type: "listImages"; solver: string }
  | { type: "pickPath"; purpose: "native" | "singularity"; solver: string }
  /** Pick a CSV file and send its text back, to fill the parameter table. */
  | { type: "pickCsv" }
  /** Generate the parameter table from levels and ranges (csauto doe). */
  | { type: "generateDoe"; spec: DoeSpec }
  /** Close the open file dialog, as Escape would (the user clicked outside it). */
  | { type: "closeDialog" }
  | { type: "create"; request: CreateRequest }
  | { type: "cancel" };
