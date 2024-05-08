<script lang="ts">
	import NavigationPanel from '../components/NavigationPanel.svelte';
	import MyBag from '../components/BagPanel.svelte';
	import MainPanel from '../components/MainPanel.svelte';
	import Title, { titleString } from '../components/Title.svelte';

	import '@fortawesome/fontawesome-free/css/all.css';

	const { children } = $props();
</script>

<Title title="Ordering System"/>
<title>{$titleString}</title>

<div class="main">
	<NavigationPanel />
	<MainPanel>{@render children()}</MainPanel>
	<MyBag />
</div>

<style lang="scss">
	:root {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	:global(p) {
		margin: 0px;
	}

	:global(body) {
		--background-color: #ebf4e4;
		--color: #37812e;

		background-color: var(--background-color);
		color: var(--color);
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
