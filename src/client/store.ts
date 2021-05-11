import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Dispatch } from 'redux'
import {AppActionTypes} from './types/actionTypes'
import {rootReducer} from './reducers'


export const store = createStore(
  rootReducer,
  composeWithDevTools(),
  
)



export const dispatch: Dispatch<AppActionTypes> = store.dispatch; 

