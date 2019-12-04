import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Button, Form, Checkbox } from 'semantic-ui-react'

class Registration extends React.Component {
  state = {
    name: null,
    emailAdd: null,
    flatId: null
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  eventHandler = (flat) => {
    this.setState({
      flatId: flat ? flat.id : null
    })
  }

  onSubmit = () => {
    const { addUser } = this.props
    const newUser = this.state
    
    addUser(newUser)
    .then(() => )
  }
}

const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)()
