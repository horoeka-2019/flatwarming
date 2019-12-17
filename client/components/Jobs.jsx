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

  // clearJobs = (userId) => {
  //   jobsApi.addJobToFlatmate(userId, obj)
  //     .then(() => this.props.dispatch(getJobsByUserId(userId)))
  //     .catch(setError)
  // }

  render () {
    return (
      <>
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
      {/* <Button onClick={this.clearJobs(this.props.userId)}>Clear Jobs</Button> */}
      
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
