<script lang="ts">
  import { type FoodOrder } from '$lib';
  import { Title } from '@rizzzi/svelte-commons';
  import Item from '../../components/FoodItem.svelte';

  export const Burgers: FoodOrder[] = [
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
      main: { index: 16, quantity: 1 },
      extras: [
        { index: 1, quantity: 1 },
        { index: 7, quantity: 1 }
      ],
      image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1689351679_web_variance_pG4lgdNT.jpeg'
      //Quarter Pounder w/ Cheese Meal
      //271
    },
    {
      main: { index: 16, quantity: 1, variantIndex: 0 },
      extras: [
        { index: 1, quantity: 1 },
        { index: 7, quantity: 1 }
      ],
      image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1689350536_web_variance_nXo2BN4Q.jpeg'
      //Double Quarter Pounder w/ Cheese Meal
      //327
    },
    {
      main: { index: 17, quantity: 1 },
      extras: [
        { index: 1, quantity: 1 },
        { index: 7, quantity: 1 }
      ],
      image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1692064747_web_variance_H7KBQBUW.jpeg'
    },
    //Cheeseburger Meal
    //129
    {
      main: { index: 17, quantity: 1, variantIndex: 0 },
      extras: [
        { index: 1, quantity: 1 },
        { index: 7, quantity: 1 }
      ],
      image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1692064679_web_variance_1gNz92Cq.jpeg'
    },
    //Double Cheeseburger Meal
    //129
    {
      main: { index: 17, quantity: 1, variantIndex: 1 },
      extras: [
        { index: 1, quantity: 1 },
        { index: 7, quantity: 1 }
      ],
      image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1692064532_web_variance_llkXxeJk.jpeg'
    },
    //Triple Cheeseburger Meal
    //129
    {
      main: { index: 10, quantity: 1 },
      extras: [
        { index: 1, quantity: 1 },
        { index: 7, quantity: 1 }
      ],
      image: 'https://d1r3vc4fck3z1b.cloudfront.net/images/1689348813_web_variance_H8w3AV9j.jpeg'
    }
    //Burger McDo Meal
    //143
  ];
</script>

<Title title="Burgers" />
{#each Burgers as Burger}
  <Item details={Burger} />
{/each}
