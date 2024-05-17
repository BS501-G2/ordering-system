<script lang="ts" context="module">
  import type { FoodOrder } from '$lib';

  const currentOrderData: Writable<FoodOrder | null> = writable(null);

  export function pushOrderItem(data: FoodOrder) {
    if (get(currentOrderData) !== null) {
      throw new Error('Cannot push order dialog more than once.');
    }

    currentOrderData.set(data);
  }
</script>

<script lang="ts">
  import { Button, Dialog, DialogClass } from '@rizzzi/svelte-commons';
  import { bag } from './BagPanel.svelte';
  import { get, writable, type Writable } from 'svelte/store';

  function addToBag() {
    if ($currentOrderData == null) {
      return;
    }

    if ($bag.includes($currentOrderData)) {
      $bag = $bag;
    }

    $bag.push($currentOrderData);
    $bag = $bag;
    $currentOrderData = null;
  }

  function cancel() {
    $currentOrderData = null;
  }
</script>

{#if $currentOrderData !== null}
  <Dialog onDismiss={() => ($currentOrderData = null)} dialogClass={DialogClass.Normal}>
    {#snippet head()}
      <h2>Order</h2>
    {/snippet}

    {#snippet body()}
      // TODO ORDER
    {/snippet}

    {#snippet actions()}
      <Button onClick={addToBag}><p class="action">Add</p></Button>
      <Button onClick={cancel}><p class="action">Cancel</p></Button>
    {/snippet}
  </Dialog>
{/if}

<style lang="scss">
  p.action {
    margin: 8px;
  }
</style>
