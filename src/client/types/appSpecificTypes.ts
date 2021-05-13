

export interface CandyType {
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
	quantity: number
}

export interface CheckoutType {
	fullCart: CartType[],
	total: number
}
