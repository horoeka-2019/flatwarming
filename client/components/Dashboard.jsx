import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react'
import Power from './Power'
import Internet from './Internet'
import Water from './Water'
import Rubbish from './Rubbish'
import Names from './Names'

class Dashboard extends React.Component {
  state = { 

   }
  render() { 
    return ( 
      <>
        <Names style = {{marginTop: 100}}/>
        <Grid columns={4} >
          <Grid.Row>

            <Grid.Column>
              <Power />
            </Grid.Column>

            <Grid.Column>
              <Internet />
            </Grid.Column>

            <Grid.Column>
              <Water />
            </Grid.Column>

            <Grid.Column>
              <Rubbish />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </>
      //   <Grid columns={3} divided>
      // <Grid.Row>
      //   <Grid.Column>
      //   <Power />
      //   </Grid.Column>
      //   <Grid.Column>
      //     <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      //   </Grid.Column>
      //   <Grid.Column>
      //     <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      //   </Grid.Column>
      // </Grid.Row>
      // <Grid />

        // <Container style = {{marginTop: 100}}>
        //   <Power />
        // </Container>
     )
  }
}
 
export default Dashboard