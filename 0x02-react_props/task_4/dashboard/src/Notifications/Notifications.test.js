import React from 'react';
import Notifications from './Notifications';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('Notifications component', () => {
  it('renders Notifications without crashing', () => {
    shallow(<Notifications />);
  });

  // Test when displayDrawer is false
  describe('when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);

    it('renders menuItem', () => {
      shallow(<menuItem />);
    });

    it('does not render div.Notifications', () => {
      expect(wrapper.find('Notifications').exists()).toBeFalsy();
    });
  });

  // Test when displayDrawer is true
  describe('when displayDrawer is true', () => {
    let display = { displayDrawer: true };
    const wrapper = shallow(<Notifications {...display} />);

    it('renders menuItem', () => {
      shallow(<menuItem />);
    });

    it('renders div.Notifications', () => {
      expect(wrapper.find('.Notifications').exists()).toBeTruthy();
    });

    it('renders three NotificationItem in Notifications', () => {
      const listItems = wrapper.find('NotificationItem');
      expect(listItems).toHaveLength(3);
    });

    it('renders the text "Here is the list of notifications" in Notifications', () => {
      const textElement = wrapper.find('p');
      expect(textElement.text()).toEqual('Here is the list of notifications');
    });
  });
});
