import { ADD_TO_CART, DELETE_ITEM } from '../actions/cartActions'
import { CartActionTypes } from '../types/actionTypes'
import { CandyType } from '../types/appSpecificTypes' 
 

const cartReducerDefaultState: Partial<CandyType[]> = []

const cartReducer = (state = cartReducerDefaultState, action: CartActionTypes ): any => {
  ADD_TO_CART


  switch (action.type) {

    case ADD_TO_CART:
       return (
        state.find(item => item.id === action.id)
          ? state.map(item => (
            item.id === action.id
              ? { id: item.id, name: item.name, quantity: item.quantity + 1, price: item.price + action.price }
              : item
          ))
          : [...state,
            {
              id: action.id,
              name: action.name,
              quantity: action.quantity,
              price: action.price
            }]
       )

      case DELETE_ITEM:
        return state.filter(item => item.id !== action.id)

    default:
      return state
    
  }

}

export default cartReducer