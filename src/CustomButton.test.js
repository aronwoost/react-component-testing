import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import CustomButton from './CustomButton';

it('renders render', () => {
  const component = shallow(
    <CustomButton label='test-label' />
  );

  expect(toJson(component)).toMatchSnapshot();
});

it('renders has class active', () => {
  const component = shallow(
    <CustomButton label='test-label' active={true}/>
  );

  expect(component.hasClass('active')).toBe(true);
});
