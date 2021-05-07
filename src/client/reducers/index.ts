import {combineReducers} from 'redux'
import cart from './cartReducer'
import navigate from './navigateReducer'
import checkout from './checkoutReducer'



export default combineReducers({
  navigate,
  cart,
  checkout
})