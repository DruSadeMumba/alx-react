import { configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { StyleSheetTestUtils } from "aphrodite";
import { mapStateToProps } from "./App";
import { fromJS } from 'immutable';

configure({ adapter: new Adapter() });
StyleSheetTestUtils.suppressStyleInjection();

describe('App component', () => {
  it('returns the correct object when passing the state', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    expect(mapStateToProps(state)).toEqual({ isLoggedIn: true });
  });
});
