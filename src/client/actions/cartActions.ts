export const ADD_TO_CART = "ADD_TO_CART"


export function addToCart (
  id: number, 
  name: string, 
  price: number,
  quantity: number = 1, 
  ): object {
  return {
    type: ADD_TO_CART,
    id,
    name,
    quantity,
    price

  }
}