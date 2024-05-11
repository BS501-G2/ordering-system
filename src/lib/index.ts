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
		name: 'Fries',
		price: 70,
		image: '/images/fries.jpeg',
		variant: [
			{ name: 'Small', price: -30 },
			{ name: 'Large', price: 50 }
		],
		category: 'fries',
		canBeExtra: true
	},
	{
		name: 'Crispy Fish Fillet Sandwich',
		price: 180,
		image: '/images/crispy-fish-fillet-sandwitch.jpg',
		category: 'meal',
		variant: [{ name: 'Double', price: +30 }],
		canBeExtra: false
	},
	{
		name: 'Chicken McDo',
		price: 75,
		image: '/images/chicken.jpeg',
		category: 'meal',
		variant: [],
		canBeExtra: false
	},
	{
		name: 'Rice',
		price: 35,
		image: '/images/rice.jpg',
		variant: [{ name: 'Small', price: -15 }],
		category: 'rice',
		canBeExtra: true
	},
	{
		name: 'Fried Rice',
		price: 40,
		image: '/images/rice.jpg',
		variant: [{ name: 'Small', price: -15 }],
		category: 'rice',
		canBeExtra: true
	},
	{
		name: 'Coke McFloat',
		price: 90,
		image: '/images/coke-mcfloat.jpg',
		category: 'drink',
		variant: [
			{ name: 'Small', price: -30 },
			{ name: 'Large', price: 50 }
		],
		canBeExtra: true
	},
	{
		name: 'Coke',
		price: 70,
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
	extras: FoodSelection[];
	image?: string;

	discount?: 'senior' | 'pwd';
}
