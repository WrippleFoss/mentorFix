import React from 'react'
import { shallow } from 'enzyme'
import LoginView from '../views/LoginView'
import { Form, Button } from "semantic-ui-react";
describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<LoginView />)
  })
  it('has correct login button text', () => {
    const wrapper = shallow(<LoginView />)
    expect(wrapper.find(Form).find(Button).prop('content')).toEqual("Log In");
  })
})
