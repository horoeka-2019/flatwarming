import error from '../../../client/reducers/flatmate.reducer'


import { ADD_FLATMATE, REMOVE_FLATMATE } from '../../../client/actions/flatmate.action'

describe ('Error reducer tests', () => {
  it('case ADD_FLATMATE', () => {
    // Arrange


    const expected = 'notsure'
    const action = {
      type: ADD_FLATMATE,
      payload:
    }
    // Act
    const actual = error(null, action)
    // Assert
    expect(actual).toBe(expected)
  })

  // it('case REMOVE_FLATMATE', () => {
  //   // Arrange
  //   const expected = 
  //   const action = {
  //     type: SET_ERROR,
  //     message: 'uh oh, an error!'
  //   }
  //   // Act
  //   const actual = error(null, action)
  //   // Assert
  //   expect(actual).toBe(expected)
  // })
  
})
