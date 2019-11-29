import React from 'react'
import { shallow } from 'enzyme'
import SignUpView from '../views/SignUpView'
describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<SignUpView />)
  })
})
