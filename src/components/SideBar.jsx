import React, { Component } from 'react'
import './App.css'

import HeaderButton from './buttonsForMarkdown/HeaderButton'

class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="sidebar">
        <a href={this.props.userUrl} target="_blank">
          <img src={this.props.imgUrl} className="userImg" />
        </a>
        <HeaderButton data={this.props.data} onChange={this.props.onChange} />
      </div>
    )
  }
}

export default SideBar
