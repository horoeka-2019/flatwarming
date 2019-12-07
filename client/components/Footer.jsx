import React from 'react'
import { Grid,Segment,Icon,Responsive } from 'semantic-ui-react'

class footer extends React.Component {
  footerStyle={
    display:'flex',
    height:'100%',
    flexDirection:'column'
  }

  footerStyleLeft={
    backgroundColor:'#808080'
  }

  footerStyleRight ={
    backgroundColor:'#000000',
    textAlign:'justify',
    padding:'1em 5em 3em 1em',
    color:'#fbc707',
    fontWeight:'bold'
  }

  iconStyle = {
    paddingTop:'1em',
    marginLeft:'0.5em',
    backgroundColor:'#000000',
    color:'#fbc707'
  }

  render() {
    return (
      <div>
        <Responsive minWidth={320} maxWidth={2559}>
          <Segment style={this.footerStyle}vertical>
          <Grid>
            <Grid.Row>
              <Grid.Column width={1} style={this.footerStyleLeft}>

              </Grid.Column>
              <Grid.Column width={9} style={this.footerStyleRight}>
              <div>
                <p>Office:</p>
                <p>12 Morgan Street New Market Auckland</p>
               
              </div>
              </Grid.Column>
              <Grid.Column width={6} style={{backgroundColor:'#000000'}}>
                <Icon name='facebook' style={this.iconStyle}/>
                <Icon name='twitter square' style={this.iconStyle}/>
                <Icon name='mail' style={this.iconStyle}/>
                <Icon name='instagram' style={this.iconStyle}/>
              </Grid.Column>
             
            </Grid.Row>
          </Grid>
          </Segment>
        </Responsive>
      </div>
    )
  }
}


export default footer