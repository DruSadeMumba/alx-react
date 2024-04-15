import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import {StyleSheetTestUtils} from "aphrodite";

configure({ adapter: new Adapter() });
StyleSheetTestUtils.suppressStyleInjection();

describe('Header component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
