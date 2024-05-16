<script lang="ts">
	import { Title } from '@rizzzi/svelte-commons';
	import { type FoodOrder } from '$lib';
	import Item from '../../components/FoodItem.svelte';

	export const kiddiemeals: FoodOrder[] = [
		{
			main: { index: 3, quantity: 1 },
			extras: [
				{ index: 11, quantity: 1 },
				{ index: 1, quantity: 1, variantIndex: 0 }
			],

			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1635500446_mobile_variace_9hY5rqV1.jpeg'
			//1-pc. Chicken McDo Happy Meal
			//195
		},
		{
			main: { index: 12, quantity: 1 },
			extras: [
				{ index: 11, quantity: 1 },
				{ index: 1, quantity: 1, variantIndex: 0 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1635444698_mobile_variace_P537DE5p.jpeg'
			//4-pc. Chicken McNuggets Happy Meal
			//₱ 182.00
		},
		{
			main: { index: 8, quantity: 1 },
			extras: [
				{ index: 11, quantity: 1 },
				{ index: 1, quantity: 1, variantIndex: 0 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1635445192_mobile_variace_jHhwBNDs.jpeg'
			//McSpaghetti Happy Meal
			//166.00
		},
		{
			main: { index: 10, quantity: 1 },
			extras: [
				{ index: 11, quantity: 1 },
				{ index: 6, quantity: 1, variantIndex: 0 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1635446249_mobile_variace_LV53seFJ.jpeg'
			//Burger McDo Happy Meal
			//146.00
		}
	];
</script>

<Title title="Kiddie Meals" />
{#each kiddiemeals as kiddiemeal}
	<Item details={kiddiemeal} />
{/each}
