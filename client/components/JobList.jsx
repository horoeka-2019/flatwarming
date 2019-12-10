import React from 'react'
import { connect } from 'react-redux'
import { Form, Dropdown } from 'semantic-ui-react'

class JobList extends React.Component {
  onChange = (event, data) => {
    const { jobs } = this.props
    const selectedJob = data.value
    const job = jobs.find(job =>
      job.job === selectedJob)

    this.props.eventHandlerJob(job)
  }

  render () {
    const options = this.props.jobs.map(job => ({
      key: job.id,
      value: job.job,
      text: job.job
    }))

    return (
      <Form.Field control={Dropdown}
        selection
        clearable
        placeholder="Select Job"
        onChange={this.onChange}
        options={options}
        name={this.props.name}
        label={this.props.label}
        required={this.props.required}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobsReducer.jobs
  }
}

export default connect(mapStateToProps)(JobList)
