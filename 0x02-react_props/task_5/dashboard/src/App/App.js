import React, {Fragment} from 'react';
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import {getLatestNotification} from "../utils/utils";


function App( {isLoggedIn} ) {
  return (
    <Fragment>
      <Notifications listNotifications={[
          { id: 1, type: "default", value: "New course available", },
          { id: 2, type: "urgent", value: "New resume available", },
          { id: 3, type: "urgent", html: {__html: getLatestNotification()}, },
      ]}/>
      <div className="App">
        <Header />
        <hr/>
        {
          isLoggedIn === false &&
          <Login />
        }
        {
          isLoggedIn === true &&
          <CourseList listCourses={[
              { id: 1, name: "ES6", credit: 60, },
              { id: 2, name: "Webpack", credit: 20, },
              { id: 3, name: "React", credit: 40, },
            ]}/>
        }
        <Footer />
      </div>
    </Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
