import React from 'react'
import {connect} from 'react-redux'

import {List, Divider, FormField, Button, Grid, Form, Segment} from 'semantic-ui-react'
import { addFlatmate, removeFlatmate } from '../actions/flatmates.action'
import { setError } from '../actions/error'

class Setting extends React.Component {
  

  render() {
    console.log('this.props.flatmates flatmates reducer', this.props.flatmates)
    return (
      <>
        <Grid textAlign='center' style={{ alignItems:'center', padding: '8em 0em'}} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 500}}>
            <Form size='size'>
              <Segment stacked>
                <Divider horizontal style={{padding: 20, marginTop: 20}}>
                  Any Change of your flatmates?
                </Divider>
                <FormField>
                  <List>
                    {
                      this.props.flatmates.map(flatmate => {console.log('id', flatmate.id); return <li key={flatmate.id}>{flatmate.name}<button onClick={() => this.props.dispatch(removeFlatmate(flatmate.id))}>-</button></li>})
                    }
                  </List>
                  <label>FlatMate:</label>
                  <input type="text" onChange={(e) => this.changeHandle(e.target.value)}></input>
                  <Button style={{ margin: 5}} onClick={() => this.props.addFlatmate(this.state.inputValue)}>Add Flatmate</Button>
                </FormField>
              </Segment>
            </Form>

          </Grid.Column>
        </Grid>
      </>
    )
  }



}


const mapStateToProps = state => {
  return {
    flatmates: state.flatmatesReducer
  }
}

export default connect(mapStateToProps)(Setting)