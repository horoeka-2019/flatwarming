import React from 'react'
import { Header, Icon, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Names extends React.Component {
  
  flatmateFunction = () => {
    const newArr = []
    const flatmates = this.props.flatmates
    for (let i = 0; i<flatmates.length; i++) {
      newArr.push(flatmates[i].name)
    }
    return newArr.join(' ')
  }

  // handleClick = () => {
    // const userId = this.props.match.params.userid
    // const names = this.props.flatmates
    // const obj = { ...this.state, userId, names }

    // if (this.props.flatId === undefined) {
    //   return null
    // }
    // this.props.history.push(`/settings/${this.props.flatId}`)
  // }

  render () {
    return (
      <>
        <Header size='large' style={{color:'orange', marginTop: 100}} textAlign='center'>
            Welcome back {this.flatmateFunction()}!  
              <Link to={`/settings/${this.props.flatId}`}>
                <Button 
                  style={{marginLeft: 20}} 
                  >
                  <Icon name='settings' />
                  Change Details
                </Button>
              </Link>
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
