import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Menu, MenuHeader } from 'semantic-ui-react'
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
        <Menu fixed='top' style = {{ backgroundColor: '#F9B79F' }}>
          <Menu.Item header as={Link} to='/' onClick={this.clickHome}>Flat Warming</Menu.Item >

            <Menu.Menu position='right'>

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