import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

import client from '../authorizeMedium'

class RequestButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
    }
  }

  componentDidMount() {
    const callbackURL = 'https://pure-plateau-79856.herokuapp.com/'
    const url = `https://medium.com/m/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=basicProfile,publishPost&state=requestResult&response_type=code&redirect_uri=${callbackURL}`

    axios.get(url)
      .then((res) => {
        const persons = res.data
        this.setState({
          persons,
        })
      })
  }

  fetchMediumUser = (e) => {
    e.preventDefault()
    console.log('here clicked', client)
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={this.fetchMediumUser} />
        {console.log(this.state.persons)}
      </div>
    )
  }
}

export default RequestButton
