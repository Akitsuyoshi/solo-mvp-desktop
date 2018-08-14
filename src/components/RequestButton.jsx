import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

import client from '../authorizeMedium'

class RequestButton extends Component {
  constructor(props) {
    super(props)
  }

  fetchMediumUser = (e) => {
    e.preventDefault()
    const url = 'https://api.medium.com/v1/me'
    const authOption = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_MEDIUM_API}`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
      },
    }

    return fetch(url, authOption)
      .then((res) => {
        res.json()
        console.log(res)
      })
      .catch(err => err)
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={this.fetchMediumUser} />
      </div>
    )
  }
}

export default RequestButton
