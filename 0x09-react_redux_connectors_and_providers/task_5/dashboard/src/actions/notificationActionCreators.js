import { MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

export const setLoadingState = (load) => ({
  type: SET_LOADING_STATE,
  load,
});

export const setNotifications = (arr) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  arr,
});

export const fetchNotifications = () => (dispatch) => {
  dispatch(setLoadingState(true));
  return fetch('notifications.json')
    .then((res) => !res.ok ? console.log('Network response was not ok') : res.json())
    .then((data) => (!Array.isArray(data) || !data) ? console.error('Invalid data format', data) : dispatch(setNotifications(data)))
    .catch((error) => console.error('Fetch Error', error))
    .finally(() => dispatch(setLoadingState(false)));
}
