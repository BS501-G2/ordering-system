<script lang="ts" context="module">
</script>

<script lang="ts">
	import { type FoodOrder, type FoodSelection, foodItems, getFoodOrderTitle, getFoodOrderPrice } from '$lib';

	const { details }: { details: FoodOrder } = $props()

	// export let details: FoodOrder;

	function getName(selection: FoodSelection) {
		const main = foodItems[selection.index];
		const mainVariant =
			selection.variantIndex != null ? main.variant[selection.variantIndex] : null;

		return `${selection.quantity > 1 ? `${selection.quantity}x` : ''} ${mainVariant != null ? mainVariant.name : ''} ${main.name}`;
	}

	const name = $derived(getFoodOrderTitle(details));
	const price = $derived(getFoodOrderPrice(details));

</script>

<div class="item">
	<img src={details.image} alt="Item" />
	<div class="info">
		<p class="name"><b>{name}</b></p>
		<div class="order">
			<p class="type"><b>P {price.toFixed(2)}</b></p>
			<div class="divider"></div>
			<button>Order</button>
		</div>
	</div>
</div>

<style lang="scss">
	div.item {
		background-color: var(--background);
		min-width: 300px;
		max-width: 300px;

		border-radius: 8px;
		display: flex;
		flex-direction: column;

		> img {
			object-fit:cover;
			height:280px;
			width: 100%;
			aspect-ratio: 1;

			border-radius: 8px 8px 0 0;
		}

		> div.info {
			padding: 16px;
			gap: 16px;

			box-sizing: border-box;

			flex-grow: 1;

			display: flex;
			flex-direction: column;

			> p.name {
				flex-grow: 1;

				min-height: 2.45em;
				max-height: 2.45em;

				overflow: hidden;
				text-overflow: ellipsis;
			}

			> div.order {
				display: flex;
				flex-direction:column;
				border-radius: 4px;
				font-size: 1.15em;
				gap: 8px;

				> button {
					background-color: var(--primary);
					color: var(--onPrimary);
					flex-grow: 1;
					align-items: center;
					border: none;
					font-weight: bolder;
					cursor: pointer;
					border-radius: 16px;
					font-size: 20px;
					padding: 8px 16px;

				}
			}
		}
	}
</style>
