import React, {Fragment} from 'react';
import './App.css';
import {Notifications} from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

function App() {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <hr/>
        <Login />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
