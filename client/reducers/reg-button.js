import { HIDE_REG, SHOW_REG } from '../actions/nav-buttons'

export default function login (state = true, action) {
  switch (action.type) {
    case SHOW_REG:
      return true

    case HIDE_REG:
      return false

    default:
      return state
  }
}