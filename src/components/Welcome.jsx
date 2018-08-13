import React, { Component } from 'react'
import './App.css'
import UserImg from './UserImg'

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="title">
          Hello
        </div>
        <UserImg />
      </div>
    )
  }
}

export default Welcome
