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

class Jobs extends React.Component {
  // componentDidMount () {
  //   this.props.dispatch(getJobsByUserId(this.props.userId))
  //     .catch(setError)
  // }

  render () {
    return (
      <>
      {/* <Card> */}
      <Header as='h2' textAlign='center' block>
        <Icon name='sticky note outline' />
        <Header.Content>
          Flat Jobs
          <Header.Subheader>Manage your flat maintainence</Header.Subheader>
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
            this.props.jobDetail.map((job, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  {job.name}
                </Table.Cell>
                <Table.Cell key={index}>
                  {job.job}
                </Table.Cell>
                <Table.Cell key={index}>
                  {job.dueDay}
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>

      </Table>
      {/* <img src='/jobs-1.jpg' size='large' wrapped ui={false} rounded style={{ height: '40vh', width: 'auto' }}/>
        <Card.Content>
          <Card.Header>
              JOBS
          </Card.Header>
          <Card.Meta>
              DUE IN 5 DAYS
          </Card.Meta>
          <Card.Description>
              BY names from flatmate
          </Card.Description>
          <FormField>
            <List as='ol'>
              {
                this.props.jobDetail.map((job, index) => (
                  <List.Item as='li' key={index}>
                    <label>name: {job.name} - job:{job.job} - due day:{job.dueDay}</label>
                  </List.Item>
                ))
              }
            </List>
          </FormField>
        </Card.Content>
        <Card.Content>
          <a>
              EDIT JOBS
          </a>
        </Card.Content> */}
        {/* <Button attached="bottom">-</Button>
        </Card> */}
        </>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobDetail: state.jobsReducer.jobsDetail
  }
}
export default connect(mapStateToProps)(Jobs)
