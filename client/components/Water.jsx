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
        <div style={{ padding: '4px 10px', display: 'inline-block' }}>To be paid in:<span></span><div className="smalltext">{this.props.dueWaterDay} Days</div></div>
      </div>

    </Card></>
    )
  }
}

export default Water
