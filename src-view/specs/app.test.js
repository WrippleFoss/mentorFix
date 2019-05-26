import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app';
describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });
});