<script lang="ts" context="module">
  export const bannerActive = writable(true);
</script>

<script lang="ts">
  import { Button, Dialog, DialogClass } from '@rizzzi/svelte-commons';
  import { writable } from 'svelte/store';
</script>

{#snippet buttonContainer(view)}
  <div class="button-container">
    {@render view()}
  </div>
{/snippet}

{#if $bannerActive}
  <Dialog
    dialogClass={DialogClass.Normal}
    onDismiss={() => {
      $bannerActive = false;
    }}
  >
    {#snippet head()}
      <h2>Banner</h2>
    {/snippet}

    {#snippet body()}{/snippet}

    {#snippet actions()}
      <Button
        onClick={() => {
          $bannerActive = false;
        }}
        container={buttonContainer}
      >
        Order Now
      </Button>
    {/snippet}
  </Dialog>
{/if}

<style lang="scss">
  div.button-container {
    padding: 8px;
  }
</style>
