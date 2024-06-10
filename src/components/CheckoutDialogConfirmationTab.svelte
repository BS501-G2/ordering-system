<script lang="ts" context="module">
</script>

<script lang="ts">
  import type { Writable } from 'svelte/store';
  import type { CheckoutState } from './CheckoutDialog.svelte';
  import { bag } from './TrayPanel.svelte';
  import TrayPanelEntry from './TrayPanelEntry.svelte';
  import { discounts, getFoodOrderPrice, numberToCurrency } from '$lib';

  const { state: dialogState }: { state: Writable<CheckoutState> } = $props();
  const total = $bag.reduce((total, bagEntry) => total + getFoodOrderPrice(bagEntry), 0);
</script>

<div class="host">
  <div class="main">
    <p><b>Items</b></p>
    <div class="list">
      {#each $bag as bagEntry}
        <TrayPanelEntry order={bagEntry} />
      {/each}
    </div>
    <div class="total">
      <table>
        <tbody>
          <tr>
            <th>Total</th>
            <td>{numberToCurrency(total)}</td>
          </tr>
          {#if $dialogState.discount}
            <tr>
              <th>Discount Percentage</th>
              <td>
                {$dialogState.discount
                  .fraction * 100}% (-{numberToCurrency($dialogState.discount.fraction * total)})
              </td>
            </tr>
            <tr>
              <th>Discount Price</th>
              <td>{numberToCurrency(total - $dialogState.discount.fraction * total)}</td>
            </tr>
          {/if}
        </tbody>
      </table>
    </div>
  </div>
  <div class="divider"></div>
  <div class="side">
    <p><b>Discount</b></p>

    <select
      class="discount"
      onchange={({ currentTarget }) => {
        dialogState.update((state) => {
          state.discount = discounts.find((discount) => discount.name === currentTarget.value);

          console.log(state);
          return state;
        });
      }}
    >
      <option value="">None</option>
      {#each discounts as discount}
        <option value={discount.name}>{discount.name}</option>
      {/each}
    </select>
  </div>
</div>

<style lang="scss">
  div.host {
    display: flex;
    flex-direction: row;

    flex-grow: 1;
    gap: 16px;

    min-width: 0px;
    min-height: 0px;

    > div.main {
      flex-grow: 1;

      min-height: 0px;

      display: flex;
      flex-direction: column;

      > div.list {
        flex-grow: 1;
        display: flex;
        flex-direction: column;

        gap: 8px;
        overflow: hidden auto;
      }

      > div.total {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        font-weight: bolder;
        text-align: end;

        > table {
          border-spacing: 8px;

          td, th {
            padding: 4px;
          }
        }
      }
    }

    > div.divider {
      min-width: 1px;
      max-width: 1px;

      background-color: var(--onBackground);
    }

    > div.side {
      min-width: 256px;
      max-width: 256px;

      box-sizing: border-box;
    }
  }

  select.discount {
    width: 100%;
    font-size: 1em;

    // border-radius: 8px;

    padding: 8px;
  }
</style>
