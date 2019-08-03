import React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../../components/Navbar'
describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />)
  })
})
