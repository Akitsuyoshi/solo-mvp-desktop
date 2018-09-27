import {
  UPDATE_CODE,
  CHANGE_CLICK,
  CHANGE_POST,
  CHANGE_OPEN,
} from '../actions'

const initialState = {
  code: '# Say what?',
  isClick: false,
  isPost: false,
  isOpen: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CODE: {
      return { ...state, code: action.newValue }
    }
    case CHANGE_CLICK: {
      return { ...state, isClick: !state.isClick }
    }
    case CHANGE_POST: {
      return { ...state, isPost: !state.isPost }
    }
    case CHANGE_OPEN: {
      return { ...state, isOpen: !state.isOpen }
    }
    default: {
      return state
    }
  }
}

export default reducer
