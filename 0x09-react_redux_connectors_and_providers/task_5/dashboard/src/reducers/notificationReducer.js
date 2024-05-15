import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer, normalizeData } from '../schema/notifications';

export const initialNotiState = {
  notifications: [],
  filter: 'DEFAULT',
  loading: false,
};

export const notificationReducer = (state = Map(initialNotiState), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return Object.keys(normalizeData).length === 0 ? state : state.mergeDeep(notificationsNormalizer(action.data));

    case MARK_AS_READ:
      return state.setIn([String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    case SET_LOADING_STATE:
      return state.set('loading', action.loading);

    default:
      return state;
  }
};
