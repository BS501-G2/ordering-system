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
  import { persisted } from 'svelte-persisted-store';

  export interface CheckoutState {
    paymentMethod?: PaymentMethod;
    discount?: Discount;
  }
</script>

<script lang="ts">
  import CheckoutDialogPaymentMethodTab from './CheckoutDialogPaymentMethodTab.svelte';
  import type { Discount, PaymentMethod } from '$lib';
  import CheckoutDialogDiscountTab from './CheckoutDialogConfirmationTab.svelte';

  const { onClose }: { onClose: () => void } = $props();
  const tabs: TabItem<{ onCall: () => void; checkBeforeLeave: () => boolean; message?: string }>[] =
    [
      {
        name: 'Payment Method',
        view: paymentMethodTab,
        onCall() {},
        checkBeforeLeave() {
          console.log($state.paymentMethod);
          return $state.paymentMethod != null;
        }
      },
      {
        name: 'Confirm Order',
        view: confirmationTab,
        onCall() {},
        checkBeforeLeave() {
          return true;
        }
      },
      {
        name: 'Place Older',
        message: 'Order Placed',
        view: receiptTab,
        onCall() {
          2;
          $number += Math.random() * 10;
        },
        checkBeforeLeave() {
          return true;
        }
      }
    ];

  const tabId = createTabId(tabs);

  const number: Writable<number> = persisted('queue-number', 0);

  const state: Writable<CheckoutState> = writable({});
</script>

{#snippet paymentMethodTab()}
  <CheckoutDialogPaymentMethodTab {state} />
{/snippet}

{#snippet confirmationTab()}
  <CheckoutDialogDiscountTab {state} />
{/snippet}

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
        <h2>{tabs[currentIndex].message ?? tabs[currentIndex].name}</h2>
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
          {#if currentIndex > 0 && currentIndex !== tabs.length - 1}
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
                {tab.message ?? tab.name}
              </div>
            {/each}
          </div>
          {#if currentIndex < tabs.length - 1}
            {#key $state}
              <Button
                onClick={() => {
                  if (!tabs[currentIndex].checkBeforeLeave()) {
                    throw new Error('Please perform the required action.');
                  }
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
            {/key}
          {:else}
            <Button
              onClick={() => {
                onClose();
                window.location.reload();
              }}
              container={buttonContainer}
            >
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

    min-width: min(1280px, 100vw - 256px);
    min-height: min(720px, 100vh - 256px);
    max-width: min(1280px, 100vw - 256px);
    max-height: min(720px, 100vh - 256px);

    overflow: hidden;
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
