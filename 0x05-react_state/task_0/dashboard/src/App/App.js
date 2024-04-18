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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.state = {
      displayDrawer: false,
    };
  }

  handleDisplayDrawer = () => {
    this.setState({displayDrawer: true});
  };

  handleHideDrawer = () => {
    console.log("Close button has been clicked");
    this.setState({displayDrawer: false});
  };

  listNotifications = [
    { id: 1, type: "default", value: "New course available", },
    { id: 2, type: "urgent", value: "New resume available", },
    { id: 3, type: "urgent", html: {__html: getLatestNotification()}, },
  ];
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

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.header)}>
          <Notifications
            listNotifications={this.listNotifications}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <Header />
          <main className={css(styles.main)}>
            <hr className={css(styles.hr)}/>
            {
              this.props.isLoggedIn ?
                <BodySectionWithMarginBottom title='Course list'>
                  <CourseList listCourses={this.listCourses} />
                </BodySectionWithMarginBottom>
                :
                <BodySectionWithMarginBottom title='Log in to continue'>
                  <Login />
                </BodySectionWithMarginBottom>
            }
            <BodySection title='News from the School'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum eum id inventore minima pariatur provident quam rem sit tempora</p>
            </BodySection>
          </main>
          <Footer />
        </div>
      </React.Fragment>
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
    minHeight: '70vh',
  },
  hr: {
    border: 'none',
    width: '100%',
    height: '2px',
    backgroundColor: '#df344b',
  }
});

export default App;
