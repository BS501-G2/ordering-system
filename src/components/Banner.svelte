<script lang="ts" context="module">
  export const bannerActive = writable(true);
</script>

<script lang="ts">
  import {
    AnimationFrame,
    Button,
    Dialog,
    DialogClass,
    Tab,
    createTabId,
    type TabItem
  } from '@rizzzi/svelte-commons';
  import type { Snippet } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade } from 'svelte/transition';

  const images: string[] = [
    '/images/banners/cardi-b-offset-mcdonalds-meal-superbowl-021023-1-bbfdd30e4ad948008b2ae2ccae334c88.jpg',
    '/images/banners/qt1pq58r827iyyvugjfr.jpg',
    '/images/banners/McDonalds-Crave--Claim-GMA_cover_photo_2022_08_31_18_48_14.jpg',
    '/images/banners/McDonalds-Best-Tasting-Chicken-McDo-and-World-Famous-Fries.jpg'
  ];
  const tabs: TabItem<{ image: string }>[] = images.map((image) => ({
    name: 'Image',
    view: imageView as Snippet,
    image
  }));
  const tabId = createTabId(tabs);

  let nextChange: number = Date.now() + 5000;
</script>

{#snippet imageView(setTab: (index: number) => void, tab: TabItem, tabIndex: number)}
  {#key tab.image}
    <img class="banner" alt="banner" src={tab.image} transition:fade|global={{ duration: 500 }} />
  {/key}
{/snippet}

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
    {#snippet body()}
      <div class="body">
        <Tab id={tabId} />
      </div>
    {/snippet}

    {#snippet actions()}
      <Tab id={tabId}>
        {#snippet host(tabs, currentIndex, setTab)}
          <div class="indicator">
            {#each tabs as tab, index}
              <div class="indicator-bar" class:active={index === currentIndex}></div>
            {/each}
          </div>
          <AnimationFrame
            callback={() => {
              if (Date.now() > nextChange) {
                nextChange = Date.now() + 5000;
                setTab((currentIndex + 1) % tabs.length);
              }
            }}
          />
        {/snippet}

        {#snippet view()}{/snippet}
      </Tab>
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

  div.indicator {
    min-height: 2px;
    max-height: 2px;

    display: flex;
    flex-direction: row;
    gap: 8px;

    > div.indicator-bar {
      background-color: var(--background);
      min-width: 64px;
      max-width: 64px;
    }

    > div.indicator-bar.active {
      background-color: var(--onBackground);
    }
  }

  div.body {
    min-width: calc(100vw - 128px);
    min-height: calc(100vh - 128px);
    max-width: calc(100vw - 128px);
    max-height: calc(100vh - 128px);

    display: flex;

    overflow: hidden;
  }

  img.banner {
    min-width: calc(100vw - 128px);
    min-height: calc(100vh - 128px);
    max-width: calc(100vw - 128px);
    max-height: calc(100vh - 128px);

    object-fit: contain;
    object-position: center;

    flex-grow: 1;
  }
</style>
