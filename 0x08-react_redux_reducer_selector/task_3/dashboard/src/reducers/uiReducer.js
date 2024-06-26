import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

export const uiReducer = (state = Map(initialState), action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);

    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);

    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);

    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);

    case LOGOUT:
      return state.set('isUserLoggedIn', false);

    default:
      break;
  }
  return state;
};
