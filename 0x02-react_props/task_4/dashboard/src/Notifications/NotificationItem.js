import React, {Fragment} from "react";
import PropTypes from "prop-types";

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
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  })
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
