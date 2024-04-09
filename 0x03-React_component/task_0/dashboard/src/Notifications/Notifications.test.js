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

  // Test when displayDrawer is true and listNotifications is empty or null
  describe('when displayDrawer is true and listNotifications is empty or null', () => {
    it('renders "No new notification for now" in Notifications', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
      const textElement = wrapper.find('p');

      expect(textElement.text()).toEqual('No new notification for now');
    });

    it('renders "No new notification for now" in Notifications', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const textElement = wrapper.find('p');

      expect(textElement.text()).toEqual('No new notification for now');
    });
  });

  // Test when displayDrawer is true and listNotifications is not empty
  describe('when displayDrawer is true and list notification is not empty', () => {
    let wrapper;
    let listItems;
    let textElement;
    const listNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
      { id: 3, type: 'urgent', value: 'Notification 3' }
    ];

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
      listItems = wrapper.find('NotificationItem');
      textElement = wrapper.find('p');
    });

    it('renders menuItem', () => {
      shallow(<menuItem />);
    });

    it('renders div.Notifications', () => {
      expect(wrapper.find('.Notifications').exists()).toBeTruthy();
    });

    it('renders three NotificationItem in Notifications', () => {
      expect(listItems).toHaveLength(3);
    });

    it('renders the text "Here is the list of notifications" in Notifications', () => {
      expect(textElement.text()).toEqual('Here is the list of notifications');
    });
  });
});
