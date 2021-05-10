import { ADD_TO_CART, EDIT_ITEM, DELETE_ITEM } from '../actions/cartActions'
import { CandyType } from './appSpecificTypes'

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


export type CartActionTypes = addToCartType | editItemType | deleteItemType

export type AppActionTypes = CartActionTypes