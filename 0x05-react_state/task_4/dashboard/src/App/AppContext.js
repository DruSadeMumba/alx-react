import React from 'react';

let user = {
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

export default AppContext
