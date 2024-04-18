import React from "react";
import logo from '../Assets/holberton-logo.jpg';
import {StyleSheet, css} from "aphrodite";
import AppContext from "../App/AppContext";

class Header extends React.Component {
  render() {
    const {user, logOut} = this.context;
    return (
      <header className={css(styles["App-header"])}>
        <img src={logo} alt="logo" className={css(styles.AppLogo)}/>
        <h1 className={css(styles.H1)}>School dashboard</h1>
        {
          user.isLoggedIn &&
          <section id="logoutSection">
            Welcome {user.email} <a href="" onClick={() => logOut}>(logout)</a>
          </section>
        }
      </header>
    );
  }
}

const styles = StyleSheet.create({
  "App-header": {
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'start',
    fontSize: 'calc(1rem + 0.5vw)',
    color: '#df344b'
  },
  AppLogo: {
    height: 'calc(20vh + 3vw)'
  },
  H1: {
    paddingTop: '5.5vh'
  }
});

Header.contextType = AppContext;
export default Header;
