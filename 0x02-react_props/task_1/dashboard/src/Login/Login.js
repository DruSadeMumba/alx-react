import React from 'react';
import './Login.css';

function Login() {
return (
  <div className="App-body">
    <p>Login to access the full dashboard</p>
    <div className="login">
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" />
      <button type="submit">OK</button>
    </div>
  </div>
  );
}

export default Login;
