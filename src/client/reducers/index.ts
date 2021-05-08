import {combineReducers} from 'redux'
import cart from './cartReducer'
import checkout from './checkoutReducer'



export default combineReducers({
  cart,
  checkout
})