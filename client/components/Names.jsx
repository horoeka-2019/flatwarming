import React from 'react'
import { Header } from 'semantic-ui-react'
import {connect} from 'react-redux'

class Names extends React.Component {
  
  flatmateFunction = () => {
    const newArr = []
    const flatmates = this.props.flatmates
    for (let i = 0; i<flatmates.length; i++) {
      newArr.push(flatmates[i].name)
    }
    const newString = newArr.join()
  }

  render () {
    console.log(this.flatmateFunction())
    return (
      <>
        <Header style={{color:'orange', marginTop: 150}}>
          <p>Welcome back 
          {this.props.flatmates.map(flatmate => 
            {flatmate.name}
          )}</p>
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
