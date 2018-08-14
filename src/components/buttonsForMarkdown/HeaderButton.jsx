import React, {
  Component,
} from 'react'
import '../App.css'

class HeaderButton extends Component {
  onClick = (e) => {
    this.props.onChange(`${this.props.data}#`, e)
  }

  render() {
    return (<div>
      <button className="changeCode" onClick={this.onClick}>
H
      </button>
            </div>
    )
  }
}

export default HeaderButton
