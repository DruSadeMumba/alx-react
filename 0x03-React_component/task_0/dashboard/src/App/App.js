import React from 'react';
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import {getLatestNotification} from "../utils/utils";

class App extends React.Component {
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
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Notifications listNotifications={this.listNotifications} />
          <Header />
          <hr/>
          {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
