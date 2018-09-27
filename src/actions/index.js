// It supposed to be 5 actions
export const UPDATE_CODE = 'UPDATE_CODE'
export const CHANGE_CLICK = 'CHANGE_CLICK'
export const CHANGE_POST = 'CHANGE_POST'
export const SET_USER_INFO = 'SET_USER_INFO'
export const CHANGE_OPEN = 'CHANGE_OPEN'
export const POST_MEDIUM = 'POST_MEDIUM'

export const changeCode = newValue => ({
  type: UPDATE_CODE,
  newValue,
})

export const changeClick = () => ({
  type: CHANGE_CLICK,
})

export const changePost = () => ({
  type: CHANGE_POST,
})

export const changeUserInfo = userInfo => ({
  type: SET_USER_INFO,
  userInfo,
})

export const changeOpen = () => ({
  type: CHANGE_OPEN,
})

export const postToMedium = (title, tag) => ({
  type: POST_MEDIUM,
  title,
  tag,
})
