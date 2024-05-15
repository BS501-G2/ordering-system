<script lang="ts">
	import Item from '../../components/FoodItem.svelte';
	import { type FoodOrder } from '$lib';
	import { Title } from '@rizzzi/svelte-commons';

	export const ricemeals: FoodOrder[] = [
		{
			main: { index: 3, quantity: 1 },
			extras: [
				{ index: 4, quantity: 2 },
				{ index: 7, quantity: 1 }
			],

			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1698314359_web_variance_pajShh4d.jpeg'
			//1-pc. Chicken McDo w/ Double Rice Small Meal
			//155
		},
		{
			main: { index: 3, quantity: 1 },
			extras: [
				{ index: 1, quantity: 1 },
				{ index: 7, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1698333718_web_variance_PYdPbKZO.jpeg'
			//1-pc. Chicken McDo & Fries Meal
			//176
		},
		{
			main: { index: 3, quantity: 1 },
			extras: [{ index: 4, quantity: 1, variantIndex: 0 },
					{ index: 7, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1701332296_web_variance_rtliCZlI.jpeg'
			//1-pc. Chicken McDo Meal
			//109
		},
		{
			main: { index: 3, quantity: 1 },
			extras: [
				{ index: 4, quantity: 1 },
				{ index: 6, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1698333158_web_alacarte_4xRv9inE.jpeg'
			//as is
			//156
		},
		{
			main: { index: 3, quantity: 1 },
			extras: [
				{ index: 8, quantity: 1 },
				{ index: 7, quantity: 1, variantIndex:0 },

			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1701359969_web_variance_uuC1Xb3d.jpeg'
			//1-pc. Chicken McDo w/ McSpaghetti Meal
			//195
		},
		{
			main: { index: 3, quantity: 2 },
			extras: [
				{index: 4,quantity: 1},
				{ index: 7, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1701359510_web_variance_UD1u9ksl.jpeg'
			//2-pc. Chicken McDo Meal
			//229
		},
		{
			main: { index: 3, quantity: 1 },
			extras: [
				{ index: 8, quantity: 1 },
				{ index: 1, quantity: 1 },
				{ index: 7, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1698334622_web_variance_BVmfcnZM.jpeg'
			//1-pc. Chicken McDo w/ McSpaghetti & Fries Meal
			//272
		},
		{
			main: { index: 3, quantity: 1,variantIndex:0},
			extras: [
				{ index: 4, quantity: 1 },
				{ index: 7, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1701359276_web_variance_y9lLfp7y.jpeg'
			//1-pc. Spicy Chicken McDo Meal
			//115
		},
		{
			main: { index: 9, quantity: 1 },
			extras: [
				{ index: 1, quantity: 1 },
				{ index: 7, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1698335460_web_variance_bo0nt15P.jpeg'
			//McCrispy Chicken Fillet Ala King w/ Fries Meal
			//184
		},
		{
			main: { index: 3, quantity: 1,variantIndex:0 },
			extras: [
				{ index: 1, quantity: 1 },
				{ index: 10, quantity: 1 },
				{ index: 7, quantity: 1 },
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1663832885_web_variance_RjeaEBCz.jpeg'
			//Mega Meal - Spicy Chicken McDo w/ Fries & Burger McDo
			//248
		},
		{
			main: { index: 3, quantity: 1,variantIndex:0 },
			extras: [
				{ index: 8, quantity: 1 },
				{ index: 1, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1698334787_web_variance_nx2aDszj.jpeg'
			//1-pc. Spicy Chicken McDo w/ McSpaghetti & Fries Meal
			//278
		},
		{
			main: { index: 3, quantity: 2,variantIndex:0 },
			extras: [
				{ index: 1, quantity: 1 },
				{ index: 7, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1698335108_web_variance_o4WGxhWs.jpeg'
			//2-pc. Spicy Chicken McDo & Fries Meal
			//314
		},
	];
</script>

<Title title="Rice Meals" />

{#each ricemeals as ricemeal}
	<Item details={ricemeal} />
{/each}
