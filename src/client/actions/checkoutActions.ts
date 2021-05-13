import { AppActionTypes } from '../types/actionTypes' 
import { CartType } from '../types/appSpecificTypes'


export const ADD_TO_CHECKOUT = "ADD_TO_CHECKOUT"


export function addToCheckout (fullCart: CartType[], total: number): AppActionTypes{
  return {
    type: ADD_TO_CHECKOUT,
    fullCart, 
    total
  }
}