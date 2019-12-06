import React from 'react';
import { Container } from 'semantic-ui-react'
import Power from './Power'

class Dashboard extends React.Component {
  state = { 

   }
  render() { 
    return ( 
      <>
        <Container style = {{marginTop: 100}}>
          <Power />
        </Container>
      </>
     );
  }
}
 
export default Dashboard