import { connect } from 'react-redux'
import PostButton from '../components/PostButton'
import { changePost } from '../actions'

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(changePost())
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(PostButton)
