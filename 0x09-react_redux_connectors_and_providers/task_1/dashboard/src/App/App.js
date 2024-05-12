import React from 'react';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import { bool, func } from "prop-types";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite';
import AppContext from "./AppContext";
import { connect } from 'react-redux'
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible')
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

const listNotifications = [
  { id: 1, type: "default", value: "New course available", },
  { id: 2, type: "urgent", value: "New resume available", },
  { id: 3, type: "urgent", html: {__html: getLatestNotification()}, },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      user: {email: '', password: '', isLoggedIn: false,},
      logOut: this.logOut,
      listNotifications: listNotifications,
    };
  }

  logIn = (email, password) => {
    this.setState({user: {email: email, password: password, isLoggedIn: true}});
  };

  logOut = () => {
    this.setState({user: {email: '', password: '', isLoggedIn: false,},});
  };

  listCourses = [
    { id: 1, name: "ES6", credit: 60, },
    { id: 2, name: "Webpack", credit: 20, },
    { id: 3, name: "React", credit: 40, },
  ];

  handleKeydown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      event.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  };

  markNotificationAsRead = (id) => {
    let notList = this.state.listNotifications.filter((notification) => notification.id !== id);
    this.setState({ listNotifications: notList });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  render() {
    const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;
    const { listNotifications } = this.state;
    return (
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut,}}>
        <React.Fragment>
          <div className={css(styles.header)}>
            <Notifications
              listNotifications={listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={displayNotificationDrawer}
              handleHideDrawer={hideNotificationDrawer}
              markNotificationAsRead={this.markNotificationAsRead}
            />
            <Header />
            <hr className={css(styles.hr)}/>
            <main className={css(styles.main)}>
              {
                this.state.user.isLoggedIn ?
                  <BodySectionWithMarginBottom title='Course list'>
                    <CourseList listCourses={this.listCourses} />
                  </BodySectionWithMarginBottom>
                  :
                  <BodySectionWithMarginBottom title='Log in to continue'>
                    <Login logIn={this.logIn} />
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
  logOut: () => {},
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

App.propTypes = {
  isLoggedIn: bool,
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
