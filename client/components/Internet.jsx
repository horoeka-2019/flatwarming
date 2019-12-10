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

          <div style={{ padding: '4px 10px', display: 'inline-block' }}>To be paid in:<span></span><div className="smalltext">{this.props.dueWifiDay} Days</div></div>
        </div>
      </Card></>
    )
  }
}

export default Internet
