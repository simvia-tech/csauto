<!--
  RunDialog — configure MPI ranks, threads, and max parallel before running cases.

  Pre-fills from localStorage settings. Validates inputs before resolving.
  Ranks or threads every selected case takes from its DOE row are sent as null.
-->
<script lang="ts">
  import { untrack } from "svelte";
  import { closeDialog } from "#lib/actions/dialog.svelte.ts";
  import { appAlert } from "#lib/actions/dialog.svelte.ts";
  import DialogShell from "./DialogShell.svelte";
  import SetupWarnings from "./SetupWarnings.svelte";
  import ResourceFields from "./ResourceFields.svelte";
  import Button from "#lib/components/shared/Button.svelte";
  import {
    getRunSettings,
    setRunSettings,
  } from "#lib/stores/settings.svelte.ts";
  import {
    coveredByDoe,
    doeResourceCoverage,
    resourceValueError,
  } from "#lib/utils/resources.ts";
  import type { RunParams } from "#lib/api/types.ts";

  interface Props {
    cases: string[];
  }

  let { cases }: Props = $props();

  const saved = getRunSettings();
  // Settled when the dialog opens.
  const defaultParallel = untrack(
    () => saved.maxParallel ?? (cases.length > 1 ? cases.length : 0),
  );
  const coverageN = untrack(() => doeResourceCoverage(cases, "nprocs"));
  const coverageNt = untrack(() => doeResourceCoverage(cases, "nt"));
  let n = $state(saved.n);
  let nt = $state(saved.nt);
  let maxParallel = $state(defaultParallel);

  async function confirm() {
    const valueError =
      resourceValueError("MPI ranks", n, coverageN) ||
      resourceValueError("Threads", nt, coverageNt);
    if (valueError) {
      await appAlert(valueError, "Invalid value");
      return;
    }
    if (maxParallel && (!Number.isFinite(maxParallel) || maxParallel <= 0)) {
      await appAlert("Max parallel must be empty or > 0.", "Invalid value");
      return;
    }

    setRunSettings({ n, nt, maxParallel: maxParallel || null });
    const params: RunParams = {
      n: coveredByDoe(coverageN) ? null : n,
      nt: coveredByDoe(coverageNt) ? null : nt,
      maxParallel: maxParallel || null,
    };
    closeDialog(params);
  }
</script>

<DialogShell
  title="Run Cases"
  titleId="run-dialog-title"
  subtitle="{cases.length} case{cases.length > 1 ? 's' : ''} selected"
  onConfirm={confirm}
>
  <ResourceFields bind:n bind:nt bind:maxParallel {coverageN} {coverageNt} />

  <SetupWarnings {cases} />

  {#snippet footer()}
    <Button variant="secondary" onclick={() => closeDialog(null)}>Cancel</Button
    >
    <Button variant="run" onclick={confirm}>Run</Button>
  {/snippet}
</DialogShell>
