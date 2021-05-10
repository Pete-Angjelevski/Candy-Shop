import {combineReducers} from 'redux'
import cart from './cartReducer'
import checkout from './checkoutReducer'



export const rootReducer = combineReducers({
  cart,
  checkout
})

export type AppState = ReturnType<typeof rootReducer>