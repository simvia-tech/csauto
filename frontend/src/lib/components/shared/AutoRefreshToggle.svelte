<!--
  AutoRefreshToggle — checkbox that starts/stops a named refresh timer.

  When checked, starts an interval that calls `onRefresh` every `intervalMs`.
  Cleans up on destroy.
-->
<script lang="ts">
  import { onDestroy } from "svelte";
  import { startTimer, stopTimer } from "$lib/stores/refresh.svelte";
  import Checkbox from "./Checkbox.svelte";

  interface Props {
    name: string;
    intervalMs: number;
    checked?: boolean;
    onRefresh: () => void;
  }

  let {
    name,
    intervalMs,
    checked = $bindable(true),
    onRefresh,
  }: Props = $props();

  $effect(() => {
    if (checked) {
      startTimer(name, onRefresh, intervalMs);
    } else {
      stopTimer(name);
    }
  });

  onDestroy(() => stopTimer(name));
</script>

<Checkbox
  {checked}
  onchange={(v) => (checked = v)}
  size={14}
  label="Auto-refresh"
  labelFirst
/>
