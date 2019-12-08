import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { Message } from 'semantic-ui-react'

import ErrorComponent from '../../../client/components/ErrorComponent'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('Error component tests', () => {
  it('renders Message component if error', () => {
    // Arrange
    const initialState = { error: 'an error' }
    const store = mockStore(initialState)
    const component =
      <Provider store={store}>
        <ErrorComponent />
      </Provider>
    const wrapper = mount(component)

    // Act
    const actual = wrapper.containsMatchingElement(Message)

    // Assert
    expect(actual).toBeTruthy()
  })

  it('doesn\'t render Message component if null', () => {
    // Arrange
    const initialState = { error: null }
    const store = mockStore(initialState)
    const component =
      <Provider store={store}>
        <ErrorComponent />
      </Provider>
    const wrapper = mount(component)

    // Act
    const actual = wrapper.containsMatchingElement(Message)

    // Assert
    expect(actual).toBeFalsy()
  })
})
