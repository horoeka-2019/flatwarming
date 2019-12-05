import React from 'react'
import { connect } from 'react-redux'

import {
  Button, 
  Form, 
  Input, 
  Container,
  Header,
  FormField,
  Dropdown
} from 'semantic-ui-react'


class RegisterFlatDetails extends React.Component {

  onChange = (event) => {
    setForm({
      ...form, 
      [event.target.name]: event.target.value
    })
  }

  eventHandler = () => {
    this.setState({
      usersId:  users ? users.id : null,
      address:  form.address,
      names:    form.names,
      powerDay: form.powerDay, 
      waterDay: form.waterDay,
      wifiDay:  form.wifiDay
    })
  }

  onChange = () => {
    const { address, names, powerDay, waterDay, wifiDay } = this.props
    const newFlat = this.state

    addUser(newFlat)
      .then(() => history.push('/'))
      .catch(setError)
  }

  render () {
    return (
      <Form>
        <Form.Group widths='equal'>
        
          <Form.Field 
          control={Input}
          name='address'
          type='text'
          label='Address: '
          placeholder='123 Onehunga Mall'
          required={true}
          onChange={this.onChange}
          />

          <FormField
            control={input}
            name='names'
            type='text'
            label='Flat Mates: '
            placeholder='Name your Mates'
            required={true}
            onChange={this.onChange}
            />
            
        </Form.Group>
        
        <Form.Group widths='equal'>
        
          <Form.Field 
            control={Input} 
            name='powerDay'
            type='dropdown'
            label='Power Due Date: '
            placeholder=''
            required={true}
            onChange={this.onChange}
            />
          
          <Form.Field 
            control={Input} 
            name='waterDay'
            type='dropdown'
            label='Water Due Date: '
            placeholder=''
            required={true}
            onChange={this.onChange}
            />

          <Form.Field 
            control={Input} 
            name='wifiDay'
            type='dropdown'
            label='Internet Due Date: '
            placeholder=''
            required={true}
            onChange={this.onChange}
            />
        
        </Form.Group>
      </Form>
    )
  }
}

export default connect(null, mapDispatchToProps)(RegisterFlatDetails)