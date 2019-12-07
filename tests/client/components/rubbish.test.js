import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
// import { Provider } from 'react-redux'

// import configureStore from 'redux-mock-store'

import Rubbish from '../../../client/components/Rubbish'

// const middleware = []
// const mockStore = configureStore(middleware)

describe('<Rubbish /> component tests', () => {
  it('contains "RUBBISH DAY"', () => {
    const expected = "RUBBISH DAY"
    const component = <Register />

    const wrapper = mount(component)
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })
})
