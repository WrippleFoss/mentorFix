import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from '../App.js';
describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
        const wrapper = shallow(<App />);
    });
});