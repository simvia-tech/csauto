<!--
  RunDialog — configure MPI ranks, threads, and max parallel before running cases.

  Pre-fills from localStorage settings. Validates inputs before resolving.
-->
<script lang="ts">
  import { closeDialog } from "$lib/actions/dialog.svelte";
  import { appAlert } from "$lib/actions/dialog.svelte";
  import DialogShell from "./DialogShell.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import FormLabel from "$lib/components/shared/FormLabel.svelte";
  import { getRunSettings, setRunSettings } from "$lib/stores/settings.svelte";
  import type { RunParams } from "$lib/api/types";

  interface Props {
    cases: string[];
  }

  let { cases }: Props = $props();

  const saved = getRunSettings();
  const defaultParallel =
    saved.maxParallel ?? (cases.length > 1 ? cases.length : 0);
  let n = $state(saved.n);
  let nt = $state(saved.nt);
  let maxParallel = $state(defaultParallel);

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

    const params: RunParams = {
      n,
      nt,
      maxParallel: maxParallel || null,
    };
    setRunSettings(params);
    closeDialog(params);
  }
</script>

<DialogShell
  title="Run Cases"
  titleId="run-dialog-title"
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

  {#snippet footer()}
    <Button variant="secondary" onclick={() => closeDialog(null)}>Cancel</Button
    >
    <Button variant="run" onclick={confirm}>Run</Button>
  {/snippet}
</DialogShell>
