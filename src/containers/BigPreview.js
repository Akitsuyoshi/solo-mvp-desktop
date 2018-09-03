import { connect } from 'react-redux'
import BigPreview from '../components/BigPreview'
import { changeClick } from '../actions'

const mapStateToProps = state => ({
  code: state.contents.code,
})

const mapDispatchToProps = dispatch => ({
  onClick: (e) => {
    e.preventDefault()
    dispatch(changeClick())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BigPreview)
