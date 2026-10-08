<!--
  Icon — thin wrapper around @lucide/svelte icons.
  Accepts a Lucide icon component and renders it inline at 14px.
-->
<script lang="ts">
  import type { Component } from "svelte";

  interface Props {
    icon: Component<{ size?: number; class?: string }>;
    size?: number;
  }

  let { icon: IconComponent, size = 14 }: Props = $props();
</script>

<IconComponent {size} class="icon" />

<style>
  :global(.icon) {
    vertical-align: -2px;
    display: inline-block;
  }
</style>
