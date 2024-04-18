import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';
import {StyleSheetTestUtils} from "aphrodite";

configure({ adapter: new Adapter() });
StyleSheetTestUtils.suppressStyleInjection();

describe('Login component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(3);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  describe('submit button', () => {
    const wrapper = shallow(<Login/>);

    it('submit button is disabled by default', () => {
      const submitButton = wrapper.find('input[type="submit"]');
      expect(submitButton.prop('disabled')).toEqual(true);
    });

    it('submit button is enabled when email and password are filled in', () => {
      wrapper.find('input[type="email"]').simulate('change', {target: {value: 'dru@abc.com'}});
      wrapper.find('input[type="password"]').simulate('change', {target: {value: '%LePass123'}});
      const submitButton = wrapper.find('input[type="submit"]');
      expect(submitButton.prop('disabled')).toBeFalsy();
    });
  });
});
