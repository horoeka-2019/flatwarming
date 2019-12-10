

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_USER': {
      console.log('user_user....')
      return [...state, action.payload]
    }
    default:
      return state
  }
}

export default userReducer
