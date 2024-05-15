import React from 'react';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { bool, func } from "prop-types";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite';
import AppContext from "./AppContext";
import { connect } from 'react-redux'
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } from '../actions/uiActionCreators';

export const mapStateToProps = (state) => {
  const isUserLoggedIn = state && typeof state.get === 'function' ? state.get('isUserLoggedIn') : state.ui.get('isUserLoggedIn');
  const isNotificationDrawerVisible = state && typeof state.get === 'function' ? state.get('isNotificationDrawerVisible') : state.ui.get('isNotificationDrawerVisible');

  return {
    isLoggedIn: isUserLoggedIn,
    displayDrawer: isNotificationDrawerVisible,
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  logIn: loginRequest,
  logout,
};

const listCourses = [
  { id: 1, name: "ES6", credit: 60, },
  { id: 2, name: "Webpack", credit: 20, },
  { id: 3, name: "React", credit: 40, },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.state = {
      user: {email: '', password: '', isLoggedIn: false,},
    };
  }

  handleKeydown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      event.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  render() {
    const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer, isLoggedIn, logIn } = this.props;
    const {user, logOut} = this.state;
    return (
      <AppContext.Provider value={{user, logOut,}}>
        <React.Fragment>
          <div className={css(styles.header)}>
            <Notifications
              displayDrawer={displayDrawer}
              handleDisplayDrawer={displayNotificationDrawer}
              handleHideDrawer={hideNotificationDrawer}
            />
            <Header />
            <hr className={css(styles.hr)}/>
            <main className={css(styles.main)}>
              {
                isLoggedIn ?
                  <BodySectionWithMarginBottom title='Course list'>
                    <CourseList listCourses={listCourses} />
                  </BodySectionWithMarginBottom>
                  :
                  <BodySectionWithMarginBottom title='Log in to continue'>
                    <Login logIn={logIn} />
                  </BodySectionWithMarginBottom>
              }
              <BodySection title='News from the School'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam dicta iure natus perspiciatis? Fugiat laudantium, nam nisi quis suscipit ut veniam.
                  Asperiores corporis doloribus esse laborum omnis? Exercitationem, incidunt voluptatem!<br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam dicta iure natus perspiciatis? Fugiat laudantium, nam nisi quis suscipit ut veniam.
                  Asperiores corporis doloribus esse laborum omnis? Exercitationem, incidunt voluptatem!<br/>
                </p>
              </BodySection>
            </main>
            <Footer />
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  logIn: () => {},
  logOut: () => {},
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

App.propTypes = {
  isLoggedIn: bool,
  displayDrawer: bool,
  logIn: func,
  logOut: func,
  displayNotificationDrawer: func,
  hideNotificationDrawer: func,
};

const styles = StyleSheet.create({
  App: {
    fontFamily: 'Poppins, sans-serif',
    margin: 0,
    maxHeight: '100vh',
    webkitFontSmoothing: 'antialiased',
    mozOsxFontSmoothing: 'grayscale',
  },
  main: {
    maxHeight: '55vh',
    height: 'fit-content',
    overflowY: 'scroll',
  },
  hr: {
    border: 'none',
    width: '100%',
    height: '2px',
    backgroundColor: '#df344b',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
