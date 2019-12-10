import React from 'react'
import {
  Button,
  FormField,
  List,
  Input,
  Icon,
  Header
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {getFlatmates, removeFlatmateByUserId, addFlatmateSetting,addFlatmateSettingIntoDB} from '../actions/flatmates.action'
import { setError } from '../actions/error'

class Setting extends React.Component {

  state = {
    inputValue: ''
  }

  changeHandle(value) {
    this.setState(
      {
        inputValue: value
      }
    )
  }

  componentDidMount () {
    const user = this.props.user
    const userId = user[0]
    this.props.dispatch(getFlatmates(userId))
    .catch(setError)   
  }

  render () {
    const user = this.props.user
    const userId = user[0]
    const dashboardLink = `/dashboard/${userId}`
    return (
      <>
      <Header as='h2' textAlign='center' block>
        <Icon name='sticky note outline' />
        <Header.Content>
          Setting
          <Header.Subheader>Manage your flatmates</Header.Subheader>
        </Header.Content>
      </Header>
      <List>
        { this.props.flatmates.map((flatmate, index) => (
        <List.Item as='li' key={index}>
        <label>Flatmate:</label>
        <Input value={flatmate.name} type="text"/>
        <Button style={{ margin: 5 }} onClick={()=>{this.props.dispatch(removeFlatmateByUserId(userId, flatmate.id)); this.props.dispatch(getFlatmates(5))}}>Remove Flatmate</Button>
      </List.Item>))
        }
      </List> 
      <FormField >
        <Input id="textfield1" type="text" onChange={(e) => this.changeHandle(e.target.value)}></Input>
        <Button style={{ margin: 5 }}
          onClick={() => {
          this.props.dispatch(addFlatmateSettingIntoDB(userId,this.state.inputValue))
          this.props.dispatch(getFlatmates(userId))
          this.clearFields()
          }}>
          Add Flatmate
        </Button>
        <Link to={dashboardLink}>Go Back To DashBoard</Link> 
      </FormField> 
              
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    flatmates: state.flatmatesReducer,
    user: state.userReducer
  }
}
export default connect(mapStateToProps)(Setting)
