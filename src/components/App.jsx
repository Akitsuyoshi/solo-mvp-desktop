import React, { Component } from 'react'
import './App.css'
import Welcome from './Welcome'
import NewProject from './NewProject'

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <NewProject />
      </div>
    )
  }
}

export default App
