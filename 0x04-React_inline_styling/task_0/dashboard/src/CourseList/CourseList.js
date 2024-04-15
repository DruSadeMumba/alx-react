import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import './CourseList.css';
import PropTypes from "prop-types";

function CourseList({ listCourses }) {
  if (listCourses.length === 0) {
    console.log("No course available yet");
    return (<div>No course available yet</div>);
  } else {
    return (
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true}/>
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
        </thead>
        <tbody>
          {
            listCourses.map(course => {
              return (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>);
            })
          }
        </tbody>
      </table>
    );
  }
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
