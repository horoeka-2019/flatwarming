import React from 'react'
import {Image} from 'semantic-ui-react'
import WelcomeText from './WelcomeText'
import { connect } from 'react-redux'
import { showLogin, showReg, hideLogout } from '../actions/nav-buttons'


class welcomeImg extends React.Component {

  showNavButtons = () => {
    this.props.dispatch(showReg())
    this.props.dispatch(showLogin())
    this.props.dispatch(hideLogout())
  }

   componentDidMount() {
    this.showNavButtons()
   }

  render() {
    return (
      <>
   
      <Image style={{ marginBottom: 0 }}
      src='welcome-2.jpg'
      />
      <WelcomeText /> 
      </>
    )
  }

}

    const mapStateToProps = state => {
      return {
        login: state.login,
        register: state.register,
        logout: state.logout
      }
    }

export default connect(mapStateToProps)(welcomeImg)

