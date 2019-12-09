import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Countdown from 'react-countdown-now'
// import { getSeconds, startTimer, tick } from '../helperFunctions'

var curday;
var secTime;
var ticker;
 
function getSeconds() {
 var nowDate = new Date();
 var dy = 6 ; //Sunday through Saturday, 0 to 6
 var countertime = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate(),20,0,0); //20 out of 24 hours = 8pm
 
 var curtime = nowDate.getTime(); //current time
 var atime = countertime.getTime(); //countdown time
 var diff = parseInt((atime - curtime)/1000);
 if (diff > 0) { curday = dy - nowDate.getDay() }
 else { curday = dy - nowDate.getDay() -1 } //after countdown time
 if (curday < 0) { curday += 7; } //already after countdown time, switch to next week
 if (diff <= 0) { diff += (86400 * 7) }
  return diff
}

class Rubbish extends React.Component {
  state = {
    day: ''
  }

  // componentDidMount () {
  //   console.log('hello')
  //   getSeconds()
  // }

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

        <Countdown date={Date.now() + getSeconds()} />,

        {/* <div id="countholder">
          <div><span className="days" id="days"></span><div className="smalltext">Days</div></div>
          <div><span className="hours" id="hours"></span><div className="smalltext">Hours</div></div>
          <div><span className="minutes" id="minutes"></span><div className="smalltext">Minutes</div></div>
          <div><span className="seconds" id="seconds"></span><div className="smalltext">Seconds</div></div>
        </div> */}
      </>
    )
  }
}

export default Rubbish
