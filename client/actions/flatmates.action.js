import { setError } from './error'
import * as api from '../api/registerFlatDetails'

export const GET_FLATMATES_PENDING = 'GET_FLATMATES_PENDING'
export const GET_FLATMATES_SUCCESS = 'GET_FLATMATES_SUCCESS'

export function getFlatmatesPending () {
  return {
    type: GET_FLATMATES_PENDING
  }
}

export function getFlatmatesSuccess (flatmates) {
  return {
    type: GET_FLATMATES_SUCCESS,
    flatmates
  }
}

export function getFlatmates (userId) {
  return dispatch => {
    dispatch(getFlatmatesPending())

    return api.getAllFlatmates(userId)
      .then(flatmates => dispatch(getFlatmatesSuccess(flatmates.flatmates)))
      .catch(err => dispatch(setError(err.message)))
  }
}
