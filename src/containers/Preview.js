import { connect } from 'react-redux'
import Preview from '../components/Preview'
import {
  changeClick,
} from '../actions'

const mapStateToProps = state => ({
  code: state.contents.code,
})

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(changeClick())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preview)
