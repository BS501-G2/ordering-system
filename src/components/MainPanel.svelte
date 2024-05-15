<script lang="ts">
	import { titleStack } from '@rizzzi/svelte-commons';

	const { children }: { children: (() => any) | null } = $props();
</script>

<div class="main-panel">
	<h2>{$titleStack[$titleStack.length - 1]?.title}</h2>
	<div>
		{#if children !== null}
			{@render children()}
		{/if}
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
			font-weight: lighter;
		}

		> div {
			flex-grow: 1;

			border-top: 1px solid var(--primary);
			border-bottom: 1px solid var(--primary);

			display: grid;

			gap: 1em;
			padding: 1em 0px;

			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			justify-items: center;

			overflow: auto;
		}
	}
</style>
