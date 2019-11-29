import React from 'react'
import { shallow } from 'enzyme'
import LoginView from '../views/LoginView'
describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<LoginView />)
  })
})
