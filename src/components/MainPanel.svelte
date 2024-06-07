<script lang="ts">
  import { titleStack } from '@rizzzi/svelte-commons';
  import { fly } from 'svelte/transition';

  const { children }: { children: (() => any) | null } = $props();
</script>

<div class="main-panel">
  <h2>{$titleStack[$titleStack.length - 1]?.title}</h2>
  <div class="list-container">
    <div class="item-list" transition:fly|global={{ duration: 200, x: 1001, y: 0 }}>
      {#if children !== null}
        {@render children()}
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  div.main-panel {
    background-color: var(--backgroundVariant);
    border-radius: 1em;

    min-height: 100%;
    max-height: 100%;
    flex-grow: 1;

    overflow: hidden;

    display: flex;
    flex-direction: column;

    gap: 1em;
    padding: 1em;

    > h2 {
      margin: 0px;
      font-weight: bolder;
    }

    > div.list-container {
      border-top: 1px solid var(--primary);
      border-bottom: 1px solid var(--primary);

      overflow: auto;

      flex-grow: 1;

      > div.item-list {
        display: grid;

        gap: 1em;
        padding: 1em 0px;

        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
    }
  }
</style>
