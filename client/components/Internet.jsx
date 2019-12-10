import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Internet extends React.Component {
  state = {

  }

  render () {
    return (
      <><Card color='orange'>
        <img src='/wifi-1 (1).jpg' size='large' rounded style={{ height: '30vh', width: 'auto' }} />
        <div className="countholder">
          <h3>Internet Bill</h3>
          <div className="smalltext"> Due in {this.props.dueInternetDay} days</div>
        </div>
        {/* <Card.Content>

          <Card.Header>INTERNET BILL</Card.Header>

          <Card.Meta>
        DUE DAY IN {this.props.dueWifiDay} DAYS
          </Card.Meta>

        </Card.Content> */}
      </Card></>
    )
  }
}

export default Internet
