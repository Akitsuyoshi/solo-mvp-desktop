import { SET_USER_INFO, POST_MEDIUM } from '../actions'

const initialState = {
  imgUrl: '',
  userID: '',
  url: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      const { imgUrl, userID, url } = action.userInfo

      return {
        ...state, imgUrl, userID, url,
      }
    }
    case POST_MEDIUM: {
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
      return client.createPost(info, (err, post) => console.log(post))
    }
    default: {
      return state
    }
  }
}

export default reducer
