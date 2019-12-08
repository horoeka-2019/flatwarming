const INITIAL_STATE = {}

const flatmateDetailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FLATMATE_DETAIL':
      return {
        ...state,
        flatmateDetail: action.payload
      }
    default:
      return state
  }
}

export default flatmateDetailReducer
