import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


class Rubbish extends React.Component {
  state = { 

   }
  render() { 
    return ( 
      <>
        <Card color='green'>
        <img src='/rubbish.png' rounded style={{backgroundColor: 'lavender', height: '30vh', width: 'auto'}} />
        <Card.Content>

          <Card.Header>RUBBISH DAY</Card.Header>

          <Card.Meta>
            MONDAY - 2 MORE DAYS
          </Card.Meta>

        </Card.Content> 
      </Card>
      </>
     );
  }
}
 
export default Rubbish;