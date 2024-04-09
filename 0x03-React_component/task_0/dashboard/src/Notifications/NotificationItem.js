import React, {Fragment} from "react";
import {shape, string} from "prop-types";

function NotificationItem({ type, value, html}) {
  return (
    <Fragment>
      {
        html !== undefined &&
        <li className={`NotificationItem ${type}`} dangerouslySetInnerHTML={html}/>
      }
      {
        html === undefined &&
        <li className={`NotificationItem ${type}`}>{value}</li>
      }
    </Fragment>
  );
}

NotificationItem.propTypes = {
  type: string.isRequired,
  value: string,
  html: shape({
    __html: string
  })
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
