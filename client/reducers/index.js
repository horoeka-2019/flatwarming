import { combineReducers } from 'redux'

import login from './login-button'
import register from './reg-button'
import logout from './logout-button'

export default combineReducers({
  login,
  register,
  logout
})
