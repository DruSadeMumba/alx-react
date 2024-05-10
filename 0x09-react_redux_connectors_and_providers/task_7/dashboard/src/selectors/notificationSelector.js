import { Map } from 'immutable';

export const filterTypeSelected = (state) => state.get('filter');
export const getNotifications = (state) => state.get('notifications');
export const getUnreadNotifications = (state) => Map(Object.values(state.get('notifications')).filter(not => !not.isRead));
