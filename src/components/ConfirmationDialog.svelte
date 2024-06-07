<script lang="ts">
  import { Button, ButtonClass, Dialog } from '@rizzzi/svelte-commons';
  import type { ConfirmationDialogData } from './ConfirmationDialogHost.svelte';
  import { type Snippet } from 'svelte';

  const { message, result }: ConfirmationDialogData = $props();
</script>

{#snippet buttonContainer(value: Snippet)}
  <div class="button">{@render value()}</div>
{/snippet}

<Dialog onDismiss={() => result(false)}>
  {#snippet head()}
    <h2>Confirmation Message</h2>
  {/snippet}
  {#snippet body()}
    <p>{message}</p>
  {/snippet}

  {#snippet actions()}
    <Button
      onClick={() => {
        result(true);
      }}
      buttonClass={ButtonClass.Primary}
      container={buttonContainer}
    >
      <div class="button">Yes</div>
    </Button>
    <Button
      onClick={() => {
        result(false);
      }}
      buttonClass={ButtonClass.Background}
      container={buttonContainer}
    >
      <div class="button">No</div>
    </Button>
  {/snippet}
</Dialog>

<style lang="scss">
  div.button {
    margin: 8px;
  }
</style>
