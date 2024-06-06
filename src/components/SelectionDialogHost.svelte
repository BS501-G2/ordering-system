<script lang="ts" context="module">
  import type { FoodSelection } from '$lib';
  import { writable, type Writable } from 'svelte/store';

  interface SelectionEditor {
    selection: Writable<FoodSelection>;

    resolve: (data: FoodSelection) => void;
    reject: () => void;
  }

  const openEditors: Writable<SelectionEditor[]> = writable([]);

  export function editFoodSelection(selection: FoodSelection): Promise<FoodSelection> {
    return new Promise((resolve, reject) => {
      const editor: SelectionEditor = {
        selection: writable(selection),
        resolve: () => {
          openEditors.update((openEditors) => {
            openEditors.splice(openEditors.indexOf(editor), 1);
            return openEditors;
          });

          resolve(selection);
        },
        reject: () => {
          openEditors.update((openEditors) => {
            openEditors.splice(openEditors.indexOf(editor), 1);
            return openEditors;
          });

          reject()
        }
      };

      openEditors.update((openEditors) => {
        openEditors.push(editor);
        return openEditors;
      });
    });
  }
</script>

<script lang="ts">
  import SelectionDialog from './SelectionDialog.svelte';
</script>

{#each $openEditors as editorData}
  <SelectionDialog
    cancel={editorData.reject}
    selection={editorData.selection}
    resolve={editorData.resolve}
  />
{/each}
