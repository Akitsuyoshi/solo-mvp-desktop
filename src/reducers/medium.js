import { SET_USER_INFO } from '../actions'

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
    default: {
      return state
    }
  }
}

export default reducer
