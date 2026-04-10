<!--
  ViewManager — view dropdown + edit/add buttons.
-->
<script lang="ts">
  import {
    getViews,
    getActiveViewName,
    setActiveViewName,
    saveView,
    deleteView,
    applyView,
    getVisibleColumns,
    setVisibleColumns,
    getDoeColumns,
    BASE_COLUMNS,
  } from "$lib/stores/status.svelte";
  import Icon from "$lib/components/shared/Icon.svelte";
  import Dropdown from "$lib/components/shared/Dropdown.svelte";
  import Portal from "$lib/components/shared/Portal.svelte";
  import ViewEditorDialog from "./ViewEditorDialog.svelte";
  import { Pencil, Plus } from "lucide-svelte";

  let viewNames = $derived(Object.keys(getViews()));
  let activeView = $state(getActiveViewName());

  let editorOpen = $state(false);
  let editorMode = $state<"create" | "edit">("create");

  let viewOptions = $derived([
    { value: "", label: "All columns" },
    ...viewNames.map((n) => ({ value: n, label: n })),
  ]);

  function handleViewChange(name: string) {
    activeView = name;
    setActiveViewName(name);
    if (name === "") {
      setVisibleColumns([
        ...getDoeColumns(),
        ...BASE_COLUMNS.map((c) => c.key),
      ]);
    } else {
      const views = getViews();
      if (views[name]) applyView(views[name]);
    }
  }

  function openEdit() {
    editorMode = "edit";
    editorOpen = true;
  }

  function openCreate() {
    editorMode = "create";
    editorOpen = true;
  }

  function handleSave(name: string, columns: string[]) {
    setVisibleColumns(columns);
    if (editorMode === "edit" && activeView && name !== activeView) {
      deleteView(activeView);
    }
    saveView(name);
    activeView = name;
    editorOpen = false;
  }

  function handleCancel() {
    editorOpen = false;
  }
</script>

<div class="flex items-center gap-1.5">
  <Dropdown
    class="w-[140px]"
    options={viewOptions}
    value={activeView}
    onchange={handleViewChange}
  />
  <button
    class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair"
    onclick={openEdit}
    title="Edit current view"
  >
    <Icon icon={Pencil} size={14} />
  </button>
  <button
    class="flex items-center justify-center w-[30px] h-[30px] bg-white text-ink border border-border rounded-md cursor-pointer transition-colors duration-150 hover:bg-edf-gris-clair"
    onclick={openCreate}
    title="Create new view"
  >
    <Icon icon={Plus} size={14} />
  </button>
</div>

{#if editorOpen}
  <Portal>
    <ViewEditorDialog
      mode={editorMode}
      initialName={editorMode === "edit" ? activeView : ""}
      initialColumns={getVisibleColumns()}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  </Portal>
{/if}
