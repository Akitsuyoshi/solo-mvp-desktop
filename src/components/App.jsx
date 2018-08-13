import React, { Component } from 'react'
import './App.css'
import Welcome from './Welcome'
import NewProject from './NewProject'
import RequestButton from './RequestButton'

class App extends Component {
  render() {
    return (
      <div>
        <RequestButton />
        <Welcome />
        <NewProject />
      </div>
    )
  }
}

export default App
