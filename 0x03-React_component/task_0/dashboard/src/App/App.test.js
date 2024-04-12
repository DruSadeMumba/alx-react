import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import App from './App';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

configure({ adapter: new Adapter() });

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
