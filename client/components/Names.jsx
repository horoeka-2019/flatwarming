import React from 'react'
import { Header } from 'semantic-ui-react'
import {connect} from 'react-redux'

class Names extends React.Component {
  

  render () {
    return (
      <>
        <Header style={{color:'orange'}}>
          Welcome back 
          {this.props.flatmates.map(flatmate => <p key={flatmate.id}>{flatmate.name}</p>)}
        </Header>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    flatmates: state.flatmatesReducer
  }
}

export default connect(mapStateToProps)(Names)
