<!--
  SettingsDialog — app settings popup with sections for API token and refresh rates.
-->
<script lang="ts">
  import Button from "$lib/components/shared/Button.svelte";
  import DialogShell from "$lib/components/dialogs/DialogShell.svelte";
  import { getToken, setToken } from "$lib/stores/auth.svelte";
  import {
    getRefreshRates,
    setRefreshRate,
    resetRefreshRates,
    REFRESH_KEYS,
    REFRESH_META,
    REFRESH_DEFAULTS,
  } from "$lib/stores/refresh.svelte";

  interface Props {
    onClose: () => void;
  }

  let { onClose }: Props = $props();

  let token = $state(getToken());
  let rates = $state({ ...getRefreshRates() });

  function clampRate(key: string) {
    const { min } = REFRESH_META[key];
    let v = rates[key];
    if (typeof v !== "number" || isNaN(v)) v = REFRESH_DEFAULTS[key];
    rates = { ...rates, [key]: Math.max(min, Math.round(v)) };
  }

  function handleRateInput(key: string, e: Event) {
    const input = e.target as HTMLInputElement;
    const raw = input.value.replace(/[^0-9]/g, "");
    const num = parseInt(raw, 10);
    if (!isNaN(num)) {
      rates = { ...rates, [key]: num };
    } else if (raw === "") {
      rates = { ...rates, [key]: REFRESH_META[key].min };
    }
    input.value = String(rates[key]);
  }

  function handleSave() {
    setToken(token);
    for (const key of Object.keys(rates)) {
      clampRate(key);
      setRefreshRate(key, rates[key]);
    }
    onClose();
  }
</script>

<DialogShell
  title="Settings"
  titleId="settings-dialog-title"
  onCancel={onClose}
  onConfirm={handleSave}
  maxWidth="400px"
  portal
>
  <!-- API Token -->
  <div class="mb-5">
    <div class="text-xs font-bold text-ink mb-2">API token</div>
    <input
      type="text"
      bind:value={token}
      placeholder="Enter your API token"
      class="w-full"
    />
  </div>

  <!-- Refresh rates -->
  <div class="mb-5">
    <div class="flex items-center justify-between mb-2">
      <span class="text-xs font-bold text-ink">Auto-refresh intervals</span>
      <button
        class="text-xs text-edf-bleu-moyen cursor-pointer bg-transparent border-none hover:underline"
        onclick={() => (rates = { ...REFRESH_DEFAULTS })}>Reset defaults</button
      >
    </div>
    <div class="flex flex-col gap-2">
      {#each REFRESH_KEYS as key (key)}
        {@const meta = REFRESH_META[key]}
        <div class="flex items-center justify-between gap-3">
          <div>
            <span class="text-sm text-ink">{meta.label}</span>
            <span class="text-[11px] text-muted ml-1">min {meta.min}ms</span>
          </div>
          <div class="flex items-center gap-1">
            <input
              type="text"
              inputmode="numeric"
              class="w-[72px] text-right"
              value={rates[key]}
              oninput={(e) => handleRateInput(key, e)}
              onblur={() => clampRate(key)}
            />
            <span class="text-[11px] text-muted">ms</span>
          </div>
        </div>
      {/each}
    </div>
  </div>

  {#snippet footer()}
    <Button variant="secondary" onclick={onClose}>Cancel</Button>
    <Button variant="primary" onclick={handleSave}>Save</Button>
  {/snippet}
</DialogShell>
