import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  List,
  Input
} from 'semantic-ui-react'

class FlatMate extends React.Component {
  render () {
    const { removeFlatmate, id, flatmate } = this.props
    return (
      <List.Item as='li' key={id}>
        <List.Header>FlatMate:</List.Header><Input value={flatmate}/>
        <Button onClick={() => removeFlatmate(id)}>Remove Flatmate</Button>
      </List.Item>
    )
  }
}

export default connect(null)(FlatMate)
