<!--
  RunDialog — configure MPI ranks, threads, max parallel and where to run.

  Pre-fills from localStorage settings. Validates inputs before resolving.
  The execution list comes from /api/app_config: this dialog never names a
  cloud provider itself.
-->
<script lang="ts">
  import { closeDialog } from "$lib/actions/dialog.svelte";
  import { appAlert } from "$lib/actions/dialog.svelte";
  import DialogShell from "./DialogShell.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import FormLabel from "$lib/components/shared/FormLabel.svelte";
  import { getRunSettings, setRunSettings } from "$lib/stores/settings.svelte";
  import { getBackends } from "$lib/stores/appConfig.svelte";
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

  /* "fake" is a test double, not something to offer a user. */
  const backends = getBackends().filter((name) => name !== "fake");
  let backend = $state(
    backends.includes(saved.backend ?? "") ? (saved.backend as string) : "",
  );

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
      backend: backend || null,
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

  {#if backends.length}
    <div class="mb-3">
      <FormLabel text="Run on">
        <select bind:value={backend}>
          <option value="">This machine</option>
          {#each backends as name (name)}
            <option value={name}>{name}</option>
          {/each}
        </select>
      </FormLabel>
    </div>
  {/if}

  {#if backend}
    <p
      class="mb-3 rounded border border-amber-400/50 bg-amber-400/10 px-3 py-2 text-sm"
      role="status"
    >
      About to submit <strong>{cases.length}</strong> case{cases.length > 1
        ? "s"
        : ""} to <strong>{backend}</strong>, which runs on your own account and
      bills you for the compute. Results come back automatically.
    </p>
  {/if}

  {#snippet footer()}
    <Button variant="secondary" onclick={() => closeDialog(null)}>Cancel</Button
    >
    <Button variant="run" onclick={confirm}
      >{backend ? `Run on ${backend}` : "Run"}</Button
    >
  {/snippet}
</DialogShell>
