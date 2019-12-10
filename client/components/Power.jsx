import React from 'react'
import { Card } from 'semantic-ui-react'

class Power extends React.Component {
  render () {
    return (
      <><Card color='red'>
        <img src='/power-1 (1).jpg' style={{ height: '30vh', width: 'auto' }} />
        <div className="countholder">
          {/* <h3>Power Bill</h3> */}
          <h3>Power Bill</h3>
        <div style={{ padding: '4px 10px', display: 'inline-block' }}>To be paid in:<span></span><div className="smalltext">{this.props.duePowerDay} Days</div></div>
        </div>
      </Card>
      </>
    )
  }
}

export default Power
