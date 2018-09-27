import React, {
  Component,
} from 'react'
import '../App.css'

class HeaderButton extends Component {
  onClick = () => {
    const { onChange, code } = this.props
    onChange(`${code}#`)
  }

  render() {
    return (
      <div>
        <button className="changeCode" onClick={this.onClick}>
          H
        </button>
      </div>
    )
  }
}

export default HeaderButton
