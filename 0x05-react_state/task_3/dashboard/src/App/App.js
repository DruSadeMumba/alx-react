import React from 'react';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import {getLatestNotification} from "../utils/utils";
import {bool, func} from "prop-types";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import {StyleSheet, css} from 'aphrodite';
import AppContext from "./AppContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      displayDrawer: false,
      user: {email: '', password: '', isLoggedIn: false,},
      logOut: this.logOut,
      listNotifications: [
        { id: 1, type: "default", value: "New course available", },
        { id: 2, type: "urgent", value: "New resume available", },
        { id: 3, type: "urgent", html: {__html: getLatestNotification()}, },
      ],
    };
  }

  handleDisplayDrawer = () => {
    this.setState({displayDrawer: true});
  };

  handleHideDrawer = () => {
    console.log("Close button has been clicked");
    this.setState({displayDrawer: false});
  };

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
    console.log(`Notification ${id} has been marked as read and removed`);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  render() {
    return (
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut,}}>
        <React.Fragment>
          <div className={css(styles.header)}>
            <Notifications
              listNotifications={this.state.listNotifications}
              displayDrawer={this.state.displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
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
};

App.propTypes = {
  isLoggedIn: bool,
  logOut: func,
};

const styles = StyleSheet.create({
  App: {
    margin: 0,
    height: '100vh',
    fontFamily: 'Poppins, Roboto, sans-serif',
    webkitFontSmoothing: 'antialiased',
    mozOsxFontSmoothing: 'grayscale',
  },
  main: {
    maxHeight: '60vh',
    overflowY: 'scroll',
  },
  hr: {
    border: 'none',
    width: '100%',
    height: '2px',
    backgroundColor: '#df344b',
  },
  bodySectionP: {

  },
});

export default App;
