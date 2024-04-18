import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { JSDOM } from 'jsdom';
import App from './App';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import {unmountComponentAtNode} from "react-dom";
import {StyleSheetTestUtils} from "aphrodite";

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
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders Notifications', () => {
    shallow(<Notifications />);
  });

  it('renders Header', () => {
    shallow(<Header />);
  });

  it('renders Footer', () => {
    shallow(<Footer />);
  });

  // Test when isLoggedIn is false
  describe('when isLoggedIn is false', () => {
    let logged = { isLoggedIn: false };
    const wrapper = shallow(<App {...logged} />);

    it('renders Login', () => {
      shallow(<Login />);
    });

    it('renders Login when isLoggedIn is false', () => {
      expect(wrapper.find('CourseList').exists()).toBeFalsy();
    });
  });

  // Test when isLoggedIn is true
  describe('when isLoggedIn is true', () => {
    let logged = { isLoggedIn: true };
    const wrapper = shallow(<App {...logged} />);

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
