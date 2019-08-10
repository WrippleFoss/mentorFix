import React from 'react'
import { shallow } from 'enzyme'
import Layout from '../layouts/AppLayout';
describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Layout />)
  })
})
