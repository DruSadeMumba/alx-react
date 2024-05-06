import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

export const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return action.data.map(notification => ({ ...notification, isRead: false }));

    case MARK_AS_READ:
      return state.notifications.map(notification => notification.id === action.index ? ({ ...notification, isRead: true }) : notification);

    case SET_TYPE_FILTER:
      return { ...state, filter: action.filter };

    default:
      return state;
  }
};
