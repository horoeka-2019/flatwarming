import { combineReducers } from 'redux'

import login from './login-button'
import register from './reg-button'
import logout from './logout-button'
import flatmateReducer from './flatmate.reducer'
import flatmateDetailReducer from './flatmateDetails.reducer'
import jobsReducer from './jobs.reducer'
import flatmatesReducer from './flatmates.reducer'
import userReducer from './user'
import error from './error'

export default combineReducers({
  login,
  register,
  logout,
  flatmateReducer,
  flatmateDetailReducer,
  jobsReducer,
  flatmatesReducer,
  userReducer,
  error
})
