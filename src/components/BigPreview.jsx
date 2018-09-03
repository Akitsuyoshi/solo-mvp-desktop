import React, { Component } from 'react'

import * as mark from 'marked'

class Preview extends Component {
  componentDidMount() {
    const { code } = this.props
    const newCode = mark(code, { sanitize: true })
    document.getElementById('BigPreview').innerHTML = newCode
  }

  render() {
    const { onClick } = this.props
    return (
      <div>
        <div id="BigPreview" onClick={onClick} />
      </div>
    )
  }
}


export default Preview
