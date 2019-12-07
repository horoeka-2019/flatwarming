import React from 'react'
import {Image} from 'semantic-ui-react'
import WelcomeText from './WelcomeText'

class welcomeImg extends React.Component {
  render() {
    return(
      <div>
   
      <Image style={{
        marginBottom:0,
        // marginTop:mobile ? '1.5em':'3em'
      }}
      src='welcomeimg.jpg'
      />
      <WelcomeText /> 
      </div>
    )
    }

    }


export default welcomeImg

