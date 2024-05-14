import React from "react";
import logo from '../Assets/holberton-logo.jpg';
import {StyleSheet, css} from "aphrodite";
import AppContext from "../App/AppContext";
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';


const mapStateToProps = (state) => {
  const user = state && typeof state.get === 'function' ? state.get('user') : state.user;
  return {
    user: user,
  };
};

const mapDispatchToProps = {
  logout
};


export class Header extends React.Component {
  render() {
    const {user, logOut} = this.props;
    return (
      <header className={css(styles["App-header"])}>
        <img src={logo} alt="logo" className={css(styles.AppLogo)}/>
        <h1 className={css(styles.H1)}>School dashboard</h1>
        {
          user &&
          <section id="logoutSection" className={css(styles["logout"])}>
            Welcome {user.email} <a href="" onClick={logOut} className={css(styles.link)}> (logout)</a>
          </section>
        }
      </header>
    );
  }
}

Header.defaultProps = {
  logOut: () => {},
  user: null,
};

Header.propTypes = {
  logOut: func,
  user: object,
};

const styles = StyleSheet.create({
  "App-header": {
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'start',
    fontSize: 'calc(1rem + 0.5vw)',
    color: '#df344b',
    '@media (max-width: 900px)': {
      fontSize: 'calc(1rem + .5vw)'
    },
  },
  AppLogo: {
    height: 'calc(20vh + 3vw)'
  },
  H1: {
    paddingTop: '6vh',
  },
  "logout": {
    color: '#6c6969',
  },
  link: {
    color: '#df344b',
    textDecoration: 'none',
    cursor: 'pointer'
  }
});

Header.contextType = AppContext;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
