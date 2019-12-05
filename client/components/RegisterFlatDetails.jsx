import React from 'react'
import { connect } from 'react-redux'

import {
  Button, 
  Form, 
  Input, 
  Container,
  FormField
} from 'semantic-ui-react'


class RegisterFlatDetails extends React.Component {
  state = {
    address:  '',
    names:    '',
    powerDay: null, 
    waterDay: null,
    wifiDay:  null
  }

  onChange = (event) => {
    setForm({
      ...form, 
      [event.target.name]: event.target.value
    })
  }

  eventHandler = () => {
    this.setState({
      usersId:  users ? users.id : null,
    })
  }

  onSubmit = () => {
    const { address, names, powerDay, waterDay, wifiDay } = this.props
    const newFlat = this.state

    addUser(newFlat)
      .then(() => push('/'))
      .catch(setError)
  }

  render () {

    return (
     <Container> 
       <Form>
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
              name='names'
              type='text'
              label='Flat Mate: '
              placeholder='Name your Mates'
              required={true}
              onChange={this.onChange}>
            </FormField>

       </Form>
        <Form>
          <Form.Group widths='equal'>
          </Form.Group>
          <Form.Group widths='equal'>
          
            <FormField 
              control={Input} 
              name='powerDay'
              type='date'
              label='Power Due Date: '>
            </FormField>
            
            <FormField
              control={Input} 
              name='waterDay'
              type='date'
              label='Water Due Date: '>
            </FormField>

            <FormField 
              control={Input} 
              name='wifiDay'
              type='date'
              label='Internet Due Date: '>
            </FormField>
          
          </Form.Group>

          <FormField
            control={Button}
            disabled={
              !this.state.name || 
              !this.state.address ||
              !this.state.powerDay ||
              !this.state.categoryId
            }
            > Submit 
          </FormField>
        </Form>
    </Container>
    )
  }
}
// const mapDispatchToProps = {
//   newFlat
// }

export default connect(null)(RegisterFlatDetails)