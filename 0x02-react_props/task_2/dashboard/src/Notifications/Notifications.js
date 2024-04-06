import React from 'react';
import './Notifications.css';
import closeIcon from '../Assets/close-icon.png';
import {getLatestNotification} from '../utils/utils';
import NotificationItem from "./NotificationItem";

export function Notifications() {
  const clsBtnClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{__html: getLatestNotification()}}/>
      </ul>
      <button
        style={{
          position: "absolute",
          top: "5px",
          right: "0",
          backgroundColor: "transparent",
          cursor: "pointer",
          border: "none",
        }}
        aria-label="Close"
        onClick={clsBtnClick}
      >
        <img src={closeIcon} alt="close"
          style={{width: "15px", height: "15px",}}
        />
      </button>
    </div>
  );
}
