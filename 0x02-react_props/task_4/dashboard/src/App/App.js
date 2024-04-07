import React, {Fragment} from 'react';
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";


function App( {isLoggedIn} ) {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <hr/>
        {
          isLoggedIn === false &&
          <Login />
        }
        {
          isLoggedIn === true &&
          <CourseList />
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
