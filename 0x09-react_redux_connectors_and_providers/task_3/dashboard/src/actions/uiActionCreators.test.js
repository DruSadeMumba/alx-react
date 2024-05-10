import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('uiActionCreators', () => {
  it('it creates an action to login', () => {
    const email = 'abc@123.com';
    const password = '$lePass123';
    const action = login(email, password);
    expect(action).toEqual(login(email, password));
  });

  it('it creates an action to logout', () => {
    const action = logout();
    expect(action).toEqual(logout());
  });

  it('it creates an action to displayNotificationDrawer', () => {
    const action = displayNotificationDrawer();
    expect(action).toEqual(displayNotificationDrawer());
  });

  it('it creates an action to hideNotificationDrawer', () => {
    const action = hideNotificationDrawer();
    expect(action).toEqual(hideNotificationDrawer());
  });
});
