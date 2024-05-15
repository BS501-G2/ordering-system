<script lang="ts">
	import { Title } from '@rizzzi/svelte-commons';
	import { type FoodOrder } from '$lib';
	import Item from '../../components/FoodItem.svelte';

	export const frenchfries: FoodOrder[] = [
		{
			main: { index: 13, quantity: 1 },


			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1644830671_web_alacarte_KGXepgsy.jpeg'
			//BFF Fries
			//169.00
		},
		{
			main: { index: 1, quantity: 1, variantIndex:1 },
			extras: [
				{ index: 6, quantity: 1 },

			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1633631100_mobile_variace_4Oy4SmO4.jpeg'
			//Large Fries N' McFloat Combo
			//135
		},
		{
			main: { index: 14, quantity: 1,variantIndex: 1 },
			extras: [{ index: 6, quantity: 3, variantIndex: 0 },

			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1633040377_mobile_variace_rK0VOPXS.jpeg'
			//BFF Shake Shake Fries BBQ N' McFloat Combo
			// 284.00
		},
		{
			main: { index: 14, quantity: 1 },
			extras: [
				{ index: 6, quantity: 1,variantIndex:0 },

			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1644319695_web_variance_FoXk2J1m.jpeg'
			//Shake Shake Fries BBQ N' McFloat Combo
			// 123.00
		},
		{
			main: { index: 14, quantity: 1, variantIndex: 0 },
			extras: [
				{ index: 6, quantity: 1, variantIndex:0 },

			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1644319744_web_variance_0a25hao8.jpeg'
			//Large Shake Shake Fries BBQ N' McFloat Combo
			//148
		},
		{
			main: { index: 15, quantity: 1 },
			extras: [
				{index: 6,quantity: 1, variantIndex: 0},

			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1644319881_web_variance_elFPPpsx.jpeg'
			//Shake Shake Fries Cheese N' McFloat Combo
			//₱ 148.00
		},
		{
			main: { index: 15, quantity: 1, variantIndex: 0 },
			extras: [
				{ index: 6, quantity: 1, variantIndex: 0},

			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1644319917_web_variance_EgYGZUMe.jpeg'
			//Large Shake Shake Fries Cheese N' McFloat Combo
			//₱ 148.00
		},

	];
</script>

<Title title="Fries" />
{#each frenchfries as Fries}
	<Item details={Fries} />
{/each}
