import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h1>The Royal Bank of Flatiron</h1>
        </div>
        
        <AccountContainer />

      </div>
    )
  }
}

export default App
