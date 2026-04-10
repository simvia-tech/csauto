<!--
  ProbeTabBar — tab buttons for switching between time probes and profile plots.
-->
<script lang="ts">
  import Button from "$lib/components/shared/Button.svelte";

  interface Props {
    activeTab: "time" | "profile";
    onTabChange: (tab: "time" | "profile") => void;
  }

  let { activeTab, onTabChange }: Props = $props();
</script>

<div class="flex gap-1.5" role="tablist">
  <Button
    variant={activeTab === "time" ? "primary" : "secondary"}
    size="sm"
    onclick={() => onTabChange("time")}
  >
    Time probes
  </Button>
  <Button
    variant={activeTab === "profile" ? "primary" : "secondary"}
    size="sm"
    onclick={() => onTabChange("profile")}
  >
    Profiles
  </Button>
</div>
