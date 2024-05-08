// place files you want to import through the `$lib` alias in this folder.

export interface FoodVariant {
	name?: string;
	price: number;
}

export interface FoodItem {
	name: string;
	price: number;
	image: string;

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
		canBeExtra: true
	},
	{
		name: 'Crispy Fish Fillet Sandwich',
		price: 180,
		image: '/images/crispy-fish-fillet-sandwitch.jpg',
		variant: [{ name: 'Double', price: +30 }],
		canBeExtra: false
	},
	{
		name: '1-pc. Chicken McDo',
		price: 75,
		image: '/images/chicken.jpeg',
		variant: [],
		canBeExtra: false
	},
	{
		name: 'Rice',
		price: 35,
		image: '/images/rice.jpg',
		variant: [{ name: 'Small', price: -30 }],
		canBeExtra: true
	},
	{
		name: 'Coke McFloat',
		price: 90,
		image: '/images/coke-mcfloat.jpg',
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
}
