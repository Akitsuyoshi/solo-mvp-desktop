import { connect } from 'react-redux'
import SideBar from '../components/SideBar'

const mapStateToProps = state => ({
  imgUrl: state.medium.imgUrl,
  url: state.medium.url,
})

export default connect(
  mapStateToProps,
)(SideBar)
