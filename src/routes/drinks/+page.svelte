<script lang="ts">
	import { type FoodOrder } from '$lib';
	import { Title } from '@rizzzi/svelte-commons';
	import Item from '../../components/FoodItem.svelte';

	export const Drinks: FoodOrder[] = [
		{
			main: { index: 7, quantity: 1 },
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1630518196_mobile_variace_ipI0IZM7.png'
			//coke
			// 75.00
		},
		{
			main: { index: 6, quantity: 1 },
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1630511606_mobile_variace_dHdKQMK5.jpeg'
			//coke mcfloat
			//79
		},
		{
			main: { index: 18, quantity: 1 },
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1630518431_mobile_variace_YkCwmnvt.jpeg'
			 //Coke Zero
			 //₱ 75.00
		},
		{
			main: { index: 19, quantity: 1 },
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1630518603_mobile_variace_zsidSkuy.jpeg'
			//Sprite
			//75
		},
		{
			main: { index: 20, quantity: 1 },
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1630518746_mobile_variace_B36Wpow6.jpeg'
			//Orange Juice
			//82

		},
		{
			main: { index: 21, quantity: 1},
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1630519214_mobile_variace_uxu0Fpxm.jpeg'
			//Iced Tea
			//82
		},
	];
</script>

<Title title="Drinks" />

{#each Drinks as Drink}
	<Item details={Drink} />
{/each}
