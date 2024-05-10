import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { JSDOM } from 'jsdom';
import App from './App';
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import {unmountComponentAtNode} from "react-dom";
import {StyleSheetTestUtils} from "aphrodite";
import Header from "../Header/Header";

configure({ adapter: new Adapter() });
StyleSheetTestUtils.suppressStyleInjection();

const jsdom = new JSDOM('<!doctype html><body></body></html>');
const { window } = jsdom;
let container = null;

global.window = window;
global.document = window.document;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App component', () => {
  const wrapper = shallow(<App />);
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New notification' },
  ];

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders Notifications', () => {
    shallow(<Notifications />);
  });

  it('renders Footer', () => {
    shallow(<Footer />);
  });

  it('renders Header', () => {
    expect(wrapper.contains(<Header />)).toBeTruthy();
  });

  it('marks a notification as read when markNotificationAsRead is called', () => {
wrapper.setState({ listNotifications: notifications });
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state().listNotifications.some((notification) => notification.value === 'New course available')).toBeFalsy();
  });

  // Test when isLoggedIn is false
  describe('when isLoggedIn is false', () => {
    let wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });

    it('renders Login', () => {
      shallow(<Login />);
    });

    it('renders Login when isLoggedIn is false', () => {
      expect(wrapper.find('CourseList').exists()).toBeFalsy();
    });
  });

  // Test when isLoggedIn is true
  describe('when isLoggedIn is true', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      user: {
        email: 'abc@123.com',
        password: '%lePass123',
        isLoggedIn: true,
      },
      logOut: () => {},
    });

    it('does not render Login', () => {
      expect(wrapper.find('Login').exists()).toBeFalsy();
    });

    it('renders CourseList', () => {
      expect(wrapper.find('CourseList').exists()).toBeTruthy();
    });
  });

  // Test displayDrawer
  describe('displayDrawer', () => {
    const wrapper = shallow(<App />);

    it('verifies that the default state is false', () => {
      expect(wrapper.state().displayDrawer).toEqual(false);
    });

    it('verifies that the displayDrawer state is updated to true when handleDisplayDrawer() is called', () => {
      wrapper.instance().handleDisplayDrawer();
      expect(wrapper.state().displayDrawer).toEqual(true);
    });

    it('verifies that the displayDrawer state is updated to false when handleHideDrawer() is called', () => {
      wrapper.setState({ displayDrawer: true });
      wrapper.instance().handleHideDrawer();
      expect(wrapper.state().displayDrawer).toEqual(false);
    });
  });
});
