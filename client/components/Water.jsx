import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Water extends React.Component {
  state = { 

   }
  render() { 
    return ( 
      <>
      <Card color='yellow'>
        <img src='/water-1.jpg' style={{ height: '50vh', width: 'auto'}} />
        <Card.Content>

          <Card.Header>WATER BILL</Card.Header>

          <Card.Meta>
            DUE IN 20 DAYS
          </Card.Meta>

        </Card.Content> 
      </Card>
      </>
     );
  }
}
 
export default Water