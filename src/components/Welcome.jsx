import React, { Component } from 'react'
import MonacoEditor from 'react-monaco-editor'

class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  editorDidMount(editor, monaco) {
    editor.focus()
  }

  render() {
    const { code } = this.props
    const options = {
      selectOnLineNumbers: true,
      colorDecorators: true,
      fontSize: 16,
      fontFamily: 'Georgia',
    }
    return (
      <MonacoEditor
        width="50%"
        height="1000"
        language="markdown"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.props.onChange}
        editorDidMount={this.editorDidMount}
      />
    )
  }
}


export default Welcome
