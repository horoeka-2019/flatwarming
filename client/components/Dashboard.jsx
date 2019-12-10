import React from 'react'
import { Container, Grid, Image, Divider } from 'semantic-ui-react'

import Power from './Power'
import Internet from './Internet'
import Water from './Water'
import Rubbish from './Rubbish'
import Names from './Names'
import Footer from './Footer'
import Jobs from './Jobs'
import AddNewJob from './AddNewJob'
import { connect } from 'react-redux'
import { hideLogin, hideReg, showLogout } from '../actions/nav-buttons'

import { getUserDetails } from '../api/registerFlatDetails'
import { setError } from '../actions/error'
import { getJobs } from '../actions/jobs.action'
import { getFlatmates } from '../actions/flatmates.action'

const getDaysInMonth = function (month, year) {
  return new Date(year, month, 0).getDate()
}

const calculateDueDay = function (dayPay) {
  const newDate = new Date()
  const date = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()
  const days = getDaysInMonth(month, year)
  const daypay = Number(dayPay)
  if (date <= daypay) {
    return daypay - date
  } else {
    return (days - date + daypay)
  }
}

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

    this.props.dispatch(getJobs())
      .catch(setError)

    this.props.dispatch(getFlatmates(this.props.match.params.usersId))
      .catch(setError)
  }

  render () {
    if (this.state.details === '') {
      return null
    }

    const { powerDay, waterDay, wifiDay } = this.state.details
    const duePowerDay = calculateDueDay(powerDay)
    const dueWaterDay = calculateDueDay(waterDay)
    const dueWifiDay = calculateDueDay(wifiDay)

    return (
      <>
      <Names/>
      <Grid celled>
        <Grid.Row width={15}>
          <Grid.Column>
        <Divider horizontal style={{ padding: 20 }}>BILLS</Divider>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>

          <Grid.Column mobile={12} tablet={8} computer={4}> 
            <Power duePowerDay={duePowerDay}/>
          </Grid.Column>

          <Grid.Column mobile={12} tablet={8} computer={4}>
            <Internet dueWifiDay={dueWifiDay}/> 
          </Grid.Column>

          <Grid.Column mobile={12} tablet={8} computer={4}>
            <Water dueWaterDay={dueWaterDay}/>
          </Grid.Column>

          <Grid.Column mobile={12} tablet={8} computer={4}>
            <Rubbish day={this.state.details.dayOfWeek}/>
          </Grid.Column>

        </Grid.Row>

        <Grid.Row>

          <Grid.Column width={4}>
            <AddNewJob userId={this.props.match.params.usersId}/>
          </Grid.Column>

          <Grid.Column width={12}>
            <Jobs userId={this.props.match.params.usersId}/>
          </Grid.Column>

        </Grid.Row>
      </Grid>
      <Footer /></>
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
