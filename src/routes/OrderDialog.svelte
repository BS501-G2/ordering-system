<script lang="ts" context="module">
	import type { FoodOrder } from '$lib';

	let currentOrderData: FoodOrder | null = $state(null);

	export function pushOrderItem(data: FoodOrder) {
		if (currentOrderData !== null) {
			throw new Error('Cannot push order dialog more than once.');
		}

		currentOrderData = data;
	}
</script>

<script lang="ts">
	import { Button, Dialog, DialogClass } from '@rizzzi/svelte-commons';
</script>

{#if currentOrderData !== null}
	<Dialog onDismiss={() => (currentOrderData = null)} dialogClass={DialogClass.Normal}>
		{#snippet head()}
			<h2>Order</h2>
		{/snippet}

		{#snippet body()}
			// TODO ORDER
		{/snippet}

		{#snippet actions()}
			<Button
				onClick={() => {
					currentOrderData = null;
				}}
			>
				<p class="action">Close</p>
			</Button>
		{/snippet}
	</Dialog>
{/if}

<style lang="scss">
	p.action {
		margin: 8px;
	}
</style>
