<script lang="ts" context="module">
  export interface ConfirmationDialogData {
    message: string;

    result: (result: boolean) => void;
  }

  const confirmationDialogs: Writable<ConfirmationDialogData[]> = writable([]);

  export function confirm(message: string): Promise<boolean> {
    return new Promise((resolve) => {
      const confirmationDialog: ConfirmationDialogData = {
        message,
        result: (result) => {
          confirmationDialogs.update((confirmationDialogs) => {
            confirmationDialogs.splice(confirmationDialogs.indexOf(confirmationDialog), 1);
            return confirmationDialogs;
          });
          resolve(result);
        }
      };

      confirmationDialogs.update((confirmationDialogs) => {
        confirmationDialogs.push(confirmationDialog);
        return confirmationDialogs;
      });
    });
  }
</script>

<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import ConfirmationDialog from './ConfirmationDialog.svelte';
</script>

{#each $confirmationDialogs as confirmationDialog}
  <ConfirmationDialog {...confirmationDialog} />
{/each}
