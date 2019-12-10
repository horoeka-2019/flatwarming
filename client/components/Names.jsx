import React from 'react'
import { Header } from 'semantic-ui-react'

class Names extends React.Component {
  state = {

  }

  render () {
    return (
      <>
        <Header style = {{ textAlign: 'center', marginTop: 100}}>
          Welcome back Elly, Matt, Pat, Rhiannon, Emma and Brittany!
        </Header>
      </>
    )
  }
}

export default Names
