import React from "react";
import logo from '../Assets/holberton-logo.jpg';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" className="App-logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;