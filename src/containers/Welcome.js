import { connect } from 'react-redux'
import Welcome from '../components/Welcome'
import { changeCode } from '../actions'

const mapStateToProps = state => ({
  code: state.contents.code,
})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => {
    dispatch(changeCode(e))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome)
