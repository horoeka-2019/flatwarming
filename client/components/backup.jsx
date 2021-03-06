import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import moment from 'moment'

class Rubbish extends React.Component {
  state = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null
  }

  componentDidMount () {
    const rubbishDay = this.nextDay(this.props.day)
    this.calculateDiff(rubbishDay)

    this.timer = setInterval(
      this.tick,
      1000
    )
  }

  nextDay = (day) => {
    return moment().day(day).startOf('day')
  }

  calculateDiff = (newDate) => {
    const now = moment()

    const days = newDate.diff(now, 'days')
    const hours = newDate.diff(now.add(days, 'days'), 'hours')
    const minutes = newDate.diff(now.add(hours, 'hours'), 'minutes')
    const seconds = newDate.diff(now.add(minutes, 'minutes'), 'seconds')

    this.setState({ days, hours, minutes, seconds })
  }

  tick = () => {
    if (this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 })
    } else {
      clearInterval(this.timer);
    }
  }

  render () {
    const { days, hours, minutes, seconds } = this.state

    return (
      <>
        <Card color='green'>
          <img src='/rubbish-1.jpg' style={{ height: '50vh', width: 'auto' }} />
          <div style={{width: "100%", textAlign: "center"}}>
          {(days || hours || minutes || seconds)
            ? <h1>{days} days, {hours} hours, {minutes} minutes, {seconds} seconds...</h1>
            : <h1>Countdown finished!</h1>}
          </div>
          <Card.Content>

            <Card.Header>RUBBISH DAY</Card.Header>

            <Card.Meta>
            Your Rubbish Day is {this.props.day}
            </Card.Meta>

          </Card.Content>
        </Card>
        
      </>
    )
  }
}

export default Rubbish
