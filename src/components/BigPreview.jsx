import React, { Component } from 'react'

import * as mark from 'marked'

class Preview extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const code = mark(this.props.code, { sanitize: true })
    document.getElementById('BigPreview').innerHTML = code
  }

  onClick = (e) => {
    e.preventDefault()
    this.props.onChangeClick()
  };

  render() {
    return (
      <div>
        <div id="BigPreview" onClick={this.onClick} />
      </div>
    )
  }
}


export default Preview
