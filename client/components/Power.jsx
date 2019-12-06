import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Power extends React.Component {
  state = { 

   }
  render() { 
    return ( 
      <>
    <Card color='orange'>
      <Image src='/power.png' wrapped ui={false} rounded />
      <Card.Content>
        <Card.Header>DUE IN 15 DAYS</Card.Header>
        {/* <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
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