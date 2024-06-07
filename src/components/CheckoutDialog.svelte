<script lang="ts" context="module">
  import { Button, Dialog } from '@rizzzi/svelte-commons';
  import { writable, type Writable } from 'svelte/store';

  export const enabled: Writable<boolean> = writable(false);
</script>

{#if $enabled}
  <Dialog
    onDismiss={() => {
      $enabled = false;
    }}
  >
    {#snippet head()}
      <h2>Checkout</h2>
    {/snippet}
    {#snippet body()}
      <p>// TODO: Checkout Dialog</p>
    {/snippet}
    {#snippet actions()}
      <Button
        onClick={() => {
          $enabled = false;
        }}><div class="button">Order</div></Button
      >
      <Button
        onClick={() => {
          $enabled = false;
        }}><div class="button">Cancel</div></Button
      >
    {/snippet}
  </Dialog>
{/if}

<style lang="scss">
  div.button {
    padding: 8px;
  }
</style>
