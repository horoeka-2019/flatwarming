import React from 'react'
import { Segment, Button, Card, Image } from 'semantic-ui-react'

class Jobs extends React.Component {
  render () {
    return (
      <>

        <Card>
          <Image src='#' wrapped ui={false} />
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
          </Card.Content>
          <Card.Content>
            <a>
              EDIT JOBS
            </a>
          </Card.Content>
          <Button attached="bottom">-</Button>
        </Card>

        

      </>
    )
  }
}

export default Jobs
