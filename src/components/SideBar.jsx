import React, { Component } from 'react'
import './App.css'
import RequestButton from './RequestButton'


class NewProject extends Component {
  render() {
    return (
      <div>
        <img src="./github.png" />
        <RequestButton />
      </div>
    )
  }
}

export default NewProject
