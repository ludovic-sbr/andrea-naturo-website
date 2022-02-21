import { combineReducers } from 'redux'

import cartReducer from './cart.reducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  // importer d'autres reducers ici
})

export default rootReducer
