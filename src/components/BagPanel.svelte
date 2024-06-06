<script lang="ts" context="module">
  import { getFoodOrderPrice, getFoodOrderTitle, numberToCurrency, type FoodOrder } from '$lib';
  import { writable, type Writable } from 'svelte/store';
  import { enabled as checkoutEnabled } from './CheckoutModal.svelte';
  import CheckoutModal from './CheckoutModal.svelte';

  export const bag: Writable<FoodOrder[]> = writable([]);
</script>

<script lang="ts">
  import { Button } from '@rizzzi/svelte-commons';
</script>

<CheckoutModal />

{#snippet buttonContainer(view)}
  <div class="button">
    {@render view()}
  </div>
{/snippet}

<div class="bag">
  <h2>My Bag</h2>
  <div class="bag-content">
    {#each $bag as order}
      <p>{getFoodOrderTitle(order)}</p>
    {/each}
  </div>
  <div class="bag-footer">
    <div class="total">
      <p><b>Total:</b></p>
      <p>
        <i>
          {numberToCurrency($bag.reduce((total, order) => total + getFoodOrderPrice(order), 0))}
        </i>
      </p>
    </div>
    <Button
      container={buttonContainer}
      onClick={() => {
        $checkoutEnabled = true;
      }}>Checkout</Button
    >
  </div>
</div>

<style lang="scss">
  div.button {
    padding: 8px;
  }

  div.bag {
    background-color: var(--backgroundVariant);

    display: flex;
    flex-direction: column;

    min-width: 320px;
    max-width: 320px;
    box-sizing: border-box;

    border-radius: 1em;

    > h2 {
      text-align: center;
      margin: 0px;
      padding: 16px;
      font-size: 24px;
      font-weight: lighter;
    }

    > div.bag-content {
      flex-grow: 1;

      border-top: 1px solid var(--primary);
      border-bottom: 1px solid var(--primary);
      min-height: 0px;
    }

    > div.bag-footer {
      padding: 1em;
      gap: 1em;

      display: flex;
      flex-direction: column;

      > div.total {
        display: flex;
        flex-direction: row;

        > p {
          flex-grow: 1;
          margin: 0px;
        }

        > p:last-child {
          text-align: right;
        }
      }
    }
  }
</style>
