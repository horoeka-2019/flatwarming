const ADD_FLATMATE = 'ADD_FLATMATE'
const REMOVE_FLATMATE = 'REMOVE_FLATMATE'


export const addFlatmate = (flatmate) => ({
  type: ADD_FLATMATE,
  payload: flatmate
})

export const removeFlatmate = (index) => ({
  type: REMOVE_FLATMATE,
  payload: index
})
