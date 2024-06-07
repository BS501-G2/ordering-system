<script lang="ts" context="module">
  import {
    foodItems,
    getFoodOrderPrice,
    getFoodSelectionPrice,
    getFoodSelectionTitle,
    numberToCurrency,
    type FoodOrder,
    type FoodSelection
  } from '$lib';

  const currentOrderData: Writable<FoodOrder[]> = writable([]);

  export function pushOrderItem(data: FoodOrder) {
    if (get(currentOrderData).length > 0) {
      throw new Error('Cannot push order dialog more than once.');
    }

    currentOrderData.set([structuredClone(data)]);
  }
</script>

<script lang="ts">
  import {
    Button,
    ButtonClass,
    Dialog,
    DialogClass,
    ViewMode,
    viewMode
  } from '@rizzzi/svelte-commons';
  import { bag } from './TrayPanel.svelte';
  import { get, writable, type Writable } from 'svelte/store';
  import { editFoodSelection } from './SelectionDialogHost.svelte';
  import { type Snippet } from 'svelte';
  import { launchFoodItemSelector } from './FoodItemListHost.svelte';
  import { confirm } from './ConfirmationDialogHost.svelte';

  function addToBag() {
    if ($currentOrderData == null) {
      return;
    }

    if ($bag.includes($currentOrderData[0])) {
      $bag = $bag;
    }

    $bag.push($currentOrderData[0]);
    $bag = $bag;
    $currentOrderData = [];
  }

  function cancel() {
    $currentOrderData = [];
  }
</script>

{#snippet actionContainer(view: Snippet)}
  <div class="action">
    {@render view()}
  </div>
{/snippet}

{#snippet foodSelection(selection: FoodSelection, update: (foodSelection: FoodSelection) => void, remove: (() => Promise<void>) | null)}
  <div class="item">
    <img class="preview" src={foodItems[selection.index].image} alt="Food Selection Preview" />
    <div class="item-info">
      <p><b>{getFoodSelectionTitle(selection)}</b></p>
      <p>{numberToCurrency(getFoodSelectionPrice(selection))}</p>
    </div>
    <div class="actions">
      <Button
        buttonClass={ButtonClass.Transparent}
        onClick={async () => {
          try {
            update(await editFoodSelection(selection));
          } catch {}
        }}
        container={actionContainer}
      >
        <i class="fa-solid fa-pen"></i>
      </Button>

      {#if remove != null}
        <Button buttonClass={ButtonClass.Transparent} onClick={remove} container={actionContainer}>
          <i class="fa-solid fa-trash"></i>
        </Button>
      {/if}
    </div>
  </div>
{/snippet}

{#if $currentOrderData.length > 0}
  <Dialog onDismiss={() => ($currentOrderData = [])} dialogClass={DialogClass.Normal}>
    {#snippet head()}
      <div class="head">
        <img
          class="header-image"
          src={$currentOrderData[0].image ?? foodItems[$currentOrderData[0].main.index].image}
          alt="Main Food Selection"
        />

        <h2>Place an Order</h2>
      </div>
    {/snippet}

    {#snippet body()}
      <div class="dialog{$viewMode & ViewMode.Desktop ? ' desktop' : ''}">
        <div class="divider"></div>
        <div class="fields">
          <table>
            <tbody>
              <tr>
                <th>Food Item</th>
                <td
                  >{@render foodSelection(
                    $currentOrderData[0].main,
                    (selection) => {
                      currentOrderData.update((currentOrderData) => {
                        currentOrderData[0].main = selection;
                        return currentOrderData;
                      });
                    },
                    null
                  )}</td
                >
              </tr>
              {#if !foodItems[$currentOrderData[0].main.index].canBeExtra || ($currentOrderData[0].extras?.length ?? 0) > 0}
                <tr>
                  <th>Extra Items</th>
                  <td>
                    <div class="extra-items">
                      {#each $currentOrderData[0].extras ?? [] as extra, index}
                        {@render foodSelection(extra, (selection) => {
                          currentOrderData.update((currentOrderData) => {
                            currentOrderData[0].extras![index] = selection;
                            return currentOrderData;
                          });
                        }, async () => {
                          if (await confirm('Are you sure you want to remove this extra item?')) {
                            currentOrderData.update((currentOrderData) => {
                              currentOrderData[0].extras?.splice(index, 1);
                              return currentOrderData;
                            });
                          }

                        })}
                      {/each}

                      {#if !foodItems[$currentOrderData[0].main.index].canBeExtra}
                        <Button
                          container={actionContainer}
                          onClick={async () => {
                            const selection = await launchFoodItemSelector();

                            if (selection == null) {
                              return;
                            }

                            currentOrderData.update((currentOrderData) => {
                              currentOrderData[0].extras ??= [];
                              currentOrderData[0].extras.push(selection);
                              return currentOrderData;
                            });
                          }}>Add Extra</Button
                        >
                      {/if}
                    </div>
                  </td>
                </tr>
              {/if}
              <tr>
                <th>Notes</th>
                <td>
                  <textarea
                    class="notes"
                    onchange={({ currentTarget }) =>
                      currentOrderData.update((currentOrderData) => {
                        currentOrderData[0].notes = currentTarget.value;
                        return currentOrderData;
                      })}
                    value={$currentOrderData[0].notes ?? ''}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="divider"></div>
      </div>
    {/snippet}

    {#snippet actions()}
      <p>
        <span>Total Price:</span>
        <b>{numberToCurrency(getFoodOrderPrice($currentOrderData[0]))}</b>
      </p>
      <div class="spacer"></div>
      <Button onClick={addToBag} container={actionContainer}>Add to Tray</Button>
      <Button onClick={cancel} container={actionContainer} buttonClass={ButtonClass.Background}>
        Cancel
      </Button>
    {/snippet}
  </Dialog>
{/if}

<style lang="scss">
  div.action {
    margin: 8px;
  }

  div.dialog {
    min-height: 0px;

    display: flex;
    flex-direction: column;

    overflow: hidden auto;
  }

  div.dialog.desktop {
    min-width: min(100vw - 128px, 640px);
    min-height: min(100vh - 128px, 360px);

    max-width: 640px;
    max-height: 360px;
  }

  div.head {
    display: flex;
    flex-direction: row;
    gap: 8px;

    > img.header-image {
      object-fit: cover;
      height: 2em;
      aspect-ratio: 1;
      border-radius: 8px;
    }
  }

  div.divider {
    min-height: 1px;
    max-height: 1px;
    width: 100%;
    background-color: var(--onBackgroundVariant);
  }

  div.fields {
    overflow: auto;
    flex-grow: 1;

    > table {
      min-width: 100%;
      box-sizing: border-box;

      > tbody > tr {
        > th,
        > td {
          box-sizing: border-box;
          padding: 8px;

          min-width: 50%;
          max-width: 50%;
        }

        > th {
          text-align: start;
        }

        > td {
          text-align: end;
        }
      }
    }
  }

  div.item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: safe end;

    gap: 8px;

    > img.preview {
      object-fit: cover;
      height: 2em;
      aspect-ratio: 1;
      border-radius: 8px;
    }

    > div.item-info {
      flex-grow: 1;

      text-align: left;
    }

    > div.actions {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 8px;
    }
  }

  div.spacer {
    flex-grow: 1;
  }

  div.extra-items {
    display: flex;
    flex-direction: column;

    gap: 8px;
  }

  textarea.notes {
    min-width: 100%;
    min-height: 100%;

    box-sizing: border-box;
  }
</style>
