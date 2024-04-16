import React from "react";
import './CourseList.css';
import {bool, number, oneOfType, string} from "prop-types";

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
              <th className="align-left">
                {textFirstCell}
              </th>
              <th className="align-left">
                {textSecondCell}
              </th>
            </>
          ) : (
            <th colSpan="2">
              {textFirstCell}
            </th>
          )}
        </>
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
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

export default CourseListRow;
