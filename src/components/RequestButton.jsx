import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

import client from '../authorizeMedium'

class RequestButton extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  fetchMediumUser = (e) => {
    e.preventDefault()
    // const callbackURL = 'https://pure-plateau-79856.herokuapp.com/'
    // const url = `https://medium.com/m/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=basicProfile,publishPost&state=requestResult&response_type=code&redirect_uri=${callbackURL}`

    // axios.get(url)
    //   .then((res) => {
    //     const person = res.data
    //   })
    //   .catch(err => console.log(err))
    client.getUser((err, user) => {
      if (err) throw err
      console.log(user)
    })
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
