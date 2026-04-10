<!--
  CleanDialog — choose cleanup action and optionally select RESU folders.

  Loads available RESU folders via API, then lets the user pick an action:
  keep_latest, delete_all, keep_folder, or delete_folder.
-->
<script lang="ts">
  import { onMount } from "svelte";
  import { closeDialog, appAlert } from "$lib/actions/dialog.svelte";
  import DialogShell from "./DialogShell.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import FormLabel from "$lib/components/shared/FormLabel.svelte";
  import Dropdown from "$lib/components/shared/Dropdown.svelte";
  import MultiDropdown from "$lib/components/shared/MultiDropdown.svelte";
  import {
    getCleanSettings,
    setCleanSettings,
  } from "$lib/stores/settings.svelte";
  import { fetchResuDirs } from "$lib/api/endpoints";
  import type { CleanChoice } from "$lib/api/types";

  interface Props {
    cases: string[];
  }

  let { cases }: Props = $props();

  const saved = getCleanSettings();
  let action = $state<CleanChoice["action"]>("keep_latest");
  let keepLast = $state(saved.keepLast);
  let folders = $state<string[]>([]);
  let selectedFolders = $state<string[]>([]);
  let loadingFolders = $state(true);

  let showFolders = $derived(
    action === "keep_folder" || action === "delete_folder",
  );

  const actionOptions = [
    { value: "keep_latest", label: "Keep latest N" },
    { value: "delete_all", label: "Delete all RESU" },
    { value: "keep_folder", label: "Keep specific folders" },
    { value: "delete_folder", label: "Delete specific folders" },
  ];

  let folderOptions = $derived(folders.map((f) => ({ value: f, label: f })));

  onMount(async () => {
    try {
      folders = await fetchResuDirs(cases);
    } catch {
      folders = [];
    }
    loadingFolders = false;
  });

  async function confirm() {
    if (showFolders && selectedFolders.length === 0) {
      await appAlert(
        "Please select at least one RESU folder.",
        "Missing selection",
      );
      return;
    }

    const choice: CleanChoice = { action };
    if (action === "keep_latest") {
      choice.keepLast = keepLast;
      setCleanSettings({ keepLast });
    } else if (action === "delete_all") {
      choice.keepLast = 0;
    } else if (action === "keep_folder") {
      choice.keepResu = selectedFolders;
    } else if (action === "delete_folder") {
      choice.deleteResu = selectedFolders;
    }

    closeDialog(choice);
  }
</script>

<DialogShell
  title="Cleanup Cases"
  titleId="clean-dialog-title"
  subtitle="{cases.length} case{cases.length > 1 ? 's' : ''} selected"
>
  <div class="flex gap-2.5 flex-wrap items-end mb-3">
    <FormLabel text="Action">
      <Dropdown
        class="w-[200px]"
        options={actionOptions}
        value={action}
        onchange={(v) => (action = v as CleanChoice["action"])}
      />
    </FormLabel>

    {#if action === "keep_latest"}
      <FormLabel text="Keep last">
        <input
          type="number"
          min="0"
          step="1"
          bind:value={keepLast}
          class="w-[80px]"
        />
      </FormLabel>
    {/if}
  </div>

  {#if showFolders}
    <div class="mb-3">
      <FormLabel text="RESU folders">
        {#if loadingFolders}
          <span class="text-xs text-muted">Loading...</span>
        {:else if folders.length === 0}
          <span class="text-xs text-muted">No folders found</span>
        {:else}
          <MultiDropdown
            class="w-full"
            options={folderOptions}
            selected={selectedFolders}
            onchange={(v) => (selectedFolders = v)}
            placeholder="Select folders..."
          />
        {/if}
      </FormLabel>
    </div>
  {/if}

  {#snippet footer()}
    <Button variant="secondary" onclick={() => closeDialog(null)}>Cancel</Button
    >
    <Button variant="primary" onclick={confirm}>Clean</Button>
  {/snippet}
</DialogShell>
