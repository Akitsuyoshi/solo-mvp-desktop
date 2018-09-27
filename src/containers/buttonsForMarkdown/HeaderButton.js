import { connect } from 'react-redux'
import { changeCode } from '../../actions'
import HeaderButton from '../../components/buttonsForMarkdown/HeaderButton'

const mapStateToProps = state => ({
  code: state.contents.code,
})

const mapDispatchToProps = dispatch => ({
  onChange: (newCode) => {
    dispatch(changeCode(newCode))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderButton)
