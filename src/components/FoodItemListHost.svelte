<script lang="ts" context="module">
  import type { FoodItem, FoodSelection } from '$lib';
  import { writable, type Writable } from 'svelte/store';
  import FoodItemList from './FoodItemList.svelte';

  export interface ItemListInstance {
    search: Writable<string>;
    exemptions: FoodItem[];

    result: (data: FoodSelection | null) => void;
  }

  const instances: Writable<ItemListInstance[]> = writable([]);

  export function launchFoodItemSelector(exemptions: FoodItem[]): Promise<FoodSelection | null> {
    return new Promise((resolve) => {
      const instance: ItemListInstance = {
        search: writable(''),
        exemptions,
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
