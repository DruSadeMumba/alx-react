import React from "react";
import './CourseList.css';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr>
      {isHeader ? (
        <>
          {textSecondCell ? (
            <>
              <th className="align-left">{textFirstCell}</th>
              <th className="align-left">{textSecondCell}</th>
            </>
          ) : (
            <th colSpan="2">{textFirstCell}</th>
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

export default CourseListRow;
