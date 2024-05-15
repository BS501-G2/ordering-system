<script lang="ts" context="module">
	export interface Food {}

	export interface OrderDialogData {}

	let currentOrderData: OrderDialogData | null = $state(null);

	export function push(data: OrderDialogData) {
		if (currentOrderData !== null) {
			throw new Error('Cannot push order dialog more than once.');
		}

		currentOrderData = data;
	}
</script>

<script lang="ts">
	import { Dialog, DialogClass } from '@rizzzi/svelte-commons';
</script>

{#if currentOrderData !== null}
	<Dialog onDismiss={() => (currentOrderData = null)} dialogClass={DialogClass.Normal} />
{/if}
