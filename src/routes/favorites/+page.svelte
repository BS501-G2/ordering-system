<script lang="ts">
	import Item from '../../components/FoodItem.svelte';
	import { type FoodOrder } from '$lib';

	export const favorites: FoodOrder[] = [
		{
			main: { index: 2, quantity: 1 },
			extras: [
				{ index: 1, quantity: 1 },
				{ index: 0, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1707814197_web_variance_00DwO6iL.jpeg'
		},
		{
			main: { index: 2, variantIndex: 0, quantity: 1 },
			extras: [
				{ index: 1, quantity: 1 },
				{ index: 0, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1707815782_web_variance_5NIkc8HG.jpeg'
		},
		{
			main: { index: 3, quantity: 1 },
			extras: [{ index: 4, quantity: 2, variantIndex: 0 }],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1698314359_web_variance_pajShh4d.jpeg'
		},
		{
			main: { index: 3, quantity: 1 },
			extras: [
				{ index: 4, quantity: 1 },
				{ index: 5, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1698333158_web_alacarte_4xRv9inE.jpeg'
		},
		{
			main: { index: 3, quantity: 6 },
			extras: [
				{ index: 1, variantIndex: 1, quantity: 1 },
				{
					index: 4,
					quantity: 3
				},
				{ index: 6, quantity: 3 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1633576845_mobile_variace_cacKRwNX.jpeg'
		},
		{
			main: { index: 3, quantity: 6 },
			extras: [
				{ index: 1, variantIndex: 1, quantity: 2 },
				{
					index: 4,
					quantity: 4
				},
				{ index: 6, quantity: 4 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1634002555_mobile_variace_mFMhp04J.jpeg'
		},
		{
			main: { index: 2, quantity: 1 },
			extras: [
				{ index: 1, quantity: 1 },
				{ index: 0, quantity: 1 }
			],
			image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1707814197_web_variance_00DwO6iL.jpeg'
		}
	];
</script>

{#each favorites as favorite}
	<Item details={favorite} />
{/each}
