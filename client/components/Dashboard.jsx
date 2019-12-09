import React from 'react'
import { Button, Container, Grid, Image } from 'semantic-ui-react'
import Power from './Power'
import Internet from './Internet'
import Water from './Water'
import Rubbish from './Rubbish'
import Names from './Names'
import Footer from './Footer'
import Jobs from './Jobs'
import AddNewJob from './AddNewJob'
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
    console.log(this.state.details)
    return (
      <>
        <Container textAlign='center' style = {{ marginTop: 100 }}>
          <Names />
        </Container>
        <Container>
          <Grid columns='equal' style = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: 20
          }}>
            <Grid.Row>

              <Grid.Column mobile={12} tablet={8} computer={4}>
                <Power />
              </Grid.Column>

              <Grid.Column mobile={12} tablet={8} computer={4}>
                <Internet />
              </Grid.Column>

              <Grid.Column mobile={12} tablet={8} computer={4}>
                <Water />
              </Grid.Column>

              <Grid.Column mobile={12} tablet={8} computer={4}>
                <Rubbish />
              </Grid.Column>

              <Grid.Column mobile={12} tablet={8} computer={4}>
                <Jobs />
              </Grid.Column>

              <Grid.Column mobile={12} tablet={8} computer={4}>
                <AddNewJob />
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
