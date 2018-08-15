import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import medium from 'medium-sdk'
import Header from './Header'
import Welcome from './Welcome'
import Preview from './Preview'
import SideBar from './SideBar'
import BigPreview from './BigPreview'
import PostButton from './PostButton'
import PostMedium from './PostMedium'

import client from '../authorizeMedium'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '# Say what?',
      isClick: false,
      isPost: false,
      imgUrl: '',
      userID: '',
      url: '',
    }
  }

  componentDidMount() {
    this.fetchMediumUser()
  }

  onChange = (newValue, e) => {
    this.setState({ code: newValue })
  }

  onChangeClick = () => {
    this.setState({ isClick: !this.state.isClick })
  }

  onChangeByPost = () => {
    this.setState({ isPost: !this.state.isPost })
  }

  fetchMediumUser = () => {
    const url = 'https://c89x0czqbj.execute-api.us-east-2.amazonaws.com/Development/medium'
    // const authOption = {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${process.env.REACT_APP_MEDIUM_API}`,
    //     'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //     'Accept-Charset': 'utf-8',
    //   },
    // }
    return fetch(url)
      .then(res => res.json())
      .then((json) => {
        console.log(json)
        this.setState({
          imgUrl: json.imageUrl,
          userID: json.id,
          url: json.url,
        })
        console.log(this.state)
      })
      .catch(err => err)
  }

  postToMedium = (title = 'post from reactron', tags = []) => {
    const {
      code,
      userID,
    } = this.state
    const info = {
      userId: userID,
      title,
      contentFormat: medium.PostContentFormat.MARKDOWN,
      content: code,
      tags,
      publishStatus: medium.PostPublishStatus.DRAFT,
    }
    client.createPost(info, (err, post) => console.log(post))
  }


  render() {
    const {
      code, userID, userImg, imgUrl, url, isClick, isPost,
    } = this.state

    if (isPost) {
      return (
        <PostMedium postToMedium={this.postToMedium} onChangeByPost={this.onChangeByPost} />
      )
    }

    if (isClick) {
      return (
        <div>
          <Header style={{ width: '100%', height: '30' }} />
          <BigPreview code={code} onChangeClick={this.onChangeClick} />
          <PostButton userData={userID} imgUrl={imgUrl} />
        </div>
      )
    }
    return (
      <div>
        <Header style={{ width: '100%', height: '30' }} />
        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
          <SideBar imgUrl={imgUrl} userUrl={url} onChange={this.onChange} data={code} />
          <Welcome code={code} onChange={this.onChange} className="editor" />
          <Preview code={code} className="editor" onChangeClick={this.onChangeClick} />
          <PostButton code={code} userData={userID} userImg={userImg} onChangeByPost={this.onChangeByPost} />
        </div>
      </div>
    )
  }
}

export default App
