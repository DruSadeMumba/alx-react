import React, {Fragment, useMemo} from "react";
import {func, number, shape, string} from "prop-types";
import {StyleSheet, css} from "aphrodite";

const NotificationItem = ({ type, value, html, markAsRead, id }) => {
  const renderContent = useMemo(() => {
    const notificationType = css(
      type === "default" ? styles.default : styles.urgent
    );
    if (html) {
      return (
        <li className={`NotificationItem ${notificationType}`} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}/>
      );
    } else {
      return (
        <li className={`NotificationItem ${notificationType}`} onClick={() => markAsRead(id)}>{value}</li>
      );
    }
  }, [type, value, html, markAsRead, id]);
  return (
    <Fragment>
      <div className={css(styles.renderContent)}>
        {renderContent}
      </div>
    </Fragment>
  );
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

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
  renderContent: {
    '@media (max-width: 900px)': {
      padding: '10px 8px',
      borderBottom: '1px solid black',
    }
  }
});
export default NotificationItem;
