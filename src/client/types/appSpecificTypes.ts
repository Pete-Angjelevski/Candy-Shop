

export interface CandyType {
	img: string,
  id: number,
	name: string,
	price: number,
	vegan: boolean,
	gf: boolean,
	description: string,
	quantity?: number
}

export interface CartType {
	id: number,
	name: string,
	price: number,
	quantity: number,
	img: string
}

export interface CheckoutType {
	fullCart: CartType[],
	total: number
}
