import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux' 
import { hideLogin, showLogin, hideReg, showReg, hideLogout, showLogout } from '../actions/nav-buttons'

class Nav extends React.Component {

  clickRegister = () => {
    this.props.dispatch(hideReg())
    this.props.dispatch(showLogin())
}

  clickLogin = () => {
    this.props.dispatch(hideLogin())
    this.props.dispatch(showReg())
}

  clickLogout = () => {
    this.props.dispatch(hideLogin())
    this.props.dispatch(showReg())
  }

  clickHome = () => {
    this.props.dispatch(showReg())
    this.props.dispatch(showLogin())
  }
  
  render() {
    return (
      <>
      <Container>
        <Menu inverted fixed='top'>
          <Menu.Item header as={Link} to='/' onClick={this.clickHome} style={{fontSize: '1.3rem'}}>Flat Warming<img src='/favicon.png'></img></Menu.Item >

            <Menu.Menu position='right' style={{fontSize: '1.2rem'}}>

              {this.props.register && <Menu.Item as={Link} to='/register' onClick={this.clickRegister}>
                Register
              </Menu.Item>
              }

              {this.props.login && <Menu.Item as={Link} to='/log-in' onClick={this.clickLogin}>
                Log In
              </Menu.Item>
              } 

              {this.props.logout && <Menu.Item as={Link} to='/log-in' onClick={this.clickLogout}>
                Log Out
              </Menu.Item>
              } 

            </Menu.Menu>
        </Menu>
      </Container>
      
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

export default connect(mapStateToProps)(Nav)