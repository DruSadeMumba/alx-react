import { notificationReducer, initialState } from './notificationReducer';
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { fromJS, Map } from 'immutable';

describe('notificationReducer', () => {
  const fetchedNot =  {
    filter: 'DEFAULT',
    notifications: [
      { id: 1, isRead: false, type: 'urgent' },
      { id: 2, isRead: false, type: 'default' },
    ]
  };

  it ('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(Map(initialState));
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: fetchedNot.notifications };
    expect(notificationReducer(undefined, action).toJS()).toEqual(notificationsNormalizer(fetchedNot.notifications));
  });

  it('should handle MARK_AS_READ', () => {
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = fetchedNot.notifications.map(notification => notification.id === action.index ? { ...notification, isRead: true } : notification);
    expect(notificationReducer(fromJS(notificationsNormalizer(fetchedNot.notifications)), action).toJS()).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = { ...fetchedNot, filter: action.filter };
    expect(notificationReducer(fromJS(notificationsNormalizer(fetchedNot)), action).toJS()).toEqual(expectedState);
  });
});
