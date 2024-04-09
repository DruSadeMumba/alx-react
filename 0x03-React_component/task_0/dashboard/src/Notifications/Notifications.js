import React, {Fragment} from 'react';
import './Notifications.css';
import closeIcon from '../Assets/close-icon.png';
import NotificationItem from "./NotificationItem";

function Notifications({displayDrawer, listNotifications}) {
  const clsBtnClick = () => {
    console.log("Close button has been clicked");
  };
  return (
    <Fragment>
      <div className="menuItem">Your notifications</div>
      {
        displayDrawer &&
        <div className="Notifications">
          {!listNotifications || listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <div>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map((notification) => (
                  <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html}/>
                ))}
              </ul>
            </div>
          )}
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
      }
    </Fragment>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
