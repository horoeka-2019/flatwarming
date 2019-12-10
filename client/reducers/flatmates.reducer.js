import { GET_FLATMATES_SUCCESS, ADD_FLATMATE_TO_SETTING, REMOVE_FLATMATE_FROM_SETTING } from '../actions/flatmates.action'

export default function flatmatesReducer (state = [], action) {
  switch (action.type) {
    case GET_FLATMATES_SUCCESS:
      return action.flatmates
    default:
      return state
  }
}
