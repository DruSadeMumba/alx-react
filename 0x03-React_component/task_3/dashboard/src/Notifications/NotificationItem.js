import React, {Component, Fragment} from "react";
import {func, number, shape, string} from "prop-types";

class NotificationItem extends Component {
  render() {
    const {type, value, html, markAsRead, id} = this.props;
    return (
      <Fragment>
        {
          html !== undefined &&
          <li className={`NotificationItem ${type}`} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}/>
        }
        {
          html === undefined &&
          <li className={`NotificationItem ${type}`} onClick={() => markAsRead(id)}>{value}</li>
        }
      </Fragment>
    );
  }
}

NotificationItem.propTypes = {
  type: string.isRequired,
  value: string,
  html: shape({
    __html: string
  }),
  markAsRead: func,
  id: number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
