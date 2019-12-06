import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Power extends React.Component {
  state = { 

   }
  render() { 
    return ( 
      <>
    <Card color='red'>
      <img src='/power.png' rounded style={{backgroundColor: '#99fadc', height: '30vh', width: 'auto'}} />

      {/* <Image src='/power.png' size='medium' rounded style={{backgroundColor: 'blue'}} /> */}
      <Card.Content>
        <Card.Header>POWER BILL</Card.Header>
        {/* <Card.Header>DUE IN 15 DAYS</Card.Header> */}
        <Card.Meta>
          <span className='date'>DUE IN 15 DAYS</span>
        </Card.Meta>
        {/* <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content> */}
      {/* {/* <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a> */}
      </Card.Content> 
    </Card>
      </>
     )
  }
}
 
export default Power