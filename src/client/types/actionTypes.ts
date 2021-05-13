import { ADD_TO_CART, EDIT_ITEM, DELETE_ITEM } from '../actions/cartActions'
import { ADD_TO_CHECKOUT } from '../actions/checkoutActions'
import { CandyType, CartType } from './appSpecificTypes'


// ----------------- CART ACTION TYPES ------------------------
export interface addToCartType {
  type: typeof ADD_TO_CART
  id: number
  name: string
  price: number
  quantity: number
}

export interface editItemType {
  type: typeof EDIT_ITEM
  candy: CandyType

}

export interface deleteItemType {
  type: typeof DELETE_ITEM
  id: number
}

// ------------------- CHECKOUT ACTION TYPES ----------------

export interface addToCheckout {
  type: typeof ADD_TO_CHECKOUT,
  fullCart: CartType[],
  total: number
}



export type CartActionTypes = addToCartType | editItemType | deleteItemType

export type CheckoutActionTypes = addToCheckout

export type AppActionTypes = CartActionTypes | CheckoutActionTypes