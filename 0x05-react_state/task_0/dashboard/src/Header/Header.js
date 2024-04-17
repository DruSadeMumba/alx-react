import React from "react";
import logo from '../Assets/holberton-logo.jpg';
import {StyleSheet, css} from "aphrodite";

function Header() {
  return (
    <header className={css(styles["App-header"])}>
      <img src={logo} alt="logo" className={css(styles.AppLogo)} />
      <h1 className={css(styles.H1)}>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  "App-header": {
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'start',
    fontSize: 'calc(.5rem + 0.5vw)',
    color: '#df344b'
  },
  AppLogo: {
    height: 'calc(20vh + 3vw)'
  },
  H1: {
    paddingTop: '5.5vh'
  }
});
export default Header;
