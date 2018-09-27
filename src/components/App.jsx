import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Welcome from '../containers/Welcome'
import Preview from '../containers/Preview'
import SideBar from '../containers/SideBar'
import BigPreview from '../containers/BigPreview'
import PostButton from '../containers/PostButton'
import PostMedium from '../containers/PostMedium'


class App extends Component {
  componentDidMount() {
    this.fetchMediumUser()
  }

  fetchMediumUser = () => {
    const { changeUserInfo } = this.props
    const url = `https://c89x0czqbj.execute-api.us-east-2.amazonaws.com/Development/medium?userId=${process.env.REACT_APP_MEDIUM_API}`
    return fetch(url)
      .then(res => res.json())
      .then((json) => {
        const userInfo = {
          imgUrl: json.imageUrl,
          userID: json.id,
          url: json.url,
        }
        changeUserInfo(userInfo)
      })
      .catch(err => err)
  }

  // postToMedium = (title = 'post from reactron', tags = []) => {
  //   const {
  //     code,
  //     userID,
  //   } = this.state
  //   const info = {
  //     userId: userID,
  //     title,
  //     contentFormat: medium.PostContentFormat.MARKDOWN,
  //     content: code,
  //     tags,
  //     publishStatus: medium.PostPublishStatus.DRAFT,
  //   }
  //   client.createPost(info, (err, post) => console.log(post))
  // }


  render() {
    const { isPost, isClick } = this.props
    if (isPost) {
      return (
        <PostMedium />
      )
    }

    if (isClick) {
      return (
        <div>
          <Header style={{ width: '100%', height: '30' }} />
          <BigPreview />
          <PostButton />
        </div>
      )
    }
    return (
      <div>
        <Header style={{ width: '100%', height: '30' }} />
        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
          <SideBar />
          <Welcome className="editor" />
          <Preview className="editor" />
          <PostButton />
        </div>
      </div>
    )
  }
}

export default App
