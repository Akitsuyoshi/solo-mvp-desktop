import React from 'react'
import ReactDOM from 'react-dom'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'
import Welcome from './Welcome'
import NewProject from './NewProject'
import UserImg from './UserImg'
import AddButton from './AddButton'

configure({ adapter: new Adapter() })

describe('<App /> component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders app with two components', () => {
    const div = document.createElement('div')
    const wrapper = mount(<App />, div)
    expect(wrapper.find(Welcome).exists()).toEqual(true)
    expect(wrapper.find(NewProject).exists()).toEqual(true)
  })
})

describe('<Welcome /> component', () => {
  it('shows the Hello string', () => {
    const div = document.createElement('div')
    const wrapper = mount(<Welcome />, div)
    expect(wrapper.contains(<div className="title">
Hello
                            </div>)).toEqual(true)
  })

  it('renders app with one component', () => {
    const div = document.createElement('div')
    const wrapper = mount(<Welcome />, div)
    expect(wrapper.find(UserImg).exists()).toEqual(true)
  })
})

describe('<NewProject /> component', () => {
  it('renders new project with one component', () => {
    const div = document.createElement('div')
    const wrapper = mount(<NewProject />, div)
    expect(wrapper.find(AddButton).exists()).toEqual(true)
  })
})
