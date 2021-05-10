import { ADD_TO_CART } from '../actions/cartActions'
import { CandyData } from '../../data/candy'



const intitialState = {
  cart: []
}

type Action = {type: "ADD_TO_CART", id: number, name: string, price: number, vegan: boolean, gf: boolean, description: string}


const cartReducer = (state: CandyData = intitialState, action: Action ) => {
  ADD_TO_CART


  switch (action.type) {

    case ADD_TO_CART:
       return (
        state.find(item => item.id === action.id)
          ? state.map(item => (
            item.id === action.id
              ? { id: item.id, name: item.name, quantity: item.quantity + 1, price: item.price * (item.quantity + 1)}
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

    default:
      return state
    
  }

}

export default cartReducer