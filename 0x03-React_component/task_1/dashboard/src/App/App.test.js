import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { JSDOM } from 'jsdom';
import App from './App';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import {unmountComponentAtNode} from "react-dom";

configure({ adapter: new Adapter() });
const jsdom = new JSDOM('<!doctype html><body></body></html>');
const { window } = jsdom;
let container = null;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
}

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
  describe('when isLoggedIn is true', () => {
    const wrapper = shallow(<App />);

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
});

describe('when ctrl+h is pressed', () => {
  const logged = jest.fn();
  const wrapper = mount(<App logOut={logged()} />);
  const keyEvent = new window.KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
  jest.spyOn(window, 'alert');
  document.dispatchEvent(keyEvent);
  setTimeout(() => {
    expect(logged).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    wrapper.unmount();
  }, 1000);
});
