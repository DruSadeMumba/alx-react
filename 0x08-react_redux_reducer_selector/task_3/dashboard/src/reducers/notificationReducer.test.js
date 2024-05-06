import { notificationReducer, initialState } from './notificationReducer';
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it ('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: initialState.notifications };
    const expectedState = action.data.map(notification => ({ ...notification, isRead: false }));
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = initialState.notifications.map(notification => notification.id === action.index ? { ...notification, isRead: true } : notification);
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = { ...initialState, filter: action.filter };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
