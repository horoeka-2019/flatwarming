import React from 'react'
import { Header } from 'semantic-ui-react'

class Names extends React.Component {
  state = {

  }

  render() { 
    // console.log(this.props.userTest)
    return ( 
      <>
        <Header>
          Welcome back Elly, Matt, Pat, Rhiannon, Emma and Brittany!
          Test email is {this.props.userTest.email}
        </Header>
      </>
     )
  }
}

export default Names
