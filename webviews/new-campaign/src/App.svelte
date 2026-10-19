<!--
  New Campaign: one page, filled top to bottom. The extension does the file
  dialogs and runs csauto; this page only collects choices (see
  src/newCampaignProtocol.ts for the messages).
-->
<script lang="ts">
  import type {
    CreateRequest,
    DockerImage,
    DoeSpec,
    Inspection,
    SolverCard,
    StartKind,
    ToExtension,
    ToWebview,
  } from "../../../src/newCampaignProtocol";
  import Icon from "./Icon.svelte";
  import Checkbox from "./ui/Checkbox.svelte";
  import Select, { type SelectOption } from "./ui/Select.svelte";

  const vscode = acquireVsCodeApi();
  // Plain data only: postMessage cannot clone the proxies Svelte wraps state in.
  const post = (message: ToExtension) => vscode.postMessage($state.snapshot(message));

  let solvers = $state<SolverCard[]>([]);
  let logo = $state({ light: "", dark: "" });
  let workspace = $state("");
  let takenNames = $state<string[]>([]);

  let solverName = $state("");
  let start = $state<StartKind>("example");
  let files = $state<Record<string, string[]>>({});
  let folder = $state("");
  let inspection = $state<Inspection | undefined>();
  let inspectError = $state("");
  let fileWarnings = $state<string[]>([]);
  let rows = $state<string[][]>([]);
  // Reserved columns an imported CSV brings along with the placeholders (case_id, csauto_mpi, csauto_omp).
  let extraColumns = $state<string[]>([]);
  let importNotes = $state<string[]>([]);
  let importError = $state("");

  // The generator: for each column, a list of levels or a range to sample.
  interface GeneratorInput {
    kind: "levels" | "range";
    levels: string;
    min: string;
    max: string;
  }
  let generatorOpen = $state(false);
  let generatorInputs = $state<Record<string, GeneratorInput>>({});
  // Resource columns (csauto_mpi, csauto_omp) added to the generated table.
  let generatorResources = $state<string[]>([]);
  let generatorMethod = $state<DoeSpec["method"]>("factorial");
  let generatorSamples = $state(8);
  let generatorSeed = $state(0);
  let generating = $state(false);
  let generatorError = $state("");

  let name = $state("");
  let runtime = $state("");
  let images = $state<DockerImage[]>([]);
  let imagesLoading = $state(false);
  let hubReachable = $state(true);
  let image = $state("");
  let otherTag = $state("");
  let nativePath = $state("");
  let sifPath = $state("");
  let generate = $state(true);

  let busy = $state(false);
  // A file dialog is open: VS Code's dialog does not block the page, so the page blocks itself.
  let dialogOpen = $state(false);
  let progress = $state("");
  let createError = $state("");

  const solver = $derived(solvers.find((candidate) => candidate.name === solverName));
  const variables = $derived(inspection?.variables ?? []);
  const columns = $derived([...variables, ...extraColumns]);
  const generatorColumns = $derived([...variables, ...generatorResources]);
  const generatorNeedsSamples = $derived(generatorMethod === "lhs" || generatorMethod === "sobol");

  const methodOptions: SelectOption[] = [
    { value: "factorial", label: "Full factorial", detail: "every combination of the levels" },
    { value: "lhs", label: "Latin hypercube", detail: "space-filling sample of the ranges" },
    { value: "sobol", label: "Sobol", detail: "quasi-random sample of the ranges; needs csauto[doe]" },
    { value: "ccd", label: "Central composite", detail: "corners, axes and center of the ranges" },
  ];
  const shownWarnings = $derived(start === "files" ? fileWarnings : (inspection?.warnings ?? []));
  const needsCase = $derived(start === "files" || start === "folder");
  const repository = $derived(solver ? repositoryOf(solver.default_docker_image) : "");

  function repositoryOf(imageName: string): string {
    const slash = imageName.lastIndexOf("/");
    const colon = imageName.lastIndexOf(":");
    return colon > slash ? imageName.slice(0, colon) : imageName;
  }

  function freeName(base: string): string {
    let candidate = base;
    for (let n = 2; takenNames.includes(candidate); n += 1) {
      candidate = `${base}-${n}`;
    }
    return candidate;
  }

  function formatSize(bytes: number): string {
    return bytes >= 1e9 ? `${(bytes / 1e9).toFixed(1)} GB` : `${Math.round(bytes / 1e6)} MB`;
  }

  const runtimeOptions = $derived<SelectOption[]>(
    (solver?.runtimes ?? []).map((candidate) => ({
      value: candidate,
      label: candidate,
      detail: solver?.found_runtimes.includes(candidate) ? "found on this machine" : "not found on this machine",
    })),
  );

  const versionOptions = $derived<SelectOption[]>([
    ...images.map((entry) => ({
      value: entry.image,
      label: `${entry.tag}${entry.isDefault ? "  (csauto's default)" : ""}`,
      detail: entry.installed
        ? "installed"
        : [entry.size ? formatSize(entry.size) : "", entry.updated?.slice(0, 10) ?? ""].filter(Boolean).join("  ·  "),
      group: entry.installed ? "Installed" : hubReachable ? "On Docker Hub, downloaded when the campaign is created" : "Not installed",
    })),
    { value: "__other__", label: "Another tag…", group: "Other" },
  ]);

  function basename(filePath: string): string {
    return filePath.split(/[\\/]/).pop() ?? filePath;
  }

  window.addEventListener("message", (event: MessageEvent<ToWebview>) => {
    const message = event.data;
    switch (message.type) {
      case "init":
        solvers = message.solvers;
        workspace = message.workspace;
        takenNames = message.takenNames;
        logo = message.logo;
        if (solvers.length > 0) {
          chooseSolver(solvers[0].name);
        }
        break;
      case "picked":
        dialogOpen = false;
        if (message.paths.length === 0) {
          break;
        }
        if (message.key === "__folder__") {
          folder = message.paths[0] ?? folder;
        } else {
          const spec = solver?.inputs.find((input) => input.key === message.key);
          const current = files[message.key] ?? [];
          const merged = spec?.multiple ? [...current, ...message.paths.filter((p) => !current.includes(p))] : message.paths;
          files = { ...files, [message.key]: merged };
        }
        inspect();
        break;
      case "inspected": {
        // Keep the rows typed so far when picking another file leaves the parameters as they were.
        const same = message.inspection.variables.join("\n") === variables.join("\n");
        inspection = message.inspection;
        inspectError = "";
        if (!same || rows.length === 0) {
          extraColumns = [];
          importNotes = [];
          rows = message.inspection.variables.length > 0 ? [message.inspection.variables.map(() => "")] : [];
        }
        break;
      }
      case "csvPicked":
        dialogOpen = false;
        importError = message.error ?? "";
        if (message.text) {
          importRows(message.name, message.text);
        }
        break;
      case "doeGenerated": {
        generating = false;
        generatorError = "";
        extraColumns = message.columns.filter((column) => !variables.includes(column));
        const order = [...variables, ...extraColumns].map((column) => message.columns.indexOf(column));
        rows = message.rows.map((cells) => order.map((index) => (index >= 0 ? (cells[index] ?? "") : "")));
        importError = "";
        const method = methodOptions.find((option) => option.value === generatorMethod)?.label ?? generatorMethod;
        importNotes = [`${rows.length} case${rows.length === 1 ? "" : "s"} generated (${method.toLowerCase()}).`];
        break;
      }
      case "doeGenerateFailed":
        generating = false;
        generatorError = message.message;
        break;
      case "fileWarnings":
        fileWarnings = message.warnings;
        break;
      case "inspectFailed":
        inspection = undefined;
        inspectError = message.message;
        break;
      case "images":
        if (message.solver === solverName) {
          images = message.images;
          imagesLoading = false;
          hubReachable = message.hubReachable;
          image = images.find((candidate) => candidate.isDefault)?.image ?? images[0]?.image ?? "";
        }
        break;
      case "pathPicked":
        dialogOpen = false;
        if (!message.path) {
          break;
        }
        if (message.purpose === "native") {
          nativePath = message.path;
        } else {
          sifPath = message.path;
        }
        break;
      case "progress":
        progress = message.message;
        break;
      case "createFailed":
        busy = false;
        progress = "";
        createError = message.message;
        break;
    }
  });

  function openDialog(message: ToExtension) {
    dialogOpen = true;
    post(message);
  }

  function chooseSolver(nameOfSolver: string) {
    solverName = nameOfSolver;
    const chosen = solvers.find((candidate) => candidate.name === nameOfSolver);
    if (!chosen) {
      return;
    }
    start = chosen.has_example ? "example" : "files";
    files = {};
    folder = "";
    inspection = undefined;
    inspectError = "";
    resetTable();
    runtime = chosen.found_runtimes[0] ?? chosen.runtimes[0] ?? "";
    images = [];
    imagesLoading = true;
    image = "";
    otherTag = "";
    name = freeName(`${chosen.name}-campaign`);
    post({ type: "listImages", solver: chosen.name });
  }

  function chooseStart(kind: StartKind) {
    start = kind;
    inspection = undefined;
    inspectError = "";
    resetTable();
    inspect();
  }

  function resetTable() {
    rows = [];
    extraColumns = [];
    importNotes = [];
    importError = "";
    generatorOpen = false;
    generatorInputs = {};
    generatorResources = [];
    generatorError = "";
  }

  const kindOptions: SelectOption[] = [
    { value: "levels", label: "Levels" },
    { value: "range", label: "Range" },
  ];

  // Every generator column gets its inputs once, so what was typed survives adding a column.
  $effect(() => {
    for (const column of generatorColumns) {
      if (!generatorInputs[column]) {
        generatorInputs[column] = { kind: "levels", levels: "", min: "", max: "" };
      }
    }
  });

  function addGeneratorResource(column: string) {
    if (!generatorResources.includes(column)) {
      generatorResources = [...generatorResources, column];
    }
  }

  function removeGeneratorResource(column: string) {
    generatorResources = generatorResources.filter((candidate) => candidate !== column);
  }

  /** Levels typed as "1, 2, 4": split on commas or semicolons, or on spaces when there are none. */
  function splitLevels(text: string): string[] {
    const separator = /[,;]/.test(text) ? /[,;]/ : /\s+/;
    return text
      .split(separator)
      .map((level) => level.trim())
      .filter(Boolean);
  }

  /** Build the csauto doe request from the generator inputs, or set generatorError and return undefined. */
  function generatorSpec(): DoeSpec | undefined {
    if (generatorColumns.length === 0) {
      generatorError = "Add a resource column to generate a table for a case without parameters.";
      return undefined;
    }
    const parameters: DoeSpec["parameters"] = [];
    for (const column of generatorColumns) {
      const input = generatorInputs[column] ?? { kind: "levels", levels: "", min: "", max: "" };
      if (input.kind === "levels") {
        const levels = splitLevels(input.levels);
        if (levels.length === 0) {
          generatorError = `Give ${column} at least one level.`;
          return undefined;
        }
        if (new Set(levels).size !== levels.length) {
          generatorError = `${column} has duplicate levels.`;
          return undefined;
        }
        parameters.push({ name: column, levels });
      } else {
        const min = Number(input.min);
        const max = Number(input.max);
        if (input.min.trim() === "" || input.max.trim() === "" || !Number.isFinite(min) || !Number.isFinite(max)) {
          generatorError = `Give ${column} a numeric min and max.`;
          return undefined;
        }
        if (min >= max) {
          generatorError = `${column}: min must be less than max.`;
          return undefined;
        }
        parameters.push({ name: column, min, max });
      }
    }
    const hasRange = parameters.some((parameter) => parameter.levels === undefined);
    if (generatorMethod === "factorial" && hasRange) {
      generatorError = "Full factorial takes levels only: give every column levels, or pick another method.";
      return undefined;
    }
    if (generatorMethod !== "factorial" && !hasRange) {
      generatorError = `${methodOptions.find((option) => option.value === generatorMethod)?.label} needs at least one range; with levels only, use Full factorial.`;
      return undefined;
    }
    if (generatorNeedsSamples && (!Number.isInteger(generatorSamples) || generatorSamples <= 0)) {
      generatorError = "Samples must be an integer > 0.";
      return undefined;
    }
    const spec: DoeSpec = { parameters, method: generatorMethod };
    if (generatorNeedsSamples) {
      spec.samples = generatorSamples;
      spec.seed = Number.isInteger(generatorSeed) ? generatorSeed : 0;
    }
    return spec;
  }

  function generateTable() {
    const spec = generatorSpec();
    if (!spec) {
      return;
    }
    generatorError = "";
    generating = true;
    post({ type: "generateDoe", spec });
  }

  function removeFile(key: string, filePath: string) {
    files = { ...files, [key]: (files[key] ?? []).filter((p) => p !== filePath) };
    inspect();
  }

  const missingInputs = $derived(
    solver?.inputs.filter((input) => input.required && (files[input.key] ?? []).length === 0) ?? [],
  );

  function inspect() {
    if (!solver) {
      return;
    }
    fileWarnings = [];
    if (start === "files" && Object.values(files).some((paths) => paths.length > 0)) {
      post({ type: "checkFiles", solver: solver.name, files: $state.snapshot(files) });
    }
    if (start === "files" && missingInputs.length === 0) {
      post({ type: "inspect", solver: solver.name, start, files: $state.snapshot(files) });
    } else if (start === "folder" && folder) {
      post({ type: "inspect", solver: solver.name, start, files: {}, folder });
    } else {
      inspection = undefined;
    }
  }

  function addRow() {
    rows = [...rows, rows.length > 0 ? [...rows[rows.length - 1]] : columns.map(() => "")];
  }

  function removeRow(index: number) {
    rows = rows.filter((_, rowIndex) => rowIndex !== index);
  }

  /** DOE columns csauto reads itself; an imported file may carry them next to the placeholders. */
  const RESERVED_COLUMNS = ["case_id", "csauto_mpi", "csauto_omp"];

  /**
   * Split CSV or TSV text into trimmed cells. The delimiter is the one most used
   * in the first line (tab, semicolon or comma); quoted cells may hold it, quotes
   * and line breaks. Blank lines are dropped.
   */
  function parseDelimited(text: string): string[][] {
    const firstLine = text.split(/\r?\n/, 1)[0] ?? "";
    const delimiter = ["\t", ";", ","].reduce((best, candidate) =>
      firstLine.split(candidate).length > firstLine.split(best).length ? candidate : best,
    );
    const table: string[][] = [];
    let row: string[] = [];
    let cell = "";
    let quoted = false;
    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      if (quoted) {
        if (char === '"' && text[index + 1] === '"') {
          cell += '"';
          index += 1;
        } else if (char === '"') {
          quoted = false;
        } else {
          cell += char;
        }
      } else if (char === '"' && cell === "") {
        quoted = true;
      } else if (char === delimiter) {
        row.push(cell.trim());
        cell = "";
      } else if (char === "\n" || char === "\r") {
        if (char === "\r" && text[index + 1] === "\n") {
          index += 1;
        }
        row.push(cell.trim());
        if (row.some((value) => value)) {
          table.push(row);
        }
        row = [];
        cell = "";
      } else {
        cell += char;
      }
    }
    row.push(cell.trim());
    if (row.some((value) => value)) {
      table.push(row);
    }
    return table;
  }

  /** Fill the table from a CSV file: its header names the columns, which may include the reserved ones. */
  function importRows(fileName: string, text: string) {
    importNotes = [];
    const parsed = parseDelimited(text);
    if (parsed.length < 2) {
      importError = `${fileName} needs a header line and at least one row.`;
      return;
    }
    const header = parsed[0];
    const reserved = header.filter((column) => RESERVED_COLUMNS.includes(column));
    const ignored = header.filter((column) => !variables.includes(column) && !reserved.includes(column));
    const missing = variables.filter((column) => !header.includes(column));
    if (missing.length === variables.length && reserved.length === 0) {
      importError =
        variables.length > 0
          ? `No column of ${fileName} matches the case's parameters (${variables.join(", ")}).`
          : `${fileName} has no column csauto can use: the case has no parameters, so only ${RESERVED_COLUMNS.join(", ")} apply.`;
      return;
    }
    importError = "";
    extraColumns = reserved;
    const order = [...variables, ...reserved].map((column) => header.indexOf(column));
    rows = parsed.slice(1).map((cells) => order.map((index) => (index >= 0 ? (cells[index] ?? "") : "")));
    const notes = [`${rows.length} case${rows.length === 1 ? "" : "s"} imported from ${fileName}.`];
    if (ignored.length > 0) {
      notes.push(`Ignored columns the case does not use: ${ignored.join(", ")}.`);
    }
    if (missing.length > 0) {
      notes.push(`Columns missing from the file, left empty: ${missing.join(", ")}.`);
    }
    importNotes = notes;
  }

  /** Paste rows copied from a spreadsheet or a CSV file into the table. */
  function pasteRows(event: ClipboardEvent) {
    const text = event.clipboardData?.getData("text") ?? "";
    const lines = text.split(/\r?\n/).filter((line) => line.trim());
    if (lines.length < 2 && !text.includes("\t") && !text.includes(",")) {
      return;
    }
    event.preventDefault();
    const parsed = parseDelimited(text);
    const header = parsed[0].every((cell) => columns.includes(cell)) ? parsed.shift() : undefined;
    const order = header ? columns.map((column) => header.indexOf(column)) : columns.map((_, index) => index);
    rows = [...rows.filter((row) => row.some((cell) => cell)), ...parsed.map((cells) => order.map((index) => cells[index] ?? ""))];
  }

  const nameError = $derived(
    !name.trim()
      ? "Give the campaign folder a name."
      : !/^[\w][\w.-]*$/.test(name.trim())
        ? "Letters, digits, dots, dashes and underscores only."
        : takenNames.includes(name.trim())
          ? `${name.trim()} already exists in ${workspace}.`
          : "",
  );

  const caseError = $derived(
    !needsCase
      ? ""
      : start === "files" && missingInputs.length > 0
        ? `Pick: ${missingInputs.map((input) => input.label.toLowerCase()).join(", ")}.`
        : start === "folder" && !folder
          ? "Choose the folder of your case."
          : inspectError || (inspection ? "" : "Checking your case…"),
  );

  // Empty cells are fine: csauto prepare renders them as empty values (a parameter only
  // used inside an IF block, say). A row with nothing in it is a mistake, though.
  const doeError = $derived(
    !needsCase || !generate || columns.length === 0
      ? ""
      : rows.length === 0
        ? "Add at least one case, or untick Generate the cases now."
        : rows.some((row) => row.every((cell) => !cell.trim()))
          ? "Fill or remove the empty rows of the parameter table, or untick Generate the cases now."
          : "",
  );

  const runtimeError = $derived(
    runtime === "docker" && !(image === "__other__" ? otherTag.trim() : image)
      ? "Choose a version."
      : runtime === "singularity" && !sifPath
        ? "Choose the .sif image."
        : "",
  );

  const blocking = $derived(nameError || caseError || doeError || runtimeError);

  function create() {
    if (!solver || blocking) {
      return;
    }
    const setup: CreateRequest["setup"] = { runtime };
    if (runtime === "docker") {
      setup.docker_image = image === "__other__" ? `${repository}:${otherTag.trim()}` : image;
    } else if (runtime === "native" && nativePath) {
      setup.solver_bin = nativePath;
    } else if (runtime === "singularity") {
      setup.singularity_image = sifPath;
    }
    busy = true;
    createError = "";
    progress = "Creating the campaign…";
    post({
      type: "create",
      request: {
        solver: solver.name,
        start,
        name: name.trim(),
        files: $state.snapshot(files),
        folder: start === "folder" ? folder : undefined,
        doe: needsCase && columns.length > 0 ? { columns: [...columns], rows: $state.snapshot(rows) } : undefined,
        setup,
        generate,
      },
    });
  }

  post({ type: "ready" });
</script>

{#snippet warnings()}
  {#each shownWarnings as warning (warning)}
    <p class="mt-2 flex items-start gap-1.5 text-sm text-ui-warning"><Icon name="alert" size={14} /> {warning}</p>
  {/each}
{/snippet}

{#snippet tableTools(withAddRow: boolean)}
  <div class="mt-2 flex flex-wrap items-center gap-2">
    {#if withAddRow}
      <button class="btn-ghost" onclick={addRow} disabled={busy}><Icon name="plus" size={13} /> Add a case</button>
    {/if}
    <button class="btn-ghost" onclick={() => openDialog({ type: "pickCsv" })} disabled={busy}><Icon name="file" size={13} /> Import a CSV…</button>
    <button class="btn-ghost" onclick={() => (generatorOpen = !generatorOpen)} disabled={busy} aria-expanded={generatorOpen}>
      <Icon name="beaker" size={13} /> {generatorOpen ? "Hide the generator" : "Generate…"}
    </button>
  </div>
  {#if generatorOpen}
    {@render generator()}
  {/if}
  {@render importMessages()}
{/snippet}

{#snippet generator()}
  <div class="mt-3 rounded border border-ui-border bg-ui-bg p-3">
    <p class="mb-2.5 text-xs text-ui-text-muted">
      Give each column a list of levels (<code>1, 2, 4</code>) or a range to sample, pick a method, then generate. The table
      below is replaced and stays editable.
    </p>
    {#if generatorColumns.length > 0}
      <div class="grid grid-cols-[auto_auto_1fr] items-center gap-x-3 gap-y-2">
        {#each generatorColumns as column (column)}
          {@const input = generatorInputs[column]}
          {#if input}
            <div class="flex items-center gap-1.5">
              <code class="text-sm">{column}</code>
              {#if generatorResources.includes(column)}
                <button class="icon-btn" onclick={() => removeGeneratorResource(column)} disabled={busy} aria-label={`Remove ${column}`}>
                  <Icon name="x" size={12} />
                </button>
              {/if}
            </div>
            <Select options={kindOptions} value={input.kind} onSelect={(value) => (input.kind = value as GeneratorInput["kind"])} disabled={busy || generating} />
            {#if input.kind === "levels"}
              <input type="text" class="text-input" bind:value={input.levels} placeholder="1, 2, 4" disabled={busy || generating} aria-label={`${column} levels`} />
            {:else}
              <div class="flex items-center gap-2">
                <input type="text" class="text-input" bind:value={input.min} placeholder="min" disabled={busy || generating} aria-label={`${column} min`} />
                <span class="text-xs text-ui-text-muted">to</span>
                <input type="text" class="text-input" bind:value={input.max} placeholder="max" disabled={busy || generating} aria-label={`${column} max`} />
              </div>
            {/if}
          {/if}
        {/each}
      </div>
    {/if}
    {#if RESERVED_COLUMNS.some((column) => column !== "case_id" && !generatorResources.includes(column))}
      <div class="mt-2.5 flex flex-wrap items-center gap-2 text-xs text-ui-text-muted">
        <span>Resources per case:</span>
        {#each RESERVED_COLUMNS.filter((column) => column !== "case_id" && !generatorResources.includes(column)) as column (column)}
          <button class="btn-ghost" onclick={() => addGeneratorResource(column)} disabled={busy}><Icon name="plus" size={12} /> <code>{column}</code></button>
        {/each}
      </div>
    {/if}
    <div class="mt-3 flex flex-wrap items-end gap-3">
      <label class="flex flex-col gap-1 text-xs text-ui-text-muted">
        Method
        <Select options={methodOptions} value={generatorMethod} onSelect={(value) => (generatorMethod = value as DoeSpec["method"])} disabled={busy || generating} />
      </label>
      {#if generatorNeedsSamples}
        <label class="flex flex-col gap-1 text-xs text-ui-text-muted">
          Samples
          <input type="number" class="text-input !w-24" min="1" step="1" bind:value={generatorSamples} disabled={busy || generating} />
        </label>
        <label class="flex flex-col gap-1 text-xs text-ui-text-muted">
          Seed
          <input type="number" class="text-input !w-24" step="1" bind:value={generatorSeed} disabled={busy || generating} />
        </label>
      {/if}
      <button class="btn-secondary" onclick={generateTable} disabled={busy || generating}>
        {#if generating}<Icon name="spinner" size={13} /> Generating…{:else}Generate the table{/if}
      </button>
    </div>
    {#if generatorError}
      <p class="mt-2 flex items-start gap-1.5 text-sm text-ui-error"><Icon name="alert" size={14} /> {generatorError}</p>
    {/if}
  </div>
{/snippet}

{#snippet importMessages()}
  {#if importError}
    <p class="mt-2 flex items-start gap-1.5 text-sm text-ui-error"><Icon name="alert" size={14} /> {importError}</p>
  {/if}
  {#each importNotes as note (note)}
    <p class="mt-1.5 text-xs text-ui-text-muted">{note}</p>
  {/each}
{/snippet}

{#snippet stepHead(number: number, title: string, note = "")}
  <div class="mb-3 flex items-center gap-2.5">
    <span class="inline-grid size-[22px] place-items-center rounded-full border border-ui-border text-xs font-semibold text-ui-text-secondary">
      {number}
    </span>
    <h2 class="text-[1.05em] font-semibold text-ui-text-primary">{title}</h2>
    {#if note}<span class="ml-auto text-xs text-ui-text-muted">{note}</span>{/if}
  </div>
{/snippet}

<div class="flex min-h-screen flex-col">
<div class="mx-auto w-full max-w-[940px] flex-1 px-8 pt-7">
  <header class="mb-6 flex items-center gap-4">
    {#if logo.light}<img class="logo-light size-11" src={logo.light} alt="" />{/if}
    {#if logo.dark}<img class="logo-dark size-11" src={logo.dark} alt="" />{/if}
    <div>
      <h1 class="mb-1 text-xl font-semibold tracking-tight text-ui-text-primary">New campaign</h1>
      <p class="text-sm text-ui-text-secondary">
        A campaign runs one case per row of a parameter table: csauto copies your case for each row, fills in its
        <code>{"{parameters}"}</code> and runs them with your solver.
      </p>
    </div>
  </header>

  <ol class="mb-6 grid list-none gap-3.5 p-0">
    <li class="card">
      {@render stepHead(1, "Solver")}
      <div class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-2.5">
        {#each solvers as candidate (candidate.name)}
          <button
            class="option {candidate.name === solverName ? 'selected' : ''}"
            onclick={() => chooseSolver(candidate.name)}
            disabled={busy}
            aria-pressed={candidate.name === solverName}
          >
            {#if candidate.icon}<img class="size-8 shrink-0" src={candidate.icon} alt="" />{/if}
            <span class="flex flex-col gap-0.5">
              <strong class="text-sm">{candidate.name}</strong>
              <span class="text-xs text-ui-text-muted">{candidate.description}</span>
            </span>
          </button>
        {/each}
      </div>
    </li>

    {#if solver}
      <li class="card">
        {@render stepHead(2, "Start from")}
        <div class="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2.5">
          {#each [
            { kind: "example", icon: "beaker", title: "The example", text: `A small ${solver.name} study, ready to run.`, show: solver.has_example },
            { kind: "files", icon: "files", title: "My files", text: "Pick your input files and meshes.", show: true },
            { kind: "folder", icon: "folder", title: "A case folder", text: `A folder already laid out as a ${solver.name} case.`, show: true },
            { kind: "empty", icon: "empty", title: "Nothing", text: "An empty TEMPLATE/ you fill yourself.", show: true },
          ] as tile (tile.kind)}
            {#if tile.show}
              <button
                class="option flex-col !items-start !gap-1 {start === tile.kind ? 'selected' : ''}"
                onclick={() => chooseStart(tile.kind as StartKind)}
                disabled={busy}
                aria-pressed={start === tile.kind}
              >
                <span class="mb-1 text-ui-link"><Icon name={tile.icon as "beaker"} size={20} /></span>
                <strong class="text-sm">{tile.title}</strong>
                <span class="text-xs text-ui-text-muted">{tile.text}</span>
              </button>
            {/if}
          {/each}
        </div>
      </li>

      {#if start === "files"}
        <li class="card">
          {@render stepHead(3, "Your files")}
          <div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2.5">
            {#each solver.inputs as input (input.key)}
              {@const picked = files[input.key] ?? []}
              <div class="block {picked.length > 0 ? 'filled' : ''}">
                <div class="flex items-center gap-2">
                  <strong class="text-sm">{input.label}</strong>
                  {#if picked.length > 0}
                    <span class="ml-auto text-ui-success"><Icon name="check" size={14} /></span>
                  {:else if !input.required}
                    <span class="ml-auto rounded bg-ui-elem px-1.5 text-[0.7rem] text-ui-text-secondary">optional</span>
                  {/if}
                </div>
                <p class="text-xs text-ui-text-muted">{input.hint}</p>
                {#if picked.length > 0}
                  <ul class="m-0 grid list-none gap-0.5 p-0">
                    {#each picked as filePath (filePath)}
                      <li class="group/file flex items-center gap-1.5 rounded px-1.5 py-0.5 text-xs transition-colors hover:bg-ui-elem" title={filePath}>
                        <Icon name="file" size={12} />
                        <code class="truncate">{basename(filePath)}</code>
                        <button
                          class="icon-btn ml-auto opacity-0 group-hover/file:opacity-100 focus:opacity-100"
                          onclick={() => removeFile(input.key, filePath)}
                          disabled={busy}
                          aria-label={`Remove ${basename(filePath)}`}
                        >
                          <Icon name="x" size={11} />
                        </button>
                      </li>
                    {/each}
                  </ul>
                {/if}
                <button
                  class="pick mt-auto"
                  disabled={busy}
                  onclick={() =>
                    openDialog({ type: "pickFiles", key: input.key, label: input.label, extensions: input.extensions, multiple: input.multiple })}
                >
                  {#if picked.length === 0 || input.multiple}<Icon name="plus" size={13} />{/if}
                  <span class="whitespace-nowrap">{picked.length > 0 && !input.multiple ? "Change" : input.multiple && picked.length > 0 ? "Add more" : "Choose"}</span>
                  <span class="min-w-0 truncate text-ui-text-muted" title={input.extensions.join(" ")}>{input.extensions.join(" ")}</span>
                </button>
              </div>
            {/each}
          </div>
          {#if inspection?.files}
            <div class="mt-3 flex flex-wrap gap-x-3 gap-y-1 rounded bg-ui-elem px-3 py-2 text-xs">
              <span class="text-ui-text-muted">The campaign gets</span>
              {#each inspection.files as file (file)}<code>{file}</code>{/each}
            </div>
          {/if}
          {@render warnings()}
        </li>
      {:else if start === "folder"}
        <li class="card">
          {@render stepHead(3, "Your case folder")}
          <div class="flex flex-wrap items-center gap-2">
            {#if folder}
              <span class="inline-flex items-center gap-1.5 rounded-full border border-ui-border bg-ui-bg px-2 py-0.5 text-xs" title={folder}>
                <Icon name="folder" size={12} /><code>{folder}</code>
              </span>
            {/if}
            <button class="btn-secondary" disabled={busy} onclick={() => openDialog({ type: "pickFolder", solver: solver.name })}>
              {folder ? "Change" : "Choose a folder"}
            </button>
          </div>
          {#if inspection}
            <p class="mt-2 text-xs text-ui-text-muted">Input file found: <code>{inspection.setup_file}</code></p>
            {@render warnings()}
          {/if}
        </li>
      {/if}

      {#if needsCase}
        <li class="card">
          {@render stepHead(4, "Parameters", columns.length > 0 ? `${rows.length} case${rows.length === 1 ? "" : "s"}` : "")}
          {#if inspectError}
            <p class="flex items-center gap-1.5 text-sm text-ui-error"><Icon name="alert" size={14} /> {inspectError}</p>
          {:else if !inspection}
            <p class="text-sm text-ui-text-muted">{caseError}</p>
          {:else if columns.length === 0}
            <p class="text-sm">
              Your case has no <code>{"{parameters}"}</code> yet: the campaign gets one case, <code>baseline</code>,
              that runs it as is.
            </p>
            <p class="mt-2 text-xs text-ui-text-muted">
              To vary a value across cases, replace it with <code>{"{name}"}</code> in your files (for example
              <code>{"E = {young}"}</code>), then add a <code>name</code> column to the campaign's <code>doe.csv</code>.
              To run it several times with different resources, import a CSV with <code>case_id</code>,
              <code>csauto_mpi</code> and <code>csauto_omp</code> columns.
            </p>
            {@render tableTools(false)}
          {:else}
            <p class="mb-2.5 text-xs text-ui-text-muted">
              One row per case. Paste rows from a spreadsheet or a CSV file into any cell, or import a CSV file whose header names the columns.
            </p>
            <div class="overflow-x-auto rounded border border-ui-border">
              <table class="w-full border-collapse text-sm">
                <thead>
                  <tr class="bg-ui-elem">
                    <th class="w-8 px-2 py-1.5 text-right font-semibold text-ui-text-muted">#</th>
                    {#each columns as column (column)}
                      <th class="px-2 py-1.5 text-left font-semibold whitespace-nowrap"><code>{column}</code></th>
                    {/each}
                    <th class="w-8"></th>
                  </tr>
                </thead>
                <tbody>
                  {#each rows as row, rowIndex (rowIndex)}
                    <tr class="group border-t border-ui-border/50 transition-colors hover:bg-ui-elem">
                      <td class="px-2 text-right text-xs text-ui-text-muted">{rowIndex + 1}</td>
                      {#each columns as column, columnIndex (column)}
                        <td class="px-1 py-0.5">
                          <input
                            type="text"
                            class="w-full min-w-[90px] rounded-sm border border-transparent bg-transparent px-2 py-1 text-sm text-ui-input-fg hover:border-ui-input-border focus:border-ui-focus focus:bg-ui-input-bg focus:outline-none"
                            bind:value={row[columnIndex]}
                            onpaste={pasteRows}
                            placeholder={column}
                            disabled={busy}
                            aria-label={`${column}, case ${rowIndex + 1}`}
                          />
                        </td>
                      {/each}
                      <td class="px-1">
                        <button class="icon-btn opacity-0 group-hover:opacity-100 focus:opacity-100" onclick={() => removeRow(rowIndex)} disabled={busy} aria-label="Remove case">
                          <Icon name="x" size={12} />
                        </button>
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
            {@render tableTools(true)}
          {/if}
        </li>
      {/if}

      <li class="card">
        {@render stepHead(needsCase ? 5 : 3, "Campaign")}
        <div class="grid gap-3">
          <div class="field">
            <label for="name">Folder</label>
            <div class="flex-1">
              <div class="relative">
                <input id="name" type="text" class="text-input pr-24 {nameError ? 'input-warning' : ''}" bind:value={name} disabled={busy} />
                <span class="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-sm text-ui-text-muted">in {workspace}</span>
              </div>
              {#if nameError}<p class="mt-1 text-xs text-ui-error">{nameError}</p>{/if}
            </div>
          </div>

          <div class="field">
            <label for="runtime">Runs with</label>
            <div class="flex-1">
              <Select id="runtime" options={runtimeOptions} value={runtime} onSelect={(next) => (runtime = next)} disabled={busy} />
            </div>
          </div>

          {#if runtime === "docker"}
            <div class="field">
              <label for="version">Version</label>
              <div class="flex-1">
                <Select
                  id="version"
                  options={versionOptions}
                  value={image}
                  onSelect={(next) => (image = next)}
                  placeholder={imagesLoading ? "Looking up versions…" : "Choose a version"}
                  disabled={busy || imagesLoading}
                />
                {#if image === "__other__"}
                  <div class="relative mt-1.5">
                    <input type="text" class="text-input pr-40" bind:value={otherTag} placeholder="tag, e.g. 16.9.0" disabled={busy} />
                    <span class="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-sm text-ui-text-muted">of {repository}</span>
                  </div>
                {/if}
                {#if !hubReachable && !imagesLoading}
                  <p class="mt-1 text-xs text-ui-text-muted">Docker Hub could not be reached: only installed versions are listed.</p>
                {/if}
              </div>
            </div>
          {:else if runtime === "native"}
            <div class="field">
              <label for="native">Executable</label>
              <div class="flex flex-1 items-center gap-2">
                <code id="native" class="truncate text-sm">{nativePath || `${solver.native_bin_name} from PATH`}</code>
                <button class="btn-secondary" onclick={() => openDialog({ type: "pickPath", purpose: "native", solver: solver.name })} disabled={busy}>Choose</button>
                {#if nativePath}<button class="btn-ghost" onclick={() => (nativePath = "")}>Use PATH</button>{/if}
              </div>
            </div>
          {:else if runtime === "singularity"}
            <div class="field">
              <label for="sif">Image</label>
              <div class="flex flex-1 items-center gap-2">
                <code id="sif" class="truncate text-sm">{sifPath || "no .sif image chosen"}</code>
                <button class="btn-secondary" onclick={() => openDialog({ type: "pickPath", purpose: "singularity", solver: solver.name })} disabled={busy}>Choose</button>
              </div>
            </div>
          {/if}

          {#if start !== "empty"}
            <div class="field">
              <span></span>
              <Checkbox checked={generate} label="Generate the cases now, then open the dashboard" onchange={() => (generate = !generate)} />
            </div>
          {/if}
        </div>
      </li>
    {/if}
  </ol>
</div>

  <!-- Full width, so its border spans the whole tab; its content lines up with the column above. -->
  <footer
    class="sticky bottom-0 border-t border-ui-border"
    style="background: color-mix(in srgb, var(--ui-bg) 92%, transparent); backdrop-filter: blur(6px)"
  >
  <div class="mx-auto flex max-w-[940px] items-center justify-between gap-3 px-8 py-3">
    <div class="flex min-w-0 items-center gap-2 text-xs">
      {#if progress}
        <span class="animate-[spin_0.9s_linear_infinite]"><Icon name="spinner" size={14} /></span><span>{progress}</span>
      {:else if createError}
        <span class="flex items-center gap-1.5 font-medium text-ui-error"><Icon name="alert" size={14} /> {createError}</span>
      {:else if blocking}
        <span class="text-ui-text-muted">{blocking}</span>
      {:else if solver}
        <span class="flex items-center gap-1.5 font-medium text-ui-success"><Icon name="check" size={14} /> Ready to create {name.trim()}</span>
      {/if}
    </div>
    <div class="flex items-center gap-2">
      <button
        type="button"
        class="cursor-pointer rounded bg-ui-elem px-4 py-1.5 text-sm text-ui-fg hover:bg-ui-elem-hover disabled:cursor-not-allowed disabled:opacity-50"
        onclick={() => post({ type: "cancel" })}
        disabled={busy}
      >
        Cancel
      </button>
      <button
        type="button"
        class="cursor-pointer rounded bg-ui-btn px-4 py-1.5 text-sm font-semibold text-ui-btn-fg hover:bg-ui-btn-hover disabled:cursor-not-allowed disabled:bg-ui-elem disabled:text-ui-text-muted"
        onclick={create}
        disabled={busy || !!blocking || !solver}
      >
        Create campaign
      </button>
    </div>
  </div>
  </footer>
</div>

{#if dialogOpen}
  <!-- Clicking outside the file dialog closes it, as Escape would. -->
  <div
    class="fixed inset-0 z-[10000] grid cursor-pointer place-items-center"
    style="background: color-mix(in srgb, var(--ui-bg) 55%, transparent)"
    role="button"
    tabindex="-1"
    aria-label="Close the file dialog"
    onclick={() => {
      dialogOpen = false;
      post({ type: "closeDialog" });
    }}
    onkeydown={() => {}}
  >
    <div class="flex items-center gap-3 rounded border border-ui-border bg-ui-popup-bg px-4 py-3 text-sm shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
      <span class="animate-[spin_0.9s_linear_infinite]"><Icon name="spinner" size={14} /></span>
      <span>Waiting for the file dialog at the top of the window.</span>
      <span class="text-ui-text-muted">Click anywhere to cancel it.</span>
    </div>
  </div>
{/if}

<style>
  .card {
    padding: 16px 18px;
    border: 1px solid var(--ui-border);
    border-radius: 6px;
    background: color-mix(in srgb, var(--ui-fg) 3%, var(--ui-bg));
  }

  .option {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 12px 14px;
    border: 1px solid var(--ui-border);
    border-radius: 6px;
    color: var(--ui-fg);
    background: var(--ui-bg);
    text-align: left;
    cursor: pointer;
    transition:
      border-color 0.12s,
      background 0.12s,
      box-shadow 0.12s;
  }

  .option:hover:not(:disabled):not(.selected) {
    border-color: color-mix(in srgb, var(--ui-focus) 55%, var(--ui-border));
    background: var(--ui-element-bg);
  }

  .option.selected {
    border-color: var(--ui-focus);
    background: var(--ui-accent-soft);
    box-shadow: inset 0 0 0 1px var(--ui-focus);
  }

  .option:disabled {
    cursor: default;
    opacity: 0.6;
  }

  .block {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    border: 1px solid var(--ui-border);
    border-radius: 6px;
    background: var(--ui-bg);
    transition:
      border-color 0.12s,
      background 0.12s;
  }

  .block:hover {
    border-color: color-mix(in srgb, var(--ui-focus) 55%, var(--ui-border));
  }

  .block.filled {
    border-color: color-mix(in srgb, var(--ui-focus) 70%, var(--ui-border));
  }

  .pick {
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 6px 10px;
    border: 1px dashed var(--ui-border);
    border-radius: 4px;
    color: var(--ui-fg);
    background: transparent;
    font-size: 0.8125rem;
    cursor: pointer;
    transition:
      border-color 0.12s,
      background 0.12s;
  }

  .pick:hover:not(:disabled) {
    border-color: var(--ui-focus);
    background: var(--ui-accent-soft);
  }

  .field {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  .field > label,
  .field > span:first-child {
    flex-shrink: 0;
    width: 10rem;
    padding-top: 4px;
    color: var(--ui-text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    user-select: none;
  }

  .text-input {
    width: 100%;
    padding: 4px 8px;
    border: 1px solid var(--ui-input-border);
    border-radius: 2px;
    color: var(--ui-input-fg);
    background: var(--ui-input-bg);
    font: inherit;
    font-size: 0.875rem;
  }

  .text-input:hover:not(:disabled) {
    border-color: color-mix(in srgb, var(--ui-focus) 55%, var(--ui-input-border));
  }

  .text-input:focus {
    border-color: var(--ui-focus);
    outline: none;
  }

  .btn-secondary,
  .btn-ghost {
    display: inline-flex;
    gap: 6px;
    align-items: center;
    padding: 4px 12px;
    border: none;
    border-radius: 4px;
    color: var(--ui-fg);
    background: var(--ui-element-bg);
    font-size: 0.8125rem;
    cursor: pointer;
    transition: background 0.12s;
  }

  .btn-ghost {
    padding: 4px 8px;
    color: var(--ui-text-secondary);
    background: transparent;
  }

  .btn-secondary:hover:not(:disabled),
  .btn-ghost:hover:not(:disabled) {
    color: var(--ui-fg);
    background: var(--ui-element-bg-hover);
  }

  .icon-btn {
    display: inline-grid;
    place-items: center;
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    border-radius: 4px;
    color: var(--ui-text-muted);
    background: transparent;
    cursor: pointer;
    transition:
      background 0.12s,
      color 0.12s,
      opacity 0.12s;
  }

  .icon-btn:hover:not(:disabled) {
    color: var(--ui-fg);
    background: var(--ui-element-bg-hover);
  }

  button:disabled {
    cursor: default;
  }

  .logo-dark {
    display: none;
  }

  :global(body.vscode-dark) .logo-light,
  :global(body.vscode-high-contrast:not(.vscode-high-contrast-light)) .logo-light {
    display: none;
  }

  :global(body.vscode-dark) .logo-dark,
  :global(body.vscode-high-contrast:not(.vscode-high-contrast-light)) .logo-dark {
    display: block;
  }
</style>
