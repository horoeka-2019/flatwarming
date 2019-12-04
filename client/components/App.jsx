import React from 'react'
import SignIn from './SignIn'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Nav from './Nav'
import { Container } from 'semantic-ui-react'

class App extends React.Component {

  render(){
    return (
      <div>
        <Router>
              <Route path='/' component={Nav} />
              
              <Container>
                <Switch>
                  <Route exact path='/' component={Home} ></Route>
                  <Route path='/register' component={Register} />
                  <Route exact path='/signin' component={SignIn} ></Route>
                </Switch>
              </Container>
        </Router>
      </div>
    )
    }
  }

  export default App