import React from 'react'
import { mount } from 'enzyme'

import Water from '../../../client/components/Water'

describe('<Water /> component tests', () => {
  it('contains "WATER BILL"', () => {
    const expected = "WATER BILL"
    const component = <Water />

    const wrapper = mount(component)
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })
})