<!--
  RestartDialog — configure restart parameters: ranks, threads, mode, and stop value.

  Supports 'iterations' and 'physical_time' stop criteria.
  Pre-fills from localStorage settings.
-->
<script lang="ts">
  import { closeDialog, appAlert } from "$lib/actions/dialog.svelte";
  import DialogShell from "./DialogShell.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import FormLabel from "$lib/components/shared/FormLabel.svelte";
  import {
    getRestartSettings,
    setRestartSettings,
  } from "$lib/stores/settings.svelte";
  import type { RestartParams } from "$lib/api/types";

  interface Props {
    cases: string[];
  }

  let { cases }: Props = $props();

  const saved = getRestartSettings();
  const defaultParallel =
    saved.maxParallel ?? (cases.length > 1 ? cases.length : 0);
  let n = $state(saved.n);
  let nt = $state(saved.nt);
  let maxParallel = $state(defaultParallel);
  let restartMode = $state<"iterations" | "physical_time">(saved.mode);
  let restartValue = $state(saved.value);

  let valueLabel = $derived(
    restartMode === "iterations"
      ? "Additional iterations"
      : "Additional physical time",
  );
  let valueStep = $derived(restartMode === "iterations" ? "1" : "any");
  let valueMin = $derived(restartMode === "iterations" ? "1" : "0");

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
    if (!Number.isFinite(restartValue) || restartValue <= 0) {
      await appAlert("Value must be > 0.", "Invalid value");
      return;
    }
    if (restartMode === "iterations" && !Number.isInteger(restartValue)) {
      await appAlert("Iterations must be an integer.", "Invalid value");
      return;
    }

    const params: RestartParams = {
      n,
      nt,
      maxParallel: maxParallel || null,
      restartMode,
      restartValue,
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
    <FormLabel text="Stop criterion">
      <select bind:value={restartMode}>
        <option value="iterations">Iterations</option>
        <option value="physical_time">Physical time</option>
      </select>
    </FormLabel>
    <FormLabel text={valueLabel}>
      <input
        type="number"
        min={valueMin}
        step={valueStep}
        bind:value={restartValue}
      />
    </FormLabel>
  </div>

  {#snippet footer()}
    <Button variant="secondary" onclick={() => closeDialog(null)}>Cancel</Button
    >
    <Button variant="warning" onclick={confirm}>Restart</Button>
  {/snippet}
</DialogShell>
