import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Nav from '../client/components/Nav'

describe('<Nav /> component tests', () => {
  // it('renders headers', () => {
  //   // Arrange
  //   const expected = 'Food DetailsFood NameCategoryWater UsageLitresCarbon OutputKg Equivalent'

  //   // Act
  //   const wrapper = mount(<FoodDetails match={{ params: { id: 1 } }}/>)
  //   const actual = wrapper.text()
  //   // Assert
  //   expect(actual).toMatch(expected)
  // })

  it('renders correctly', () => {
    const mockCallback = jest.fn()
    const expectedCalls = 1

    // Act
    const component = <Colors colors={colors} addNewColor={mockCallback} />
    const wrapper = mount(component)

    const button = wrapper.find('button').first()
    button.simulate('click')

    const actualCalls = mockCallback.mock.calls.length

    // Assert
    expect(actualCalls).toBe(expectedCalls)
    // const expected = 'Flat Warming'
    // const component = <Nav />
    // const wrapper = mount(component)

    // // Assert
    // // expect(toJson(wrapper)).toMatchSnapshot()
    // expect(toJson(wrapper)).toMatch(expected)
  })
})