import React, {Fragment} from "react";

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

export default NotificationItem;
