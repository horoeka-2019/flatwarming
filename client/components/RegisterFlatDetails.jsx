import React from 'react'
import { connect } from 'react-redux'
import FlatMate from './FlatMate'
import {addFlatmate, removeFlatmate} from '../actions/flatmate.action'

import {
  Button, 
  Form, 
  Input, 
  Container,
  FormField,
  List,
  FormGroup
} from 'semantic-ui-react'


class RegisterFlatDetails extends React.Component {
  state = {
    address: '',
    suburb: '',
    names:  '',
    powerDay: null, 
    waterDay: null,
    wifiDay:  null,
    inputValue:''
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
      onSubmit: onSubmit
    })
  }
  
  changeHandle(value) {
    this.setState(
      {
        inputValue: value
      }
    )
  }

  eventHandler = () => {
    this.setState({
      usersId:  users ? users.id : null,
    })
  }

  onSubmit = () => {
    addUser(newFlat)
      .then(() => push('/'))
      .catch(setError)
  }

  render () {
    return (
     <Container text style={{ border: '1px', borderStyle: 'solid', padding: '30px', marginTop: 75, maxWidth: '40vw'}}> 

      <Form>
      <FormGroup>
          
          <Form.Field 
            control={Input}
            name='address'
            type='text'
            label='Address: '
            placeholder='123 Onehunga Mall'
            required={true}
            onChange={this.onChange}>
          </Form.Field>

          <Form.Field 
            control={Input}
            name='address'
            type='text'
            label='Suburb: '
            placeholder='Onehunga'
            required={true}
            onChange={this.onChange}>
          </Form.Field>

      </FormGroup>

      <FormGroup>

          <FormField>
            <List as='ol'>
              {
              this.props.flatmates.map((flatmate, index) => 
              <FlatMate id={index} flatmate={flatmate} removeFlatmate={this.props.removeFlatmate}></FlatMate>)
              }
            </List>
            <label>FlatMate:</label><input type="text" onChange={(e) => this.changeHandle(e.target.value)}></input>
            
            <button onClick={() => this.props.addFlatmate(this.state.inputValue)}>+</button>
          </FormField>
          
      </FormGroup>

      <FormGroup>

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

       </FormGroup>

       <FormGroup>
           
           <FormField
             control={Button}
             onSubmit={this.state.inputValue}
             disabled={
              !this.state.name || 
              !this.state.address ||
              !this.state.powerDay ||
              !this.state.waterDay ||
              !this.state.wifiDay
            }
            > Submit
          </FormField>
    
       </FormGroup>
   

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