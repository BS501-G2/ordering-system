<script lang="ts" context="module">
  import {
    Button,
    ButtonClass,
    Dialog,
    Tab,
    createTabId,
    type TabItem
  } from '@rizzzi/svelte-commons';
  import { type Snippet } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  const number: Writable<number> = writable(0);
</script>

<script lang="ts">
  const { onClose }: { onClose: () => void } = $props();
  const tabs: TabItem<{ onCall: () => void }>[] = [
    {
      name: 'Payment Method',
      view: paymentMethodTab,
      onCall() {}
    },
    {
      name: 'Discount',
      view: discountTab,
      onCall() {}
    },
    {
      name: 'Confirmation',
      view: confirmationTab,
      onCall() {}
    },
    {
      name: 'Receipt & Feedback',
      view: receiptTab,
      onCall() {
        $number += Math.random() * 10;
      }
    }
  ];

  const tabId = createTabId(tabs);
</script>

{#snippet paymentMethodTab()}
  <h1>Please Select Your Payment Method</h1>
{/snippet}

{#snippet discountTab()}{/snippet}

{#snippet confirmationTab()}{/snippet}

{#snippet receiptTab()}
  <div class="receipt">
    <div>
      <h1>Thank You</h1>
      <p class="message">Your order has been placed.</p>
    </div>

    <p class="order-number">
      <i class="message">Your number is:</i>
      <i class="number">#{Math.round($number)}</i>
    </p>

    <p class="notice">Please take the receipt printed.</p>
  </div>
{/snippet}

{#snippet buttonContainer(view: Snippet)}
  <div style="margin: 8px; min-width: 128px">{@render view()}</div>
{/snippet}

<Dialog onDismiss={onClose}>
  {#snippet head()}
    <Tab id={tabId}>
      {#snippet host(tabs, currentIndex)}
        <h2>{tabs[currentIndex].name}</h2>
      {/snippet}

      {#snippet view()}{/snippet}
    </Tab>
  {/snippet}
  {#snippet body()}
    <div class="body">
      <Tab id={tabId} />
    </div>
  {/snippet}
  {#snippet actions()}
    <Tab id={tabId}>
      {#snippet host(tabs, currentIndex, setTab)}
        <div class="bar">
          {#if currentIndex > 0}
            <Button
              onClick={() => {
                tabs[currentIndex - 1].onCall();
                setTab(currentIndex - 1);
              }}
              buttonClass={ButtonClass.Transparent}
              container={buttonContainer}
            >
              <div class="button-name">
                <i class="fa-solid fa-chevron-left"></i>
                <p>{tabs[currentIndex - 1].name}</p>
              </div>
            </Button>
          {/if}
          <div class="indicator">
            {#each tabs as tab, index}
              <div class="indicator-item" class:active={index === currentIndex}>
                {tab.name}
              </div>
            {/each}
          </div>
          {#if currentIndex < tabs.length - 1}
            <Button
              onClick={() => {
                tabs[currentIndex + 1].onCall();
                setTab(currentIndex + 1);
              }}
              container={buttonContainer}
            >
              <div class="button-name">
                <p>{tabs[currentIndex + 1].name}</p>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </Button>
          {:else}
            <Button onClick={onClose} container={buttonContainer}>
              <div class="button-name">
                <p>Done</p>
                <i class="fa-solid fa-check"></i>
              </div>
            </Button>
          {/if}
        </div>
      {/snippet}
      {#snippet view()}{/snippet}
    </Tab>
  {/snippet}
</Dialog>

<style lang="scss">
  div.body {
    display: flex;
    flex-direction: column;

    min-width: min(768px, 100vw - 128px);
    min-height: min(720px, 100vh - 128px);
  }

  div.bar {
    display: flex;
    flex-direction: row;

    align-items: center;
    flex-grow: 1;

    > div.indicator {
      flex-grow: 1;

      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 8px;
      justify-content: center;
      align-items: center;

      > div.indicator-item {
        padding: 8px;

        border-bottom: 1px solid transparent;

        font-size: 0.75em;
        font-style: italic;
      }

      > div.indicator-item.active {
        border-bottom-color: var(--primary);
      }
    }
  }

  div.button-name {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-size: 1em;

    > p {
      flex-grow: 1;
    }
  }

  div.receipt {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    justify-content: space-evenly;

    flex-grow: 1;

    text-align: center;

    > p.order-number {
      font-size: 1.5em;

      display: flex;
      flex-direction: column;

      > i.number {
        font-size: 2em;
      }
    }
  }
</style>
