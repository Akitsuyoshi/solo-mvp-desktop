import React from 'react'
import './App.css'
import HeaderButton from '../containers/buttonsForMarkdown/HeaderButton'

const SideBar = (props) => {
  const { imgUrl, url } = props
  return (
    <div className="sidebar">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} className="userImg" alt="userPic" />
      </a>
      <HeaderButton />
    </div>
  )
}

export default SideBar
