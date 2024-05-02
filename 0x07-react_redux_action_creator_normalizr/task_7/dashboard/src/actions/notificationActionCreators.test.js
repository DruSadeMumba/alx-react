import { markAsRead, setNotificationFilter } from './notificationActionCreators';

describe('notificationActionCreators', () => {
  it('should return markAsRead action', () => {
    const index = 1;
    const action = markAsRead(index);
    expect(action).toEqual(markAsRead(index));
  });

  it('should return setNotificationFilter action', () => {
    const filter = 'DEFAULT';
    const action = setNotificationFilter(filter);
    expect(action).toEqual(setNotificationFilter(filter));
  });
});
