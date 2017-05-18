import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import CustomButton from './CustomButton';

it('renders render', () => {
  const component = shallow(
    <CustomButton label='test-label' id={3}/>
  );

  expect(toJson(component)).toMatchSnapshot();
});

it('renders call function with correct id', done => {
  const component = shallow(
    <CustomButton label='test-label' id={3} actions={{
      onButtonClicked: id => {
        expect(id).toBe(3);
        done();
      }
    }}/>
  );

  component.simulate('click');
});
