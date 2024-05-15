import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Footer } from './Footer';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from '../App/AppContext';

configure({ adapter: new Adapter() });

describe('Footer component', () => {
  const userDets = {
    user: {email: '', password: '', isLoggedIn: false,},
    logOut: () => {},
  };
  let wrapper = shallow(<Footer user={userDets}/>);
  beforeEach(() => {
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
      const text = wrapper.find('em').text();
      expect(text).toContain('Copyright 2024 - Holberton School main dashboards');
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
