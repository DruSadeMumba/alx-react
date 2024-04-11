import React, {Fragment, useMemo} from "react";
import {func, number, shape, string} from "prop-types";

const NotificationItem = ({ type, value, html, markAsRead, id }) => {
  const renderContent = useMemo(() => {
    if (html) {
      return (
        <li className={`NotificationItem ${type}`} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}/>
      );
    } else {
      return (
        <li className={`NotificationItem ${type}`} onClick={() => markAsRead(id)}>{value}</li>
      );
    }
  }, [type, value, html, markAsRead, id]);
  return <Fragment>{renderContent}</Fragment>
};

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
