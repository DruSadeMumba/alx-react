import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('Footer component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text Copyright', () => {
    const wrapper = shallow(<Footer />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Copyright 2024 - Holberton School main dashboards');
  });
});
