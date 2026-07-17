<!--
  CompareCard — side-by-side file comparison between two cases.

  Uses the backend unified diff API, parsed into a side-by-side view.
  Comparison runs automatically when selections change.
-->
<script lang="ts">
  import CardShell from "$lib/components/shared/CardShell.svelte";
  import Dropdown from "$lib/components/shared/Dropdown.svelte";
  import FieldRow from "$lib/components/shared/FieldRow.svelte";
  import FormLabel from "$lib/components/shared/FormLabel.svelte";
  import DiffViewer from "./DiffViewer.svelte";
  import { fetchCompareDiff } from "$lib/api/endpoints";
  import { getRows, getDoeColumns } from "$lib/stores/status.svelte";
  import Icon from "$lib/components/shared/Icon.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import { ArrowLeftRight } from "lucide-svelte";

  interface Props {
    allCases: string[];
  }

  let { allCases }: Props = $props();

  let leftCase = $state("");
  let rightCase = $state("");
  let kind = $state("setup.xml");
  let search = $state("");
  let diffText = $state("");
  let loading = $state(false);
  let compared = $state(false);
  let error = $state("");

  let caseOptions = $derived(allCases.map((c) => ({ value: c, label: c })));
  let kindOptions = [
    { value: "setup.xml", label: "setup.xml" },
    { value: "doe_row.csv", label: "doe_row.csv" },
    { value: "run_solver.log", label: "run_solver.log" },
    { value: "performance.log", label: "performance.log" },
  ];

  let showAllParams = $state(false);
  let canCompare = $derived(leftCase && rightCase && leftCase !== rightCase);

  function swapCases() {
    const tmp = leftCase;
    leftCase = rightCase;
    rightCase = tmp;
  }

  async function loadCompare() {
    if (!canCompare) return;
    loading = true;
    error = "";
    try {
      const text = await fetchCompareDiff({
        cases: [leftCase, rightCase],
        base: leftCase,
        kind,
      });
      diffText = text;
      compared = true;
    } catch (err) {
      console.error("Failed to load diff:", err);
      diffText = "";
      compared = false;
      const msg = err instanceof Error ? err.message : String(err);
      error = msg.includes("404")
        ? `File "${kind}" not found for one of the selected cases. It may not have been run yet.`
        : `Failed to load comparison.`;
    }
    loading = false;
  }

  /* Auto-compare whenever inputs change */
  $effect(() => {
    if (leftCase && rightCase && leftCase !== rightCase && kind) {
      loadCompare();
    } else if (leftCase && rightCase && leftCase === rightCase) {
      diffText = "";
      compared = true;
    }
  });

  /* Auto-select first two cases when available */
  let initialized = false;
  $effect(() => {
    if (allCases.length >= 2 && !initialized) {
      initialized = true;
      leftCase = allCases[0];
      rightCase = allCases[1];
    } else if (allCases.length === 1 && !initialized) {
      initialized = true;
      leftCase = allCases[0];
    }
  });
  /* DOE parameter comparison table */
  let doeColumns = $derived(getDoeColumns());
  let paramRows = $derived.by(() => {
    if (
      !leftCase ||
      !rightCase ||
      leftCase === rightCase ||
      doeColumns.length === 0
    )
      return [];
    const rows = getRows();
    const leftRow = rows.find((r) => r.case_id === leftCase);
    const rightRow = rows.find((r) => r.case_id === rightCase);
    if (!leftRow && !rightRow) return [];
    return doeColumns.map((col) => {
      const lv =
        leftRow?.doe?.[col] != null && String(leftRow.doe[col]) !== ""
          ? String(leftRow.doe[col])
          : "—";
      const rv =
        rightRow?.doe?.[col] != null && String(rightRow.doe[col]) !== ""
          ? String(rightRow.doe[col])
          : "—";
      return { param: col, left: lv, right: rv, differs: lv !== rv };
    });
  });
  let visibleParamRows = $derived(
    showAllParams ? paramRows : paramRows.filter((r) => r.differs),
  );
  let diffCount = $derived(paramRows.filter((r) => r.differs).length);
</script>

<CardShell eyebrow="Compare" title="Side-by-Side Comparison" wide>
  <FieldRow>
    <FormLabel text="First case">
      <Dropdown
        class="w-32.5"
        options={caseOptions}
        value={leftCase}
        onchange={(v) => (leftCase = v)}
        placeholder="Select..."
      />
    </FormLabel>
    <Button
      variant="secondary"
      size="sm"
      onclick={swapCases}
      disabled={!leftCase && !rightCase}><Icon icon={ArrowLeftRight} /></Button
    >
    <FormLabel text="Second case">
      <Dropdown
        class="w-32.5"
        options={caseOptions}
        value={rightCase}
        onchange={(v) => (rightCase = v)}
        placeholder="Select..."
      />
    </FormLabel>
  </FieldRow>

  {#if leftCase && rightCase && leftCase === rightCase}
    <p class="text-sm text-muted text-center py-8">
      Please select two different cases to compare.
    </p>
  {:else if !leftCase || !rightCase}
    <p class="text-sm text-muted text-center py-8">
      Select two cases to compare.
    </p>
  {:else}
    {#if paramRows.length > 0}
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs text-muted"
          >{diffCount} difference{diffCount !== 1 ? "s" : ""} out of {paramRows.length}
          parameters</span
        >
        <button
          class="text-xs text-accent cursor-pointer hover:underline"
          onclick={() => (showAllParams = !showAllParams)}
        >
          {showAllParams ? "Show differences only" : "Show all parameters"}
        </button>
      </div>
      {#if visibleParamRows.length > 0}
        <div class="table-wrap mb-3">
          <table
            style="border-collapse: separate; border-spacing: 0; width: 100%; text-align: center;"
          >
            <thead>
              <tr>
                <th style="text-align: center;">{leftCase}</th>
                <th style="text-align: center;">Parameter</th>
                <th style="text-align: center;">{rightCase}</th>
              </tr>
            </thead>
            <tbody>
              {#each visibleParamRows as row (row.param)}
                <tr>
                  <td
                    style="text-align: center;"
                    class={row.differs
                      ? "text-edf-orange-fonce bg-[rgba(214,67,10,0.04)]"
                      : ""}>{row.left}</td
                  >
                  <td style="text-align: center;" class="font-bold"
                    >{row.param}</td
                  >
                  <td
                    style="text-align: center;"
                    class={row.differs
                      ? "text-edf-vert-fonce bg-[rgba(48,122,16,0.04)]"
                      : ""}>{row.right}</td
                  >
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      {:else}
        <p class="text-sm text-muted text-center py-4 mb-3">
          All parameters are identical.
        </p>
      {/if}
    {/if}

    <FieldRow>
      <FormLabel text="File">
        <Dropdown
          class="w-37.5"
          options={kindOptions}
          value={kind}
          onchange={(v) => (kind = v)}
        />
      </FormLabel>
    </FieldRow>

    {#if error}
      <p class="text-sm text-red-600 text-center py-8">{error}</p>
    {:else if compared}
      <DiffViewer
        {diffText}
        leftLabel={leftCase}
        rightLabel={rightCase}
        {kind}
        {search}
        {loading}
        onSearchChange={(v) => (search = v)}
      />
    {:else if loading}
      <p class="text-sm text-muted text-center py-8">Loading...</p>
    {/if}
  {/if}
</CardShell>
