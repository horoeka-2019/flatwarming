import React from 'react'
import { connect } from 'react-redux'

import {
  Button, 
  Form, 
  Input, 
  Container,
  FormField,
  FormGroup
} from 'semantic-ui-react'


class RegisterFlatDetails extends React.Component {
  state = {
    address: '',
    suburb: '',
    names:  '',
    powerDay: null, 
    waterDay: null,
    wifiDay:  null
  }

  onChange = (e) => {
    setForm({
      ...form, 
      [e.target.value]: e.target.value
    })
  }
  onClick = e => {
    e.preventDefault()
      this.setState({
      
    })
  }
  eventHandler = () => {
    this.setState({
      usersId:  users ? users.id : null,
    })
  }

  onSubmit = () => {
    const newFlat = this.state

    addUser(newFlat)
      .then(() => push('/'))
      .catch(setError)
  }

  render () {

    return (
     <Container text style={{ border: '1px', borderStyle: 'solid', padding: '30px', marginTop: 75, maxWidth: '40vw'}}> 
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
              name='address'
              type='text'
              label='Suburb: '
              placeholder='Onehunga'
              required={true}
              onChange={this.onChange}>
            </FormField>

            <FormField
              control={Input}
              name='names'
              type='text'
              label='Flat Mate: '
              placeholder='Name your Mates'
              onChange={this.onChange}>
            </FormField>

            <FormField
            control={Button}
            onClick={
              this.newFlatMate
            }
            > 
            Add Flat Mate 
            </FormField>
          
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
        
          
          <FormField
            control={Button}
            onSubmit={this.addNewFlat}
            disabled={
              !this.state.name || 
              !this.state.address ||
              !this.state.powerDay ||
              !this.state.categoryId
            }
            > Submit 
          </FormField> 

        </Form.Group>
      </Form>
    </Container>
    )
  }
}
// const mapDispatchToProps = {
//   newFlat
// }

export default connect(null)(RegisterFlatDetails)