import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialNotiState = {
  notifications: [],
  filter: 'DEFAULT',
};

export const notificationReducer = (state = Map(initialNotiState), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge(notificationsNormalizer(action.data));

    case MARK_AS_READ:
      return state.setIn([String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
};
