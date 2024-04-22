import React from "react";
import {bool, number, oneOfType, string} from "prop-types";
import {StyleSheet, css} from "aphrodite";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = {
    backgroundColor: isHeader ? "#deb5b545" : "#f5f5f5ab"
  };

  return (
    <tr style={rowStyle}>
      {isHeader ? (
        <>
          {textSecondCell ? (
            <>
              <th className={css(styles.alignLeft)}>
                <div className={css(styles.CourseListRow)}>
                  {textFirstCell}
                </div>
              </th>
              <th className={css(styles.alignLeft)}>
                <div className={css(styles.CourseListRow)}>
                  {textSecondCell}
                </div>
              </th>
            </>
          ) : (
            <th colSpan="2">
              <div className={css(styles.CourseListRow)}>
                {textFirstCell}
              </div>
            </th>
          )}
        </>
      ) : (
        <>
          <td className={css(styles.td)}>{textFirstCell}</td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: bool,
  textFirstCell: string.isRequired,
  textSecondCell: oneOfType([string, number,]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  CourseListRow: {
    borderBottom: 'lightgrey 1px solid',
    padding: '0.45rem 0.5rem',
    fontsize: 'large',
  },

  alignLeft: {
    textAlign: "left",
  },

  td: {
    padding: '0.25rem 0.5rem',
  }
});

export default CourseListRow;
