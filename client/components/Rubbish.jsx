import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
// import Countdown from 'react-countdown-now'
// import { getSeconds, startTimer, tick } from '../helperFunctions'

var curday
var secTime
var ticker

function getSeconds (day) {
  let corrDay
  if (day === 'monday') {
    corrDay = 1
  } else if (day === 'tuesday') {
    corrDay = 2
  } else if (day === 'wednesday') {
    corrDay = 3
  } else if (day === 'thursday') {
    corrDay = 4
  } else if (day === 'friday') {
    corrDay = 5
  } else if (day === 'saturday') {
    corrDay = 6
  } else if (day === 'sunday') {
    corrDay = 0
  }

  var nowDate = new Date()
  var dy = corrDay // Sunday through Saturday, 0 to 6
  var countertime = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 20, 0, 0) // 20 out of 24 hours = 8pm

  var curtime = nowDate.getTime() // current time
  var atime = countertime.getTime() // countdown time
  var diff = parseInt((atime - curtime) / 1000)
  if (diff > 0) { curday = dy - nowDate.getDay() } else { curday = dy - nowDate.getDay() - 1 } // after countdown time
  if (curday < 0) { curday += 7 } // already after countdown time, switch to next week
  if (diff <= 0) { diff += (86400 * 7) }
  startTimer(diff)
}

function startTimer (secs) {
  secTime = parseInt(secs)
  if (!ticker) {
    ticker = setInterval(tick, 1000)
    tick() // initial count display
  }
}

function tick () {
  var secs = secTime
  if (secs > 0) {
    secTime--
  } else {
    clearInterval(ticker)
    getSeconds() // start over
  }

  var days = Math.floor(secs / 86400)
  secs %= 86400
  var hours = Math.floor(secs / 3600)
  secs %= 3600
  var mins = Math.floor(secs / 60)
  secs %= 60

  // update the time display
  document.getElementById('days').innerHTML = curday
  document.getElementById('hours').innerHTML = ((hours < 10) ? '0' : '') + hours
  document.getElementById('minutes').innerHTML = ((mins < 10) ? '0' : '') + mins
  document.getElementById('seconds').innerHTML = ((secs < 10) ? '0' : '') + secs
}

class Rubbish extends React.Component {
  state = {
    day: ''
  }

  componentDidMount () {
    if (this.props.day) {
      getSeconds(this.props.day)
    }
  }

  render () {
    return (
      <>
        <Card color='green'>
          <img src='/rubbish-1.jpg' style={{ height: '50vh', width: 'auto' }} />
          <Card.Content>

            <Card.Header>RUBBISH DAY</Card.Header>

            <Card.Meta>
            Your Rubbish Day is {this.props.day}
            </Card.Meta>

          </Card.Content>
        </Card>
        <div id="countholder">
          <div><span className="days" id="days"></span><div className="smalltext">Days</div></div>
          <div><span className="hours" id="hours"></span><div className="smalltext">Hours</div></div>
          <div><span className="minutes" id="minutes"></span><div className="smalltext">Minutes</div></div>
          <div><span className="seconds" id="seconds"></span><div className="smalltext">Seconds</div></div>
        </div>
      </>
    )
  }
}

export default Rubbish
