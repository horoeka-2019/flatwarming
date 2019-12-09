import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Power extends React.Component {
  render () {
    return (
      <>'     '<Card color='red'>
        <img src='/power-1.jpg' style={{ height: '50vh', width: 'auto' }} />
        <Card.Content>
          <Card.Header>POWER BILL</Card.Header>
          <Card.Meta>
            <span className='date'>DUE DAY IN {this.props.duePowerDay} DAYS</span>
          </Card.Meta>
        </Card.Content>
      </Card></>
    )
  }
}

export default Power
