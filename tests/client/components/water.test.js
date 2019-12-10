import React from 'react'
import { mount } from 'enzyme'

import Water from '../../../client/components/Water'

describe('<Water /> component tests', () => {
  it('contains "WATER BILL"', () => {
    const expected = "Water BillTo"
    const component = <Water />

    const wrapper = mount(component)
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })
})