import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Welcome from './Welcome'
// import NewProject from './NewProject'
import Preview from './Preview'
import SideBar from './SideBar'
import BigPreview from './BigPreview'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '# Say what?',
      isClick: false,
    }
  }

  onChange = (newValue, e) => {
    this.setState({ code: newValue })
  }

  onChangeClick = () => {
    this.setState({ isClick: !this.state.isClick })
  }

  render() {
    if (this.state.isClick) {
      return (
        <div>
          <Header style={{ width: '100%', height: '30' }} />
          <BigPreview className="" code={this.state.code} onChangeClick={this.onChangeClick} />
        </div>
      )
    }
    return (
      <div>
        <Header style={{ width: '100%', height: '30' }} />
        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
          <SideBar />
          <Welcome code={this.state.code} onChange={this.onChange} className="editor" />
          <Preview code={this.state.code} className="editor" onChangeClick={this.onChangeClick} />
          {/* <NewProject style={{ width: '500px', height: '700px' }} /> */}
        </div>
      </div>
    )
  }
}

export default App
