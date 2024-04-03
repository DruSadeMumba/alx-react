import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders App without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBeTruthy();
});

test('renders a div with the class App-header', () => {
  const wrapper = shallow(<App />);
  const header = wrapper.find('header.App-header');
  expect(header.exists()).toBeTruthy();
});

test('renders a div with the class App-body', () => {
  const wrapper = shallow(<App />);
  const body = wrapper.find('div.App-body');
  expect(body.exists()).toBeTruthy();
});

test('renders a div with the class App-footer', () => {
  const wrapper = shallow(<App />);
  const footer = wrapper.find('footer.App-footer');
  expect(footer.exists()).toBeTruthy();
});
