<script lang="ts">
  import NavigationPanel from '../components/NavigationPanel.svelte';
  import MyBag from '../components/TrayPanel.svelte';
  import MainPanel from '../components/MainPanel.svelte';

  import { titleString, Title, ColorScheme, ResetCSS } from '@rizzzi/svelte-commons';
  import '@fortawesome/fontawesome-free/css/all.css';

  import OrderDialog from '../components/OrderDialog.svelte';
  import type { Snippet } from 'svelte';
  import Banner from '../components/Banner.svelte';
  import SelectionDialogHost from '../components/SelectionDialogHost.svelte';
  import FoodItemListHost from '../components/FoodItemListHost.svelte';
  import ConfirmationDialogHost from '../components/ConfirmationDialogHost.svelte';

  const { children }: { children: Snippet } = $props();
</script>

<Title title="Ordering System" />
<ColorScheme />
<ResetCSS />

<svelte:head>
  <title>{$titleString ?? 'Ordering System'}</title>
</svelte:head>

<div class="main">
  <NavigationPanel />
  <MainPanel>{@render children()}</MainPanel>
  <MyBag />
</div>

<OrderDialog />
<FoodItemListHost />
<SelectionDialogHost />
<Banner />
<ConfirmationDialogHost />

<style lang="scss">
  :root {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  :global(p) {
    margin: 0px;
  }

  :global(body) {
    background-color: var(--background);
    color: var(--onBackground);
    margin: 0px;

    user-select: none;
  }

  div.main {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;

    min-height: 100vh;
    max-height: 100vh;

    padding: 1em;
    gap: 1em;
  }
</style>
