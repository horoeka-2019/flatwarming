import React from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'
import Power from './Power'
import Internet from './Internet'
import Water from './Water'
import Rubbish from './Rubbish'
import Names from './Names'
import Footer from './Footer'
import { connect } from 'react-redux'
import { hideLogin, showLogin, hideReg, showReg, hideLogout, showLogout } from '../actions/nav-buttons'

import { getUserDetails } from '../api/registerFlatDetails'

class Dashboard extends React.Component {
  state = {
    details: ''
  }

  removeNavButtons = () => {
    this.props.dispatch(hideReg())
    this.props.dispatch(hideLogin())
    this.props.dispatch(showLogout())
  }


  componentDidMount () {
    this.removeNavButtons()
    getUserDetails(this.props.match.params.usersId)
      .then(res => {
        this.setState({
          details: res
        })
      })
  }

  render () {
    return (
      <>
        <Container textAlign='center' style = {{ marginTop: 100 }}>
          <Names />
        </Container>'       '<Container>
          <Grid columns={4} style = {{ marginTop: 20 }}>
            <Grid.Row>

              <Grid.Column>
                <Power />
              </Grid.Column>

              <Grid.Column>
                <Internet />
              </Grid.Column>

              <Grid.Column>
                <Water />
              </Grid.Column>

              <Grid.Column>
                <Rubbish />
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Container>
        <Footer />
        </>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
    register: state.register,
    logout: state.logout,
    flatmateDetail: state.flatmateDetailReducer
  }
}

export default connect(mapStateToProps)(Dashboard)
