import { CartType} from '../types/appSpecificTypes'
import { CheckoutActionTypes } from '../types/actionTypes'
import { ADD_TO_CHECKOUT } from '../actions/checkoutActions'

const checkoutReducerDefaultState: CartType[] = []


const checkoutReducer = (state = checkoutReducerDefaultState, action: CheckoutActionTypes): CartType[] => {
  switch (action.type) {

    case ADD_TO_CHECKOUT:
      return action.fullCart

    default:
      return state
    
  }

}

export default checkoutReducer