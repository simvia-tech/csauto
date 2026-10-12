<!--
  ConvergenceMenu — right-click context menu to mark cases as converged/not converged.

  Positioned at the mouse click location. Closes on any click outside,
  scroll, or Escape.
-->
<script lang="ts">
  import { setCaseConvergence } from "$lib/api/endpoints";

  interface Props {
    cases: string[];
    x: number;
    y: number;
    currentValue: string;
    onClose: () => void;
  }

  let { cases, x, y, currentValue, onClose }: Props = $props();

  /* Position adjustment: keep menu within viewport */
  let menuStyle = $derived.by(() => {
    const left = Math.min(x, window.innerWidth - 180);
    const top = Math.min(y, window.innerHeight - 120);
    return `left: ${left}px; top: ${top}px;`;
  });

  async function setConvergence(value: string) {
    try {
      for (const caseId of cases) {
        await setCaseConvergence(caseId, value);
      }
    } catch (err) {
      console.error("Failed to set convergence:", err);
    }
    onClose();
  }

  const suffix = cases.length > 1 ? ` (${cases.length})` : "";
</script>

<svelte:window
  onkeydown={(e) => {
    if (e.key === "Escape") onClose();
  }}
/>

<div
  class="fixed z-80 min-w-[170px] bg-control border border-border rounded-lg p-1 grid gap-0.5"
  style={menuStyle}
>
  <button
    class="w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-control-hover hover:border-border {currentValue ===
    'converged'
      ? 'is-active'
      : ''}"
    onclick={() => setConvergence("converged")}
  >
    Mark Converged{suffix}
  </button>
  <button
    class="w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-control-hover hover:border-border {currentValue ===
    'not_converged'
      ? 'is-active'
      : ''}"
    onclick={() => setConvergence("not_converged")}
  >
    Mark Not Converged{suffix}
  </button>
  <button
    class="w-full text-left py-[7px] px-[10px] bg-transparent border border-transparent rounded-md text-[12.5px] cursor-pointer transition-[background] duration-[120ms] ease-in-out hover:bg-control-hover hover:border-border {currentValue ===
    ''
      ? 'is-active'
      : ''}"
    onclick={() => setConvergence("")}
  >
    Clear Mark{suffix}
  </button>
</div>
