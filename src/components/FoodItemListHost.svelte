<script lang="ts" context="module">
  import type { FoodSelection } from '$lib';
  import { writable, type Writable } from 'svelte/store';

  import { Button, Dialog } from '@rizzzi/svelte-commons';

  interface ItemListInstance {
    search: Writable<string>;

    result: (data: FoodSelection | null) => void;
  }

  const instances: Writable<ItemListInstance[]> = writable([]);

  export function getFoodItemInstance(): Promise<FoodSelection | null> {
    return new Promise((resolve) => {
      const instance: ItemListInstance = {
        search: writable(''),
        result: (data) => {
          resolve(data);
          instances.update((items) => {
            items.splice(items.indexOf(instance), 1);
            return items;
          });
        }
      };

      instances.update((items) => {
        items.push(instance);
        return items;
      });
    });
  }
</script>

<script lang="ts">
  import { ButtonClass } from '@rizzzi/svelte-commons';

  const { search, result }: ItemListInstance = $props();
</script>

<Dialog onDismiss={() => result(null)}>
  {#snippet body()}{/snippet}
  {#snippet actions()}
    <Button
      onClick={() => {
        result(null);
      }}
      buttonClass={ButtonClass.Background}
    >
      <h2 class="button">Cancel</h2>
    </Button>
  {/snippet}
</Dialog>
