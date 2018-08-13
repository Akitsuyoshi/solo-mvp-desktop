import medium from 'medium-sdk'

require('dotenv').config()

const client = new medium.MediumClient({
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
})

// const redirectURL = 'https://pure-plateau-79856.herokuapp.com/'

const accessToken = '20b3d32873174a7090189046b2facee73fb5831c9ba937111ff0cdcc8178a89ef'

client.setAccessToken(accessToken)

export default client

// const url = client.getAuthorizationUrl('secretState', redirectURL, [
//   medium.Scope.BASIC_PROFILE, medium.Scope.PUBLISH_POST,
// ])

// // (Send the user to the authorization URL to obtain an authorization code.)

// client.exchangeAuthorizationCode('YOUR_AUTHORIZATION_CODE', redirectURL, (err, token) => {
//   if (err) console.log(err)

//   client.getUser((err, user) => {
//     if (err) console.log(err)

//     client.createPost({
//       userId: user.id,
//       title: 'A new post',
//       contentFormat: medium.PostContentFormat.HTML,
//       content: '<h1>A New Post</h1><p>This is my new post.</p>',
//       publishStatus: medium.PostPublishStatus.DRAFT,
//     }, (err, post) => {
//       if (err) console.log(err)
//       console.log(token, user, post)
//     })
//   })
// })
