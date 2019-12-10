import React from 'react'
import { Card } from 'semantic-ui-react'

class Power extends React.Component {
  render () {
    return (
      <><Card color='red'>
        <img src='/power-1 (1).jpg' style={{ height: '30vh', width: 'auto' }} />
        <div className="countholder">
          <h3>Power Bill</h3>
          <div><span className="days" id="days">Due in</span><div className="smalltext"> Due in {this.props.duePowerDay} days</div></div>
        </div>
        {/* <Card.Content>
          <Card.Header>POWER BILL</Card.Header>
          <Card.Meta>
            <span className='date'>DUE DAY IN {this.props.duePowerDay} DAYS</span>
          </Card.Meta>
        </Card.Content> */}
      </Card>
      </>
    )
  }
}

export default Power
