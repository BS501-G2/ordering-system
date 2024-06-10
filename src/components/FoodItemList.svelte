<script lang="ts">
  import { Button, ButtonClass, Dialog, Input, InputType } from '@rizzzi/svelte-commons';
  import type { ItemListInstance } from './FoodItemListHost.svelte';
  import { derived, writable, type Writable } from 'svelte/store';
  import { foodItems, numberToCurrency, type FoodItem, type FoodSelection } from '$lib';
  import { type Snippet } from 'svelte';
  import { editFoodSelection } from './SelectionDialogHost.svelte';

  const { search, exceptions, result }: ItemListInstance = $props();

  const filteredFoodItems = derived(search, (search) =>
    foodItems
      .map<[index: number, foodItem: FoodItem]>((foodItem, index) => {
        return [index, foodItem];
      })
      .filter(
        (foodItem) =>
          foodItem[1].name.toLowerCase().includes(search.toLowerCase()) && foodItem[1].canBeExtra
      )
  );
</script>

{#snippet buttonContainer(view: Snippet)}
  <div class="button">{@render view()}</div>
{/snippet}

<Dialog onDismiss={() => result(null)}>
  {#snippet head()}
    <div class="head">
      <h2>Add Extra</h2>
      <div class="search-field">
        <Input type={InputType.Text} value={search} icon="fas fa-search" name="Search" />
      </div>
    </div>
  {/snippet}
  {#snippet body()}
    <div class="body">
      <div class="divider"></div>
      <div class="food-item-list">
        <div class="food-item-grid">
          {#each $filteredFoodItems.filter( ([, value]) => !exceptions.includes(value) ) as [index, foodItem]}
            <Button
              onClick={async () => {
                const foodSelection = {
                  index: index,
                  quantity: 1
                };

                try {
                  result(await editFoodSelection(foodSelection));
                } catch {}
              }}
              buttonClass={ButtonClass.Transparent}
              container={buttonContainer}
              outline={false}
            >
              <div class="food-item">
                <img class="preview" src={foodItem.image} alt="Food Selection Preview" />

                <div class="item-info">
                  <p class="item-name">{foodItem.name}</p>
                  <p class="item-price">{numberToCurrency(foodItem.price)}</p>
                </div>
              </div>
            </Button>
          {/each}
        </div>
      </div>
      <div class="divider"></div>
    </div>
  {/snippet}
  {#snippet actions()}
    <Button
      onClick={() => {
        result(null);
      }}
      buttonClass={ButtonClass.Background}
      container={buttonContainer}
    >
      Cancel
    </Button>
  {/snippet}
</Dialog>

<style lang="scss">
  div.divider {
    min-height: 1px;
    max-height: 1px;

    background-color: var(--primary);
  }

  div.button {
    margin: 8px;
  }

  div.head {
    display: flex;
    flex-direction: row;
    gap: 128px;

    align-items: center;

    > div.search-field {
      flex-grow: 1;
    }
  }

  div.body {
    // min-width: min(100vw - 128px, 480px);
    // max-width: 480px;

    min-height: min(100vh - 128px, 480px);
    max-height: 480px;

    display: flex;
    flex-direction: column;

    overflow: hidden;
  }

  div.food-item-list {
    display: flex;
    flex-direction: column;
    min-height: 0px;

    overflow: hidden auto;
    flex-grow: 1;
  }

  div.food-item-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
    gap: 8px;
  }

  div.food-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    > img.preview {
      min-width: 128px;
      max-width: 128px;
      aspect-ratio: 1;
    }

    p.item-name {
      flex-grow: 1;
      font-weight: bolder;
    }
  }
</style>
