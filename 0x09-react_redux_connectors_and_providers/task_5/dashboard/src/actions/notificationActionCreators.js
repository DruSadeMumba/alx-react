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

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch('notifications.json')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setNotifications(data));
        dispatch(setLoadingState(false));
      })
      .catch((error) => console.log(error));
  };
};
