import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

test('renders Notifications without crashing', () => {
  shallow(<Notifications />);
});

test('renders three list items in Notifications', () => {
  const wrapper = shallow(<Notifications />);
  const listItems = wrapper.find('li');
  expect(listItems).toHaveLength(3);
});

test('renders the text "Here is the list of notifications" in Notifications', () => {
  const wrapper = shallow(<Notifications />);
  const textElement = wrapper.find('p');
  expect(textElement.text()).toEqual('Here is the list of notifications');
});
