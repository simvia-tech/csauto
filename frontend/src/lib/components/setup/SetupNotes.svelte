<!--
  SetupNotes — what the solver adapter read from the cases' main input files
  (the openTELEMAC module, say), warnings when it could not, and the choices
  that set it (case options): one line per note, with the cases it is about
  when it is not all of them.
-->
<script lang="ts">
  import {
    fetchCaseOptions,
    fetchSetupNotes,
    setCaseOptions,
  } from "#lib/api/endpoints.ts";
  import type { CaseOption, SetupNote } from "#lib/api/types.ts";
  import Select from "#lib/components/shared/Select.svelte";
  import { hasCapability } from "#lib/stores/appConfig.svelte.ts";

  let { allCases }: { allCases: string[] } = $props();

  const SHOWN_CASES = 5;
  let notes = $state<SetupNote[]>([]);
  let options = $state<CaseOption[]>([]);
  let saving = $state(false);
  let message = $state("");
  let error = $state("");

  function load() {
    // A solver without notes or options is never asked.
    if (!hasCapability("setup")) return;
    fetchSetupNotes().then(
      (found) => (notes = found),
      () => undefined,
    );
    fetchCaseOptions().then(
      (found) => (options = found),
      () => undefined,
    );
  }

  // Read again when cases appear or go (a new prepare).
  $effect(() => {
    void allCases.length;
    void hasCapability("setup"); // and once the app config has loaded
    load();
  });

  function caseList(note: SetupNote): string {
    if (note.all_cases) {
      return "";
    }
    const more = note.cases.length - SHOWN_CASES;
    return ` (${note.cases.slice(0, SHOWN_CASES).join(", ")}${more > 0 ? `, +${more} more` : ""})`;
  }

  async function choose(option: CaseOption, value: string) {
    saving = true;
    message = "";
    error = "";
    try {
      await setCaseOptions({ [option.key]: value });
      message = `${option.label}: ${value || option.automatic_label.toLowerCase()}, saved for the campaign.`;
    } catch (err) {
      error = err instanceof Error ? err.message : String(err);
    } finally {
      saving = false;
      load();
    }
  }
</script>

<!-- Nothing at all (not even an empty grid cell) for solvers without notes or options. -->
{#if notes.length > 0 || options.length > 0}
  <div class="col-span-12 grid gap-1.5">
    {#each notes as note (note.text)}
      {#if note.level !== "info"}
        <p class="m-0 border-l-[3px] border-warn bg-warn/10 px-3 py-2 text-sm">
          {note.text}<span class="text-muted">{caseList(note)}</span>
        </p>
      {:else}
        <p class="m-0 px-3 text-xs text-muted">
          {note.text}{caseList(note)}
        </p>
      {/if}
    {/each}
    {#each options as option (option.key)}
      <div class="flex flex-wrap items-center gap-2 px-3">
        <label class="text-sm text-ink" for={`case-option-${option.key}`}
          >{option.label}</label
        >
        <Select
          id={`case-option-${option.key}`}
          value={option.value}
          onchange={(event) =>
            choose(option, (event.currentTarget as HTMLSelectElement).value)}
        >
          <option value="">{option.automatic_label}</option>
          {#each option.choices as choice (choice)}
            <option value={choice}>{choice}</option>
          {/each}
        </Select>
        {#if saving}
          <span class="text-xs text-muted">Saving…</span>
        {:else if error}
          <span class="text-xs text-err">{error}</span>
        {:else if message}
          <span class="text-xs text-muted">{message}</span>
        {:else if option.hint}
          <span class="text-xs text-muted">{option.hint}</span>
        {/if}
      </div>
    {/each}
  </div>
{/if}
