<!--
  ViewEditorDialog — popup to create or edit a view (name + column selection).
-->
<script lang="ts">
  import Checkbox from "$lib/components/shared/Checkbox.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import { getDoeColumns, BASE_COLUMNS } from "$lib/stores/status.svelte";

  interface Props {
    mode: "create" | "edit";
    initialName?: string;
    initialColumns?: string[];
    onSave: (name: string, columns: string[]) => void;
    onCancel: () => void;
  }

  let {
    mode,
    initialName = "",
    initialColumns,
    onSave,
    onCancel,
  }: Props = $props();

  let allDoe = $derived(getDoeColumns());
  let name = $state(initialName);

  let selected = $state<Set<string>>(
    new Set(initialColumns ?? [...allDoe, ...BASE_COLUMNS.map((c) => c.key)]),
  );

  function toggle(key: string) {
    const next = new Set(selected);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    selected = next;
  }

  function setAll(keys: string[], on: boolean) {
    const next = new Set(selected);
    keys.forEach((k) => (on ? next.add(k) : next.delete(k)));
    selected = next;
  }

  function handleSave() {
    const trimmed = name.trim();
    if (!trimmed) return;
    onSave(trimmed, [...selected]);
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") onCancel();
  }

  function onBackdropClick(e: MouseEvent) {
    if ((e.target as HTMLElement).dataset.backdrop !== undefined) onCancel();
  }

  let inputEl: HTMLInputElement | undefined = $state();
  $effect(() => {
    inputEl?.focus();
    inputEl?.select();
  });
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="fixed inset-0 bg-[rgba(0,26,112,0.3)] backdrop-blur-sm flex items-center justify-center p-4 z-50"
  data-backdrop
  onkeydown={onKeydown}
  onclick={onBackdropClick}
>
  <div
    class="w-[min(420px,96vw)] bg-white border border-border rounded-[10px] p-5"
    role="dialog"
    aria-modal="true"
  >
    <div class="text-base font-bold text-edf-bleu-fonce mb-4">
      {mode === "create" ? "New view" : "Edit view"}
    </div>

    <div class="mb-4">
      <div class="text-xs text-muted mb-1">Name</div>
      <input
        bind:this={inputEl}
        type="text"
        bind:value={name}
        placeholder="e.g. My view"
        class="w-full"
      />
    </div>

    {#if allDoe.length > 0}
      <div class="mb-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs text-muted">DOE columns</span>
          <div class="flex gap-2">
            <button class="link-btn" onclick={() => setAll(allDoe, true)}
              >All</button
            >
            <button class="link-btn" onclick={() => setAll(allDoe, false)}
              >None</button
            >
          </div>
        </div>
        <div class="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {#each allDoe as col (col)}
            <Checkbox
              checked={selected.has(col)}
              onchange={() => toggle(col)}
              size={14}
              label={col}
            />
          {/each}
        </div>
      </div>
    {/if}

    <div class="mb-5">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs text-muted">Computed columns</span>
        <div class="flex gap-2">
          <button
            class="link-btn"
            onclick={() =>
              setAll(
                BASE_COLUMNS.map((c) => c.key),
                true,
              )}>All</button
          >
          <button
            class="link-btn"
            onclick={() =>
              setAll(
                BASE_COLUMNS.map((c) => c.key),
                false,
              )}>None</button
          >
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-4 gap-y-1.5">
        {#each BASE_COLUMNS as col (col.key)}
          <Checkbox
            checked={selected.has(col.key)}
            onchange={() => toggle(col.key)}
            size={14}
            label={col.label}
          />
        {/each}
      </div>
    </div>

    <div
      class="flex justify-end gap-2 pt-3 border-t border-[rgba(51,51,51,0.08)]"
    >
      <Button variant="secondary" onclick={onCancel}>Cancel</Button>
      <Button variant="primary" onclick={handleSave} disabled={!name.trim()}
        >Save</Button
      >
    </div>
  </div>
</div>
