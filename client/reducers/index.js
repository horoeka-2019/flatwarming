import { combineReducers } from 'redux'

import login from './login-button'
import register from './reg-button'

export default combineReducers({
  login,
  register
})
