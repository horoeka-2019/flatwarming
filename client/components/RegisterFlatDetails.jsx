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
        </Form.Group>
        <Form.Group>
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
        </Form.Group>
        <Form.Group>  
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
        <Form.Group> 
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