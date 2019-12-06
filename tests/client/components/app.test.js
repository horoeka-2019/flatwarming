import React from 'react'
import { mount, shallow } from 'enzyme'

import App from '../../../client/components/App'

describe('<App /> component tests', () => {
  it('contains <Router /> (shallow)', () => {
    // Arrange
    const expected = '<BrowserRouter />'

    // Act
    const wrapper = shallow(<App />)
    const actual = wrapper.text()

    // Assert
    expect(actual).toMatch(expected)
  })
})
