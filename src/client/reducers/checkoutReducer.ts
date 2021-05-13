import { CheckoutType} from '../types/appSpecificTypes'
import { CheckoutActionTypes } from '../types/actionTypes'
import { ADD_TO_CHECKOUT } from '../actions/checkoutActions'

const checkoutReducerDefaultState: CheckoutType = {}


const checkoutReducer = (state = checkoutReducerDefaultState, action: CheckoutActionTypes): CheckoutType => {
  switch (action.type) {

    case ADD_TO_CHECKOUT:
      return { 
        fullCart: action.fullCart,
        total: action.total
      }

    default:
      return state
    
  }

}

export default checkoutReducer