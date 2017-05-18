import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Tabs from './Tabs';

it('renders without crashing', () => {
  const component = renderer.create(
    <Tabs activeSection='home' />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
