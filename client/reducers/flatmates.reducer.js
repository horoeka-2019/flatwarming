import { GET_FLATMATES_SUCCESS } from '../actions/flatmates.action'

export default function flatmatesReducer (state = [], action) {
  switch (action.type) {
    case GET_FLATMATES_SUCCESS:
      return action.flatmates

    default:
      return state
  }
}
