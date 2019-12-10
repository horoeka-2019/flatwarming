import React from 'react'
import { Card } from 'semantic-ui-react'

class Water extends React.Component {
  state = {

  }

  render () {
    return (
    <><Card color='yellow'>
      <img src='/water-1 (1).jpg' style={{ height: '30vh', width: 'auto' }} />
      <div className="countholder">
        <h3>Water Bill</h3>
        <div className="smalltext"> Due in {this.props.dueWaterDay} days</div>
      </div>
      {/* <Card.Content>

        <Card.Header>WATER BILL</Card.Header>

        <Card.Meta>
        DUE DAY IN {this.props.dueWaterDay} DAYS
        </Card.Meta>

      </Card.Content> */}
    </Card></>
    )
  }
}

export default Water
