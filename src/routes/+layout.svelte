<script>
	import NavigationPanel from '../components/NavigationPanel.svelte';
	import MyBag from '../components/BagPanel.svelte';
	import MainPanel from '../components/MainPanel.svelte';

	import '@fortawesome/fontawesome-free/css/all.css';
</script>

<div class="main">
	<NavigationPanel />
	<MainPanel><slot /></MainPanel>
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

		max-height: 100vh;

		padding: 1em;
		gap: 1em;
	}
</style>
