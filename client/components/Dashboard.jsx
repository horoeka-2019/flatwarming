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

const getDaysInMonth = function (month, year) {
  return new Date(year, month, 0).getDate()
}

const calculateDueDays = function (powerDayPay, waterDayPay, wifiDayPay) {
  const newDate = new Date()
  const date = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()
  const days = getDaysInMonth(month, year)
  let duePowerDay = 0
  let dueWaterDay = 0
  let dueWifiDay = 0
  const powerDay = Number(powerDayPay)
  const waterDay = Number(waterDayPay)
  const wifiDay = Number(wifiDayPay)
  if (date <= powerDay) {
    duePowerDay = powerDay - date
  } else {
    duePowerDay = days - date + powerDay
  }

  if (date <= waterDay) {
    dueWaterDay = waterDay - date
  } else {
    dueWaterDay = days - date + waterDay
  }

  if (date <= wifiDay) {
    dueWifiDay = wifiDay - date
  } else {
    dueWifiDay = days - date + wifiDay
  }

  return {
    duePowerDay: duePowerDay,
    dueWaterDay: dueWaterDay,
    dueWifiDay: dueWifiDay
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
  }

  render () {
    const dueDays = calculateDueDays(this.state.details.powerDay, this.state.details.waterDay, this.state.details.wifiDay)
    return (
      <>'       '<Container textAlign='center' style = {{ marginTop: 100 }}>
        <Names />
      </Container>'       '<Container>
        <Grid columns={4} style = {{ marginTop: 20 }}>
          <Grid.Row>

            <Grid.Column>
              <Power duePowerDay={dueDays.duePowerDay}/>
            </Grid.Column>

            <Grid.Column>
              <Internet dueWifiDay={dueDays.dueWifiDay}/>
            </Grid.Column>

            <Grid.Column>
              <Water dueWaterDay={dueDays.dueWaterDay}/>
            </Grid.Column>

            <Grid.Column>
              <Rubbish />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>'       '<Footer />'     '</>
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
