import React from 'react'
import {
  Button,
  Form,
  Container
} from 'semantic-ui-react'

import JobList from './JobList'
import FlatmateList from './FlatmateList'
import * as api from '../api/registerFlatDetails'
import { getJobsByUserId } from '../actions/jobs.action'
import { connect } from 'react-redux'

class AddNewJob extends React.Component {
  state = {
    name: null,
    jobId: null,
    flatmateId: null
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = () => {
    const { jobId, flatmateId } = this.state
    const userId = this.props.userId
    const dueDay = ''

    const obj = {
      userId,
      jobId,
      flatmateId,
      dueDay
    }
    api.addJobToFlatmate(userId, obj).then(() => this.props.dispatch(getJobsByUserId(userId)))
  }

  eventHandlerJob = (job) => {
    this.setState({
      jobId: job ? job.id : null
    })
  }

  eventHandlerFlatmate = (flatmate) => {
    this.setState({
      flatmateId: flatmate ? flatmate.id : null
    })
  }

  render () {
    return (
    //   <>'       '<Card
    //       href='#'
    //       header='ADD NEW JOB'
    //       image={'#'}
    //     />'
    //  '</>
      <Container>
        <Form onSubmit={this.onSubmit}>
          <JobList
            name='jobId'
            label='Job:'
            required={true}
            eventHandlerJob={this.eventHandlerJob}
          />
          <FlatmateList
            userId= {this.props.userId}
            name='flatmateId'
            label='Flatmate:'
            required={true}
            eventHandlerFlatmate={this.eventHandlerFlatmate}
          />
          <Form.Field
            control={Button}
          >
            Submit
          </Form.Field>
        </Form>
      </Container>
    )
  }
}

export default connect(null)(AddNewJob)
