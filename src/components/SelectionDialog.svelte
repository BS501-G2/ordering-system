<script lang="ts">
  import {
    foodItems,
    getFoodSelectionPrice,
    getFoodSelectionTitle,
    numberToCurrency,
    type FoodSelection
  } from '$lib';
  import { Button, ButtonClass, Dialog } from '@rizzzi/svelte-commons';
  import type { Writable } from 'svelte/store';

  const {
    selection,
    resolve,
    cancel
  }: {
    selection: Writable<FoodSelection>;
    resolve: (data: FoodSelection) => void;
    cancel: () => void;
  } = $props();

  function close() {
    resolve($selection);
  }

  selection.subscribe((value) => {
    if (value.quantity <= 0) {
      selection.update((value) => {
        value.quantity = 1;

        return value;
      });
    } else {
      if (value.quantity > 99) {
        selection.update((value) => {
          value.quantity = 99;

          return value;
        });
      }
    }
  });
</script>

<Dialog onDismiss={close}>
  {#snippet head()}
    <h2>{getFoodSelectionTitle($selection)}</h2>
  {/snippet}

  {#snippet body()}
    <div class="dialog">
      <table>
        <tbody>
          <tr> </tr>
          <tr>
            <th>Quantity</th>
            <td>
              <input type="number" min={1} max={99} bind:value={$selection.quantity} />
            </td>
          </tr>
          <tr>
            <th>Variant</th>
            <td>
              <select
                value={$selection.variantIndex ?? ''}
                onchange={({ currentTarget }) => {
                  if (currentTarget.value != null && currentTarget.value != '') {
                    $selection.variantIndex = Number(currentTarget.value);
                  } else {
                    $selection.variantIndex = undefined;
                  }
                }}
              >
                {#each foodItems[$selection.index].variant as variant, i}
                  <option value={i}>{variant.name}</option>
                {/each}
                <option value="">Regular</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  {/snippet}

  {#snippet actions()}
    <div class="actions">
      <p>Price: <b>{numberToCurrency(getFoodSelectionPrice($selection))}</b></p>
      <Button onClick={close}>
        <div class="button">Done</div>
      </Button>
      <Button buttonClass={ButtonClass.Background} onClick={cancel}>
        <div class="button">Cancel</div>
      </Button>
    </div>
  {/snippet}
</Dialog>

<style lang="scss">
  div.dialog {
    min-width: min(100vw - 128px, 480px);
    max-width: 480px;
  }

  select,
  input[type='number'] {
    padding: 8px;
    margin-right: 4px;

    background-color: transparent;
    color: var(--onBackgroundVariant);

    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
  }

  table {
    min-width: 100%;
    max-width: 100%;

    box-sizing: border-box;

    > tbody {
      th,
      td {
        padding: 8px 0px;
      }

      th {
        text-align: left;
      }

      td {
        text-align: right;
      }
    }
  }

  div.actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    min-width: 100%;

    > p {
      flex-grow: 1;
      line-height: 1em;
      text-align: left;
    }
  }

  div.button {
    margin: 8px;
  }
</style>
