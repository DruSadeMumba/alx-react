import { uiReducer, initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(uiReducer(undefined, action).toJS()).toEqual({
      ...initialState, isNotificationDrawerVisible: true
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    expect(uiReducer(undefined, action).toJS()).toEqual(initialState);
  });

  it('should handle LOGIN_FAILURE', () => {
    const action = { type: LOGIN_FAILURE };
    expect(uiReducer(undefined, action).toJS()).toEqual(initialState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = { type: LOGIN_SUCCESS };
    expect(uiReducer(undefined, action).toJS()).toEqual({
      ...initialState, isUserLoggedIn: true
    });
  });

  it('should handle LOGOUT', () => {
    const action = { type: LOGOUT };
    expect(uiReducer(undefined, action).toJS()).toEqual(initialState);
  });
});
