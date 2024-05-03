import React from 'react';
import Notifications from './Notifications';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {StyleSheetTestUtils} from "aphrodite";

configure({ adapter: new Adapter() });
StyleSheetTestUtils.suppressStyleInjection();

describe('Notifications component', () => {
  it('renders Notifications without crashing', () => {
    shallow(<Notifications />);
  });

  // Test when displayDrawer is false
  describe('when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    const handleDisplayDrawer = jest.fn();

    it('renders menuItem', () => {
      shallow(<menuItem />);
    });

    it('does not render div.Notifications', () => {
      expect(wrapper.find('Notifications').exists()).toBeFalsy();
    });

    it('clicking on menuItem calls handleDisplayDrawer', () => {
      const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
      wrapper.find('.menuItem').simulate('click');
      expect(handleDisplayDrawer).toHaveBeenCalled();
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
    const handleHideDrawer = jest.fn();
    let wrapper;
    let listItems;
    let textElement;
    let markedAsRead;
    let listNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
      { id: 3, type: 'urgent', value: 'Notification 3' }
    ];

    beforeEach(() => {
      markedAsRead = jest.fn();
      wrapper = shallow(
        <Notifications
          displayDrawer={true}
          listNotifications={listNotifications}
          handleHideDrawer={handleHideDrawer}
          markNotificationAsRead={markedAsRead}
        />
      );
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

    it('calls markNotificationAsRead when NotificationItem calls markAsRead', () => {
      const notificationId = 1;
      listItems.first().props().markAsRead(notificationId);
      expect(markedAsRead).toHaveBeenCalledWith(notificationId);
    });

    it('clicking on button calls handleHideDrawer', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
      wrapper.find('button').simulate('click');
      expect(handleHideDrawer).toHaveBeenCalled();
    });
  });
});