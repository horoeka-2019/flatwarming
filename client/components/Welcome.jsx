import React from 'react'
import {Image} from 'semantic-ui-react'
import WelcomeText from './WelcomeText'
import { connect } from 'react-redux'
import { hideLogin, showLogin, hideReg, showReg, hideLogout, showLogout } from '../actions/nav-buttons'


class welcomeImg extends React.Component {

  showNavButtons = () => {
    this.props.dispatch(showReg())
    this.props.dispatch(showLogin())
  }

   componentDidMount() {
    this.showNavButtons()
   }

  render() {
    return(
      <div>
   
      <Image style={{
        marginBottom:0,
        // marginTop:mobile ? '1.5em':'3em'
      }}
      src='welcome-2.jpg'
      />
      <WelcomeText /> 
      </div>
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

