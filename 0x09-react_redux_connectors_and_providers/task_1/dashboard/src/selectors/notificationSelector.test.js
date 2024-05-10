import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
  const initialState = Map({
    filter: 'DEFAULT',
    notifications: Map({
      1: Map({ id: 1, isRead: false, type: 'urgent', value: 'Lorem ipsum dolor.' }),
      2: Map({ id: 2, isRead: false, type: 'default', value: 'sit amet, consectetur.' }),
      3: Map({ id: 3, isRead: true, type: 'urgent', value: 'Adipiscing elit, sed.' }),
    }),
  });

  it('filterTypeSelected selector works as expected', () => {
    expect(filterTypeSelected(initialState)).toEqual('DEFAULT');
  });

  it('getNotifications selector returns a list of notifications in Map format', () => {
    const expectedNotifications = initialState.get('notifications');
    expect(getNotifications(initialState)).toEqual(expectedNotifications);
  });
});
