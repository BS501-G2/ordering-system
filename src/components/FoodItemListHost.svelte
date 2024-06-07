<script lang="ts" context="module">
  import type { FoodSelection } from '$lib';
  import { writable, type Writable } from 'svelte/store';
  import FoodItemList from './FoodItemList.svelte';

  export interface ItemListInstance {
    search: Writable<string>;

    result: (data: FoodSelection | null) => void;
  }

  const instances: Writable<ItemListInstance[]> = writable([]);

  export function launchFoodItemSelector(): Promise<FoodSelection | null> {
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

{#each $instances as instance}
  <FoodItemList {...instance} />
{/each}
