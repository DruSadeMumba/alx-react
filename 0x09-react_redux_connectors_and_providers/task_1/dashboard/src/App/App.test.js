import { configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { StyleSheetTestUtils } from "aphrodite";
import { mapStateToProps } from "./App";
import { fromJS } from 'immutable';

configure({ adapter: new Adapter() });
StyleSheetTestUtils.suppressStyleInjection();

describe('App component', () => {
  describe('mapStateToProps returns the correct object when passing the state', () => {
    it('returns correct object from user Login', () => {
      let state = fromJS({
        isUserLoggedIn: true
      });
      expect(mapStateToProps(state)).toEqual({ isLoggedIn: true });
    });
    it('returns correct object from user logout', () => {
      let state = fromJS({
        isUserLoggedIn: false
      });
      expect(mapStateToProps(state)).toEqual({ isLoggedIn: false });
    });
    it('returns correct object from display Drawer', () => {
      let state = fromJS({
        isNotificationDrawerVisible: true
      });
      expect(mapStateToProps(state)).toEqual({ displayDrawer: true });
    });
  });
});
