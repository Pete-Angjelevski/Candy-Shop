import { AppActionTypes} from '../types/actionTypes'
import { CandyType } from '../types/appSpecificTypes'

export const ADD_TO_CART = "ADD_TO_CART"
export const EDIT_ITEM = "EDIT_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"

export function addToCart (
  id: number,
  name: string,
  price: number,
  quantity: number = 1
) : AppActionTypes  {

  return {
    type: ADD_TO_CART,
    id,
    name,
    quantity,
    price

  }
}

export function editItem (candy: any): AppActionTypes {
  return {
    type: EDIT_ITEM,
    candy
  }
}


export function deleteItem (id: number): AppActionTypes {
  return {
    type: DELETE_ITEM,
    id  
  }
}
