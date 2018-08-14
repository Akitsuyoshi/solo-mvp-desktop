import React, { Component } from 'react'
import './App.css'

import medium from 'medium-sdk'


import client from '../authorizeMedium'

class PostButton extends Component {
  onClick = () => {
    this.props.onChangeByPost()
  }

  render() {
    return (
      <div>
        <button className="post" onClick={this.onClick}>
Post to Medium
        </button>
      </div>
    )
  }
}

export default PostButton
