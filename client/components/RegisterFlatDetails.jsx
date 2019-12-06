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
  List
} from 'semantic-ui-react'


class RegisterFlatDetails extends React.Component {
  state = {
    address:  '',
    names:    '',
    powerDay: null, 
    waterDay: null,
    wifiDay:  null,
    inputValue:''
  }

  onChange = (event) => {
    setForm({
      ...form, 
      [event.target.name]: event.target.value
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
    const { address, names, powerDay, waterDay, wifiDay } = this.props
    const newFlat = this.state

    addUser(newFlat)
      .then(() => push('/'))
      .catch(setError)
  }

  render () {

    console.log('flatmates', this.props.flatmates)
    console.log('input', this.state.inputValue)
    return (
     <Container> 
       
            <FormField 
              control={Input}
              name='address'
              type='text'
              label='Address: '
              placeholder='123 Onehunga Mall'
              required={true}
              onChange={this.onChange}>
            </FormField>
            <Form>
            <List as='ol'>
              {
              this.props.flatmates.map((flatmate, index) => 
              <FlatMate id={index} flatmate={flatmate} removeFlatmate={this.props.removeFlatmate}></FlatMate>)
              }
            </List>
            <label>FlatMate:</label><input type="text" onChange={(e) => this.changeHandle(e.target.value)}></input>
            
            <button onClick={() => this.props.addFlatmate(this.state.inputValue)}>+</button>
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

const mapStateToProps = state => ({
  flatmates: state.flatmateReducer.flatmates
})

const mapDispatchToProps = dispatch => ({
  addFlatmate: flatmate => dispatch(addFlatmate(flatmate)),
  removeFlatmate: index => dispatch(removeFlatmate(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFlatDetails)