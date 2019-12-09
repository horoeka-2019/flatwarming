import React from 'react'
import {
  Card, Image,
  Button,
  FormField,
  List
} from 'semantic-ui-react'

import { connect } from 'react-redux'

class Jobs extends React.Component {
  // componentDidMount () {
  //   this.props.dispatch(getJobsByUserId(this.props.userId))
  //     .catch(setError)
  // }

  render () {
    return (
      <><Card>
        <Image src='#' wrapped ui={false} />
        <Card.Content>
          <Card.Header>
              JOBS
          </Card.Header>
          {/* <Card.Meta>
              DUE IN 5 DAYS
          </Card.Meta>
          <Card.Description>
              BY names from flatmate
          </Card.Description> */}
          <FormField>
            <List as='ol'>
              {
                this.props.jobDetail.map((job, index) => (
                  <List.Item as='li' key={index}>
                    <label>name: {job.name} - job:{job.job}</label>
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
        </Card.Content>
        <Button attached="bottom">-</Button>
      </Card></>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobDetail: state.jobsReducer.jobsDetail
  }
}
export default connect(mapStateToProps)(Jobs)
