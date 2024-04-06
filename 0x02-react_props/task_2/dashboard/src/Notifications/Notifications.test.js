import React from 'react';
import { Notifications } from './Notifications';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test('renders Notifications without crashing', () => {
  shallow(<Notifications />);
});

test('renders three NotificationItem in Notifications', () => {
  const wrapper = shallow(<Notifications />);
  const listItems = wrapper.find('NotificationItem');
  expect(listItems).toHaveLength(3);
});

test('renders the text "Here is the list of notifications" in Notifications', () => {
  const wrapper = shallow(<Notifications />);
  const textElement = wrapper.find('p');
  expect(textElement.text()).toEqual('Here is the list of notifications');
});
