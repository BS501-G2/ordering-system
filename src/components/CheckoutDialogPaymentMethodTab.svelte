<script lang="ts" context="module">
</script>

<script lang="ts">
  import type { Writable } from 'svelte/store';
  import type { CheckoutState } from './CheckoutDialog.svelte';
  import { paymentMethods } from '$lib';
  import { Button, ButtonClass } from '@rizzzi/svelte-commons';

  const { state: checkoutState }: { state: Writable<CheckoutState> } = $props();
</script>

<div class="list">
<h2>Please select payment method.</h2>
  {#each paymentMethods as paymentMethod}
    <Button
      buttonClass={$checkoutState.paymentMethod === paymentMethod
        ? ButtonClass.Primary
        : ButtonClass.Background}
      outline={false}
      onClick={() => {
        checkoutState.update((state) => {
          state.paymentMethod = paymentMethod;
          return state;
        });
      }}
    >
      <div class="item">
        <img src={paymentMethod.image} alt={paymentMethod.name} />

        <p>{paymentMethod.name}</p>
      </div>
    </Button>
  {/each}
</div>

<style lang="scss">
  div.list {
    overflow: hidden auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: safe center;

    flex-grow: 1;
    gap: 16px;
  }

  div.item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;

    min-width: 320px;

    padding: 8px;

    > img {
      object-fit: cover;
      height: 64px;
      aspect-ratio: 1;
      border-radius: 8px;
    }

    > p {
      flex-grow: 1;
      font-size: 2em;

      text-align: start;
      font-weight: bolder;
    }
  }
</style>
