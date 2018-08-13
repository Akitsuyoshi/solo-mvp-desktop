import React from 'react'
import ReactDOM from 'react-dom'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'
import Welcome from './Welcome'
import NewProject from './NewProject'

configure({ adapter: new Adapter() })

describe('<App /> component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders app with three components', () => {
    const div = document.createElement('div')
    const wrapper = mount(<App />, div)
    expect(wrapper.find(Welcome).exists()).toEqual(true)
    expect(wrapper.find(NewProject).exists()).toEqual(true)
  })
})
