import { cartActionTypes } from '../actions/cartActions'



const cartReducer = (state: any[] =[], action: any) => {
  const { ADD_TO_CART } = cartActionTypes


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