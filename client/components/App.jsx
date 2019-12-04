import React from 'react'
import LogIn from './LogIn'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Nav from './Nav'

class App extends React.Component {

  render(){
    return (
      <div>
        <Router>
              <Route path='/' component={Nav} />
              <Route exact path='/' component={Home} ></Route>
              <Route path='/register' component={Register} />
              <Route exact path='/log-in' component={LogIn} ></Route>
        </Router>
      </div>
    )
    }
  }

  export default App