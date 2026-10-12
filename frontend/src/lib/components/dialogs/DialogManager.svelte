<!--
  DialogManager — renders the currently active dialog based on the dialog store.

  Placed once in +page.svelte. Reacts to getDialog() state changes.
-->
<script lang="ts">
  import { getDialog } from "$lib/actions/dialog.svelte";
  import AppDialog from "./AppDialog.svelte";
  import RunDialog from "./RunDialog.svelte";
  import RestartDialog from "./RestartDialog.svelte";
  import CleanDialog from "./CleanDialog.svelte";

  let dialog = $derived(getDialog());
</script>

{#if dialog.type === "run"}
  <RunDialog cases={dialog.props.cases as string[]} />
{:else if dialog.type === "restart"}
  <RestartDialog cases={dialog.props.cases as string[]} />
{:else if dialog.type === "clean"}
  <CleanDialog cases={dialog.props.cases as string[]} />
{:else if dialog.type === "alert" || dialog.type === "confirm" || dialog.type === "prompt"}
  <AppDialog
    mode={dialog.type}
    title={dialog.props.title as string}
    message={dialog.props.message as string}
    confirmLabel={dialog.props.confirmLabel as string | undefined}
    confirmVariant={dialog.props.confirmVariant as
      "primary" | "secondary" | "warning" | "run" | "danger" | undefined}
    value={dialog.props.value as string | undefined}
    placeholder={dialog.props.placeholder as string | undefined}
    multiline={dialog.props.multiline as boolean | undefined}
  />
{/if}
