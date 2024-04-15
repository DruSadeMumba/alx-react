import React, {Fragment} from 'react';
import closeIcon from '../Assets/close-icon.png';
import NotificationItem from "./NotificationItem";
import {arrayOf, bool} from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import {StyleSheet, css} from "aphrodite";


class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
    this.clsBtnClick = this.clsBtnClick.bind(this);
    this.displayDrawer = this.props.displayDrawer;
    this.listNotifications = this.props.listNotifications;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  clsBtnClick = () => {
    console.log("Close button has been clicked");
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    return (
      <Fragment>
        {
          !this.displayDrawer &&
          <div className={css(styles.menuItem)}>Your notifications</div>
        }
        {
          this.displayDrawer &&
          <div className="Notifications">
            <div className={css(styles.overlay)} />
            <div className={css(styles.Notifications)}>
              {!this.listNotifications || this.listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                <div>
                  <p>Here is the list of notifications</p>
                  <ul className={css(styles.notificationList)}>
                    {this.listNotifications.map((notification) => (
                      <NotificationItem key={notification.id} type={notification.type} value={notification.value}
                                        html={notification.html} markAsRead={this.markAsRead} id={notification.id}/>
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
                  zIndex: '1000',
                }}
                aria-label="Close"
                onClick={this.clsBtnClick}
              >
                <img src={closeIcon} alt="close"
                     style={{width: "15px", height: "15px",}}
                />
              </button>
            </div>
          </div>
        }
      </Fragment>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: bool,
  listNotifications: arrayOf(NotificationItemShape),
};

const bounceAnime = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
};

const opacityAnime = {
  '0%': {
    opacity: 0.5,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0.5,
  },
};

const styles = StyleSheet.create({
  menuItem: {
    position: 'relative',
    zIndex: 100,
    textAlign: 'right',
    ":hover": {
      animationName: [opacityAnime, bounceAnime],
      animationDuration: '1s, .5s',
      animationIterationCount: '3',
    },
  },

  Notifications: {
    border: '#df344b dashed 1px',
    paddingLeft: '5px',
    paddingRight: '5vw',
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    marginBottom: '50px',
    '@media (max-width: 900px)': {
      border: 'none',
      zIndex: '999',
      width: '93vw',
      fontSize: '20px',
    }
  },

  notificationList: {
    marginTop: '5px',
    '@media (max-width: 900px)': {
      listStyle: 'none',
      padding: 0,
    }
  },

  overlay: {
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'white',
      zIndex: '998',
    },
  },
});

export default Notifications;
