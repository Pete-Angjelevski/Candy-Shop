export enum cartActionTypes {
  ADD_TO_CART = 'ADD TO CART'
}


export function addToCart (
  id: number, 
  name: string, 
  quantity: number = 1, 
  price: number
  ) {
  return {
    type: cartActionTypes.ADD_TO_CART,
    id,
    name,
    quantity,
    price

  }
}