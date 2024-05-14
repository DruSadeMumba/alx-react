import { uiReducer, initialUiState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialUiState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(uiReducer(undefined, action).toJS()).toEqual({
      ...initialUiState, isNotificationDrawerVisible: true
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    expect(uiReducer(undefined, action).toJS()).toEqual(initialUiState);
  });

  it('should handle LOGIN', () => {
    const User = { email: 'abc@123.com', password: 'le$Pass123' };
    const action = { type: LOGIN, user: User};
    expect(uiReducer(undefined, action).toJS()).toEqual({ ...initialUiState, user: User});
  });

  it('should handle LOGIN_FAILURE', () => {
    const action = { type: LOGIN_FAILURE };
    expect(uiReducer(undefined, action).toJS()).toEqual(initialUiState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = { type: LOGIN_SUCCESS };
    expect(uiReducer(undefined, action).toJS()).toEqual({
      ...initialUiState, isUserLoggedIn: true
    });
  });

  it('should handle LOGOUT', () => {
    const action = { type: LOGOUT };
    expect(uiReducer(undefined, action).toJS()).toEqual(initialUiState);
  });
});
