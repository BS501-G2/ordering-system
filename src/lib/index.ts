// place files you want to import through the `$lib` alias in this folder.

export interface FoodVariant {
  name?: string;
  price: number;
}

export type FoodItemType = 'meal' | 'rice' | 'burger' | 'fries' | 'drink';
export type FoodOrderDiscountType = 'senior' | 'pwd';

export interface FoodItem {
  name: string;
  price: number;
  image: string;
  category: FoodItemType;

  variant: FoodVariant[];
  canBeExtra: boolean;
}

export const foodItems: FoodItem[] = [
  {
    //0
    name: 'PeaChee Fruit Fizz',
    price: 100,
    image: '/images/peachee.jpg',
    variant: [
      { name: 'Small', price: -30 },
      { name: 'Large', price: 50 }
    ],
    category: 'drink',
    canBeExtra: true
  },
  {
    //1
    name: 'Fries',
    price: 60,
    image: '/images/fries.jpeg',
    variant: [
      { name: 'Small', price: -30 },
      { name: 'Large', price: 50 }
    ],
    category: 'fries',
    canBeExtra: true
  },
  {
    //2
    name: 'Crispy Fish Fillet Sandwich',
    price: 180,
    image: '/images/crispy-fish-fillet-sandwitch.jpg',
    category: 'meal',
    variant: [{ name: 'Double', price: 30 }],
    canBeExtra: true
  },
  {
    //3
    name: 'Chicken McDo',
    price: 75,
    image: '/images/chicken.jpeg',
    category: 'meal',
    variant: [{ name: 'Spicy', price: 6 }],
    canBeExtra: false
  },
  {
    //4
    name: 'Rice',
    price: 35,
    image: '/images/rice.jpg',
    variant: [{ name: 'Small', price: -15 }],
    category: 'rice',
    canBeExtra: true
  },
  {
    //5
    name: 'Fried Rice',
    price: 40,
    image: '/images/rice.jpg',
    variant: [{ name: 'Small', price: -15 }],
    category: 'rice',
    canBeExtra: true
  },
  {
    //6
    name: 'Coke McFloat',
    price: 79,
    image: '/images/coke-mcfloat.jpg',
    category: 'drink',
    variant: [
      { name: 'Small', price: -30 },
      { name: 'Large', price: 50 }
    ],
    canBeExtra: true
  },
  {
    //7
    name: 'Coke',
    price: 60,
    image: '/images/coke.jpeg',
    category: 'drink',
    variant: [
      { name: 'Small', price: -30 },
      { name: 'Large', price: 50 }
    ],
    canBeExtra: true
  },
  {
    //8
    name: 'McSpaghetti',
    price: 59,
    image: '/images/coke.jpeg',
    category: 'meal',
    variant: [{ name: 'Regular', price: -15 }],
    canBeExtra: true
  },
  {
    //9
    name: 'McCrispy Chicken Fillet Ala King',
    price: 79,
    image: '/images/coke.jpeg',
    category: 'meal',
    variant: [{ name: 'Regular', price: -15 }],
    canBeExtra: true
  },
  {
    //10
    name: 'Burger McDo',
    price: 44,
    image: '/images/coke.jpeg',
    category: 'burger',
    variant: [{ name: 'Regular', price: -15 }],
    canBeExtra: true
  },
  {
    //11
    name: 'Happy Meal',
    price: 40,
    image: '/images/coke.jpeg',
    category: 'meal',
    variant: [{ name: 'Regular', price: -15 }],
    canBeExtra: false
  },
  {
    //12
    name: '4-pc. Chicken McNuggets',
    price: 102,
    image: '/images/coke.jpeg',
    category: 'meal',
    variant: [{ name: 'Regular', price: -15 }],
    canBeExtra: false
  },
  {
    //13
    name: 'BFF Fries',
    price: 169,
    image: '/images/coke.jpeg',
    category: 'meal',
    variant: [{ name: 'Regular', price: -15 }],
    canBeExtra: false
  },
  {
    //14
    name: 'Shake Shake Fries BBQ',
    price: 83,
    image: '/images/peachee.jpg',
    variant: [
      { name: 'Large', price: 25 },
      { name: 'BFF', price: 50 }
    ],
    category: 'drink',
    canBeExtra: true
  },
  {
    //15
    name: 'Shake Shake Fries Cheese',
    price: 83,
    image: '/images/peachee.jpg',
    variant: [
      { name: 'Large', price: 25 },
      { name: 'BFF', price: 50 }
    ],
    category: 'drink',
    canBeExtra: true
  },
  {
    //16
    name: 'Quarter Pounder',
    price: 191,
    image: '/images/peachee.jpg',
    variant: [{ name: 'Double', price: 40 }],
    category: 'meal',
    canBeExtra: true
  },
  {
    //17
    name: 'Cheeseburger',
    price: 60,
    image: '/images/peachee.jpg',
    variant: [
      { name: 'Double', price: 25 },
      { name: 'Triple', price: 50 }
    ],
    category: 'meal',
    canBeExtra: true
  },
  {
    //18
    name: 'Coke Zero',
    price: 75,
    image: '/images/coke.jpeg',
    category: 'drink',
    variant: [
      { name: 'Small', price: -30 },
      { name: 'Large', price: 50 }
    ],
    canBeExtra: true
  },
  {
    //19
    name: 'Sprite',
    price: 75,
    image: '/images/coke.jpeg',
    category: 'drink',
    variant: [
      { name: 'Small', price: -30 },
      { name: 'Large', price: 50 }
    ],
    canBeExtra: true
  },
  {
    //20
    name: 'Orange Juice',
    price: 82,
    image: '/images/coke.jpeg',
    category: 'drink',
    variant: [
      { name: 'Small', price: -30 },
      { name: 'Large', price: 50 }
    ],
    canBeExtra: true
  },
  {
    //21
    name: 'Iced Tea',
    price: 82,
    image: '/images/coke.jpeg',
    category: 'drink',
    variant: [
      { name: 'Small', price: -30 },
      { name: 'Large', price: 50 }
    ],
    canBeExtra: true
  }
];

export interface FoodSelection {
  index: number;
  variantIndex?: number;
  quantity: number;
}

export interface FoodOrder {
  main: FoodSelection;
  extras?: FoodSelection[];
  image?: string;

  discount?: 'senior' | 'pwd';

  notes?: string;
}

export function getFoodSelectionTitle(selection: FoodSelection) {
  const main = foodItems[selection.index];
  const mainVariant = selection.variantIndex != null ? main.variant[selection.variantIndex] : null;

  return `${selection.quantity > 1 ? `${selection.quantity}x` : ''} ${mainVariant != null ? mainVariant.name : ''} ${main.name}`;
}

export function getFoodSelectionPrice(details: FoodSelection) {
  return (
    (foodItems[details.index].price +
      (details.variantIndex != null
        ? foodItems[details.index].variant[details.variantIndex].price
        : 0)) *
    details.quantity
  );
}

export function getFoodOrderTitle(details: FoodOrder) {
  return `${getFoodSelectionTitle(details.main)}${details.extras != null && details.extras.length > 0 ? ` w/ ${details.extras.map(getFoodSelectionTitle).join(' & ')}` : ''}`;
}

export function getFoodOrderPrice(details: FoodOrder) {
  return (
    details.extras?.reduce(
      (total, current) => total + getFoodSelectionPrice(current),
      getFoodSelectionPrice(details.main)
    ) ?? getFoodSelectionPrice(details.main)
  );
}

export function numberToCurrency(number: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP'
  }).format(number);
}
