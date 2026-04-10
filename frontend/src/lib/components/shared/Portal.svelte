<!--
  Portal — moves its children into document.body to escape overflow/transform ancestors.
-->
<script lang="ts">
  import type { Snippet } from "svelte";
  import { onDestroy } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  function portal(node: HTMLElement) {
    document.body.appendChild(node);
    return {
      destroy() {
        node.remove();
      },
    };
  }
</script>

<div use:portal style="display:contents;">
  {@render children()}
</div>
