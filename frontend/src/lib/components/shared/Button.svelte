<!--
  Button — shared button component with EDF/Simvia styling.

  Variants: primary (blue), secondary (white), run (green), warning (orange), danger (dark orange)
  Sizes: default, sm
-->
<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    variant?: "primary" | "secondary" | "warning" | "run" | "danger";
    size?: "default" | "sm";
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    children: Snippet;
  }

  let {
    variant = "primary",
    size = "default",
    disabled = false,
    onclick,
    children,
  }: Props = $props();

  const base =
    "inline-flex items-center justify-center gap-1.5 font-bold cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none";

  const sizes = {
    default:
      "h-[34px] rounded-md px-3.5 leading-none text-[13px] tracking-wide",
    sm: "h-[30px] rounded-md px-2.5 leading-none text-xs",
  };

  const variants = {
    primary:
      "bg-edf-bleu-moyen text-white border-none hover:bg-[rgb(12,72,170)]",
    secondary: "bg-white text-ink border border-border hover:bg-edf-gris-clair",
    run: "bg-edf-vert-fonce text-white border-none hover:bg-[rgb(38,98,12)]",
    warning:
      "bg-edf-orange-moyen text-white border-none hover:bg-[rgb(230,118,20)]",
    danger:
      "bg-edf-orange-fonce text-white border-none hover:bg-[rgb(180,56,8)]",
  };
</script>

<button class="{base} {sizes[size]} {variants[variant]}" {disabled} {onclick}>
  {@render children()}
</button>
