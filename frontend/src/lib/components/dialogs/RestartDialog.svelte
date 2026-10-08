<!--
  RestartDialog: ranks, threads, the restart mode and its value (as declared
  by the solver adapter), and the run folder to restart from.

  Pre-fills from localStorage settings.
-->
<script lang="ts">
  import { onMount } from "svelte";
  import { closeDialog, appAlert } from "$lib/actions/dialog.svelte";
  import DialogShell from "./DialogShell.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import FormLabel from "$lib/components/shared/FormLabel.svelte";
  import {
    getRestartSettings,
    setRestartSettings,
  } from "$lib/stores/settings.svelte";
  import { getAppConfig } from "$lib/stores/appConfig.svelte";
  import { fetchResuDirs } from "$lib/api/endpoints";
  import { optionValueError } from "$lib/utils/options";
  import type { RestartParams } from "$lib/api/types";

  interface Props {
    cases: string[];
  }

  let { cases }: Props = $props();

  const modes = getAppConfig()?.restart_modes ?? [];
  const saved = getRestartSettings();
  const defaultParallel =
    saved.maxParallel ?? (cases.length > 1 ? cases.length : 0);
  let n = $state(saved.n);
  let nt = $state(saved.nt);
  let maxParallel = $state(defaultParallel);
  let restartMode = $state(
    modes.some((m) => m.name === saved.mode)
      ? saved.mode
      : (modes[0]?.name ?? ""),
  );
  let restartValue = $state(saved.value);
  let restartPath = $state("");
  let runDirs = $state<string[]>([]);

  let mode = $derived(modes.find((m) => m.name === restartMode));

  /* Run folder names are per case, so several cases each restart from their
     own latest run. */
  onMount(async () => {
    if (cases.length !== 1) return;
    try {
      runDirs = await fetchResuDirs(cases);
    } catch {
      runDirs = [];
    }
  });

  async function confirm() {
    if (!Number.isFinite(n) || n <= 0) {
      await appAlert("MPI ranks must be an integer > 0.", "Invalid value");
      return;
    }
    if (!Number.isFinite(nt) || nt <= 0) {
      await appAlert("Threads must be an integer > 0.", "Invalid value");
      return;
    }
    if (maxParallel && (!Number.isFinite(maxParallel) || maxParallel <= 0)) {
      await appAlert("Max parallel must be empty or > 0.", "Invalid value");
      return;
    }
    const valueError = mode?.value_label
      ? optionValueError(mode, restartValue)
      : "";
    if (valueError) {
      await appAlert(valueError, "Invalid value");
      return;
    }

    const params: RestartParams = {
      n,
      nt,
      maxParallel: maxParallel || null,
      restartMode,
      restartValue: mode?.value_label ? restartValue : null,
      restartPath: restartPath || null,
    };
    setRestartSettings({
      n,
      nt,
      maxParallel: maxParallel || null,
      mode: restartMode,
      value: restartValue,
    });
    closeDialog(params);
  }
</script>

<DialogShell
  title="Restart Cases"
  titleId="restart-dialog-title"
  subtitle="{cases.length} case{cases.length > 1 ? 's' : ''} selected"
  onConfirm={confirm}
>
  <div class="grid grid-cols-3 gap-2.5 mb-3">
    <FormLabel text="MPI Ranks (n)">
      <input type="number" min="1" step="1" bind:value={n} />
    </FormLabel>
    <FormLabel text="OMP Threads (nt)">
      <input type="number" min="1" step="1" bind:value={nt} />
    </FormLabel>
    <FormLabel text="Max Parallel">
      <input type="number" min="0" step="1" bind:value={maxParallel} />
    </FormLabel>
  </div>

  <div class="grid grid-cols-2 gap-2.5 mb-3">
    {#if modes.length > 0}
      <FormLabel text="Mode">
        <select bind:value={restartMode}>
          {#each modes as m (m.name)}
            <option value={m.name}>{m.label}</option>
          {/each}
        </select>
      </FormLabel>
    {/if}
    {#if mode?.value_label}
      <FormLabel text={mode.value_label}>
        <input
          type="number"
          min={mode.value_kind === "int" ? "1" : "0"}
          step={mode.value_kind === "int" ? "1" : "any"}
          bind:value={restartValue}
        />
      </FormLabel>
    {/if}
    <FormLabel text="Restart from">
      <select
        bind:value={restartPath}
        disabled={cases.length > 1}
        title={cases.length > 1
          ? "Each case restarts from its own latest run"
          : undefined}
      >
        <option value="">Latest run</option>
        {#each runDirs as dir (dir)}
          <option value={dir}>{dir}</option>
        {/each}
      </select>
    </FormLabel>
  </div>

  {#snippet footer()}
    <Button variant="secondary" onclick={() => closeDialog(null)}>Cancel</Button
    >
    <Button variant="warning" onclick={confirm}>Restart</Button>
  {/snippet}
</DialogShell>
