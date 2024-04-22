import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';
import {StyleSheetTestUtils} from "aphrodite";
import AppContext from '../App/AppContext';
import {JSDOM} from "jsdom";

configure({ adapter: new Adapter() });
const { document } = new JSDOM('<!doctype html><html lang=""><body></body></html>').window;
global.document = document;
global.window = document.defaultView;

describe('Footer component', () => {
  let wrapper;
  const userDets = {
    user: {email: '', password: '', isLoggedIn: false,},
    logOut: () => {},
  };
  beforeEach(() => {
    wrapper = mount(
      <AppContext.Provider value={userDets}>
        <Footer />
      </AppContext.Provider>
    );
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    wrapper.unmount();
  });
  describe('when the user is logged out', () => {
    it('renders without crashing', () => {
      expect(wrapper.render()).not.toBe(undefined);
    });

    it('renders the text Copyright', () => {
      const text = wrapper.find('p').text();
      expect(text).toEqual('Copyright 2024 - Holberton School main dashboards');
    });
  });

  describe('when the user is logged in', () => {
    const userDets = {
      user: {email: 'abc@123.com', password: '$lePass123', isLoggedIn: true,},
      logOut: () => {},
    };
    beforeEach(() => {
      wrapper.setProps({
        children: (
          <AppContext.Provider value={userDets}>
            <Footer />
          </AppContext.Provider>
        ),
      });
    });

    it('displays the link when the user is logged in', () => {
      expect(wrapper.find('a')).toHaveLength(1);
    });
  });
});
