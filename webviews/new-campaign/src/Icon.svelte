<!-- Small line icons (16px, currentColor), so the page needs no icon font. -->
<script lang="ts">
  interface Props {
    name: "beaker" | "files" | "folder" | "empty" | "plus" | "x" | "check" | "file" | "alert" | "spinner";
    size?: number;
  }
  let { name, size = 16 }: Props = $props();
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.4"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
  class:spin={name === "spinner"}
>
  {#if name === "beaker"}
    <path d="M6 1.5h4M6.5 1.5v4.2L2.6 12.4a1.4 1.4 0 0 0 1.2 2.1h8.4a1.4 1.4 0 0 0 1.2-2.1L9.5 5.7V1.5" />
    <path d="M4.3 9.5h7.4" />
  {:else if name === "files"}
    <path d="M5.5 1.5h5l3 3v7.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9.5a1 1 0 0 1 1-1z" />
    <path d="M10.5 1.5v3h3M2.5 4.5v9a1 1 0 0 0 1 1h7" />
  {:else if name === "folder"}
    <path d="M1.5 4a1 1 0 0 1 1-1h3.6l1.5 1.5h5.9a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1H2.5a1 1 0 0 1-1-1z" />
  {:else if name === "empty"}
    <path d="M1.5 4a1 1 0 0 1 1-1h3.6l1.5 1.5h5.9a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1H2.5a1 1 0 0 1-1-1z" stroke-dasharray="2 1.6" />
  {:else if name === "plus"}
    <path d="M8 3v10M3 8h10" />
  {:else if name === "x"}
    <path d="M4 4l8 8M12 4l-8 8" />
  {:else if name === "check"}
    <path d="M3 8.5l3 3 7-7" />
  {:else if name === "file"}
    <path d="M4.5 1.5h5l3 3v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z" /><path d="M9.5 1.5v3h3" />
  {:else if name === "alert"}
    <circle cx="8" cy="8" r="6.5" /><path d="M8 4.5v4M8 11v.2" />
  {:else if name === "spinner"}
    <path d="M8 1.5a6.5 6.5 0 1 1-6.5 6.5" />
  {/if}
</svg>

<style>
  svg {
    flex-shrink: 0;
  }

  .spin {
    animation: spin 0.9s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
