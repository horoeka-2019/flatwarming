import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom'

import Nav from './Nav'

class App extends React.Component {
  state = { 

   }
  render() { 
    return ( 
      <>
      <Router>
        <Route path='/' component={Nav} />
      </Router>
      </>
     );
  }
}

export default App
