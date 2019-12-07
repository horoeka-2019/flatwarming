import React from 'react'
import { connect } from 'react-redux'
import FlatMate from './FlatMate'
import { addFlatmate, removeFlatmate } from '../actions/flatmate.action'

import {
  Button,
  Form,
  Input,
  Container,
  FormField,
  List,
  Dropdown
} from 'semantic-ui-react'

const options = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
  { key: 5, text: '5', value: 5 },
  { key: 6, text: '6', value: 6 },
  { key: 7, text: '7', value: 7 },
  { key: 8, text: '8', value: 8 },
  { key: 9, text: '9', value: 9 },
  { key: 10, text: '10', value: 10 },
  { key: 11, text: '11', value: 11 },
  { key: 12, text: '12', value: 12 },
  { key: 13, text: '13', value: 13 },
  { key: 14, text: '14', value: 14 },
  { key: 15, text: '15', value: 15 },
  { key: 16, text: '16', value: 16 },
  { key: 17, text: '17', value: 17 },
  { key: 18, text: '18', value: 18 },
  { key: 19, text: '19', value: 19 },
  { key: 20, text: '20', value: 20 },
  { key: 21, text: '21', value: 21 },
  { key: 22, text: '22', value: 22 },
  { key: 23, text: '23', value: 23 },
  { key: 24, text: '24', value: 24 },
  { key: 25, text: '25', value: 25 },
  { key: 26, text: '26', value: 26 },
  { key: 27, text: '27', value: 27 },
  { key: 28, text: '28', value: 28 },
  { key: 29, text: '29', value: 29 },
  { key: 30, text: '30', value: 30 },
  { key: 31, text: '31', value: 31 }
]
class RegisterFlatDetails extends React.Component {
  state = {
    address: '',
    suburb: '',
    names: '',
    powerDay: null,
    waterDay: null,
    wifiDay: null,
    inputValue: ''
  }

  handleChangeDate = (date, event) => {
    this.setState({
      date
    })
  };

  onChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeHandle (value) {
    this.setState(
      {
        inputValue: value
      }
    )
  }

  onChangeDropdownList = (event, data) => {
    this.setState({
      [data.name]: data.value
    })
  }

  render () {
    return (
      <Container text style={{ border: '1px', borderStyle: 'solid', padding: '30px', marginTop: 75, maxWidth: '40vw' }}>
        <Form>
          <Form.Group>
            <FormField
              control={Input}
              name='address'
              type='text'
              label='Address: '
              placeholder='123 Onehunga Mall'
              required={true}
              onChange={this.onChange}>
            </FormField>
            <FormField
              control={Input}
              name='suburb'
              type='text'
              label='Suburb: '
              placeholder='Onehunga'
              required={true}
              onChange={this.onChange}>
            </FormField>
          </Form.Group>
          <Form.Group>
            <FormField>
              <List as='ol'>
                {
                  this.props.flatmates.map((flatmate, index) =>
                    <FlatMate key={index} id={index} flatmate={flatmate} removeFlatmate={this.props.removeFlatmate}></FlatMate>)
                }
              </List>
              <label>FlatMate:</label><input type="text" onChange={(e) => this.changeHandle(e.target.value)}></input>

              <button onClick={() => this.props.addFlatmate(this.state.inputValue)}>+</button>
            </FormField>
          </Form.Group>
          <Form.Group>
            <Form.Field control={Dropdown}
              selection
              clearable
              placeholder="Power Due Date:"
              onChange={this.onChangeDropdownList}
              options={options}
              name="powerDay"
              label= "Power Due Date"
              required={true}
            />
            <Form.Field control={Dropdown}
              selection
              clearable
              placeholder="Water Due Date:"
              onChange={this.onChangeDropdownList}
              options={options}
              name="waterDay"
              label="Water Due Date:"
              required={true}
            />
            <Form.Field control={Dropdown}
              selection
              clearable
              placeholder="Internet Due Date:"
              onChange={this.onChangeDropdownList}
              options={options}
              name="wifiDay"
              label="Internet Due Date:"
              required={true}
            />
          </Form.Group>
          <Form.Group>
            <FormField
              control={Button}
              disabled={
                this.props.flatmates.length > 0 ||
                !this.state.address ||
                !this.state.powerDay ||
                !this.state.wifiDay ||
                !this.state.waterDay ||
                !this.state.suburb
              }
            > Submit
            </FormField>
          </Form.Group>
        </Form>
      </Container>

    )
  }
}

const mapStateToProps = state => ({
  flatmates: state.flatmateReducer.flatmates
})

const mapDispatchToProps = dispatch => ({
  addFlatmate: flatmate => dispatch(addFlatmate(flatmate)),
  removeFlatmate: index => dispatch(removeFlatmate(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFlatDetails)
