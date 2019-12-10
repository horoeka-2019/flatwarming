import React from 'react'
import {
  Card, Image,
  Button,
  FormField,
  List,
  Table,
  Label,
  Menu,
  Icon,
  Header
} from 'semantic-ui-react'

import { connect } from 'react-redux'

class Setting extends React.Component {
  componentDidMount () {
    this.props.dispatch(getJobsByUserId(this.props.userId))
      .catch(setError)
  }

  render () {
    console.log(this.props.user)
    return (
      <>
      <Header as='h2' textAlign='center' block>
        <Icon name='sticky note outline' />
        <Header.Content>
          Setting
          <Header.Subheader>Manage your flatmates</Header.Subheader>
        </Header.Content>
      </Header>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Job</Table.HeaderCell>
            <Table.HeaderCell>Due Day</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            this.props.flatmates.map((flatmate, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  {flatmate.id}
                </Table.Cell>
                <Table.Cell key={index}>
                {flatmate.name}
                </Table.Cell>
                <Table.Cell key={index}>
                  {job.dueDay}
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>

      </Table>
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
