import flatmateReducer from '../../../client/reducers/flatmate.reducer'


import { ADD_FLATMATE, REMOVE_FLATMATE } from '../../../client/actions/flatmate.action'

describe ('Error reducer tests', () => {
  it('case ADD_FLATMATE', () => {
    // Arrange
    const INITIAL_STATE = {
      flatmates: []
    }

    const expected = {
      flatmates: 'Ash'
    }
    const action = {
      type: ADD_FLATMATE,
      payload: 'Ash'
    }
    // Act
    const actual = flatmateReducer(INITIAL_STATE, action)
    // Assert
    expect(actual).toBe(expected)
  })

  it('case REMOVE_FLATMATE', () => {
    // Arrange
    const INITIAL_STATE = {
      flatmates: ['Ash', 'Elly', 'Jackie']
    }

    const expected = {
      flatmates: ['Elly', 'Jackie']
    }
    const action = {
      type: REMOVE_FLATMATE,
      payload: 0
    }

    // Act
    const actual = flatmateReducer(INITIAL_STATE, action)

    // Assert
    expect(actual).toBe(expected)
  })
  
})
