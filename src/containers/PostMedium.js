import { connect } from 'react-redux'
import PostMedium from '../components/PostMedium'
import {
  changeOpen,
  changePost,
  postToMedium,
} from '../actions'

const mapStateToProps = state => ({
  isOpen: state.contents.isOpen,
})

const mapDispatchToProps = dispatch => ({
  handleClose: () => {
    dispatch(changePost())
  },
  onClick: () => {
    const inputs = document.querySelectorAll('input')
    const title = inputs[0].value
    const tag = inputs[1].value.split(' ')

    dispatch(postToMedium(title, tag))
    dispatch(changePost())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostMedium)
