<script lang="ts">
	import NavigationPanel from '../components/NavigationPanel.svelte';
	import MyBag from '../components/BagPanel.svelte';
	import MainPanel from '../components/MainPanel.svelte';

	import {
		Dialog,
		titleString,
		Title,
		registerColorScheme,
		ColorKey,
		ColorScheme,
		ResetCSS
	} from '@rizzzi/svelte-commons';
	import '@fortawesome/fontawesome-free/css/all.css';
	import { onMount } from 'svelte';

	const { children } = $props();

	onMount(() => {});
</script>

<Title title="Ordering System" />
<ColorScheme />
<ResetCSS />

<svelte:head>
	<title>{$titleString}</title>
</svelte:head>

<div class="main">
	<NavigationPanel />
	<MainPanel>{@render children()}</MainPanel>
	<MyBag />
</div>

<Dialog onDismiss={() => {}}>
	{#snippet head()}
		<h2>Place an Order</h2>
	{/snippet}
	{#snippet body()}
		<p>TEst</p>
	{/snippet}
</Dialog>

<style lang="scss">
	:root {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	:global(p) {
		margin: 0px;
	}

	:global(body) {
		// --background-color: #ebf4e4;
		// --color: #37812e;

		background-color: var(--background);
		color: var(--onBackground);
		margin: 0px;
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
