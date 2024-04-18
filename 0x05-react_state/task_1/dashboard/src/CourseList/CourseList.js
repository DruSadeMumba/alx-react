import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from "prop-types";
import {StyleSheet, css} from 'aphrodite';

function CourseList({ listCourses }) {
  if (listCourses.length === 0) {
    console.log("No course available yet");
    return (
      <div className={css(styles.CourseList)}>
        No course available yet
      </div>);
  } else {
    return (
      <table id="CourseList" className={css(styles.CourseList)}>
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

const styles = StyleSheet.create({
  CourseList: {
    width: '90vw',
    margin: '2.5rem auto',
    borderCollapse: 'collapse',
    border: 'lightgrey 1px solid',
  },
});

export default CourseList;
