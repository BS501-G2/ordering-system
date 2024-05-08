<script lang="ts" context="module">
</script>

<script lang="ts">
	import { type FoodOrder, type FoodSelection, foodItems } from '$lib';

	export let details: FoodOrder;

	function getName(selection: FoodSelection) {
		const main = foodItems[selection.index];
		const mainVariant =
			selection.variantIndex != null ? main.variant[selection.variantIndex] : null;

		return `${mainVariant != null ? mainVariant.name : ''} ${main.name}`;
	}

	$: name = `${getName(details.main)}${details.extras.length > 0 ? ` w/ ${details.extras.map(getName).join(' & ')}` : ''}`;

	$: price = details.extras.reduce(
		(total, current) => total + foodItems[current.index].price * current.quantity,
		foodItems[details.main.index].price * details.main.quantity
	);
</script>

<div
	class="item"
	style="background-color:#ebf4e4; margin:20px; height:430px; width:300px;border-radius:20px"
>
	<div>
		<img
			src={details.image}
			alt=""
			srcset=""
			style="width:300px; height:250px;border-top-left-radius: 20px; border-top-right-radius:20px"
		/>
	</div>
	<div style="margin:10px;">
		<p style="font-weight:bold; font-size:20px">{name}</p>
	</div>
	<div>
		<hr style="width: 90%; border: none; border-top: 1px solid #37812e;" />
	</div>
	<div style="margin-left:20px">
		<p style="font-weight:bold; font-size:20px">P {price.toFixed(2)}</p>
	</div>
	<div style="display:flex; justify-content:center">
		<button
			style="padding:10px 70px; border-radius:20px; cursor:pointer; background-color:#37812e; font-weight:bold; font-size:14px; color:white;transition: background-color 0.3s;"
		>
			Order
		</button>
	</div>
</div>

<style lang="scss">
</style>
