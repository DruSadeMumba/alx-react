import React from 'react';

export const user = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export function logOut() {
  user.isLoggedIn = false;
}

const AppContext = React.createContext({
  user,
  logOut,
});

const AppProvider = AppContext.Provider
export {AppProvider}
export default AppContext
