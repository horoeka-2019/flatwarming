import { combineReducers } from 'redux'

import login from './login-button'
import register from './reg-button'
import logout from './logout-button'
import flatmateReducer from './flatmate.reducer'
import flatmateDetailReducer from './flatmateDetails.reducer'

export default combineReducers({
  login,
  register,
  logout,
  flatmateReducer,
  flatmateDetailReducer
})
