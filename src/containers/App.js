import { connect } from 'react-redux'
import App from '../components/App'
import { changeUserInfo } from '../actions'

const mapStateToProps = state => ({
  isClick: state.contents.isClick,
  isPost: state.contents.isPost,
})

const mapDispatchToProps = dispatch => ({
  changeUserInfo: (userInfo) => {
    dispatch(changeUserInfo(userInfo))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
