import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import Tabs from './Tabs';

it('renders without crashing', () => {
  const component = shallow(
    <Tabs activeSection='home' />
  );

  expect(toJson(component)).toMatchSnapshot();
});
