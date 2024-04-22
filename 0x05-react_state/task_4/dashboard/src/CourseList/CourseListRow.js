import React from "react";
import {bool, number, oneOfType, string} from "prop-types";
import {StyleSheet, css} from "aphrodite";

function CourseListRow({ isHeader, textSecondCell, textThirdCell }) {
  const [rowCheck, setRowCheck] = React.useState(false);

  const rowStyle = {
    backgroundColor: isHeader ? "#deb5b545" : (rowCheck ? "#e6e4e4" : "#f5f5f5ab")
  };

  const handleRowCheck = () => {
    setRowCheck(!rowCheck);
  };

  return (
    <tr style={rowStyle}>
      {isHeader ? (
        <>
          {textThirdCell ? (
            <>
              <th className={css(styles.checkbox)}></th>
              <th className={css(styles.alignLeft)}>
                <div className={css(styles.CourseListRow)}>
                  {textSecondCell}
                </div>
              </th>
              <th className={css(styles.alignLeft)}>
                <div className={css(styles.CourseListRow)}>
                  {textThirdCell}
                </div>
              </th>
            </>
          ) : (
            <th colSpan="2">
              <div className={css(styles.CourseListRow)}>
                {textSecondCell}
              </div>
            </th>
          )}
        </>
      ) : (
        <>
          <td className={css(styles.checkbox)}>
            <input type="checkbox" checked={rowCheck} onChange={handleRowCheck} />
          </td>
          <td className={css(styles.td)}>{textSecondCell}</td>
          <td className={css(styles.td)}>{textThirdCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: bool,
  textSecondCell: string.isRequired,
  textThirdCell: oneOfType([string, number,]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textThirdCell: null,
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
  },

});

export default CourseListRow;
