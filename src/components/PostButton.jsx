import React from 'react'
import './App.css'

const PostButton = props => (
  <div>
    <button className="post" onClick={props.onClick}>
      Post to Medium
    </button>
  </div>
)

export default PostButton
