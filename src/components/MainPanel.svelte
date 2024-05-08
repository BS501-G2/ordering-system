<script lang="ts">
	const { children }: { children: (() => any) | null } = $props();
</script>

<div class="main-panel">
	<div>
		{#if children !== null}
			{@render children()}
		{/if}
	</div>
</div>

<style lang="scss">
	div.main-panel {
		background-color: white;
		border-radius: 1em;

		min-height: 100%;
		max-height: 100%;
		flex-grow: 1;

		overflow: hidden;

		> div {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

			max-height: 100%;

			overflow-x: hidden;
			overflow-y: auto;
		}
	}
</style>
