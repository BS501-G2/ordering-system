<script lang="ts">
  import { Button, ButtonClass } from '@rizzzi/svelte-commons';
  import { getFoodOrderPrice, getFoodOrderTitle, numberToCurrency, type FoodOrder } from '$lib';

  const { order, onRemove }: { order: FoodOrder; onRemove: () => Promise<void> } = $props();
</script>

{#snippet buttonContainer(view)}
  <div class="button">
    {@render view()}
  </div>
{/snippet}

<div class="item">
  <img class="preview" src={order.image} alt={getFoodOrderTitle(order)} />

  <p class="name">{getFoodOrderTitle(order)}</p>
  <p class="prize">{numberToCurrency(getFoodOrderPrice(order))}</p>

  <div class="actions">
    <Button
      container={buttonContainer}
      buttonClass={ButtonClass.Transparent}
      onClick={onRemove}
    >
      <i class="fa-solid fa-x"></i>
    </Button>
  </div>
</div>
{#if order.notes}
  <p class="notes"><b>Notes:</b> <span>{order.notes}</span></p>
{/if}

<style lang="scss">
  div.button {
    margin: 8px;
  }

  div.item {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1em;

    > p.name {
      flex-grow: 1;
    }

    > img.preview {
      object-fit: cover;
      height: 2em;
      aspect-ratio: 1;
      border-radius: 8px;
    }

    > div.actions {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 8px;
    }
  }
</style>
