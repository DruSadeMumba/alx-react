import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetch from 'node-fetch';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const logout = () => ({
  type: LOGOUT
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

export const loginRequest = (email, password) => (dispatch) => {
  boundLogin(email, password);
  let url = '../../dist/login-success.json';
  fetch(url)
    .then(res => {
      if (res.ok) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    })
    .catch(() => {
      dispatch(loginFailure());
    });
};

export const boundLogin = (email, password) => dispatch(login(email, password));
export const boundLogout = () => dispatch(logout);
export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer);
export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer);
